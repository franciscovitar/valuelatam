// app/empresa/page.jsx  (o src/app/empresa/page.jsx)
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import styles from "./Empresa.module.scss";
import { team, whyUs } from "../../lib/data";
import Image from "next/image";
import foto from "../../public/contacto.png";

export const metadata = {
  title: "Empresa | Value Latam",
  description:
    "Conocé nuestro equipo senior, nuestra metodología de trabajo y por qué Value Latam es un partner financiero para empresas.",
};

export default function EmpresaPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroTop}>
              <div className={styles.heroContent}>
                <span className={styles.heroPill}>Nuestra empresa</span>

                <h1 className={styles.heroTitle}>
                  Experiencia{" "}
                  <span className={styles.heroHighlight}>senior</span> al
                  servicio de tu empresa
                </h1>

                <p className={styles.heroText}>
                  Somos un equipo de profesionales con trayectoria en banca
                  corporativa, mercados financieros y consultoría empresarial.
                  Diseñamos soluciones ejecutables para operar con claridad
                  incluso en contextos volátiles.
                </p>
              </div>

              <div className={styles.heroCta}>
                <Button href="/contacto" size="md" className={styles.heroBtn}>
                  Agendar una llamada
                  <span className={styles.heroBtnIcon} aria-hidden="true">
                    ↗
                  </span>
                </Button>
              </div>
            </div>

            <div className={styles.heroMedia} aria-hidden="true">
              <Image
                className={styles.heroImage}
                src={foto}
                alt=""
                width={1400}
                height={700}
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section className={styles.about}>
        <Container>
          <div className={styles.aboutGrid}>
            <div>
              <SectionTitle
                subtitle="Quiénes somos"
                title="Value Latam"
                highlight="Value"
              />
              <div className={styles.aboutText}>
                <p>
                  Value Latam es una consultora financiera que acompaña a PyMEs
                  y empresas medianas y grandes (MeGRAs) en decisiones de
                  financiamiento, inversiones, gestión de liquidez y comercio
                  exterior.
                </p>
                <p>
                  Nuestro enfoque es entender tu operación, ordenar prioridades
                  y construir alternativas con costos, plazos y riesgos claros.
                </p>
                <p>
                  Trabajamos con metodología transparente y acompañamiento
                  end-to-end: diagnóstico, estrategia, ejecución y seguimiento.
                </p>
              </div>
            </div>

            <aside className={styles.statsCard} aria-label="En datos">
              <h3 className={styles.statsTitle}>En datos</h3>

              <div className={styles.statsGrid}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>15+ años</span>
                  <span className={styles.statLabel}>
                    Trayectoria comprobada
                  </span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>4 pasos</span>
                  <span className={styles.statLabel}>Metodología clara</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>Partners</span>
                  <span className={styles.statLabel}>Balanz · Adcap</span>{" "}
                </div>
              </div>

              <div className={styles.statsCta}>
                <Button href="/contacto" size="md">
                  Agendar una llamada
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className={styles.why}>
        <Container>
          <SectionTitle
            subtitle="Ventajas diferenciales"
            title="Por qué elegirnos"
            highlight="elegirnos"
            centered
          />

          <div className={styles.whyGrid}>
            {whyUs.map((item) => (
              <div key={item.title} className={styles.whyCard}>
                <div className={styles.whyIcon} aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section id="equipo" className={styles.team}>
        <Container>
          <SectionTitle
            subtitle="Nuestro equipo"
            title="Profesionales senior"
            highlight="senior"
            centered
          />

          <div className={styles.teamGrid}>
            {team.map((member) => {
              const initials = member.name
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((n) => n[0])
                .join("")
                .toUpperCase();

              const hasLinkedIn = member.linkedin && member.linkedin !== "#";

              return (
                <div key={member.name} className={styles.teamCard}>
                  <div className={styles.avatar} aria-hidden="true">
                    {initials}
                  </div>

                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamDesc}>{member.description}</p>

                  {hasLinkedIn && (
                    <Button href={member.linkedin} variant="ghost" size="sm">
                      LinkedIn →
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaPattern} aria-hidden="true" />
        <Container>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>¿Trabajamos juntos?</h2>
            <p className={styles.ctaText}>
              Conversemos sobre los desafíos financieros de tu empresa y
              definamos próximos pasos claros.
            </p>
            <Button
              href="/contacto"
              variant="primary"
              size="lg"
              className={styles.ctaBtn}
            >
              Contactar al equipo
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
