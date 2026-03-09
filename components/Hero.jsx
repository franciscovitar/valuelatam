"use client";

import Container from "./ui/Container";
import Button from "./ui/Button";
import HeroVisual from "./visuals/HeroVisual";
import styles from "./Hero.module.scss";
import { useReveal } from "../lib/useReveal";

export default function Hero() {
  const { ref, isVisible } = useReveal();

  const reveal = (base, delayClass) =>
    [base, "fade-in-up", isVisible && "visible", delayClass]
      .filter(Boolean)
      .join(" ");

  return (
    <section ref={ref} className={`${styles.hero} pattern-grid`}>
      <Container size="xl">
        <div className={styles.content}>
          {/* Left Content */}
          <div className={styles.left}>
            <div className={reveal(styles.badge, styles.d1)}>
              <span className={styles.badgeIcon} aria-hidden="true">
                ⚡
              </span>
Estrategia financiera para empresas: financiamiento, liquidez e inversión
            </div>

            <h1 className={reveal(styles.title, styles.d2)}>
Las mejores  <span className={styles.accent}>soluciones financieras </span>  para tu empresa, en un solo lugar
            </h1>

            <p className={reveal(styles.subtitle, styles.d3)}>
Accedé al financiamiento mas competitivo, gestioná tus excedentes con los
mejores instrumentos del mercado y simplificá tus pagos al exterior desde un
solo lugar
            </p>

            <div className={reveal(styles.ctas, styles.d4)}>
              <Button href="/contacto" size="lg">
                Agendar una llamada
              </Button>
              <Button href="#soluciones" variant="ghost" size="lg">
                Ver soluciones
              </Button>
            </div>

            <div className={reveal(styles.social, styles.d5)}>
              <span className={styles.socialText}>
                Alianzas estratégicas con
              </span>
              <div className={styles.partners}>
                <span className={styles.partner}>Balanz Capital S.A.</span>
                <span className={styles.divider}>·</span>
                <span className={styles.partner}>Adcap Grupo Financiero</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={styles.right}>
            <HeroVisual />
          </div>
        </div>
      </Container>

      {/* Background Elements */}
      <div className={styles.backgroundOrbs} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>
    </section>
  );
}
