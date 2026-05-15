---
title: Barkod Şablonları
sidebar_label: Barkod Şablonları
sidebar_position: 4
---

# Barkod Şablonları

Barkod Şablonları, depo etiketlerinin (ürün, lot, lokasyon, sevkiyat) tasarımını ve yazıcı ayarlarını yönetmenize olanak tanır.

---

## Etiket Tipleri

| Etiket Tipi | Kullanım Yeri | Varsayılan Format |
|---|---|---|
| Ürün Etiketi | Ürün/paket üzerine yapıştırma | Code128 + QR |
| Lot Etiketi | Lot bazlı takip | Code128 |
| Lokasyon Etiketi | Raf ve göz üzeri | Code128 |
| Sevkiyat Etiketi | Koli/palet üzeri | Code128 + Metin |
| Palette Etiketi | Büyük sevkiyatlar | GS1-128 |

---

## Şablon Oluşturma

1. **Yönetim > Barkod Şablonları > Yeni Şablon** butonuna tıklayın.
2. **Etiket Tipi** seçin.
3. **Boyut** — Fiziksel etiket boyutunu girin (örn. 100mm x 50mm).
4. **Alan Ekle** butonu ile etikete eklenecek bilgileri seçin:

**Kullanılabilir alanlar:**

| Alan | Açıklama |
|---|---|
| Ürün Kodu | Malzeme kodu |
| Ürün Adı | Malzeme tanımı |
| Lot Numarası | Barkod ve metin |
| Son Kullanma Tarihi | Tarih formatı seçilebilir |
| Üretim Tarihi | |
| Miktar | |
| Lokasyon Kodu | Barkod ve metin |
| Depo Adı | |
| Şirket Logosu | PNG yüklenebilir |
| QR Code | Tüm bilgileri içerir |

5. Alanları sürükle-bırak ile yerleştirin.
6. **Önizle** butonu ile tasarımı kontrol edin.
7. **Kaydet** ile şablonu aktif edin.

:::tip
Etikette hem barkod hem QR code kullanmanız önerilir. Barkod endüstriyel okuyucularla hızlı taranır; QR code daha fazla bilgi taşır ve standart kameralarla okunabilir.
:::

---

## Yazıcı Ayarları

**Desteklenen Yazıcı Tipleri:**

| Tip | Protokol | Örnek Model |
|---|---|---|
| Zebra Termal | ZPL/ZPL2 | Zebra ZT230, ZD420 |
| Honeywell Termal | EPL/DPL | Honeywell PC42 |
| Brother Etiket | ESC/P | Brother QL serisi |
| Standart Lazer/Inkjet | PDF yazdırma | Herhangi bir yazıcı |

**Yazıcı ekleme:**

1. **Yönetim > Barkod Şablonları > Yazıcılar** ekranına gidin.
2. **Yazıcı Ekle** butonuna tıklayın.
3. Yazıcı adı, IP adresi/port ve model/protokol bilgilerini girin.
4. **Test Yazdır** ile bağlantıyı doğrulayın.

---

## Etiket Yazdırma

Etiket yazdırma işlemleri ilgili operasyon ekranlarından yapılır:

- **Mal Kabul tamamlandığında:** Lot etiketi otomatik yazdırma seçeneği
- **Lokasyon ekranından:** Lokasyon etiketi yazdırma
- **Sevkiyat tamamlandığında:** Sevkiyat/koli etiketi
- **Toplu yazdırma:** Birden fazla etiketi tek seferde gönderebilirsiniz

:::warning
Termal yazıcıların barkod kalitesini periyodik olarak kontrol edin. Yıpranan yazıcı kafası soluk barkodlar üretir; bu da tarama hatalarına yol açar.
:::
