---
title: Siparişe Bağlı Mal Kabul
sidebar_label: Siparişe Bağlı
sidebar_position: 3
---

# Siparişe Bağlı Mal Kabul

Logo Tiger ERP'deki satın alma siparişlerine karşı mal kabulü gerçekleştirmek için kullanılır. WMS, sipariş bilgilerini otomatik olarak Tiger'dan çekerek karşılaştırmalı kabul yapmanıza olanak tanır.

---

## Ön Koşullar

- Logo Tiger'da ilgili satın alma siparişinin **onaylanmış** olması gerekir.
- WMS'in Logo Tiger bağlantısının aktif olması gerekir.
- Siparişi yapan tedarikçi bilgileri Tiger'da tanımlı olmalıdır.

---

## Adım Adım Kullanım

### 1. Sipariş Seçme
1. **Mal Kabul > Siparişe Bağlı Mal Kabul** seçeneğini açın.
2. Açık siparişler listesi görünür (Logo Tiger'dan anlık çekilir).
3. Siparişi bulmak için:
   - **Tedarikçi adına** göre arama yapın
   - **Sipariş tarihine** göre filtreleyin
   - **Belge numarasını** arama kutusuna girin
4. İlgili siparişe dokunun.

:::tip
Tedarikçi araca geldiğinde tablet veya telefonu hazır tutun. Sipariş numarasını veya tedarikçi adını önceden not alarak arama sürecini hızlandırabilirsiniz.
:::

### 2. Sipariş Satırlarını İnceleme
Sipariş seçildiğinde satır listesi görünür:

| Sütun | Açıklama |
|---|---|
| Malzeme Kodu | Tiger'daki ürün kodu |
| Malzeme Adı | Ürün tanımı |
| Sipariş Miktarı | Tiger'da sipariş edilen miktar |
| Önceki Kabul | Daha önce alınan miktar |
| Kalan | Alınması gereken miktar |

### 3. Satır Bazlı Kabul
1. Kabul edeceğiniz satıra dokunun.
2. Barkod okutun veya malzeme seçin.
3. **Kabul Miktarı** alanına gerçekte gelen miktarı girin.
4. Lokasyon seçin.
5. Lot bilgisini girin.
6. **Satırı Onayla**'ya dokunun.

### 4. Fazla Kabul (Over-Receipt) Uyarısı

Sipariş miktarından fazla girmeye çalıştığınızda:

:::warning
Sipariş miktarının üzerinde kabul uyarısı alıyorsanız devam etmeden önce tedarikçi irsaliyesini kontrol edin. Fazla kabul, Tiger'da miktar sapmasına neden olur ve muhasebe uyumsuzluğu yaratabilir.
:::

Sistem yapılandırmasına göre:
- **Uyarı ile devam izni:** Onay isteyerek devam edebilirsiniz
- **Engelleme:** Yönetici onayı olmadan fazla kabul yapılamaz

### 5. Kısmi Kabul
Siparişin tamamı gelmedi ise:

1. Gelen satırları kabul edin; gelmeyenleri atlayın.
2. **Kısmî Onayla** butonuna dokunun.
3. Sipariş "Açık" olarak kalır ve kalanı için tekrar kabul yapılabilir.

### 6. Belgeyi Tamamlama
Tüm satırlar işlendiğinde:

1. Özet ekranı görünür: Beklenen vs. Kabul edilen miktarlar.
2. **Belgeyi Tamamla** butonuna dokunun.
3. WMS, tamamlanan mal kabul bilgisini Logo Tiger'a iletir.

---

## Kısmi Kabul Takibi

Logo Tiger'da kısmen karşılanmış siparişler **"Açık"** olarak görünmeye devam eder. WMS'de ise **Mal Kabul Geçmişi** ekranından her siparişin kümülatif kabul durumunu görebilirsiniz.
