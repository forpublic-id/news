import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { categories, sampleNewsletters } from "@/lib/newsletter-data"

export const metadata: Metadata = {
  title: "Semua Kategori | ForPublic.id News",
  description: "Jelajahi semua kategori newsletter kebijakan publik dari ForPublic.id",
}

export default function CategoriesPage() {
  const getCategoryCount = (categoryId: string) => {
    return sampleNewsletters.filter((n) => n.category === categoryId).length
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-balance mb-4">Semua Kategori Newsletter</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
                Jelajahi berbagai topik kebijakan publik dan civic tech yang kami bahas dalam newsletter
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => {
                const content = category.content.id
                const newsletterCount = getCategoryCount(category.id)

                return (
                  <Link key={category.id} href={`/category/${category.id}`}>
                    <Card className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                      <CardContent className="p-6 text-center">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {content.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{content.description}</p>
                        <Badge variant="secondary" className="text-xs">
                          {newsletterCount} artikel
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
