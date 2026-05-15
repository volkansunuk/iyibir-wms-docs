---
title: Offline Mod
sidebar_label: Offline Mod
sidebar_position: 5
---

# Offline Mod

iyibir WMS mobil uygulaması, Wi-Fi bağlantısının kesik olduğu depo bölgelerinde de temel operasyonların sürdürülmesine olanak tanır.

---

## Offline Modda Çalışan Operasyonlar

| Operasyon | Offline Desteği | Notlar |
|---|---|---|
| Mal Kabul — Serbest | Evet | Lokasyon ve ürün verileri önbellekte |
| Mal Kabul — Siparişe Bağlı | Kısmi | Sipariş listesi önceden indirilmişse |
| Malzeme Giriş/Çıkış | Evet | |
| Malzeme Transfer | Evet | |
| Sevkiyat — Serbest | Evet | |
| Sayım | Evet | Tam offline desteği |
| Üretim — Hızlı Üretim | Evet | |
| Fason Çıkış | Evet | |
| Talep Oluşturma | Evet | |
| AI Ajan Sorguları | Hayır | Sunucu bağlantısı gerektirir |
| Raporlar | Hayır | Gerçek zamanlı veri gerektirir |

:::info
Offline modda yapılan işlemler cihazda yerel olarak saklanır. Bağlantı sağlandığında otomatik olarak sunucuya gönderilir.
:::

---

## Offline Moda Geçiş

Uygulama bağlantıyı otomatik algılar:

1. Üst çubukta **turuncu "Çevrimdışı"** göstergesi belirdiğinde offline moda geçilmiştir.
2. Desteklenen operasyonlar normal şekilde çalışmaya devam eder.
3. Desteklenmeyen operasyonlar (AI sorguları, raporlar) grileşir ve erişilemez olur.

Bağlantı geri geldiğinde gösterge **yeşil "Çevrimiçi"** olarak değişir ve senkronizasyon otomatik başlar.

---

## Önbellek Yönetimi

Offline çalışabilmek için uygulama bazı verileri önceden indirir:

- **Malzeme listesi** — Tüm aktif ürün kodları ve adları
- **Lokasyon listesi** — Depo hiyerarşisi
- **Lot bilgileri** — Mevcut lotlar
- **Bekleyen siparişler** — Son senkronizasyondaki aktif siparişler

Önbellek güncelleme sıklığı **Ayarlar > Çevrimdışı Veri** menüsünden yapılandırılabilir (varsayılan: her 4 saatte bir).

:::tip
Uzun süre çevrimdışı kalacaksanız (örn. sefer öncesi bir sabah) senkronizasyonu manuel olarak tetikleyin: **Ayarlar > Veriyi Şimdi Güncelle**.
:::

---

## Senkronizasyon Süreci

Bağlantı sağlandığında uygulama şu sırayla senkronize olur:

1. **Yerel değişiklikler sunucuya gönderilir** — Offline yapılan tüm işlemler sıraya alınır ve sunucuya yüklenir.
2. **Sunucu doğrulaması** — Sunucu her işlemi doğrular; geçerli işlemler onaylanır.
3. **Hatalı işlemler geri bildirilir** — Çakışan veya geçersiz işlemler hata olarak işaretlenir.
4. **Önbellek güncellenir** — Sunucudan güncel veri alınarak yerel önbellek yenilenir.

---

## Çakışma Çözümü

Offline işlem yapılırken sunucudaki veri değişirse çakışma oluşabilir:

| Çakışma Türü | Çözüm Yöntemi |
|---|---|
| Aynı lot iki kullanıcı tarafından farklı lokasyona taşınmış | Son güncelleyen kazanır; önceki kullanıcı uyarılır |
| Miktar tutarsızlığı | Operatör manuel doğrulama yapar |
| Silinmiş ürün/lokasyon | İşlem hata olarak işaretlenir; Yönetici onayı gerekir |

:::warning
Senkronizasyon sırasında hata oluşan işlemler **Son İşlemlerim > Hatalı** listesinde görünür. Bu işlemleri Yönetici ile birlikte incelemeniz önerilir.
:::

---

## Offline Veri Güvenliği

- Cihazda saklanan veriler AES-256 ile şifrelenir.
- Uygulama kaldırıldığında tüm yerel veriler silinir.
- Belirli bir süre (varsayılan: 7 gün) giriş yapılmazsa yerel veriler otomatik temizlenir.
