'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold">AC</span>
          </div>
          <span className="hidden sm:inline font-serif font-semibold text-lg">Academia</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link href="/catalogo" className="text-sm font-medium hover:text-primary transition-colors">
            Catálogo
          </Link>
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre mí
          </Link>
        </div>

        <Link href="/carrito">
          <Button size="sm" variant="ghost" className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center">
              0
            </span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}
