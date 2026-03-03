"use client";

import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { team } from "../lib/data";
import styles from "./TeamPreview.module.scss";
import { useReveal } from "../lib/useReveal";

export default function TeamPreview() {
  const { ref, isVisible } = useReveal();

  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle
          subtitle="Nuestro equipo"
          title="Experiencia senior a tu servicio"
          highlight="senior"
          centered
        />

        <div className={styles.grid} ref={ref}>
          {team.map((member, index) => {
            const initials = member.name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            const hasLinkedIn = member.linkedin && member.linkedin !== "#";

            const imgUrl =
              member.image && typeof member.image === "string"
                ? member.image
                : member.image?.src;

            return (
              <div
                key={member.name}
                tabIndex={0} // ✅ permite flip con foco (opcional, pero ayuda en touch)
                className={`${styles.card} fade-in-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className={styles.cardInner}>
                  {/* FRONT: foto + nombre/cargo encima */}
                  <div className={styles.front} aria-hidden="true">
                    {imgUrl ? (
                      <div
                        className={styles.photoImage}
                        style={{ backgroundImage: `url(${imgUrl})` }}
                      />
                    ) : (
                      <div className={styles.photoPlaceholder}>
                        <span className={styles.initials}>{initials}</span>
                      </div>
                    )}

                    <div className={styles.frontShade} aria-hidden="true" />

                    <div className={styles.frontMeta}>
                      <h3 className={styles.frontName}>{member.name}</h3>
                      <p className={styles.frontRole}>{member.role}</p>
                    </div>
                  </div>

                  {/* BACK: info */}
                  <div className={styles.back}>
                    <h3 className={styles.name}>{member.name}</h3>
                    <p className={styles.role}>{member.role}</p>
                    <p className={styles.description}>{member.description}</p>

                    {hasLinkedIn && (
                      <Button
                        href={member.linkedin}
                        variant="ghost"
                        size="sm"
                        className={styles.linkedin}
                      >
                        Ver LinkedIn <span aria-hidden="true">→</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.cta}>
          <Button href="/empresa" size="lg">
            Conocer más del equipo
          </Button>
        </div>
      </Container>
    </section>
  );
}
