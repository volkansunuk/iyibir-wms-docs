---
title: Üretim
sidebar_label: Genel Bakış
sidebar_position: 1
slug: /operasyonlar/uretim
---

# Üretim

Üretim kategorisi, hammadde tüketimi ve mamul ürün stoka alınması süreçlerini kapsar. Logo Tiger üretim emirleri ile entegre çalışır.

---

## Alt Operasyonlar

| Operasyon | Açıklama |
|---|---|
| [Üretim Emri](./uretim-emri) | Tiger'daki üretim emrine bağlı üretim hareketi |
| [Hızlı Üretim](./hizli-uretim) | Emir açmadan serbest üretim kaydı |
| [Yeniden İşleme](./yeniden-isleme) | Kusurlu ürünlerin yeniden işlenmesi (rework) |

---

## Üretim Akışı

```
Logo Tiger Üretim Emri
        ↓
  WMS'e Senkronizasyon
        ↓
  Hammadde Çıkışı (üretime sevk)
        ↓
  Üretim Gerçekleşir
        ↓
  Mamul Ürün Girişi (depoya alma)
        ↓
  Tiger'a Geri Yazma
```

---

## Reçete (BOM) Entegrasyonu

Üretim emri seçildiğinde WMS, Logo Tiger'dan o ürünün reçetesini (Bill of Materials) çeker:

- Reçetedeki her hammadde için gerekli miktar gösterilir.
- WMS, hammadde stoğunun yeterli olup olmadığını kontrol eder.
- Yetersiz hammadde varsa üretim başlamadan uyarı verilir.

:::warning
Hammadde yetersizliği uyarısı operasyonu engellemez, yalnızca uyarır. Onaylarsanız işleme devam edebilirsiniz. Ancak bu durumda stok negatife düşer ve Yöneticiye bildirim gönderilir.
:::

---

## Üretim Hareketlerinin Tiger'a Yazılması

Mamul ürün stoka alındıktan sonra:
- Tiger'da üretim emrinin gerçekleşen miktarı güncellenir.
- Hammadde tüketimi Tiger'a iletilir.
- Üretim emri tamamlandı olarak işaretlenebilir.
