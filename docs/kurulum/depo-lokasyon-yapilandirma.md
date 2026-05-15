---
title: Depo & Lokasyon Yapılandırması
sidebar_label: Depo & Lokasyon
sidebar_position: 6
---

# Depo & Lokasyon Yapılandırması

iyibir WMS, hiyerarşik bir depo yapısını destekler. Depolar, bölgeler, raflar ve gözler şeklinde organize edilen bu yapı, hassas stok takibine olanak sağlar.

---

## Lokasyon Hiyerarşisi

```
Depo (Warehouse)
  └── Bölge (Zone)
        └── Raf (Rack)
              └── Göz (Bin/Cell)
```

**Örnek:**

```
Ana Depo
  ├── A Bölgesi (Hammadde)
  │     ├── A-01 Rafı
  │     │     ├── A-01-01 Gözü
  │     │     ├── A-01-02 Gözü
  │     │     └── A-01-03 Gözü
  │     └── A-02 Rafı
  └── B Bölgesi (Mamul)
        └── B-01 Rafı
```

---

## 1. Depo Tanımlama

1. **Yönetim > Depo Tanımları** menüsüne gidin.
2. **Yeni Depo** butonuna tıklayın.
3. Aşağıdaki bilgileri girin:

| Alan | Örnek Değer | Açıklama |
|---|---|---|
| Depo Kodu | ANA001 | Benzersiz kısa kod |
| Depo Adı | Ana Üretim Deposu | Tam ad |
| Adres | Organize San. Böl. 1. Cad. | Fiziksel adres |
| Depo Tipi | Hammadde / Mamul / Genel | Kullanım türü |
| Logo Tiger Depo Kodu | 1 | Tiger'daki depo numarası |
| Aktif | Evet | |

:::tip
Logo Tiger Depo Kodu alanını doğru girmeniz kritiktir. Bu kod, WMS hareketlerinin Tiger'daki doğru depoya yansıtılmasını sağlar. Tiger yöneticinizden depo numaralarını alın.
:::

---

## 2. Bölge Tanımlama

Depo içinde farklı ürün grupları veya sıcaklık bölgeleri için ayrı bölgeler oluşturun:

1. İlgili depoyu seçin, **Bölgeler** sekmesine geçin.
2. **Yeni Bölge** butonuna tıklayın:

| Alan | Örnek |
|---|---|
| Bölge Kodu | A |
| Bölge Adı | Hammadde Bölgesi |
| Renk | Mavi (görsel ayrım için) |

---

## 3. Raf ve Göz Tanımlama

Raf ve gözleri tek tek veya **toplu oluşturma** ile ekleyebilirsiniz:

### Toplu Göz Oluşturma

1. **Bölge > Raflar** ekranında **Toplu Oluştur** seçeneğini tıklayın.
2. Parametre değerlerini girin:

```
Raf sayısı: 10 (A-01'den A-10'a kadar)
Göz sayısı (raf başına): 5 (01-05)
Kat sayısı: 3 (1-3)
Oluşturulacak lokasyon örüntüsü: {Bölge}-{Raf}-{Kat}{Göz}
Sonuç: A-01-101, A-01-102, ... A-10-305
```

3. **Önizle** butonuyla oluşturulacak lokasyonları gözden geçirin.
4. **Oluştur** ile tüm lokasyonları tek seferde sisteme aktarın.

---

## 4. Barkod Etiketleri

Her lokasyona barkod etiketi yazdırılmalı ve fiziksel olarak yapıştırılmalıdır.

1. **Yönetim > Barkod Şablonları** menüsünden lokasyon etiketi şablonunu seçin.
2. Yazdırmak istediğiniz lokasyonları seçin (tek veya toplu).
3. **Yazdır** butonuna tıklayın.

:::info
Lokasyon barkodları varsayılan olarak **Code128** formatında oluşturulur. Etikette lokasyon kodu, barkod ve QR kod birlikte yer alır.
:::

---

## 5. Özel Lokasyon Tipleri

Bazı lokasyonlara özel tipler atanabilir:

| Lokasyon Tipi | Kullanım |
|---|---|
| Normal | Standart depo gözü |
| Karantina | Kontrol bekleyen ürünler |
| İade | Müşteriden gelen iade ürünler |
| Fire | Hasarlı/kullanılmaz ürünler |
| Geçici | Kısa süreli ara depolama |

:::warning
Karantina lokasyonlarındaki ürünler, sevkiyat operasyonlarında otomatik olarak hariç tutulur. Kalite onayı tamamlanmadan sevk edilemez.
:::

---

## 6. Lokasyon Kapasitesi (Opsiyonel)

Her gözü için maksimum kapasite tanımlayabilirsiniz:

- **Ağırlık kapasitesi** (kg)
- **Hacim kapasitesi** (m³)
- **Paket adedi** limiti

Kapasite aşımı uyarısı, operatörü lokasyon dolduğunda bilgilendirir.
