"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ArrowRight } from "lucide-react"
import { sampleNewsletters, categories } from "@/lib/newsletter-data"
import { useLanguage } from "@/contexts/language-context"

export function RecentNewsletters() {
  const { language, t } = useLanguage()

  const recentNewsletters = sampleNewsletters
    .filter((n) => !n.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6)

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId)
    return category?.content[language].name || categoryId
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">{t.homepage.recentTitle}</h2>
            <p className="text-lg text-muted-foreground">{t.homepage.recentSubtitle}</p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex bg-transparent">
            <Link href="/archive">
              {t.homepage.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recentNewsletters.map((newsletter) => {
            const content = newsletter.content[language]
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
                      <span>
                        {newsletter.readTime} {t.common.readTime}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/archive">
              {t.homepage.viewAll}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
