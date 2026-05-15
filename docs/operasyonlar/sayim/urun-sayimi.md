---
title: Ürün Sayımı
sidebar_label: Ürün Sayımı
sidebar_position: 4
---

# Ürün Sayımı

Ürün Sayımı, belirli bir ürünün bulunduğu tüm lokasyonlarda aynı anda sayılmasıdır. Stok şikayeti, müşteri sorgusu veya kalite incelemesi gerektiren durumlarda kullanılır.

---

## Ne Zaman Kullanılır?

- Belirli bir ürün için stok şikayeti alındığında
- Logo Tiger ile WMS stoku arasında tek ürün için uyumsuzluk görüldüğünde
- Kalite departmanının belirli bir lotu saymasını istediğinde
- Yüksek değerli ürünlerin periyodik doğrulamasında

---

## Adım Adım Ürün Sayımı

1. **Sayım > Ürün Sayımı** seçeneğini açın.
2. Sayılacak ürünü barkod okutarak veya arama ile seçin.
3. Sistemde bu ürünün bulunduğu tüm lokasyonlar listelenir.
4. Her lokasyona gidip ürünü fiziksel olarak sayın.
5. Her lokasyon için sayılan miktarı girin.
6. Tüm lokasyonlar tamamlandığında **Sayımı Bitir** butonuna dokunun.

---

## Tek Lot Sayımı

Belirli bir lot için sayım yapılacaksa:

1. Ürün seçtikten sonra **Lot Filtresi** uygulayın.
2. Yalnızca seçilen lot numarasının bulunduğu lokasyonlar listelenir.
3. Normal sayım adımlarını izleyin.

:::tip
Müşteri şikayeti veya geri çağırma (recall) durumunda tek lot sayımı ile o partinin tüm stok noktalarını hızlıca doğrulayabilirsiniz.
:::

---

## Sonuç ve Raporlama

Sayım tamamlandığında:

| Sütun | Açıklama |
|---|---|
| Lokasyon | Sayım yapılan depo gözü |
| Sistem Miktarı | Beklenen |
| Sayılan Miktar | Fiziksel |
| Fark | Fark |
| Lot | İlgili lot |

Yönetici fark raporunu onaylar ve stok düzeltmesi gerçekleşir.
