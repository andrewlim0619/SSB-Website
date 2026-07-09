export interface ProductSpec {
  sku: string;
  beratBersih: string;
  isiPerPack: string;
  beratPcs: string;
  kemasan: string;
  ukuranTray: string;
  isiPerKarton: string;
  ukuranKarton: string;
  penyimpanan: string;
  umurSimpan: string;
  sertifikasi: string;
  asalProduk: string;
}

export interface ProductData {
  slug: string;
  name: string;
  nameId: string;
  category: "dimsum" | "saus" | "cemilan";
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  specs: ProductSpec;
  servingSuggestions: { icon: "freeze" | "steam" | "number" | "serve" | "heat" | "mix" | "open"; text: string }[];
  availableFor: string[];
}

const DIMSUM_SERVING: ProductData["servingSuggestions"] = [
  { icon: "freeze", text: "Keluarkan dari freezer dan letakkan di suhu ruang selama 30–60 menit" },
  { icon: "steam",  text: "Panaskan alat kukus hingga air mendidih" },
  { icon: "number", text: "Kukus selama 10–15 menit hingga matang sempurna" },
  { icon: "serve",  text: "Angkat dan sajikan hangat bersama saus pilihan" },
];

const SAUCE_SERVING: ProductData["servingSuggestions"] = [
  { icon: "heat",  text: "Panaskan saus dalam panci dengan api kecil sambil diaduk" },
  { icon: "mix",   text: "Sesuaikan kekentalan dengan menambahkan sedikit air bila perlu" },
  { icon: "serve", text: "Gunakan sebagai saus cocol, bumbu tumis, atau saus marinasi" },
  { icon: "open",  text: "Setelah dibuka, simpan sisa saus dalam wadah tertutup di kulkas" },
];

const SNACK_SERVING: ProductData["servingSuggestions"] = [
  { icon: "open",  text: "Buka kemasan dan sajikan langsung tanpa perlu dimasak" },
  { icon: "serve", text: "Nikmati sebagai camilan atau pelengkap hidangan utama" },
  { icon: "freeze",text: "Setelah dibuka, simpan dalam wadah kedap udara agar tetap renyah" },
];

const DIMSUM_AVAILABLE = ["Hotel & Restaurant", "Catering", "Retail", "Distributor / Reseller", "Food Service"];
const SAUCE_AVAILABLE  = ["Hotel & Restaurant", "Catering", "Retail", "Distributor / Reseller", "Food Service"];
const SNACK_AVAILABLE  = ["Retail", "Distributor / Reseller", "Catering", "Food Service"];

export const ALL_PRODUCTS: ProductData[] = [
  // ── DIMSUM ──────────────────────────────────────────────────────────────
  {
    slug: "chicken-shrimp-siewmay",
    name: "Chicken & Shrimp Siewmay",
    nameId: "Siomay Ayam & Udang",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Siomay ayam dan udang premium dengan kulit tipis yang kenyal, membungkus isian daging pilihan yang gurih dan segar. Dibuat dari bahan berkualitas tinggi dengan proses produksi higienis untuk menghadirkan cita rasa autentik dim sum.",
    image: "/images/products/dimsum/chicken_shrimp_siewmay.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-SS-001",
      beratBersih: "250g",
      isiPerPack: "10 pcs",
      beratPcs: "±25g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "20 x 14 x 4.5 cm",
      isiPerKarton: "20 pack",
      ukuranKarton: "40 x 30 x 24 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "hakau-udang",
    name: "Hakau Udang",
    nameId: "Har Gow Udang Premium",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Hakau udang SSK merupakan dimsum premium dengan kulit tipis dan lembut yang membungkus isian udang berkualitas, menghadirkan cita rasa gurih dan tekstur kenyal yang lezat di setiap gigitan.",
    image: "/images/products/dimsum/hakau_udang_1.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-SH-001",
      beratBersih: "220g",
      isiPerPack: "10 pcs",
      beratPcs: "±22g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "19 x 13 x 4.5 cm",
      isiPerKarton: "20 pack",
      ukuranKarton: "39 x 28 x 24 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "blackpepper-chicken-feet",
    name: "Blackpepper Chicken Feet",
    nameId: "Ceker Ayam Lada Hitam",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Ceker ayam pilihan dengan bumbu lada hitam khas yang meresap sempurna. Tekstur lembut dengan rasa pedas gurih yang menggugah selera, cocok sebagai hidangan pendamping atau sajian utama dim sum.",
    image: "/images/products/dimsum/blackpepper_chicken_feet.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-BF-001",
      beratBersih: "300g",
      isiPerPack: "6 pcs",
      beratPcs: "±50g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "22 x 15 x 5 cm",
      isiPerKarton: "16 pack",
      ukuranKarton: "45 x 32 x 26 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "chicken-shrimp-dumpling",
    name: "Chicken & Shrimp Dumpling",
    nameId: "Pangsit Ayam & Udang",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Dumpling isi ayam dan udang segar dengan kulit yang tipis namun kuat. Perpaduan daging ayam giling dan udang pilihan menghasilkan isian yang juicy dan penuh cita rasa, sempurna untuk dikukus atau digoreng.",
    image: "/images/products/dimsum/chicken_shrimp_dumpling.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-CD-001",
      beratBersih: "240g",
      isiPerPack: "12 pcs",
      beratPcs: "±20g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "20 x 14 x 4 cm",
      isiPerKarton: "20 pack",
      ukuranKarton: "40 x 30 x 24 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "chicken-shrimp-beancurd-roll",
    name: "Chicken & Shrimp Beancurd Roll",
    nameId: "Cheong Fun Ayam & Udang",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Gulungan kulit tahu (tofu skin) yang lembut membungkus isian ayam dan udang yang gurih. Dimasak dengan teknik kukus, menghasilkan tekstur yang kenyal dan lembut dengan rasa yang autentik.",
    image: "/images/products/dimsum/chicken_shrimp_beancurd_roll.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-BR-001",
      beratBersih: "260g",
      isiPerPack: "8 pcs",
      beratPcs: "±32g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "22 x 14 x 5 cm",
      isiPerKarton: "18 pack",
      ukuranKarton: "45 x 30 x 26 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "chicken-kwotie",
    name: "Chicken Kwotie",
    nameId: "Gyoza Ayam Panggang",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Kwotie ayam dengan kulit yang renyah di bagian bawah dan lembut di atasnya. Isian ayam berbumbu harum dengan teknik masak pan-fry menghasilkan tekstur yang unik dan cita rasa yang tak tertandingi.",
    image: "/images/products/dimsum/chicken_kwotie.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-KW-001",
      beratBersih: "270g",
      isiPerPack: "9 pcs",
      beratPcs: "±30g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "21 x 15 x 4.5 cm",
      isiPerKarton: "20 pack",
      ukuranKarton: "42 x 32 x 24 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "chasiew-pao",
    name: "Chasiew Pao",
    nameId: "Bakpao Char Siew",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Bakpao lembut dengan isian char siew (daging babi diganti ayam kecap) yang manis gurih khas. Kulit pao yang fluffy membungkus isian yang kaya rasa, menjadikannya salah satu dim sum paling populer.",
    image: "/images/products/dimsum/chasiew_pao.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-CP-001",
      beratBersih: "300g",
      isiPerPack: "6 pcs",
      beratPcs: "±50g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "22 x 16 x 6 cm",
      isiPerKarton: "16 pack",
      ukuranKarton: "45 x 34 x 26 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "chocolate-pao",
    name: "Chocolate Pao",
    nameId: "Bakpao Cokelat",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Bakpao lembut dengan isian cokelat premium yang creamy dan manis. Kulit pao yang putih bersih menyembunyikan kejutan cokelat di dalamnya — pilihan sempurna untuk pencinta dessert dim sum.",
    image: "/images/products/dimsum/chocolate_pao.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-XP-001",
      beratBersih: "240g",
      isiPerPack: "6 pcs",
      beratPcs: "±40g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "20 x 15 x 6 cm",
      isiPerKarton: "20 pack",
      ukuranKarton: "40 x 32 x 26 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "klepon-pao",
    name: "Klepon Pao",
    nameId: "Bakpao Klepon",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Perpaduan unik antara bakpao Tiongkok dan klepon tradisional Indonesia. Kulit pao hijau pandan yang lembut membungkus isian gula merah cair yang meledak di mulut — fusion yang autentik dan menggugah selera.",
    image: "/images/products/dimsum/klepon_pao.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-KP-001",
      beratBersih: "240g",
      isiPerPack: "6 pcs",
      beratPcs: "±40g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "20 x 15 x 6 cm",
      isiPerKarton: "20 pack",
      ukuranKarton: "40 x 32 x 26 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "mantao",
    name: "Mantao",
    nameId: "Roti Kukus Tiongkok",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Roti kukus putih lembut khas Tiongkok tanpa isian. Mantao yang fluffy dan kenyal cocok disajikan sebagai pendamping berbagai hidangan, atau digoreng hingga keemasan untuk tekstur yang lebih renyah.",
    image: "/images/products/dimsum/mantao.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-MT-001",
      beratBersih: "300g",
      isiPerPack: "10 pcs",
      beratPcs: "±30g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "22 x 16 x 5 cm",
      isiPerKarton: "20 pack",
      ukuranKarton: "45 x 34 x 24 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "salted-egg-pao",
    name: "Salted Egg Pao",
    nameId: "Bakpao Telur Asin",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Bakpao dengan isian custard telur asin yang creamy dan mengalir. Kombinasi rasa asin-manis dari telur asin premium membungkus isian yang lembut — salah satu varian pao paling digemari saat ini.",
    image: "/images/products/dimsum/salted_egg_pao.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-SE-001",
      beratBersih: "270g",
      isiPerPack: "6 pcs",
      beratPcs: "±45g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "21 x 16 x 6 cm",
      isiPerKarton: "16 pack",
      ukuranKarton: "43 x 34 x 26 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "soy-sauce-chicken-pao",
    name: "Soy Sauce Chicken Pao",
    nameId: "Bakpao Ayam Kecap",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Bakpao dengan isian ayam kecap manis gurih yang kaya rempah. Daging ayam pilihan dimasak dengan kecap premium dan bumbu aromatik, membungkus setiap gigitan dengan cita rasa yang memuaskan.",
    image: "/images/products/dimsum/soy_sauce_chicken_pao.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-SC-001",
      beratBersih: "300g",
      isiPerPack: "6 pcs",
      beratPcs: "±50g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "22 x 16 x 6 cm",
      isiPerKarton: "16 pack",
      ukuranKarton: "45 x 34 x 26 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },
  {
    slug: "taro-pao",
    name: "Taro Pao",
    nameId: "Bakpao Talas",
    category: "dimsum",
    categoryLabel: "Frozen Dimsum",
    description:
      "Bakpao lembut dengan isian pasta talas yang harum dan manis alami. Warna ungu cantik dari talas asli dan tekstur isian yang creamy menjadikan Taro Pao sebagai pilihan dim sum yang istimewa.",
    image: "/images/products/dimsum/taro_pao.png",
    tags: ["HALAL", "FROZEN"],
    specs: {
      sku: "DIM-TP-001",
      beratBersih: "240g",
      isiPerPack: "6 pcs",
      beratPcs: "±40g",
      kemasan: "Tray + Plastic Wrap",
      ukuranTray: "20 x 15 x 6 cm",
      isiPerKarton: "20 pack",
      ukuranKarton: "40 x 32 x 26 cm",
      penyimpanan: "Simpan beku di bawah -18°C",
      umurSimpan: "12 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: DIMSUM_SERVING,
    availableFor: DIMSUM_AVAILABLE,
  },

  // ── SAUS ────────────────────────────────────────────────────────────────
  {
    slug: "xo-sauce",
    name: "XO Sauce",
    nameId: "Saus XO Premium",
    category: "saus",
    categoryLabel: "Aneka Saus",
    description:
      "Saus XO premium dengan perpaduan seafood pilihan — udang kering, scallop, dan ikan — yang dimasak perlahan bersama bawang putih, bawang merah, dan cabai. Saus mewah yang cocok untuk elevating berbagai hidangan.",
    image: "/images/products/sauce/xo_sauce.png",
    tags: ["HALAL"],
    specs: {
      sku: "SAU-XO-001",
      beratBersih: "200g",
      isiPerPack: "1 jar",
      beratPcs: "200g",
      kemasan: "Glass Jar",
      ukuranTray: "7 x 7 x 10 cm",
      isiPerKarton: "24 jar",
      ukuranKarton: "30 x 22 x 32 cm",
      penyimpanan: "Simpan di tempat sejuk & kering, kulkas setelah dibuka",
      umurSimpan: "18 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: SAUCE_SERVING,
    availableFor: SAUCE_AVAILABLE,
  },
  {
    slug: "blackpepper-sauce",
    name: "Blackpepper Sauce",
    nameId: "Saus Lada Hitam",
    category: "saus",
    categoryLabel: "Aneka Saus",
    description:
      "Saus lada hitam dengan cita rasa pedas yang khas dan aroma rempah yang kuat. Dibuat dari lada hitam pilihan yang digiling kasar, menghadirkan sensasi pedas hangat yang sempurna untuk steak, tumisan, dan aneka hidangan.",
    image: "/images/products/sauce/blackpepper_sauce.png",
    tags: ["HALAL"],
    specs: {
      sku: "SAU-BP-001",
      beratBersih: "200g",
      isiPerPack: "1 jar",
      beratPcs: "200g",
      kemasan: "Glass Jar",
      ukuranTray: "7 x 7 x 10 cm",
      isiPerKarton: "24 jar",
      ukuranKarton: "30 x 22 x 32 cm",
      penyimpanan: "Simpan di tempat sejuk & kering, kulkas setelah dibuka",
      umurSimpan: "18 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: SAUCE_SERVING,
    availableFor: SAUCE_AVAILABLE,
  },
  {
    slug: "chili-oil",
    name: "Chili Oil",
    nameId: "Minyak Cabai",
    category: "saus",
    categoryLabel: "Aneka Saus",
    description:
      "Minyak cabai aromatik dengan perpaduan cabai pilihan, bawang putih, dan rempah yang diinfus perlahan. Aroma yang menggugah selera dan rasa pedas yang kompleks menjadikan Chili Oil pelengkap sempurna untuk berbagai hidangan.",
    image: "/images/products/sauce/chili_oil.png",
    tags: ["HALAL"],
    specs: {
      sku: "SAU-CO-001",
      beratBersih: "200g",
      isiPerPack: "1 jar",
      beratPcs: "200g",
      kemasan: "Glass Jar",
      ukuranTray: "7 x 7 x 10 cm",
      isiPerKarton: "24 jar",
      ukuranKarton: "30 x 22 x 32 cm",
      penyimpanan: "Simpan di tempat sejuk & kering, kulkas setelah dibuka",
      umurSimpan: "18 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: SAUCE_SERVING,
    availableFor: SAUCE_AVAILABLE,
  },
  {
    slug: "duck-sauce",
    name: "Duck Sauce",
    nameId: "Saus Bebek",
    category: "saus",
    categoryLabel: "Aneka Saus",
    description:
      "Saus bebek khas dengan keseimbangan rasa manis, asam, dan gurih yang sempurna. Dibuat dari bahan-bahan pilihan dengan resep tradisional yang telah teruji, saus ini menjadi pelengkap ideal untuk berbagai hidangan bebek dan ayam.",
    image: "/images/products/sauce/duck_sauce.png",
    tags: ["HALAL"],
    specs: {
      sku: "SAU-DS-001",
      beratBersih: "200g",
      isiPerPack: "1 jar",
      beratPcs: "200g",
      kemasan: "Glass Jar",
      ukuranTray: "7 x 7 x 10 cm",
      isiPerKarton: "24 jar",
      ukuranKarton: "30 x 22 x 32 cm",
      penyimpanan: "Simpan di tempat sejuk & kering, kulkas setelah dibuka",
      umurSimpan: "18 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: SAUCE_SERVING,
    availableFor: SAUCE_AVAILABLE,
  },
  {
    slug: "kung-pao-sauce",
    name: "Kung Pao Sauce",
    nameId: "Saus Kung Pao",
    category: "saus",
    categoryLabel: "Aneka Saus",
    description:
      "Saus Kung Pao autentik dengan perpaduan rasa pedas, manis, asam, dan asin yang seimbang. Dibuat dari cabai kering, kacang tanah, dan bumbu rempah pilihan — sempurna untuk membuat Kung Pao Chicken atau tumisan pedas lainnya.",
    image: "/images/products/sauce/kung_pao_sauce.png",
    tags: ["HALAL"],
    specs: {
      sku: "SAU-KP-001",
      beratBersih: "200g",
      isiPerPack: "1 jar",
      beratPcs: "200g",
      kemasan: "Glass Jar",
      ukuranTray: "7 x 7 x 10 cm",
      isiPerKarton: "24 jar",
      ukuranKarton: "30 x 22 x 32 cm",
      penyimpanan: "Simpan di tempat sejuk & kering, kulkas setelah dibuka",
      umurSimpan: "18 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: SAUCE_SERVING,
    availableFor: SAUCE_AVAILABLE,
  },
  {
    slug: "sweet-sour-sauce",
    name: "Sweet & Sour Sauce",
    nameId: "Saus Asam Manis",
    category: "saus",
    categoryLabel: "Aneka Saus",
    description:
      "Saus asam manis klasik dengan keseimbangan sempurna antara manisnya gula dan asamnya cuka pilihan. Warna merah yang cerah dan konsistensi yang pas menjadikannya saus serbaguna untuk aneka hidangan.",
    image: "/images/products/sauce/sweet_sour_sauce.png",
    tags: ["HALAL"],
    specs: {
      sku: "SAU-SS-001",
      beratBersih: "200g",
      isiPerPack: "1 jar",
      beratPcs: "200g",
      kemasan: "Glass Jar",
      ukuranTray: "7 x 7 x 10 cm",
      isiPerKarton: "24 jar",
      ukuranKarton: "30 x 22 x 32 cm",
      penyimpanan: "Simpan di tempat sejuk & kering, kulkas setelah dibuka",
      umurSimpan: "18 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: SAUCE_SERVING,
    availableFor: SAUCE_AVAILABLE,
  },

  // ── CEMILAN ─────────────────────────────────────────────────────────────
  {
    slug: "crispy-fish-skin",
    name: "Crispy Fish Skin",
    nameId: "Kulit Ikan Renyah",
    category: "cemilan",
    categoryLabel: "Cemilan",
    description:
      "Kulit ikan pilihan yang diproses hingga menghasilkan tekstur renyah yang sempurna. Camilan gurih dengan cita rasa autentik yang cocok untuk semua kalangan. Dikemas praktis untuk menjaga kerenyahannya.",
    image: "/images/products/snack/crispy_fish_skin.png",
    tags: ["HALAL"],
    specs: {
      sku: "SNK-CF-001",
      beratBersih: "50g",
      isiPerPack: "1 bag",
      beratPcs: "50g",
      kemasan: "Stand-Up Pouch",
      ukuranTray: "-",
      isiPerKarton: "48 bag",
      ukuranKarton: "35 x 25 x 28 cm",
      penyimpanan: "Simpan di tempat sejuk & kering, jauh dari sinar matahari",
      umurSimpan: "6 bulan",
      sertifikasi: "Halal MUI",
      asalProduk: "Indonesia",
    },
    servingSuggestions: SNACK_SERVING,
    availableFor: SNACK_AVAILABLE,
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(current: ProductData, count = 4): ProductData[] {
  const sameCategory = ALL_PRODUCTS.filter(
    (p) => p.category === current.category && p.slug !== current.slug
  );
  if (sameCategory.length >= count) return sameCategory.slice(0, count);
  const others = ALL_PRODUCTS.filter(
    (p) => p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}
