---
title: Malzeme Çıkış
sidebar_label: Malzeme Çıkış
sidebar_position: 3
---

# Malzeme Çıkış

Malzeme Çıkış, ürünlerin depodan üretim hattına, sahaya veya tüketim noktasına verilmesi işlemidir.

---

## Ne Zaman Kullanılır?

- Üretim hattına hammadde vermek
- Bakım-onarım için yedek parça çıkışı yapmak
- Dahili tüketim (temizlik malzemesi, ofis malzemesi vb.)
- Numune gönderimi
- Stok düzeltme (azaltma)

---

## Adım Adım Kullanım

1. **Malzeme > Malzeme Çıkış** seçeneğini açın.
2. **Ürünü Seç** — Barkod okutun veya arama yapın.
3. Mevcut stok bilgisi gösterilir: lokasyon, lot ve miktar.
4. **Çıkış Miktarını** girin.
5. Sistem FIFO kuralına göre önerilen lotu gösterir; gerekirse farklı lot seçin.
6. **Çıkış Nedeni** seçin.
7. Alıcı departman veya maliyet merkezi girin (opsiyonel ama önerilir).
8. **Onayla** butonuna dokunun.

:::tip
FEFO takibinde sistem, son kullanma tarihi en yakın lotu otomatik önerir. Bu öneriyi değiştirmeden kabul etmeniz stok yönetimi açısından en iyi pratiktir.
:::

---

## Çıkış Nedenleri

| Neden | Açıklama |
|---|---|
| Üretime Sevk | Üretim hattı için hammadde |
| Bakım-Onarım | Tesis bakım hizmetleri |
| Dahili Tüketim | Ofis, temizlik, güvenlik malzemeleri |
| Numune | Kalite/test amaçlı |
| Fire | Kullanılmaz hale gelen ürün |
| Stok Düzeltme | Yönetici yetkili azaltma |

---

## Çıkış Onayı

Yapılandırmaya bağlı olarak belirli çıkış türleri veya belirli bir miktarın üzerindeki çıkışlar **Yönetici onayı** gerektirebilir:

- Onay bekleyen çıkış işlemi **"Onay Bekliyor"** durumunda bekler.
- Yönetici web veya mobil arayüzden onaylayabilir ya da reddedebilir.
- Reddedilen işlem iptale düşer; operatör bilgilendirilir.

:::warning
Onaysız çıkış, Tiger'a iletilmez. Logo Tiger raporları ile WMS stoku arasında uyumsuzluk oluşmaması için onay adımını atlamamayın.
:::
