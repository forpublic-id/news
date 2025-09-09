"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

function UnsubscribeContent() {
  const { language, t } = useLanguage()
  const searchParams = useSearchParams()
  const emailParam = searchParams.get("email")

  const [email, setEmail] = useState(emailParam || "")
  const [reason, setReason] = useState("")
  const [feedback, setFeedback] = useState("")
  const [isUnsubscribed, setIsUnsubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const reasons =
    language === "id"
      ? [
          "Terlalu banyak email",
          "Konten tidak relevan",
          "Tidak punya waktu membaca",
          "Berlangganan tidak sengaja",
          "Kualitas konten menurun",
          "Alasan lainnya",
        ]
      : [
          "Too many emails",
          "Content not relevant",
          "No time to read",
          "Subscribed by mistake",
          "Content quality declined",
          "Other reason",
        ]

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsUnsubscribed(true)
    setIsLoading(false)
  }

  if (isUnsubscribed) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="p-8 md:p-12">
                <CheckCircle className="h-20 w-20 text-accent mx-auto mb-8" />

                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  {language === "id" ? "Berhasil Berhenti Berlangganan" : "Successfully Unsubscribed"}
                </h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {language === "id"
                    ? "Anda telah berhasil berhenti berlangganan dari newsletter ForPublic.id. Kami menyesal melihat Anda pergi dan berharap dapat melayani Anda lagi di masa depan."
                    : "You have successfully unsubscribed from ForPublic.id newsletter. We're sorry to see you go and hope to serve you again in the future."}
                </p>

                <div className="bg-muted/50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold mb-3">
                    {language === "id" ? "Tetap terhubung dengan kami:" : "Stay connected with us:"}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/">{language === "id" ? "Kunjungi Website" : "Visit Website"}</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/archive">{language === "id" ? "Baca Arsip" : "Read Archive"}</Link>
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {language === "id"
                    ? "Jika Anda berubah pikiran, Anda selalu dapat berlangganan lagi kapan saja."
                    : "If you change your mind, you can always subscribe again anytime."}
                </p>
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
                <AlertCircle className="h-16 w-16 text-orange-500 mx-auto mb-6" />
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {language === "id" ? "Berhenti Berlangganan" : "Unsubscribe"}
                </h1>
                <p className="text-muted-foreground">
                  {language === "id"
                    ? "Kami menyesal melihat Anda pergi. Mohon bantu kami memahami alasan Anda."
                    : "We're sorry to see you go. Please help us understand your reason."}
                </p>
              </div>

              <form onSubmit={handleUnsubscribe} className="space-y-6">
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
                  <label className="block text-sm font-medium mb-2">
                    {language === "id" ? "Alasan berhenti berlangganan" : "Reason for unsubscribing"}
                  </label>
                  <Select value={reason} onValueChange={setReason}>
                    <SelectTrigger>
                      <SelectValue placeholder={language === "id" ? "Pilih alasan" : "Select a reason"} />
                    </SelectTrigger>
                    <SelectContent>
                      {reasons.map((reasonText, index) => (
                        <SelectItem key={index} value={reasonText}>
                          {reasonText}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === "id" ? "Saran untuk perbaikan (opsional)" : "Suggestions for improvement (optional)"}
                  </label>
                  <Textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder={
                      language === "id"
                        ? "Bagaimana kami bisa memperbaiki newsletter kami?"
                        : "How can we improve our newsletter?"
                    }
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" variant="destructive" className="flex-1" disabled={isLoading}>
                    {isLoading
                      ? language === "id"
                        ? "Memproses..."
                        : "Processing..."
                      : language === "id"
                        ? "Konfirmasi Berhenti Berlangganan"
                        : "Confirm Unsubscribe"}
                  </Button>

                  <Button type="button" variant="outline" className="flex-1 bg-transparent" asChild>
                    <Link href="/">{language === "id" ? "Batal" : "Cancel"}</Link>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  {language === "id"
                    ? "Setelah dikonfirmasi, Anda tidak akan menerima email newsletter lagi."
                    : "Once confirmed, you will no longer receive newsletter emails."}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UnsubscribeContent />
    </Suspense>
  )
}
