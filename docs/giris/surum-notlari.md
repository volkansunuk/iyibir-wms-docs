---
title: Sürüm Notları
sidebar_label: Sürüm Notları
sidebar_position: 3
---

# Sürüm Notları

## v1.0.0 — İlk Sürüm

**Yayın Tarihi:** 2025

iyibir WMS'in ilk kararlı sürümüdür. Bu sürüm, depo operasyonlarının dijitalleştirilmesi için temel modülleri içermektedir.

---

### Yeni Özellikler

#### Temel Platform
- .NET 10 tabanlı modüler monolitik mimari
- .NET Aspire orchestration ile servis yönetimi
- Dapper + SQL Server veri erişim katmanı
- Blazor Server tabanlı web arayüzü
- .NET MAUI tabanlı Android ve iOS mobil uygulaması

#### Logo Tiger ERP Entegrasyonu
- GoDb üzerinden salt okunur bağlantı
- Satın alma siparişleri senkronizasyonu
- Satış siparişleri ve sevkiyat siparişleri senkronizasyonu
- Üretim emirleri ve fason emirleri çekimi
- Malzeme kartı ve stok bilgisi senkronizasyonu
- WMS'ten Tiger'a irsaliye yazma desteği

#### Mal Kabul Modülü
- Serbest mal kabul
- Siparişe bağlı mal kabul (Logo Tiger PO entegrasyonu)
- İade mal kabul
- İrsaliye iadesi

#### Malzeme Hareketleri Modülü
- Malzeme giriş / çıkış
- Depo içi transfer
- Lot oluşturma, bölme ve birleştirme

#### Sevkiyat Modülü
- Serbest sevkiyat
- Siparişe bağlı sipariş toplama (FIFO/FEFO desteği)
- Sevkiyat transferi
- İade sevkiyat

#### Sayım Modülü
- Depo bazlı tam sayım
- Lokasyon bazlı kısmi sayım
- Ürün bazlı sayım
- Sayım fark raporu

#### Üretim Modülü
- Logo Tiger üretim emrine bağlı üretim
- Hızlı üretim (emrisiz)
- Yeniden işleme (rework)

#### Fason Modülü
- Fason çıkış (taşerona malzeme gönderme)
- Fason kabul (taşerondan ürün alma)
- Fason transfer ve fason üretim

#### Talep Modülü
- Talep oluşturma
- Talep karşılama
- Bekleyen talep yönetimi

#### AI Agentlar (MCP)
- 7 uzman ajan: Stok, Satış, Satın Alma, Üretim, Talep, Sayım, Fason
- MCP (Model Context Protocol) protokolü
- Salt okunur, şifreli bağlantı
- Türkçe doğal dil desteği

#### Teknik Altyapı
- Barkod desteği: Code128, EAN-13, QR Code, DataMatrix
- Offline mod (bazı operasyonlar için)
- Otomatik senkronizasyon
- Rol tabanlı erişim kontrolü (Admin, Yönetici, Operatör)
- Push bildirim desteği
- Excel ve PDF rapor dışa aktarımı

---

### Bilinen Sınırlamalar

- Offline modda AI ajan sorguları yapılamaz.
- Fason emirleri yalnızca Logo Tiger üzerinden oluşturulabilir; WMS'ten yeni fason emri açılamaz.
- Çoklu dil desteği (İngilizce) sonraki sürümde eklenecektir.

---

### Sonraki Sürüm (v1.1.0) Planı

- Gelişmiş barkod etiket tasarım editörü
- Toplu lot aktarım aracı
- Depo haritası görselleştirmesi
- iOS TestFlight dağıtım iyileştirmeleri
- API dokümantasyonu (Swagger/OpenAPI)
