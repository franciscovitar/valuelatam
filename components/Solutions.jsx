"use client";

import Link from "next/link";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { solutions } from "../lib/data";
import styles from "./Solutions.module.scss";
import { useReveal } from "../lib/useReveal";
import Image from "next/image";
import fallbackImg from "../public/contacto.png";

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
            const imgSrc = solution.image ?? fallbackImg;

            return (
              <Link
                key={solution.id}
                href={href}
                className={`${styles.card} fade-in-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Top row: pill + arrow */}
                <div className={styles.topRow}>
                  <span className={styles.pill}>
                    {solution.kicker ?? solution.title}
                  </span>

                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </div>

                {/* Big text (description) */}
                <p className={styles.headline}>{solution.description}</p>

                {/* Image */}
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
      </Container>
    </section>
  );
}
