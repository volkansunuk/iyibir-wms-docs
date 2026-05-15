---
id: intro
title: iyibir WMS Nedir?
sidebar_label: Giriş
sidebar_position: 1
slug: /intro
---

# iyibir WMS — Depo Yönetim Sistemi

**iyibir WMS**, orta ve büyük ölçekli işletmelerin depo operasyonlarını uçtan uca dijitalleştiren, Logo Tiger ERP ile entegre çalışan modern bir Depo Yönetim Sistemi'dir. Mobil uygulama (Android/iOS) ve web arayüzü (Blazor) ile her ortamda erişilebilir; 7 AI ajanı ile akıllı karar desteği sunar.

---

## Temel Özellikler

| Özellik | Açıklama |
|---|---|
| Logo Tiger Entegrasyonu | GoDb üzerinden salt okunur bağlantı; irsaliyeler Tiger'a yazılır |
| Mobil Uygulama | .NET MAUI ile Android 8+ ve iOS 14+ desteği |
| Web Arayüzü | Blazor Server tabanlı yönetim ve raporlama ekranı |
| Barkod Tarama | Kamera ve endüstriyel okuyucu (Zebra/Honeywell) desteği |
| Lot/Seri Takibi | Ürün bazında lot oluşturma, bölme ve birleştirme |
| Offline Mod | Bağlantı kesildiğinde işlem yapma, yeniden bağlanınca senkronizasyon |
| AI Agentlar | 7 uzman ajan ile stok, satış, üretim ve daha fazlası için doğal dil sorguları |

---

## Logo Tiger ERP Entegrasyonu

iyibir WMS, Logo Tiger ERP sisteminize **GoDb (salt okunur)** bağlantısı üzerinden bağlanır. Bu sayede:

- Satın alma siparişleri, satış siparişleri ve üretim emirleri Tiger'dan otomatik olarak çekilir.
- Depo hareketleri (irsaliye, sevkiyat) WMS üzerinden tamamlandıktan sonra Tiger'a geri yazılır.
- ERP veri bütünlüğü korunur; WMS hiçbir zaman Tiger veritabanına doğrudan yazma yapmaz.

:::warning Önemli
GoDb bağlantısı yalnızca okuma yetkisiyle yapılandırılmalıdır. Yazma işlemleri Logo Tiger'ın kendi API katmanı üzerinden gerçekleştirilir.
:::

---

## 7 Operasyon Kategorisi

iyibir WMS aşağıdaki 7 ana operasyon kategorisini kapsar:

1. **Mal Kabul** — Serbest, siparişe bağlı, iade ve irsaliye iadesi
2. **Malzeme** — Giriş, çıkış, transfer ve lot işlemleri
3. **Sevkiyat** — Serbest, sipariş toplama, transfer ve iade sevkiyat
4. **Sayım** — Depo, lokasyon ve ürün bazlı sayım
5. **Üretim** — Üretim emri, hızlı üretim ve yeniden işleme
6. **Fason** — Fason çıkış, kabul, transfer ve üretim
7. **Talep** — Talep oluşturma, karşılama ve bekleyen talepler

---

## AI Uzman Agentlar

iyibir WMS, MCP (Model Context Protocol) protokolü üzerinden çalışan **7 AI uzman ajanı** ile donatılmıştır. Bu ajanlar sayesinde:

- Türkçe doğal dil ile stok sorguları yapabilirsiniz.
- Bekleyen siparişleri, lot durumlarını ve üretim emirlerini anında sorgulayabilirsiniz.
- Tüm sorgular **salt okunur** olup veri üzerinde herhangi bir değişiklik yapılmaz.

:::info
AI ajanları hakkında detaylı bilgi için [AI Agentler](/ai-agentler) bölümüne bakınız.
:::

---

## Sonraki Adımlar

- [Hızlı Başlangıç](/giris) — Sistemi ilk kez kurmak için adım adım rehber
- [Operasyonlar](/operasyonlar) — Tüm depo operasyonlarının detaylı açıklamaları
- [Kurulum & Yapılandırma](/kurulum) — Sunucu, SQL Server ve Logo Tiger entegrasyon kılavuzu
