---
title: Stok Uzmanı
sidebar_label: Stok Uzmanı
sidebar_position: 2
---

# Stok Uzmanı

Stok Uzmanı, depo stoklarını sorgulamak, lot takibi yapmak ve depolar arası stok karşılaştırması için kullanılan AI ajanıdır.

---

## Yetenekler

- Belirli bir ürünün tüm depolardaki mevcut stoğunu sorgulama
- Lot numarasına göre ürünün konumunu bulma
- Kritik stok seviyesinin altındaki ürünleri listeleme
- Son kullanma tarihi yaklaşan lotları sorgulama
- Depo doluluk oranlarını karşılaştırma
- Stok hareket özetlerini görüntüleme

---

## Örnek Sorular ve Yanıtlar

**Soru:** "EPOKSI-001 ürününün Ana Depo'daki stoğu ne kadar?"

> **Stok Uzmanı:** EPOKSI-001 — Epoksi Reçine ürününün Ana Depo'daki mevcut stoğu **247 kg** olup 3 farklı lokasyonda bulunmaktadır:
> - A-02-03: 120 kg (Lot: L202504012)
> - A-02-04: 85 kg (Lot: L202503008)
> - A-03-01: 42 kg (Lot: L202502001)

---

**Soru:** "Son kullanma tarihi bu ay dolacak lotlar hangileri?"

> **Stok Uzmanı:** Mayıs 2025'te son kullanma tarihi dolacak **4 lot** bulunmaktadır: [liste görünür]

---

**Soru:** "L202505001 nolu lot nerede?"

> **Stok Uzmanı:** L202505001 nolu lot, HAMMADDE-042 ürününe ait. Şu an B-01-02 lokasyonunda, **350 adet** bulunmaktadır.

---

## Kısıtlamalar

:::info
- Stok uzmanı verileri **okuyabilir ancak değiştiremez**.
- Stok hareketleri (giriş/çıkış) yalnızca WMS operasyonları üzerinden yapılabilir.
- Sorgular gerçek zamanlıdır; sayım sırasında anlık durum yansır.
:::
