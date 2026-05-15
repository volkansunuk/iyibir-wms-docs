---
title: Depo Sayımı
sidebar_label: Depo Sayımı
sidebar_position: 2
---

# Depo Sayımı

Depo Sayımı, tüm depodaki stokların fiziksel olarak sayılmasıdır. Yıllık envanter kapatma veya büyük ölçekli doğrulama işlemleri için kullanılır.

---

## Sayım Hazırlığı

1. Sayım başlamadan önce depo operasyonlarını durdurun veya minimize edin.
2. Web arayüzünde **Sayım > Yeni Sayım Planı** oluşturun.
3. Sayılacak depoyu seçin.
4. Sayım tarih ve saatini belirleyin.
5. Operatörlere lokasyon listesi atayın.

:::warning
Sayım sırasında mal kabul, sevkiyat veya transfer işlemi yapılırsa sayım fark raporunda bu hareketler dikkate alınmaz. Büyük sayımlarda operasyonları geçici olarak durdurun.
:::

---

## Adım Adım Sayım

### 1. Sayımı Başlatma
1. Mobil uygulamada **Sayım > Depo Sayımı** seçin.
2. Aktif sayım planı görünür; **Sayımı Başlat** butonuna dokunun.
3. Atanmış lokasyon listesi açılır.

### 2. Lokasyon Sayımı
1. İlk lokasyona gidin.
2. Lokasyon barkodunu okutun (doğrulama).
3. Lokasyondaki her ürünü sayın:
   - Ürün barkodunu okutun
   - Sayılan miktarı girin
   - Varsa lot barkodunu okutun
4. **Lokasyonu Tamamla** butonuna dokunun.
5. Sonraki lokasyona geçin.

:::tip
Boş lokasyonları da işaretleyin. "Boş Lokasyon" seçeneği, sistemde stok görünmesine rağmen lokasyonun gerçekten boş olduğunu kaydeder.
:::

### 3. Sayım Tamamlama
Tüm lokasyonlar sayıldıktan sonra:

1. **Sayımı Bitir** butonuna dokunun.
2. Tamamlanmamış lokasyonlar varsa uyarı verilir.
3. Onaylayarak sayımı sonlandırın.

---

## Fark Raporu

Yönetici web arayüzünden fark raporunu görüntüler:

| Sütun | Açıklama |
|---|---|
| Malzeme | Ürün kodu ve adı |
| Sistem Miktarı | WMS'in beklediği miktar |
| Sayılan Miktar | Fiziksel sayım sonucu |
| Fark | Sayılan - Sistem |
| Fark % | Yüzdesel sapma |

---

## Fark Onayı ve Düzeltme

1. Fark raporunu inceleyin; büyük sapmalarda yeniden sayım yapın.
2. Doğrulandıktan sonra **Farkları Onayla** butonuna tıklayın.
3. Onaylanan farklar stok düzeltme hareketi olarak kaydedilir.
4. Tiger'a düzeltme bildirimi gönderilir.

:::info
Fark onayı geri alınamaz. Onaylamadan önce tüm farkların fiziksel olarak doğrulandığından emin olun.
:::
