'use client'

import { ArrowRight, Code, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Sobre mí: Desde las Trincheras
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            No soy un teórico. Durante más de 12 años he construido, desplegado y monetizado productos reales. Lo que enseño es lo que practico cada día.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Story */}
          <div className="space-y-6">
            <div className="bg-card border border-muted rounded-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                Nací en la Calle
              </h3>
              <p className="text-foreground mb-4">
                Santiago, Chile. Lejos de Silicon Valley, donde la cancha suele estar inclinada. Mi primer "MBA" no fue un diploma — fue la calle. A los 3 años, vendiendo junto a mi padre, aprendí a sostener la mirada, a persistir, y a convertir el "no" en supervivencia.
              </p>
              <p className="text-foreground">
                Hoy construyo productos y sistemas de innovación con bootstrapping real: sin capital externo, pura recursividad, colaboración y código junto a amigos developers.
              </p>
            </div>

            <div className="bg-card border border-muted rounded-xl p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                La Estructura no Ayuda
              </h3>
              <p className="text-foreground">
                Crecí entendiendo algo incómodo: el sistema rara vez está diseñado para hacerte libre — está diseñado para hacerte funcional. Esa revelación no me volvió cínico — me volvió intencional. Si la estructura no ayuda, entonces diseñas una nueva.
              </p>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="text-3xl font-serif font-bold text-primary mb-2">12+</div>
                <p className="text-sm text-foreground">Años en Tech</p>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-lg p-6">
                <div className="text-3xl font-serif font-bold text-accent mb-2">9</div>
                <p className="text-sm text-foreground">Incubaciones</p>
              </div>
              <div className="bg-gradient-to-br from-secondary/50 to-secondary/30 border border-secondary/40 rounded-lg p-6">
                <div className="text-3xl font-serif font-bold text-secondary-foreground mb-2">$0</div>
                <p className="text-sm text-secondary-foreground">Capital Externo</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
                <div className="text-3xl font-serif font-bold text-primary mb-2">∞</div>
                <p className="text-sm text-foreground">Resiliencia</p>
              </div>
            </div>

            <div className="bg-card border border-muted rounded-xl p-8">
              <h3 className="text-xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Mi Visión
              </h3>
              <p className="text-foreground mb-4">
                Creo en la mentalidad autodidacta, en aprender por ósmosis, y en la tecnología como palanca de movilidad. La innovación no son "ideas bonitas" — es ejecución bajo restricciones.
              </p>
              <p className="text-foreground font-semibold text-primary">
                Internet es el mayor motor de generación de riqueza que jamás haya existido.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-muted">
          <div className="text-center">
            <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-serif font-bold text-foreground mb-2">
              No Enseño, Construyo
            </h4>
            <p className="text-foreground text-sm">
              Mi experiencia viene de la ejecución real, de proyectos en producción con usuarios y dinero de verdad.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-3 bg-accent/10 rounded-lg mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-lg font-serif font-bold text-foreground mb-2">
              Tu Portafolio, Mi Compromiso
            </h4>
            <p className="text-foreground text-sm">
              No entregas un diploma — entregas proyectos reales en producción que generan ingresos desde el día 1.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-lg font-serif font-bold text-foreground mb-2">
              Tecnología como Igualador
            </h4>
            <p className="text-foreground text-sm">
              IA + Internet eliminan las barreras. El código ya no es una limitante — es tu material de construcción.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground mb-6">
            Tengo el blueprint, las herramientas y la comunidad. En 8 semanas, irás de la idea a la ejecución arquitectónica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catalogo">
              <Button size="lg" className="gap-2">
                Explora los Cursos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Ver mi Blog
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
