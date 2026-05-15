---
title: Lot İşlemleri
sidebar_label: Lot İşlemleri
sidebar_position: 5
---

# Lot İşlemleri

Lot İşlemleri, mevcut lotları yönetmek için kullanılan araçlar bütünüdür: lot oluşturma, bölme ve birleştirme.

---

## Lot Nedir?

Lot; aynı üretim partisinden, aynı özellikte veya aynı tedarikçiden gelen ürünleri gruplandıran bir kimlik birimidir. Her lot şu bilgileri taşır:

| Alan | Açıklama |
|---|---|
| Lot Numarası | Benzersiz tanımlayıcı |
| Tedarikçi Lot No | Tedarikçinin kendi lot numarası |
| Üretim Tarihi | Ürünün üretildiği tarih |
| Son Kullanma Tarihi | FEFO için kullanılır |
| Durum | Aktif / Karantina / Tüketildi / İmha |
| Miktar | Mevcut stok miktarı |
| Lokasyon(lar) | Bulunduğu depo gözleri |

---

## Lot Oluşturma

Lot oluşturma genellikle Mal Kabul veya Malzeme Giriş sırasında yapılır. Ancak bağımsız da oluşturulabilir:

1. **Malzeme > Lot İşlemleri > Yeni Lot** seçin.
2. Ürünü seçin.
3. Lot numarasını girin veya sistem otomatik oluştursun.
4. İsteğe bağlı alanları doldurun (tarihler, tedarikçi lot no).
5. **Kaydet** butonuna dokunun.

:::tip
Lot numarası formatını standart tutun. Önerilen format: `{ÜRÜN_GRUBU}{YYMMDD}{SIRA}` örn. `HM250523001` (Hammadde, 23 Mayıs 2025, 1. parti).
:::

---

## Lot Bölme

Büyük bir lotu birden fazla küçük lota bölmek için:

1. **Lot İşlemleri > Lot Bölme** seçin.
2. Bölünecek kaynak lotu seçin (barkod okut veya ara).
3. **Parça Sayısını** belirleyin (örn. 3 parçaya böl).
4. Her parça için miktar ve yeni lot numarası girin.
5. Her parça farklı lokasyona gönderilebilir.
6. **Onayla** ile bölme işlemini tamamlayın.

**Örnek:**
```
Kaynak Lot: L202505001 — 1000 adet
↓ Bölme
Yeni Lot 1: L202505001A — 400 adet → A-01-01 lokasyonu
Yeni Lot 2: L202505001B — 350 adet → A-01-02 lokasyonu
Yeni Lot 3: L202505001C — 250 adet → A-01-03 lokasyonu
```

---

## Lot Birleştirme

Aynı ürüne ait birden fazla küçük lotu tek bir lot altında toplamak için:

1. **Lot İşlemleri > Lot Birleştirme** seçin.
2. Birleştirilecek kaynak lotları seçin (en fazla 10 lot).
3. Hedef lot numarasını belirleyin (yeni veya mevcut lot).
4. Hedef lokasyonu seçin.
5. **Onayla** ile birleştirme işlemini tamamlayın.

:::warning
Farklı son kullanma tarihleri olan lotları birleştirmek, FEFO takibini bozabilir. Birleştirme sonrasında yeni lotun son kullanma tarihi en erken tarih olarak atanır. Emin değilseniz birleştirme yerine ayrı tutmayı tercih edin.
:::

---

## Lot Geçmişi

Herhangi bir lotun tam hareket geçmişini görüntülemek için:

1. Web arayüzünde **Stok > Lot Yönetimi** menüsüne gidin.
2. Lot numarasını arayın.
3. **Hareket Geçmişi** sekmesini açın.

Her mal kabul, transfer, çıkış, bölme ve birleştirme işlemi zaman damgası ve kullanıcı bilgisiyle listelenir. Bu izlenebilirlik, gıda güvenliği ve kalite denetimleri için kritik önem taşır.
