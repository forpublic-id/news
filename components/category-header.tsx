import { Badge } from "@/components/ui/badge"

interface CategoryHeaderProps {
  category: {
    id: string
    icon: string
    content: {
      id: {
        name: string
        description: string
      }
    }
  }
  newsletterCount: number
}

export function CategoryHeader({ category, newsletterCount }: CategoryHeaderProps) {
  const content = category.content.id

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{category.icon}</div>
          <h1 className="text-3xl md:text-5xl font-bold text-balance mb-4">{content.name}</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance mb-6 max-w-2xl mx-auto">
            {content.description}
          </p>
          <Badge variant="secondary" className="text-sm">
            {newsletterCount} artikel tersedia
          </Badge>
        </div>
      </div>
    </section>
  )
}
