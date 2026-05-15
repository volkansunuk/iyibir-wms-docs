---
title: Fason
sidebar_label: Genel Bakış
sidebar_position: 1
slug: /operasyonlar/fason
---

# Fason (Taşeron Üretim)

Fason kategorisi, taşeron firmalara gönderilen malzemelerin ve geri alınan ürünlerin takibini kapsar. Logo Tiger fason emirleriyle entegre çalışır.

---

## Alt Operasyonlar

| Operasyon | Açıklama |
|---|---|
| [Fason Çıkış](./fason-cikis) | Taşerona hammadde veya yarı mamul gönderme |
| [Fason Kabul](./fason-kabul) | Taşerondan işlenmiş ürün alma |
| [Fason Transfer](./fason-transfer) | Fason sürecindeki ürünlerin taşınması |
| [Fason Üretim](./fason-uretim) | Fason kayıtlarına üretim bilgisi ekleme |

---

## Fason Sürecinin Akışı

```
Logo Tiger Fason Emri
        ↓
  WMS'e Senkronizasyon
        ↓
  Fason Çıkış (taşerona hammadde gönder)
        ↓
  Taşeron Üretim Gerçekleşir
        ↓
  Fason Kabul (taşerondan mamul al)
        ↓
  Tiger'a Geri Yazma
```

---

## Logo Tiger Entegrasyonu

Fason operasyonları, Tiger'daki fason emirleriyle senkronize olur:

- Taşeron bilgileri Tiger'dan çekilir.
- Gönderilen malzeme ve alınan ürün miktarları Tiger'a yazılır.
- Fason emrinin durumu (açık/kapalı) güncellenir.

:::info
Tiger'da henüz fason emri açılmamışsa WMS'de de bu işlemleri başlatmak mümkün değildir. Tiger yöneticinizden emrin açılmasını talep edin.
:::

---

## Taşeron Takibi

Her taşeronun aktif durumunu web arayüzünden izleyebilirsiniz:

- Gönderilen malzeme ve tarih
- Beklenen dönüş tarihi
- Geç kalan fason emirleri
- Teslim alınan ve bekleyen miktarlar
