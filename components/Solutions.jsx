"use client";

import Link from "next/link";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { solutions } from "../lib/data";
import styles from "./Solutions.module.scss";
import { useReveal } from "../lib/useReveal";
import Image from "next/image";
// import solution1 from "../public/solution1.jpg";

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
          subtitle="Que hacemos"
          title="SOLUCIONES FINANCIERAS PARA EMPRESAS "
          highlight="FINANCIERAS"
          centered
        />

        <div ref={ref} className={styles.grid}>
          {solutions.map((solution, index) => {
            const href = solution.href ?? `/soluciones/${solution.id}`;
            const imgSrc = solution.image ?? fallbackImg;

            return (
              <Link
                key={solution.id}
                href={href}
                className={`${styles.card} fade-in-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={styles.topRow}>
                  <span className={styles.pill}>
                    {solution.kicker ?? solution.title}
                  </span>

                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </div>

                <p className={styles.headline}>{solution.description}</p>

                <div className={styles.media} aria-hidden="true">
                  <Image
                    src={imgSrc}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
                    className={styles.mediaImg}
                    priority={index < 3}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.regulatoryNote}>
          <p className={styles.regulatoryKicker}>Mención regulatoria</p>

          <p className={styles.regulatoryText}>
            Value Latam canaliza operaciones en el mercado de capitales a través
            de agentes registrados.
          </p>

          <p className={styles.regulatoryMat}>AP CNV Mat. N° 2651.</p>
        </div>
      </Container>
    </section>
  );
}
