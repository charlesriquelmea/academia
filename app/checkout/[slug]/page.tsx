'use client'

import { useState } from 'react'
import Head from 'next/head'
import { cursos } from '@/lib/mock-data-product'
import { formatCLP, isValidEmail, isValidName } from '@/lib/utils-product'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function CheckoutPage() {
  const params = useParams()
  const slug = params.slug as string
  const curso = cursos.find((c) => c.slug === slug)

  const [paso, setPaso] = useState<1 | 2>(1)
  const [formData, setFormData] = useState({ nombre: '', email: '', emailConfirm: '' })
  const [errores, setErrores] = useState<Record<string, string>>({})

  if (!curso) {
    return (
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex items-center justify-center">
        <p>Curso no encontrado</p>
      </div>
    )
  }

  const validarCampos = () => {
    const nuevosErrores: Record<string, string> = {}

    if (!isValidName(formData.nombre)) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres'
    }
    if (!isValidEmail(formData.email)) {
      nuevosErrores.email = 'Ingresa un email válido'
    }
    if (formData.email !== formData.emailConfirm) {
      nuevosErrores.emailConfirm = 'Los emails no coinciden'
    }

    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleContinuar = () => {
    if (validarCampos()) {
      setPaso(2)
    }
  }

  const handlePagar = () => {
    // Simulación de pago
    window.location.href = `/checkout/success?nombre=${formData.nombre}&email=${formData.email}&curso=${slug}`
  }

  const tieneErrores = Object.keys(errores).length > 0

  return (
    <>
      <Head>
        <title>Checkout — {curso.titulo}</title>
      </Head>

      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        {/* Header */}
        <div className="border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
            <Link href="/" className="text-[var(--accent)] text-sm hover:underline">
              ← Volver
            </Link>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Indicador de pasos */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${paso === 1 ? 'bg-[var(--accent)] text-white' : 'bg-[var(--accent)]/20 text-[var(--accent)]'}`}>
                ①
              </div>
              <p className={`text-xs mt-2 ${paso === 1 ? 'font-semibold text-[var(--text)]' : 'text-[var(--muted)]'}`}>
                Tus datos
              </p>
            </div>

            <div className={`flex-1 h-0.5 ${paso === 2 ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'}`} />

            <div className="text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${paso === 2 ? 'bg-[var(--accent)] text-white' : 'bg-[var(--accent)]/20 text-[var(--accent)]'}`}>
                ②
              </div>
              <p className={`text-xs mt-2 ${paso === 2 ? 'font-semibold text-[var(--text)]' : 'text-[var(--muted)]'}`}>
                Pago
              </p>
            </div>
          </div>

          {/* PASO 1 */}
          {paso === 1 && (
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 flex items-center gap-4">
                <img src={curso.imagenPortada} alt={curso.titulo} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{curso.titulo}</h3>
                  <p className="text-sm text-[var(--muted)]">{formatCLP(curso.precio)} CLP</p>
                </div>
              </div>

              {/* Formulario */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 space-y-6">
                <h2 className="font-serif font-bold text-lg">Checkout — {curso.titulo}</h2>

                {/* Nombre */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => {
                      const valor = e.target.value
                      setFormData({ ...formData, nombre: valor })
                      if (valor.length > 0) {
                        const nuevoError = !isValidName(valor) ? 'El nombre es muy corto' : ''
                        setErrores({ ...errores, nombre: nuevoError })
                      }
                    }}
                    onBlur={() => {
                      if (!formData.nombre) {
                        setErrores({ ...errores, nombre: 'Este campo es obligatorio' })
                      }
                    }}
                    placeholder="Juan Pérez"
                    className={`bg-[var(--bg)] border ${
                      errores.nombre ? 'border-red-500' : 'border-[var(--border)]'
                    } text-[var(--text)] placeholder-[var(--muted)]`}
                  />
                  {errores.nombre && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errores.nombre}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      const valor = e.target.value
                      setFormData({ ...formData, email: valor })
                      if (valor.length > 0) {
                        const nuevoError = !isValidEmail(valor) ? 'Ingresa un email válido' : ''
                        setErrores({ ...errores, email: nuevoError })
                      }
                    }}
                    onBlur={() => {
                      if (!formData.email) {
                        setErrores({ ...errores, email: 'Este campo es obligatorio' })
                      }
                    }}
                    placeholder="juan@gmail.com"
                    className={`bg-[var(--bg)] border ${
                      errores.email ? 'border-red-500' : 'border-[var(--border)]'
                    } text-[var(--text)] placeholder-[var(--muted)]`}
                  />
                  {errores.email && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errores.email}
                    </p>
                  )}
                </div>

                {/* Confirmar email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Confirmar email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.emailConfirm}
                    onChange={(e) => {
                      const valor = e.target.value
                      setFormData({ ...formData, emailConfirm: valor })
                      if (valor.length > 0 && formData.email) {
                        const nuevoError = valor !== formData.email ? 'Los emails no coinciden' : ''
                        setErrores({ ...errores, emailConfirm: nuevoError })
                      }
                    }}
                    onBlur={() => {
                      if (!formData.emailConfirm) {
                        setErrores({ ...errores, emailConfirm: 'Este campo es obligatorio' })
                      }
                    }}
                    placeholder="juan@gmail.com"
                    className={`bg-[var(--bg)] border ${
                      errores.emailConfirm ? 'border-red-500' : 'border-[var(--border)]'
                    } text-[var(--text)] placeholder-[var(--muted)]`}
                  />
                  {errores.emailConfirm && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errores.emailConfirm}
                    </p>
                  )}
                </div>

                <Button
                  onClick={handleContinuar}
                  disabled={tieneErrores || !formData.nombre || !formData.email || !formData.emailConfirm}
                  className={`w-full py-3 font-bold transition-opacity duration-180 ${
                    tieneErrores || !formData.nombre || !formData.email || !formData.emailConfirm
                      ? 'opacity-50 cursor-not-allowed'
                      : 'bg-[var(--accent)] hover:bg-[var(--accent-hv)] text-white'
                  }`}
                >
                  Continuar al pago →
                </Button>
              </div>
            </div>
          )}

          {/* PASO 2 */}
          {paso === 2 && (
            <div className="space-y-6">
              {/* Checkmark */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <p className="font-semibold text-lg">Datos guardados</p>
              </div>

              {/* Resumen */}
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 space-y-4">
                <h2 className="font-serif font-bold text-lg mb-6">Resumen final:</h2>

                <div className="space-y-3 pb-6 border-b border-[var(--border)]">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--muted)]">Curso:</span>
                    <span className="font-semibold">{curso.titulo}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--muted)]">Comprador:</span>
                    <span className="font-semibold">{formData.nombre}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--muted)]">Email:</span>
                    <span className="font-semibold">{formData.email}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <span className="text-lg font-bold">Total:</span>
                  <span className="text-2xl font-bold text-[var(--accent)]">{formatCLP(curso.precio)}</span>
                </div>

                {/* Botón pagar */}
                <Button
                  onClick={handlePagar}
                  className="w-full bg-[#009EE3] hover:bg-[#0084c7] text-white font-bold py-3 mt-6 transition-colors duration-180"
                >
                  🔵 Pagar con MercadoPago
                </Button>

                {/* Volver */}
                <button
                  onClick={() => setPaso(1)}
                  className="w-full text-[var(--accent)] hover:underline text-sm font-medium py-2"
                >
                  ← Volver y editar datos
                </button>
              </div>

              {/* Seguridad */}
              <div className="text-center text-xs text-[var(--muted)] space-y-2">
                <p>🔒 Pago 100% seguro · SSL</p>
                <p>No guardamos datos de tarjeta</p>
                <p className="text-xs">Visa · Mastercard · Redcompra · WebPay Plus · Débito</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
