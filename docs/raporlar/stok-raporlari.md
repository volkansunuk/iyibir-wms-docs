---
title: Stok Raporları
sidebar_label: Stok Raporları
sidebar_position: 2
---

# Stok Raporları

Stok raporları, depo stoklarının anlık durumunu, lot geçmişini ve kritik seviyeleri analiz etmek için kullanılır.

---

## Anlık Stok Durumu Raporu

Tüm ürünlerin mevcut stok miktarlarını depo ve lokasyon bazında gösterir.

**Filtreler:**
- Depo (tek veya çoklu)
- Ürün grubu (Logo Tiger'dan)
- Minimum/maksimum stok aralığı
- Yalnızca hareketli ürünler
- Yalnızca kritik stok altındakiler

**Sütunlar:**

| Sütun | Açıklama |
|---|---|
| Malzeme Kodu | Tiger malzeme kodu |
| Malzeme Adı | Ürün tanımı |
| Ürün Grubu | Tiger'daki grup |
| Toplam Miktar | Tüm lokasyonlardaki toplam |
| Birim | Ölçü birimi |
| Lokasyon Sayısı | Kaç farklı gözde bulunuyor |
| Son Hareket | En son giriş/çıkış tarihi |
| Minimum Stok | Tanımlı minimum seviye |
| Durum | Normal / Kritik / Kritik Altı |

:::tip
Bu raporu haftalık olarak zamanlanmış e-posta ile alırsanız, stok planlaması açısından proaktif bir izleme sağlarsınız.
:::

---

## Lot Takip Raporu

Belirli bir ürün veya lot numarası için tüm geçmiş hareketleri izleyebilirsiniz.

**Filtreler:**
- Lot numarası
- Ürün
- Tarih aralığı
- Hareket türü (Giriş, Çıkış, Transfer)

**Sütunlar:**

| Sütun | Açıklama |
|---|---|
| Tarih/Saat | Hareketin zamanı |
| Hareket Türü | Mal Kabul, Sevkiyat, Transfer vb. |
| Miktar | Hareket miktarı (+/-) |
| Lokasyon | Kaynak ve/veya hedef |
| Kullanıcı | İşlemi yapan operatör |
| Belge No | WMS hareket numarası |
| Tiger Belge | İlişkili Tiger belgesi (varsa) |

:::info
Lot takip raporu, müşteri şikayeti veya geri çağırma (recall) durumlarında hangi müşterilere o partiden ürün gittiğini bulmak için kritik öneme sahiptir.
:::

---

## Kritik Stok Raporu

Minimum stok seviyesinin altına düşmüş veya yaklaşmış ürünleri listeler.

**Uyarı seviyeleri:**
- **Kırmızı:** Minimum stok altında
- **Sarı:** Minimum stoğun %120'sinin altında (yaklaşıyor)
- **Yeşil:** Normal

**Bu raporu kim kullanmalı:** Tedarik ve satın alma planlama ekipleri.

---

## Son Kullanma Tarihi Raporu

Süresi dolmak üzere olan lotları tarih sırasıyla listeler.

**Filtreler:**
- Kaç gün içinde dolacak (7, 15, 30, 60, 90 gün)
- Depo
- Ürün grubu

:::warning
Bu raporu en az haftada bir gözden geçirin. FEFO metodunu uygulasanız bile lot durumlarının manuel denetimi, waste (israf) önleme açısından önemlidir.
:::

---

## Stok Değer Raporu

Stokun parasal değerini ürün, depo veya ürün grubu bazında gösterir.

| Sütun | Açıklama |
|---|---|
| Malzeme | Ürün kodu ve adı |
| Miktar | Mevcut stok |
| Birim Fiyat | Tiger alış fiyatı |
| Toplam Değer | Miktar × Birim Fiyat |

:::info
Stok değer raporu yalnızca **Admin ve Yönetici** rolleri tarafından görüntülenebilir. Birim fiyat bilgisi gizlilik kapsamındadır.
:::
