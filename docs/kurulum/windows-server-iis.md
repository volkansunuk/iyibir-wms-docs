---
title: Windows Server & IIS Kurulumu
sidebar_label: Windows Server & IIS
sidebar_position: 2
---

# Windows Server & IIS Kurulumu

Bu kılavuz, iyibir WMS'i barındırmak için Windows Server üzerinde IIS'i yapılandırma adımlarını açıklar.

---

## 1. IIS Rolünü Etkinleştirme

PowerShell'i yönetici olarak açın ve aşağıdaki komutu çalıştırın:

```powershell
Install-WindowsFeature -Name Web-Server, Web-Asp-Net45, Web-Net-Ext45, `
    Web-ISAPI-Ext, Web-ISAPI-Filter, Web-WebSockets, `
    Web-Mgmt-Console, Web-Mgmt-Tools -IncludeManagementTools
```

Alternatif olarak **Server Manager > Rol ve Özellik Ekle** sihirbazından aşağıdaki seçenekleri işaretleyin:

- Web Server (IIS)
  - Common HTTP Features (tümü)
  - Health and Diagnostics > HTTP Logging
  - Performance > Static Content Compression
  - Security > Request Filtering, Windows Authentication
  - Application Development > .NET Extensibility 4.8, ASP.NET 4.8, ISAPI Extensions, ISAPI Filters, WebSocket Protocol

---

## 2. .NET 10 Hosting Bundle Kurulumu

```powershell
# .NET 10 Hosting Bundle'ı indirin ve sessiz kurulum yapın
$url = "https://dot.net/v1/dotnet-install.ps1"
# Veya doğrudan Microsoft İndirme Merkezi'nden indirin:
# https://dotnet.microsoft.com/download/dotnet/10.0
# "ASP.NET Core Runtime" yerine "Hosting Bundle" seçin

# Kurulumdan sonra IIS'i yeniden başlatın
iisreset /stop
iisreset /start
```

:::warning
.NET 10 Hosting Bundle kurulduktan sonra IIS'i mutlaka yeniden başlatın. Aksi hâlde uygulama doğru runtime'ı bulamaz ve 500 hatası alırsınız.
:::

---

## 3. Uygulama Havuzu Oluşturma

```powershell
Import-Module WebAdministration

# Yeni uygulama havuzu oluştur
New-WebAppPool -Name "IyibirWMS"

# .NET CLR sürümünü "Yönetilen Kod Yok" olarak ayarla (ASP.NET Core için)
Set-ItemProperty IIS:\AppPools\IyibirWMS managedRuntimeVersion ""

# Uygulama havuzunu 64-bit olarak çalıştır
Set-ItemProperty IIS:\AppPools\IyibirWMS enable32BitAppOnWin64 $false

# Kimlik ayarı (Uygulama Havuzu Kimliği veya özel servis hesabı)
# Özel servis hesabı için:
# Set-ItemProperty IIS:\AppPools\IyibirWMS -Name processModel.userName -Value "DOMAIN\wms-service"
# Set-ItemProperty IIS:\AppPools\IyibirWMS -Name processModel.password -Value "şifre"
```

:::tip
Üretim ortamında `ApplicationPoolIdentity` yerine domain servis hesabı kullanmak, SQL Server erişimi ve Windows kimlik doğrulaması açısından daha yönetilebilir bir yapı sağlar.
:::

---

## 4. IIS Web Sitesi Oluşturma

```powershell
# Uygulama dizinini oluştur
$sitePath = "C:\inetpub\wwwroot\IyibirWMS"
New-Item -ItemType Directory -Force -Path $sitePath

# WMS dosyalarını bu dizine kopyalayın (kurulum paketi bunu otomatik yapabilir)

# IIS sitesini oluştur
New-Website -Name "IyibirWMS" `
    -Port 443 `
    -PhysicalPath $sitePath `
    -ApplicationPool "IyibirWMS" `
    -Ssl

# HTTP yönlendirmesi için port 80 binding ekle
New-WebBinding -Name "IyibirWMS" -Protocol "http" -Port 80 -HostHeader ""
```

---

## 5. SSL Sertifikası

```powershell
# Self-signed sertifika (test/geliştirme için)
$cert = New-SelfSignedCertificate `
    -DnsName "wms.sirketiniz.com" `
    -CertStoreLocation "cert:\LocalMachine\My" `
    -NotAfter (Get-Date).AddYears(2)

# Sertifikayı IIS sitesine bağla
$thumbprint = $cert.Thumbprint
netsh http add sslcert ipport=0.0.0.0:443 certhash=$thumbprint appid='{GUID}'
```

:::info
Üretim ortamında Let's Encrypt veya kurumsal CA'dan alınmış geçerli bir SSL sertifikası kullanın. Self-signed sertifikalar mobil uygulamalarda bağlantı sorunlarına neden olabilir.
:::

---

## 6. Güvenlik Duvarı Ayarları

```powershell
# HTTP ve HTTPS portlarını aç
New-NetFirewallRule -DisplayName "IyibirWMS HTTP" `
    -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow

New-NetFirewallRule -DisplayName "IyibirWMS HTTPS" `
    -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow
```

---

## 7. Kurulumu Doğrulama

```powershell
# IIS servisinin çalıştığını kontrol et
Get-Service W3SVC | Select-Object Status, Name

# Uygulama havuzunun başladığını kontrol et
Get-WebConfiguration system.applicationHost/applicationPools/add |
    Where-Object { $_.name -eq "IyibirWMS" } |
    Select-Object name, state
```

Tarayıcıdan `https://<sunucu-adresi>/health` adresine gidin. `{"status":"Healthy"}` yanıtı kurulumun başarılı olduğunu gösterir.
