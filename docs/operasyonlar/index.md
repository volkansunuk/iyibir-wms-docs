---
title: Operasyonlar
sidebar_label: Genel Bakış
sidebar_position: 1
slug: /operasyonlar
---

# Operasyonlar

iyibir WMS, depo yaşam döngüsünün tamamını kapsayan **7 operasyon kategorisi** sunar. Her kategori, birbirine bağlı alt operasyonlardan oluşur.

---

## Operasyon Kategorileri

| # | Kategori | Renk | Açıklama | Alt Operasyon Sayısı |
|---|---|---|---|---|
| 1 | [Mal Kabul](./mal-kabul/) | Yeşil | Tedarikçiden veya iadeden gelen malın depoya alınması | 4 |
| 2 | [Malzeme](./malzeme/) | Mavi | Depo içi ve depolar arası malzeme hareketleri | 4 |
| 3 | [Sevkiyat](./sevkiyat/) | Turuncu | Müşteriye veya transfer noktasına ürün gönderme | 4 |
| 4 | [Sayım](./sayim/) | Mor | Depo, lokasyon veya ürün bazlı stok sayımı | 3 |
| 5 | [Üretim](./uretim/) | Kırmızı | Üretim emrine bağlı veya serbest üretim hareketleri | 3 |
| 6 | [Fason](./fason/) | Sarı | Taşeron firmaya malzeme gönderme ve ürün alma | 4 |
| 7 | [Talep](./talep/) | Pembe | Departman veya hat bazlı malzeme talebi yönetimi | 3 |

---

## Logo Tiger Entegrasyonu ve Operasyonlar

Bazı operasyonlar Logo Tiger ERP verileriyle doğrudan ilişkilidir:

| Operasyon | Tiger Bağlantısı |
|---|---|
| Siparişe Bağlı Mal Kabul | Tiger Satın Alma Siparişleri |
| Sipariş Toplama (Sevkiyat) | Tiger Satış Siparişleri |
| Üretim Emri | Tiger Üretim Emirleri |
| Fason Çıkış/Kabul | Tiger Fason Emirleri |

:::info
Tiger bağlantılı operasyonlarda WMS, ilgili belgeyi Tiger'dan okur. İşlem tamamlandıktan sonra irsaliye veya hareket bilgisi Tiger'a yazılır.
:::

---

## Lot ve Seri Takibi

Tüm operasyon kategorilerinde lot ve seri takibi desteklenir:

- **Lot Takibi:** Aynı üretim grubundan gelen ürünler tek lot altında toplanır. FIFO (İlk Giren İlk Çıkar) ve FEFO (İlk Süresi Dolan İlk Çıkar) metodları desteklenir.
- **Seri Takibi:** Elektronik veya yüksek değerli ürünler için benzersiz seri numarası takibi yapılır.

---

## Operasyon Durumları

Her operasyon aşağıdaki durumlardan birinde olabilir:

| Durum | Açıklama |
|---|---|
| Taslak | Başlatıldı ama tamamlanmadı |
| Tamamlandı | Başarıyla tamamlandı |
| Hata | İşlem sırasında hata oluştu |
| İptal | Kullanıcı veya yönetici tarafından iptal edildi |
| Onay Bekliyor | Yönetici onayı bekleniyor |

---

## Operasyon Detayları

Her operasyon kategorisinin detaylı kılavuzuna aşağıdaki bağlantılardan ulaşabilirsiniz:

- [Mal Kabul](./mal-kabul/) — Serbest, siparişe bağlı, iade ve irsaliye iadesi
- [Malzeme](./malzeme/) — Giriş, çıkış, transfer, lot işlemleri
- [Sevkiyat](./sevkiyat/) — Serbest, sipariş toplama, transfer, iade
- [Sayım](./sayim/) — Depo, lokasyon, ürün sayımı
- [Üretim](./uretim/) — Üretim emri, hızlı üretim, yeniden işleme
- [Fason](./fason/) — Fason çıkış, kabul, transfer, üretim
- [Talep](./talep/) — Talep oluşturma, karşılama, bekleyen talepler
