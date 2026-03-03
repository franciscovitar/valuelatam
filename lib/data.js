// lib/data.js

// Navigation data
export const navigation = [
  {
    name: "Soluciones",
    children: [
      {
        name: "Financiamiento",
        href: "/soluciones/financiamiento",
        description: "Préstamos, descuento de documentos y créditos",
      },
      {
        name: "Inversiones & Liquidez",
        href: "/soluciones/inversiones-liquidez",
        description: "Renta fija, diversificación y cash management",
      },
      {
        name: "Comercio Exterior",
        href: "/soluciones/comercio-exterior",
        description: "Transferencias, pagos y financiación import/export",
      },
    ],
  },
  { name: "Empresa", href: "/empresa" },
  // { name: "Insights", href: "/insights" },
  { name: "Contacto", href: "/contacto" },
];

// Solutions data (IDs alineados a slugs)
export const solutions = [
  {
    id: "financiamiento",
    icon: "💰",
    title: "Financiamiento",
    description:
      "Acceso a alternativas de banca y mercado de capitales para mejorar tu estructura de financiamiento y flujo de caja.",
    features: ["Préstamos directos", "Factoring", "Créditos comerciales"],
    color: "blue",
    image: "/public/contacto.png", // opcional: "/contacto.png"
  },
  {
    id: "inversiones-liquidez",
    icon: "📈",
    title: "Inversiones & Liquidez",
    description:
      "Gestión de inversiones y liquidez con renta fija, diversificación y cobertura, según horizonte y perfil de riesgo.",
    features: [
      "Administración de carteras",
      "Instrumentos diversos",
      "Cash management",
    ],
    color: "green",
    image: "/public/contacto.png", // opcional: "/contacto.png"
  },
  {
    id: "comercio-exterior",
    icon: "🌐",
    title: "Comercio Exterior",
    description:
      "Operaciones internacionales más simples: transferencias, pagos y alternativas de financiación para importación y exportación.",
    features: [
      "Transferencias simplificadas",
      "Pagos internacionales",
      "Financiación competitiva",
    ],
    color: "purple",
    image: "/public/contacto.png", // opcional: "/contacto.png"
  },
];

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
    title: "Experiencia comprobada",
    description:
      "Más de 15 años en banca, mercado de capitales y gestión financiera empresarial.",
  },
  {
    icon: "📚",
    title: "Formación sólida",
    description:
      "Finanzas, economía y contabilidad aplicada, con actualización constante regulatoria y de mercado.",
  },
  {
    icon: "🤝",
    title: "Ecosistema financiero",
    description:
      "Vínculos con bancos, ALyCs, SGRs y partners para acelerar alternativas ejecutables.",
  },
  {
    icon: "🔍",
    title: "Research propio",
    description:
      "Análisis y reportes periódicos para anticipar escenarios y actuar con rapidez.",
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
      "Estructuración de financiamiento, asesoría en inversiones y optimización de liquidez para PyMEs.",
    image: "/mauricio.jpeg",
    linkedin: "#",
  },
  {
    id: "claudia-abeti",
    name: "Claudia Abeti",
    role: "Relaciones de Banca Corporativa | Socia",
    description:
      "30+ años en banca corporativa y tesorería; financiamiento PyME tradicional y préstamos sindicados.",
    image: "/mujer.jpeg",
    linkedin: "#",
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

// Financing services data (ajuste de wording para que sea más “real”)
export const financingServices = [
  {
    title: "Préstamos directos",
    description:
      "Acceso rápido a capital para facilitar proyectos o necesidades operativas.",
    features: [
      "Evaluación y estructuración",
      "Condiciones alineadas al flujo",
      "Acompañamiento en ejecución",
    ],
  },
  {
    title: "Descubiertos en cuenta corriente",
    description:
      "Flexibilidad para administrar picos de caja y capital de trabajo.",
    features: [
      "Disponibilidad inmediata",
      "Gestión y optimización de líneas",
      "Renovación según condiciones",
    ],
  },
  {
    title: "Descuento de documentos",
    description:
      "Liquidez a partir de cuentas por cobrar y documentos comerciales.",
    features: [
      "Proceso ágil",
      "Instrumentación según operación",
      "Mejora del flujo de caja",
    ],
  },
  {
    title: "Préstamos sindicados",
    description: "Financiamiento de mayor envergadura con múltiples entidades.",
    features: [
      "Montos significativos",
      "Plazos extendidos",
      "Estructuras a medida",
    ],
  },
  {
    title: "Factoring",
    description:
      "Acceso a financiamiento de capital de trabajo usando cuentas por cobrar.",
    features: [
      "Estructuración según instrumento",
      "Optimización de capital de trabajo",
      "Acompañamiento operativo",
    ],
    chips: ["E-Cheqs", "Facturas", "Contratos", "Cheques", "Pagarés"],
  },
  {
    title: "Créditos comerciales",
    description:
      "Anticipación de cartera y flujos futuros vinculados a cheques, facturas o contratos.",
    features: [
      "Basado en contratos",
      "Evaluación de flujos",
      "Estructura alineada a la operación",
    ],
  },
];

// Investment services data (copy alineado a la propuesta real)
export const investmentServices = [
  {
    title: "Administración de carteras",
    description:
      "Gestión de inversiones con foco en renta fija, diversificación y cobertura.",
    features: ["Análisis de perfil", "Diversificación", "Monitoreo y ajuste"],
  },
  {
    title: "Gestión de liquidez",
    description: "Optimización de caja, pagos y cobranzas con cash management.",
    features: ["Cuenta remunerada", "Adelantos c/c", "FCIs cash management"],
  },
];

// Investment instruments (alineo nombres a los que mencionaste, sin alargar)
export const investmentInstruments = [
  "Deuda soberana/subsoberana",
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
    title: "Financiación competitiva import/export",
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
