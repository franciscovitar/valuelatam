import Link from "next/link";
import Container from "./ui/Container";
import styles from "./Footer.module.scss";
import Logo from "../public/LogoSuelto.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Ir a inicio">
              <div className={styles.logoIcon} aria-hidden="true">
                <Image
                  className={styles.img}
                  src={Logo}
                  alt="Value Latam"
                  priority
                />
              </div>
              <span className={styles.logoText}>Value Latam</span>
            </Link>
            <p className={styles.description}>
              Consultoría financiera integral para empresas. Experiencia senior
              para ejecutar con claridad en contextos volátiles.
            </p>
            <div className={styles.contact}>
              <p>
                <strong>Email:</strong> info@valuelatam.com
              </p>
              <p>
                <strong>WhatsApp:</strong> +54 9 11 3000-4720
              </p>
            </div>
          </div>

          {/* Links */}
          <div className={styles.links}>
            <nav className={styles.linkSection} aria-label="Soluciones">
              <h4 className={styles.linkTitle}>Soluciones</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/soluciones/financiamiento">Financiamiento</Link>
                </li>
                <li>
                  <Link href="/soluciones/inversiones-liquidez">
                    Inversiones & Liquidez
                  </Link>
                </li>
                <li>
                  <Link href="/soluciones/comercio-exterior">
                    Comercio Exterior
                  </Link>
                </li>
              </ul>
            </nav>

            <nav className={styles.linkSection} aria-label="Empresa">
              <h4 className={styles.linkTitle}>Empresa</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/empresa">Quiénes somos</Link>
                </li>
                <li>
                  <Link href="/empresa#equipo">Equipo</Link>
                </li>
                <li>
                  <Link href="/contacto">Contacto</Link>
                </li>
              </ul>
            </nav>

            <nav className={styles.linkSection} aria-label="Contacto">
              <h4 className={styles.linkTitle}>Contacto</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/contacto">Agendar una llamada</Link>
                </li>
                <li>
                  <a href="mailto:info@valuelatam.com">info@valuelatam.com</a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5491130004720"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Value Latam. Todos los derechos
              reservados.
            </p>

            <div className={styles.social} aria-label="Redes">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/value-latam-a60a3137b/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/value.latam/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm8.75 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:info@valuelatam.com"
                className={styles.socialLink}
                aria-label="Email"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Disclaimer */}
      {/* <div className={styles.disclaimer}>
        <Container size="lg">
          <p className={styles.disclaimerText}>
            <strong>Disclaimer:</strong> Value Latam es una consultora
            financiera independiente. No somos una entidad financiera regulada.
            Las recomendaciones e instrumentos financieros mencionados pueden
            implicar riesgo de pérdida de capital. Se recomienda asesoramiento
            profesional antes de cualquier decisión de inversión.
          </p>
        </Container>
      </div> */}
    </footer>
  );
}
