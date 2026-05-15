---
title: Barkod Tarama
sidebar_label: Barkod Tarama
sidebar_position: 4
---

# Barkod Tarama

Barkod tarama, iyibir WMS mobil uygulamasının temel işlev birimidir. Hem kamera tabanlı hem de endüstriyel okuyucu desteklendiğinden her türlü depo ortamında kullanılabilir.

---

## Tarama Yöntemleri

### Kamera ile Tarama
Akıllı telefon kamerası kullanılarak barkod okunur.

**Nasıl kullanılır:**
1. Operasyon ekranında **Barkod Tara** butonuna dokunun.
2. Kamera ön yüzü açılır; barkodu çerçeve içine alın.
3. Barkod otomatik olarak algılanır ve işlenir.

**Avantajlar:** Ek donanım gerekmez  
**Dezavantajlar:** Parlak ortamlarda veya hasarlı barkodlarda güçlük çekebilir

### Endüstriyel Okuyucu (Zebra/Honeywell)
Cihazın fiziksel tarama tuşuna basılarak yüksek hızda barkod okunur.

**Desteklenen cihazlar:**
- Zebra TC20, TC21, TC26, TC52, TC57, MC93
- Honeywell Dolphin CT40, CN80, EDA52
- Diğer Android tabanlı endüstriyel terminaller

:::tip
Günde 200+ barkod tarama yapılan yoğun operasyonlarda Zebra veya Honeywell endüstriyel terminaller kullanılması önerilir. Bu cihazlar kameraya kıyasla 5-10 kat daha hızlı ve daha güvenilirdir. Hasar görmüş veya buruşuk barkodlarda bile başarıyla okuma yapabilirler.
:::

---

## Desteklenen Barkod Tipleri

| Barkod Tipi | Kullanım Alanı | Örnek |
|---|---|---|
| Code 128 | Ürün, lot, lokasyon barkodları | Alphanümerik içerik |
| EAN-13 | Ticari ürün barkodları | 8690000123456 |
| EAN-8 | Küçük ambalaj ürünler | 12345678 |
| QR Code | Çok bilgi taşıyan etiketler | JSON veya URL |
| DataMatrix | Küçük yüzey etiketleri | Elektronik parçalar |
| Code 39 | Eski sistem barkodları | Büyük harfli alfanümerik |
| ITF-14 | Sevkiyat kutusu barkodları | 14 haneli GTIN |

:::info
iyibir WMS, Logo Tiger'dan gelen ürünlerin EAN barkodlarını otomatik olarak tanır. Ek yapılandırma gerekmez.
:::

---

## Tarama Geri Bildirimi

Başarılı bir tarama sonrasında:
- **Yeşil flash** — Ekran kısa süre yeşile döner
- **Titreşim** — Cihaz titreşir (Ayarlar'dan kapatılabilir)
- **Bip sesi** — Kısa bip sesi duyulur (Ayarlar'dan kapatılabilir)
- **Ürün bilgisi** — Taranan ürünün adı, kodu ve mevcut stok bilgisi gösterilir

Başarısız/tanımsız barkod taramasında:
- **Kırmızı flash** ve **farklı bip sesi**
- "Barkod tanınmadı" hata mesajı

---

## Manuel Giriş (Yedek Yöntem)

Barkod okunamıyorsa (yırtık etiket, kirli yüzey vb.) manuel giriş kullanılabilir:

1. Barkod alanına dokunun.
2. Klavye açılır; ürün kodunu veya barkodu elle yazın.
3. **Enter** tuşuna basın.

:::warning
Manuel girişte yazım hatası yapılabilir. Mümkün olduğunca barkod tarama tercih edilmelidir. Sistematik manuel giriş durumunda etiket yenileme çalışması yapılması önerilir.
:::

---

## Seri/Lot Barkod Tarama

Lot veya seri numarası içeren etiketler tarandığında sistem iki bilgiyi birden otomatik ayırır:

- **GS1-128 formatı** desteklenir: `(01)GTIN(10)LOT` veya `(01)GTIN(21)SERI`
- WMS, AI uygulama tanımlayıcılarını (Application Identifiers) otomatik yorumlar.

---

## Toplu Tarama Modu

Aynı işlem için birden fazla ürün art arda taranacaksa **Toplu Tarama Modu**'nu etkinleştirin:

1. Operasyon ekranında **Toplu Tarama** butonuna dokunun.
2. Ürünleri art arda tarayın; her biri listeye eklenir.
3. Tüm ürünler tamamlandığında **Onayla** butonuna dokunun.

:::tip
Toplu tarama modunda aynı ürün birden fazla tarandığında miktar otomatik artırılır.
:::
