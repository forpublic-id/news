import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArchiveFilters } from "@/components/archive-filters"
import { ArchiveNewsletterList } from "@/components/archive-newsletter-list"
import { sampleNewsletters } from "@/lib/newsletter-data"

export const metadata: Metadata = {
  title: "Arsip Newsletter | ForPublic.id News",
  description: "Jelajahi semua newsletter kebijakan publik dari ForPublic.id",
}

interface ArchivePageProps {
  searchParams: {
    category?: string
    sort?: string
    search?: string
    page?: string
  }
}

export default function ArchivePage({ searchParams }: ArchivePageProps) {
  // Filter newsletters based on search params
  let filteredNewsletters = [...sampleNewsletters]

  // Filter by category
  if (searchParams.category && searchParams.category !== "all") {
    filteredNewsletters = filteredNewsletters.filter((n) => n.category === searchParams.category)
  }

  // Filter by search term
  if (searchParams.search) {
    const searchTerm = searchParams.search.toLowerCase()
    filteredNewsletters = filteredNewsletters.filter(
      (n) =>
        n.content.id.title.toLowerCase().includes(searchTerm) ||
        n.content.id.excerpt.toLowerCase().includes(searchTerm) ||
        n.content.id.author.toLowerCase().includes(searchTerm),
    )
  }

  // Sort newsletters
  const sortBy = searchParams.sort || "newest"
  filteredNewsletters.sort((a, b) => {
    if (sortBy === "oldest") {
      return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    }
    // Default to newest
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-balance mb-4">Arsip Newsletter</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
                Temukan dan baca kembali semua newsletter kebijakan publik yang telah kami terbitkan
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ArchiveFilters
              currentCategory={searchParams.category || "all"}
              currentSort={searchParams.sort || "newest"}
              currentSearch={searchParams.search || ""}
            />
            <ArchiveNewsletterList newsletters={filteredNewsletters} totalCount={sampleNewsletters.length} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
