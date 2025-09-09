"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, ArrowRight, Settings } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

function SuccessContent() {
  const { language, t } = useLanguage()
  const searchParams = useSearchParams()
  const email = searchParams.get("email")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-8 md:p-12">
              <CheckCircle className="h-20 w-20 text-accent mx-auto mb-8" />

              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {language === "id" ? "Selamat Datang!" : "Welcome!"}
              </h1>

              {email && (
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                    <Mail className="h-4 w-4" />
                    <span>{language === "id" ? "Email aktif:" : "Active email:"}</span>
                  </div>
                  <p className="font-medium">{email}</p>
                </div>
              )}

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {language === "id"
                  ? "Langganan Anda telah aktif! Anda akan menerima newsletter ForPublic.id setiap minggu dengan analisis kebijakan publik terbaru dan terpercaya."
                  : "Your subscription is now active! You will receive ForPublic.id newsletter every week with the latest and trusted public policy analysis."}
              </p>

              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">
                  {language === "id" ? "Yang akan Anda dapatkan:" : "What you'll receive:"}
                </h3>

                <div className="text-left space-y-3 max-w-md mx-auto">
                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      {language === "id"
                        ? "Analisis mendalam kebijakan pemerintah terbaru"
                        : "In-depth analysis of latest government policies"}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      {language === "id"
                        ? "Data publik dan visualisasi yang mudah dipahami"
                        : "Public data and easy-to-understand visualizations"}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      {language === "id"
                        ? "Update perkembangan civic tech di Indonesia"
                        : "Updates on civic tech developments in Indonesia"}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-muted-foreground">
                      {language === "id"
                        ? "Laporan investigatif dan riset independen"
                        : "Investigative reports and independent research"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/">{language === "id" ? "Jelajahi Website" : "Explore Website"}</Link>
                </Button>

                <Button variant="outline" asChild>
                  <Link href="/archive">
                    {language === "id" ? "Baca Newsletter Lama" : "Read Past Newsletters"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="border-t mt-8 pt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  {language === "id"
                    ? "Ingin mengubah preferensi newsletter Anda?"
                    : "Want to change your newsletter preferences?"}
                </p>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/subscribe/preferences${email ? `?email=${email}` : ""}`}>
                    <Settings className="mr-2 h-4 w-4" />
                    {language === "id" ? "Kelola Preferensi" : "Manage Preferences"}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function SubscribeSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
