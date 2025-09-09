"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { getNewsletters } from "@/lib/newsletter-data"

export function MainStory() {
  const { language, t } = useLanguage()
  const newsletters = getNewsletters(language)
  const mainStory = newsletters[0]

  return (
    <article className="border-b border-gray-200 pb-8 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="mb-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{mainStory.category}</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900">
            <Link href={mainStory.url} className="hover:text-gray-700">
              {mainStory.title}
            </Link>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 font-serif">{mainStory.excerpt}</p>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <span className="font-medium">
              {t.common.by} {mainStory.author}
            </span>
            <span>{mainStory.publishDate}</span>
            <span>
              {mainStory.readTime} {t.common.minRead}
            </span>
          </div>
        </div>
        <div className="lg:order-first">
          <Link href={mainStory.url}>
            <Image
              src={mainStory.image || "/placeholder.svg"}
              alt={mainStory.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </Link>
          <p className="text-xs text-gray-500 mt-2 italic">{mainStory.imageCaption}</p>
        </div>
      </div>
    </article>
  )
}
