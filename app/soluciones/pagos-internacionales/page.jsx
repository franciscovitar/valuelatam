// app/soluciones/comercio-exterior/page.jsx  (o src/app/soluciones/comercio-exterior/page.jsx)

import Container from "../../../components/ui/Container";
import SectionTitle from "../../../components/ui/SectionTitle";
import Button from "../../../components/ui/Button";
import styles from "./Solucion.module.scss";
import { commerceServices } from "../../../lib/data";
import Image from "next/image";
import foto from "../../../public/exterior.jpg";

export const metadata = {
  title: "Pagos Internacionales | Value Latam",
  description:
    "Transferencias internacionales, pagos eficientes y financiación competitiva para import/export.",
};

export default function PagosInternacionalesPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroTop}>
              <div className={styles.heroContent}>
                <span className={styles.heroPill}>
                  Operaciones internacionales
                </span>

                <h1 className={styles.heroTitle}>
                  Pagos{" "}
                  <span className={styles.heroHighlight}>Internacionales</span>
                </h1>

                <p className={styles.heroText}>
              Simplificamos transferencias y pagos internacionales y acercamos herramientas financieras competitivas para importaciones, con ejecución ágil y eficiente. </p>
              </div>

              <div className={styles.heroCta}>
                <div className={styles.heroCtas}>
                  <Button href="/contacto" size="lg" className={styles.heroBtn}>
                    Consultar servicios
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

          <div className={styles.grid}>
            {commerceServices.map((service) => (
              <article key={service.title} className={styles.card}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>

                <ul className={styles.features}>
                  {service.features?.map((feature) => (
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
