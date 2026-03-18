// app/empresa/page.jsx  (o src/app/empresa/page.jsx)
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import styles from "./Empresa.module.scss";
import { team, whyUs } from "../../lib/data";
import Image from "next/image";
import foto from "../../public/nosotros.jpeg";

export const metadata = {
  title: "Empresa | Value Latam",
  description:
    "Conocé nuestro equipo senior, nuestra metodología de trabajo y por qué Value Latam es un partner financiero para empresas.",
};

const ecosystemCards = [
  {
    variant: "default",
    title: "El único ecosistema de financiamiento empresarial en un solo lugar",
    paragraphs: [
      "En Value Latam reunimos en un solo lugar alternativas provenientes del mercado de capitales, entidades financieras, bancos, Sociedades de Garantía Recíproca (SGR) y soluciones de leasing. Esto permite analizar distintas opciones y estructurar la alternativa de financiamiento más conveniente para cada empresa.",
    ],
  },
  {
    variant: "featured",
    title:
      "No solo te acercamos las herramientas. Te acompañamos en todo el proceso.",
    paragraphs: [
      "En Value Latam analizamos la estructura financiera de cada empresa, evaluamos las alternativas disponibles y estructuramos la estrategia más conveniente. Luego acompañamos todo el proceso de implementación hasta concretar la operación.",
    ],
  },
  {
    variant: "default",
    title: "Una experiencia simple, segura y 100% digital",
    paragraphs: [
      "En Value Latam nuestra prioridad es que cada empresa pueda acceder a soluciones financieras de forma ágil, con procesos claros, documentación ordenada y seguimiento permanente. Contamos con una responsable dedicada al proceso de onboarding, que acompaña a cada cliente en la organización de la información y en cada etapa inicial, asegurando que la operación avance de forma ordenada y eficiente. Trabajamos con herramientas digitales que permiten simplificar la gestión y acelerar cada etapa del proceso.",
    ],
  },
];

export default function Nosotros() {
  return (
    <div className={styles.page}>
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
                  En Value Latam ayudamos a las empresas a ordenar su estrategia
                  financiera y acceder al capital para crecer. Analizamos la
                  estructura financiera, identificamos oportunidades en el
                  sistema financiero y el mercado de capitales, y estructuramos
                  operaciones concretas para obtener financiamiento, invertir
                  excedentes o mejorar la liquidez. Operamos principalmente en
                  el mercado de capitales, combinando instrumentos financieros
                  con líneas de organismos de financiamiento.
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
      <section className={styles.ecosystem}>
        <Container>
          <SectionTitle
            subtitle="Nuestro enfoque"
            title="Cómo acompañamos a las empresas"
            highlight="acompañamos"
            centered
          />

          <div className={styles.ecosystemGrid}>
            {ecosystemCards.map((item, index) => (
              <article
                key={item.title}
                className={`${styles.ecoCard} ${
                  index === 1 ? styles.ecoCardWhite : styles.ecoCardWhite
                }`}
              >
                <span className={styles.ecoTag}>
                  {index === 0
                    ? "Ecosistema"
                    : index === 1
                      ? "Acompañamiento"
                      : "Experiencia digital"}
                </span>

                <h3 className={styles.ecoTitle}>{item.title}</h3>

                <div className={styles.ecoBody}>
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph} className={styles.ecoText}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      {/* About */}
      {/* <section className={styles.about}>
        <Container>
          <div className={styles.aboutGrid}>
            <div>
              <SectionTitle
                subtitle="Marco regulatorio"
                title="Transparencia y cumplimiento"
                highlight="cumplimiento"
              />

              <div className={styles.aboutText}>
                <p>
                  Value Latam ofrece servicios de consultoría financiera
                  estratégica, análisis y estructuración de financiamiento y
                  canalización de operaciones en el mercado de capitales a
                  través de agentes registrados.
                </p>

                <p>
                  <strong>AP CNV Mat. N° 2651</strong>
                </p>

                <p>
                  Actividad encuadrada en la <strong>Ley 26.831</strong> y
                  normas de la <strong>Comisión Nacional de Valores</strong>.
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
      </section> */}

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
                {/* <div className={styles.whyIcon} aria-hidden="true">
                  {item.icon}
                </div> */}
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      {/* Team */}
      <section id="equipo" className={styles.team}>
        <Container>
          <SectionTitle
            subtitle=""
            title="Nuestro equipo"
            highlight="equipo"
            centered
          />

          <div className={styles.teamGrid}>
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

              const CardTag = hasLinkedIn ? "a" : "div";
              const cardProps = hasLinkedIn
                ? { href: member.linkedin }
                : { role: "button" };

              return (
                <CardTag
                  target="_blank"
                  rel="noopener noreferrer"
                  key={member.name}
                  tabIndex={0}
                  className={`${styles.card} fade-in-up visible`}
                  style={{ transitionDelay: `${index * 90}ms` }}
                  {...cardProps}
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
                      <div
                        className={styles.photoPlaceholder}
                        aria-hidden="true"
                      >
                        <span className={styles.initials}>{initials}</span>
                      </div>
                    )}

                    {/* Sombra base (solo para estética/contraste) */}
                    <div className={styles.frontShade} aria-hidden="true" />

                    {/* Nombre / rol (se oculta al abrir overlay) */}
                    <div className={styles.frontMeta}>
                      <h3 className={styles.frontName}>{member.name}</h3>
                      <p className={styles.frontRole}>{member.role}</p>
                    </div>

                    {/* Overlay */}
                    <div
                      className={styles.overlay}
                      aria-label={`Descripción de ${member.name}`}
                    >
                      <div className={styles.overlayInner}>
                        <p className={styles.description}>
                          {member.description}
                        </p>

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
                </CardTag>
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
