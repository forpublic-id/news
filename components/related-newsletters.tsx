import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"
import { type Newsletter, sampleNewsletters, categories } from "@/lib/newsletter-data"

interface RelatedNewslettersProps {
  currentNewsletter: Newsletter
}

export function RelatedNewsletters({ currentNewsletter }: RelatedNewslettersProps) {
  // Get related newsletters from the same category, excluding current one
  const relatedNewsletters = sampleNewsletters
    .filter((n) => n.id !== currentNewsletter.id && n.category === currentNewsletter.category)
    .slice(0, 3)

  // If not enough from same category, fill with other newsletters
  if (relatedNewsletters.length < 3) {
    const additionalNewsletters = sampleNewsletters
      .filter((n) => n.id !== currentNewsletter.id && n.category !== currentNewsletter.category)
      .slice(0, 3 - relatedNewsletters.length)

    relatedNewsletters.push(...additionalNewsletters)
  }

  if (relatedNewsletters.length === 0) {
    return null
  }

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId)
    return category?.content.id.name || categoryId
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Artikel Terkait</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNewsletters.map((newsletter) => {
              const content = newsletter.content.id
              return (
                <Card key={newsletter.id} className="h-full hover:shadow-lg transition-shadow group">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <div className="text-4xl opacity-30">
                      {categories.find((c) => c.id === newsletter.category)?.icon || "📄"}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {getCategoryName(newsletter.category)}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{formatDate(newsletter.publishedAt)}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-balance mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/newsletter/${newsletter.slug}`}>{content.title}</Link>
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{content.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{content.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{newsletter.readTime} menit</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
