"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Mail, ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

function ConfirmContent() {
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
                {language === "id" ? "Konfirmasi Berlangganan" : "Subscription Confirmed"}
              </h1>

              {email && (
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                    <Mail className="h-4 w-4" />
                    <span>{language === "id" ? "Email terdaftar:" : "Registered email:"}</span>
                  </div>
                  <p className="font-medium">{email}</p>
                </div>
              )}

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {language === "id"
                  ? "Terima kasih telah berlangganan newsletter ForPublic.id! Anda akan menerima email konfirmasi dalam beberapa menit. Klik link di email tersebut untuk mengaktifkan langganan Anda."
                  : "Thank you for subscribing to ForPublic.id newsletter! You will receive a confirmation email in a few minutes. Click the link in that email to activate your subscription."}
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">{language === "id" ? "Apa selanjutnya?" : "What's next?"}</h3>

                <div className="text-left space-y-3 max-w-md mx-auto">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "id"
                        ? "Periksa inbox email Anda (termasuk folder spam)"
                        : "Check your email inbox (including spam folder)"}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "id" ? "Klik link konfirmasi di email" : "Click the confirmation link in the email"}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "id"
                        ? "Mulai menerima newsletter mingguan kami"
                        : "Start receiving our weekly newsletters"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild>
                  <Link href="/">{language === "id" ? "Kembali ke Beranda" : "Back to Home"}</Link>
                </Button>

                <Button variant="outline" asChild>
                  <Link href="/archive">
                    {language === "id" ? "Baca Newsletter Lama" : "Read Past Newsletters"}
                    <ArrowRight className="ml-2 h-4 w-4" />
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

export default function SubscribeConfirmPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmContent />
    </Suspense>
  )
}
