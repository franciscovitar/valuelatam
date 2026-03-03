"use client";

import { useState } from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { faqs } from "../lib/data";
import styles from "./FAQ.module.scss";

export default function FAQ() {
  const [openItems, setOpenItems] = useState(() => new Set());

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className={styles.section} id="faq">
      <Container>
        <div className={styles.layout}>
          {/* LEFT */}
          <div className={styles.left}>
            <span className={styles.badge}>FAQ</span>

            <h2 className={styles.title}>
              Resolvemos tus <span className={styles.em}>dudas</span>
            </h2>

            <p className={styles.subtitle}>
              Preguntas frecuentes sobre financiamiento, liquidez e inversiones.
            </p>

            <Button href="/contacto" className={styles.cta}>
              Agendar una llamada
            </Button>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openItems.has(index);

                return (
                  <div
                    key={faq.question ?? index}
                    className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
                  >
                    <button
                      id={`faq-question-${index}`}
                      type="button"
                      className={styles.question}
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className={styles.questionText}>
                        {faq.question}
                      </span>

                      <span className={styles.iconWrap} aria-hidden="true">
                        <span className={styles.plus} />
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${index}`}
                      className={styles.answer}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className={styles.answerInner}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
