import type { Instructor, Curso, Testimonio } from './types-product'

export const instructores: Instructor[] = [
  {
    id: 'carlos-riquelme',
    nombre: 'Carlos Riquelme',
    titulo: 'Founder & Builder — Protolylat',
    bio: 'Nací en Santiago, Chile — lejos de Silicon Valley. Mi primer MBA no fue un diploma, fue la calle. Hoy construyo productos digitales con bootstrapping real: sin capital externo, pura recursividad y código. No enseño desde un aula, construyo desde la experiencia empírica. Creo en la mentalidad autodidacta y en la tecnología como palanca de movilidad.',
    foto: 'https://picsum.photos/seed/carlos-riquelme/400/400',
    stats: {
      estudiantes: 200,
      cursos: 1,
      rating: 4.9,
      anios: 12,
      incubaciones: 9,
    },
    redes: {
      linkedin: 'https://linkedin.com/in/carlosriquelme',
      instagram: 'https://instagram.com/protolylat',
      youtube: 'https://youtube.com/@protolylat',
    },
  },
  {
    id: 'daniel-castiblanco',
    nombre: 'Daniel Castiblanco',
    titulo: 'Co-founder & CTO — Protolylat',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    foto: 'https://picsum.photos/seed/daniel-castiblanco/400/400',
    stats: {
      estudiantes: 200,
      cursos: 1,
      rating: 4.9,
      anios: 10,
      incubaciones: 6,
    },
    redes: {
      linkedin: 'https://linkedin.com/in/danielcastiblanco',
      instagram: 'https://instagram.com/danielcastiblanco',
      github: 'https://github.com/danielcastiblanco',
    },
  },
]

export const cursos: Curso[] = [
  {
    slug: 'ai-engineer-builder',
    titulo: 'AI Engineer Builder',
    descripcionCorta: 'De no saber programar, a construir apps reales con IA — en 8 semanas.',
    descripcionLarga:
      'Un bootcamp intensivo de 8 semanas donde aprenderás a construir, desplegar y monetizar productos digitales reales usando IA como copiloto. Sin experiencia previa requerida. Al finalizar tendrás 3 entregables en producción y un portafolio valorizado en +3.000.000 CLP.',
    imagenPortada: 'https://picsum.photos/seed/ai-engineer-builder/800/450',
    precio: 900000,
    moneda: 'CLP',
    precioOriginal: 1149990,
    cuotas: { cantidad: 3, valorCuota: 300000 },
    cuotasReferido: { cantidad: 3, valorCuota: 233333 },
    nivel: 'Principiante',
    categoria: 'AI & Vibe Coding',
    rating: 4.9,
    distribucionRating: { 5: 85, 4: 10, 3: 3, 2: 1, 1: 1 },
    estudiantes: 20,
    lecciones: 32,
    horas: 40,
    ultimaActualizacion: 'Marzo 2026',
    destacado: true,
    instructores: ['carlos-riquelme', 'daniel-castiblanco'],
    stack: ['v0.app', 'Claude Code', 'n8n', 'Supabase', 'Vercel', 'Stripe'],
    modulos: [
      {
        titulo: 'Sprint 1 — Fundamentos y Captura',
        lecciones: [
          { titulo: 'Pensamiento en sistemas', duracion: '12:00', esPreview: true },
          { titulo: 'Lógica computacional sin código', duracion: '15:00', esPreview: true },
          { titulo: 'Diseño de interfaces con v0.app', duracion: '20:00', esPreview: false },
          { titulo: 'Ecosistema Low-Code', duracion: '18:00', esPreview: false },
        ],
      },
      {
        titulo: 'Sprint 2 — Backend & Data Logic',
        lecciones: [
          { titulo: 'Webhooks y JSON desde cero', duracion: '14:00', esPreview: true },
          { titulo: 'Operaciones CRUD con Supabase', duracion: '22:00', esPreview: false },
          { titulo: 'Integración de LLMs con Claude', duracion: '25:00', esPreview: false },
        ],
      },
      {
        titulo: 'Sprint 3 — Auth & Monetización',
        lecciones: [
          { titulo: 'Login y registro con Supabase Auth', duracion: '18:00', esPreview: false },
          { titulo: 'Row Level Security (RLS)', duracion: '16:00', esPreview: false },
          { titulo: 'Integrar Stripe y MercadoPago', duracion: '24:00', esPreview: false },
        ],
      },
      {
        titulo: 'Sprint 4 — Deployment & Scale',
        lecciones: [
          { titulo: 'Dev vs Production', duracion: '10:00', esPreview: false },
          { titulo: 'Deploy en Vercel con dominio propio', duracion: '20:00', esPreview: false },
          { titulo: 'Logs, testing y documentación', duracion: '15:00', esPreview: false },
        ],
      },
    ],
    queAprenderas: [
      'Construir y desplegar productos digitales reales',
      'Usar IA como copiloto de desarrollo',
      'Dominar v0.app + Claude Code + n8n + Supabase',
      'Crear flujos de automatización con n8n y APIs',
      'Implementar autenticación y pagos en tu app',
      'Publicar tu portafolio en producción con dominio propio',
    ],
    resenas: [
      {
        nombre: 'Valentina Ríos',
        cargo: 'Marketing Manager en transición',
        avatar: 'https://picsum.photos/seed/valentina/100/100',
        estrellas: 5,
        texto: 'Venía de marketing y nunca había tocado código. En 8 semanas desplegué mi primer MVP. Impresionante.',
        fecha: 'Marzo 2026',
      },
      {
        nombre: 'Sebastián Torres',
        cargo: 'Emprendedor, Santiago',
        avatar: 'https://picsum.photos/seed/sebastian/100/100',
        estrellas: 5,
        texto: 'En la semana 2 ya tenía algo real online. No un ejercicio, algo real desplegado en producción.',
        fecha: 'Febrero 2026',
      },
      {
        nombre: 'Andrés Morales',
        cargo: 'Estudiante Ing. Civil, 4° año',
        avatar: 'https://picsum.photos/seed/andres/100/100',
        estrellas: 5,
        texto: 'Le da un diferenciador brutal a mi perfil antes de salir al mercado. El stack que enseñan es el que se usa de verdad.',
        fecha: 'Marzo 2026',
      },
    ],
  },
]

export const testimonios: Testimonio[] = [
  {
    nombre: 'Valentina Ríos',
    cargo: 'Marketing Manager en transición',
    avatar: 'https://picsum.photos/seed/valentina/100/100',
    estrellas: 5,
    texto: 'Venía de marketing y nunca había tocado código. En 8 semanas desplegué mi primer MVP. Impresionante.',
  },
  {
    nombre: 'Sebastián Torres',
    cargo: 'Emprendedor, Santiago',
    avatar: 'https://picsum.photos/seed/sebastian/100/100',
    estrellas: 5,
    texto: 'En la semana 2 ya tenía algo real online. No un ejercicio, algo real desplegado.',
  },
  {
    nombre: 'Andrés Morales',
    cargo: 'Estudiante Ing. Civil, 4° año',
    avatar: 'https://picsum.photos/seed/andres/100/100',
    estrellas: 5,
    texto: 'Le da un diferenciador brutal a mi perfil antes de salir al mercado.',
  },
]
