---
title: Transfer
sidebar_label: Transfer
sidebar_position: 4
---

# Transfer

Transfer operasyonu, ürünleri bir lokasyondan başka bir lokasyona ya da bir depodan başka bir depoya taşımak için kullanılır. Stok miktarı değişmez; yalnızca konumu değişir.

---

## Transfer Türleri

| Tür | Açıklama |
|---|---|
| Lokasyon İçi Transfer | Aynı depo içinde farklı gözler arasında taşıma |
| Depolar Arası Transfer | Farklı depolar arasında ürün aktarımı |

---

## Lokasyon İçi Transfer — Adım Adım

1. **Malzeme > Transfer** seçeneğini açın.
2. **Kaynak Lokasyon** — Ürünün bulunduğu lokasyonun barkodunu okutun.
3. Lokasyondaki ürün ve lot listesi gösterilir.
4. Transfer etmek istediğiniz ürünü ve miktarı seçin.
5. **Hedef Lokasyon** — Ürünün taşınacağı yeni lokasyonun barkodunu okutun.
6. Özeti inceleyin ve **Onayla** butonuna dokunun.

:::tip
Büyük depo yeniden düzenleme çalışmalarında **Toplu Transfer** özelliğini kullanın. Bir lokasyondaki tüm içeriği tek işlemle başka bir lokasyona taşıyabilirsiniz.
:::

---

## Depolar Arası Transfer — Adım Adım

1. **Transfer Türü** olarak **Depolar Arası** seçin.
2. **Kaynak Depo ve Lokasyon** seçin.
3. **Hedef Depo ve Lokasyon** seçin.
4. Ürün ve miktarı belirleyin.
5. **Transfer Nedeni** girin.
6. **Onayla** ile işlemi tamamlayın.

:::info
Depolar arası transferde WMS, kaynak depoda çıkış ve hedef depoda giriş olmak üzere iki ayrı hareket kaydı oluşturur. Her iki deponun raporlarında da hareket görünür.
:::

---

## Lot ile Transfer

Transfer sırasında lot bilgisi korunur:

- **Tüm lot ile transfer:** Lot kaynak lokasyondan tamamen kalkar, hedef lokasyona gider.
- **Kısmi lot transferi:** Aynı lotun bir kısmı taşınır; kaynak ve hedef lokasyonda aynı lot iki farklı miktarda görünür.

---

## Acil Transfer

Bekleyen sevkiyat veya üretim için acil ürün taşıma gerekiyorsa **Acil Transfer** modunu kullanın. Bu mod, normal onay adımlarını atlayarak doğrudan işlemi tamamlar ve yöneticiye bildirim gönderir.

:::warning
Acil Transfer modu, denetim logunda özel olarak işaretlenir. Sık kullanımı önlemek için yönetici onayı gerektirecek şekilde yapılandırılabilir.
:::
