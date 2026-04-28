// Instructor
export interface Instructor {
  id: string
  nombre: string
  titulo: string
  bio: string
  foto: string
  stats: {
    estudiantes: number
    cursos: number
    rating: number
    anios: number
    incubaciones: number
  }
  redes: {
    linkedin?: string
    instagram?: string
    youtube?: string
    github?: string
  }
}

// Lección
export interface Leccion {
  titulo: string
  duracion: string
  esPreview: boolean
}

// Módulo
export interface Modulo {
  titulo: string
  lecciones: Leccion[]
}

// Reseña
export interface Resena {
  nombre: string
  cargo: string
  avatar: string
  estrellas: number
  texto: string
  fecha: string
}

// Curso
export interface Curso {
  slug: string
  titulo: string
  descripcionCorta: string
  descripcionLarga: string
  imagenPortada: string
  precio: number
  moneda: string
  precioOriginal: number
  cuotas: { cantidad: number; valorCuota: number }
  cuotasReferido: { cantidad: number; valorCuota: number }
  nivel: "Principiante" | "Intermedio" | "Avanzado"
  categoria: string
  rating: number
  distribucionRating: Record<number, number>
  estudiantes: number
  lecciones: number
  horas: number
  ultimaActualizacion: string
  destacado: boolean
  instructores: string[]
  stack: string[]
  modulos: Modulo[]
  queAprenderas: string[]
  resenas: Resena[]
}

// Testimonio
export interface Testimonio {
  nombre: string
  cargo: string
  avatar: string
  estrellas: number
  texto: string
}
