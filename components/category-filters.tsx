"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { SlidersHorizontal, Calendar, TrendingUp } from "lucide-react"

interface CategoryFiltersProps {
  currentSort: string
}

export function CategoryFilters({ currentSort }: CategoryFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "newest") {
      params.delete("sort")
    } else {
      params.set("sort", value)
    }
    router.push(`?${params.toString()}`)
  }

  const sortOptions = [
    { value: "newest", label: "Terbaru", icon: Calendar },
    { value: "oldest", label: "Terlama", icon: Calendar },
    { value: "popular", label: "Terpopuler", icon: TrendingUp },
  ]

  return (
    <Card className="mb-8">
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filter & Urutkan</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Select value={currentSort} onValueChange={handleSortChange}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Urutkan berdasarkan" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => {
                  const Icon = option.icon
                  return (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span>{option.label}</span>
                      </div>
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>

            {/* Future: Add date range filter */}
            <Button variant="outline" size="sm" disabled>
              Filter Tanggal
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
