'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

function ConfirmacionContent() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status') || 'error'
  const email = searchParams.get('email') || ''

  const isSuccess = status === 'success'

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-6">
            {isSuccess ? (
              <>
                <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>

                <div>
                  <h1 className="font-serif text-4xl font-bold mb-4">
                    ¡Compra Completada!
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Tu acceso al curso ha sido activado. Revisa tu email en{' '}
                    <span className="font-semibold text-foreground">{email}</span> para instrucciones.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-8 space-y-6 text-left my-8">
                  <div>
                    <h3 className="font-semibold mb-4">Próximos pasos:</h3>
                    <ol className="space-y-3 text-sm">
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold">1</span>
                        <span>Revisa tu email para obtener tu enlace de acceso</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold">2</span>
                        <span>Crea tu cuenta en la plataforma de aprendizaje</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold">3</span>
                        <span>Comienza a aprender y disfruta del acceso de por vida</span>
                      </li>
                    </ol>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-semibold mb-2">¿Preguntas?</h4>
                    <p className="text-sm text-muted-foreground">
                      Contáctame en{' '}
                      <a href="mailto:carlos@academia.dev" className="text-primary hover:underline">
                        carlos@academia.dev
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/catalogo">
                    <Button variant="outline" className="gap-2">
                      Ver Más Cursos
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button disabled>
                    Acceder al Curso
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="w-20 h-20 mx-auto bg-destructive/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-12 h-12 text-destructive" />
                </div>

                <div>
                  <h1 className="font-serif text-4xl font-bold mb-4">
                    Error en la Compra
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Lamentablemente, hubo un problema al procesar tu pago. Por favor intenta de nuevo.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-8 text-left my-8">
                  <h3 className="font-semibold mb-4">Qué puedes hacer:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Verifica que los datos de tu tarjeta sean correctos</li>
                    <li>• Intenta con otro método de pago</li>
                    <li>• Contacta con tu banco para verificar límites</li>
                    <li>• Contáctame para asistencia manual</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/catalogo">
                    <Button variant="outline" className="gap-2">
                      Volver al Catálogo
                    </Button>
                  </Link>
                  <a href="mailto:carlos@academia.dev">
                    <Button className="gap-2">
                      Contactar Soporte
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function ConfirmacionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
      <ConfirmacionContent />
    </Suspense>
  )
}
