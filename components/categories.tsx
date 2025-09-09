"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/lib/newsletter-data"
import { useLanguage } from "@/contexts/language-context"

export function Categories() {
  const { language, t } = useLanguage()

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">{t.homepage.categoriesTitle}</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            {t.homepage.categoriesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.content[language].name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.content[language].description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
