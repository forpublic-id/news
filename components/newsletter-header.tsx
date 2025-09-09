import { Badge } from "@/components/ui/badge"
import { Clock, User, Calendar } from "lucide-react"
import { type Newsletter, categories } from "@/lib/newsletter-data"

interface NewsletterHeaderProps {
  newsletter: Newsletter
}

export function NewsletterHeader({ newsletter }: NewsletterHeaderProps) {
  const content = newsletter.content.id
  const category = categories.find((c) => c.id === newsletter.category)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <header className="mb-8 md:mb-12">
      {/* Category and Meta Info */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <Badge variant="secondary" className="flex items-center gap-1">
          <span>{category?.icon}</span>
          <span>{category?.content.id.name}</span>
        </Badge>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(newsletter.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{newsletter.readTime} menit baca</span>
          </div>
        </div>
      </div>

      {/* Title and Subtitle */}
      <h1 className="text-3xl md:text-5xl font-bold text-balance mb-4 leading-tight">{content.title}</h1>

      {content.subtitle && (
        <h2 className="text-xl md:text-2xl text-muted-foreground text-balance mb-6 leading-relaxed">
          {content.subtitle}
        </h2>
      )}

      {/* Author Info */}
      <div className="flex items-center gap-3 pt-6 border-t">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium">{content.author}</p>
          <p className="text-sm text-muted-foreground">ForPublic.id Research Team</p>
        </div>
      </div>
    </header>
  )
}
