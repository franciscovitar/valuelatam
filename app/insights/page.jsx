"use client";

import { useMemo, useState } from "react";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import styles from "./Insights.module.scss";
import { insights } from "../../lib/data";

// export const metadata = {
//   title: "Insights | Value Latam",
//   description:
//     "Research y análisis de mercado para anticipar escenarios. Insights sobre finanzas empresariales.",
// };

const FILTERS = [
  "Todos",
  "Financiamiento",
  "Inversiones",
  "Liquidez",
  "Comercio Exterior",
];

function formatDate(dateStr) {
  try {
    return new Intl.DateTimeFormat("es-AR").format(new Date(dateStr));
  } catch {
    return dateStr;
  }
}

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredInsights = useMemo(() => {
    if (activeFilter === "Todos") return insights;
    return insights.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const featured = useMemo(
    () => filteredInsights.filter((p) => p.featured),
    [filteredInsights],
  );

  const others = useMemo(
    () => filteredInsights.filter((p) => !p.featured),
    [filteredInsights],
  );

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <SectionTitle
              subtitle="Research & Análisis"
              title="Insights para anticipar escenarios"
              highlight="anticipar"
              centered
            />
            <p className={styles.heroText}>
              Análisis sobre tendencias de mercado, regulaciones y oportunidades
              para la gestión financiera empresarial.
            </p>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className={styles.filtersSection}>
        <Container>
          <div className={styles.filters}>
            <span className={styles.filtersLabel}>Filtrar por:</span>

            <div
              className={styles.filterChips}
              role="tablist"
              aria-label="Filtros"
            >
              {FILTERS.map((filter) => {
                const isActive = filter === activeFilter;
                return (
                  <button
                    key={filter}
                    type="button"
                    className={`${styles.chip} ${isActive ? styles.active : ""}`}
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={isActive}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured */}
      <section className={styles.sectionWhite}>
        <Container>
          <h2 className={styles.sectionTitle}>Artículos destacados</h2>

          {featured.length === 0 ? (
            <p className={styles.empty}>
              No hay artículos destacados para este filtro.
            </p>
          ) : (
            <div className={styles.featuredGrid}>
              {featured.map((post) => (
                <article key={post.id} className={styles.featuredCard}>
                  <div className={styles.featuredCover} aria-hidden="true">
                    📊
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.metaRow}>
                      <span className={styles.badge}>{post.category}</span>
                      <span className={styles.meta}>{post.readTime}</span>
                    </div>

                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>

                    <div className={styles.bottomRow}>
                      <span className={styles.meta}>
                        {formatDate(post.date)}
                      </span>
                      <span className={styles.readMore}>Leer más →</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* All posts */}
      <section className={styles.sectionGray}>
        <Container>
          <h2 className={styles.sectionTitle}>Todos los artículos</h2>

          {others.length === 0 ? (
            <p className={styles.empty}>No hay artículos para este filtro.</p>
          ) : (
            <div className={styles.grid}>
              {others.map((post) => (
                <article key={post.id} className={styles.card}>
                  <div className={styles.metaRow}>
                    <span className={styles.badge}>{post.category}</span>
                    <span className={styles.meta}>{post.readTime}</span>
                  </div>

                  <h3 className={styles.cardTitleSm}>{post.title}</h3>
                  <p className={styles.cardExcerptSm}>{post.excerpt}</p>

                  <div className={styles.bottomRow}>
                    <span className={styles.meta}>{formatDate(post.date)}</span>
                    <span className={styles.readMore}>Leer más →</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
