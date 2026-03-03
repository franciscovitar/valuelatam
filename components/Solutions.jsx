"use client";

import Link from "next/link";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import styles from "./Solutions.module.scss";
import { useReveal } from "../lib/useReveal";
import Image from "next/image";
import foto from "../public/contacto.png";

const CARD_COPY = {
  financiamiento: {
    title: "Financiamiento",
    desc: "Accedé a alternativas de financiamiento con acompañamiento end-to-end, desde el diagnóstico hasta la ejecución.",
  },
  "inversiones-liquidez": {
    title: "Inversiones & Liquidez",
    desc: "Optimización de liquidez y estrategias de inversión según horizonte, riesgo y necesidades de caja.",
  },
  "comercio-exterior": {
    title: "Comercio Exterior",
    desc: "Transferencias, pagos y financiamiento import/export para operar internacionalmente con menos fricción.",
  },
};

export default function Solutions() {
  const { ref, isVisible } = useReveal();

  const items = [
    { id: "financiamiento", href: "/soluciones/financiamiento" },
    { id: "inversiones-liquidez", href: "/soluciones/inversiones-liquidez" },
    { id: "comercio-exterior", href: "/soluciones/comercio-exterior" },
  ];

  return (
    <section id="soluciones" className={styles.section}>
      <Container>
        <SectionTitle
          subtitle="Soluciones integrales"
          title="Qué hacemos"
          highlight="hacemos"
          centered
        />

        <div ref={ref} className={styles.grid}>
          {items.map((item, index) => {
            const copy = CARD_COPY[item.id];

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`${styles.card} fade-in-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                {/* hover fill */}
                <span className={styles.fill} aria-hidden="true" />

                {/* image */}
                <div className={styles.media} aria-hidden="true">
                  <Image
                    src={foto}
                    alt=""
                    fill
                    sizes="(min-width: 1100px) 320px, (min-width: 768px) 45vw, 100vw"
                    className={styles.mediaImg}
                    priority={index === 0}
                  />
                </div>

                {/* content */}
                <div className={styles.body}>
                  <h3 className={styles.title}>{copy.title}</h3>
                  <p className={styles.desc}>{copy.desc}</p>

                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
