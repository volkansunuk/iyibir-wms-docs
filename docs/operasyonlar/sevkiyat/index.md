---
title: Sevkiyat
sidebar_label: Genel Bakış
sidebar_position: 1
slug: /operasyonlar/sevkiyat
---

# Sevkiyat

Sevkiyat kategorisi, depodan müşterilere, transfer noktalarına veya sahaya gönderilecek ürünlerin hazırlanması ve çıkış işlemlerini kapsar.

---

## Alt Operasyonlar

| Operasyon | Açıklama |
|---|---|
| [Serbest Sevkiyat](./serbest-sevkiyat) | Herhangi bir siparişe bağlı olmadan serbest çıkış |
| [Sipariş Toplama](./siparis-toplama) | Logo Tiger satış siparişine göre sipariş hazırlama |
| [Sevkiyat Transferi](./sevkiyat-transferi) | Ürünlerin başka bir depoya transfer amaçlı sevki |
| [İade Sevkiyat](./iade-sevkiyat) | Tedarikçiye veya farklı noktaya iade sevkiyatı |

---

## FIFO ve FEFO Metodları

Sevkiyat operasyonlarında sistem otomatik olarak çıkış metodunu önerir:

- **FIFO (First In First Out):** İlk giren ürün/lot önce çıkar. Genel depo operasyonları için uygundur.
- **FEFO (First Expired First Out):** Son kullanma tarihi en yakın lot önce çıkar. Gıda, ilaç ve kimyasal ürünler için zorunludur.

Çıkış metodu, **Ayarlar > Depo Yapılandırması** ekranında ürün grubu bazında belirlenebilir.

:::info
FEFO metodunda sistem her zaman en yakın son kullanma tarihli lotu önerir. Operatör bu öneriyi değiştirebilir ancak farklı lot seçimi denetim loguna kaydedilir.
:::

---

## Sevkiyat Öncesi Kontrol Listesi

1. Sevk edilecek ürünlerin stokta mevcut olduğunu kontrol edin.
2. Karantina veya blokeli ürünlerin sevke çıkmadığından emin olun.
3. Taşıyıcı veya araç bilgisini sisteme girin.
4. Sevkiyat irsaliyesini oluşturun ve müşteriye gönderin.
