'use client'

import Head from 'next/head'
import { cursos, instructores } from '@/lib/mock-data-product'
import { formatCLP } from '@/lib/utils-product'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Star, Users, Clock, CheckCircle2, Lock, Play, Heart, Share2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function CursoPage() {
  const params = useParams()
  const slug = params.slug as string

  const curso = cursos.find((c) => c.slug === slug)
  const [mostrarPreview, setMostrarPreview] = useState(false)
  const [previewLeccion, setPreviewLeccion] = useState('')

  if (!curso) {
    return (
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex items-center justify-center">
        <p className="text-lg text-[var(--muted)]">Curso no encontrado</p>
      </div>
    )
  }

  const cursosInstructores = curso.instructores.map((id) => instructores.find((i) => i.id === id)).filter(Boolean)

  const nivelColor = {
    Principiante: 'bg-green-500/10 text-green-600 border-green-500/30',
    Intermedio: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30',
    Avanzado: 'bg-red-500/10 text-red-600 border-red-500/30',
  }

  const totalLecciones = curso.modulos.reduce((acc, m) => acc + m.lecciones.length, 0)
  const totalHoras = curso.horas

  return (
    <>
      <Head>
        <title>{curso.titulo} — AI Engineer Builder by Protolylat</title>
        <meta name="description" content={curso.descripcionCorta} />
        <meta property="og:title" content={curso.titulo} />
        <meta property="og:description" content={curso.descripcionCorta} />
        <meta property="og:image" content={curso.imagenPortada} />
      </Head>

      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-[var(--border)]">
          <nav className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--accent)]">Inicio</Link>
            <span>›</span>
            <Link href="/cursos" className="hover:text-[var(--accent)]">Cursos</Link>
            <span>›</span>
            <span className="text-[var(--text)]">{curso.titulo}</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda */}
          <div className="lg:col-span-2 space-y-8">
            {/* Imagen banner */}
            <div className="aspect-video rounded-lg overflow-hidden bg-[var(--border)]">
              <img
                src={curso.imagenPortada}
                alt={curso.titulo}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className={`${nivelColor[curso.nivel]} border`}>
                {curso.nivel}
              </Badge>
              <Badge className="bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/30">
                {curso.categoria}
              </Badge>
              <Badge className="bg-[var(--muted)]/10 text-[var(--muted)] border-[var(--border)]">
                Actualizado: {curso.ultimaActualizacion}
              </Badge>
            </div>

            {/* Título */}
            <h1 className="text-4xl font-serif font-bold">{curso.titulo}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(curso.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-[var(--border)]'}`}
                  />
                ))}
              </div>
              <span className="font-bold">{curso.rating}</span>
              <span className="text-[var(--muted)]">({curso.estudiantes} estudiantes)</span>
            </div>

            {/* Descripción */}
            <p className="text-[var(--muted)] leading-relaxed">{curso.descripcionLarga}</p>

            {/* Badges info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <Clock className="w-4 h-4" />
                {totalLecciones} lecciones · {totalHoras} horas
              </div>
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <Users className="w-4 h-4" />
                Nivel: {curso.nivel}
              </div>
            </div>

            {/* Lo que aprenderás */}
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6">
              <h2 className="font-serif font-bold text-lg mb-6">Lo que aprenderás</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {curso.queAprenderas.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contenido del curso */}
            <div>
              <h2 className="font-serif font-bold text-lg mb-2">Contenido del curso</h2>
              <p className="text-sm text-[var(--muted)] mb-6">
                {curso.modulos.length} módulos · {totalLecciones} lecciones · {totalHoras} horas en total
              </p>

              <Accordion type="single" collapsible className="space-y-3">
                {curso.modulos.map((modulo, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`modulo-${idx}`}
                    className="bg-[var(--surface)] border border-[var(--border)] rounded-lg px-6 data-[state=open]:border-[var(--accent)]"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center justify-between w-full text-left">
                        <span className="font-semibold">{modulo.titulo}</span>
                        <span className="text-sm text-[var(--muted)]">{modulo.lecciones.length} lecciones</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="space-y-3">
                        {modulo.lecciones.map((leccion, lidx) => (
                          <div key={lidx} className="flex items-center justify-between p-3 bg-[var(--bg)] rounded">
                            <div className="flex items-center gap-3">
                              {leccion.esPreview ? (
                                <Play className="w-4 h-4 text-[var(--accent)]" />
                              ) : (
                                <Lock className="w-4 h-4 text-[var(--muted)]" />
                              )}
                              <span className="text-sm">{leccion.titulo}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-[var(--muted)]">{leccion.duracion}</span>
                              {leccion.esPreview && (
                                <Badge className="bg-green-500/10 text-green-600 border-green-500/30 text-xs">GRATIS</Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Instructores */}
            <div>
              <h2 className="font-serif font-bold text-lg mb-6">Tus instructores</h2>
              <div className="space-y-6">
                {cursosInstructores.map((instructor) => (
                  <div key={instructor.id} className="flex gap-4 pb-6 border-b border-[var(--border)] last:border-0">
                    <img
                      src={instructor.foto}
                      alt={instructor.nombre}
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif font-bold">{instructor.nombre}</h3>
                      <p className="text-sm text-[var(--muted)] mb-2">{instructor.titulo}</p>
                      <p className="text-sm mb-3">{instructor.bio}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-[var(--muted)] mb-3">
                        <span>⭐ {instructor.stats.rating}</span>
                        <span>👥 {instructor.stats.estudiantes} estudiantes</span>
                        <span>📚 {instructor.stats.cursos} cursos</span>
                        <span>⏱ {instructor.stats.anios} años en tech</span>
                      </div>
                      <div className="flex gap-3">
                        {instructor.redes.linkedin && (
                          <a href={instructor.redes.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline text-sm">
                            LinkedIn
                          </a>
                        )}
                        {instructor.redes.github && (
                          <a href={instructor.redes.github} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline text-sm">
                            GitHub
                          </a>
                        )}
                        {instructor.redes.instagram && (
                          <a href={instructor.redes.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline text-sm">
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reseñas */}
            <div>
              <h2 className="font-serif font-bold text-lg mb-6">Reseñas del curso</h2>
              <div className="space-y-6">
                {curso.resenas.map((resena, i) => (
                  <div key={i} className="pb-6 border-b border-[var(--border)] last:border-0">
                    <div className="flex items-start gap-3 mb-3">
                      <img src={resena.avatar} alt={resena.nombre} className="w-10 h-10 rounded-full" />
                      <div className="flex-1">
                        <div className="font-semibold text-sm">{resena.nombre}</div>
                        <div className="text-xs text-[var(--muted)]">{resena.cargo}</div>
                      </div>
                      <div className="text-xs text-[var(--muted)]">{resena.fecha}</div>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < resena.estrellas ? 'fill-yellow-500 text-yellow-500' : 'text-[var(--border)]'}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-[var(--muted)]">"{resena.texto}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha sticky (solo desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 space-y-6">
              {/* Imagen miniatura */}
              <img src={curso.imagenPortada} alt={curso.titulo} className="w-full rounded-lg" />

              {/* Precio */}
              <div>
                <p className="line-through text-sm text-[var(--muted)]">{formatCLP(curso.precioOriginal)}</p>
                <p className="text-3xl font-bold text-[var(--accent)]">{formatCLP(curso.precio)}</p>
                <p className="text-xs text-[var(--muted)] mt-1">
                  o {curso.cuotas.cantidad}x {formatCLP(curso.cuotas.valorCuota)} sin interés
                </p>
              </div>

              {/* Botón comprar */}
              <Link href={`/checkout/${curso.slug}`}>
                <Button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hv)] text-white font-bold py-3 transition-colors duration-180">
                  Comprar ahora — {formatCLP(curso.precio)}
                </Button>
              </Link>

              {/* Features */}
              <div className="space-y-3 pt-6 border-t border-[var(--border)]">
                <div className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  <span>Acceso de por vida</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  <span>Desde cualquier dispositivo</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  <span>Sesión 1-on-1 fundador</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  <span>Comunidad post-bootcamp</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  <span>Garantía de reingreso</span>
                </div>
              </div>

              {/* Seguridad */}
              <div className="pt-4 border-t border-[var(--border)] text-xs text-[var(--muted)] text-center">
                🔒 Pago seguro MercadoPago
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[var(--surface)] border-t border-[var(--border)] p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[var(--muted)]">Precio</p>
            <p className="font-bold text-[var(--accent)]">{formatCLP(curso.precio)}</p>
          </div>
          <Link href={`/checkout/${curso.slug}`} className="flex-1">
            <Button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hv)] text-white font-bold">
              Comprar →
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
