---
title: Sayım
sidebar_label: Genel Bakış
sidebar_position: 1
slug: /operasyonlar/sayim
---

# Sayım

Sayım kategorisi, depo stoklarının fiziksel olarak doğrulanmasını sağlar. iyibir WMS; depo geneli, lokasyon bazlı ve ürün bazlı olmak üzere üç farklı sayım yöntemi sunar.

---

## Sayım Türleri

| Tür | Kapsam | Ne Zaman Kullanılır |
|---|---|---|
| [Depo Sayımı](./depo-sayimi) | Tüm depo | Yıllık/dönemsel sayım, envanter dönemleri |
| [Lokasyon Sayımı](./lokasyon-sayimi) | Belirli raf/göz | Sürekli/döngüsel sayım (cycle count) |
| [Ürün Sayımı](./urun-sayimi) | Belirli ürün | Belirli bir ürünün tüm stok noktalarını sayma |

---

## Sayım İlkeleri

:::info
Sayım sırasında sayılan lokasyonlar veya ürünler üzerinde malzeme hareketi yapılmamalıdır. Sistem, sayım açık olan lokasyonlarda hareket girişimini uyarı ile engeller.
:::

- Sayım planını Yönetici oluşturur ve operatörlere atar.
- Her operatör yalnızca kendine atanan sayım listesini görür.
- Sayım tamamlandıktan sonra Yönetici fark raporunu onaylar.
- Onaylanan farklar stok düzeltmesi olarak kaydedilir.

---

## Kör Sayım

Güvenilirliği artırmak için **kör sayım** modu kullanılabilir:

- Kör sayımda operatör mevcut stok bilgisini görmez.
- Sayım yalnızca fiziksel olarak gördüğü miktarı girer.
- Bu mod, operatörün mevcut rakamdan etkilenmesini önler.

:::tip
Yıllık envanter sayımlarında kör sayım modu kullanmanız, sayım doğruluğunu önemli ölçüde artırır. Özellikle sık hata yapılan yüksek değerli ürün gruplarında tercih edin.
:::
