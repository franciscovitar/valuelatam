// lib/data.js

export const navigation = [
  {
    name: "Soluciones",
    children: [
      {
        name: "Financiamiento",
        href: "/soluciones/financiamiento",
        description: "Préstamos, factoring y créditos comerciales",
      },
      {
        name: "Inversiones & Liquidez",
        href: "/soluciones/inversiones-liquidez",
        description: "Gestión de carteras, instrumentos y cash management",
      },
      {
        name: "Pagos Internacionales",
        href: "/soluciones/pagos-internacionales",
        description: "Transferencias, pagos y financiamiento import/export",
      },
    ],
  },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Corporativo", href: "/corporativo" },
  { name: "¿Cómo Funciona?", href: "/como-funciona" },
  // { name: "Contacto", href: "/contacto" },
];

export const solutions = [
  {
    id: "financiamiento",
    icon: "💰",
    title: "FINANCIAMIENTO EMPRESARIAL",
    description:
      "Estructuración de financiamiento a través del mercado de capitales, avales SGR, Leasing y programas de financiamiento productivo para optimizar capital de trabajo e inversión.",
    features: ["Préstamos directos", "Factoring", "Créditos comerciales"],
    color: "blue",
    image: "/2.jpg",
  },
  {
    id: "inversiones-liquidez",
    icon: "📈",
    title: "INVERSIONES & GESTION DE LIQUIDEZ",
    description:
      "Diseño de estrategias de inversión y administración de liquidez para empresas que buscan proteger su capital y optimizar el rendimiento de sus excedentes.",
    features: [
      "Administración de carteras",
      "Instrumentos diversos",
      "Cash management",
    ],
    color: "light",
    image: "/solution22.jpg",
  },
  {
    id: "pagos-internacionales",
    icon: "🌐",
    title: "PAGOS INTERNACIONALES",
    description:
      "Estructuración de pagos y transferencias al exterior mediante soluciones financieras como factoring internacional y subrogación de deuda.",
    features: [
      "Transferencias simplificadas",
      "Pagos internacionales",
      "Financiamiento competitivo",
    ],
    color: "violet",
    image: "/solution3.jpg",
  },
];
// Team data

// Steps/methodology data
export const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Relevamiento financiero y entendimiento de tu operación para detectar prioridades y oportunidades.",
  },
  {
    step: "02",
    title: "Estrategia con alternativas",
    description:
      "Diseño de soluciones a medida evaluando costos, plazos, riesgos y viabilidad de ejecución.",
  },
  {
    step: "03",
    title: "Ejecución acompañada",
    description:
      "Implementación junto a tu equipo de finanzas y tesorería, de punta a punta.",
  },
  {
    step: "04",
    title: "Seguimiento y ajuste",
    description:
      "Monitoreo y ajustes para sostener eficiencia, responder al mercado y capturar oportunidades.",
  },
];

// Why choose us data (alineado a diferenciales reales)
export const whyUs = [
  {
    icon: "🎯",
    title: "Acceso al ecosistema financiero completo",
    description:
      "Reunimos en un solo lugar alternativas provenientes del mercado de capitales, entidades financieras, SGR y soluciones de leasing.",
  },
  {
    icon: "📚",
    title: "Estructuración estratégica",
    description:
      "Analizamos la situación financiera de cada empresa y diseñamos la estructura de financiamiento o inversión más conveniente.",
  },
  {
    icon: "🤝",
    title: "Acompañamiento en todo el proceso",
    description:
      "No solo acercamos las herramientas. Guiamos cada etapa hasta concretar la operación.",
  },
  {
    icon: "🔍",
    title: "Proceso simple y digital",
    description:
      "Contamos con una responsable dedicada al onboarding que organiza la documentación y acompaña cada operación desde el inicio.",
  },
];

// Case studies data (más realista, sin prometer números ni casos “ficticios”)
export const caseStudies = [
  {
    title: "Orden de flujo",
    description:
      "Ordenamiento de tesorería y alternativas para mejorar previsibilidad y toma de decisiones.",
    category: "Financiamiento",
    results: "Mayor claridad operativa y ejecución más ágil",
  },
  {
    title: "Estructura de financiamiento",
    description:
      "Evaluación de alternativas (banca + mercado) para acompañar crecimiento o expansión.",
    category: "Financiamiento",
    results: "Opciones viables con plazos y riesgos acordes",
  },
  {
    title: "Estrategia de liquidez",
    description:
      "Gestión de liquidez y cartera para optimizar capital de trabajo en contextos volátiles.",
    category: "Inversiones & Liquidez",
    results: "Mejor uso de caja y gestión de riesgo",
  },
];

// Team data (alineado a bios reales, corto)
export const team = [
  {
    id: "mauricio-maggio",
    name: "Mauricio Maggio",
    role: "Jefe de Estrategia | Socio",
    description:
      "Profesional con amplia experiencia en estructuración de financiamiento para empresas PyME, asesoría en inversiones y optimización de liquidez, integrando herramientas del sistema financiero y del mercado de capitales.",
    image: "/mauricio.jpeg",
    linkedin: "https://www.linkedin.com/in/mauricio-maggio-41b46534a",
  },
  {
    id: "claudia-abeti",
    name: "Claudia Abeti",
    role: "Relaciones de Banca Corporativa | Socia",
    description:
      "Más de 30 años de experiencia en banca, con trayectoria como Tesorera, Oficial CRM y RBB, Gerente de Sucursal y especialista en financiamiento PyME a través de banca tradicional y préstamos sindicados.",
    image: "/mujer.jpeg",
    linkedin: "https://www.linkedin.com/in/claudiaabeti/",
  },
];
// FAQ data (alineado a “on demand”, MeGRAs, sin claims rígidos)
export const faqs = [
  {
    question: "¿Qué tipo de empresas pueden acceder a nuestros servicios?",
    answer:
      "Trabajamos con PyMEs y empresas medianas y grandes (MeGRAs) de todos los sectores que buscan financiamiento, optimizar liquidez o gestionar inversiones.",
  },
  {
    question: "¿Cuánto tiempo toma el proceso de diagnóstico?",
    answer:
      "Depende de la complejidad del caso y la información disponible. En general, definimos un plan de trabajo claro desde el inicio para avanzar rápido.",
  },
  {
    question: "¿Trabajan con empresas de todos los sectores?",
    answer:
      "Sí. Adaptamos cada solución a la industria, la estructura de la empresa y su operación financiera.",
  },
  {
    question: "¿Ofrecen asesoramiento continuo?",
    answer:
      "Sí. Podemos trabajar por proyecto o con seguimiento, integrándonos como extensión del equipo interno.",
  },
  {
    question: "¿Cómo se estructura el modelo de honorarios?",
    answer:
      "Es un servicio on demand: se define según alcance (diagnóstico, estructuración, ejecución y/o seguimiento) con un esquema transparente acordado previamente.",
  },
];

export const financingServices = [
  {
    title: "Financiamiento en mercado de capitales",
    description:
      "Estructuración de operaciones utilizando instrumentos disponibles en el mercado.",
    features: [
      "Descuento de eCheq propios y de terceros",
      "Factoring y descuento de Facturas de Crédito Electrónicas (FCE)",
      "Cauciones bursátiles",
      "Financiamiento estructurado con ALyCs",
      "Emisión de Obligaciones Negociables PyME",
      "Estrategias de financiamiento estructurado",
    ],
  },
  {
    title: "Financiamiento con aval de SGR",
    description:
      "Trabajamos con distintas Sociedades de Garantía Recíproca para mejorar el perfil crediticio y facilitar el acceso al financiamiento.",
    features: [
      "Obtener mejores tasas",
      "Acceder a mayores montos de financiamiento",
      "Ampliar las alternativas dentro del sistema financiero",
    ],
  },
  {
    title: "Leasing financiero",
    description:
      "Estructuración de operaciones de leasing para financiar la adquisición de maquinaria, equipamiento o vehículos productivos.",
    features: [
      "Leasing de maquinaria y equipamiento",
      "Leasing de vehículos productivos",
      "Financiamiento de inversión a largo plazo",
    ],
  },
  {
    title: "Estructuración de líneas de crédito productivas",
    description:
      "Asistimos a empresas en la obtención de líneas de financiamiento vinculadas al desarrollo productivo.",
    features: [
      "Líneas provenientes de organismos de financiamiento",
      "Programas de promoción productiva",
      "Plazos más largos y tasas más competitivas",
    ],
  },
];
// Investment services data (copy alineado a la propuesta real)
export const investmentServices = [
  {
    title: "Administración de carteras",
    description:
      "Gestión de inversiones empresariales con foco en diversificación, preservación de capital y seguimiento permanente de la cartera.",
    features: [
      "Análisis de perfil de riesgo",
      "Diversificación de instrumentos",
      "Monitoreo y ajuste de cartera",
    ],
  },
  {
    title: "Gestión de liquidez",
    description:
      "Diseño de estrategias para administrar los excedentes financieros de la empresa según horizonte y necesidades de caja.",
    features: [
      "Planificación de liquidez",
      "Gestión de excedentes transitorios",
      "Estrategias de corto y mediano plazo",
    ],
  },
  {
    title: "Optimización de tesorería",
    description:
      "Uso de instrumentos del mercado de capitales para maximizar el rendimiento de la liquidez empresarial.",
    features: [
      "Fondos Comunes de Inversión (FCI)",
      "Cauciones bursátiles",
      "Estrategias de cash management",
    ],
  },
];

// Investment instruments (alineo nombres a los que mencionaste, sin alargar)
export const investmentInstruments = [
  "Deuda soberana",
  "Deuda subsoberana",
  "Valores de corto plazo",
  "FCIs (asset management)",
  "NDFs (cobertura cambiaria)",
  "ONs",
  "Fideicomisos",
  "Acciones",
  "Plazo fijo",
  "Pagarés",
  "Cheques diferidos",
];

// Commerce services data (sumo el concepto real sin extender)
export const commerceServices = [
  {
    title: "Transferencias internacionales simplificadas",
    description:
      "Acceso ágil a transferencias con menor fricción operativa en comercio exterior.",
    features: [
      "Proceso simplificado",
      "Tiempos optimizados",
      "Gestión operativa",
    ],
  },
  {
    title: "Pagos internacionales eficientes",
    description:
      "Pagos ágiles para mantener relaciones comerciales fluidas en múltiples divisas.",
    features: [
      "Múltiples divisas",
      "Ejecución rápida",
      "Seguimiento operativo",
    ],
  },
  {
    title: "Financiación competitiva para importadores",
    description:
      "Préstamos en moneda extranjera y crédito importador/exportador según necesidad.",
    features: [
      "Moneda extranjera",
      "Crédito importador",
      "Alternativas a medida",
    ],
  },
];

// Mock insights data (más evergreen y menos “noticias 2024”)
export const insights = [
  {
    id: 1,
    title: "Tendencias de financiamiento para PyMEs",
    excerpt:
      "Panorama de alternativas y criterios para elegir la mejor opción.",
    category: "Financiamiento",
    date: "2024-02-15",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 2,
    title: "Liquidez en contextos volátiles",
    excerpt:
      "Ideas prácticas para sostener caja y decidir con más previsibilidad.",
    category: "Liquidez",
    date: "2024-02-10",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 3,
    title: "Comercio exterior sin fricción operativa",
    excerpt:
      "Claves para transferencias y pagos internacionales más eficientes.",
    category: "Comercio Exterior",
    date: "2024-02-05",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 4,
    title: "Instrumentos: cómo armar una cartera simple",
    excerpt: "Comparativa de instrumentos según horizonte y perfil de riesgo.",
    category: "Inversiones",
    date: "2024-01-30",
    readTime: "8 min",
    featured: false,
  },
  {
    id: 5,
    title: "Factoring: liquidez con cuentas por cobrar",
    excerpt: "Cuándo conviene y qué mirar para mejorar capital de trabajo.",
    category: "Financiamiento",
    date: "2024-01-25",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 6,
    title: "Riesgo cambiario: cobertura y decisiones",
    excerpt:
      "Herramientas como NDFs para mitigar volatilidad en operaciones externas.",
    category: "Comercio Exterior",
    date: "2024-01-20",
    readTime: "9 min",
    featured: false,
  },
];
