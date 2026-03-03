"use client";

import Link from "next/link";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { solutions } from "../lib/data";
import styles from "./Solutions.module.scss";
import { useReveal } from "../lib/useReveal";
import Image from "next/image";
import foto from "../public/contacto.png";

export default function Solutions() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="soluciones" className={styles.section}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.stars} />
        <div className={styles.stars2} />
      </div>
      <Container>
        <SectionTitle
          subtitle="Soluciones integrales"
          title="Qué hacemos"
          highlight="hacemos"
          centered
        />

        <div ref={ref} className={styles.grid}>
          {solutions.map((solution, index) => {
            const href = solution.href ?? `/soluciones/${solution.id}`;

            return (
              <Link
                key={solution.id}
                href={href}
                data-variant={solution.color ?? "blue"} // ✅
                className={`${styles.card} fade-in-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* top row: badge + arrow */}
                <div className={styles.topRow}>
                  <span className={styles.badge}>Solución</span>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </div>

                {/* header */}
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon} aria-hidden="true">
                    <span>{solution.icon}</span>
                  </div>

                  <div className={styles.cardHeaderText}>
                    <h3 className={styles.cardTitle}>{solution.title}</h3>
                  </div>
                </div>

                <p className={styles.cardDescription}>{solution.description}</p>

                {/* mini visual (queda tipo “imagen” sin necesitar assets) */}
                <div className={styles.media} aria-hidden="true">
                  {solution.image ? (
                    <Image
                      src={foto}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
                      className={styles.mediaImg}
                      priority={index < 3}
                    />
                  ) : (
                    <div className={styles.mediaFallback} />
                  )}
                </div>
                <ul className={styles.cardFeatures}>
                  {solution.features?.map((feature) => (
                    <li key={feature} className={styles.cardFeature}>
                      <span className={styles.featureIcon} aria-hidden="true">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
