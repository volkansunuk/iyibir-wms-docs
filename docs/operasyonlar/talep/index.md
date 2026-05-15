---
title: Talep
sidebar_label: Genel Bakış
sidebar_position: 1
slug: /operasyonlar/talep
---

# Talep

Talep kategorisi, üretim hatları, departmanlar veya sahadan gelen malzeme taleplerinin yönetimini kapsar. Talep oluşturma, karşılama ve bekleyen taleplerin takibini içerir.

---

## Alt Operasyonlar

| Operasyon | Açıklama |
|---|---|
| [Talep Oluştur](./talep-olustur) | Yeni malzeme talebi oluşturma |
| [Talep Karşıla](./talep-karsila) | Onaylanan talepleri stoktan karşılama |
| [Bekleyen Talepler](./bekleyen-talepler) | Onay veya karşılama bekleyen talepleri görüntüleme |

---

## Talep Akışı

```
Operatör/Hat Sorumlusu
  Talep Oluşturur
        ↓
  Yönetici Onaylar
        ↓
  Depo Operatörü Karşılar
        ↓
  Ürün Talep Noktasına Teslim
        ↓
  Talep Kapatılır
```

---

## Talep Tipleri

| Tip | Açıklama |
|---|---|
| Üretim Talebi | Üretim hattı için hammadde/yardımcı malzeme |
| Bakım Talebi | Tesis bakım ekibi için yedek parça |
| Ofis Talebi | Ofis malzemesi ve sarf malzemeleri |
| Acil Talep | Hızlı karşılanması gereken kritik talepler |

:::info
Acil talepler standart onay akışını atlayabilir. Bu yetkinin kullanımı denetim logunda özel olarak işaretlenir.
:::

---

## Talep ile Malzeme Çıkışı Farkı

Malzeme Çıkışı operasyonu doğrudan stoktan düşüm yaparken, Talep operasyonu bir onay ve takip süreci ekler. Büyük işletmelerde hangi departmanın ne kadar malzeme tükettiğini izlemek için Talep operasyonu tercih edilmelidir.
