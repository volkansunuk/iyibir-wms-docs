---
title: Kullanıcı ve Rol Tanımları
sidebar_label: Kullanıcı & Roller
sidebar_position: 5
---

# Kullanıcı ve Rol Tanımları

iyibir WMS, rol tabanlı erişim kontrolü (RBAC) ile çalışır. Her kullanıcıya bir rol ve erişim yetkisi olacağı depolar atanır.

---

## Kullanıcı Rolleri

### Admin (Sistem Yöneticisi)
Tüm sistem ayarlarına ve verilerine tam erişim hakkına sahiptir.

**Yetkiler:**
- Tüm operasyonları gerçekleştirme
- Kullanıcı oluşturma, düzenleme ve devre dışı bırakma
- Depo ve lokasyon tanımları
- Sistem yapılandırması
- Tüm raporlara erişim
- Entegrasyon ayarları
- Denetim loglarını görüntüleme

### Yönetici (Depo Yöneticisi)
Atandığı depolar üzerinde tam operasyonel yetkiye sahiptir.

**Yetkiler:**
- Atandığı depolarda tüm operasyonlar
- Kendi deposundaki kullanıcıların raporlarını görme
- Sayım planlama ve onaylama
- Lokasyon düzenleme
- Excel/PDF rapor alma

### Operatör (Depo Görevlisi)
Günlük depo operasyonlarını yürüten kullanıcıdır.

**Yetkiler:**
- Atandığı depolar için Mal Kabul, Malzeme, Sevkiyat, Sayım, Üretim, Fason, Talep operasyonları
- Kendi işlemlerini görüntüleme
- Barkod tarama ve lot oluşturma

:::warning
Operatör rolündeki kullanıcılar sistem ayarlarına, kullanıcı yönetimine ve entegrasyon yapılandırmasına erişemez.
:::

---

## Kullanıcı Oluşturma

1. Web arayüzünde **Yönetim > Kullanıcı Yönetimi** menüsüne gidin.
2. **Yeni Kullanıcı** butonuna tıklayın.
3. Aşağıdaki alanları doldurun:

| Alan | Açıklama | Zorunlu |
|---|---|---|
| Ad Soyad | Kullanıcının tam adı | Evet |
| Kullanıcı Adı | Giriş için kullanılır (benzersiz) | Evet |
| E-posta | Bildirimler için | Evet |
| Rol | Admin / Yönetici / Operatör | Evet |
| Depolar | Erişim yetkisi verilecek depolar | Evet |
| İlk Giriş Şifre Değiştir | Aktif/Pasif | Evet |

4. **Kaydet** butonuna tıklayın — kullanıcıya e-posta ile geçici şifre gönderilir.

:::tip
İlk giriş şifre değiştirme seçeneğini aktif bırakın. Böylece kullanıcılar sistemin atadığı geçici şifreler yerine kendilerinin belirlediği şifreler kullanır.
:::

---

## Depo Yetkisi Atama

Bir kullanıcıya birden fazla depo atanabilir. Örneğin bir Yönetici, hem Ana Depo hem de Hammadde Deposu'nu yönetebilir.

1. Kullanıcı düzenleme ekranında **Depolar** sekmesine geçin.
2. Yetkili olacağı depoları listeden seçin.
3. Her depo için ayrıca **Sadece Görüntüleme** (raporlama) yetkisi de verebilirsiniz.

---

## Şifre Politikası

Sistem yöneticisi aşağıdaki şifre kurallarını **Ayarlar > Güvenlik** menüsünden yapılandırabilir:

| Kural | Varsayılan |
|---|---|
| Minimum şifre uzunluğu | 8 karakter |
| Büyük harf zorunluluğu | Evet |
| Rakam zorunluluğu | Evet |
| Özel karakter zorunluluğu | Hayır |
| Şifre geçerlilik süresi | 90 gün |
| Son N şifre yeniden kullanım engeli | 5 |

---

## Kullanıcı Devre Dışı Bırakma

Görevden ayrılan veya izne çıkan kullanıcıları **silmek yerine devre dışı bırakın**. Bu şekilde o kullanıcının geçmiş işlem kayıtları bozulmadan korunur.

1. Kullanıcı listesinden ilgili kişiyi seçin.
2. **Devre Dışı Bırak** butonuna tıklayın.
3. Devre dışı kullanıcı sisteme giriş yapamaz; ancak kayıtlarda adı görünmeye devam eder.

:::info
Devre dışı bırakılan kullanıcı hesabı, istediğiniz zaman yeniden aktif edilebilir.
:::
