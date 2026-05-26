// Contenido extendido del CV — más de 50 páginas
// Cada sección se renderiza en su propia página del PDF
// Edita aquí para actualizar el CV completo

export type CVSection =
  | { id: string; layout: 'cover'; title: string; subtitle: string; tagline: string }
  | { id: string; layout: 'toc'; title: string; entries: { num: number; label: string }[] }
  | { id: string; layout: 'letter'; title: string; paragraphs: string[]; signature: string }
  | { id: string; layout: 'profile'; title: string; rows: { label: string; value: string }[] }
  | { id: string; layout: 'standard'; title: string; subtitle?: string; paragraphs: string[] }
  | { id: string; layout: 'bullets'; title: string; intro?: string; bullets: string[] }
  | { id: string; layout: 'items'; title: string; intro?: string; items: { title: string; period?: string; description: string; tags?: string[] }[] }
  | { id: string; layout: 'skillBars'; title: string; intro?: string; skills: { name: string; level: number; note?: string }[] }
  | { id: string; layout: 'quote'; title: string; quote: string; author: string; paragraphs: string[] }
  | { id: string; layout: 'twoColumn'; title: string; left: { heading: string; bullets: string[] }; right: { heading: string; bullets: string[] } };

export const cvSections: CVSection[] = [
  // 1 — Portada
  {
    id: 'cover',
    layout: 'cover',
    title: 'Joseph Corcuera',
    subtitle: 'Desarrollador Full Stack',
    tagline: 'Curriculum Vitae · Edición 2026',
  },

  // 2 — Índice
  {
    id: 'toc',
    layout: 'toc',
    title: 'Índice',
    entries: [
      { num: 1, label: 'Portada' },
      { num: 2, label: 'Índice de contenidos' },
      { num: 3, label: 'Carta de presentación' },
      { num: 4, label: 'Datos personales' },
      { num: 5, label: 'Perfil profesional' },
      { num: 6, label: 'Objetivo profesional' },
      { num: 7, label: 'Filosofía de trabajo' },
      { num: 8, label: 'Formación universitaria' },
      { num: 9, label: 'Cursos cursados en la universidad' },
      { num: 10, label: 'Proyectos académicos' },
      { num: 11, label: 'Educación complementaria' },
      { num: 12, label: 'Certificaciones técnicas' },
      { num: 13, label: 'Bootcamps y talleres' },
      { num: 14, label: 'Frontend — React y ecosistema' },
      { num: 15, label: 'Frontend — TypeScript' },
      { num: 16, label: 'Frontend — HTML, CSS y Tailwind' },
      { num: 17, label: 'Frontend — Estado y data fetching' },
      { num: 18, label: 'Frontend — Testing' },
      { num: 19, label: 'Backend — Node.js y Express' },
      { num: 20, label: 'Backend — Bases de datos' },
      { num: 21, label: 'Backend — Diseño de APIs' },
      { num: 22, label: 'Backend — Autenticación y seguridad' },
      { num: 23, label: 'DevOps — Git y control de versiones' },
      { num: 24, label: 'DevOps — Docker y contenedores' },
      { num: 25, label: 'DevOps — Despliegue y hosting' },
      { num: 26, label: 'Herramientas de diseño' },
      { num: 27, label: 'Experiencia profesional actual' },
      { num: 28, label: 'Experiencia profesional anterior' },
      { num: 29, label: 'Práctica profesional' },
      { num: 30, label: 'Proyectos freelance' },
      { num: 31, label: 'Proyecto destacado: Tienda de Celulares' },
      { num: 32, label: 'Proyecto destacado: Dashboard Analytics' },
      { num: 33, label: 'Proyecto destacado: API de Inventario' },
      { num: 34, label: 'Proyecto destacado: Portafolio personal' },
      { num: 35, label: 'Habilidad blanda: Comunicación' },
      { num: 36, label: 'Habilidad blanda: Trabajo en equipo' },
      { num: 37, label: 'Habilidad blanda: Resolución de problemas' },
      { num: 38, label: 'Habilidad blanda: Aprendizaje continuo' },
      { num: 39, label: 'Idiomas' },
      { num: 40, label: 'Logros y reconocimientos' },
      { num: 41, label: 'Publicaciones y artículos' },
      { num: 42, label: 'Charlas y conferencias' },
      { num: 43, label: 'Contribuciones open source' },
      { num: 44, label: 'Voluntariado y comunidad' },
      { num: 45, label: 'Intereses y hobbies' },
      { num: 46, label: 'Lecturas que me han marcado' },
      { num: 47, label: 'Herramientas de productividad' },
      { num: 48, label: 'Metodologías de trabajo' },
      { num: 49, label: 'Disponibilidad y modalidad' },
      { num: 50, label: 'Referencias profesionales' },
      { num: 51, label: 'Cierre y contacto' },
    ],
  },

  // 3 — Carta de presentación
  {
    id: 'letter',
    layout: 'letter',
    title: 'Carta de presentación',
    paragraphs: [
      'A quien corresponda:',
      'Mi nombre es Joseph Corcuera, soy desarrollador full stack con base en Lima, Perú. Desde temprana edad sentí una atracción muy fuerte por la tecnología, primero como usuario curioso y luego como creador. Esa curiosidad terminó convirtiéndose en una vocación que hoy practico todos los días, ya sea programando para un cliente, estudiando un nuevo framework o experimentando con ideas propias.',
      'Lo que más me define profesionalmente es la mezcla entre el lado lógico de la ingeniería y el lado visual del diseño. Disfruto pensar la arquitectura de un sistema con la misma intensidad con la que disfruto ajustar el espaciado de una tipografía. Creo firmemente que un buen producto digital nace del equilibrio entre ambas disciplinas, y trabajo para mantener ese equilibrio en cada proyecto.',
      'Durante los últimos años he construido aplicaciones web reales que resuelven problemas concretos: dashboards administrativos, sistemas de e-commerce, APIs internas y herramientas de productividad. En cada uno he intentado aprender algo nuevo, refactorizar lo viejo y dejar el código un poco mejor de como lo encontré.',
      'Este documento reúne, ordenadamente, todo lo que he hecho hasta ahora: mi formación académica, mis habilidades técnicas, los proyectos en los que he participado y las personas con las que he trabajado. Cada sección está pensada para que quien lea pueda hacerse una idea clara de quién soy como profesional y, también, como persona.',
      'Si lo que lee aquí le resulta interesante, estaré encantado de conversar con usted. Soy alguien que valora el diálogo honesto, la retroalimentación constructiva y los retos que empujan a salir de la zona de confort.',
      'Gracias por dedicar su tiempo a revisar este CV.',
    ],
    signature: 'Atentamente, Joseph Corcuera',
  },

  // 4 — Datos personales
  {
    id: 'datos',
    layout: 'profile',
    title: 'Datos personales',
    rows: [
      { label: 'Nombre completo', value: 'Joseph Corcuera' },
      { label: 'Fecha de nacimiento', value: '15 de marzo del 2003' },
      { label: 'Edad', value: '23 años' },
      { label: 'Nacionalidad', value: 'Peruana' },
      { label: 'Ciudad de residencia', value: 'Lima, Perú' },
      { label: 'Documento de identidad', value: 'DNI 7XXXXXXX' },
      { label: 'Estado civil', value: 'Soltero' },
      { label: 'Correo profesional', value: 'jcorcuer4@gmail.com' },
      { label: 'Teléfono móvil', value: '+51 986 501 081' },
      { label: 'LinkedIn', value: 'linkedin.com/in/juancorcuera' },
      { label: 'GitHub', value: 'github.com/juancorcuera' },
      { label: 'Sitio web', value: 'juancorcuera.dev' },
      { label: 'Disponibilidad', value: 'Inmediata, jornada completa o freelance' },
      { label: 'Movilidad', value: 'Modalidad remota, híbrida o presencial en Lima' },
      { label: 'Licencia de conducir', value: 'A-IIb vigente' },
    ],
  },

  // 5 — Perfil profesional
  {
    id: 'perfil',
    layout: 'standard',
    title: 'Perfil profesional',
    subtitle: 'Resumen ejecutivo de mi trayectoria',
    paragraphs: [
      'Soy un desarrollador full stack orientado a producto, con experiencia construyendo aplicaciones web modernas, escalables y centradas en la experiencia del usuario. Mi enfoque principal está en el ecosistema JavaScript y TypeScript, trabajando habitualmente con React en el frontend y Node.js con Express en el backend, sobre bases de datos relacionales como PostgreSQL.',
      'A lo largo de mi carrera he asumido roles muy variados: desde maquetar interfaces pixel-perfect hasta diseñar arquitecturas de servicios, pasando por modelado de datos, optimización de consultas SQL y configuración de pipelines de despliegue. Esa polivalencia me permite entender el ciclo completo de un producto y comunicarme con fluidez tanto con diseñadores como con personas de negocio.',
      'Me caracterizo por un fuerte compromiso con la calidad: escribo código tipado, modular y testeado, y disfruto refactorizando cuando un problema se vuelve recurrente. Al mismo tiempo, valoro la velocidad de entrega y entiendo que en muchos proyectos lo que importa es validar una hipótesis rápido antes que perseguir la perfección.',
      'En lo personal, soy una persona ordenada, autodidacta y exigente con mi propio trabajo. Aprendo rápido cuando se me da contexto suficiente y disfruto compartir lo que sé con compañeros más nuevos. Veo cada proyecto como una oportunidad para crecer y para dejar algo útil detrás de mí.',
    ],
  },

  // 6 — Objetivo profesional
  {
    id: 'objetivo',
    layout: 'standard',
    title: 'Objetivo profesional',
    subtitle: 'Hacia dónde apunto los próximos años',
    paragraphs: [
      'A corto plazo, mi objetivo es incorporarme a un equipo de producto donde pueda aportar tanto en frontend como en backend, idealmente trabajando sobre un producto con usuarios reales y métricas claras. Busco un entorno que valore la calidad técnica, que practique revisión de código y que tenga apetito por mejorar continuamente.',
      'A mediano plazo, quiero profundizar en arquitectura de software y en temas de rendimiento web. Me interesa especialmente todo lo relacionado con Core Web Vitals, accesibilidad real (no solo cumplimiento mínimo), y diseño de APIs que sean agradables de consumir desde el frontend.',
      'A largo plazo, mi aspiración es convertirme en un ingeniero que pueda liderar técnicamente proyectos completos: desde el descubrimiento del problema hasta la entrega y operación. No necesariamente como gerente, sino como referente técnico capaz de tomar decisiones acertadas y mentorear a otros desarrolladores.',
      'Independientemente del contexto, me interesa seguir construyendo productos que se sientan rápidos, claros y respetuosos con la atención del usuario. Creo que el software puede mejorar la vida de las personas cuando se diseña con cuidado, y quiero ser parte de equipos que crean en esa idea.',
    ],
  },

  // 7 — Filosofía de trabajo
  {
    id: 'filosofia',
    layout: 'quote',
    title: 'Filosofía de trabajo',
    quote: 'Hacer cosas simples es mucho más difícil que hacer cosas complejas, pero merece la pena.',
    author: 'Steve Jobs',
    paragraphs: [
      'Procuro guiarme por un puñado de principios que han salido a fuerza de equivocarme. El primero: la simplicidad gana casi siempre. Cuando un componente, una función o un endpoint se vuelve difícil de explicar en una frase, suele ser señal de que está intentando hacer demasiadas cosas.',
      'El segundo: nombrar bien es la mitad del trabajo. Una variable con un nombre claro ahorra comentarios, evita malentendidos y sobrevive a los cambios mejor que cualquier diagrama. Por eso dedico tiempo a pensar nombres y, cuando dudo, renombro sin culpa.',
      'El tercero: el código se lee muchas más veces de las que se escribe. Optimizar para el lector futuro —que muchas veces soy yo mismo seis meses después— es una de las inversiones más rentables que un desarrollador puede hacer.',
      'El cuarto: las pruebas no son un lujo, son una red de seguridad que permite avanzar con tranquilidad. No persigo el 100% de cobertura, pero sí me aseguro de que las partes críticas estén cubiertas y de que los errores recurrentes generen un test que evite su regreso.',
      'Y el último: la mejor pieza de software es la que no hace falta escribir. Antes de añadir una nueva pantalla, una nueva tabla o un nuevo servicio, me pregunto si realmente se necesita. Muchas veces la respuesta es no.',
    ],
  },

  // 8 — Formación universitaria
  {
    id: 'universidad',
    layout: 'items',
    title: 'Formación universitaria',
    intro: 'Estudios formales que constituyen la base de mi formación como ingeniero.',
    items: [
      {
        title: 'Ingeniería de Sistemas e Informática',
        period: '2022 — actualidad (cursando 7° ciclo)',
        description:
          'Carrera profesional con enfoque en desarrollo de software, redes y gestión de proyectos tecnológicos. Promedio ponderado acumulado: 17/20. Tercio superior desde el segundo ciclo.',
        tags: ['Universidad Nacional', 'Lima', 'Pregrado'],
      },
      {
        title: 'Educación secundaria',
        period: '2017 — 2021',
        description:
          'Bachillerato con énfasis en ciencias. Participación activa en olimpiadas de matemáticas y en el club de robótica del colegio. Egresado con mención honrosa.',
        tags: ['Bachillerato', 'Ciencias'],
      },
      {
        title: 'Programa de inglés intensivo',
        period: '2019 — 2022',
        description:
          'Estudios en instituto especializado hasta nivel intermedio-avanzado (B2). Certificación interna y aprobación del examen Aptis con calificación CEFR B2 en las cuatro habilidades.',
        tags: ['Idiomas', 'Inglés', 'B2'],
      },
    ],
  },

  // 9 — Cursos universitarios
  {
    id: 'cursos-uni',
    layout: 'bullets',
    title: 'Cursos cursados en la universidad',
    intro: 'Asignaturas relevantes para mi formación como desarrollador, ordenadas por relevancia técnica.',
    bullets: [
      'Algoritmos y Estructuras de Datos I y II — listas, árboles, grafos, complejidad temporal y espacial, algoritmos clásicos de búsqueda y ordenamiento.',
      'Bases de Datos I y II — modelado entidad-relación, normalización hasta 3NF, SQL avanzado, índices, transacciones, niveles de aislamiento y diseño de esquemas para producción.',
      'Programación Orientada a Objetos — herencia, polimorfismo, principios SOLID, patrones de diseño Gang of Four aplicados a casos reales en Java y C#.',
      'Ingeniería de Software I y II — ciclo de vida, metodologías ágiles, gestión de requisitos, control de versiones, métricas de calidad y pruebas unitarias.',
      'Sistemas Operativos — gestión de procesos, hilos, memoria virtual, scheduling, sincronización y sistemas de archivos.',
      'Redes de Computadoras — modelo OSI y TCP/IP, protocolos de transporte y aplicación, subredes, ruteo y configuración de servicios básicos.',
      'Cálculo Diferencial e Integral — fundamentos matemáticos aplicables a algoritmos numéricos y análisis de datos.',
      'Estadística y Probabilidades — distribuciones, pruebas de hipótesis, regresión lineal y muestreo para experimentación.',
      'Matemática Discreta — lógica proposicional, conjuntos, combinatoria, teoría de grafos y aplicaciones a la informática.',
      'Arquitectura de Computadoras — organización de la CPU, ensamblador básico, jerarquía de memoria y rendimiento.',
      'Inteligencia Artificial (electivo) — introducción a búsqueda heurística, aprendizaje supervisado y redes neuronales básicas.',
      'Seguridad Informática (electivo) — fundamentos de criptografía, OWASP Top 10 y prácticas de hardening para aplicaciones web.',
    ],
  },

  // 10 — Proyectos académicos
  {
    id: 'proyectos-uni',
    layout: 'items',
    title: 'Proyectos académicos destacados',
    intro: 'Trabajos relevantes presentados durante mi formación universitaria.',
    items: [
      {
        title: 'Sistema de gestión de biblioteca universitaria',
        period: '5° ciclo · 2024',
        description:
          'Aplicación web en Java Spring y Angular para administrar préstamos, devoluciones y reservas de libros. El sistema incluye control de morosidad, generación de reportes y un módulo de búsqueda con filtros combinados. Nota final: 18/20.',
        tags: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
      },
      {
        title: 'Compilador de mini-lenguaje aritmético',
        period: '4° ciclo · 2023',
        description:
          'Implementación desde cero de un analizador léxico, sintáctico y semántico para un mini-lenguaje con variables, condicionales y bucles. El compilador genera código intermedio interpretado por una pequeña máquina virtual. Nota final: 19/20.',
        tags: ['Python', 'Compiladores', 'AST'],
      },
      {
        title: 'Red social temática con microservicios',
        period: '6° ciclo · 2025',
        description:
          'Proyecto en equipo donde diseñamos una red social vertical sobre cine, separando el sistema en cuatro microservicios (usuarios, contenido, recomendaciones, notificaciones) comunicados por una API gateway. Mi rol fue líder técnico del frontend en Next.js. Nota final: 20/20.',
        tags: ['Microservicios', 'Next.js', 'Docker', 'RabbitMQ'],
      },
      {
        title: 'Simulador de planificación de procesos',
        period: '4° ciclo · 2023',
        description:
          'Aplicación de escritorio en C# que simula los algoritmos FCFS, SJF, Round Robin y Prioridades, con visualización gráfica del diagrama de Gantt resultante.',
        tags: ['C#', 'WinForms', 'Algoritmos'],
      },
    ],
  },

  // 11 — Educación complementaria
  {
    id: 'comp',
    layout: 'items',
    title: 'Educación complementaria',
    intro: 'Cursos en línea con los que he reforzado conocimientos específicos.',
    items: [
      {
        title: 'The Complete React Developer Course',
        period: 'Udemy · 2024',
        description: 'Curso intensivo de 40 horas que cubrió React desde fundamentos hasta hooks avanzados, Redux Toolkit y patrones de composición.',
        tags: ['React', 'Hooks', 'Redux'],
      },
      {
        title: 'TypeScript Avanzado',
        period: 'Platzi · 2024',
        description: 'Tipos avanzados, genéricos, utility types, narrowing, módulos de declaraciones y patrones de diseño tipados.',
        tags: ['TypeScript', 'Tipado'],
      },
      {
        title: 'Diseño de bases de datos con PostgreSQL',
        period: 'Coursera · 2024',
        description: 'Modelado relacional, normalización, índices, vistas materializadas, particionamiento y consultas analíticas.',
        tags: ['PostgreSQL', 'SQL'],
      },
      {
        title: 'Docker y contenedores para desarrolladores',
        period: 'Platzi · 2025',
        description: 'Conceptos de contenedores, Dockerfile, volúmenes, redes, Docker Compose y publicación de imágenes en Docker Hub.',
        tags: ['Docker', 'DevOps'],
      },
      {
        title: 'Diseño UI/UX para desarrolladores',
        period: 'Domestika · 2025',
        description: 'Principios de jerarquía visual, sistema de grillas, teoría del color y prototipado en Figma orientado a desarrollo.',
        tags: ['UI', 'UX', 'Figma'],
      },
      {
        title: 'Git y GitHub: del cero al colaborativo',
        period: 'Platzi · 2023',
        description: 'Control de versiones, branching, rebase, resolución de conflictos, pull requests y flujos de trabajo en equipo.',
        tags: ['Git', 'GitHub'],
      },
    ],
  },

  // 12 — Certificaciones
  {
    id: 'certs',
    layout: 'items',
    title: 'Certificaciones técnicas',
    intro: 'Credenciales obtenidas mediante examen formal.',
    items: [
      {
        title: 'Meta Front-End Developer Certificate',
        period: 'Coursera · 2025',
        description: 'Programa especializado de Meta compuesto por nueve cursos sobre HTML, CSS, JavaScript, React y diseño UX para desarrolladores.',
      },
      {
        title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
        period: '2024',
        description: 'Conocimientos básicos de servicios en la nube, modelos de despliegue, seguridad y soporte en Microsoft Azure.',
      },
      {
        title: 'AWS Cloud Practitioner',
        period: '2025',
        description: 'Fundamentos de la nube AWS, sus servicios principales, modelo de responsabilidad compartida, precios y facturación.',
      },
      {
        title: 'Scrum Foundation Professional Certificate (SFPC)',
        period: 'CertiProf · 2024',
        description: 'Principios y prácticas básicas del marco de trabajo Scrum aplicables al desarrollo ágil de productos.',
      },
      {
        title: 'Aptis General — CEFR B2',
        period: 'British Council · 2023',
        description: 'Evaluación de las cuatro habilidades del idioma inglés con resultado nivel intermedio-alto.',
      },
    ],
  },

  // 13 — Bootcamps y talleres
  {
    id: 'bootcamps',
    layout: 'items',
    title: 'Bootcamps y talleres',
    intro: 'Formación intensiva fuera del aula universitaria.',
    items: [
      {
        title: 'Bootcamp Full Stack JavaScript',
        period: 'Verano 2024 · 12 semanas',
        description: 'Programa intensivo en horario completo cubriendo Node.js, Express, React, MongoDB, PostgreSQL, autenticación, despliegue y trabajo en equipo bajo metodologías ágiles. Proyecto final: marketplace de productos artesanales con 5 desarrolladores.',
      },
      {
        title: 'Taller de diseño de APIs REST',
        period: 'Marzo 2025 · 16 horas',
        description: 'Diseño de recursos, versionado, paginación, manejo de errores, OpenAPI/Swagger y buenas prácticas de seguridad.',
      },
      {
        title: 'Taller de testing en React',
        period: 'Julio 2025 · 12 horas',
        description: 'Jest, React Testing Library, pruebas de integración y filosofía test-driven aplicada a componentes.',
      },
      {
        title: 'Hackathon Universitaria de Innovación',
        period: 'Octubre 2024 · 36 horas',
        description: 'Competencia en equipo de cuatro personas donde construimos un MVP de aplicación de transporte colaborativo. Tercer lugar entre 28 equipos participantes.',
      },
    ],
  },

  // 14 — React
  {
    id: 'react',
    layout: 'skillBars',
    title: 'Frontend: React y su ecosistema',
    intro:
      'React es mi principal herramienta para construir interfaces. Lo uso desde hace más de tres años y conozco sus patrones, sus límites y las trampas comunes en proyectos reales.',
    skills: [
      { name: 'React 18 (hooks, suspense, transitions)', level: 92 },
      { name: 'Componentes funcionales y composición', level: 95 },
      { name: 'React Router v6 y navegación', level: 88 },
      { name: 'Manejo de formularios (React Hook Form, Zod)', level: 86 },
      { name: 'Server Components y Next.js App Router', level: 78 },
      { name: 'Optimización de renders (memo, useMemo, useCallback)', level: 84 },
      { name: 'Patrones avanzados (render props, compound components)', level: 80 },
      { name: 'Animaciones con Framer Motion', level: 82 },
      { name: 'Internacionalización con react-i18next', level: 75 },
    ],
  },

  // 15 — TypeScript
  {
    id: 'ts',
    layout: 'skillBars',
    title: 'Frontend: TypeScript',
    intro:
      'TypeScript es para mí un compañero de viaje obligatorio. No empiezo un proyecto sin él porque su sistema de tipos previene clases enteras de errores y documenta el código a la vez.',
    skills: [
      { name: 'Tipos primitivos, uniones e intersecciones', level: 95 },
      { name: 'Genéricos y restricciones', level: 88 },
      { name: 'Utility types (Partial, Pick, Omit, ReturnType)', level: 90 },
      { name: 'Inferencia y narrowing', level: 86 },
      { name: 'Tipos condicionales y mapeados', level: 78 },
      { name: 'Discriminated unions y exhaustiveness checking', level: 84 },
      { name: 'Tipado de APIs externas (axios, fetch)', level: 88 },
      { name: 'Tipado de hooks y componentes', level: 92 },
    ],
  },

  // 16 — HTML, CSS, Tailwind
  {
    id: 'css',
    layout: 'skillBars',
    title: 'Frontend: HTML, CSS y TailwindCSS',
    intro:
      'Me tomo en serio la capa visual. Disfruto los detalles de la maquetación y conozco bien las novedades del CSS moderno: container queries, subgrid, anchor positioning y view transitions.',
    skills: [
      { name: 'HTML semántico y accesibilidad (WAI-ARIA)', level: 90 },
      { name: 'CSS moderno (Grid, Flexbox, custom properties)', level: 92 },
      { name: 'TailwindCSS y diseño de design systems con tokens', level: 93 },
      { name: 'Animaciones CSS y transiciones', level: 86 },
      { name: 'Diseño responsive mobile-first', level: 94 },
      { name: 'Tipografía web y rendimiento de fuentes', level: 80 },
      { name: 'CSS-in-JS (styled-components, emotion)', level: 75 },
      { name: 'Sass / SCSS', level: 78 },
    ],
  },

  // 17 — Estado y data fetching
  {
    id: 'state',
    layout: 'skillBars',
    title: 'Frontend: Estado y data fetching',
    intro:
      'Aprendí por las malas que el estado se subestima. Hoy elijo la herramienta más simple posible para el problema concreto y separo claramente estado de servidor del estado de cliente.',
    skills: [
      { name: 'TanStack Query (cache, mutations, optimistic updates)', level: 88 },
      { name: 'Zustand para estado global mínimo', level: 86 },
      { name: 'Context API y composición de providers', level: 84 },
      { name: 'Redux Toolkit (cuando aplica)', level: 78 },
      { name: 'SWR y patrones stale-while-revalidate', level: 80 },
      { name: 'Manejo de side effects con useEffect', level: 88 },
    ],
  },

  // 18 — Testing
  {
    id: 'testing',
    layout: 'skillBars',
    title: 'Frontend: Testing',
    intro:
      'Las pruebas no son un capricho, son la red que me permite refactorizar sin miedo. Apunto a tests legibles que documenten el comportamiento esperado del componente.',
    skills: [
      { name: 'Vitest / Jest', level: 84 },
      { name: 'React Testing Library', level: 86 },
      { name: 'Mock Service Worker (MSW)', level: 78 },
      { name: 'Cypress (end-to-end)', level: 72 },
      { name: 'Playwright', level: 70 },
      { name: 'Storybook para componentes', level: 76 },
    ],
  },

  // 19 — Node + Express
  {
    id: 'node',
    layout: 'standard',
    title: 'Backend: Node.js y Express',
    subtitle: 'Mi stack principal para el servidor',
    paragraphs: [
      'Construyo APIs con Node.js y Express desde 2023. Conozco el modelo de event loop, sé identificar bloqueos de CPU y entiendo cuándo conviene dividir tareas pesadas en workers o microservicios. He trabajado tanto con CommonJS como con módulos ES, y prefiero hoy en día este último por integrarse mejor con el ecosistema moderno.',
      'Mi flujo habitual con Express incluye estructura por capas (rutas, controladores, servicios, repositorios), middlewares para validación con Zod, manejo de errores centralizado, registro estructurado con pino y configuración por variables de entorno. Soy ordenado con los nombres de archivo y procuro que cualquier persona nueva pueda ubicar las cosas rápidamente.',
      'He construido servicios que sirven entre miles de peticiones por día sin problemas, y entiendo cómo dimensionar conexiones a base de datos, configurar pools y manejar concurrencia razonable en un proceso Node único. Cuando el problema escala más, conozco también las opciones para clusterizar y aprovechar varios cores.',
      'Adicionalmente, tengo experiencia con Fastify, que en algunos proyectos he preferido por su rendimiento superior y su sistema de plugins. La elección entre Express y Fastify la tomo en función del equipo, no del benchmark.',
    ],
  },

  // 20 — Bases de datos
  {
    id: 'db',
    layout: 'standard',
    title: 'Backend: Bases de datos',
    subtitle: 'PostgreSQL, Prisma y modelado relacional',
    paragraphs: [
      'PostgreSQL es mi base de datos por defecto. La elijo casi siempre que tengo libertad porque combina potencia, fiabilidad y un conjunto de funcionalidades modernas (JSONB, índices GIN, generated columns, particionamiento) difícil de igualar.',
      'Modelo los datos pensando primero en las consultas que va a soportar el sistema. Normalizo hasta donde tiene sentido, pero no soy purista: si una desnormalización controlada baja la latencia diez veces, la aplico y la documento.',
      'Como ORM principal uso Prisma. Aprecio su seguridad de tipos, su sistema de migraciones declarativas y su DX general. Sé también escribir SQL puro cuando una consulta se complica y reconozco las situaciones en las que el ORM se vuelve un estorbo.',
      'En proyectos donde he necesitado búsquedas avanzadas he integrado PostgreSQL full text search con tsvector, y para datos en tiempo real he probado con LISTEN/NOTIFY y suscripciones. También tengo experiencia básica con MongoDB y Redis, aunque los uso en escenarios puntuales (cache, sesiones, colas ligeras).',
    ],
  },

  // 21 — Diseño de APIs
  {
    id: 'api',
    layout: 'bullets',
    title: 'Backend: Diseño de APIs',
    intro: 'Algunas convenciones que aplico cuando diseño un API REST.',
    bullets: [
      'Recursos en plural y URLs predecibles: /productos, /productos/:id, /productos/:id/imagenes.',
      'Verbos HTTP usados correctamente: GET para lectura, POST para crear, PUT/PATCH para actualizar, DELETE para eliminar.',
      'Códigos de estado significativos: 200 ok, 201 creado, 204 sin contenido, 400 mala petición, 401/403 según corresponda, 404 no encontrado, 409 conflicto y 422 cuando la validación falla.',
      'Respuestas de error con estructura consistente que incluya código interno, mensaje y campo afectado cuando aplica.',
      'Paginación basada en cursor para listados grandes, con paginación basada en página solamente cuando el cliente realmente la necesita.',
      'Filtros y orden vía query string siguiendo una convención clara (filter[campo]=valor, sort=-fecha).',
      'Versionado mediante prefijo de ruta (/api/v1/) y deprecación documentada antes de retirar versiones antiguas.',
      'Documentación con OpenAPI generada desde el código siempre que sea posible, evitando que la documentación se desvíe de la implementación.',
      'Idempotencia en operaciones críticas como pagos, con cabeceras Idempotency-Key.',
      'Rate limiting por IP y por usuario autenticado para proteger los endpoints sensibles.',
    ],
  },

  // 22 — Auth y seguridad
  {
    id: 'auth',
    layout: 'bullets',
    title: 'Backend: Autenticación y seguridad',
    intro: 'Buenas prácticas que aplico para proteger los datos de los usuarios.',
    bullets: [
      'Hash de contraseñas con bcrypt o argon2id, nunca almacenamiento en texto plano.',
      'JSON Web Tokens firmados, con tiempo de expiración corto y refresh tokens en cookies httpOnly seguras.',
      'CORS configurado de forma explícita por entorno, sin comodines en producción.',
      'Validación estricta de entrada con Zod en cada endpoint, antes de tocar la base de datos.',
      'Cabeceras de seguridad mediante helmet: CSP, X-Frame-Options, Referrer-Policy, HSTS.',
      'Protección contra inyección SQL: uso exclusivo de queries parametrizadas y nunca concatenación de strings.',
      'Prevención de ataques CSRF en formularios tradicionales mediante tokens y SameSite cookies.',
      'Sanitización de HTML en cualquier campo de texto que se vaya a renderizar como HTML, usando librerías probadas como DOMPurify.',
      'Manejo prudente de logs: no loguear contraseñas, tokens ni datos personales sensibles.',
      'Auditoría manual periódica con OWASP Top 10 como checklist y herramientas como npm audit para dependencias.',
    ],
  },

  // 23 — Git
  {
    id: 'git',
    layout: 'standard',
    title: 'DevOps: Git y control de versiones',
    paragraphs: [
      'Trabajo con Git todos los días desde hace varios años. No me limito a los comandos básicos: entiendo el modelo de objetos detrás (blobs, trees, commits, refs) y eso me da confianza para resolver situaciones complicadas como un merge mal hecho, un rebase interrumpido o un commit perdido.',
      'En equipo defiendo flujos sencillos. Prefiero trunk-based development con ramas cortas y pull requests pequeños, antes que GitFlow con ramas long-lived que se desincronizan. Soy cuidadoso con los mensajes de commit: sigo convenciones tipo Conventional Commits cuando el equipo las adopta, porque facilitan generar changelogs y comunicar intención.',
      'Conozco bien las herramientas de GitHub: protecciones de rama, plantillas de pull request, Actions para CI, code owners, y configuraciones de seguridad como secret scanning y Dependabot. También he usado GitLab y Bitbucket en proyectos puntuales.',
      'Para revisar código sigo una rutina personal: leer primero la descripción del PR, después los tests, después la implementación. Comento con respeto, distingo bloqueadores de sugerencias y nunca dejo un comentario sin contexto cuando alguien dedicó tiempo a escribir el cambio.',
    ],
  },

  // 24 — Docker
  {
    id: 'docker',
    layout: 'standard',
    title: 'DevOps: Docker y contenedores',
    paragraphs: [
      'Docker es para mí la forma natural de garantizar que un proyecto corra igual en mi máquina, en la del compañero y en producción. Escribo Dockerfiles multi-stage para mantener imágenes pequeñas, separo dependencias de desarrollo de las de producción y aprovecho el cache de capas con un orden de instrucciones pensado.',
      'En proyectos locales uso Docker Compose para levantar la base de datos, una instancia de Redis cuando hace falta, y a veces servicios de correo simulados como Mailhog. Configuro volúmenes para preservar datos entre reinicios y redes nombradas para que los servicios se descubran entre sí por su nombre.',
      'He construido imágenes de Node con Alpine como base, conozco las trampas (musl vs glibc para módulos nativos) y sé cuándo conviene cambiar a una imagen distroless o slim. También he trabajado con imágenes de Postgres, Redis y nginx para servir builds estáticos.',
      'En el lado de producción, conozco lo básico de Kubernetes (pods, services, ingress) y he desplegado contenedores en plataformas gestionadas como Railway, Fly.io y Render, donde el contenedor se construye automáticamente desde el repositorio.',
    ],
  },

  // 25 — Hosting
  {
    id: 'hosting',
    layout: 'bullets',
    title: 'DevOps: Despliegue y hosting',
    intro: 'Plataformas con las que he desplegado proyectos personales y profesionales.',
    bullets: [
      'Vercel — para frontends en Next.js y SPAs estáticas. Aprovecho previews por rama, dominios personalizados y edge functions.',
      'Netlify — alternativa a Vercel cuando el equipo ya la usa. Conozco bien sus redirects, headers y funciones serverless.',
      'Railway — para servicios Node con base de datos PostgreSQL gestionada. Mi opción preferida para proyectos personales que necesitan backend.',
      'Render — para despliegues continuos desde GitHub con poco esfuerzo de configuración.',
      'Fly.io — cuando necesito desplegar lo más cerca posible del usuario o levantar bases de datos en regiones específicas.',
      'AWS — experiencia básica con S3 para almacenamiento estático, CloudFront como CDN, EC2 para servidores virtuales y RDS para Postgres gestionado.',
      'GitHub Pages — para portafolios estáticos y documentación de proyectos open source.',
      'Cloudinary — gestión de imágenes con transformaciones al vuelo, optimizaciones y entrega vía CDN.',
      'Cloudflare — DNS, certificados SSL, reglas de cache y protección DDoS para sitios personales.',
    ],
  },

  // 26 — Diseño
  {
    id: 'design',
    layout: 'bullets',
    title: 'Herramientas de diseño y prototipado',
    intro: 'Sé moverme con soltura en el lado del diseño aunque mi rol principal sea técnico.',
    bullets: [
      'Figma — mi herramienta principal de diseño. Trabajo con componentes, variantes, variables, modos y auto-layout. Sé organizar archivos para entregables y colaboración con desarrolladores.',
      'Adobe Photoshop — manipulación básica de imágenes, recortes, ajustes de color y exportación optimizada para web.',
      'Adobe Illustrator — edición de SVGs, creación de íconos simples y manipulación de vectores cuando es necesario.',
      'Canva — para piezas rápidas de redes sociales y plantillas cuando el tiempo es el factor crítico.',
      'Excalidraw — para diagramas técnicos y bocetos que acompañan documentación.',
      'Tldraw — alternativa moderna a Excalidraw, ideal para sesiones de design review remotas.',
      'Whimsical — diagramas de flujo, mapas mentales y wireframes durante etapas tempranas de un proyecto.',
      'Iconos: experiencia con Lucide, Heroicons, Tabler Icons y Phosphor Icons.',
      'Unsplash, Pexels y Pixabay como bancos de imágenes con licencia adecuada para proyectos comerciales.',
    ],
  },

  // 27 — Experiencia actual
  {
    id: 'exp1',
    layout: 'items',
    title: 'Experiencia profesional · Actual',
    items: [
      {
        title: 'Desarrollador Full Stack — Freelance',
        period: 'Enero 2025 — actualidad',
        description:
          'Trabajo de forma independiente para pequeñas y medianas empresas que necesitan presencia digital y herramientas internas. Mis responsabilidades incluyen levantamiento de requisitos con el cliente, diseño de la solución, desarrollo end-to-end, despliegue y soporte posterior. He entregado siete proyectos completos en este periodo, manteniendo a todos los clientes satisfechos y con renovación de contrato en cinco de los siete casos. Los proyectos van desde landing pages corporativas hasta dashboards administrativos con autenticación, gestión de productos y reportería.',
        tags: ['React', 'Node', 'PostgreSQL', 'TypeScript', 'Tailwind'],
      },
    ],
  },

  // 28 — Experiencia anterior
  {
    id: 'exp2',
    layout: 'items',
    title: 'Experiencia profesional · Anterior',
    items: [
      {
        title: 'Desarrollador Junior — Estudio de software local',
        period: 'Marzo 2024 — Diciembre 2024',
        description:
          'Mi primer empleo formal en un estudio de cuatro personas dedicado a crear sistemas administrativos a medida. Participé en cuatro proyectos para clientes del sector retail y servicios. Mis tareas incluyeron desarrollo de pantallas en React, integración con APIs internas, escritura de pruebas unitarias y participación en reuniones con clientes. Recibí mentoría directa del fundador del estudio, lo que aceleró enormemente mi curva de aprendizaje en buenas prácticas y trato con el cliente.',
        tags: ['React', 'TypeScript', 'Mentoría'],
      },
      {
        title: 'Desarrollador Freelance — Proyectos esporádicos',
        period: 'Junio 2023 — Febrero 2024',
        description:
          'En paralelo a mis estudios universitarios, tomé pequeños trabajos freelance: landing pages, formularios de captura, integraciones simples con Google Sheets y automatizaciones para clientes de mi entorno cercano. Esta etapa me enseñó a estimar tiempos, presupuestar, escribir propuestas y manejar las expectativas del cliente.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Estimación'],
      },
    ],
  },

  // 29 — Práctica profesional
  {
    id: 'practica',
    layout: 'items',
    title: 'Práctica profesional',
    items: [
      {
        title: 'Practicante de desarrollo — Empresa del rubro educativo',
        period: 'Enero 2023 — Mayo 2023',
        description:
          'Práctica preprofesional en una startup de tecnología educativa. Participé en el equipo de producto trabajando sobre una plataforma de clases en vivo construida en Vue.js y Laravel. Mis aportes principales fueron la implementación de un módulo de asistencia, la mejora del rendimiento del listado de cursos y la corrección de bugs reportados por usuarios. Fue mi primer contacto con un equipo de desarrollo profesional y con prácticas como daily standups, code reviews y planning poker.',
        tags: ['Vue.js', 'Laravel', 'MySQL'],
      },
    ],
  },

  // 30 — Freelance
  {
    id: 'freelance',
    layout: 'items',
    title: 'Proyectos freelance representativos',
    intro: 'Una selección de trabajos independientes que he entregado.',
    items: [
      {
        title: 'Sitio web para estudio de arquitectura',
        period: '2024',
        description: 'Portafolio elegante con galería de proyectos, página de contacto y blog. Construido en Astro con CMS basado en archivos Markdown.',
        tags: ['Astro', 'Markdown'],
      },
      {
        title: 'Sistema de citas para barbería',
        period: '2025',
        description: 'Aplicación con calendario, reserva online, panel para el dueño y notificaciones por WhatsApp. Backend en Node, frontend en React.',
        tags: ['React', 'Node', 'PostgreSQL'],
      },
      {
        title: 'Landing page para campaña de seguros',
        period: '2024',
        description: 'Landing con formulario de cotización integrado a una hoja de cálculo y sincronización diaria con el CRM del cliente.',
        tags: ['Next.js', 'Tailwind', 'Vercel'],
      },
      {
        title: 'Panel administrativo para clínica veterinaria',
        period: '2025',
        description: 'Gestión de pacientes, historiales clínicos, citas y emisión de recetas. Roles de veterinario y recepcionista con permisos diferenciados.',
        tags: ['React', 'Express', 'PostgreSQL', 'JWT'],
      },
    ],
  },

  // 31 — Proyecto tienda
  {
    id: 'p-tienda',
    layout: 'standard',
    title: 'Proyecto destacado: Tienda de Celulares',
    subtitle: 'E-commerce + dashboard administrativo + POS',
    paragraphs: [
      'Es el proyecto más completo en el que estoy trabajando actualmente. Se trata de una plataforma para una tienda física de celulares que también vende online. Está compuesta por dos aplicaciones frontend (tienda pública y dashboard administrativo) y una API REST común, todas conectadas a una única base de datos PostgreSQL.',
      'Problema a resolver: el cliente tenía una tienda física tradicional y un Facebook ocasional. Las ventas se anotaban en cuadernos, el stock se reconstruía a mano cada cierto tiempo, y no había forma de saber qué producto era el más vendido. Necesitaba ordenar la operación y, de paso, abrir un canal online.',
      'Solución: diseñé un sistema con dos modalidades de venta (online y presencial), gestión de stock unificada, panel de pedidos y reporte de ventas. El admin sube productos con varias imágenes, controla precios y stock, y atiende pedidos en estados (NUEVO, EN_PROCESO, ENVIADO, ENTREGADO, CANCELADO). El vendedor en mostrador usa un POS dentro del mismo dashboard, registra ventas presenciales y emite boletas en PDF.',
      'Stack: React 18 con Vite y TypeScript en ambos frontends, TailwindCSS para los estilos, Zustand para el estado de carrito y sesión, TanStack Query para la capa de datos, Node con Express y Prisma en el backend, PostgreSQL como base, Cloudinary para imágenes, JWT para autenticación y PDFKit para la generación de boletas. El deploy es en Vercel para los frontends y Railway para el backend más la base de datos.',
    ],
  },

  // 32 — Proyecto dashboard
  {
    id: 'p-dash',
    layout: 'standard',
    title: 'Proyecto destacado: Dashboard Analytics',
    subtitle: 'Panel de métricas en tiempo real',
    paragraphs: [
      'Dashboard analítico desarrollado para una pyme del sector retail que necesitaba consolidar la información de sus tres puntos de venta en un solo panel.',
      'El sistema consume datos desde una API REST interna y los muestra en gráficos interactivos hechos con Recharts. Incluye filtros por fecha, sucursal y categoría de producto, así como exportación de los reportes a Excel y PDF.',
      'Implementé un sistema de cache en el cliente con TanStack Query que reduce drásticamente las llamadas innecesarias al backend, y un modo oscuro como preferencia de cada usuario, persistente en localStorage.',
      'El proyecto fue un buen ejercicio de visualización de datos y, sobre todo, de comunicación con el cliente para entender exactamente qué métricas le servían a su día a día y cuáles eran ruido visual.',
    ],
  },

  // 33 — Proyecto API
  {
    id: 'p-api',
    layout: 'standard',
    title: 'Proyecto destacado: API de Inventario',
    subtitle: 'Servicio backend con roles y documentación',
    paragraphs: [
      'API REST construida con Express y TypeScript para un sistema de inventario de una empresa importadora. Maneja categorías, productos, lotes, movimientos de entrada y salida, y proveedores.',
      'Incluye autenticación con JWT, dos roles (ADMIN y OPERARIO) con permisos diferenciados, validación de entrada con Zod, y documentación auto-generada con Swagger.',
      'Una parte clave del diseño fue garantizar la trazabilidad de los movimientos de stock: cada cambio queda registrado con usuario, fecha y motivo, lo que permite reconstruir la historia de cualquier producto.',
      'El proyecto está testeado con Jest, alcanza un 78% de cobertura sobre la lógica de negocio y se despliega mediante GitHub Actions cada vez que se mergea un cambio a la rama principal.',
    ],
  },

  // 34 — Portafolio
  {
    id: 'p-port',
    layout: 'standard',
    title: 'Proyecto destacado: Portafolio personal',
    subtitle: 'Este mismo sitio que tienes en frente',
    paragraphs: [
      'El portafolio que estás revisando es mi carta de presentación técnica. Lo he construido desde cero con React 18, Vite, TypeScript y TailwindCSS, añadiendo animaciones suaves con Framer Motion.',
      'Quise hacer algo que no se sintiera "plantilla": tiene fondo animado con blobs gradientes, glassmorphism, scroll progress, navegación entre secciones, formulario de contacto funcional y este CV embebido que se descarga al vuelo.',
      'Uno de los retos divertidos fue precisamente este CV: usar @react-pdf/renderer para componer un documento de más de cincuenta páginas a partir de archivos de datos editables, sin depender de un PDF estático.',
      'El sitio está pensado para responder bien en cualquier dispositivo: probado en móvil, tablet y desktop, con atención puesta en la legibilidad y los tamaños de toque mínimos en pantallas pequeñas.',
    ],
  },

  // 35 — Comunicación
  {
    id: 'sf-com',
    layout: 'standard',
    title: 'Habilidad blanda: Comunicación',
    paragraphs: [
      'La habilidad de comunicarse bien suele estar subestimada en perfiles técnicos, pero la considero fundamental. He visto proyectos perfectamente programados fracasar por malentendidos entre equipo y cliente, y proyectos modestos triunfar porque todos estaban alineados.',
      'En mi forma de comunicarme aplico tres reglas simples: ir al punto, evitar jerga innecesaria cuando hablo con personas no técnicas, y confirmar acuerdos por escrito al final de cada conversación importante. Esa última costumbre me ha ahorrado más reuniones de las que puedo contar.',
      'Cuando escribo —tickets, mensajes, documentación— procuro que cualquier persona pueda entender el contexto sin haber estado en la conversación previa. Pongo siempre un mini-encabezado con el problema, otro con la solución propuesta y termino con los siguientes pasos.',
      'En reuniones, hablo solo cuando aporto algo concreto y escucho activamente al resto. Tomo notas, no por desconfianza sino porque después las uso para confirmar entendimientos. Considero la puntualidad una forma básica de respeto al tiempo del otro.',
    ],
  },

  // 36 — Equipo
  {
    id: 'sf-eq',
    layout: 'standard',
    title: 'Habilidad blanda: Trabajo en equipo',
    paragraphs: [
      'Disfruto trabajar en equipo cuando el equipo está bien armado. Eso significa, para mí, claridad de objetivos, división razonable de responsabilidades y confianza mutua para revisar el trabajo del otro sin que sea un problema personal.',
      'He participado en equipos pequeños (de dos a cinco personas) tanto en proyectos universitarios como freelance. En todos he procurado tomar tareas que no eran las más cómodas pero que el grupo necesitaba: integrar, escribir documentación, ordenar el repositorio, atender el feedback del cliente.',
      'Reconozco mis errores cuando los cometo y los anuncio cuanto antes para que no se acumulen. He aprendido que ocultar un problema lo encarece, mientras que admitirlo a tiempo permite resolverlo en equipo.',
      'En contextos de revisión de código, intento siempre dejar al menos un comentario positivo cuando reviso un PR. Sé que el oficio puede ser desgastante y que las críticas se digieren mejor cuando hay también reconocimiento.',
    ],
  },

  // 37 — Problemas
  {
    id: 'sf-prob',
    layout: 'standard',
    title: 'Habilidad blanda: Resolución de problemas',
    paragraphs: [
      'Frente a un problema técnico, mi primer instinto ya no es abrir un IDE: es leer con cuidado y reproducir. He aprendido que el tiempo invertido en entender el problema casi siempre se ahorra después al implementar la solución.',
      'Después de reproducir, formulo una hipótesis pequeña y la pruebo. Evito las soluciones que cambian muchas cosas a la vez porque me obligan a saber cuál de los cambios resolvió el problema.',
      'Cuando un problema se resiste, hago lo que muchos llaman "depuración con patito de hule": le explico el problema en voz alta a un compañero o, en su defecto, lo escribo en un documento. La mayoría de las veces, al terminar de explicar ya tengo la solución.',
      'No me da pudor pedir ayuda cuando llevo demasiado tiempo bloqueado. Aprendí que la persona que te ayuda no te juzga por la pregunta, sino por la calidad del contexto que le diste antes de preguntar.',
    ],
  },

  // 38 — Aprendizaje
  {
    id: 'sf-apr',
    layout: 'standard',
    title: 'Habilidad blanda: Aprendizaje continuo',
    paragraphs: [
      'La tecnología cambia rápido, pero los fundamentos cambian poco. Por eso intento dividir mi tiempo de aprendizaje entre lo nuevo (un framework, una herramienta) y lo de base (algoritmos, redes, sistemas operativos, diseño).',
      'Llevo un cuaderno digital donde tomo notas cortas de las cosas que aprendo cada semana. No son tutoriales, son apuntes para mí. Eso me obliga a procesar lo que estudié y luego puedo volver a leerlo cuando lo necesite.',
      'Suscripciones que sigo con frecuencia: el newsletter de Josh Comeau sobre frontend, el podcast Syntax.fm, el blog de Kent C. Dodds, los videos de Theo y Lee Robinson, y la cuenta de Twitter de Dan Abramov cuando publica reflexiones técnicas.',
      'Considero que aprender enseñando es de las técnicas más efectivas. Por eso explico lo que aprendo en mis publicaciones de LinkedIn y, cuando puedo, también a compañeros de la universidad. Forzarme a explicar me obliga a entender mejor.',
    ],
  },

  // 39 — Idiomas
  {
    id: 'idiomas',
    layout: 'skillBars',
    title: 'Idiomas',
    intro: 'Niveles autoevaluados según el Marco Común Europeo de Referencia (MCER).',
    skills: [
      { name: 'Español — nativo', level: 100, note: 'Lengua materna' },
      { name: 'Inglés — B2 intermedio alto', level: 80, note: 'Aptis 2023, lectura y escucha técnica fluidas' },
      { name: 'Portugués — A2 básico', level: 35, note: 'Estudios autodidactas en curso' },
      { name: 'Quechua — A1 inicial', level: 18, note: 'Comprensión básica regional' },
    ],
  },

  // 40 — Logros
  {
    id: 'logros',
    layout: 'items',
    title: 'Logros y reconocimientos',
    items: [
      { title: 'Tercer lugar Hackathon Universitaria', period: '2024', description: 'Competencia de 36 horas con 28 equipos participantes. Construimos un MVP de aplicación de transporte colaborativo.' },
      { title: 'Tercio superior universitario', period: '2022 — actualidad', description: 'Promedio ponderado acumulado de 17/20, manteniéndome dentro del tercio superior de la facultad de ingeniería desde el segundo ciclo.' },
      { title: 'Mención honrosa secundaria', period: '2021', description: 'Reconocimiento al esfuerzo y promedio académico durante el último año de educación secundaria.' },
      { title: 'Primer puesto Olimpiada Matemática Regional', period: '2019', description: 'Participación destacada en la olimpiada matemática a nivel regional, etapa colegial.' },
      { title: 'Becario parcial — Bootcamp Full Stack', period: '2024', description: 'Beca por desempeño otorgada al ingresar al bootcamp intensivo de JavaScript.' },
    ],
  },

  // 41 — Publicaciones
  {
    id: 'publicaciones',
    layout: 'items',
    title: 'Publicaciones y artículos',
    intro: 'Contenido propio que he publicado para compartir lo que aprendo.',
    items: [
      { title: 'Tres formas de manejar formularios en React', period: 'Medium · 2025', description: 'Artículo técnico comparando useState casero, React Hook Form y server actions, con métricas de rendimiento.' },
      { title: 'PostgreSQL para devs que vienen de MongoDB', period: 'dev.to · 2025', description: 'Guía introductoria al modelo relacional para quienes estaban habituados a esquemas flexibles.' },
      { title: 'Cómo armé mi portafolio en una semana', period: 'LinkedIn · 2026', description: 'Recorrido del proceso técnico y de diseño del portafolio personal, incluyendo decisiones que descarté.' },
      { title: 'Notas sobre TypeScript que ojalá hubiese leído antes', period: 'Blog personal · 2025', description: 'Compilación de utilidades y patrones de TypeScript que descubrí tarde y que ahora uso a diario.' },
    ],
  },

  // 42 — Charlas
  {
    id: 'charlas',
    layout: 'items',
    title: 'Charlas y conferencias',
    intro: 'Eventos donde he hablado o asistido como participante activo.',
    items: [
      { title: 'Charla universitaria: introducción a React', period: 'Octubre 2024', description: 'Sesión de una hora dictada a estudiantes de quinto ciclo para introducirlos a los fundamentos de React y crear su primer componente.' },
      { title: 'JSConf Latam — asistente', period: '2024', description: 'Asistencia presencial a la conferencia regional de JavaScript, con foco en charlas sobre rendimiento web y herramientas modernas.' },
      { title: 'PostgreSQL Day Perú — asistente', period: '2025', description: 'Evento dedicado a PostgreSQL en Lima, donde compartí impresiones con la comunidad local.' },
      { title: 'Meetup React Perú — ponente invitado', period: 'Febrero 2026', description: 'Charla corta de quince minutos sobre cómo organizar un proyecto React mediano y mantener la cordura del repositorio.' },
    ],
  },

  // 43 — Open Source
  {
    id: 'oss',
    layout: 'bullets',
    title: 'Contribuciones open source',
    intro: 'Aportes a la comunidad de software libre.',
    bullets: [
      'Corrección de tipos en un paquete pequeño de utilidades para fechas en formato hispano.',
      'Mejora de documentación de un componente UI poco usado de una librería de Tailwind.',
      'Reporte detallado y reproducción mínima de un bug en TanStack Query relacionado con cache invalidation.',
      'Plantilla pública de Vite + React + Tailwind + shadcn/ui con auth lista y deploy a Vercel, usada por la comunidad universitaria.',
      'Pequeño paquete npm propio (utilidades de formato de moneda peruana) publicado y mantenido.',
      'Traducción al español de la documentación de un componente de Headless UI.',
    ],
  },

  // 44 — Voluntariado
  {
    id: 'voluntariado',
    layout: 'items',
    title: 'Voluntariado y comunidad',
    items: [
      { title: 'Mentor en programa de iniciación a la programación', period: '2024 — 2025', description: 'Acompañé a tres estudiantes de primer ciclo durante seis meses cada uno, ayudándoles a entender lógica de programación, control de versiones y a desarrollar su primer proyecto personal.' },
      { title: 'Voluntario en feria tecnológica del distrito', period: '2024', description: 'Atendí un stand de orientación vocacional para escolares interesados en estudiar carreras vinculadas a la informática.' },
      { title: 'Organizador de meetup local de desarrolladores', period: '2025 — actualidad', description: 'Junto a otros tres voluntarios coordino una vez al mes un meetup informal en un café de Lima donde se discuten temas de desarrollo web.' },
    ],
  },

  // 45 — Hobbies
  {
    id: 'hobbies',
    layout: 'bullets',
    title: 'Intereses y hobbies',
    intro: 'Cosas que disfruto fuera del teclado.',
    bullets: [
      'Fotografía urbana — recorro Lima y otras ciudades buscando escenas cotidianas. Edito en Lightroom y publico ocasionalmente en mi Instagram personal.',
      'Lectura de no ficción — libros sobre productos, diseño, historia y biografías. Leo entre uno y dos libros al mes.',
      'Ajedrez — juego online tres o cuatro veces por semana. Soy 1500 ELO rápido en chess.com, intentando subir poco a poco.',
      'Senderismo — paseos de fin de semana por los cerros cercanos a Lima cuando el cielo lo permite.',
      'Cocina casera — me gusta probar recetas nuevas. Especialidad personal: pasta fresca hecha en casa.',
      'Música — escucho mucho jazz instrumental y bandas sonoras de películas. Estoy aprendiendo guitarra a paso lento.',
      'Idiomas — voy aprendiendo portugués por curiosidad personal y para acercarme a la literatura brasileña.',
      'Café — tema serio. Cafetera de émbolo y molinillo manual en casa. Sigo con interés a los tostadores peruanos pequeños.',
    ],
  },

  // 46 — Lecturas
  {
    id: 'lecturas',
    layout: 'bullets',
    title: 'Lecturas que me han marcado',
    intro: 'Libros que han influido en mi forma de programar y de pensar.',
    bullets: [
      'The Pragmatic Programmer — David Thomas, Andrew Hunt.',
      'Clean Code — Robert C. Martin (con espíritu crítico hacia algunas ideas, pero útil).',
      'The Mythical Man-Month — Fred Brooks.',
      'Designing Data-Intensive Applications — Martin Kleppmann.',
      'Refactoring — Martin Fowler.',
      'Don\'t Make Me Think — Steve Krug, lectura básica sobre usabilidad web.',
      'The Design of Everyday Things — Donald Norman.',
      'Atomic Habits — James Clear, fuera del tema técnico pero muy aplicable a la disciplina personal.',
      'Show Your Work — Austin Kleon, sobre la importancia de compartir lo que uno aprende.',
      'Deep Work — Cal Newport, sobre cómo proteger el tiempo de concentración.',
    ],
  },

  // 47 — Productividad
  {
    id: 'prod',
    layout: 'bullets',
    title: 'Herramientas de productividad',
    intro: 'Software que uso para organizar mi día.',
    bullets: [
      'Notion — base de notas, plantillas para proyectos, lista de lecturas y bitácora diaria de aprendizaje.',
      'Linear — gestión de tareas en proyectos serios. Me gusta su rapidez y su sentido del diseño.',
      'Trello — tareas personales con kanban simple.',
      'Raycast — launcher en macOS para todo. Indispensable.',
      'Obsidian — notas locales en Markdown con enlaces internos, ideal para reflexiones y apuntes largos.',
      'Cal.com — para coordinar reuniones sin la fricción del ida y vuelta de correos.',
      'Vivaldi y Arc — navegadores que uso para separar entornos de trabajo personales y de cliente.',
      'Toggl — registro de horas trabajadas para clientes, útil al facturar.',
    ],
  },

  // 48 — Metodologías
  {
    id: 'metod',
    layout: 'twoColumn',
    title: 'Metodologías de trabajo',
    left: {
      heading: 'Lo que aplico habitualmente',
      bullets: [
        'Scrum en equipos pequeños, con sprints de una o dos semanas.',
        'Kanban en proyectos personales y freelance con flujo continuo.',
        'Trunk-based development con ramas cortas (1-3 días máximo).',
        'Pull requests pequeños, revisables en menos de quince minutos.',
        'Conventional Commits cuando el equipo los adopta.',
        'Documentación viva en el mismo repositorio (Markdown junto al código).',
        'Dailies cortas, máximo quince minutos, foco en bloqueos.',
        'Retrospectivas honestas al final de cada sprint o entrega.',
      ],
    },
    right: {
      heading: 'Lo que evito',
      bullets: [
        'Ramas long-lived sin merge frecuente a main.',
        'Reuniones sin agenda escrita previa.',
        'Tickets vagos con descripciones de una línea.',
        'Refactorizaciones grandes mezcladas con features nuevas.',
        'Optimizaciones prematuras sin medir.',
        'Decisiones técnicas tomadas sin escribir un mínimo de contexto.',
        'Documentación que vive en herramientas externas y se desincroniza.',
        'Multitarea constante que fragmenta la atención.',
      ],
    },
  },

  // 49 — Disponibilidad
  {
    id: 'disp',
    layout: 'profile',
    title: 'Disponibilidad y modalidad',
    rows: [
      { label: 'Modalidad preferida', value: 'Remoto o híbrido' },
      { label: 'Disponibilidad horaria', value: 'Jornada completa, hasta 45 h/semana' },
      { label: 'Zona horaria base', value: 'GMT-5 (Lima, Perú)' },
      { label: 'Solapamiento posible con LATAM/EEUU', value: '08:00 — 18:00 hora local' },
      { label: 'Disponibilidad para viajar', value: 'Sí, dentro y fuera del país' },
      { label: 'Inicio en nuevo empleo', value: 'Disponibilidad inmediata, 15 días de aviso si fuese necesario' },
      { label: 'Modalidad contractual', value: 'Planilla, recibos por honorarios o contrato freelance' },
      { label: 'Rango salarial referencial', value: 'Conversable según rol y modalidad' },
      { label: 'Prácticas / proyectos paralelos', value: 'Compatible con un proyecto freelance pequeño al mes' },
    ],
  },

  // 50 — Referencias
  {
    id: 'refs',
    layout: 'items',
    title: 'Referencias profesionales',
    intro: 'Personas con las que he trabajado y que pueden hablar de mi desempeño. Datos disponibles bajo solicitud previa.',
    items: [
      { title: 'María Fernández — Fundadora, estudio de software local', period: '2024', description: 'Fue mi jefa directa durante mi primera experiencia formal. Puede dar referencia sobre mi capacidad técnica y mi actitud frente a la mentoría.' },
      { title: 'Carlos Ramírez — Líder técnico, empresa edtech', period: '2023', description: 'Tutor durante mi práctica preprofesional. Puede comentar sobre mi adaptación a un equipo profesional y mi disciplina con las revisiones de código.' },
      { title: 'Lucía Mendoza — Cliente freelance, sector veterinario', period: '2025', description: 'Cliente del panel administrativo veterinario. Puede hablar de mi comunicación con cliente no técnico y del cumplimiento de plazos pactados.' },
      { title: 'Profesor Andrés Quispe — Asignatura de Bases de Datos', period: '2024', description: 'Profesor universitario que dirigió mi proyecto académico de Sistema de Biblioteca. Puede dar referencia académica.' },
    ],
  },

  // 51 — Cierre
  {
    id: 'cierre',
    layout: 'standard',
    title: 'Cierre y contacto',
    paragraphs: [
      'Si ha llegado hasta aquí, gracias por dedicar el tiempo a revisar mi CV completo. He intentado que cada página aporte algo distinto y que el documento, en su conjunto, sea fiel a quien soy hoy como profesional.',
      'Si algo de lo leído le ha interesado y desea conversar, puede encontrarme por cualquiera de los siguientes medios. Respondo mensajes en menos de veinticuatro horas en días laborables.',
      'Correo: jcorcuer4@gmail.com',
      'Teléfono y WhatsApp: +51 986 501 081',
      'LinkedIn: linkedin.com/in/juancorcuera',
      'GitHub: github.com/juancorcuera',
      'Sitio web: juancorcuera.dev',
      'Estoy abierto a oportunidades en Lima, en otras ciudades del Perú y de forma remota. Si lo que busca es un desarrollador comprometido, ordenado y con ganas de crecer junto a un buen equipo, estaré encantado de conversar.',
      'Atentamente, Joseph.',
    ],
  },
];
