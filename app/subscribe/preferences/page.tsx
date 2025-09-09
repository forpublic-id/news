"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Settings } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { categories } from "@/lib/newsletter-data"
import Link from "next/link"

function PreferencesContent() {
  const { language, t } = useLanguage()
  const searchParams = useSearchParams()
  const emailParam = searchParams.get("email")

  const [email, setEmail] = useState(emailParam || "")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["policy-watch", "civic-updates"])
  const [frequency, setFrequency] = useState("weekly")
  const [isUpdated, setIsUpdated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const frequencies =
    language === "id"
      ? [
          { value: "daily", label: "Harian" },
          { value: "weekly", label: "Mingguan" },
          { value: "monthly", label: "Bulanan" },
        ]
      : [
          { value: "daily", label: "Daily" },
          { value: "weekly", label: "Weekly" },
          { value: "monthly", label: "Monthly" },
        ]

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const handleUpdatePreferences = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || selectedCategories.length === 0) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsUpdated(true)
    setIsLoading(false)
  }

  if (isUpdated) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="p-8 md:p-12">
                <CheckCircle className="h-20 w-20 text-accent mx-auto mb-8" />

                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  {language === "id" ? "Preferensi Diperbarui" : "Preferences Updated"}
                </h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {language === "id"
                    ? "Preferensi newsletter Anda telah berhasil diperbarui. Perubahan akan berlaku untuk newsletter berikutnya."
                    : "Your newsletter preferences have been successfully updated. Changes will take effect for the next newsletter."}
                </p>

                <div className="bg-muted/50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold mb-3">
                    {language === "id" ? "Ringkasan Preferensi:" : "Preference Summary:"}
                  </h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      <strong>{language === "id" ? "Frekuensi:" : "Frequency:"}</strong>{" "}
                      {frequencies.find((f) => f.value === frequency)?.label}
                    </p>
                    <p>
                      <strong>{language === "id" ? "Kategori:" : "Categories:"}</strong> {selectedCategories.length}{" "}
                      {language === "id" ? "dipilih" : "selected"}
                    </p>
                  </div>
                </div>

                <Button asChild>
                  <Link href="/">{language === "id" ? "Kembali ke Beranda" : "Back to Home"}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Settings className="h-16 w-16 text-primary mx-auto mb-6" />
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {language === "id" ? "Preferensi Newsletter" : "Newsletter Preferences"}
                </h1>
                <p className="text-muted-foreground">
                  {language === "id"
                    ? "Sesuaikan pengaturan newsletter sesuai dengan kebutuhan Anda."
                    : "Customize your newsletter settings according to your needs."}
                </p>
              </div>

              <form onSubmit={handleUpdatePreferences} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === "id" ? "Alamat Email" : "Email Address"}
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === "id" ? "Masukkan email Anda" : "Enter your email"}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-4">
                    {language === "id" ? "Frekuensi Newsletter" : "Newsletter Frequency"}
                  </label>
                  <Select value={frequency} onValueChange={setFrequency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {frequencies.map((freq) => (
                        <SelectItem key={freq.value} value={freq.value}>
                          {freq.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-4">
                    {language === "id" ? "Kategori yang Diminati" : "Interested Categories"}
                  </label>
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
                  {selectedCategories.length === 0 && (
                    <p className="text-sm text-red-500 mt-2">
                      {language === "id" ? "Pilih minimal satu kategori" : "Please select at least one category"}
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1" disabled={isLoading || selectedCategories.length === 0}>
                    {isLoading
                      ? language === "id"
                        ? "Memperbarui..."
                        : "Updating..."
                      : language === "id"
                        ? "Perbarui Preferensi"
                        : "Update Preferences"}
                  </Button>

                  <Button type="button" variant="outline" className="flex-1 bg-transparent" asChild>
                    <Link href="/">{language === "id" ? "Batal" : "Cancel"}</Link>
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-3 text-center">
                    {language === "id" ? "Opsi Lainnya" : "Other Options"}
                  </h3>
                  <div className="flex justify-center">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/unsubscribe" className="text-red-600 hover:text-red-700">
                        {language === "id" ? "Berhenti Berlangganan" : "Unsubscribe"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function PreferencesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PreferencesContent />
    </Suspense>
  )
}
