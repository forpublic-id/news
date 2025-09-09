"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ChevronDown } from "lucide-react"
import { type Newsletter, categories } from "@/lib/newsletter-data"

interface ArchiveNewsletterListProps {
  newsletters: Newsletter[]
  totalCount: number
}

const NEWSLETTERS_PER_PAGE = 9

export function ArchiveNewsletterList({ newsletters, totalCount }: ArchiveNewsletterListProps) {
  const [visibleCount, setVisibleCount] = useState(NEWSLETTERS_PER_PAGE)

  const visibleNewsletters = newsletters.slice(0, visibleCount)
  const hasMore = visibleCount < newsletters.length

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + NEWSLETTERS_PER_PAGE, newsletters.length))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryName = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId)
    return category?.content.id.name || categoryId
  }

  if (newsletters.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4 opacity-20">🔍</div>
        <h3 className="text-xl font-semibold mb-2">Tidak Ada Hasil</h3>
        <p className="text-muted-foreground mb-6">Tidak ditemukan newsletter yang sesuai dengan filter Anda.</p>
        <Button asChild variant="outline">
          <Link href="/archive">Reset Filter</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-muted-foreground">
          Menampilkan {Math.min(visibleCount, newsletters.length)} dari {newsletters.length} newsletter
          {newsletters.length !== totalCount && ` (difilter dari ${totalCount} total)`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {visibleNewsletters.map((newsletter) => {
          const content = newsletter.content.id
          return (
            <Card
              key={newsletter.id}
              className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <div className="text-4xl opacity-30">
                  {categories.find((c) => c.id === newsletter.category)?.icon || "📄"}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {newsletter.featured && (
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    {getCategoryName(newsletter.category)}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{formatDate(newsletter.publishedAt)}</span>
                </div>

                <h3 className="text-lg font-semibold text-balance mb-3 group-hover:text-primary transition-colors line-clamp-2">
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

      {hasMore && (
        <div className="text-center">
          <Button onClick={loadMore} variant="outline" size="lg">
            <ChevronDown className="mr-2 h-4 w-4" />
            Muat Lebih Banyak ({newsletters.length - visibleCount} tersisa)
          </Button>
        </div>
      )}
    </div>
  )
}
