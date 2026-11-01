// Aygur Turizm — site verileri
// Metinler mevcut WordPress sitesinden (aygur.com.tr) birebir alınmıştır.

export const SITE_NAME = 'Aygur Turizm';
export const PHONE = '0 533 284 75 18';
export const PHONE_INTL = '+90 533 284 75 18';
export const PHONE_TEL = 'tel:+905332847518';
export const WA_NUMBER = '905332847518';
export const EMAIL = 'info@aygur.com.tr';
export const ADDRESS = 'Merkez Mah. Vezir Sk. No:17 D:3 Çekmeköy / İstanbul - TÜRKİYE';
export const MAP_EMBED = 'https://maps.google.com/maps?q=' + encodeURIComponent(ADDRESS) + '&t=m&z=14&output=embed&iwloc=near';
export const TAGLINE = 'Güvenli Yolculuk';

export const ABOUT_SHORT = '30 yıl önce şahıs firması olarak temelleri atılan Aygur Tur, servis taşımacılık sektöründe güvenilir hizmet anlayışı ile markalaşarak, kaliteli hizmet ve müşteri memnuniyetini her zaman ön planda tutarak faaliyetlerini sürdürmektedir.';

// Görseller: public/img/<pexels-id>.jpg (ilk yayında GitHub Actions tarafından indirilir)
export const img = (id) => `img/${id}.jpg`;
export const srcset = (base, id) => `${base}img/${id}-800.webp 800w, ${base}img/${id}-1600.webp 1600w`;

export const stats = [
  { value: '1 Milyon+', label: 'Dan fazla yolcu', icon: 'passenger' },
  { value: '125+', label: 'Farklı Lokasyon Projesi', icon: 'pin' },
  { value: '302+', label: 'Başarılı Taşımacılık Projesi', icon: 'route' },
  { value: '30+', label: 'Yıldan fazla Tecrübe', icon: 'award' },
];

export const values = [
  { title: 'TUTKULU OLMAK', text: 'İşimizi geliştirmeye tutkumuzla odaklanır daima yüksek motivasyon ve keyifle çalışırız.' },
  { title: 'YARATICI ve YENİLİKÇİ OLMAK', text: 'Katılımcı bir anlayışla yaptığımız işlere sürekli yaratıcı çözümler üretiriz. Yeniliklerin odak noktası olmaya çalışırız. Kararlılıkla ve tüm pozitif enerjimizle hedeflerimizin peşinden ilerleriz.' },
  { title: 'MÜŞTERİ ODAKLI OLMAK', text: 'Müşteri talep ve beklentilerini iyi analiz eder, hizmetlerimizi ve iş yapış modellerimizi o doğrultuda tasarlarız.' },
  { title: 'GELİŞİME AÇIK ve ÖNCÜ OLMAK', text: 'Yapmış olduğumuz işe saygı duyar, iyi hizmet sunmak için sürekli araştırarak kendimizi geliştiririz. Yenilikçi ve müşteri odaklı iş modellerimizle sektörde fark yaratırız.' },
  { title: 'KALİTELİ HİZMET SUNMAK', text: 'Her zaman en kaliteli hizmeti sunmayı odaklanırız. Sürekli iyileştirme ve güncel durumu planlayabilmek için çok gayret ederiz.' },
  { title: 'ETİK İLKELERE BAĞLI OLMAK', text: 'Hizmetlerimizi etik ilkelere uygun bir şekilde sürdürmeyi taahhüt ederiz. Tüm paydaşlarımız ile olan ilişkilerimizde evrensel kurallara tam uyum gösteririz.' },
];

export const whyUs = {
  text: 'Kaliteli hizmet anlayışımız, güçlü operasyon yapımız ve müşteri memnuniyeti odaklı yaklaşımımız ile sektörde güvenilir çözümler sunuyoruz. Deneyimli ekibimiz ve profesyonel hizmet anlayışımız sayesinde her zaman güvenli, konforlu ve sürdürülebilir hizmet sağlamayı hedefliyoruz.',
  items: [
    '30 yıllık Tecrübe ve Güven',
    'Kurumsal ve Referans Gücü Yüksek Firma',
    'Güvenli ve Donanımlı Araç Filosu',
    'Tam Sigortalı ve Güvence Altında Taşımacılık',
    'Profesyonel ve Eğitimli Sürücü Kadrosu',
    'Türkiye Geneline Yayılmış Hizmet Ağı',
    'Müşteri Odaklı Hizmet Anlayışı',
  ],
};

export const infoCard = {
  title: 'Güvenli ve Profesyonel Ulaşım Çözümleri İçin Doğru Adrestesiniz',
  text: [
    '30 yıllık sektör tecrübesi, modern araç filomuz ve müşteri memnuniyeti odaklı hizmet anlayışımız ile personel taşımacılığından öğrenci servislerine, transfer hizmetlerinden operasyonel araç kiralamaya kadar tüm ulaşım ihtiyaçlarınıza profesyonel çözümler sunuyoruz.',
    'Dakik, güvenli ve konforlu taşımacılık hizmetlerimiz hakkında detaylı bilgi almak ve firmanıza özel çözümler için hemen bizimle iletişime geçin.',
  ],
  button: 'Hemen Teklif Alın',
};

// Hizmet sayfaları. blocks: lead | p | h | list | images | stats
export const services = [
  {
    slug: 'personel-tasimaciligi',
    title: 'Personel Taşımacılığı',
    heading: 'PERSONEL TAŞIMACILIĞI',
    card: 'Aygur Tur; uzman kadrosu, yüksek donanımlı araçlarıyla dakik, güvenilir, konforlu bir ulaşım hedeflemektedir. İstanbul’un Anadolu yakasındaki merkezimiz ile birlikte tüm Türkiye’nin geneline yayılan geniş bir hizmet ağına sahiptir',
    cardImg: '17455633',
    description: 'Aygur Tur personel taşımacılığı: SRC ve psikoteknik belgeli sürücüler, GPS takipli, kameralı ve sigortalı yeni servis araçlarıyla dakik, güvenilir ve konforlu personel servisi.',
    blocks: [
      { type: 'h', text: 'Personel Taşımacılık Hizmetimiz' },
      { type: 'lead', text: 'Aygur Tur; uzman kadrosu, yüksek donanımlı araçlarıyla dakik, güvenilir, konforlu bir ulaşım hedeflemektedir. İstanbul’un Anadolu yakasındaki merkezimiz ile birlikte tüm Türkiye’nin geneline yayılan geniş bir hizmet ağına sahiptir.' },
      { type: 'lead', text: 'Personel taşımacılığı kapsamında sürdürülen çalışmalarda kaliteli hizmet anlayışımız ile yola çıkan sürücülerimiz:' },
      { type: 'list', items: [
        'Mesleki yeterlilik belgelerine sahip (SRC ve Psikoteknik),',
        'İşleri ile ilgili gereklilik ve sorumlulukları öğrendikleri, görevlerini ifasında yol gösterecek olan oryantasyon eğitimlerini tamamlamış,',
        'Müşteri memnuniyeti odaklı, güler yüzlü ve en önemlisi insan taşımanın bilinç ve sorumluluğunda sürücülerden oluşmaktadır.',
      ] },
      { type: 'images', ids: ['12709206', '13381011'] },
      { type: 'stats' },
      { type: 'h', text: 'Araçlarımız' },
      { type: 'list', items: [
        'Personel taşımacılığında kullanmakta olduğumuz servis araçlarımızın tamamı yeni ve konforlu olup, her türlü yol, izin ve sigorta belgeleri güncellenmiş araçlardan oluşmaktadır.',
        'Araç içi kamera donanımı, hız kontrol paneli, GPS takip sistemi ve bunların anında sorumlu personelimizce izlenen yazılım programları mevcuttur.',
        'Taşınan tüm yolcularımız araç içerisinde bulundukları süre zarfında sigorta güvencesi altındadır.',
        'Sunulan hizmet kapsamında yolda meydana gelebilecek sağlık sorunları ve kazalara acil müdahale güvencesi sunulmaktadır.',
        'Servis sırasında herhangi bir kaza olasılığına karşın araç içi tüm acil durum tedbirleri alınmış ve her türlü acil durum senaryoları planlanmıştır.',
      ] },
      { type: 'images', ids: ['36377060', '17455633'] },
    ],
  },
  {
    slug: 'ogrenci-servis-tasimaciligi',
    title: 'Öğrenci Servis Taşımacılığı',
    heading: 'ÖĞRENCİ SERVİS TAŞIMACILIĞI',
    card: 'Aygur Tur olarak; okul servisi ve öğrenci taşımacılığında, anaokulu, ilkokul, ortaokul, lise ve üniversite gibi geniş bir yaş grubu ve eğitim düzeyinde, güvenilirliği, güler yüzlü ve emniyetli yolculuğu esas alarak, üst seviyede sorumluluk bilinciyle ulaşım sağlamaktayız.',
    cardImg: '543605',
    description: 'Aygur Tur öğrenci servis taşımacılığı: anaokulundan üniversiteye, hostes personelli, araç takip sistemli, sigortalı ve düzenli ilaçlanan okul servisleri.',
    blocks: [
      { type: 'h', text: 'ÖĞRENCİ SERVİS TAŞIMACILIĞI' },
      { type: 'lead', text: 'Aygur Tur olarak; okul servisi ve öğrenci taşımacılığında, anaokulu, ilkokul, ortaokul, lise ve üniversite gibi geniş bir yaş grubu ve eğitim düzeyinde, güvenilirliği, güler yüzlü ve emniyetli yolculuğu esas alarak, üst seviyede sorumluluk bilinciyle ulaşım sağlamaktayız.' },
      { type: 'lead', text: 'Okul gezilerinde de aynı hassasiyetle hareket ediyor, müşteriye uygun araç ve fiyat alternatifleri ile esnek çözümler sunuyoruz.' },
      { type: 'images', ids: ['36765270', '12955550'] },
      { type: 'h', text: 'Güvenli ve konforlu ulaşımı sağlamak için oluşturulan servis ağında;', level: 4 },
      { type: 'stats' },
      { type: 'list', items: [
        'Yasal mevzuatlar gereğince düzenlenen özel donanımlı servis araçları ile hizmet vermekteyiz.',
        'Öğrencilerimiz için temiz ve sağlıklı ulaşımın sağlandığı düzenli ilaçlama ve temizlikleri yapılan servis araçları görev almaktadır.',
        'Her türlü yasal izin ve sigorta kapsamında hizmet sunulmaktadır.',
        'Velilerimizin çocuklarının güvenle ulaşımlarını takip edecekleri araç takip sistemleri ile hizmet sunulmaktadır.',
        'Öğrencilerin güvenle seyahat etmelerine yardımcı uzman hostes personeller görevlendirilmektedir.',
        'Öğrencilerin zamanında güvenle okullarında olmanın değerini, ailelerinin onların güvende olduğunu görmelerinin önemini biliyoruz. Çünkü çocuklarımızın geleceğimiz olduğunun bilincindeyiz.',
      ] },
      { type: 'images', ids: ['543605', '29323153'] },
    ],
  },
  {
    slug: 'turizm-tasimaciligi',
    title: 'Turizm Taşımacılığı',
    heading: 'TURİZM TAŞIMACILIĞI',
    card: 'Aygur Tur olarak, turizm taşımacılığı hizmetiyle, grup turlarından bireysel gezilere kadar geniş bir yelpazede ulaşım çözümleri sunuyoruz.',
    cardImg: '12955550',
    description: 'Aygur Tur turizm taşımacılığı: grup turlarından bireysel gezilere kadar konforlu, güvenli ve özenle planlanan ulaşım çözümleri.',
    blocks: [
      { type: 'h', text: 'TURİZM TAŞIMACILIĞI' },
      { type: 'lead', text: 'Aygur Tur olarak, turizm taşımacılığı hizmetiyle, grup turlarından bireysel gezilere kadar geniş bir yelpazede ulaşım çözümleri sunuyoruz. Misafirlerimizin seyahat deneyimlerini daha konforlu, güvenli ve keyifli hale getirmek için, turistik gezilerde ihtiyaç duyulan tüm taşımacılık hizmetlerini profesyonellik ve titizlikle sağlıyoruz.' },
      { type: 'images', ids: ['15878897', '17455630'] },
      { type: 'lead', text: 'Misafirlerinize sunduğumuz turizm taşımacılığı hizmetinde, her detay büyük bir özenle planlanır. Yalnızca taşıma hizmeti değil, yolculuk boyunca sağlanan müşteri memnuniyeti de bizim için çok önemlidir. Aygur Tur, her seyahatin sorunsuz ve keyifli geçmesi için tüm süreçleri dikkatlice yönetir. Misafirlerinizin konforu, güvenliği ve memnuniyeti her zaman ön planda tutulur.' },
      { type: 'stats' },
      { type: 'lead', text: 'Aygur Tur, turizm taşımacılığı hizmetlerinde her türlü ihtiyaca uygun kaliteli, güvenli ve konforlu çözümler sunarak, misafirlerinizin unutulmaz bir seyahat deneyimi yaşamasını sağlar. Bireysel gezilerden büyük grup turlarına kadar her türlü organizasyon için profesyonel taşımacılık hizmeti alabilirsiniz.' },
      { type: 'images', ids: ['17455626', '17455630'] },
    ],
  },
  {
    slug: 'operasyonel-arac-kiralama',
    title: 'Operasyonel Araç Kiralama',
    heading: 'OPERASYONEL ARAÇ KİRALAMA',
    card: 'Aygur Tur, ülkemizin önde gelen kamu ve özel kurumlarına sunmak üzere operasyonel araç kiralama hizmeti ile sağladığı avantajlı çözümler sayesinde müşterilerin stratejik çözüm ortağı olma hedefindedir.',
    cardImg: '18029642',
    description: 'Aygur Tur operasyonel araç kiralama: bakım, lastik, vergi ve sigorta dahil; kaza ve arızada bedelsiz muadil araç ile kamu ve özel kurumlara kurumsal filo çözümleri.',
    blocks: [
      { type: 'h', text: 'OPERASYONEL ARAÇ KİRALAMA' },
      { type: 'lead', text: 'Aygur Tur, ülkemizin önde gelen kamu ve özel kurumlarına sunmak üzere operasyonel araç kiralama hizmeti ile sağladığı avantajlı çözümler sayesinde müşterilerin stratejik çözüm ortağı olma hedefindedir.' },
      { type: 'images', ids: ['18029642', '33567291'] },
      { type: 'lead', text: 'Firmanız için en uygun aracı, ihtiyaçlarınıza, kullanım şeklinize ve bütçenize ne uygun seçeneklerle belirleyebilirsiniz. Üstelik Aygur Tur’dan kiraladığınız araçlarda araç bakımı, yazlık-kışlık lastik değişimleri, vergiler için asla zaman kaybetmezsiniz. Kaza durumunda ve aracın serviste kalmasını gerektirecek arıza durumunda yerine muadil araç tarafınıza bedelsiz olarak verilir ve işlerinizi aksatmazsınız. Tüm bu ihtiyaçlar Aygur Tur tarafından karşılanır, size ise sadece keyifli bir sürüş deneyimi yaşamak kalır.' },
      { type: 'images', ids: ['17217564', '20475010'] },
    ],
  },
  {
    slug: 'transfer-hizmetleri',
    title: 'Transfer Hizmetleri',
    heading: 'TRANSFER HİZMETLERİ',
    card: 'Aygur Tur, müşterilerine sunduğu “Transfer Hizmetleri” ile konforlu ve güvenli seyahat alternatifleri sunmaktadır. Transfer hizmetlerimiz 7 gün 24 saat alanında uzman, deneyimli ve özel eğitimli sürücülerimiz, modern ve donanımlı araçlarımız ile gerçekleştirilmektedir',
    cardImg: '8425050',
    description: 'Aygur Tur transfer hizmetleri: havalimanı, organizasyon, tatil, iş görüşmesi ve eğitim transferleri; 7/24, uzman sürücüler ve araç takip sistemiyle.',
    blocks: [
      { type: 'h', text: 'TRANSFER HİZMETLERİ' },
      { type: 'lead', text: 'Aygur Tur, müşterilerine sunduğu “Transfer Hizmetleri” ile konforlu ve güvenli seyahat alternatifleri sunmaktadır.' },
      { type: 'lead', text: 'Transfer hizmetlerimiz 7 gün 24 saat alanında uzman, deneyimli ve özel eğitimli sürücülerimiz, modern ve donanımlı araçlarımız ile gerçekleştirilmektedir.' },
      { type: 'images', ids: ['8425050', '7594124'] },
      { type: 'lead', text: 'Sunulan transfer hizmetlerinde, özel yolculuklarınızda konforunuzu, güvenliğinizi ve gizliliğinizi ön planda tutarak, yüksek standartlarda hizmet sunuyoruz.' },
      { type: 'lead', text: 'Müşterilerimizin taleplerine yönelik olarak; havalimanı transferleri, organizasyon, tatil seyahatleri, özel iş görüşmeleri ve eğitim ulaşımları gibi pek çok alanda transfer hizmetleri sunmaktadır.' },
      { type: 'lead', text: 'Özel Transfer Hizmeti sırasında kullandığımız araçlarımızın tamamı, 7/24 esasına dayalı olarak araç takip sistemi ile kontrol altında tutulmaktadır.' },
      { type: 'images', ids: ['17455633', '17455630'] },
    ],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

// Eski WordPress adreslerinden yönlendirmeler (aynı içeriğin ikinci kopyaları)
export const redirects = {
  'kurumsal': 'hakkimizda/',
  'bize_ulasin': 'iletisim/',
  'turizm-tasimaciligi-2': 'transfer-hizmetleri/',
};

// Görsellerin Pexels kimlikleri (indirme betiği için)
export const allImageIds = [
  ...new Set([
    ...services.flatMap((s) => [s.cardImg, ...s.blocks.filter((b) => b.type === 'images').flatMap((b) => b.ids)]),
    '6147373', '13831531', '4175028', '6592700', '8353820',
  ]),
];
