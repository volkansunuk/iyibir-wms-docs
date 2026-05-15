---
title: Logo Tiger ERP Entegrasyonu
sidebar_label: Logo Tiger Entegrasyonu
sidebar_position: 4
---

# Logo Tiger ERP Entegrasyonu

iyibir WMS, Logo Tiger ERP sistemi ile **GoDb (salt okunur SQL bağlantısı)** üzerinden entegre olur. Bu entegrasyon sayesinde satın alma siparişleri, satış siparişleri, üretim emirleri ve malzeme bilgileri WMS'e aktarılır.

---

## Entegrasyon Mimarisi

```
iyibir WMS
    │
    │  GoDb (SQL — Salt Okunur, Port 1433)
    │  SELECT sorguları
    ▼
Logo Tiger SQL Server (TIGER veritabanı)

iyibir WMS
    │
    │  Logo Tiger API (İrsaliye Yazma)
    │  HTTP/SOAP
    ▼
Logo Tiger Uygulama Sunucusu
```

:::info Önemli Mimari Bilgi
iyibir WMS, Tiger veritabanına **doğrudan yazma yapmaz**. Yalnızca SELECT sorguları çalıştırır. İrsaliye ve sevkiyat belgesi oluşturma işlemleri Logo Tiger'ın kendi API katmanı üzerinden yürütülür.
:::

---

## 1. Salt Okunur GoDb Kullanıcısı Oluşturma

Logo Tiger'ın kurulu olduğu SQL Server'da aşağıdaki betiği çalıştırın:

```sql
-- Salt okunur GoDb kullanıcısı oluştur
CREATE LOGIN tiger_wms_readonly
    WITH PASSWORD = 'Guc1u_ReadOnly_Sifre!',
    DEFAULT_DATABASE = <TIGER_VERITABANI_ADI>,
    CHECK_EXPIRATION = OFF,
    CHECK_POLICY = ON;
GO

USE <TIGER_VERITABANI_ADI>;
GO

CREATE USER tiger_wms_readonly FOR LOGIN tiger_wms_readonly;
GO

-- Yalnızca SELECT yetkisi ver
ALTER ROLE db_datareader ADD MEMBER tiger_wms_readonly;
GO

-- Yazma yetkilerini açıkça reddet
DENY INSERT, UPDATE, DELETE ON SCHEMA::dbo TO tiger_wms_readonly;
GO
```

:::warning Kritik Güvenlik Uyarısı
Tiger veritabanı bağlantısı için **asla** Logo Tiger yönetici hesabını veya `sa` kullanıcısını kullanmayın. Yalnızca `db_datareader` yetkisine sahip, ayrı bir kullanıcı tanımlayın. Bu kural hem güvenlik hem de veri bütünlüğü açısından zorunludur.
:::

---

## 2. Ağ Erişiminin Yapılandırılması

WMS sunucusunun Tiger SQL Server'a erişebilmesi için:

```powershell
# Tiger SQL Server güvenlik duvarında 1433 portunu aç
# (Tiger SQL Server üzerinde çalıştırın)
New-NetFirewallRule -DisplayName "SQL Server WMS Erişimi" `
    -Direction Inbound `
    -Protocol TCP `
    -LocalPort 1433 `
    -RemoteAddress <WMS_SUNUCU_IP> `
    -Action Allow
```

SQL Server Configuration Manager'da **TCP/IP protokolünün** etkin olduğunu doğrulayın:
1. SQL Server Configuration Manager > SQL Server Network Configuration
2. `Protocols for MSSQLSERVER` > TCP/IP > Enabled: Yes

---

## 3. Bağlantı Dizesini Yapılandırma

`appsettings.json` dosyasına GoDb bağlantı dizesini ekleyin:

```json
{
  "ConnectionStrings": {
    "GoDbConnectionString": "Server=<TIGER_SQL_SUNUCU>,1433;Database=<TIGER_DB_ADI>;User Id=tiger_wms_readonly;Password=Guc1u_ReadOnly_Sifre!;TrustServerCertificate=True;Connection Timeout=30;"
  },
  "LogoTiger": {
    "FirmaNo": "001",
    "SubeNo": "000",
    "DonemNo": "01"
  }
}
```

:::tip
Tiger veritabanı adı genellikle `LG_001` gibi bir format taşır; burada `001` firma numarasıdır. Kesin veritabanı adını Logo Tiger yöneticinizden alın.
:::

---

## 4. Bağlantıyı Test Etme

Web arayüzünden test:
1. **Ayarlar > Entegrasyon Durumu** menüsüne gidin.
2. **Logo Tiger GoDb Bağlantısı** satırında **Test Et** butonuna tıklayın.
3. Yeşil "Bağlantı Başarılı" mesajı görünüyorsa entegrasyon hazırdır.

Komut satırından test:

```powershell
$conn = New-Object System.Data.SqlClient.SqlConnection
$conn.ConnectionString = "Server=<TIGER_SQL>;Database=<TIGER_DB>;User Id=tiger_wms_readonly;Password=şifre;TrustServerCertificate=True;"
try {
    $conn.Open()
    $cmd = $conn.CreateCommand()
    $cmd.CommandText = "SELECT TOP 1 CODE FROM LG_001_ITEMS"
    $result = $cmd.ExecuteScalar()
    Write-Host "Bağlantı başarılı. İlk malzeme kodu: $result"
} catch {
    Write-Host "Hata: $_"
} finally {
    $conn.Close()
}
```

---

## 5. Senkronizasyon Parametreleri

WMS'in Tiger'dan hangi verileri çekeceğini `appsettings.json` ile kontrol edebilirsiniz:

```json
{
  "LogoTiger": {
    "FirmaNo": "001",
    "SubeNo": "000",
    "DonemNo": "01",
    "SyncIntervalMinutes": 15,
    "SyncItems": true,
    "SyncPurchaseOrders": true,
    "SyncSalesOrders": true,
    "SyncProductionOrders": true,
    "SyncFasonOrders": true
  }
}
```

---

## Sıkça Karşılaşılan Sorunlar

| Sorun | Olası Neden | Çözüm |
|---|---|---|
| Bağlantı zaman aşımı | Güvenlik duvarı engeli | Port 1433'ü açın |
| Giriş başarısız | Yanlış kullanıcı/şifre | Kullanıcı adı ve şifreyi kontrol edin |
| Tablo bulunamadı | Yanlış veritabanı adı | Tiger DB adını doğrulayın |
| Yetkisiz erişim | Eksik SELECT yetkisi | `db_datareader` rolünü atayın |
