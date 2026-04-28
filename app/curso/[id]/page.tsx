import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { courses } from '@/lib/mock-data'
import { Star, Users, Clock, CheckCircle, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface CourseDetailPageProps {
  params: Promise<{ id: string }>
}

// Server Component - No client hooks
export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params
  const course = courses.find((c) => c.id === id)

  if (!course) {
    notFound()
  }

  const rating = course.rating || 4.8
  const reviews = course.reviews || 245

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex gap-2 mb-4">
                <Badge>{course.level}</Badge>
                <Badge variant="outline">{course.category}</Badge>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="font-semibold">{rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({reviews} reseñas)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{course.students} estudiantes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{course.duration} horas</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold">
                <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Descripción</h2>
                <p>{course.fullDescription}</p>

                <h2 className="text-2xl font-serif font-bold mt-12 mb-6">Temario</h2>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6 p-6 rounded-xl bg-card border border-border">
                <div>
                  <p className="text-3xl font-serif font-bold">${course.price}</p>
                </div>

                <Link href={`/checkout?course=${course.id}`} className="w-full">
                  <Button size="lg" className="w-full gap-2">
                    Comprar Ahora
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Button variant="outline" className="w-full" disabled>
                  <Play className="w-4 h-4 mr-2" />
                  Ver Demostración
                </Button>

                <div className="space-y-3 pt-6 border-t border-border">
                  <h3 className="font-semibold">Incluye:</h3>
                  <ul className="space-y-2">
                    {[
                      'Videos bajo demanda',
                      'Proyectos prácticos',
                      'Acceso de por vida',
                      'Certificado de finalización',
                      'Comunidad privada',
                      'Soporte directo'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {course.modules.map((module, idx) => (
                <AccordionItem key={module.id} value={module.id}>
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <span className="font-semibold text-sm text-primary">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="font-semibold">{module.title}</p>
                        <p className="text-sm text-muted-foreground">{module.lessons?.length || 0} lecciones</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pl-10">
                      {module.lessons?.map((lesson, lessonIdx) => (
                        <div key={lessonIdx} className="flex items-center gap-3 p-3 rounded hover:bg-muted transition-colors">
                          <Play className="w-4 h-4 text-primary flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-sm font-medium">{lesson.title}</p>
                            <p className="text-xs text-muted-foreground">{lesson.duration || 15} min</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12">Lo que aprenderás</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.learningPoints?.map((point, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              ¿Listo para aprender?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Comienza hoy y obtén acceso ilimitado al contenido del curso
            </p>
            <Link href={`/checkout?course=${course.id}`}>
              <Button size="lg" className="gap-2">
                Comprar Ahora - ${course.price}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
