"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, CheckCircle } from "lucide-react"
import { categories } from "@/lib/newsletter-data"
import { useLanguage } from "@/contexts/language-context"

export function SubscriptionCTA() {
  const { language, t } = useLanguage()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to confirmation page
    router.push(`/subscribe/confirm?email=${encodeURIComponent(email)}`)
    setIsLoading(false)
  }

  if (isSubscribed) {
    return (
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">{t.homepage.subscribeSuccess}</h2>
              <p className="text-muted-foreground mb-4">{t.homepage.subscribeSuccessMessage}</p>
              <p className="text-sm text-muted-foreground">
                {language === "id"
                  ? "Newsletter pertama akan dikirim dalam 24 jam ke depan."
                  : "Your first newsletter will be sent within 24 hours."}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-balance mb-4">{t.homepage.subscribeTitle}</h2>
              <p className="text-muted-foreground text-balance">{t.homepage.subscribeSubtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder={language === "id" ? "Masukkan alamat email Anda" : "Enter your email address"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-center"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-center">
                  {language === "id" ? "Pilih kategori yang Anda minati:" : "Choose categories you're interested in:"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => handleCategoryToggle(category.id)}
                      />
                      <label
                        htmlFor={category.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {category.icon} {category.content[language].name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? t.common.processing : t.homepage.subscribeButton}
              </Button>

              <p className="text-xs text-muted-foreground text-center">{t.homepage.subscribeDisclaimer}</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
