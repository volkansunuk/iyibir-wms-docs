---
title: Raporlar
sidebar_label: Raporlar
sidebar_position: 3
---

# Raporlar

Web arayüzündeki raporlama modülü, depo operasyonlarını analiz etmek ve izlemek için kapsamlı raporlar sunar.

---

## Rapor Kategorileri

### Stok Raporları
| Rapor Adı | Açıklama |
|---|---|
| Anlık Stok Durumu | Tüm ürünlerin depo ve lokasyon bazlı mevcut stoku |
| Lot/Seri Takip Raporu | Lot bazında hareket geçmişi |
| Kritik Stok Raporu | Minimum stok eşiğinin altındaki ürünler |
| Son Kullanma Tarihi Raporu | Yaklaşan son kullanma tarihleri |
| Değer Bazlı Stok Raporu | Ürün başına stok değeri |

### Hareket Raporları
| Rapor Adı | Açıklama |
|---|---|
| Genel Hareket Raporu | Tüm hareket türleri, tarih aralığı filtrelenebilir |
| Mal Kabul Raporu | Dönemsel mal kabul özeti |
| Sevkiyat Raporu | Gerçekleşen sevkiyatların özeti |
| Transfer Raporu | Depo içi ve depolar arası transferler |
| Kullanıcı Aktivite Raporu | Kullanıcı bazında işlem sayısı ve türleri |

---

## Filtreler

Her raporda şu filtreler kullanılabilir:

| Filtre | Seçenekler |
|---|---|
| Tarih Aralığı | Bugün, Bu Hafta, Bu Ay, Son 3 Ay, Özel Aralık |
| Depo | Tek veya çoklu depo seçimi |
| Kullanıcı | Belirli operatör veya tüm kullanıcılar |
| Ürün Grubu | Logo Tiger ürün grubu filtresi |
| Hareket Türü | Giriş, Çıkış, Transfer vb. |

:::tip
Özel tarih aralığı filtresi ile farklı dönemleri karşılaştırabilirsiniz. Örneğin bu ayın mal kabul miktarını geçen ayla kıyaslamak için iki ayrı rapor alıp Excel'de birleştirebilirsiniz.
:::

---

## Dışa Aktarma

Tüm raporlar iki formatta dışa aktarılabilir:

### Excel Dışa Aktarma (.xlsx)
- Tüm sütunlar korunur
- Filtrelenmiş veri aktarılır
- Birden fazla sayfa (özet + detay)
- Sütun başlıkları Türkçe

### PDF Dışa Aktarma
- Yazdırmaya hazır format
- Şirket logosu ve rapor başlığı
- Tarih ve kullanıcı damgası
- Sayfa numarası ve toplamlar

:::info
Büyük veri setlerinde (10.000+ satır) Excel dışa aktarımı birkaç saniye sürebilir. Tarayıcı sekmesini kapatmayın.
:::

---

## Zamanlanmış Raporlar

Sık kullanılan raporları otomatik olarak e-posta ile alabilirsiniz:

1. İstediğiniz raporun sayfasına gidin.
2. **Raporu Zamanla** butonuna tıklayın.
3. Alıcı e-posta adreslerini, sıklığı (Günlük/Haftalık/Aylık) ve saati belirleyin.
4. **Kaydet** ile zamanlamayı aktif edin.

---

## Rapor Saklama

Dışa aktarılan raporlar **Raporlarım** ekranında 30 gün saklanır. Bu süre içinde istediğiniz zaman tekrar indirebilirsiniz.
