---
title: Bildirim Ayarları
sidebar_label: Bildirim Ayarları
sidebar_position: 5
---

# Bildirim Ayarları

iyibir WMS, kritik olaylar için hem push bildirim (mobil) hem de e-posta ile bildirim gönderir. Bu sayfa bildirim yapılandırmasını açıklar.

---

## Bildirim Türleri

| Bildirim | Hedef Rol | Kanal |
|---|---|---|
| Yeni Talep Oluşturuldu | Yönetici | Push + E-posta |
| Acil Talep | Yönetici + Admin | Push + E-posta |
| Kritik Stok Seviyesi | Yönetici + Admin | Push + E-posta |
| Son Kullanma Tarihi Yaklaşıyor | Yönetici | E-posta |
| Sayım Farkı Onay Bekliyor | Admin | Push + E-posta |
| Logo Tiger Bağlantı Hatası | Admin | E-posta |
| Geciken Fason Emri | Yönetici | Push |
| Başarısız Giriş Denemesi | Admin | E-posta |
| Büyük Stok Çıkışı (eşik aşıldı) | Yönetici + Admin | Push |

---

## E-posta (SMTP) Yapılandırması

Admin, **Ayarlar > E-posta** ekranından SMTP sunucusunu yapılandırır:

```
SMTP Sunucu: smtp.sirketiniz.com
Port: 587 (TLS) veya 465 (SSL)
Kullanıcı Adı: wms-noreply@sirketiniz.com
Şifre: ••••••••
Gönderen Adı: iyibir WMS
```

**Test E-postası:** Yapılandırma kaydedildikten sonra **Test E-postası Gönder** butonu ile doğrulayın.

:::tip
E-posta gönderimi için ayrı bir "noreply" e-posta hesabı oluşturmanız önerilir. Kurumsal hesabı WMS ile paylaşmayın.
:::

---

## Push Bildirim Yapılandırması

Mobil uygulamaya push bildirim gönderimi için:

- **Android:** Firebase Cloud Messaging (FCM) kullanılır. FCM Server Key'ini **Ayarlar > Push Bildirimler** ekranına girin.
- **iOS:** Apple Push Notification Service (APNs) kullanılır. .p8 sertifika dosyasını yükleyin.

---

## Kullanıcı Bildirim Tercihleri

Her kullanıcı kendi bildirim tercihlerini ayarlayabilir:

1. Mobil uygulamada **Ayarlar > Bildirimler** menüsüne gidin.
2. Hangi olaylar için bildirim almak istediğinizi seçin.
3. **Sessiz Saatler** — Belirli saatler arasında bildirim almamak için zaman aralığı belirleyin.

**Örnek terciher:**

| Bildirim | Tercih |
|---|---|
| Bana Atanan Talepler | Açık |
| Tüm Depodaki Talepler | Kapalı |
| Stok Uyarıları | Açık |
| Sayım Hatırlatıcıları | Açık |

:::info
Sistem düzeyinde zorunlu bildirimler (güvenlik uyarıları, kritik bağlantı hataları) kullanıcı tercihleri gözetilmeksizin her zaman gönderilir.
:::

---

## Bildirim Geçmişi

Gönderilen tüm bildirimler **Yönetim > Bildirim Geçmişi** ekranında 30 gün saklanır:

- Gönderim tarihi/saati
- Alıcı kullanıcı
- Bildirim türü
- Teslim durumu (İletildi / Hata)
