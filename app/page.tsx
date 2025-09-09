import { Header } from "@/components/header"
import { MainStory } from "@/components/main-story"
import { NewsGrid } from "@/components/news-grid"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1200px] mx-auto px-4">
        <MainStory />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3">
            <NewsGrid />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
