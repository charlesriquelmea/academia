'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, X } from 'lucide-react'

interface CourseFiltersProps {
  onSearchChange: (search: string) => void
  onLevelChange: (level: string | null) => void
  onPriceChange: (range: string | null) => void
  selectedLevel: string | null
  selectedPrice: string | null
  searchQuery: string
}

const levels = ['Principiante', 'Intermedio', 'Avanzado']
const priceRanges = [
  { label: 'Gratis', value: 'free' },
  { label: '$0 - $50', value: '0-50' },
  { label: '$50 - $100', value: '50-100' },
  { label: '$100+', value: '100+' }
]

export function CourseFilters({
  onSearchChange,
  onLevelChange,
  onPriceChange,
  selectedLevel,
  selectedPrice,
  searchQuery
}: CourseFiltersProps) {
  const hasFilters = searchQuery || selectedLevel || selectedPrice

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar cursos..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Clear Filters */}
      {hasFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            onSearchChange('')
            onLevelChange(null)
            onPriceChange(null)
          }}
          className="w-full gap-2"
        >
          <X className="w-4 h-4" />
          Limpiar Filtros
        </Button>
      )}

      {/* Level Filter */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm">Nivel</h3>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <Badge
              key={level}
              variant={selectedLevel === level ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => onLevelChange(selectedLevel === level ? null : level)}
            >
              {level}
            </Badge>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="space-y-3">
        <h3 className="font-semibold text-sm">Precio</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.value} className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-muted">
              <input
                type="radio"
                name="price"
                value={range.value}
                checked={selectedPrice === range.value}
                onChange={() => onPriceChange(selectedPrice === range.value ? null : range.value)}
                className="w-4 h-4 cursor-pointer"
              />
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
