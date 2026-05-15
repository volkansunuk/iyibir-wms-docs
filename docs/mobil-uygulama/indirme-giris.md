---
title: İndirme ve Giriş
sidebar_label: İndirme & Giriş
sidebar_position: 2
---

# İndirme ve Giriş

---

## Android — APK İndirme

iyibir WMS Android uygulaması, Google Play yerine kurumsal sunucudan dağıtılır.

1. Android cihazın tarayıcısından şu adrese gidin:
   ```
   https://<sunucu-adresi>/mobile/android
   ```
2. **APK'yı İndir** butonuna dokunun.
3. İndirme tamamlandıktan sonra APK dosyasına dokunun.
4. "Bilinmeyen Kaynaklardan Yükleme" iznini verin (Android 8+: Ayarlar > Uygulamalar > Özel Uygulama Erişimi > Bilinmeyen Uygulamalar).
5. Kurulum tamamlanana kadar bekleyin.

:::warning
APK dosyasını yalnızca kurumsal WMS sunucunuzdan indirin. Üçüncü taraf kaynaklardan indirilen dosyalar güvenlik riski oluşturur.
:::

:::tip MDM Dağıtımı
Çok sayıda cihaza dağıtım yapıyorsanız Microsoft Intune, SOTI veya benzeri bir MDM (Mobile Device Management) çözümü ile APK'yı toplu olarak dağıtabilirsiniz. Detaylar için sistem yöneticinizle görüşün.
:::

---

## iOS — TestFlight Kurulumu

1. App Store'dan **TestFlight** uygulamasını indirin.
2. Sistem yöneticinizden TestFlight davet bağlantısını alın.
3. Davet bağlantısına dokunarak TestFlight üzerinden uygulamayı yükleyin.
4. TestFlight'ta **iyibir WMS** uygulamasını bulun ve **Yükle** butonuna dokunun.

:::info
iOS dağıtımı TestFlight ile gerçekleştirildiğinden her 90 günde bir uygulama güncellemesi almanız gerekebilir. Uygulama süre dolmadan önce bildirim gönderir.
:::

---

## İlk Giriş

Uygulama açıldığında karşınıza giriş ekranı gelir.

### Sunucu URL'si Ayarlama

İlk açılışta sunucu adresini girmeniz gerekir:

1. Giriş ekranının altındaki **Sunucu Ayarları** bağlantısına dokunun.
2. **Sunucu URL'si** alanına kurumsal WMS adresinizi girin:
   ```
   https://wms.sirketiniz.com
   ```
   veya
   ```
   https://192.168.1.100
   ```
3. **Kaydet** butonuna dokunun.
4. Uygulama bağlantıyı test eder; yeşil onay göstergesi başarılı bağlantıyı ifade eder.

:::tip
Sunucu adresi tek seferlik girilir. Sonraki açılışlarda otomatik olarak hatırlanır. Ancak sunucu adresi değiştiğinde Ayarlar > Sunucu menüsünden güncelleyebilirsiniz.
:::

### Kullanıcı Girişi

1. **Kullanıcı Adı** ve **Şifre** alanlarını doldurun.
2. **Giriş Yap** butonuna dokunun.
3. İlk girişte sistem şifre değiştirmenizi isteyebilir.
4. Giriş başarılı olduğunda ana ekran görünür.

---

## Güvenli Giriş (Biyometrik)

PIN veya parmak izi ile hızlı giriş:

1. Giriş yaptıktan sonra **Ayarlar > Güvenlik** menüsüne gidin.
2. **Biyometrik Giriş** seçeneğini etkinleştirin.
3. Parmak izi veya yüz tanıma ile doğrulayın.

---

## Şifre Unuttum

Şifrenizi unuttuysanız:

1. Giriş ekranında **Şifremi Unuttum** bağlantısına dokunun.
2. E-posta adresinizi girin.
3. Gelen e-postadaki bağlantı ile şifrenizi sıfırlayın.

:::info
Şifre sıfırlama özelliği için sistem yöneticisinin SMTP ayarlarını yapılandırmış olması gerekir.
:::
