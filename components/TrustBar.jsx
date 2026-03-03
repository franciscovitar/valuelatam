" use client";
import Container from "./ui/Container";
import styles from "./TrustBar.module.scss";

const companies = [
  "Oracle",
  "Samsung",
  "Monday",
  "Segment",
  "Atlassian",
  "Dropbox",
  "Shopify",
  "Stripe",
];

export default function TrustBar() {
  return (
    <section className={styles.trustBar}>
      <Container>
        <div className={styles.content}>
          <p className={styles.label}>
            Experiencia trabajando con empresas como
          </p>
          <div className={styles.logos}>
            {companies.map((company, index) => (
              <div key={company} className={styles.logo}>
                <div className={styles.logoBox}>
                  <span className={styles.logoText}>{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
