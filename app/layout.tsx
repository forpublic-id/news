import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"
import { Playfair_Display, Merriweather } from "next/font/google"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ForPublic.id News - Newsletter Berita Kebijakan Publik",
  description:
    "Newsletter dwibahasa tentang kebijakan publik, analisis pemerintahan, dan update sipil dari ForPublic.id",
  generator: "v0.app",
  openGraph: {
    title: "ForPublic.id News",
    description: "Newsletter dwibahasa tentang kebijakan publik dan analisis pemerintahan",
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForPublic.id News",
    description: "Newsletter dwibahasa tentang kebijakan publik dan analisis pemerintahan",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`font-sans ${playfairDisplay.variable} ${merriweather.variable} ${GeistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
