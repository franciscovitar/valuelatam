"use client";

import { useState } from "react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import styles from "./Contacto.module.scss";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    objetivo: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación mínima (teléfono opcional, como tu UI)
    if (
      !formData.nombre ||
      !formData.empresa ||
      !formData.email ||
      !formData.objetivo
    ) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      setFormData({
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        objetivo: "",
        mensaje: "",
      });

      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStatus("idle");
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const imageUrl = "/contacto.png";

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroPanel}>
            <div className={styles.heroInner}>
              <span className={styles.heroPill}>CONTACTO</span>

              <h1 className={styles.heroTitle}>
                Conversemos y <span>conectemos</span>
              </h1>

              <p className={styles.heroText}>
                Queremos conocer tus objetivos financieros y ayudarte a definir
                próximos pasos.
              </p>

              <div className={styles.heroInfoRow}>
                <div className={styles.heroInfoItem}>
                  <div className={styles.heroInfoIcon} aria-hidden="true">
                    📍
                  </div>
                  <div className={styles.heroInfoText}>
                    <p className={styles.heroInfoLabel}>Ubicación</p>
                    <p className={styles.heroInfoValue}>
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>

                <div className={styles.heroInfoItem}>
                  <div className={styles.heroInfoIcon} aria-hidden="true">
                    📞
                  </div>
                  <div className={styles.heroInfoText}>
                    <p className={styles.heroInfoLabel}>Teléfono</p>
                    <p className={styles.heroInfoValue}>
                      <a href="tel:+5491112345678">+54 9 11 1234-5678</a>
                    </p>
                  </div>
                </div>

                <div className={styles.heroInfoItem}>
                  <div className={styles.heroInfoIcon} aria-hidden="true">
                    ✉️
                  </div>
                  <div className={styles.heroInfoText}>
                    <p className={styles.heroInfoLabel}>Email</p>
                    <p className={styles.heroInfoValue}>info@valuelatam.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className={styles.section}>
        <Container>
          <div className={styles.contactCard}>
            {/* Left: form */}
            <div className={styles.formSide}>
              <span className={styles.kicker}>CONTACTO</span>
              <h2 className={styles.formHeading}>Hablemos</h2>
              <p className={styles.formSub}>
                Dejanos tu consulta y te respondemos a la brevedad. Si preferís,
                también podés escribirnos por WhatsApp.
              </p>

              <form onSubmit={handleSubmit}>
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label htmlFor="nombre" className={styles.label}>
                      Nombre completo *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleChange}
                      autoComplete="name"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="empresa" className={styles.label}>
                      Empresa *
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={handleChange}
                      autoComplete="organization"
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="telefono" className={styles.label}>
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      autoComplete="tel"
                      className={styles.input}
                      placeholder="Opcional"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="objetivo" className={styles.label}>
                    ¿En qué te podemos ayudar? *
                  </label>
                  <select
                    id="objetivo"
                    name="objetivo"
                    value={formData.objetivo}
                    onChange={handleChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Seleccionar objetivo</option>
                    <option value="financiamiento">
                      Necesito financiamiento
                    </option>
                    <option value="inversiones">Optimizar inversiones</option>
                    <option value="liquidez">Gestión de liquidez</option>
                    <option value="comercio-exterior">Comercio exterior</option>
                    <option value="consulta-general">Consulta general</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="mensaje" className={styles.label}>
                    Mensaje adicional
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className={styles.textarea}
                    placeholder="Contanos más detalles sobre tu necesidad..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={styles.submit}
                  loading={status === "sending"}
                  disabled={status === "sending"}
                >
                  Enviar consulta
                </Button>

                <p className={styles.feedback} aria-live="polite">
                  {status === "sent" &&
                    "¡Gracias! Te contactamos a la brevedad."}
                  {status === "error" &&
                    "Revisá los campos obligatorios e intentá nuevamente."}
                </p>
              </form>
            </div>

            {/* Right: image */}
            <div className={styles.mediaSide} aria-hidden="true">
              <div
                className={styles.mediaBg}
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
              <div className={styles.mediaOverlay} />

              <div className={styles.callout}>
                <div className={styles.calloutIcon} aria-hidden="true">
                  📞
                </div>
                <div className={styles.calloutText}>
                  Escribinos por WhatsApp o completá el formulario.{" "}
                  <a
                    href="https://wa.me/5491112345678"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
