"use client";

import styles from "./HeroVisual.module.scss";
import { motion, useReducedMotion } from "framer-motion";
import foto from "../../public/inicio.jpg";

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06, // ✅ antes 0.12
        delayChildren: 0.02, // ✅ antes 0.05
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 10, scale: 0.99 }, // ✅ menos salto
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] }, // ✅ más rápido
    },
  };

  const floating = (delay = 0) => ({
    y: reduceMotion ? 0 : [0, -6, 0],
    transition: reduceMotion
      ? { duration: 0 }
      : { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay },
  });
  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      {/* ✅ FOTO SOLO EN EL FRAME */}
      <div className={styles.frame}>
        <div
          className={styles.heroImage}
          style={{
            backgroundImage: `url(${foto.src})`,
            backgroundPosition: "50% 18%", // probá 12%–25% según tu foto
          }}
        />
        <div className={styles.decorativeGrid} />
        <div className={styles.glowEffect} />
      </div>

      {/* ✅ CARDS AFUERA DEL FRAME (flotando) */}
      {/* ✅ CARDS (dock premium) */}
      <div className={styles.cardRow}>
        {/* Card 1 */}
        {/* Card 1 */}
        <motion.article
          className={`${styles.card} ${styles.cardWide}`}
          variants={card}
          whileHover={reduceMotion ? undefined : { y: -2 }}
        >
          <header className={styles.cardHeader}>
            <span className={styles.cardIcon} aria-hidden="true">
              💼
            </span>
            <span className={styles.cardKicker}>EXPERIENCIA</span>
          </header>

          <div className={styles.metric}>
            <span className={styles.metricValue}>+15 años</span>
            <span className={styles.metricLabel}>Banca & capitales</span>
          </div>
        </motion.article>

        {/* Card 2 */}
        <motion.article
          className={styles.card}
          variants={card}
          whileHover={reduceMotion ? undefined : { y: -2 }}
        >
          <header className={styles.cardHeader}>
            <span className={styles.cardIcon} aria-hidden="true">
              👥
            </span>
            <span className={styles.cardKicker}>ECOSISTEMA</span>
          </header>

          <div className={styles.metric}>
            <span className={styles.metricValue}>Partners </span>
            <span className={styles.metricLabel}>Bancos · ALyCs · SGRs</span>
          </div>
        </motion.article>

        {/* Card 3 */}
        <motion.article
          className={styles.card}
          variants={card}
          whileHover={reduceMotion ? undefined : { y: -2 }}
        >
          <header className={styles.cardHeader}>
            <span className={styles.cardIcon} aria-hidden="true">
              🕒
            </span>
            <span className={styles.cardKicker}>EJECUCIÓN</span>
          </header>

          <div className={styles.metric}>
            <span className={styles.metricValue}>End-to-end</span>
            <span className={styles.metricLabel}>Estrategia → acción</span>
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}
