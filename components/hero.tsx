"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"
import { sampleNewsletters } from "@/lib/newsletter-data"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { language, t } = useLanguage()
  const featuredNewsletter = sampleNewsletters.find((n) => n.featured)

  if (!featuredNewsletter) return null

  const content = featuredNewsletter.content[language]

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">{t.homepage.heroTitle}</h1>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">{t.homepage.heroSubtitle}</p>
          </div>

          {/* Featured Newsletter Card */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-video bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-6xl opacity-20">📊</div>
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{t.common.featured}</Badge>
                <Badge variant="outline">{language === "id" ? "Pantau Kebijakan" : "Policy Watch"}</Badge>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-balance mb-4">{content.title}</h2>

              <p className="text-lg text-muted-foreground text-pretty mb-6">{content.subtitle}</p>

              <p className="text-muted-foreground mb-6 leading-relaxed">{content.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{content.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      {featuredNewsletter.readTime} {t.homepage.minutesRead}
                    </span>
                  </div>
                </div>

                <Button asChild>
                  <Link href={`/newsletter/${featuredNewsletter.slug}`}>{t.homepage.readMore}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
