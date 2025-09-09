"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, Search } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id")
  }

  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.categories, href: "/categories" },
    { name: t.nav.archive, href: "/archive" },
    { name: t.nav.about, href: "/about" },
  ]

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between text-xs border-b border-border">
          <div className="flex items-center space-x-4 text-muted-foreground">
            <span>
              {new Date().toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center space-x-1 h-8 px-2">
              <Globe className="h-3 w-3" />
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </Button>
          </div>
        </div>

        <div className="flex h-20 items-center justify-between">
          {/* Logo - NYTimes style */}
          <Link href="/" className="flex items-center">
            <div className="text-center">
              <h1 className="font-serif text-3xl font-bold text-foreground tracking-tight">ForPublic.id</h1>
              <p className="text-xs text-muted-foreground font-sans tracking-wide uppercase">
                {language === "id" ? "Berita Kebijakan Publik" : "Public Policy News"}
              </p>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span className="text-sm">{language === "id" ? "Cari" : "Search"}</span>
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <div className="hidden md:block border-t border-border">
          <nav className="flex items-center justify-center space-x-8 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-secondary transition-colors uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="ghost" size="sm" className="flex items-center space-x-2 justify-start">
                <Search className="h-4 w-4" />
                <span className="text-sm">{language === "id" ? "Cari" : "Search"}</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
