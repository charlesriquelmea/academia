'use client'

import Head from 'next/head'
import { Button } from '@/components/ui/button'
import { XCircle } from 'lucide-react'
import Link from 'next/link'

export default function FailedPage() {
  return (
    <>
      <Head>
        <title>Pago cancelado — AI Engineer Builder</title>
      </Head>

      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex items-center justify-center p-4">
        <div className="max-w-md text-center space-y-6">
          {/* X grande */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-red-500/10 border-2 border-red-500 flex items-center justify-center">
              <XCircle className="w-12 h-12 text-red-500" />
            </div>
          </div>

          <h1 className="font-serif text-4xl font-bold">Pago cancelado</h1>

          <p className="text-[var(--muted)]">
            El pago no se procesó correctamente. Puedes intentar de nuevo o contactarnos si necesitas ayuda.
          </p>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 text-left text-sm space-y-2">
            <p>Posibles motivos:</p>
            <ul className="list-disc list-inside text-[var(--muted)] space-y-1">
              <li>Datos de tarjeta incorrectos</li>
              <li>Fondos insuficientes</li>
              <li>Cancelaste la transacción</li>
              <li>Problema de conexión temporal</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Link href="/cursos">
              <Button className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hv)] text-white font-bold py-3">
                Intentar de nuevo
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full border-[var(--border)] text-[var(--text)]">
                Ir al inicio
              </Button>
            </Link>
          </div>

          <p className="text-xs text-[var(--muted)]">
            ¿Necesitas ayuda? Contacta a <a href="mailto:hola@protolylat.com" className="text-[var(--accent)] hover:underline">hola@protolylat.com</a>
          </p>
        </div>
      </div>
    </>
  )
}
