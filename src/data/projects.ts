export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    id: 'tienda-celulares',
    title: 'Tienda de Celulares',
    summary: 'E-commerce + dashboard admin con POS y gestión de stock',
    description:
      'Plataforma completa para una tienda física con venta online. Incluye tienda pública, dashboard administrativo, gestión de productos con imágenes en Cloudinary, sistema de pedidos, ventas presenciales (POS) y generación de boletas en PDF.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    image:
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80&auto=format&fit=crop',
    github: 'https://github.com/josephcorcuera/tienda-celulares',
    demo: 'https://tienda-demo.vercel.app',
    featured: true,
    year: 2026,
  },
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    summary: 'Panel de métricas en tiempo real con gráficos interactivos',
    description:
      'Dashboard que consume APIs y muestra métricas de ventas, usuarios y rendimiento en tiempo real con Recharts. Filtros avanzados, modo oscuro, exportación a PDF/Excel.',
    stack: ['React', 'TypeScript', 'Recharts', 'Zustand', 'TanStack Query'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
    github: 'https://github.com/josephcorcuera/dashboard-analytics',
    featured: true,
    year: 2025,
  },
  {
    id: 'portafolio',
    title: 'Portafolio Personal',
    summary: 'Esta misma página — React, Tailwind, Framer Motion',
    description:
      'Mi propio portafolio: animaciones suaves, diseño responsive, CV embebido, generación de PDF al vuelo y modo claro/oscuro.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format&fit=crop',
    github: 'https://github.com/josephcorcuera/portafolio',
    demo: 'https://tuportafolio.vercel.app',
    featured: true,
    year: 2026,
  },
  {
    id: 'api-rest',
    title: 'API REST de Inventario',
    summary: 'API con autenticación JWT, roles y documentación Swagger',
    description:
      'API REST construida con Express y TypeScript. Roles ADMIN/VENDEDOR, autenticación con JWT, validación con Zod, documentada con Swagger y testeada con Jest.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
    github: 'https://github.com/josephcorcuera/api-inventario',
    year: 2025,
  },
];
