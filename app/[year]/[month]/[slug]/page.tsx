import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterHeader } from "@/components/newsletter-header"
import { NewsletterContent } from "@/components/newsletter-content"
import { SocialShare } from "@/components/social-share"
import { RelatedNewsletters } from "@/components/related-newsletters"
import { NewsletterSubscriptionPrompt } from "@/components/newsletter-subscription-prompt"
import { sampleNewsletters } from "@/lib/newsletter-data"

interface NewsletterPageProps {
  params: {
    year: string
    month: string
    slug: string
  }
}

export async function generateMetadata({ params }: NewsletterPageProps): Promise<Metadata> {
  const newsletter = sampleNewsletters.find((n) => {
    const publishDate = new Date(n.publishedAt)
    const year = publishDate.getFullYear().toString()
    const month = (publishDate.getMonth() + 1).toString().padStart(2, '0')
    
    return year === params.year && month === params.month && n.slug === params.slug
  })

  if (!newsletter) {
    return {
      title: "Newsletter Not Found",
    }
  }

  const content = newsletter.content.id

  return {
    title: `${content.title} | ForPublic.id News`,
    description: content.excerpt,
    openGraph: {
      title: content.title,
      description: content.excerpt,
      type: "article",
      publishedTime: newsletter.publishedAt,
      authors: [content.author],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.excerpt,
    },
  }
}

export async function generateStaticParams() {
  return sampleNewsletters.map((newsletter) => {
    const publishDate = new Date(newsletter.publishedAt)
    const year = publishDate.getFullYear().toString()
    const month = (publishDate.getMonth() + 1).toString().padStart(2, '0')
    
    return {
      year,
      month,
      slug: newsletter.slug,
    }
  })
}

export default function NewsletterPage({ params }: NewsletterPageProps) {
  const newsletter = sampleNewsletters.find((n) => {
    const publishDate = new Date(n.publishedAt)
    const year = publishDate.getFullYear().toString()
    const month = (publishDate.getMonth() + 1).toString().padStart(2, '0')
    
    return year === params.year && month === params.month && n.slug === params.slug
  })

  if (!newsletter) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <article className="py-8 md:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <NewsletterHeader newsletter={newsletter} />
              <NewsletterContent newsletter={newsletter} />
              <SocialShare newsletter={newsletter} />
            </div>
          </div>
        </article>
        <RelatedNewsletters currentNewsletter={newsletter} />
        <NewsletterSubscriptionPrompt />
      </main>
      <Footer />
    </div>
  )
}