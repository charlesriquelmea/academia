import type { Course, Testimonial } from './types'

export const testimonials: Testimonial[] = [
  {
    author: 'Sebastián Torres',
    role: 'Desarrollador Jr. en Bancolombia',
    text: 'Gracias a los cursos de Carlos conseguí mi primer trabajo como dev. El contenido es práctico y actual.',
    rating: 5,
  },
  {
    author: 'Valentina Ríos',
    role: 'Freelancer Full Stack',
    text: 'Tomé 3 cursos y cada uno superó mis expectativas. La forma de enseñar es clara y sin relleno.',
    rating: 5,
  },
  {
    author: 'Andrés Morales',
    role: 'Tech Lead en Startup',
    text: 'Lo recomiendo a todos en mi equipo. Excelente relación calidad-precio.',
    rating: 5,
  },
  {
    author: 'Laura Gómez',
    role: 'Frontend Developer en Rappi',
    text: 'El mejor curso de React que he tomado. Carlos explica de manera muy clara y los proyectos son super prácticos.',
    rating: 5,
  },
  {
    author: 'Miguel López',
    role: 'Frontend Developer',
    text: 'Excelente estructura, ejercicios desafiantes y soporte rápido. Recomendado 100%.',
    rating: 5,
  },
]

export const courses: Course[] = [
  {
    id: 'react-desde-cero',
    title: 'React desde Cero hasta Profesional',
    description: 'Aprende React 18 con hooks, Context, React Query y proyectos reales.',
    fullDescription:
      'En este curso aprenderás React desde los fundamentos hasta crear aplicaciones profesionales. Cubrimos hooks modernos, manejo de estado con Context y Redux, consumo de APIs, testing y despliegue en Vercel. Incluye 3 proyectos prácticos del mundo real.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=450&fit=crop',
    price: 99,
    level: 'Principiante',
    category: 'Desarrollo Web',
    rating: 4.9,
    reviews: 430,
    students: 1240,
    duration: 14,
    modules: [
      {
        id: 'modulo-1',
        title: 'Fundamentos de JavaScript',
        lessons: [
          { title: '¿Qué es JavaScript?', duration: 8, preview: true },
          { title: 'Variables y tipos de datos', duration: 12, preview: true },
          { title: 'Funciones y callbacks', duration: 15, preview: false },
          { title: 'Objetos y arrays', duration: 18, preview: false },
        ],
      },
      {
        id: 'modulo-2',
        title: 'Introducción a React',
        lessons: [
          { title: 'Instalación y primer componente', duration: 10, preview: true },
          { title: 'Props y State', duration: 18, preview: false },
          { title: 'Ciclo de vida', duration: 14, preview: false },
        ],
      },
      {
        id: 'modulo-3',
        title: 'Hooks Modernos',
        lessons: [
          { title: 'useState y useEffect', duration: 20, preview: true },
          { title: 'useContext y useReducer', duration: 22, preview: false },
          { title: 'Custom Hooks', duration: 18, preview: false },
        ],
      },
    ],
    learningPoints: [
      'Crear componentes reutilizables con React',
      'Manejar estado global con Context y Zustand',
      'Consumir APIs REST con React Query',
      'Desplegar tu app en Vercel',
      'Escribir tests con React Testing Library',
      'Mejores prácticas y patrones modernos',
      'TypeScript con React',
      'Performance optimization',
    ],
  },
  {
    id: 'node-apis-rest',
    title: 'APIs REST con Node.js y Express',
    description: 'Construye APIs profesionales con autenticación, base de datos y deploy.',
    fullDescription:
      'Aprende a construir APIs REST escalables y seguras con Node.js y Express. Cubre autenticación con JWT, validación de datos, bases de datos SQL y NoSQL, testing, y despliegue en producción.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
    price: 89,
    level: 'Intermedio',
    category: 'Backend',
    rating: 4.8,
    reviews: 318,
    students: 1100,
    duration: 10,
    modules: [
      {
        id: 'modulo-1',
        title: 'Introducción a Node.js',
        lessons: [
          { title: '¿Qué es Node.js?', duration: 7 },
          { title: 'Configuración inicial', duration: 10 },
        ],
      },
      {
        id: 'modulo-2',
        title: 'Express Framework',
        lessons: [
          { title: 'Routing básico', duration: 12 },
          { title: 'Middlewares', duration: 15 },
        ],
      },
    ],
    learningPoints: [
      'Estructura profesional de APIs',
      'Autenticación con JWT',
      'Validación de datos con Zod',
      'Bases de datos SQL y NoSQL',
      'Testing de APIs',
      'Despliegue en Heroku/Railway',
    ],
  },
  {
    id: 'sql-desde-cero',
    title: 'SQL y Bases de Datos para Developers',
    description: 'PostgreSQL, queries avanzados, optimización y diseño de esquemas.',
    fullDescription:
      'Domina SQL desde cero. Diseño de esquemas, queries avanzados, optimización, transacciones y mejores prácticas para developers.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    price: 79,
    level: 'Principiante',
    category: 'Bases de Datos',
    rating: 4.7,
    reviews: 245,
    students: 890,
    duration: 7,
    modules: [
      {
        id: 'modulo-1',
        title: 'Fundamentos SQL',
        lessons: [
          { title: 'SELECT básico', duration: 8 },
          { title: 'WHERE y filtros', duration: 10 },
        ],
      },
    ],
    learningPoints: [
      'Queries SQL complejos',
      'Joins y relaciones',
      'Optimización de queries',
      'Transactions',
      'Índices y performance',
    ],
  },
  {
    id: 'typescript-pro',
    title: 'TypeScript Avanzado para Profesionales',
    description: 'Tipos genéricos, decoradores, tipos complejos y patrones avanzados.',
    fullDescription:
      'Lleva tu TypeScript al siguiente nivel. Genéricos, tipos condicionales, tipos mapeados, decoradores y patrones arquitectónicos avanzados.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
    price: 119,
    level: 'Avanzado',
    category: 'Desarrollo Web',
    rating: 4.8,
    reviews: 189,
    students: 720,
    duration: 9,
    modules: [
      {
        id: 'modulo-1',
        title: 'Tipos Avanzados',
        lessons: [
          { title: 'Tipos genéricos', duration: 16 },
          { title: 'Tipos condicionales', duration: 14 },
        ],
      },
    ],
    learningPoints: [
      'Genéricos complejos',
      'Tipos mapeados',
      'Tipos condicionales',
      'Decoradores',
      'Patrones avanzados',
    ],
  },
  {
    id: 'next-fullstack',
    title: 'Next.js 15 - Full Stack Moderno',
    description: 'Construye aplicaciones full stack con Next.js, database y autenticación.',
    fullDescription:
      'Aprende Next.js 15 con App Router, Server Components, Actions, y construye aplicaciones completas con autenticación y base de datos integrada.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=450&fit=crop',
    price: 149,
    level: 'Intermedio',
    category: 'Desarrollo Web',
    rating: 4.9,
    reviews: 512,
    students: 1500,
    duration: 16,
    modules: [
      {
        id: 'modulo-1',
        title: 'Introducción a Next.js 15',
        lessons: [
          { title: '¿Qué es Next.js?', duration: 10 },
          { title: 'App Router vs Pages Router', duration: 12 },
        ],
      },
    ],
    learningPoints: [
      'App Router y rutas dinámicas',
      'Server Components y Client Components',
      'Fetching de datos y revalidación',
      'Autenticación con NextAuth',
      'Integración de bases de datos',
      'Despliegue en Vercel',
    ],
  },
  {
    id: 'web-performance',
    title: 'Web Performance - Optimiza tu App',
    description: 'Métricas, lazy loading, compresión, caching y más.',
    fullDescription:
      'Domina los secretos de la web performance. Optimiza tus aplicaciones, mejora Core Web Vitals, implementa caching y lazy loading.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
    price: 69,
    level: 'Avanzado',
    category: 'Desarrollo Web',
    rating: 4.6,
    reviews: 156,
    students: 520,
    duration: 5,
    modules: [
      {
        id: 'modulo-1',
        title: 'Métricas de Performance',
        lessons: [
          { title: 'Core Web Vitals', duration: 12 },
          { title: 'Lighthouse', duration: 10 },
        ],
      },
    ],
    learningPoints: [
      'Medir performance',
      'Optimizar imágenes',
      'Code splitting',
      'Lazy loading',
      'Caching strategies',
      'Bundle optimization',
    ],
  },
]
