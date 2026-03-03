"use client";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { steps } from "../lib/data";
import styles from "./Steps.module.scss";
import { useReveal } from "../lib/useReveal";

export default function Steps() {
  const { ref, isVisible } = useReveal();

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          subtitle="Nuestra metodología"
          title="Cómo trabajamos"
          highlight="trabajamos"
          centered
        />

        <div className={styles.timeline} ref={ref}>
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`${styles.timelineItem} fade-in-up ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className={styles.stepNumber}>
                <span>{step.step}</span>
              </div>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
