"use client";

import { useState } from "react";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import styles from "./CTAContact.module.scss";

export default function CTAContact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    objetivo: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación mínima
    if (
      !formData.nombre ||
      !formData.email ||
      !formData.telefono ||
      !formData.empresa ||
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
        email: "",
        telefono: "",
        empresa: "",
        objetivo: "",
        mensaje: "",
      });

      // opcional: volver a idle después de unos segundos
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

  return (
    <section className={styles.section} id="contacto">
      <div className={styles.shell}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.badge}>Agendar consulta</span>

          <SectionTitle
            subtitle="Empezamos hoy"
            title="Agenda una llamada sin compromiso"
            highlight="sin compromiso"
          />

          <p className={styles.description}>
            En 30 minutos te ayudamos a ordenar el panorama y definir próximos
            pasos.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="nombre" className={styles.label}>
                  Nombre *
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="name"
                  placeholder="Tu nombre"
                  type="text"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="telefono" className={styles.label}>
                  Teléfono *
                </label>
                <input
                  id="telefono"
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="tel"
                  placeholder="+54 9 ..."
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="empresa" className={styles.label}>
                  Empresa *
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  value={formData.empresa}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="organization"
                  placeholder="Nombre de tu empresa"
                  required
                />
              </div>

              <div className={`${styles.formGroup} ${styles.span2}`}>
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

              <div className={`${styles.formGroup} ${styles.span2}`}>
                <label htmlFor="mensaje" className={styles.label}>
                  Mensaje (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Contanos un poco de tu situación…"
                  rows={2}
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className={styles.submit}
              loading={status === "sending"}
              disabled={status === "sending"}
            >
              Agendar una llamada
            </Button>

            <p className={styles.feedback} aria-live="polite">
              {status === "sent" && "¡Listo! Te contactamos a la brevedad."}
              {status === "error" &&
                "Revisá los campos obligatorios e intentá nuevamente."}
            </p>

            <p className={styles.privacy}>
              Al enviar este formulario, aceptas nuestra{" "}
              <a href="/privacidad">Política de Privacidad</a>
            </p>
          </form>
        </div>

        {/* RIGHT */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.image} />

          <div className={styles.callout}>
            <div className={styles.callIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
            </div>

            <div className={styles.callText}>
              <span className={styles.callTitle}>¿Preferís WhatsApp?</span>
              <span className={styles.callSub}>
                Respondemos dentro de 1 día hábil.
              </span>
            </div>

            <Button
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              className={styles.callBtn}
            >
              Escribir
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
