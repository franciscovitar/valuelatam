// app/soluciones/inversiones-liquidez/page.jsx
import Container from "../../../components/ui/Container";
import SectionTitle from "../../../components/ui/SectionTitle";
import Button from "../../../components/ui/Button";
import styles from "./Solucion.module.scss";
import { investmentServices, investmentInstruments } from "../../../lib/data";
import foto from "../../../public/inversiones.jpg";
import Image from "next/image";

export const metadata = {
  title: "Inversiones & Liquidez | Value Latam",
  description:
    "Gestión profesional de carteras e instrumentos financieros. Optimizá tu liquidez y rentabilidad con estrategia.",
};

export default function InversionesLiquidezPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroTop}>
              <div className={styles.heroContent}>
                <span className={styles.heroPill}>Gestión profesional</span>

                <h1 className={styles.heroTitle}>
                  Inversiones &amp;{" "}
                  <span className={styles.heroHighlight}>Gestión</span> de
                  Liquidez
                </h1>

                <p className={styles.heroText}>
                  Diseñamos estrategias de inversión y gestión de liquidez para
                  empresas que buscan optimizar sus excedentes financieros según
                  su horizonte, necesidades de caja y contexto de mercado.
                </p>
              </div>

              <div className={styles.heroCta}>
                <div className={styles.heroCtas}>
                  <Button href="/contacto" size="lg" className={styles.heroBtn}>
                    Consultar estrategia
                    <span className={styles.heroBtnIcon} aria-hidden="true">
                      ↗
                    </span>
                  </Button>

                  {/* <Button
                    href="#servicios"
                    variant="ghost"
                    size="lg"
                    className={styles.heroBtnGhost}
                  >
                    Ver servicios →
                  </Button> */}
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
      <section id="servicios" className={styles.sectionWhite}>
        <Container>
          <SectionTitle title="Nuestros servicios" centered />

          <div className={styles.servicesGrid}>
            {investmentServices.map((service) => (
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
              </article>
            ))}
          </div>

          {/* Instruments */}
          <div className={styles.instruments}>
            <h3 className={styles.instrumentsTitle}>
              Instrumentos disponibles
            </h3>
            <div className={styles.chips}>
              {investmentInstruments.map((instrument) => (
                <span key={instrument} className={styles.chip}>
                  {instrument}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.legalNote}>
            <p className={styles.legalText}>
              Las operaciones en el mercado de capitales se canalizan a través
              de agentes registrados ante la Comisión Nacional de Valores.
            </p>
            <p className={styles.legalMat}>AP CNV Mat. N° 2651.</p>
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
