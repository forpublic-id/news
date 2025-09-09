"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { getNewsletters, getCategories } from "@/lib/newsletter-data"

export function Sidebar() {
  const { language, t } = useLanguage()
  const newsletters = getNewsletters(language)
  const categories = getCategories(language)
  const sidebarStories = newsletters.slice(12, 18)

  return (
    <aside className="space-y-8">
      {/* Most Popular */}
      <div className="border-b border-gray-200 pb-6">
        <h3 className="font-serif text-xl font-bold mb-4 border-b border-gray-200 pb-2">{t.common.mostPopular}</h3>
        <div className="space-y-4">
          {sidebarStories.slice(0, 3).map((story, index) => (
            <article key={story.id} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-gray-900 text-white text-xs font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <div className="flex-1">
                <h4 className="font-serif text-sm font-bold leading-tight mb-1">
                  <Link href={`/newsletter/${story.slug}`} className="hover:text-gray-700">
                    {story.title}
                  </Link>
                </h4>
                <div className="text-xs text-gray-600">
                  <span className="font-medium">{story.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-gray-200 pb-6">
        <h3 className="font-serif text-xl font-bold mb-4 border-b border-gray-200 pb-2">{t.common.sections}</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-1"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 p-4 border border-gray-200">
        <h3 className="font-serif text-lg font-bold mb-2">{t.common.subscribeNewsletter}</h3>
        <p className="text-sm text-gray-700 mb-3">{t.common.subscribeDescription}</p>
        <Link
          href="/subscribe/preferences"
          className="inline-block bg-gray-900 text-white text-sm font-medium px-4 py-2 hover:bg-gray-800 transition-colors"
        >
          {t.common.subscribe}
        </Link>
      </div>

      {/* Recent Stories */}
      <div>
        <h3 className="font-serif text-xl font-bold mb-4 border-b border-gray-200 pb-2">{t.common.recentStories}</h3>
        <div className="space-y-4">
          {sidebarStories.slice(3).map((story) => (
            <article key={story.id} className="space-y-2">
              <Link href={`/newsletter/${story.slug}`}>
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover"
                />
              </Link>
              <div className="mb-1">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{story.category}</span>
              </div>
              <h4 className="font-serif text-sm font-bold leading-tight">
                <Link href={`/newsletter/${story.slug}`} className="hover:text-gray-700">
                  {story.title}
                </Link>
              </h4>
              <div className="text-xs text-gray-600">
                <span className="font-medium">{story.author}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  )
}
