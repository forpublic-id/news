export type Language = "id" | "en"

export interface Translations {
  // Navigation
  nav: {
    home: string
    categories: string
    archive: string
    about: string
  }
  // Homepage
  homepage: {
    heroTitle: string
    heroSubtitle: string
    categoriesTitle: string
    categoriesSubtitle: string
    recentTitle: string
    recentSubtitle: string
    viewAll: string
    readMore: string
    minutesRead: string
    subscribeTitle: string
    subscribeSubtitle: string
    subscribeButton: string
    subscribeDisclaimer: string
    subscribeSuccess: string
    subscribeSuccessMessage: string
  }
  // Newsletter detail
  newsletter: {
    shareTitle: string
    relatedTitle: string
    subscribePromptTitle: string
    subscribePromptSubtitle: string
    subscribePromptButton: string
    subscribePromptDisclaimer: string
  }
  // Categories
  categories: {
    allCategoriesTitle: string
    allCategoriesSubtitle: string
    categoryHeaderCount: string
    noNewslettersTitle: string
    noNewslettersMessage: string
    backToHome: string
    exploreOther: string
    loadMore: string
    viewedAll: string
  }
  // Archive
  archive: {
    title: string
    subtitle: string
    searchPlaceholder: string
    allCategories: string
    sortNewest: string
    sortOldest: string
    filterDate: string
    noResults: string
    noResultsMessage: string
    resetFilter: string
    showing: string
    filtered: string
    total: string
  }
  // Common
  common: {
    author: string
    readTime: string
    publishedOn: string
    featured: string
    articles: string
    loading: string
    processing: string
    subscribe: string
    unsubscribe: string
    email: string
    categories: string
    free: string
    anytime: string
    by: string
    minRead: string
    mostPopular: string
    sections: string
    subscribeNewsletter: string
    subscribeDescription: string
    moreStories: string
    recentStories: string
  }
  // Footer
  footer: {
    description: string
    navigation: string
    legal: string
    privacy: string
    terms: string
    contact: string
    copyright: string
    madeWith: string
  }
  // Errors
  errors: {
    notFound: string
    notFoundMessage: string
    newsletterNotFound: string
    newsletterNotFoundMessage: string
  }
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      home: "Beranda",
      categories: "Kategori",
      archive: "Arsip",
      about: "Tentang",
    },
    homepage: {
      heroTitle: "Newsletter Kebijakan Publik Terdepan",
      heroSubtitle:
        "Dapatkan analisis mendalam tentang kebijakan pemerintah, data publik, dan perkembangan civic tech di Indonesia",
      categoriesTitle: "Kategori Newsletter",
      categoriesSubtitle: "Jelajahi berbagai topik kebijakan publik dan civic tech yang kami bahas",
      recentTitle: "Newsletter Terbaru",
      recentSubtitle: "Baca analisis dan update terkini tentang kebijakan publik",
      viewAll: "Lihat Semua",
      readMore: "Baca Selengkapnya",
      minutesRead: "menit baca",
      subscribeTitle: "Berlangganan Newsletter",
      subscribeSubtitle:
        "Dapatkan analisis kebijakan publik terbaru langsung di inbox Anda. Gratis dan bisa berhenti kapan saja.",
      subscribeButton: "Berlangganan Sekarang",
      subscribeDisclaimer:
        "Dengan berlangganan, Anda menyetujui untuk menerima email dari kami. Anda dapat berhenti berlangganan kapan saja.",
      subscribeSuccess: "Terima Kasih!",
      subscribeSuccessMessage:
        "Anda telah berhasil berlangganan newsletter ForPublic.id. Periksa email Anda untuk konfirmasi.",
    },
    newsletter: {
      shareTitle: "Bagikan artikel ini",
      relatedTitle: "Artikel Terkait",
      subscribePromptTitle: "Dapatkan Newsletter Seperti Ini",
      subscribePromptSubtitle:
        "Berlangganan untuk mendapatkan analisis kebijakan publik terbaru langsung di inbox Anda setiap minggu.",
      subscribePromptButton: "Berlangganan",
      subscribePromptDisclaimer: "Gratis dan bisa berhenti kapan saja.",
    },
    categories: {
      allCategoriesTitle: "Semua Kategori Newsletter",
      allCategoriesSubtitle: "Jelajahi berbagai topik kebijakan publik dan civic tech yang kami bahas dalam newsletter",
      categoryHeaderCount: "artikel tersedia",
      noNewslettersTitle: "Belum Ada Newsletter",
      noNewslettersMessage: "Kategori ini belum memiliki newsletter. Silakan cek kembali nanti.",
      backToHome: "Kembali ke Beranda",
      exploreOther: "Jelajahi Kategori Lain",
      loadMore: "Muat Lebih Banyak",
      viewedAll: "Anda telah melihat semua",
    },
    archive: {
      title: "Arsip Newsletter",
      subtitle: "Temukan dan baca kembali semua newsletter kebijakan publik yang telah kami terbitkan",
      searchPlaceholder: "Cari newsletter...",
      allCategories: "Semua Kategori",
      sortNewest: "Terbaru",
      sortOldest: "Terlama",
      filterDate: "Filter Tanggal",
      noResults: "Tidak Ada Hasil",
      noResultsMessage: "Tidak ditemukan newsletter yang sesuai dengan filter Anda.",
      resetFilter: "Reset Filter",
      showing: "Menampilkan",
      filtered: "difilter dari",
      total: "total",
    },
    common: {
      author: "Penulis",
      readTime: "menit",
      publishedOn: "Dipublikasikan",
      featured: "Featured",
      articles: "artikel",
      loading: "Memuat...",
      processing: "Memproses...",
      subscribe: "Berlangganan",
      unsubscribe: "Berhenti Berlangganan",
      email: "Email",
      categories: "Kategori",
      free: "Gratis",
      anytime: "kapan saja",
      by: "Oleh",
      minRead: "menit baca",
      mostPopular: "Paling Populer",
      sections: "Bagian",
      subscribeNewsletter: "Berlangganan Newsletter",
      subscribeDescription: "Dapatkan analisis kebijakan publik terbaru langsung di inbox Anda.",
      moreStories: "Berita Lainnya",
      recentStories: "Berita Terbaru",
    },
    footer: {
      description:
        "Newsletter dwibahasa tentang kebijakan publik, analisis pemerintahan, dan perkembangan civic tech di Indonesia.",
      navigation: "Navigasi",
      legal: "Legal",
      privacy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan",
      contact: "Kontak",
      copyright: "Semua hak dilindungi.",
      madeWith: "Dibuat dengan ❤️ untuk transparansi publik",
    },
    errors: {
      notFound: "Halaman Tidak Ditemukan",
      notFoundMessage: "Maaf, halaman yang Anda cari tidak dapat ditemukan.",
      newsletterNotFound: "Newsletter Tidak Ditemukan",
      newsletterNotFoundMessage:
        "Maaf, newsletter yang Anda cari tidak dapat ditemukan. Mungkin artikel telah dipindahkan atau URL tidak valid.",
    },
  },
  en: {
    nav: {
      home: "Home",
      categories: "Categories",
      archive: "Archive",
      about: "About",
    },
    homepage: {
      heroTitle: "Leading Public Policy Newsletter",
      heroSubtitle:
        "Get in-depth analysis on government policies, public data, and civic tech developments in Indonesia",
      categoriesTitle: "Newsletter Categories",
      categoriesSubtitle: "Explore various public policy and civic tech topics we cover",
      recentTitle: "Recent Newsletters",
      recentSubtitle: "Read the latest analysis and updates on public policy",
      viewAll: "View All",
      readMore: "Read More",
      minutesRead: "min read",
      subscribeTitle: "Subscribe to Newsletter",
      subscribeSubtitle:
        "Get the latest public policy analysis delivered directly to your inbox. Free and unsubscribe anytime.",
      subscribeButton: "Subscribe Now",
      subscribeDisclaimer: "By subscribing, you agree to receive emails from us. You can unsubscribe at any time.",
      subscribeSuccess: "Thank You!",
      subscribeSuccessMessage:
        "You have successfully subscribed to ForPublic.id newsletter. Check your email for confirmation.",
    },
    newsletter: {
      shareTitle: "Share this article",
      relatedTitle: "Related Articles",
      subscribePromptTitle: "Get Newsletters Like This",
      subscribePromptSubtitle:
        "Subscribe to get the latest public policy analysis delivered directly to your inbox every week.",
      subscribePromptButton: "Subscribe",
      subscribePromptDisclaimer: "Free and unsubscribe anytime.",
    },
    categories: {
      allCategoriesTitle: "All Newsletter Categories",
      allCategoriesSubtitle: "Explore various public policy and civic tech topics we cover in our newsletters",
      categoryHeaderCount: "articles available",
      noNewslettersTitle: "No Newsletters Yet",
      noNewslettersMessage: "This category doesn't have any newsletters yet. Please check back later.",
      backToHome: "Back to Home",
      exploreOther: "Explore Other Categories",
      loadMore: "Load More",
      viewedAll: "You have viewed all",
    },
    archive: {
      title: "Newsletter Archive",
      subtitle: "Find and read all the public policy newsletters we have published",
      searchPlaceholder: "Search newsletters...",
      allCategories: "All Categories",
      sortNewest: "Newest",
      sortOldest: "Oldest",
      filterDate: "Filter Date",
      noResults: "No Results",
      noResultsMessage: "No newsletters found matching your filters.",
      resetFilter: "Reset Filter",
      showing: "Showing",
      filtered: "filtered from",
      total: "total",
    },
    common: {
      author: "Author",
      readTime: "min",
      publishedOn: "Published",
      featured: "Featured",
      articles: "articles",
      loading: "Loading...",
      processing: "Processing...",
      subscribe: "Subscribe",
      unsubscribe: "Unsubscribe",
      email: "Email",
      categories: "Categories",
      free: "Free",
      anytime: "anytime",
      by: "By",
      minRead: "min read",
      mostPopular: "Most Popular",
      sections: "Sections",
      subscribeNewsletter: "Subscribe to Newsletter",
      subscribeDescription: "Get the latest public policy analysis delivered to your inbox.",
      moreStories: "More Stories",
      recentStories: "Recent Stories",
    },
    footer: {
      description:
        "Bilingual newsletter about public policy, government analysis, and civic tech developments in Indonesia.",
      navigation: "Navigation",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      contact: "Contact",
      copyright: "All rights reserved.",
      madeWith: "Made with ❤️ for public transparency",
    },
    errors: {
      notFound: "Page Not Found",
      notFoundMessage: "Sorry, the page you are looking for could not be found.",
      newsletterNotFound: "Newsletter Not Found",
      newsletterNotFoundMessage:
        "Sorry, the newsletter you are looking for could not be found. The article may have been moved or the URL is invalid.",
    },
  },
}

export function getTranslation(lang: Language): Translations {
  return translations[lang]
}
