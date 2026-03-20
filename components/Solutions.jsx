"use client";

import Link from "next/link";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import { solutions } from "../lib/data";
import styles from "./Solutions.module.scss";
import { useReveal } from "../lib/useReveal";
import Image from "next/image";
// import solution1 from "../public/solution1.jpg";
import Byma from "../public/byma.png";
import Cnv from "../public/cnv.png";

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
                    className={`${styles.mediaImg} ${
                      index === solutions.length - 1 ? styles.mediaImgLast : ""
                    }`}
                    priority={index < 3}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.regulatoryNote}>
          <p className={styles.regulatoryKicker}>Mención regulatoria</p>

          <div className={styles.regulatoryContent}>
            <p className={styles.regulatoryText}>
              Value Latam presta servicios de consultoría financiera
              estratégica, análisis, estructuración de financiamiento y
              asesoramiento en alternativas de inversión.
            </p>

            <p className={styles.regulatoryText}>
              Las operaciones en el mercado de capitales son canalizadas a
              través de agentes autorizados y registrados ante la Comisión
              Nacional de Valores (CNV), conforme a la normativa vigente.
            </p>

            <p className={styles.regulatoryMat}>
              Value Latam opera a través de un Agente Productor registrado ante
              la Comisión Nacional de Valores (CNV), Matrícula N° 2651, en el
              marco de la Ley N° 26.831 y normas reglamentarias aplicables.
            </p>

            <p className={styles.regulatoryText}>
              Value Latam no actúa como entidad financiera ni capta fondos del
              público, limitándose a la estructuración, asesoramiento y
              canalización de operaciones a través de intermediarios
              autorizados.
            </p>
          </div>

          <div className={styles.regulatoryLogos}>
            <a
              href="https://www.argentina.gob.ar/cnv"
              target="_blank"
              rel="noreferrer"
              className={styles.regulatoryLogoLink}
              aria-label="Ir al sitio de la Comisión Nacional de Valores"
            >
              <img
                src="/cnv.png"
                alt="CNV"
                className={`${styles.regulatoryLogo} ${styles.logoCnv}`}
              />
            </a>

            <a
              href="https://www.byma.com.ar/"
              target="_blank"
              rel="noreferrer"
              className={styles.regulatoryLogoLink}
              aria-label="Ir al sitio de BYMA"
            >
              <img
                src="/byma.png"
                alt="BYMA"
                className={`${styles.regulatoryLogo} ${styles.logoByma}`}
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
