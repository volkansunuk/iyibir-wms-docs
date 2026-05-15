---
title: Hızlı Başlangıç
sidebar_label: Hızlı Başlangıç
sidebar_position: 1
slug: /giris
---

# Hızlı Başlangıç

Bu kılavuz, iyibir WMS sistemini sıfırdan kurup ilk operasyonunuzu gerçekleştirebilmeniz için gereken adımları özetler.

:::info Ön Koşullar
Başlamadan önce Windows Server 2019+, .NET 10 Runtime, SQL Server 2019+ ve Logo Tiger ERP kurulu ve çalışır durumda olmalıdır. Detaylar için [Sistem Gereksinimleri](./sistem-gereksinimleri) sayfasına bakınız.
:::

---

## Adım 1 — Sunucuya Kurulum

1. iyibir WMS kurulum paketini (`iyibir-wms-setup.exe`) yetkili kanal üzerinden temin edin.
2. Kurulum sihirbazını başlatın; hedef dizini ve uygulama havuzu adını belirleyin.
3. IIS'te yeni bir site oluşturulacak, .NET 10 uygulama havuzu otomatik yapılandırılacaktır.
4. Kurulum tamamlandıktan sonra `https://<sunucu-adresi>/health` adresine erişerek servisin ayakta olduğunu doğrulayın.

:::tip
Kurulum öncesinde IIS ve .NET 10 Hosting Bundle kurulu olduğundan emin olun. Detaylar için [Windows Server & IIS Kurulumu](../kurulum/windows-server-iis) sayfasına bakınız.
:::

---

## Adım 2 — Logo Tiger ERP Entegrasyonu

1. Logo Tiger yöneticinizden **salt okunur** bir GoDb kullanıcısı oluşturmasını isteyin.
2. `appsettings.json` dosyasındaki `GoDbConnectionString` alanına bağlantı dizesini girin.
3. Web arayüzünden **Ayarlar > Entegrasyon Durumu** ekranında bağlantıyı test edin.
4. Yeşil "Bağlı" göstergesi görünüyorsa entegrasyon başarılıdır.

:::warning
GoDb bağlantısı için asla Logo Tiger yönetici hesabı kullanmayın. Yalnızca okuma yetkisi olan ayrı bir kullanıcı tanımlayın.
:::

---

## Adım 3 — Depo Tanımı

1. Web arayüzünde **Yönetim > Depo Tanımları** menüsüne gidin.
2. **Yeni Depo** butonuna tıklayın; depo adı, kodu ve adresini girin.
3. Depoya ait **Bölge > Raf > Göz** hiyerarşisini tanımlayın.
4. Her lokasyona barkod etiketini yazdırıp fiziksel olarak yapıştırın.

---

## Adım 4 — Kullanıcı Oluşturma

1. **Yönetim > Kullanıcı Yönetimi** menüsünden kullanıcıları ekleyin.
2. Her kullanıcıya bir rol atayın: **Admin**, **Yönetici** veya **Operatör**.
3. Kullanıcıların erişim yetkisi olacağı depoları seçin.
4. İlk girişte şifre değiştirme zorunluluğunu aktif tutun.

---

## Adım 5 — Mobil Uygulama Kurulumu

1. Android cihazda APK dosyasını sunucudan indirin (`https://<sunucu-adresi>/mobile/android`).
2. iOS cihazda TestFlight üzerinden uygulamayı yükleyin.
3. Uygulama açıldığında **Sunucu URL'si** alanına kurum sunucu adresinizi girin.
4. Kullanıcı adı ve şifrenizle giriş yapın.

---

## Adım 6 — İlk Operasyon

1. Mobil uygulamada ana ekrandan **Mal Kabul** kategorisini seçin.
2. **Serbest Mal Kabul** operasyonunu başlatın.
3. Ürün barkodunu okutun, miktarı girin ve lokasyon seçin.
4. Lot etiketi oluşturun veya mevcut lot barkodunu okutun.
5. **Onayla** butonuna basın — hareket kaydedilir.

:::tip İpucu
İlk operasyonunuzu test deposu üzerinde gerçekleştirmeniz önerilir. Bu sayede canlı stok verilerinizi etkilemeden sistemi öğrenebilirsiniz.
:::

---

## Sonraki Adımlar

- [Operasyonlar](/operasyonlar) — Tüm 7 operasyon kategorisinin detaylı rehberi
- [Mobil Uygulama](/mobil-uygulama) — Mobil uygulama kullanım kılavuzu
- [AI Agentlar](/ai-agentler) — Akıllı sorgu sistemini tanıyın
