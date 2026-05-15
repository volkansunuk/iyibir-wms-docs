---
title: Dashboard
sidebar_label: Dashboard
sidebar_position: 2
---

# Dashboard

Dashboard, depo operasyonlarının anlık durumunu tek bir ekranda görüntüleyen gerçek zamanlı yönetim panelidir.

---

## KPI Kartları

Sayfanın üst bölümünde yer alan KPI (Anahtar Performans Göstergesi) kartları, en kritik metrikleri özetler:

| KPI Kartı | Açıklama |
|---|---|
| Toplam Stok Değeri | Tüm depolardan aktif stokların toplam değeri |
| Bugünkü Mal Kabul | Bugün tamamlanan mal kabul işlemi sayısı |
| Bekleyen Sevkiyat | İşlem bekleyen sevkiyat emri sayısı |
| Bekleyen Talep | Henüz karşılanmamış talep sayısı |
| Aktif Lot Sayısı | Sistemdeki aktif lot adedi |
| Günlük Hareket | Bugün gerçekleşen toplam hareket sayısı |

Her kart tıklanabilir; üzerine gelince ilgili detay sayfasına yönlendirir.

---

## Depo Seçici

Sayfanın sağ üst köşesindeki **Depo Seçici** ile dashboardu belirli bir depo için filtreyebilirsiniz:

- **Tüm Depolar** — Tüm depoların toplamı
- **Ana Depo** — Yalnızca Ana Depo verisi
- **Hammadde Deposu** — Yalnızca Hammadde Deposu verisi

:::tip
Birden fazla depoyu yöneten kullanıcılar için "Tüm Depolar" görünümü genel durumu izlemek, tek depo seçimi ise operasyonel odaklanma için idealdir.
:::

---

## Grafikler

### Günlük Hareket Grafiği
Son 7 günün hareket sayısını (Mal Kabul, Sevkiyat, Transfer) çubuk grafik ile gösterir.

### Stok Seviyesi Grafiği
Kritik eşiğin altına düşen ürünleri ve mevcut stok seviyelerini görselleştirir.

### Operasyon Dağılımı
Bugünkü operasyonların kategorilere göre dağılımını pasta grafik ile sunar.

---

## Son Aktivite Akışı

Sayfanın alt bölümünde gerçek zamanlı güncellenen bir aktivite akışı yer alır:

- Her hareket anlık olarak listeye eklenir
- Kullanıcı adı, işlem türü, ürün ve miktar bilgisi gösterilir
- Hatalı veya uyarı durumundaki işlemler renkli vurgulanır

:::info
Dashboard verileri 30 saniyede bir otomatik yenilenir. Sayfa yenilemesine gerek yoktur.
:::

---

## Uyarı Paneli

Dashboard'un sağ tarafında kritik uyarılar listelenir:

| Uyarı Türü | Açıklama |
|---|---|
| Düşük Stok | Minimum stok eşiğinin altında olan ürünler |
| Son Kullanma Tarihi | 30 gün içinde dolacak lotlar |
| Bekleyen Onay | Yönetici onayı bekleyen işlemler |
| Entegrasyon Hatası | Logo Tiger bağlantı sorunları |

Her uyarıya tıklayarak ilgili ekrana gidebilirsiniz.
