import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, Users, Clock } from 'lucide-react'
import type { Course } from '@/lib/types'

interface CourseCardProps {
  course: Course
  variant?: 'compact' | 'full'
}

export function CourseCard({ course, variant = 'full' }: CourseCardProps) {
  const rating = course.rating || 4.8
  const reviews = course.reviews || 245

  return (
    <Link href={`/curso/${course.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          {course.image && (
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-40" />
          <Badge className="absolute top-4 right-4 bg-primary">
            {course.level}
          </Badge>
        </div>

        <div className="flex-1 p-6 flex flex-col gap-4">
          <div>
            <h3 className="font-serif font-semibold text-lg line-clamp-2 mb-2">
              {course.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {course.description}
            </p>
          </div>

          {variant === 'full' && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span>{rating}</span>
                  <span className="text-xs">({reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}h</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-2xl font-serif font-bold">
                    ${course.price}
                  </p>
                </div>
              </div>

              <Button className="w-full gap-2">
                Ver Curso
              </Button>
            </div>
          )}
        </div>
      </Card>
    </Link>
  )
}
