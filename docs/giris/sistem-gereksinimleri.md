---
title: Sistem Gereksinimleri
sidebar_label: Sistem Gereksinimleri
sidebar_position: 2
---

# Sistem Gereksinimleri

iyibir WMS'i kurmadan önce aşağıdaki donanım ve yazılım gereksinimlerinin karşılandığından emin olun.

---

## Sunucu Gereksinimleri

| Bileşen | Minimum | Önerilen |
|---|---|---|
| İşletim Sistemi | Windows Server 2019 | Windows Server 2022 |
| İşlemci | 4 çekirdek, 2.4 GHz | 8 çekirdek, 3.0 GHz+ |
| RAM | 8 GB | 16 GB+ |
| Disk | 50 GB SSD | 200 GB NVMe SSD |
| .NET Runtime | .NET 10 Hosting Bundle | .NET 10 Hosting Bundle |
| Web Sunucu | IIS 10+ | IIS 10+ |
| Veritabanı | SQL Server 2019 | SQL Server 2022 |

:::tip
Üretim ortamında WMS uygulama sunucusu ile SQL Server'ı ayrı fiziksel makinelere kurmanız, hem performans hem de güvenlik açısından önerilir.
:::

### Gerekli IIS Özellikleri

Kurulum öncesinde aşağıdaki IIS rol servisleri etkinleştirilmiş olmalıdır:

- Web Sunucu (IIS)
- .NET Extensibility 4.8
- ASP.NET 4.8
- ISAPI Extensions / ISAPI Filters
- Windows Authentication (kurumsal SSO kullanılıyorsa)
- WebSocket Protocol

---

## Veritabanı Gereksinimleri

- **SQL Server 2019** veya üzeri (Express sürümü üretim için desteklenmez)
- WMS için ayrı bir veritabanı oluşturulmalıdır (örn. `IyibirWMS`)
- SQL Server Agent servisi etkin olmalıdır (bakım planları için)
- WMS uygulama kullanıcısına `db_owner` yetkisi verilmelidir

:::warning
SQL Server Express, maksimum 10 GB veritabanı boyutu ve SQL Agent yokluğu nedeniyle üretim kullanımına uygun değildir.
:::

---

## Logo Tiger ERP Gereksinimleri

- Logo Tiger 3 veya Tiger Go sürümü
- GoDb bağlantısı için SQL Server'a erişim
- **Salt okunur** bir GoDb SQL kullanıcısı (sysadmin değil, yalnızca SELECT yetkili)
- WMS sunucusu ile Tiger veritabanı sunucusu arasında TCP 1433 portu açık olmalıdır

---

## Mobil Cihaz Gereksinimleri

### Android
- Android 8.0 (Oreo) veya üzeri
- Minimum 3 GB RAM
- Kamera veya endüstriyel barkod okuyucu desteği
- Önerilen: Zebra TC serisi, Honeywell Dolphin serisi

### iOS
- iOS 14.0 veya üzeri
- iPhone 8 / iPad (6. nesil) veya üzeri
- TestFlight uygulaması kurulu olmalıdır

:::info Endüstriyel Okuyucu
Yoğun barkod tarama operasyonlarında (günde 500+ tarama) Zebra veya Honeywell endüstriyel el terminalleri kullanılması önerilir. Bu cihazlar kamera tabanlı taramaya kıyasla 3-5 kat daha hızlıdır.
:::

---

## Ağ Gereksinimleri

| Bağlantı | Protokol | Port |
|---|---|---|
| WMS Web/API | HTTPS | 443 |
| WMS API (HTTP fallback) | HTTP | 80 |
| SQL Server | TCP | 1433 |
| Logo Tiger GoDb | TCP | 1433 |
| Push Bildirimler | HTTPS | 443 |

:::tip
Mobil cihazların WMS sunucusuna erişimi için Wi-Fi altyapısının depo genelinde kesintisiz kapsama sağlaması gerekir. Depo içi Wi-Fi nokta sayısını ve sinyal gücünü operasyon başlamadan önce test edin.
:::

---

## İstemci Tarayıcı Gereksinimleri (Web Arayüzü)

Web arayüzüne erişim için modern bir tarayıcı yeterlidir:

- Microsoft Edge 90+
- Google Chrome 90+
- Mozilla Firefox 88+
- Safari 14+

Internet Explorer desteklenmez.
