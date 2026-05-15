---
title: Hareket Raporları
sidebar_label: Hareket Raporları
sidebar_position: 3
---

# Hareket Raporları

Hareket raporları, belirli bir dönem içinde gerçekleşen tüm stok hareketlerini analiz etmek için kullanılır.

---

## Genel Hareket Raporu

Tüm hareket tiplerini (Mal Kabul, Sevkiyat, Transfer, Üretim vb.) tek bir raporda birleştirir.

**Filtreler:**

| Filtre | Seçenekler |
|---|---|
| Tarih Aralığı | Bugün, Bu Hafta, Bu Ay, Son 3 Ay, Özel Aralık |
| Hareket Türü | Tümü / Mal Kabul / Sevkiyat / Transfer / Üretim / Fason / Sayım |
| Depo | Tek veya çoklu depo |
| Kullanıcı | Belirli operatör veya tümü |
| Ürün | Belirli bir malzeme |
| Lot | Belirli bir lot numarası |

**Sütunlar:**

| Sütun | Açıklama |
|---|---|
| Tarih/Saat | Hareketin zamanı |
| Belge No | WMS hareket numarası |
| Hareket Türü | Operasyon kategorisi |
| Malzeme | Ürün kodu ve adı |
| Miktar | Hareket miktarı |
| Birim | Ölçü birimi |
| Kaynak Lokasyon | Ürünün geldiği yer |
| Hedef Lokasyon | Ürünün gittiği yer |
| Lot | Kullanılan lot numarası |
| Kullanıcı | İşlemi yapan |
| Tiger Belge | İlişkili Tiger belgesi |

---

## Mal Kabul Raporu

Belirli dönemdeki tüm mal kabul işlemlerini özetler.

**Özet metrikleri:**
- Toplam kabul edilen ürün sayısı
- Tedarikçi bazlı dağılım
- Günlük/haftalık hacim grafiği
- İade ile birlikte net giriş

:::tip
Mal kabul raporunu tedarikçi değerlendirme sürecinde kullanabilirsiniz. Hangi tedarikçiden ne sıklıkta ve ne kadar alındığını, iade miktarlarıyla birlikte görürsünüz.
:::

---

## Sevkiyat Raporu

Belirli dönemdeki tüm sevkiyat işlemlerinin özeti.

**Özet metrikleri:**
- Toplam sevk edilen miktar ve ürün sayısı
- Müşteri bazlı sevkiyat dağılımı
- Geciken sevkiyat oranı
- Kısmi sevkiyat oranı

---

## Kullanıcı Aktivite Raporu

Kullanıcı bazında işlem sayısı ve türlerini gösterir.

| Sütun | Açıklama |
|---|---|
| Kullanıcı | Operatör adı |
| Toplam İşlem | Dönemdeki toplam hareket |
| Mal Kabul | Mal kabul işlemi sayısı |
| Sevkiyat | Sevkiyat işlemi sayısı |
| Transfer | Transfer işlemi sayısı |
| Sayım | Sayım işlemi sayısı |
| Ortalama Süre | İşlem başına geçen süre |

:::info
Bu rapor, iş yükü dengeleme ve performans değerlendirme için yöneticilere rehberlik eder. Operatörlerin yalnızca kendi satırlarını görebildiğini unutmayın.
:::

---

## Fark Raporu (Sayım Sonuçları)

Gerçekleştirilen tüm sayımların fark özetini gösterir.

| Sütun | Açıklama |
|---|---|
| Sayım Tarihi | |
| Sayım Türü | Depo / Lokasyon / Ürün |
| İncelenen Lokasyon Sayısı | |
| Fark Bulunan Lokasyon | |
| Toplam Fark (Miktar) | Artı ve eksi toplam |
| Fark Oranı (%) | |

---

## Raporları Zamanlamak

Sık kullanılan raporlar için otomatik e-posta zamanlaması ayarlayın:

1. İlgili rapor sayfasında **Raporu Zamanla** butonuna tıklayın.
2. Alıcıları, sıklığı ve saati belirleyin.
3. **Kaydet** ile aktif edin.

Örnek önerilen zamanlamalar:

| Rapor | Sıklık | Alıcı |
|---|---|---|
| Kritik Stok | Günlük 08:00 | Satın Alma Müdürü |
| Günlük Hareket Özeti | Günlük 18:00 | Depo Müdürü |
| Son Kullanma Tarihi | Haftalık Pazartesi | Kalite Sorumlusu |
| Aylık Stok Değeri | Aylık 1. gün | Finans Müdürü |
