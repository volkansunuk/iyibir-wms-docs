---
title: Kullanıcı Yönetimi
sidebar_label: Kullanıcı Yönetimi
sidebar_position: 2
---

# Kullanıcı Yönetimi

Sistem yöneticileri bu ekranı kullanarak tüm kullanıcıları merkezi olarak yönetir.

---

## Kullanıcı Oluşturma

1. **Yönetim > Kullanıcı Yönetimi > Yeni Kullanıcı** butonuna tıklayın.
2. Zorunlu alanları doldurun:

| Alan | Açıklama |
|---|---|
| Ad Soyad | Tam ad |
| Kullanıcı Adı | Giriş adı (benzersiz, Türkçe karakter kullanmayın) |
| E-posta | Bildirim ve şifre sıfırlama için |
| Telefon | Push bildirim kaydı için (opsiyonel) |
| Rol | Admin / Yönetici / Operatör |
| Depolar | Erişim yetkisi verilecek depolar (çoklu seçim) |

3. **İlk Giriş Şifre Değiştir** seçeneğini aktif bırakın.
4. **Kaydet** butonuna tıklayın.

Sistem, geçici şifreyi otomatik oluşturur ve kullanıcıya e-posta gönderir.

:::tip
Kullanıcı adları için şu formatı öneririz: `ad.soyad` (örn. `ahmet.yilmaz`). Bu format raporlarda kullanıcıları kolayca tanımlamanızı sağlar.
:::

---

## Kullanıcı Düzenleme

1. Kullanıcı listesinden ilgili kişiyi bulun.
2. **Düzenle** ikonuna tıklayın.
3. Değiştirmek istediğiniz alanları güncelleyin.
4. **Kaydet** ile değişiklikleri uygulayın.

:::warning
Kullanıcı adı (giriş adı) değiştirilemez. Yanlış oluşturulan hesabı devre dışı bırakıp yeni hesap açın.
:::

---

## Kullanıcı Devre Dışı Bırakma

Görevden ayrılan veya uzun süre çalışmayacak kullanıcıları **silmek yerine devre dışı bırakın**:

1. Kullanıcı listesinde ilgili kişiyi seçin.
2. **Devre Dışı Bırak** butonuna tıklayın.
3. Devre dışı kullanıcı sisteme giriş yapamaz.
4. Geçmiş işlem kayıtlarında adı görünmeye devam eder (veri bütünlüğü korunur).

---

## Şifre Sıfırlama

**Admin tarafından sıfırlama:**

1. Kullanıcı profilini açın.
2. **Şifreyi Sıfırla** butonuna tıklayın.
3. Yeni geçici şifre kullanıcının e-postasına gönderilir.

**Kullanıcı tarafından sıfırlama:**

1. Giriş ekranında **Şifremi Unuttum** bağlantısına tıklayın.
2. E-posta adresini girin.
3. Gelen bağlantı ile yeni şifre belirleyin.

---

## Kullanıcı Aktivite Özeti

Her kullanıcı profilinde şu istatistikler görünür:

- Son giriş tarihi ve saati
- Bu ayki işlem sayısı
- En çok kullandığı operasyon türü
- Aktif seans sayısı
