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
        staggerChildren: 0.06,
        delayChildren: 0.02,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 10, scale: 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      {/* FOTO SOLO EN EL FRAME */}
      <div className={styles.frame}>
        <div
          className={styles.heroImage}
          style={{
            backgroundImage: `url(${foto.src})`,
            backgroundPosition: "50% 18%",
          }}
        />
        <div className={styles.decorativeGrid} />
        <div className={styles.glowEffect} />
      </div>

      {/* CARDS (dock) */}
      <div className={styles.cardRow}>
        {/* Card 1 */}
        <motion.article
          className={`${styles.card} ${styles.cardWide}`}
          variants={card}
          whileHover={reduceMotion ? undefined : { y: -2 }}
        >
          <div className={styles.metric}>
            <span className={styles.cardIcon} aria-hidden="true">
              💼
            </span>
            <span className={styles.metricValue}>Financiamiento</span>
          </div>
        </motion.article>

        {/* Card 2 */}
        <motion.article
          className={styles.card}
          variants={card}
          whileHover={reduceMotion ? undefined : { y: -2 }}
        >
          <div className={styles.metric}>
            <span className={styles.cardIcon} aria-hidden="true">
              📈
            </span>
            <span className={styles.metricValue}>Inversión</span>
          </div>
        </motion.article>

        {/* Card 3 */}
        <motion.article
          className={styles.card}
          variants={card}
          whileHover={reduceMotion ? undefined : { y: -2 }}
        >
          <div className={styles.metric}>
            <span className={styles.cardIcon} aria-hidden="true">
              💳
            </span>
            <span className={styles.metricValue}>Pagos</span>
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}
