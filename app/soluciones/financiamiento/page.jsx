// app/soluciones/financiamiento/page.jsx
import Container from "../../../components/ui/Container";
import SectionTitle from "../../../components/ui/SectionTitle";
import Button from "../../../components/ui/Button";
import styles from "./Solucion.module.scss";
import { financingServices } from "../../../lib/data";
import Image from "next/image";
import foto from "../../../public/finanzas.jpg";

export const metadata = {
  title: "Financiamiento | Value Latam",
  description:
    "Financiamiento en mercado de capitales, avales SGR y líneas de crédito productivas para empresas.",
};

export default function FinanciamientoPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroTop}>
              <div className={styles.heroContent}>
                <span className={styles.heroPill}>Solución integral</span>

                <h1 className={styles.heroTitle}>
                  Financiamiento empresarial{" "}
                  <span className={styles.heroHighlight}>adaptado</span> a tu
                  necesidad
                </h1>

                <p className={styles.heroText}>
                  Accedé a alternativas de financiamiento con acompañamiento
                  integral: diagnóstico, estructuración y ejecución, alineado a
                  tu operación y flujos.
                </p>
              </div>

              <div className={styles.heroCta}>
                <div className={styles.heroCtas}>
                  <Button href="/contacto" size="lg" className={styles.heroBtn}>
                    Solicitar análisis
                    <span className={styles.heroBtnIcon} aria-hidden="true">
                      ↗
                    </span>
                  </Button>
                </div>
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

      {/* Services */}
      <section id="servicios" className={styles.sectionGray}>
        <Container>
          <SectionTitle title="Servicios de financiamiento" centered />

          <div className={styles.grid}>
            {financingServices.map((service) => (
              <article key={service.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>

                {service.features?.length ? (
                  <ul className={styles.features}>
                    {service.features.map((feature) => (
                      <li key={feature} className={styles.feature}>
                        <span className={styles.check} aria-hidden="true">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {/* ✅ Opcional: chips (si los usás en data.js) */}
                {service.chips?.length ? (
                  <div className={styles.chipsBlock}>
                    <p className={styles.chipsTitle}>Instrumentos</p>
                    <div className={styles.chips}>
                      {service.chips.map((chip) => (
                        <span key={chip} className={styles.chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
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
            <h2 className={styles.ctaTitle}>¿Trabajamos juntos?</h2>
            <p className={styles.ctaText}>
              Conversemos sobre los desafíos financieros de tu empresa y
              definamos próximos pasos claros.
            </p>
            <Button
              href="/contacto"
              variant="primary"
              size="lg"
              className={styles.ctaBtn}
            >
              Contactar al equipo
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
