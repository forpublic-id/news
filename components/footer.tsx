"use client"

import Link from "next/link"
import { Mail, Twitter, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { language, t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FP</span>
              </div>
              <span className="font-bold text-lg">ForPublic.id News</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">{t.footer.description}</p>
            <div className="flex space-x-4">
              <Link
                href="mailto:news@forpublic.id"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.categories}
                </Link>
              </li>
              <li>
                <Link href="/archive" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.archive}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <Link href="/unsubscribe" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.common.unsubscribe}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ForPublic.id. {t.footer.copyright}
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
