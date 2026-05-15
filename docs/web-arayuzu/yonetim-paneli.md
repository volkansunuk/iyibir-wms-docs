---
title: Yönetim Paneli
sidebar_label: Yönetim Paneli
sidebar_position: 4
---

# Yönetim Paneli

Yönetim Paneli, sistem yöneticilerinin kullanıcıları, entegrasyon durumunu ve sistem ayarlarını yönettiği merkezi yapılandırma ekranıdır.

---

## Erişim Yetkisi

:::warning
Yönetim Paneli yalnızca **Admin** rolüne sahip kullanıcılar tarafından erişilebilir. Yönetici ve Operatör rolleri bu panele giremez.
:::

---

## Kullanıcı Yönetimi

**Yönetim > Kullanıcılar** ekranında:

- Yeni kullanıcı oluşturma
- Kullanıcı bilgilerini düzenleme
- Rol değiştirme
- Depo yetkisi güncelleme
- Kullanıcıyı devre dışı bırakma / aktif etme
- Şifre sıfırlama

Detaylı rehber için [Kullanıcı & Roller](../kurulum/kullanici-roller) sayfasına bakınız.

---

## Sistem Ayarları

**Yönetim > Ayarlar** ekranında yapılandırılabilecek seçenekler:

| Ayar Grubu | Ayarlar |
|---|---|
| Genel | Şirket adı, zaman dilimi, dil |
| Güvenlik | Şifre politikası, oturum süresi |
| Bildirimler | E-posta sunucusu (SMTP), push bildirim servisi |
| Entegrasyon | Logo Tiger bağlantı parametreleri |
| Barkod | Varsayılan barkod formatı, etiket boyutu |
| Raporlar | Şirket logosu, rapor başlık bilgileri |

---

## Entegrasyon Durumu

**Yönetim > Entegrasyon Durumu** ekranı, tüm dış sistem bağlantılarının anlık durumunu gösterir:

| Bağlantı | Durum Göstergesi | Aksiyon |
|---|---|---|
| Logo Tiger GoDb | Yeşil / Sarı / Kırmızı | Test Et |
| Logo Tiger API | Yeşil / Kırmızı | Test Et |
| SMTP E-posta | Yeşil / Kırmızı | Test Et |
| Push Bildirim | Yeşil / Kırmızı | Test Et |

- **Yeşil:** Bağlantı aktif ve sağlıklı
- **Sarı:** Bağlantı var ancak gecikme yüksek
- **Kırmızı:** Bağlantı kurulamıyor

:::tip
Entegrasyon sorunlarının kaynağını bulmak için **Test Et** butonuna tıklayın; detaylı hata mesajı ve olası çözüm önerileri görüntülenir.
:::

---

## Denetim Logları

**Yönetim > Denetim Logları** ekranı, sistemdeki tüm kritik işlemlerin kaydını tutar:

- Kullanıcı giriş/çıkış kayıtları
- Başarısız giriş denemeleri
- Kullanıcı oluşturma/düzenleme/silme
- Sistem ayarı değişiklikleri
- Rol değişiklikleri

Loglar **tarih aralığı, kullanıcı ve işlem türüne** göre filtrelenebilir; Excel olarak dışa aktarılabilir.

:::info
Denetim logları otomatik olarak silinmez ve 2 yıl boyunca saklanır. Uzun vadeli arşivleme için periyodik olarak dışa aktarmanız önerilir.
:::

---

## Sistem Sağlığı

**Yönetim > Sistem Sağlığı** ekranında:

- CPU ve bellek kullanımı
- Veritabanı bağlantı havuzu durumu
- Aktif kullanıcı sayısı
- Son yedekleme tarihi
- Uygulama sürümü ve dağıtım tarihi

---

## Veri Yedekleme

**Yönetim > Yedekleme** ekranından manuel yedekleme tetikleyebilir veya yedekleme zamanlamasını yapılandırabilirsiniz:

```
Günlük tam yedekleme: Her gece 02:00
Haftalık yedekleme saklama: Son 4 hafta
Aylık yedekleme saklama: Son 12 ay
Yedekleme hedefi: \\FILESERVER\WMSBackup veya Azure Blob Storage
```
