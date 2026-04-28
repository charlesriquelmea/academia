'use client'

import Head from 'next/head'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const nombre = searchParams.get('nombre')
  const email = searchParams.get('email')

  return (
    <>
      <Head>
        <title>Pago completado — AI Engineer Builder</title>
      </Head>

      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex items-center justify-center p-4">
        <div className="max-w-md text-center space-y-6">
          {/* Checkmark grande */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
          </div>

          <h1 className="font-serif text-4xl font-bold">¡Pago completado!</h1>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 space-y-3 text-left">
            <p className="text-sm text-[var(--muted)]">Confirmación de compra</p>
            {nombre && <p className="font-semibold">Comprador: {nombre}</p>}
            {email && <p className="font-semibold">Email: {email}</p>}
            <p className="text-sm text-[var(--muted)] text-center mt-4">
              Revisa tu email para acceder al curso y comenzar desde hoy.
            </p>
          </div>

          <div className="space-y-3">
            <Link href="/cursos">
              <Button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hv)] text-white font-bold py-3">
                Ver más cursos
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full border-[var(--border)] text-[var(--text)]">
                Ir al inicio
              </Button>
            </Link>
          </div>

          <p className="text-xs text-[var(--muted)]">
            ¿Preguntas? Contacta a <a href="mailto:hola@protolylat.com" className="text-[var(--accent)] hover:underline">hola@protolylat.com</a>
          </p>
        </div>
      </div>
    </>
  )
}
