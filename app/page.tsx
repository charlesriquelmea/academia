import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CourseCard } from '@/components/course-card'
import { CohortSection } from '@/components/cohort-section'
import { Button } from '@/components/ui/button'
import { courses, testimonials } from '@/lib/mock-data'
import { ArrowRight, CheckCircle, Zap, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Academia de Cursos | Aprende Desarrollo Web y Backend',
  description: 'Cursos profesionales en desarrollo web, backend y bases de datos. Aprende con casos reales y mentoring directo.',
}

export default function Home() {
  const featuredCourses = courses.slice(0, 3)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Aprende de un Profesional
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-pretty mb-6">
                  Domina el Desarrollo Web, Backend y Bases de Datos
                </h1>
                <p className="text-lg text-muted-foreground text-pretty max-w-xl">
                  Cursos intensivos y prácticos diseñados para llevar tu carrera al siguiente nivel. Con casos reales, proyectos y mentoring directo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/catalogo">
                  <Button size="lg" className="gap-2 group">
                    Explorar Cursos
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Ver Demostración
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <p className="font-serif font-bold text-2xl">12+</p>
                  <p className="text-sm text-muted-foreground">Cursos Activos</p>
                </div>
                <div>
                  <p className="font-serif font-bold text-2xl">2.5K+</p>
                  <p className="text-sm text-muted-foreground">Estudiantes</p>
                </div>
                <div>
                  <p className="font-serif font-bold text-2xl">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfacción</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-40" />
              <svg className="w-32 h-32 text-primary/30" fill="none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" />
                <path d="M 50 20 L 70 50 L 50 80 L 30 50 Z" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              ¿Por qué elegir Academia?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contenido de calidad, instructores expertos y comunidad activa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Contenido Verificado',
                description: 'Cursos actualizados con las mejores prácticas de la industria'
              },
              {
                icon: Zap,
                title: 'Proyectos Reales',
                description: 'Aprende construyendo aplicaciones del mundo real'
              },
              {
                icon: CheckCircle,
                title: 'Soporte Directo',
                description: 'Mentoring y respuestas rápidas a tus preguntas'
              },
              {
                icon: ArrowRight,
                title: 'Certificados',
                description: 'Reconocimiento profesional al completar cursos'
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-2">
                Cursos Destacados
              </h2>
              <p className="text-muted-foreground">
                Nuestros cursos más populares te esperan
              </p>
            </div>
            <Link href="/catalogo">
              <Button variant="outline" className="gap-2">
                Ver todos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Lo que dicen nuestros estudiantes
            </h2>
            <p className="text-lg text-muted-foreground">
              Miles de desarrolladores han transformado sus carreras
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <div key={i} className="p-6 rounded-xl bg-background border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-primary">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cohort Section */}
      <CohortSection />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para transformar tu carrera?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Únete a miles de desarrolladores que ya están aprendiendo con nuestros cursos
          </p>
          <Link href="/catalogo">
            <Button size="lg" className="gap-2">
              Comienza Ahora
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
