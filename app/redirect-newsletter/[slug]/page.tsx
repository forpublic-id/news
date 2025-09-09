import { redirect } from "next/navigation"
import { sampleNewsletters, getNewsletterDateUrl } from "@/lib/newsletter-data"

interface RedirectPageProps {
  params: {
    slug: string
  }
}

export default function RedirectNewsletterPage({ params }: RedirectPageProps) {
  const newsletter = sampleNewsletters.find((n) => n.slug === params.slug)
  
  if (!newsletter) {
    // Redirect ke 404 jika newsletter tidak ditemukan
    redirect('/not-found')
  }
  
  // Redirect ke URL baru dengan format tahun/bulan
  const newUrl = getNewsletterDateUrl(newsletter)
  redirect(newUrl)
}

// Generate static params untuk semua newsletter slugs
export async function generateStaticParams() {
  return sampleNewsletters.map((newsletter) => ({
    slug: newsletter.slug,
  }))
}