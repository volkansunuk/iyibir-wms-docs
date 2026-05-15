---
title: Raporlar
sidebar_label: Genel Bakış
sidebar_position: 1
slug: /raporlar
---

# Raporlar

iyibir WMS raporlama modülü, depo operasyonlarını analiz etmek ve yönetim kararlarını desteklemek için kapsamlı raporlar sunar.

---

## Rapor Kategorileri

| Kategori | Açıklama |
|---|---|
| [Stok Raporları](/docs/raporlar/stok-raporlari) | Anlık stok, lot takibi, kritik stok |
| [Hareket Raporları](/docs/raporlar/hareket-raporlari) | Tüm hareket tipleri, kullanıcı/depo bazlı |

---

## Erişim

Raporlara şu yollarla ulaşabilirsiniz:

1. **Web Arayüzü** — Sol menüden **Raporlar** bölümü (tam erişim)
2. **Dashboard** — KPI kartlarından ilgili rapora tıklama
3. **AI Ajan** — Özet sorgular için (detaylı dışa aktarım için web gerekir)
4. **Zamanlanmış E-posta** — Otomatik periyodik rapor alma

---

## Dışa Aktarma Seçenekleri

Tüm raporlar şu formatlarda dışa aktarılabilir:

| Format | Kullanım |
|---|---|
| Excel (.xlsx) | Veri analizi, pivot tablo, filtreleme |
| PDF | Yazdırma, müşteri/yönetici paylaşımı |
| CSV | Üçüncü taraf araçlara veri aktarımı |

---

## İzin Tabanlı Rapor Erişimi

| Rapor Tipi | Admin | Yönetici | Operatör |
|---|---|---|---|
| Tüm Depolar | Evet | Yetkilisi Olduğu | Hayır |
| Kullanıcı Aktivite | Evet | Kendi Ekibi | Kendi |
| Maliyet Raporları | Evet | Hayır | Hayır |
| Stok Raporları | Evet | Evet | Görüntüle |

:::info
Raporların bazı sütunları (birim fiyat, toplam değer) yalnızca Admin ve Yönetici rolleri tarafından görüntülenebilir.
:::
