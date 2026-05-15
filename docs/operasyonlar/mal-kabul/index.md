---
title: Mal Kabul
sidebar_label: Genel Bakış
sidebar_position: 1
slug: /operasyonlar/mal-kabul
---

# Mal Kabul

Mal Kabul, tedarikçilerden veya dahili kaynaklardan gelen ürünlerin depoya alınma sürecidir. iyibir WMS, her mal kabul işleminde lot oluşturma, lokasyon ataması ve Logo Tiger senkronizasyonunu otomatik olarak yönetir.

---

## Ne Zaman Kullanılır?

| Durum | Uygun Operasyon |
|---|---|
| Tedarikçiden siparişsiz mal geldi | Serbest Mal Kabul |
| Logo Tiger'da açık satın alma siparişi var | Siparişe Bağlı Mal Kabul |
| Müşteriden iade mal geldi | İade Mal Kabul |
| Daha önce sevk edilen irsaliyeyi geri alıyoruz | İrsaliye İadesi |

---

## Alt Operasyonlar

| Operasyon | Açıklama |
|---|---|
| [Serbest Mal Kabul](./serbest-mal-kabul) | Herhangi bir sipariş bağlantısı olmadan serbest mal girişi |
| [Siparişe Bağlı Mal Kabul](./siparise-bagli) | Logo Tiger'daki satın alma siparişine karşı mal kabul |
| [İade Mal Kabul](./iade-kabul) | Müşteri veya saha iadelerinin depoya alınması |
| [İrsaliye İadesi](./irsaliye-iadesi) | Önceden sevk edilen irsaliyenin iadesi |

---

## Logo Tiger Entegrasyonu

Siparişe bağlı mal kabulde WMS, Logo Tiger'dan aşağıdaki verileri çeker:

- Satın alma siparişi başlık bilgileri (tedarikçi, tarih, belge no)
- Sipariş satırları (malzeme kodu, birim, sipariş miktarı)
- Kabul edilen ve bekleyen miktarlar

Mal kabul tamamlandığında WMS, Tiger'a karşı irsaliye kaydı oluşturur.

:::info
Logo Tiger'da henüz onaylanmamış (taslak) siparişler WMS'de görünmez. Siparişin Tiger'da onay adımını tamamlaması gerekir.
:::

---

## Lot ve Seri Takibi

Mal kabulde aşağıdaki lot/seri işlemleri yapılabilir:

1. **Yeni Lot Oluştur** — Gelen malzeme için yeni lot numarası üret
2. **Mevcut Lota Ekle** — Var olan bir lota miktar ekle
3. **Tedarikçi Lot Bilgisi Gir** — Tedarikçinin lot numarasını kaydet
4. **Son Kullanma Tarihi Ata** — Gıda ve ilaç ürünleri için zorunlu

:::tip
Lot numaralandırma formatını **Ayarlar > Lot Ayarları** menüsünden özelleştirebilirsiniz. Varsayılan format: `L{YYYYMM}{sıra}` örn. `L20250500001`
:::

---

## Lokasyon Ataması

Her mal kabulde ürün bir lokasyona atanmalıdır:

- Lokasyon barkodu okutularak seçilebilir
- Lokasyon listesinden manuel seçilebilir
- Sistem, FIFO kurallarına göre önerilen lokasyonu gösterebilir

:::warning
Karantina lokasyonuna alınan ürünler kalite kontrolden geçmeden sevkiyat veya üretimde kullanılamaz.
:::
