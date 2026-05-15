---
title: İade Mal Kabul
sidebar_label: İade Kabul
sidebar_position: 4
---

# İade Mal Kabul

İade Mal Kabul, müşteriden veya sahadan geri dönen ürünlerin depoya alınması ve stoka işlenmesi operasyonudur.

---

## Ne Zaman Kullanılır?

- Müşterinin iade ettiği ürünleri depoya almak
- Saha ekibinden dönen kullanılmamış malzemeleri stoka almak
- Hatalı sevkiyat nedeniyle geri gelen ürünleri işlemek

---

## Adım Adım Kullanım

### 1. Operasyonu Başlatma
1. Ana ekrandan **Mal Kabul > İade Mal Kabul** seçin.
2. **İade Kaynağı** alanında müşteriyi veya kaynağı seçin:
   - Müşteri (Logo Tiger'dan çekilir)
   - Saha/departman
   - Diğer

### 2. Ürün Bilgisi Girme
1. İade edilen ürünün barkodunu okutun veya kodunu girin.
2. **İade Miktarı** girin.
3. **İade Nedeni** seçin:
   - Müşteri Iade — Kusurlu Ürün
   - Müşteri İade — Yanlış Ürün
   - Müşteri İade — Hasarlı Sevkiyat
   - Saha İadesi
   - Diğer

:::tip
İade nedenini doğru seçmek, ileride yapılacak analiz ve tedarikçi değerlendirme raporları için kritik öneme sahiptir.
:::

### 3. Durum Belirleme
Gelen ürünün durumunu belirleyin:

| Durum | Açıklama | Lokasyon |
|---|---|---|
| Satılabilir | Yeniden satışa uygun | Normal stok |
| Karantina | Kontrol gerekiyor | Karantina bölgesi |
| Imha Gerekli | Kullanılamaz durum | Fire lokasyonu |

:::warning
Durumunu henüz belirleyemiyorsanız **Karantina** seçin. Ürün kalite kontrol tamamlanmadan sevkiyata çıkmaz.
:::

### 4. Lot Bilgisi
- Orijinal lot numarası biliniyorsa okutun.
- Bilinmiyorsa yeni iade lotu oluşturun (örn. `I20250500001`).

### 5. Onaylama
1. Özet bilgisini kontrol edin.
2. **Onayla** butonuna dokunun.
3. Ürün belirlenen lokasyona stoka girer.

---

## Lot Durumu Güncelleme

Karantinaya alınan ürünler kalite kontrolden geçtikten sonra:

1. Web arayüzünde **Stok > Lot Yönetimi** menüsüne gidin.
2. İlgili lotu bulun.
3. **Durum Değiştir** ile `Karantina → Satılabilir` veya `Karantina → İmha` olarak güncelleyin.

---

## Raporlama

İade Mal Kabul işlemleri **Raporlar > Hareket Raporları > İade Raporu** ekranından analiz edilebilir.
