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
          title="Experiencia a tu servicio"
          highlight="Experiencia"
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={hasLinkedIn ? member.linkedin : "#"}
                key={member.name}
                tabIndex={0}
                className={`${styles.card} fade-in-up ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className={styles.cardInner}>
                  {/* Foto */}
                  {imgUrl ? (
                    <div
                      className={styles.photoImage}
                      style={{ backgroundImage: `url(${imgUrl})` }}
                      aria-hidden="true"
                    />
                  ) : (
                    <div className={styles.photoPlaceholder} aria-hidden="true">
                      <span className={styles.initials}>{initials}</span>
                    </div>
                  )}

                  {/* Sombra base para que el nombre se lea siempre */}
                  <div className={styles.frontShade} aria-hidden="true" />

                  {/* Nombre / rol (siempre visible) */}
                  <div className={styles.frontMeta}>
                    <h3 className={styles.frontName}>{member.name}</h3>
                    <p className={styles.frontRole}>{member.role}</p>
                  </div>

                  {/* Overlay que sube */}
                  <div
                    className={styles.overlay}
                    aria-label={`Descripción de ${member.name}`}
                  >
                    <div className={styles.overlayInner}>
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
              </a>
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
