export interface Lesson {
  title: string
  duration?: number
  preview?: boolean
}

export interface Module {
  id: string
  title: string
  lessons?: Lesson[]
}

export interface Course {
  id: string
  title: string
  description: string
  fullDescription?: string
  image?: string
  price: number
  level: 'Principiante' | 'Intermedio' | 'Avanzado'
  category: string
  rating?: number
  reviews?: number
  students: number
  duration: number
  modules: Module[]
  learningPoints?: string[]
}

export interface Testimonial {
  author: string
  role: string
  text: string
  rating: number
}
