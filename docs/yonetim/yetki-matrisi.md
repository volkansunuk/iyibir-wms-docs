---
title: Yetki Matrisi
sidebar_label: Yetki Matrisi
sidebar_position: 3
---

# Yetki Matrisi

Bu sayfa, iyibir WMS'deki üç rolün (Admin, Yönetici, Operatör) hangi operasyonlara ve özelliklere erişebildiğini gösterir.

---

## Operasyon Yetkileri

| Operasyon | Admin | Yönetici | Operatör |
|---|---|---|---|
| **MAL KABUL** | | | |
| Serbest Mal Kabul | Tam | Tam | Tam |
| Siparişe Bağlı Mal Kabul | Tam | Tam | Tam |
| İade Mal Kabul | Tam | Tam | Tam |
| İrsaliye İadesi | Tam | Tam | Hayır |
| **MALZEME** | | | |
| Malzeme Giriş | Tam | Tam | Tam |
| Malzeme Çıkış | Tam | Tam | Tam |
| Transfer | Tam | Tam | Tam |
| Lot Oluşturma | Tam | Tam | Tam |
| Lot Bölme/Birleştirme | Tam | Tam | Hayır |
| Stok Düzeltme | Tam | Tam | Hayır |
| **SEVKİYAT** | | | |
| Serbest Sevkiyat | Tam | Tam | Tam |
| Sipariş Toplama | Tam | Tam | Tam |
| Sevkiyat Transferi | Tam | Tam | Tam |
| İade Sevkiyat | Tam | Tam | Hayır |
| **SAYIM** | | | |
| Sayım Planı Oluşturma | Tam | Tam | Hayır |
| Sayım Gerçekleştirme | Tam | Tam | Tam |
| Sayım Fark Onayı | Tam | Tam | Hayır |
| **ÜRETİM** | | | |
| Üretim Emri | Tam | Tam | Tam |
| Hızlı Üretim | Tam | Tam | Tam |
| Yeniden İşleme | Tam | Tam | Tam |
| **FASON** | | | |
| Fason Çıkış | Tam | Tam | Tam |
| Fason Kabul | Tam | Tam | Tam |
| Fason Transfer | Tam | Tam | Hayır |
| **TALEP** | | | |
| Talep Oluşturma | Tam | Tam | Tam |
| Talep Onaylama | Tam | Tam | Hayır |
| Talep Karşılama | Tam | Tam | Tam |

---

## Yönetim Yetkileri

| Özellik | Admin | Yönetici | Operatör |
|---|---|---|---|
| Kullanıcı Oluşturma | Evet | Hayır | Hayır |
| Kullanıcı Düzenleme | Evet | Hayır | Hayır |
| Kullanıcı Deaktif Etme | Evet | Hayır | Hayır |
| Şifre Sıfırlama | Evet | Kendi | Kendi |
| Depo Tanımlama | Evet | Hayır | Hayır |
| Lokasyon Tanımlama | Evet | Evet | Hayır |
| Sistem Ayarları | Evet | Hayır | Hayır |
| Entegrasyon Ayarları | Evet | Hayır | Hayır |
| Denetim Logları | Evet | Görüntüle | Hayır |
| Tüm Raporlar | Evet | Evet | Kendi İşlemleri |
| AI Ajanlar | Evet | Evet | Evet |
| Barkod Şablonları | Evet | Evet | Yazdır |

---

## Özel Yetki Durumları

Bazı işlemler için yetki, normal rolle sınırlı değildir:

:::info
**Acil Durum Yetkileri:** Sistem yöneticisi belirli kullanıcılara geçici süre için ek yetki tanımlayabilir. Bu geçici yetkiler denetim loguna işlenir ve süresi dolduğunda otomatik geri alınır.
:::

:::warning
Yetki matrisi değişiklikleri yalnızca Admin rolü tarafından yapılabilir ve değişiklik anında tüm aktif oturumlara yansır.
:::
