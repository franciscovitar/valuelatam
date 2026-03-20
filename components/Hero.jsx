"use client";

import Container from "./ui/Container";
import Button from "./ui/Button";
import styles from "./Hero.module.scss";
import { useReveal } from "../lib/useReveal";

const partnerLogos = [
  {
    src: "/adcap.jpg",
    alt: "Adcap",
    className: styles.logoAdcap,
    variant: "app",
  },
  {
    src: "/balanz.jpg",
    alt: "Balanz",
    className: styles.logoBalanz,
    variant: "app",
  },
  {
    src: "/trend.jpg",
    alt: "Trend SGR",
    className: styles.logoTrend,
    variant: "wordmark",
  },
  {
    src: "/argenpymes.jpg",
    alt: "Argenpymes",
    className: styles.logoArgenpymes,
    variant: "wordmark",
  },
  {
    src: "/acindar.png",
    alt: "Acindar Pymes",
    className: styles.logoAcindar,
    variant: "wordmark",
  },
];
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
          <div className={styles.left}>
            <div className={reveal(styles.badge, styles.d1)}>
              Estrategia financiera para empresas: financiamiento, liquidez e
              inversión
            </div>

            <h1 className={reveal(styles.title, styles.d2)}>
              Las mejores{" "}
              <span className={styles.accent}>soluciones financieras</span> para
              tu empresa, en un solo lugar
            </h1>

            <p className={reveal(styles.subtitle, styles.d3)}>
              Accedé al financiamiento más competitivo, gestioná tus excedentes
              con los mejores instrumentos del mercado y simplificá tus pagos al
              exterior desde un solo lugar.
            </p>

            <div className={reveal(styles.ctas, styles.d4)}>
              <Button href="/contacto" size="lg">
                Agendar una reunión
              </Button>

              <Button href="#soluciones" variant="ghost" size="lg">
                Ver soluciones
              </Button>
            </div>

            <div className={reveal(styles.social, styles.d5)}>
              <span className={styles.socialText}>
                Trabajamos con el ecosistema del mercado de capitales
              </span>

              <div className={styles.partners}>
                <div className={styles.partnersRow}>
                  {partnerLogos.slice(0, 2).map((logo) => (
                    <div
                      key={logo.alt}
                      className={`${styles.partnerLogo} ${styles.partnerLogoApp}`}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className={styles.partnerLogoImg}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.partnersRow}>
                  {partnerLogos.slice(2).map((logo) => (
                    <div
                      key={logo.alt}
                      className={`${styles.partnerLogo} ${styles.partnerLogoWordmark}`}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className={`${styles.partnerLogoImg} ${logo.className}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.backgroundOrbs} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>
    </section>
  );
}
