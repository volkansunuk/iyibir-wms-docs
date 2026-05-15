---
title: Malzeme Hareketleri
sidebar_label: Genel Bakış
sidebar_position: 1
slug: /operasyonlar/malzeme
---

# Malzeme Hareketleri

Malzeme Hareketleri kategorisi, depolar içindeki ve arasındaki ürün akışlarını yönetir. Giriş, çıkış, transfer ve lot işlemlerini kapsar.

---

## Alt Operasyonlar

| Operasyon | Açıklama |
|---|---|
| [Malzeme Giriş](./giris) | Depoya malzeme girişi (üretime veya siparişe bağlı) |
| [Malzeme Çıkış](./cikis) | Depodan malzeme çıkışı |
| [Transfer](./transfer) | Lokasyonlar arası veya depolar arası ürün hareketi |
| [Lot İşlemleri](./lot-islemleri) | Lot oluşturma, bölme ve birleştirme |

---

## Ne Zaman Kullanılır?

| Durum | Uygun Operasyon |
|---|---|
| Üretime hammadde verilecek | Malzeme Çıkış |
| Üretimden mamul alınacak | Malzeme Giriş |
| Ürün bir depodan diğerine taşınacak | Transfer |
| Yanlış lokasyondaki ürün düzeltilecek | Transfer |
| Büyük lot küçük lotlara bölünecek | Lot Bölme |
| İki küçük lot birleştirilecek | Lot Birleştirme |

---

## Hareket Kuralları

:::info
Tüm malzeme hareketleri FIFO (First In First Out — İlk Giren İlk Çıkar) veya FEFO (First Expired First Out — İlk Süresi Dolan İlk Çıkar) kuralına göre önceliklendirilir. Sistem, çıkış operasyonlarında hangi lotun öncelikli kullanılacağını otomatik önerir.
:::

- Bir harekette birden fazla lot kullanılabilir.
- Hareket sonrası stok sıfıra düşen lotlar **"Tüketildi"** olarak işaretlenir.
- Negatif stok oluşturacak hareketler sistem tarafından engellenir (Yönetici yetki verebilir).
