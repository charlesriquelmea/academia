'use client'

import { useState, useMemo } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CourseCard } from '@/components/course-card'
import { CourseFilters } from '@/components/course-filters'
import { courses } from '@/lib/mock-data'
import { Empty } from '@/components/ui/empty'

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null)

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesLevel = !selectedLevel || course.level === selectedLevel
      
      const matchesPrice = !selectedPrice || (
        selectedPrice === 'free' ? course.price === 0 :
        selectedPrice === '0-50' ? course.price > 0 && course.price <= 50 :
        selectedPrice === '50-100' ? course.price > 50 && course.price <= 100 :
        selectedPrice === '100+' ? course.price > 100 : false
      )

      return matchesSearch && matchesLevel && matchesPrice
    })
  }, [searchQuery, selectedLevel, selectedPrice])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-serif text-4xl font-bold mb-4">
              Catálogo de Cursos
            </h1>
            <p className="text-lg text-muted-foreground">
              Explora nuestro catálogo completo de cursos profesionales
            </p>
          </div>

          {/* Filters and Courses */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <CourseFilters
                  onSearchChange={setSearchQuery}
                  onLevelChange={setSelectedLevel}
                  onPriceChange={setSelectedPrice}
                  selectedLevel={selectedLevel}
                  selectedPrice={selectedPrice}
                  searchQuery={searchQuery}
                />
              </div>
            </div>

            {/* Courses Grid */}
            <div className="lg:col-span-3">
              {filteredCourses.length === 0 ? (
                <Empty title="No se encontraron cursos" description="Intenta ajustar tus filtros de búsqueda" />
              ) : (
                <>
                  <p className="text-sm text-muted-foreground mb-6">
                    Mostrando {filteredCourses.length} de {courses.length} cursos
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredCourses.map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
