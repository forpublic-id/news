import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileX, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <FileX className="h-24 w-24 text-muted-foreground mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Newsletter Tidak Ditemukan</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Maaf, newsletter yang Anda cari tidak dapat ditemukan. Mungkin artikel telah dipindahkan atau URL tidak
              valid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Kembali ke Beranda
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/archive">Lihat Semua Newsletter</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
