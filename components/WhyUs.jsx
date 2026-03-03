"use client";

import Container from "./ui/Container";
import { whyUs } from "../lib/data";
import styles from "./WhyUs.module.scss";
import { useReveal } from "../lib/useReveal";

export default function WhyUs() {
  const { ref, isVisible } = useReveal();

  return (
    <section className={styles.section} id="por-que">
      {/* <Container> */}
      <div className={styles.panel}>
        <div className={styles.panel2}>
          {" "}
          <span className={styles.badge}>Nuestra filosofía</span>
          <h2 className={styles.title}>
            En Value Latam creemos en el trabajo profesional, personalizado y
            transparente.{" "}
          </h2>
          <div className={styles.grid} ref={ref}>
            {whyUs.map((item, index) => (
              <div
                key={item.title}
                className={`${styles.card} fade-in-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className={styles.cardIcon} aria-hidden="true">
                  <span>{item.icon}</span>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
}
