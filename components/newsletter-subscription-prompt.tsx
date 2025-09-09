"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSubscriptionPrompt() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubscribed(true)
    setIsLoading(false)
  }

  if (isSubscribed) {
    return (
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Terima Kasih!</h2>
              <p className="text-muted-foreground">
                Anda akan mendapatkan newsletter seperti ini langsung di inbox Anda.
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
            <div className="text-center mb-6">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-balance mb-4">Dapatkan Newsletter Seperti Ini</h2>
              <p className="text-muted-foreground text-balance">
                Berlangganan untuk mendapatkan analisis kebijakan publik terbaru langsung di inbox Anda setiap minggu.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Memproses..." : "Berlangganan"}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">Gratis dan bisa berhenti kapan saja.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
