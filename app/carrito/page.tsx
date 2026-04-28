import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Empty } from '@/components/ui/empty'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Button>
          </Link>

          <h1 className="font-serif text-4xl font-bold mb-12">Tu Carrito</h1>

          <div className="text-center py-20">
            <Empty
              icon={ShoppingCart}
              title="Tu carrito está vacío"
              description="Explora nuestro catálogo y agrega cursos para empezar"
            />
            
            <Link href="/catalogo" className="mt-8">
              <Button className="gap-2">
                Explorar Cursos
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
