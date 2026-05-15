---
title: AI Agentler
sidebar_label: Genel Bakış & MCP
sidebar_position: 1
slug: /ai-agentler
---

# AI Agentler

iyibir WMS, doğal dil ile depo sorgularınıza yanıt veren **7 uzman AI ajanı** ile donatılmıştır. Bu ajanlar, MCP (Model Context Protocol) protokolü üzerinden WMS veritabanına bağlanarak anlık veri sunar.

---

## MCP (Model Context Protocol) Nedir?

MCP, AI modellerinin harici veri kaynaklarına güvenli ve standart bir şekilde bağlanmasını sağlayan bir protokoldür. iyibir WMS'teki ajanlar:

- WMS veritabanına **salt okunur** erişimle bağlanır.
- Türkçe doğal dil sorularını anlayarak ilgili verileri çeker.
- Yanıtları okunabilir ve anlaşılır formatta sunar.
- **Hiçbir veri değişikliği yapmaz** — yalnızca sorgulama yapabilirler.

---

## Güvenlik

:::warning Önemli Güvenlik Notu
AI ajanları salt okunur yetkiyle çalışır. Hiçbir ajan stok değişikliği, sipariş oluşturma veya herhangi bir yazma işlemi yapamaz. Tüm bağlantılar şifreli (TLS) kanallar üzerinden gerçekleştirilir.
:::

- AI ajanlarına erişim yalnızca yetkili kullanıcılara açıktır.
- Her AI sorgusu denetim loguna kaydedilir.
- Offline modda AI ajanları kullanılamaz (sunucu bağlantısı gerektirir).
- Hassas müşteri veya fiyat bilgisi sorgularda maskelenerek gösterilir.

---

## 7 Uzman Ajan

| # | Ajan | Uzmanlık Alanı |
|---|---|---|
| 1 | [Stok Uzmanı](./stok-uzmani) | Anlık stok, lot takibi, depo karşılaştırması |
| 2 | [Satış Uzmanı](./satis-uzmani) | Satış siparişleri, sevkiyat durumu, müşteri sorguları |
| 3 | [Satın Alma Uzmanı](./satin-alma-uzmani) | Satın alma siparişleri, tedarikçi bilgisi, bekleyen kabuller |
| 4 | [Üretim Uzmanı](./uretim-uzmani) | Üretim emirleri, kapasite durumu, reçete (BOM) |
| 5 | [Talep Uzmanı](./talep-uzmani) | Talep planlama, karşılanmamış talepler |
| 6 | [Sayım Uzmanı](./sayim-uzmani) | Sayım planlaması, fark analizi, doğrulama |
| 7 | [Fason Uzmanı](./fason-uzmani) | Taşeron takibi, fason durumu |

---

## Nasıl Erişilir?

AI ajanlarına web arayüzündeki sohbet panelinden veya entegre Claude arayüzünden ulaşabilirsiniz:

1. Web arayüzünde sağ alt köşedeki **AI Asistan** ikonuna tıklayın.
2. Sohbet paneli açılır.
3. Sorgunuzu Türkçe olarak yazın.
4. Sistem ilgili ajanı otomatik seçer veya ajan listesinden manuel seçebilirsiniz.

---

## Örnek Sorgular

```
"A-01 lokasyonunda ne var?"
"Bu hafta hangi ürünlerin stoğu kritik seviyenin altına düştü?"
"L202505001 nolu lot şu an hangi lokasyonda?"
"Bugün kaç adet mal kabul yapıldı?"
"Mustafa Tedarik'ten bekleyen siparişim var mı?"
```
