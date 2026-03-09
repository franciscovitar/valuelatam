import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import styles from "./Corporativo.module.scss";
import Image from "next/image";
import foto from "../../public/empresa.jpg";

export const metadata = {
  title: "Corporativo | Value Latam",
  description:
    "Soluciones financieras corporativas para el desarrollo y expansión de empresas: consultoría financiera, cadena de valor, scoring crediticio y herramientas de soporte.",
};

const corporateSolutions = [
  {
    icon: "◔",
    title: "Consultoría financiera",
    description:
      "Asistimos a las empresas en el análisis y diseño de su estrategia financiera, identificando oportunidades para optimizar su estructura de capital y ampliar sus alternativas de financiamiento.",
    features: [
      "Análisis de la situación financiera actual",
      "Desarrollo del caso de negocio para nuevas estructuras de financiamiento",
      "Optimización del capital de trabajo",
      "Identificación de oportunidades en mercado de capitales y sistema financiero",
    ],
  },
  {
    icon: "◎",
    title: "Cadena de valor",
    description:
      "Diseñamos estructuras financieras que permiten a las empresas ofrecer financiamiento a sus clientes o proveedores, fortaleciendo su cadena de valor y ampliando las posibilidades de crecimiento del negocio.",
    features: [
      "Programas de financiamiento para clientes",
      "Soluciones financieras para proveedores",
      "Integración con mercado de capitales, entidades financieras y SGR",
      "Optimización financiera de la cadena de valor",
    ],
  },
  {
    icon: "◌",
    title: "Sistema de scoring y análisis crediticio",
    description:
      "Diseñamos softwares de análisis crediticio que permiten evaluar el riesgo financiero de los clientes de la empresa y definir políticas de financiamiento adecuadas. Estas herramientas permiten determinar hasta qué nivel es conveniente financiar a cada cliente, reduciendo el riesgo y mejorando la calidad de las operaciones.",
    features: [
      "Evaluación financiera automatizada de clientes",
      "Definición de límites de crédito",
      "Modelos de scoring crediticio",
      "Herramientas para mitigar el riesgo en operaciones financiadas",
    ],
  },
  {
    icon: "◈",
    title: "Herramientas y soporte",
    description:
      "Contamos con herramientas tecnológicas que permiten acompañar la implementación de las soluciones desarrolladas y mejorar la gestión financiera de las empresas.",
    features: [
      "Soluciones de recaudación digital",
      "Integración con PSP para pagos y cobranzas",
      "Infraestructura de pagos a través de Value Pay",
      "Soporte operativo para la implementación de soluciones financieras",
    ],
  },
];

export default function CorporativoPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroTop}>
              <div className={styles.heroContent}>
                <span className={styles.heroPill}>Corporativo</span>

                <h1 className={styles.heroTitle}>
                  Soluciones financieras para el{" "}
                  <span className={styles.heroHighlight}>
                    desarrollo y expansión
                  </span>{" "}
                  de tu negocio
                </h1>

                <p className={styles.heroText}>
                  En Value Latam acompañamos a las empresas en el diseño de
                  estrategias financieras, el desarrollo de soluciones de
                  financiamiento para su cadena de valor y la implementación de
                  herramientas tecnológicas que permiten ampliar su capacidad
                  financiera.
                </p>
              </div>

              <div className={styles.heroCta}>
                <Button href="/contacto" size="md" className={styles.heroBtn}>
                  Agendar una llamada
                  <span className={styles.heroBtnIcon} aria-hidden="true">
                    ↗
                  </span>
                </Button>
              </div>
            </div>

            <div className={styles.heroMedia} aria-hidden="true">
              <Image
                className={styles.heroImage}
                src={foto}
                alt=""
                width={1400}
                height={700}
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Intro / enfoque */}
      {/* <section className={styles.about}>
        <Container>
          <div className={styles.aboutGrid}>
            <div>
              <SectionTitle
                subtitle="Enfoque corporativo"
                title="Estrategia, financiamiento y tecnología aplicada"
                highlight="tecnología"
              />

              <div className={styles.aboutText}>
                <p>
                  Trabajamos junto a empresas que buscan fortalecer su
                  estructura financiera, ampliar sus alternativas de fondeo y
                  desarrollar soluciones más eficientes para su operación
                  comercial.
                </p>

                <p>
                  Nuestro enfoque combina{" "}
                  <strong>consultoría financiera</strong>, diseño de esquemas
                  para la <strong>cadena de valor</strong>, herramientas de{" "}
                  <strong>análisis crediticio</strong> e infraestructura para la
                  implementación operativa de cada solución.
                </p>

                <p>
                  De esta manera, ayudamos a transformar necesidades financieras
                  en estructuras concretas, escalables y alineadas al
                  crecimiento del negocio.
                </p>
              </div>
            </div>

            <aside
              className={styles.statsCard}
              aria-label="Resumen corporativo"
            >
              <h3 className={styles.statsTitle}>En resumen</h3>

              <div className={styles.statsGrid}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>4 frentes</span>
                  <span className={styles.statLabel}>
                    Consultoría, cadena de valor, scoring y soporte
                  </span>
                </div>

                <div className={styles.stat}>
                  <span className={styles.statValue}>End-to-end</span>
                  <span className={styles.statLabel}>
                    Desde el diseño de la estrategia hasta la implementación
                  </span>
                </div>

                <div className={styles.stat}>
                  <span className={styles.statValue}>Value Pay</span>
                  <span className={styles.statLabel}>
                    Infraestructura para pagos, cobranzas y recaudación digital
                  </span>
                </div>
              </div>

              <div className={styles.statsCta}>
                <Button href="/contacto" size="md">
                  Hablar con el equipo
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section> */}

      {/* Soluciones */}
      <section className={styles.solutions}>
        <Container>
          <SectionTitle
            subtitle="Nuestras soluciones"
            title="Cómo acompañamos a las empresas"
            highlight="empresas"
            centered
          />

          <div className={styles.solutionsGrid}>
            {corporateSolutions.map((item) => (
              <article key={item.title} className={styles.solutionCard}>
                {/* <div className={styles.solutionIcon} aria-hidden="true">
                  {item.icon}
                </div> */}

                <h3 className={styles.solutionTitle}>{item.title}</h3>
                <p className={styles.solutionDesc}>{item.description}</p>

                <ul className={styles.features}>
                  {item.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <span className={styles.check} aria-hidden="true">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaPattern} aria-hidden="true" />
        <Container>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Diseñemos una solución financiera a medida
            </h2>
            <p className={styles.ctaText}>
              Conversemos sobre la estructura financiera de tu empresa, tu
              cadena de valor y las herramientas que necesitás para crecer con
              más capacidad operativa.
            </p>
            <Button
              href="/contacto"
              variant="primary"
              size="lg"
              className={styles.ctaBtn}
            >
              Agendar una llamada
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
