export interface Newsletter {
  id: string
  slug: string
  publishedAt: string
  category: string
  featured: boolean
  readTime: number
  image?: string
  imageCaption?: string
  content: {
    id: {
      title: string
      subtitle: string
      excerpt: string
      author: string
      publishDate: string
    }
    en: {
      title: string
      subtitle: string
      excerpt: string
      author: string
      publishDate: string
    }
  }
}

export const categories = [
  {
    id: "policy-watch",
    icon: "📊",
    content: {
      id: { name: "Pantau Kebijakan", description: "Analisis mendalam kebijakan pemerintah terbaru" },
      en: { name: "Policy Watch", description: "In-depth analysis of latest government policies" },
    },
  },
  {
    id: "civic-updates",
    icon: "🤝",
    content: {
      id: { name: "Update Sipil", description: "Perkembangan terkini dalam partisipasi sipil" },
      en: { name: "Civic Updates", description: "Latest developments in civic participation" },
    },
  },
  {
    id: "public-data",
    icon: "📈",
    content: {
      id: { name: "Data Publik", description: "Visualisasi dan analisis data pemerintah" },
      en: { name: "Public Data", description: "Government data visualization and analysis" },
    },
  },
  {
    id: "government",
    icon: "🏛️",
    content: {
      id: { name: "Pemerintahan", description: "Berita dan analisis institusi pemerintah" },
      en: { name: "Government", description: "Government institution news and analysis" },
    },
  },
  {
    id: "community",
    icon: "🌱",
    content: {
      id: { name: "Komunitas", description: "Inisiatif dan gerakan masyarakat sipil" },
      en: { name: "Community", description: "Civil society initiatives and movements" },
    },
  },
  {
    id: "investigations",
    icon: "🔍",
    content: {
      id: { name: "Investigasi", description: "Laporan investigatif kebijakan publik" },
      en: { name: "Investigations", description: "Investigative public policy reports" },
    },
  },
]

export const sampleNewsletters: Newsletter[] = [
  {
    id: "001",
    slug: "kebijakan-energi-2025",
    publishedAt: "2025-01-15T10:00:00Z",
    category: "policy-watch",
    featured: true,
    readTime: 8,
    image: "/placeholder-cbrkm.png",
    imageCaption: "Panel surya di gedung pemerintahan sebagai bagian dari program energi terbarukan",
    content: {
      id: {
        title: "Analisis Kebijakan Energi Terbarukan 2025",
        subtitle: "Dampak regulasi baru terhadap investasi solar panel",
        excerpt:
          "Pemerintah mengeluarkan regulasi baru yang akan mengubah landscape investasi energi terbarukan di Indonesia. Analisis mendalam tentang peluang dan tantangan yang akan dihadapi investor dan pengembang proyek energi bersih.",
        author: "Tim ForPublic Research",
        publishDate: "15 Januari 2025",
      },
      en: {
        title: "2025 Renewable Energy Policy Analysis",
        subtitle: "New regulation impact on solar panel investment",
        excerpt:
          "The government issued new regulations that will change the renewable energy investment landscape in Indonesia. In-depth analysis of opportunities and challenges facing investors and clean energy project developers.",
        author: "ForPublic Research Team",
        publishDate: "January 15, 2025",
      },
    },
  },
  {
    id: "002",
    slug: "transparansi-anggaran-daerah",
    publishedAt: "2025-01-12T14:30:00Z",
    category: "public-data",
    featured: false,
    readTime: 6,
    image: "/placeholder-s8700.png",
    imageCaption: "Dokumen anggaran daerah yang dipublikasikan secara online",
    content: {
      id: {
        title: "Transparansi Anggaran Daerah: Progress dan Tantangan",
        subtitle: "Evaluasi keterbukaan informasi keuangan 34 provinsi",
        excerpt:
          "Survei komprehensif tentang tingkat transparansi anggaran daerah di seluruh Indonesia. Temukan provinsi mana yang paling terbuka dalam mempublikasikan informasi keuangan mereka.",
        author: "Dr. Sari Wijaya",
        publishDate: "12 Januari 2025",
      },
      en: {
        title: "Regional Budget Transparency: Progress and Challenges",
        subtitle: "Financial information openness evaluation across 34 provinces",
        excerpt:
          "Comprehensive survey on regional budget transparency levels across Indonesia. Discover which provinces are most transparent in publishing their financial information.",
        author: "Dr. Sari Wijaya",
        publishDate: "January 12, 2025",
      },
    },
  },
  {
    id: "003",
    slug: "partisipasi-publik-ruu",
    publishedAt: "2025-01-10T09:15:00Z",
    category: "civic-updates",
    featured: false,
    readTime: 5,
    image: "/placeholder-lf6ds.png",
    imageCaption: "Masyarakat menggunakan platform digital untuk konsultasi publik",
    content: {
      id: {
        title: "Meningkatkan Partisipasi Publik dalam Pembahasan RUU",
        subtitle: "Platform digital untuk konsultasi masyarakat",
        excerpt:
          "Inisiatif baru untuk melibatkan masyarakat dalam proses legislasi melalui platform digital. Bagaimana teknologi dapat memperkuat demokrasi partisipatif.",
        author: "Ahmad Fauzi",
        publishDate: "10 Januari 2025",
      },
      en: {
        title: "Enhancing Public Participation in Bill Discussions",
        subtitle: "Digital platform for public consultation",
        excerpt:
          "New initiative to involve the public in the legislative process through digital platforms. How technology can strengthen participatory democracy.",
        author: "Ahmad Fauzi",
        publishDate: "January 10, 2025",
      },
    },
  },
  {
    id: "004",
    slug: "reformasi-birokrasi-digital",
    publishedAt: "2025-01-08T11:20:00Z",
    category: "government",
    featured: false,
    readTime: 7,
    image: "/placeholder-0wdcw.png",
    imageCaption: "Kantor pemerintahan yang menerapkan transformasi digital",
    content: {
      id: {
        title: "Reformasi Birokrasi Digital: Kemajuan dan Hambatan",
        subtitle: "Evaluasi implementasi e-government di Indonesia",
        excerpt:
          "Tinjauan komprehensif tentang progress reformasi birokrasi digital di berbagai kementerian dan lembaga. Analisis tantangan dan solusi ke depan.",
        author: "Prof. Budi Santoso",
        publishDate: "8 Januari 2025",
      },
      en: {
        title: "Digital Bureaucratic Reform: Progress and Obstacles",
        subtitle: "E-government implementation evaluation in Indonesia",
        excerpt:
          "Comprehensive review of digital bureaucratic reform progress across various ministries and agencies. Analysis of challenges and future solutions.",
        author: "Prof. Budi Santoso",
        publishDate: "January 8, 2025",
      },
    },
  },
  {
    id: "005",
    slug: "gerakan-anti-korupsi-komunitas",
    publishedAt: "2025-01-05T16:45:00Z",
    category: "community",
    featured: false,
    readTime: 4,
    image: "/placeholder-u2rrl.png",
    imageCaption: "Aktivis komunitas dalam kampanye anti-korupsi",
    content: {
      id: {
        title: "Gerakan Anti-Korupsi Berbasis Komunitas",
        subtitle: "Peran masyarakat sipil dalam pemberantasan korupsi",
        excerpt:
          "Bagaimana komunitas lokal berperan aktif dalam mengawasi dan melaporkan praktik korupsi. Studi kasus dari berbagai daerah di Indonesia.",
        author: "Maya Sari",
        publishDate: "5 Januari 2025",
      },
      en: {
        title: "Community-Based Anti-Corruption Movement",
        subtitle: "Civil society role in corruption eradication",
        excerpt:
          "How local communities actively participate in monitoring and reporting corruption practices. Case studies from various regions in Indonesia.",
        author: "Maya Sari",
        publishDate: "January 5, 2025",
      },
    },
  },
  {
    id: "006",
    slug: "investigasi-pengadaan-barang-jasa",
    publishedAt: "2025-01-03T13:30:00Z",
    category: "investigations",
    featured: false,
    readTime: 12,
    image: "/placeholder-61rss.png",
    imageCaption: "Dokumen pengadaan pemerintah yang sedang diselidiki",
    content: {
      id: {
        title: "Investigasi: Anomali Pengadaan Barang dan Jasa Pemerintah",
        subtitle: "Temuan irregularitas dalam tender proyek infrastruktur",
        excerpt:
          "Laporan investigatif mendalam tentang praktik pengadaan barang dan jasa di beberapa kementerian. Mengungkap pola-pola yang mencurigakan dalam proses tender.",
        author: "Tim Investigasi ForPublic",
        publishDate: "3 Januari 2025",
      },
      en: {
        title: "Investigation: Government Procurement Anomalies",
        subtitle: "Irregularities found in infrastructure project tenders",
        excerpt:
          "In-depth investigative report on procurement practices in several ministries. Revealing suspicious patterns in the tendering process.",
        author: "ForPublic Investigation Team",
        publishDate: "January 3, 2025",
      },
    },
  },
]

export function getNewsletters(language: "id" | "en"): Array<{
  id: string
  slug: string
  title: string
  subtitle: string
  excerpt: string
  author: string
  publishDate: string
  category: string
  readTime: number
  featured: boolean
  image?: string
  imageCaption?: string
  url: string
}> {
  return sampleNewsletters.map((newsletter) => ({
    id: newsletter.id,
    slug: newsletter.slug,
    title: newsletter.content[language].title,
    subtitle: newsletter.content[language].subtitle,
    excerpt: newsletter.content[language].excerpt,
    author: newsletter.content[language].author,
    publishDate: newsletter.content[language].publishDate,
    category: newsletter.category,
    readTime: newsletter.readTime,
    featured: newsletter.featured,
    image: newsletter.image,
    imageCaption: newsletter.imageCaption,
    url: getNewsletterDateUrl(newsletter),
  }))
}

export function getCategories(language: "id" | "en"): Array<{
  id: string
  slug: string
  name: string
  description: string
  icon: string
}> {
  return categories.map((category) => ({
    id: category.id,
    slug: category.id,
    name: category.content[language].name,
    description: category.content[language].description,
    icon: category.icon,
  }))
}

export function getNewsletterBySlug(slug: string, language: "id" | "en") {
  const newsletter = sampleNewsletters.find((n) => n.slug === slug)
  if (!newsletter) return null

  return {
    id: newsletter.id,
    slug: newsletter.slug,
    title: newsletter.content[language].title,
    subtitle: newsletter.content[language].subtitle,
    excerpt: newsletter.content[language].excerpt,
    author: newsletter.content[language].author,
    publishDate: newsletter.content[language].publishDate,
    category: newsletter.category,
    readTime: newsletter.readTime,
    featured: newsletter.featured,
    image: newsletter.image,
    imageCaption: newsletter.imageCaption,
  }
}

export function getNewsletterByDateAndSlug(year: string, month: string, slug: string, language: "id" | "en") {
  const newsletter = sampleNewsletters.find((n) => {
    const publishDate = new Date(n.publishedAt)
    const newsletterYear = publishDate.getFullYear().toString()
    const newsletterMonth = (publishDate.getMonth() + 1).toString().padStart(2, '0')
    
    return newsletterYear === year && newsletterMonth === month && n.slug === slug
  })
  
  if (!newsletter) return null

  return {
    id: newsletter.id,
    slug: newsletter.slug,
    title: newsletter.content[language].title,
    subtitle: newsletter.content[language].subtitle,
    excerpt: newsletter.content[language].excerpt,
    author: newsletter.content[language].author,
    publishDate: newsletter.content[language].publishDate,
    category: newsletter.category,
    readTime: newsletter.readTime,
    featured: newsletter.featured,
    image: newsletter.image,
    imageCaption: newsletter.imageCaption,
  }
}

export function getNewsletterDateUrl(newsletter: Newsletter): string {
  const publishDate = new Date(newsletter.publishedAt)
  const year = publishDate.getFullYear()
  const month = (publishDate.getMonth() + 1).toString().padStart(2, '0')
  
  return `/${year}/${month}/${newsletter.slug}`
}
