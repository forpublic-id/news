import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryHeader } from "@/components/category-header"
import { CategoryFilters } from "@/components/category-filters"
import { CategoryNewsletterGrid } from "@/components/category-newsletter-grid"
import { categories, sampleNewsletters } from "@/lib/newsletter-data"

interface CategoryPageProps {
  params: {
    slug: string
  }
  searchParams: {
    sort?: string
    page?: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories.find((c) => c.id === params.slug)

  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  const content = category.content.id

  return {
    title: `${content.name} | ForPublic.id News`,
    description: content.description,
    openGraph: {
      title: `${content.name} - ForPublic.id News`,
      description: content.description,
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.id,
  }))
}

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const category = categories.find((c) => c.id === params.slug)

  if (!category) {
    notFound()
  }

  // Filter newsletters by category
  const categoryNewsletters = sampleNewsletters.filter((n) => n.category === category.id)

  // Sort newsletters based on search params
  const sortBy = searchParams.sort || "newest"
  const sortedNewsletters = [...categoryNewsletters].sort((a, b) => {
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
        <CategoryHeader category={category} newsletterCount={categoryNewsletters.length} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CategoryFilters currentSort={sortBy} />
          <CategoryNewsletterGrid newsletters={sortedNewsletters} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
