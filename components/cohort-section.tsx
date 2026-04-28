'use client'

import { ArrowRight, Building2, Users, Zap, Award, Shield, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CohortSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-b border-muted">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            Sobre el Cohort: Desde las Trincheras
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            No soy un teórico. Durante más de 12 años he construido, desplegado y monetizado productos reales. Lo que enseño es lo que practico cada día.
          </p>
        </div>

        {/* Bootcamp Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">AI Product Builder</h3>
            <p className="text-muted-foreground mb-4">
              Un programa intensivo de 8 semanas para fusionar la visión estratégica de producto con la agilidad del Visual Coding.
            </p>
            <p className="text-muted-foreground mb-6">
              De no saber programar a construir aplicaciones reales usando la IA como tu copiloto.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-primary font-bold">20 cupos</span>
                <span className="text-muted-foreground">Disponibles</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary font-bold">8 semanas</span>
                <span className="text-muted-foreground">De intensidad garantizada</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary font-bold">3 proyectos</span>
                <span className="text-muted-foreground">Desplegados en producción</span>
              </div>
            </div>
          </div>

          {/* Why Different */}
          <div className="bg-background rounded-lg p-8 border border-muted">
            <h4 className="font-serif text-xl font-bold mb-6">La Diferencia: IA que Potencia</h4>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-sm text-muted-foreground uppercase mb-2">Sin IA:</p>
                <p className="text-foreground">El humano pide, la IA ejecuta a ciegas, resultado: código aislado. Dependencia total.</p>
              </div>
              <div className="h-px bg-muted my-4" />
              <div>
                <p className="font-semibold text-sm text-muted-foreground uppercase mb-2">Vibe Coder:</p>
                <p className="text-foreground">Tú defines el problema, tomas decisiones de negocio. La IA sugiere, explica, ejecuta tácticamente. Resultado: sistemas completos en producción.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What You Build */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold mb-8 text-center">Tu Portafolio en Producción</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                week: 'Semana 2',
                title: 'Landing Page Funcional',
                desc: 'Sitio profesional optimizado para leads con arquitectura efectiva e interfaces responsivas.',
                icon: Code,
              },
              {
                week: 'Semana 4',
                title: 'Sistema de Automatización',
                desc: 'Motor IA en n8n: extrae, transforma y envía datos entre plataformas sin intervención manual.',
                icon: Zap,
              },
              {
                week: 'Semana 8',
                title: 'Web App MVP',
                desc: 'Tu producto resolviendo un problema real con base de datos, lógica de negocio y desplegado en la nube.',
                icon: Building2,
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-background rounded-lg p-8 border border-muted">
                <div className="text-primary font-semibold text-sm mb-2">{item.week}</div>
                <h4 className="font-serif text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <item.icon className="w-6 h-6 text-primary opacity-50" />
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="bg-background rounded-lg p-8 border border-muted mb-16">
          <h3 className="font-serif text-2xl font-bold mb-8">Stack Tecnológico</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-4">Frontend</h4>
              <p className="text-foreground">v0.app — Generación de UI responsiva mediante prompts directos.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-4">Cerebro</h4>
              <p className="text-foreground">Claude Code / KiloCode — Manipulación de datos y lógica de negocio.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-4">Orquestación</h4>
              <p className="text-foreground">n8n — Workflows visuales y conexión de APIs sin código.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-4">Backend & Datos</h4>
              <p className="text-foreground">Supabase — Base de datos + autenticación RLS + seguridad.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-4">Despliegue</h4>
              <p className="text-foreground">Vercel / Netlify — Deploy en producción con un comando.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-4">Pagos</h4>
              <p className="text-foreground">Stripe / MercadoPago — Monetización desde el día 1.</p>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold mb-8 text-center">Ecosistema de Soporte Infalible</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                level: 'Nivel 3',
                title: 'Instructores Expertos',
                desc: 'Office hours diarias de 1h para debugging en vivo y mentoría estratégica.',
                icon: Award,
              },
              {
                level: 'Nivel 2',
                title: 'Comunidad Peer',
                desc: 'Buddy coding semanal, pair programming virtual y code review cruzado.',
                icon: Users,
              },
              {
                level: 'Nivel 1',
                title: 'Agente IA 24/7',
                desc: 'Colega IA entrenado con nuestro currículum para dudas técnicas inmediatas.',
                icon: Zap,
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-background rounded-lg p-6 border border-muted">
                <div className="text-primary text-xs font-bold mb-2">{item.level}</div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-primary/10 rounded-lg p-8 border border-primary/20 mb-16">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-xl font-bold mb-2">Garantía de Inversión Segura</h3>
              <p className="text-foreground">
                Si completas el 100% de proyectos semanales y no construyes al menos 3 portafolios funcionales, te incluimos en el próximo cohort completamente gratis.
              </p>
              <p className="text-muted-foreground text-sm mt-2">Queremos que ganes. Punto.</p>
            </div>
          </div>
        </div>

        {/* Credibility */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Respaldado por Experiencia Real</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold">12+</span>
                <span className="text-foreground">Años construyendo productos digitales</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">9</span>
                <span className="text-foreground">Incubaciones exitosas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">100%</span>
                <span className="text-foreground">Bootstrapping — Sin capital externo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">∞</span>
                <span className="text-foreground">Resiliencia y ganas</span>
              </li>
            </ul>
          </div>

          <div className="bg-background rounded-lg p-8 border border-muted">
            <h4 className="font-serif font-bold mb-4">La Filosofía</h4>
            <p className="text-muted-foreground text-sm mb-4">
              No enseño desde un aula, construyo desde la experiencia empírica. Creo en la mentalidad autodidacta y en la tecnología como palanca de movilidad.
            </p>
            <p className="text-muted-foreground text-sm">
              La innovación no son &quot;ideas bonitas&quot; — es ejecución bajo restricciones. El código ya no es una barrera. Es tu material de construcción.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Tienes el blueprint, las herramientas y la comunidad. Tu portafolio te está esperando.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/catalogo">
              Explora los Cursos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
