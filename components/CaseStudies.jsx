"use client";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { caseStudies } from "../lib/data";
import styles from "./CaseStudies.module.scss";
import { useReveal } from "../lib/useReveal";

export default function CaseStudies() {
  const { ref, isVisible } = useReveal();

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          subtitle="Casos de éxito"
          title="Resultados que hablan por sí solos"
          highlight="hablan"
          centered
        />

        <div className={styles.grid} ref={ref}>
          {caseStudies.map((case_, index) => (
            <div
              key={case_.title}
              className={`${styles.card} fade-in-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.category}>{case_.category}</span>
              </div>

              <h3 className={styles.title}>{case_.title}</h3>
              <p className={styles.description}>{case_.description}</p>

              <div className={styles.results}>
                <strong>Resultado:</strong> {case_.results}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
