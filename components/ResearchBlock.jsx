"use client";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import styles from "./ResearchBlock.module.scss";
import { useReveal } from "../lib/useReveal";

export default function ResearchBlock() {
  const { ref, isVisible } = useReveal();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content} ref={ref}>
          <div
            className={`${styles.left} fade-in-up ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "120ms" }}
          >
            <SectionTitle
              subtitle="Anticipación estratégica"
              title="Research propio para anticipar escenarios"
              highlight="anticipar"
              dark
            />

            <p className={styles.description}>
              Desarrollamos research y reportes periódicos para anticipar
              escenarios macro y microeconómicos. Articulamos coyuntura,
              estrategia y ejecución para que tu empresa decida rápido y con
              criterio.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>Investigación</span>
                <span className={styles.statLabel}>Análisis de mercado</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>Sectores</span>
                <span className={styles.statLabel}>Cobertura amplia</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>Continuo</span>
                <span className={styles.statLabel}>Monitoreo</span>
              </div>
            </div>

            <Button
              href="/contacto"
              variant="dark"
              size="lg"
              className={styles.cta}
            >
              Explorar insights <span aria-hidden="true">→</span>
            </Button>
          </div>

          <div
            className={`${styles.right} fade-in-up ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "220ms" }}
          >
            <div className={styles.visual}>
              <div className={styles.chart}>
                <div className={styles.chartHeader}>
                  <h4>Tendencias del mercado</h4>
                  <span className={styles.period}>T1</span>
                </div>

                <div className={styles.chartContent}>
                  <div
                    className={styles.chartBars}
                    data-animate={isVisible ? "true" : "false"}
                  >
                    <div
                      className={styles.chartBar}
                      style={{ height: "60%" }}
                    />
                    <div
                      className={styles.chartBar}
                      style={{ height: "80%" }}
                    />
                    <div
                      className={styles.chartBar}
                      style={{ height: "45%" }}
                    />
                    <div
                      className={styles.chartBar}
                      style={{ height: "95%" }}
                    />
                    <div
                      className={styles.chartBar}
                      style={{ height: "70%" }}
                    />
                    <div
                      className={styles.chartBar}
                      style={{ height: "85%" }}
                    />
                  </div>

                  <div className={styles.trend}>
                    <span className={styles.trendIcon} aria-hidden="true">
                      📈
                    </span>
                    <span>Tendencia alcista</span>
                  </div>
                </div>
              </div>

              <div className={styles.indicators}>
                <div className={styles.indicator}>
                  <div
                    className={`${styles.indicatorIcon} ${styles.iconOk}`}
                    aria-hidden="true"
                  >
                    💰
                  </div>
                  <div className={styles.indicatorContent}>
                    <span className={styles.indicatorTitle}>Liquidez</span>
                    <span className={styles.indicatorValue}>Óptima</span>
                  </div>
                </div>

                <div className={styles.indicator}>
                  <div
                    className={`${styles.indicatorIcon} ${styles.iconWarn}`}
                    aria-hidden="true"
                  >
                    ⚠️
                  </div>
                  <div className={styles.indicatorContent}>
                    <span className={styles.indicatorTitle}>Volatilidad</span>
                    <span className={styles.indicatorValue}>Media</span>
                  </div>
                </div>

                <div className={styles.indicator}>
                  <div
                    className={`${styles.indicatorIcon} ${styles.iconInfo}`}
                    aria-hidden="true"
                  >
                    🎯
                  </div>
                  <div className={styles.indicatorContent}>
                    <span className={styles.indicatorTitle}>Oportunidades</span>
                    <span className={styles.indicatorValue}>Alta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.pattern} aria-hidden="true" />
    </section>
  );
}
