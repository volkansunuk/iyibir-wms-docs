---
title: Kurulum & Yapılandırma
sidebar_label: Genel Bakış
sidebar_position: 1
slug: /kurulum
---

# Kurulum & Yapılandırma

Bu bölüm, iyibir WMS'i sunucuya kurmak, yapılandırmak ve Logo Tiger ERP ile entegre etmek için gereken tüm adımları kapsar.

---

## Kurulum Adımları Özeti

| Adım | Konu | Süre (tahmini) |
|---|---|---|
| 1 | [Windows Server & IIS Kurulumu](./windows-server-iis) | 30 dk |
| 2 | [SQL Server Yapılandırması](./sql-server) | 20 dk |
| 3 | [Logo Tiger Entegrasyonu](./logo-tiger-entegrasyon) | 15 dk |
| 4 | [Kullanıcı & Roller](./kullanici-roller) | 10 dk |
| 5 | [Depo & Lokasyon Yapılandırması](./depo-lokasyon-yapilandirma) | Depoya göre değişir |

:::tip
Tüm adımları sırasıyla takip edin. Logo Tiger entegrasyonu, SQL Server konfigürasyonu tamamlanmadan önce test edilemez.
:::

---

## Gerekli Bileşenler

Kuruluma başlamadan önce aşağıdaki bileşenlerin hazır olduğundan emin olun:

- **Windows Server 2019+** — IIS etkin
- **.NET 10 Hosting Bundle** — [Microsoft İndirme Merkezi](https://dotnet.microsoft.com/download/dotnet/10.0)
- **SQL Server 2019+** — Express dışı sürüm
- **iyibir WMS Kurulum Paketi** — Yetkili kanaldan temin edilmiş
- **Logo Tiger GoDb Bağlantı Bilgileri** — Salt okunur kullanıcı adı ve şifre

---

## Kurulum Mimarisi

```
[Kullanıcı/Mobil]
     |
     | HTTPS (443)
     v
[IIS — iyibir WMS Web/API]
     |                    |
     | SQL (1433)          | SQL (1433) [Salt okunur]
     v                    v
[WMS SQL Server]    [Logo Tiger SQL Server]
```

:::info
iyibir WMS kendi veritabanına hem okuma hem yazma yaparken, Logo Tiger veritabanına yalnızca okuma işlemi gerçekleştirir. Tiger'a veri yazma işlemi Logo'nun kendi API'si üzerinden yürütülür.
:::

---

## Kurulumdan Sonra

Kurulum tamamlandıktan sonra aşağıdaki kontrolleri gerçekleştirin:

1. `https://<sunucu>/health` adresinin `200 OK` döndürdüğünü doğrulayın.
2. Web arayüzüne yönetici hesabıyla giriş yapın.
3. **Ayarlar > Entegrasyon Durumu** ekranında Logo Tiger bağlantısının yeşil göründüğünü kontrol edin.
4. Bir test kullanıcısı oluşturun ve mobil uygulamadan giriş yaptığını doğrulayın.
5. Sistem loglarında hata olmadığını **Yönetim > Sistem Logları** ekranından kontrol edin.
