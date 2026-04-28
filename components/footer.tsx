import { Mail, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-semibold mb-4">Academia</h3>
            <p className="text-sm text-muted-foreground">
              Cursos profesionales para desarrolladores que quieren dominar web, backend y bases de datos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/catalogo" className="text-muted-foreground hover:text-primary transition-colors">Catálogo</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre mí</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacidad</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Reembolsos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                carlos@academia.dev
              </li>
              <li className="flex items-center gap-2">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Academia de Cursos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
