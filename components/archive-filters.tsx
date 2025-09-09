"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search, X } from "lucide-react"
import { categories } from "@/lib/newsletter-data"

interface ArchiveFiltersProps {
  currentCategory: string
  currentSort: string
  currentSearch: string
}

export function ArchiveFilters({ currentCategory, currentSort, currentSearch }: ArchiveFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(currentSearch)

  const updateFilters = (updates: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== "all" && value !== "newest") {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    router.push(`?${params.toString()}`)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    updateFilters({ search: searchTerm })
  }

  const clearSearch = () => {
    setSearchTerm("")
    updateFilters({ search: undefined })
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Cari newsletter..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-20"
            />
            <div className="absolute right-1 top-1 flex gap-1">
              {searchTerm && (
                <Button type="button" variant="ghost" size="sm" onClick={clearSearch} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              )}
              <Button type="submit" size="sm" className="h-8 w-8 p-0">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Category Filter */}
          <Select value={currentCategory} onValueChange={(value) => updateFilters({ category: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Semua Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Kategori</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.icon} {category.content.id.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={currentSort} onValueChange={(value) => updateFilters({ sort: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Urutkan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Terbaru</SelectItem>
              <SelectItem value="oldest">Terlama</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}
