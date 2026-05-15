---
title: SQL Server Yapılandırması
sidebar_label: SQL Server
sidebar_position: 3
---

# SQL Server Yapılandırması

iyibir WMS, verilerini SQL Server üzerinde tutar. Bu kılavuz veritabanı oluşturma, kullanıcı yetkilendirme ve bağlantı dizesi yapılandırmasını açıklar.

---

## 1. SQL Server Kurulumu

SQL Server 2019 veya üzerini Microsoft'un resmi kanalından indirin ve kurun. Kurulum sırasında şu seçenekleri belirleyin:

- **Database Engine Services** — Zorunlu
- **SQL Server Agent** — Önerilir (bakım planları için)
- **Full-Text Search** — Opsiyonel
- **Kimlik Doğrulama Modu:** Mixed Mode (Windows Authentication + SQL Server Authentication)

:::warning
SQL Server Express sürümü üretim ortamında desteklenmez. Maksimum 10 GB veritabanı boyutu sınırı ve SQL Agent eksikliği nedeniyle yeterli değildir.
:::

---

## 2. Veritabanı Oluşturma

SQL Server Management Studio (SSMS) veya sqlcmd ile aşağıdaki betiği çalıştırın:

```sql
-- WMS veritabanını oluştur
CREATE DATABASE IyibirWMS
    ON PRIMARY (
        NAME = N'IyibirWMS',
        FILENAME = N'C:\SQLData\IyibirWMS.mdf',
        SIZE = 512MB,
        FILEGROWTH = 256MB
    )
    LOG ON (
        NAME = N'IyibirWMS_log',
        FILENAME = N'C:\SQLLogs\IyibirWMS_log.ldf',
        SIZE = 128MB,
        FILEGROWTH = 64MB
    );
GO

-- Uyumluluk düzeyini ayarla
ALTER DATABASE IyibirWMS SET COMPATIBILITY_LEVEL = 150;
GO

-- Recovery model
ALTER DATABASE IyibirWMS SET RECOVERY FULL;
GO
```

:::tip
Veri dosyaları (`.mdf`) ve log dosyalarını (`.ldf`) farklı disk sürücülerine yerleştirmek performansı önemli ölçüde artırır.
:::

---

## 3. SQL Kullanıcısı Oluşturma

```sql
-- SQL login oluştur
CREATE LOGIN IyibirWmsApp
    WITH PASSWORD = 'Guc1u_Bir_Sifre!',
    DEFAULT_DATABASE = IyibirWMS,
    CHECK_EXPIRATION = OFF,
    CHECK_POLICY = ON;
GO

-- Kullanıcıyı veritabanına ekle
USE IyibirWMS;
GO

CREATE USER IyibirWmsApp FOR LOGIN IyibirWmsApp;
GO

-- db_owner yetkisi ver (uygulama migrasyonları için gerekli)
ALTER ROLE db_owner ADD MEMBER IyibirWmsApp;
GO
```

:::info
İlk kurulum ve migrasyon tamamlandıktan sonra isterseniz `db_owner` yerine daha kısıtlı yetkiler tanımlayabilirsiniz. Ancak şema değişiklikleri için `db_owner` veya `db_ddladmin` gereklidir.
:::

---

## 4. Bağlantı Dizesi Yapılandırması

`appsettings.json` dosyasını aşağıdaki gibi düzenleyin:

```json
{
  "ConnectionStrings": {
    "WmsDatabase": "Server=<sql-sunucu-adresi>;Database=IyibirWMS;User Id=IyibirWmsApp;Password=Guc1u_Bir_Sifre!;TrustServerCertificate=True;MultipleActiveResultSets=True;",
    "GoDbConnectionString": "Server=<tiger-sql-sunucu>;Database=<TIGER_DB>;User Id=tiger_readonly;Password=readonly_sifre;TrustServerCertificate=True;"
  }
}
```

:::warning
`appsettings.json` dosyasını kaynak kod deposuna (Git) asla eklemeyin. Üretim ortamında bağlantı dizeleri için Windows Secrets, Azure Key Vault veya çevre değişkenleri kullanın.
:::

---

## 5. SQL Server Agent Bakım Planı

Veritabanı bakımı için aşağıdaki görevleri SQL Agent ile zamanlayın:

```sql
-- İstatistikleri güncelle (haftalık)
USE IyibirWMS;
EXEC sp_updatestats;

-- Index yeniden oluştur (haftalık, düşük yoğunluk saatlerinde)
ALTER INDEX ALL ON dbo.StokHareketleri REBUILD;

-- Yedekleme (günlük)
BACKUP DATABASE IyibirWMS
    TO DISK = N'C:\Backup\IyibirWMS_Full.bak'
    WITH COMPRESSION, STATS = 10;
```

---

## 6. Bağlantıyı Test Etme

```powershell
# PowerShell ile bağlantı testi
$conn = New-Object System.Data.SqlClient.SqlConnection
$conn.ConnectionString = "Server=<sql-sunucu>;Database=IyibirWMS;User Id=IyibirWmsApp;Password=şifre;TrustServerCertificate=True;"
$conn.Open()
Write-Host "Bağlantı durumu: $($conn.State)"
$conn.Close()
```

Bağlantı başarılıysa `Bağlantı durumu: Open` çıktısını görürsünüz.
