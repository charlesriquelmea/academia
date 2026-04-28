'use client'

import { useState, useMemo } from 'react'
import Head from 'next/head'
import { cursos } from '@/lib/mock-data-product'
import { formatCLP } from '@/lib/utils-product'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, X } from 'lucide-react'
import Link from 'next/link'

const categorias = ['AI & Vibe Coding', 'Desarrollo Web', 'Automatización']
const niveles = ['Principiante', 'Intermedio', 'Avanzado']
const opciones_precio = ['Todos', 'Gratis', 'De pago']

export default function CursosPage() {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState<string | null>(null)
  const [nivel, setNivel] = useState<string | null>(null)
  const [precio, setPrecio] = useState('Todos')
  const [ordenar, setOrdenar] = useState('reciente')

  // Filtrado en tiempo real
  const cursosFiltrados = useMemo(() => {
    let resultado = cursos

    if (busqueda) {
      resultado = resultado.filter((c) =>
        c.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        c.descripcionCorta.toLowerCase().includes(busqueda.toLowerCase())
      )
    }

    if (categoria) {
      resultado = resultado.filter((c) => c.categoria === categoria)
    }

    if (nivel) {
      resultado = resultado.filter((c) => c.nivel === nivel)
    }

    if (precio === 'Gratis') {
      resultado = resultado.filter((c) => c.precio === 0)
    } else if (precio === 'De pago') {
      resultado = resultado.filter((c) => c.precio > 0)
    }

    // Ordenamiento
    if (ordenar === 'popular') {
      resultado = [...resultado].sort((a, b) => b.estudiantes - a.estudiantes)
    } else if (ordenar === 'precio-asc') {
      resultado = [...resultado].sort((a, b) => a.precio - b.precio)
    } else if (ordenar === 'precio-desc') {
      resultado = [...resultado].sort((a, b) => b.precio - a.precio)
    }

    return resultado
  }, [busqueda, categoria, nivel, precio, ordenar])

  const limpiarFiltros = () => {
    setBusqueda('')
    setCategoria(null)
    setNivel(null)
    setPrecio('Todos')
    setOrdenar('reciente')
  }

  return (
    <>
      <Head>
        <title>Cursos — AI Engineer Builder by Protolylat</title>
        <meta name="description" content="Catálogo completo de cursos y bootcamps de AI Engineer Builder" />
      </Head>

      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        {/* Header */}
        <div className="border-b border-[var(--border)] bg-[var(--surface)] sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-3xl font-serif font-bold mb-2">Cursos</h1>
            <p className="text-[var(--muted)] text-sm">Explora nuestro catálogo de programas intensivos</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filtros - Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Búsqueda */}
              <div>
                <label className="block text-sm font-semibold mb-3">Buscar cursos</label>
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-[var(--muted)]" />
                  <Input
                    type="text"
                    placeholder="Buscar..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="pl-10 bg-[var(--surface)] border-[var(--border)] text-[var(--text)]"
                  />
                </div>
              </div>

              {/* Categoría */}
              <div>
                <label className="block text-sm font-semibold mb-3">Categoría</label>
                <div className="space-y-2">
                  {categorias.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={categoria === cat}
                        onChange={() => setCategoria(categoria === cat ? null : cat)}
                        className="w-4 h-4 rounded border-[var(--border)]"
                      />
                      <span className="text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Nivel */}
              <div>
                <label className="block text-sm font-semibold mb-3">Nivel</label>
                <div className="space-y-2">
                  {niveles.map((niv) => (
                    <label key={niv} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={nivel === niv}
                        onChange={() => setNivel(nivel === niv ? null : niv)}
                        className="w-4 h-4 rounded border-[var(--border)]"
                      />
                      <span className="text-sm">{niv}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Precio */}
              <div>
                <label className="block text-sm font-semibold mb-3">Precio</label>
                <div className="space-y-2">
                  {opciones_precio.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="precio"
                        checked={precio === opt}
                        onChange={() => setPrecio(opt)}
                        className="w-4 h-4 rounded-full"
                      />
                      <span className="text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Limpiar */}
              <Button
                variant="outline"
                size="sm"
                onClick={limpiarFiltros}
                className="w-full border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10"
              >
                Limpiar filtros
              </Button>
            </div>
          </aside>

          {/* Contenido principal */}
          <div className="lg:col-span-3">
            {/* Header área principal */}
            <div className="flex items-center justify-between mb-6 flex-col sm:flex-row gap-4">
              <p className="text-sm text-[var(--muted)]">
                {cursosFiltrados.length} {cursosFiltrados.length === 1 ? 'curso encontrado' : 'cursos encontrados'}
              </p>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm text-[var(--muted)] hidden sm:inline">Ordenar por:</span>
                <select
                  value={ordenar}
                  onChange={(e) => setOrdenar(e.target.value)}
                  className="px-3 py-2 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] text-sm"
                >
                  <option value="reciente">Más reciente</option>
                  <option value="popular">Más popular</option>
                  <option value="precio-asc">Precio: menor a mayor</option>
                  <option value="precio-desc">Precio: mayor a menor</option>
                </select>
              </div>
            </div>

            {/* Grid de cursos */}
            {cursosFiltrados.length === 0 ? (
              <div className="text-center py-16">
                <X className="w-12 h-12 text-[var(--muted)] mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-4">No encontramos cursos con ese criterio</p>
                <Button
                  variant="outline"
                  onClick={limpiarFiltros}
                  className="border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10"
                >
                  Limpiar filtros
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {cursosFiltrados.map((curso) => (
                  <Link key={curso.slug} href={`/cursos/${curso.slug}`}>
                    <div className="group cursor-pointer bg-[var(--surface)] rounded-lg border border-[var(--border)] overflow-hidden hover:border-[var(--accent)] hover:shadow-lg transition-all duration-180 ease-out hover:scale-[1.02]">
                      {/* Imagen */}
                      <div className="aspect-video bg-[var(--border)] overflow-hidden">
                        <img
                          src={curso.imagenPortada}
                          alt={curso.titulo}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Contenido */}
                      <div className="p-4">
                        <Badge className="mb-3 bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/30 text-xs">
                          {curso.categoria}
                        </Badge>

                        <h3 className="font-serif font-bold text-base mb-2 line-clamp-2">{curso.titulo}</h3>
                        <p className="text-sm text-[var(--muted)] line-clamp-2 mb-4">{curso.descripcionCorta}</p>

                        <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-4">
                          <span>⭐ {curso.rating} · {curso.estudiantes} estudiantes</span>
                        </div>

                        <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-4">
                          <span>{curso.lecciones} lecciones · {curso.horas}h</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="line-through text-xs text-[var(--muted)]">{formatCLP(curso.precioOriginal)}</p>
                            <p className="font-bold text-[var(--accent)]">{formatCLP(curso.precio)}</p>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-[var(--accent)] hover:bg-[var(--accent)]/10"
                          >
                            Ver curso →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
