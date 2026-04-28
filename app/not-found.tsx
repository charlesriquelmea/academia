import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-4">
            <h1 className="font-serif text-6xl font-bold text-primary">404</h1>
            <h2 className="font-serif text-4xl font-bold">
              Página No Encontrada
            </h2>
            <p className="text-lg text-muted-foreground">
              Parece que la página que buscas no existe o fue movida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/">
              <Button className="gap-2">
                Volver al Inicio
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/catalogo">
              <Button variant="outline" className="gap-2">
                Ver Catálogo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
