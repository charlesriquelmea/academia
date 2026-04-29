'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldLabel } from '@/components/ui/field'
import { courses } from '@/lib/mock-data'
import { CheckCircle, ArrowLeft, Loader } from 'lucide-react'
import Link from 'next/link'

const steps = ['Información', 'Pago']

function CheckoutContent() {
  const searchParams = useSearchParams()
  const courseId = searchParams.get('course')
  const course = courses.find((c) => c.id === courseId)

  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  })

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />

        <Suspense fallback={<div className="flex-1 flex items-center justify-center">Cargando...</div>}>
          <main className="flex-1 flex items-center justify-center py-20 px-4">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold mb-4">Curso no encontrado</h1>
            <Link href="/catalogo">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver al Catálogo
              </Button>
            </Link>
          </div>
        </main> 
        </Suspense>
        <Footer />
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const router = useRouter();

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step === 1) {
      // Validate email step
      if (!formData.email || !formData.firstName || !formData.lastName) {
        alert('Por favor completa todos los campos')
        return
      }
      setStep(2)
    } else {
      // Process payment
      setLoading(true)
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))
      router.push(`/confirmacion?status=success&email=${formData.email}`);
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href={`/curso/${course.id}`}>
              <Button variant="ghost" size="sm" className="gap-2 mb-8">
                <ArrowLeft className="w-4 h-4" />
                Volver al curso
              </Button>
            </Link>
          </div>

          {/* Steps */}
          <div className="mb-12">
            <div className="flex gap-4">
              {steps.map((stepName, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-colors ${step > idx + 1
                      ? 'bg-primary text-primary-foreground'
                      : step === idx + 1
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                      }`}
                  >
                    {step > idx + 1 ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                  </div>
                  <span className="font-semibold hidden sm:inline">{stepName}</span>
                  {idx < steps.length - 1 && <div className="w-8 h-0.5 bg-muted hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleNextStep} className="space-y-6">
                {step === 1 ? (
                  <>
                    <div>
                      <h2 className="font-serif text-2xl font-bold mb-6">Información de Contacto</h2>
                      <div className="space-y-4">
                        <Field>
                          <FieldLabel htmlFor="email">Email</FieldLabel>
                          <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </Field>

                        <div className="grid grid-cols-2 gap-4">
                          <Field>
                            <FieldLabel htmlFor="firstName">Nombre</FieldLabel>
                            <Input
                              id="firstName"
                              name="firstName"
                              placeholder="Juan"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="lastName">Apellido</FieldLabel>
                            <Input
                              id="lastName"
                              name="lastName"
                              placeholder="Pérez"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </Field>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2 className="font-serif text-2xl font-bold mb-6">Información de Pago</h2>
                      <div className="space-y-4">
                        <Field>
                          <FieldLabel htmlFor="cardNumber">Número de Tarjeta</FieldLabel>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="4532 1234 5678 9010"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                          />
                        </Field>

                        <div className="grid grid-cols-2 gap-4">
                          <Field>
                            <FieldLabel htmlFor="cardExpiry">Fecha (MM/YY)</FieldLabel>
                            <Input
                              id="cardExpiry"
                              name="cardExpiry"
                              placeholder="12/25"
                              value={formData.cardExpiry}
                              onChange={handleInputChange}
                              required
                            />
                          </Field>
                          <Field>
                            <FieldLabel htmlFor="cardCvc">CVC</FieldLabel>
                            <Input
                              id="cardCvc"
                              name="cardCvc"
                              placeholder="123"
                              maxLength={3}
                              value={formData.cardCvc}
                              onChange={handleInputChange}
                              required
                            />
                          </Field>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Procesando...
                    </>
                  ) : step === 1 ? (
                    'Continuar al Pago'
                  ) : (
                    'Completar Compra'
                  )}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 rounded-xl bg-card border border-border space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Resumen del Pedido</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-4 pb-4 border-b border-border">
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{course.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{course.level}</p>
                      </div>
                      <p className="font-semibold text-sm shrink-0">${course.price}</p>
                    </div>

                    <div className="space-y-2 pt-4">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${course.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Impuestos</span>
                        <span>$0</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Envío</span>
                        <span>Gratis</span>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 flex justify-between font-serif font-bold">
                      <span>Total</span>
                      <span>${course.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
