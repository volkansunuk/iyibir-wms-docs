---
title: İrsaliye İadesi
sidebar_label: İrsaliye İadesi
sidebar_position: 5
---

# İrsaliye İadesi

İrsaliye İadesi, daha önce oluşturulmuş ve Logo Tiger'a yazılmış bir mal kabul irsaliyesinin tamamının veya bir kısmının geri alınmasıdır.

---

## Ne Zaman Kullanılır?

- Hatalı mal kabul yapıldığında
- Fazla sayıda ürün kabul edildiğinde ve düzeltme gerektiğinde
- Tedarikçiye iade faturası kesilmesi gereken durumlarda

---

## Ön Koşullar

:::warning
İrsaliye iadesi, muhasebe ve Logo Tiger'a yansıyan bir işlemdir. Bu operasyonu yalnızca **Yönetici veya Admin** rolüne sahip kullanıcılar gerçekleştirebilir. Depo operatörleri bu operasyonu başlatamaz.
:::

---

## Adım Adım Kullanım

### 1. İade Edilecek İrsaliyeyi Bulma
1. **Mal Kabul > İrsaliye İadesi** seçeneğini açın.
2. İade edilecek irsaliyeyi aşağıdaki yöntemlerden biriyle bulun:
   - İrsaliye numarasını girin
   - Tedarikçiye göre arama yapın
   - Tarih aralığı filtresiyle listeleyin
3. İlgili irsaliyeye dokunun.

### 2. İade Edilecek Satırları Seçme

**Tam İade:**
- **Tümünü Seç** seçeneğiyle irsaliyenin tüm satırlarını seçin.

**Kısmi İade:**
- Yalnızca iade etmek istediğiniz satırları seçin.
- Her satır için iade miktarını girin (orijinal miktara eşit veya daha az olmalıdır).

### 3. İade Nedeni ve Lokasyon
1. **İade Nedeni** seçin (Hatalı Ürün, Fazla Miktar, Kalite Reddi vb.).
2. İade edilen ürünlerin gideceği **lokasyonu** seçin.
3. Lot bilgisi orijinal mal kabulden otomatik gelir.

### 4. Onaylama
1. Özet ekranını inceleyin:
   - İade edilecek ürünler ve miktarlar
   - Stoktan düşülecek miktar
   - Logo Tiger'a yazılacak belge tipi
2. **Onayla** butonuna dokunun.
3. WMS, iade irsaliyesini Logo Tiger'a iletir ve stoku günceller.

---

## Önemli Notlar

:::info
İrsaliye iadesi sonucunda:
- WMS stoktan ilgili miktar düşülür.
- Logo Tiger'da iade irsaliyesi oluşturulur.
- Muhasebe departmanı Tiger üzerinden tedarikçi iade faturasını keser.
:::

---

## Hata Durumları

| Hata | Neden |
|---|---|
| İrsaliye bulunamadı | İrsaliye numarası yanlış veya başka depodan |
| Stok yetersiz | İade edilen lot/lokasyonda yeterli miktar yok |
| Bağlantı hatası | Tiger bağlantısı kesildi |
| Yetki hatası | Kullanıcı rolü yetersiz |
