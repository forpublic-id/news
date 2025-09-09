"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { getNewsletters } from "@/lib/newsletter-data"

export function NewsGrid() {
  const { language, t } = useLanguage()
  const newsletters = getNewsletters(language)
  const gridStories = newsletters.slice(1, 7) // Skip main story, show next 6

  return (
    <div className="space-y-8">
      {/* Featured Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-200 pb-8">
        {gridStories.slice(0, 4).map((story, index) => (
          <article key={story.id} className="space-y-3">
            <div className="mb-2">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{story.category}</span>
            </div>
            <h2 className="font-serif text-xl font-bold leading-tight">
              <Link href={story.url} className="hover:text-gray-700">
                {story.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{story.excerpt.substring(0, 120)}...</p>
            <div className="flex items-center text-xs text-gray-600 space-x-3">
              <span className="font-medium">{story.author}</span>
              <span>{story.publishDate}</span>
            </div>
          </article>
        ))}
      </div>

      {/* More Stories List */}
      <div className="space-y-6">
        <h3 className="font-serif text-2xl font-bold border-b border-gray-200 pb-2">{t.common.moreStories}</h3>
        {newsletters.slice(7, 12).map((story) => (
          <article key={story.id} className="flex gap-4 pb-4 border-b border-gray-100">
            <div className="flex-shrink-0">
              <Link href={story.url}>
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  width={120}
                  height={80}
                  className="w-[120px] h-[80px] object-cover"
                />
              </Link>
            </div>
            <div className="flex-1 space-y-2">
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{story.category}</span>
              </div>
              <h3 className="font-serif text-lg font-bold leading-tight">
                <Link href={story.url} className="hover:text-gray-700">
                  {story.title}
                </Link>
              </h3>
              <div className="flex items-center text-xs text-gray-600 space-x-3">
                <span className="font-medium">{story.author}</span>
                <span>{story.publishDate}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
