"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Facebook, Linkedin, Link2, MessageCircle } from "lucide-react"
import type { Newsletter } from "@/lib/newsletter-data"
import { useState } from "react"

interface SocialShareProps {
  newsletter: Newsletter
}

export function SocialShare({ newsletter }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const content = newsletter.content.id

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `${content.title} - ${content.excerpt}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
  }

  return (
    <Card className="mb-8 md:mb-12">
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4 text-center">Bagikan artikel ini</h3>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareLinks.twitter, "_blank")}
            className="flex items-center gap-2"
          >
            <Twitter className="h-4 w-4" />
            <span className="hidden sm:inline">Twitter</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareLinks.facebook, "_blank")}
            className="flex items-center gap-2"
          >
            <Facebook className="h-4 w-4" />
            <span className="hidden sm:inline">Facebook</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareLinks.linkedin, "_blank")}
            className="flex items-center gap-2"
          >
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(shareLinks.whatsapp, "_blank")}
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyLink}
            className="flex items-center gap-2 bg-transparent"
          >
            <Link2 className="h-4 w-4" />
            <span className="hidden sm:inline">{copied ? "Tersalin!" : "Salin Link"}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
