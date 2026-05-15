---
title: Sipariş Toplama
sidebar_label: Sipariş Toplama
sidebar_position: 3
---

# Sipariş Toplama (Pick & Pack)

Sipariş Toplama, Logo Tiger'daki satış siparişlerine göre depodan ürünlerin toplanarak sevkiyata hazırlanması sürecidir. FIFO ve FEFO metodlarını destekler.

---

## Süreç Özeti

```
Tiger Satış Siparişi
        ↓
  WMS'e Aktarım
        ↓
  Toplama Listesi Oluşturma
        ↓
  Operatör Ürün Toplar (Barkod Tarama)
        ↓
  Kontrol & Onay
        ↓
  Sevkiyat İrsaliyesi → Tiger
```

---

## Adım Adım Kullanım

### 1. Siparişi Seçme
1. **Sevkiyat > Sipariş Toplama** seçeneğini açın.
2. Bekleyen siparişler listesi (Tiger'dan anlık) görünür.
3. Müşteri adı, sipariş tarihi veya belge no ile filtreleyin.
4. Toplayacağınız siparişe dokunun.

### 2. Toplama Listesini İnceleme
Sipariş açıldığında satır bazlı toplama listesi görünür:

| Bilgi | Açıklama |
|---|---|
| Malzeme Kodu/Adı | Toplanacak ürün |
| Sipariş Miktarı | Müşterinin istediği miktar |
| Toplanan Miktar | Şu ana kadar toplanan |
| Önerilen Lokasyon | FIFO/FEFO'ya göre nereden alınacağı |
| Önerilen Lot | Kullanılacak lot |

### 3. Ürün Toplama
1. İlk satıra dokunun.
2. **Önerilen lokasyona** gidin.
3. Ürün barkodunu ve/veya lot barkodunu okutun.
4. **Toplanan Miktar** alanına sayıyı girin.
5. **Satırı Onayla**'ya dokunun.
6. Sonraki satıra geçin ve tekrarlayın.

:::tip FIFO/FEFO Uyumu
Sistem önerdiği lokasyon ve lotu değiştirmeden kabul etmeniz çıkış metoduna uyumu garanti eder. Farklı lot seçimi için zorunlu bir nedeniniz yoksa öneriye uymak hem izlenebilirlik hem de müşteri güvenliği açısından önemlidir.
:::

### 4. Kısmi Toplama
Stok yetersizliği nedeniyle siparişi tam olarak karşılayamazsanız:

1. Mevcut stokla topladığınız kadarını kaydedin.
2. **Kısmi Sevkiyat Oluştur** seçeneğini seçin.
3. Kalan miktar Tiger'da açık sipariş olarak kalır.

### 5. Sevkiyat Onayı
Tüm satırlar toplandıktan sonra:

1. Özet ekranını kontrol edin.
2. **Taşıyıcı/Plaka** bilgisini girin.
3. **Sevkiyatı Onayla** butonuna dokunun.
4. İrsaliye oluşturulur ve Tiger'a iletilir.

---

## Çoklu Sipariş Toplama (Batch Picking)

Aynı anda birden fazla siparişi tek seferinde toplamak için:

1. Sipariş listesinden birden fazla siparişi seçin (checkbox ile).
2. **Toplu Toplama Listesi Oluştur** butonuna dokunun.
3. Birleştirilmiş toplama listesiyle depoyu tek turda gezin.
4. Toplama tamamlandığında sistem her siparişi otomatik ayıklar.

:::info
Batch picking, küçük hacimli çok sayıda sipariş durumunda depo turlarını önemli ölçüde azaltır.
:::
