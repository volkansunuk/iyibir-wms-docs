---
title: Üretim Emri İşleme
sidebar_label: Üretim Emri
sidebar_position: 2
---

# Üretim Emri İşleme

Logo Tiger'daki açık üretim emirlerine karşı hammadde çıkışı ve mamul ürün girişi yapmak için kullanılır.

---

## Ön Koşullar

- Logo Tiger'da onaylı bir üretim emri mevcut olmalıdır.
- Üretim emrinin durumu "Devam Ediyor" veya "Bekliyor" olmalıdır.
- WMS-Tiger bağlantısı aktif olmalıdır.

---

## Adım Adım Kullanım

### 1. Üretim Emrini Seçme
1. **Üretim > Üretim Emri** seçeneğini açın.
2. Açık üretim emirleri listesi görünür (Tiger'dan anlık).
3. Ürün adı, emri numarası veya tarihe göre filtreleyin.
4. İlgili üretime dokunun.

### 2. Üretim Emri Detayları
- Mamul ürün bilgisi (kod, ad)
- Sipariş miktarı
- Reçetedeki hammaddeler ve miktarları
- Mevcut hammadde stok durumu (yeşil/kırmızı gösterge)

### 3. Hammadde Çıkışı
1. **Hammadde Çıkışı Yap** butonuna dokunun.
2. Her hammadde için:
   - Önerilen lot ve lokasyon gösterilir
   - Miktarı onaylayın veya değiştirin
3. **Hammadde Çıkışını Onayla**'ya dokunun.

:::tip
Hammadde çıkışı ve mamul girişini aynı işlemde veya ayrı ayrı yapabilirsiniz. Üretim vardiyası uzunsa önce hammadde çıkışını yapıp üretim bittikten sonra mamul girişini kaydedin.
:::

### 4. Mamul Ürün Girişi
Üretim tamamlandığında:

1. **Mamul Girişi Yap** butonuna dokunun.
2. Üretilen miktarı girin.
3. Yeni mamul lotu oluşturun veya mevcut lotu seçin.
4. Mamulün gireceği lokasyonu seçin.
5. **Mamul Girişini Onayla**'ya dokunun.

### 5. Üretim Emrini Kapatma
Tüm üretim tamamlandığında:
1. **Emri Kapat** butonuna dokunun.
2. Durum Tiger'da güncellenir.

---

## Kısmi Üretim

Üretim emrini birden fazla seferde (vardiya bazlı) kaydedebilirsiniz:

- Her kayıt kümülatif olarak toplanır.
- Kalan miktar güncellenir.
- Tüm miktar tamamlandığında emri kapatın.
