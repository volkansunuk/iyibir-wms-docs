---
title: Serbest Mal Kabul
sidebar_label: Serbest Mal Kabul
sidebar_position: 2
---

# Serbest Mal Kabul

Serbest Mal Kabul, herhangi bir Logo Tiger satın alma siparişine bağlı olmaksızın depoya gelen ürünleri sisteme kaydetmek için kullanılır.

---

## Ne Zaman Kullanılır?

- Acil tedarik veya peşin alımlarda
- Dahili üretimden gelen yarı mamullerin depoya alınmasında
- Numune veya test malzemelerinin kabulünde
- Eski sistem göçünde başlangıç stoku girişinde

---

## Adım Adım Kullanım

### 1. Operasyonu Başlatma
1. Mobil uygulamada ana ekrandan **Mal Kabul** (yeşil kart) kategorisine dokunun.
2. **Serbest Mal Kabul** seçeneğini seçin.
3. Yeni bir mal kabul formu açılır.

### 2. Ürünü Seçme
- **Seçenek A — Barkod Tarama:** Ürünün barkodunu okutun. WMS, barkoda karşılık gelen malzeme kartını Logo Tiger'dan otomatik bulur.
- **Seçenek B — Kod ile Arama:** Arama kutusuna malzeme kodunu veya adını yazın, listeden seçin.

:::tip
Barkod üzerinde GS1 formatı kullanıyorsanız ürün kodu ve lot bilgisi tek taramada otomatik olarak algılanır.
:::

### 3. Miktarı Girme
1. Ürün seçildikten sonra **Miktar** alanı aktif olur.
2. Sayısal klavyeden miktarı girin.
3. Ölçü birimi (adet, kg, metre vb.) otomatik ürün kartından gelir; gerekirse değiştirin.

### 4. Lokasyon Seçme
1. **Lokasyon** alanına dokunun.
2. Lokasyon barkodunu okutun **VEYA** listeden seçin.
3. Seçilen lokasyonun mevcut içeriği ekranda gösterilir.

:::warning
Doluluk uyarısı aldığınızda lokasyondaki mevcut ürün miktarını kontrol edin. Karışık lot veya ürün depolamaktan kaçının.
:::

### 5. Lot/Seri Bilgisi
1. **Lot Ekle** butonuna dokunun.
2. Lot barkodunu okutun (mevcut lot) **VEYA** **Yeni Lot Oluştur** seçeneğini seçin.
3. Yeni lot için:
   - Lot numarasını girin (veya otomatik oluştur)
   - Tedarikçi lot numarasını girin (opsiyonel)
   - Son kullanma tarihini girin (ürün tipine göre zorunlu olabilir)
   - Üretim tarihini girin (opsiyonel)

:::tip Lot Oluşturma İpuçları
- Aynı sevkiyattan gelen, aynı özelliğe sahip ürünleri tek lotta toplayın.
- Farklı tedarikçi partilerini ayrı lotlara alın; bu sayede sorun çıktığında geri izleme kolaylaşır.
- Son kullanma tarihi olan ürünlerde bu alanı boş bırakmayın; FEFO takibi bu veriye dayanır.
:::

### 6. Onaylama
1. Tüm bilgiler doğruysa **Onayla** butonuna dokunun.
2. Başarı mesajı ve işlem numarası görüntülenir.
3. Gerekirse etiket yazdırma seçeneği sunulur.

---

## Toplu Giriş

Birden fazla farklı ürünü aynı mal kabul belgesinde girebilirsiniz:

1. İlk ürünü girin ve **Satır Ekle** butonuna dokunun.
2. İkinci ürünü ekleyin.
3. Tüm satırlar tamamlandığında **Toplu Onayla** butonuna dokunun.

---

## Hata Durumları

| Hata | Neden | Çözüm |
|---|---|---|
| Ürün bulunamadı | Barkod sistemde tanımlı değil | Ürün kodunu manuel arayın veya Yönetici'ye bildirin |
| Lokasyon dolu | Kapasite sınırına ulaşıldı | Alternatif lokasyon seçin |
| Lot çakışması | Aynı lot no zaten var | Mevcut lotu kullanın veya yeni numara girin |
