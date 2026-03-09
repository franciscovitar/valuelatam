"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import styles from "./ComoFunciona.module.scss";

const fundingOptions = [
  "Mercado de capitales",
  "Garantías SGR",
  "Leasing",
  "Líneas de financiamiento productivo",
];

const requiredDocs = [
  "Último balance inscripto",
  "Detalle de ventas posteriores al cierre",
  "Composición accionaria de los socios informando CUIT",
];

// export const metadata = {
//   title: "¿Cómo Funciona? | Value Latam",
//   description:
//     "Evaluá las opciones de financiamiento para tu empresa. Subí la información básica y recibí una primera evaluación financiera en hasta 72 horas.",
// };

export default function ComoFuncionaPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle");

  const [formData, setFormData] = useState({
    empresa: "",
    email: "",
    telefono: "",
  });

  const [files, setFiles] = useState({
    balance: null,
    ventas: null,
    accionaria: null,
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const allFilesUploaded = useMemo(() => {
    return files.balance && files.ventas && files.accionaria;
  }, [files]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleFileChange = (key) => (e) => {
    const file = e.target.files?.[0] ?? null;
    setFiles((prev) => ({ ...prev, [key]: file }));
    if (status !== "idle") setStatus("idle");
  };

  const openModal = () => {
    setIsOpen(true);
    setStatus("idle");
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.empresa.trim() ||
      !formData.email.trim() ||
      !formData.telefono.trim() ||
      !files.balance ||
      !files.ventas ||
      !files.accionaria
    ) {
      setStatus("error");
      return;
    }

    try {
      setStatus("sending");

      const body = new FormData();
      body.append("empresa", formData.empresa);
      body.append("email", formData.email);
      body.append("telefono", formData.telefono);

      body.append("balance", files.balance);
      body.append("ventas", files.ventas);
      body.append("accionaria", files.accionaria);

      const res = await fetch("/api/evaluation", {
        method: "POST",
        body,
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      setStatus("sent");

      setFormData({
        empresa: "",
        email: "",
        telefono: "",
      });

      setFiles({
        balance: null,
        ventas: null,
        accionaria: null,
      });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const getFileLabel = (file) => {
    if (!file) return "Ningún archivo seleccionado";
    return file.name;
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroInner}>
            <span className={styles.heroPill}>¿Cómo funciona?</span>

            <h1 className={styles.heroTitle}>
              Evaluá el{" "}
              <span className={styles.heroHighlight}>financiamiento</span> para
              tu empresa
            </h1>

            <p className={styles.heroText}>
              Subí la información básica de tu empresa y en hasta 72 horas te
              indicamos qué alternativas de financiamiento están disponibles.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.mainBlock}>
        <Container>
          <div className={styles.blockGrid}>
            <div className={styles.leftCard}>
              <h2 className={styles.blockTitle}>
                Evaluá las opciones de financiamiento para tu empresa
              </h2>

              <p className={styles.blockText}>
                Subí la información básica de tu empresa y en hasta 72 horas te
                indicamos qué alternativas de financiamiento están disponibles.
              </p>

              <div className={styles.listBlock}>
                <p className={styles.listTitle}>
                  Podés acceder a financiamiento a través de:
                </p>

                <ul className={styles.altList}>
                  {fundingOptions.map((item) => (
                    <li key={item} className={styles.altItem}>
                      <span className={styles.check} aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.confidentiality}>
                <span className={styles.lock} aria-hidden="true">
                  🔒
                </span>
                <p>Tu información es tratada de forma confidencial.</p>
              </div>
            </div>

            <div className={styles.rightCard}>
              <h2 className={styles.blockTitle}>
                Subí la información de tu empresa
              </h2>

              <p className={styles.blockText}>
                Para iniciar la evaluación financiera solo necesitamos la
                siguiente información:
              </p>

              <div className={styles.reqGroup}>
                <ul className={styles.reqList}>
                  <li>Último balance inscripto</li>
                  <li>Detalle de ventas posteriores al cierre</li>
                  <li>Composición accionaria de los socios informando CUIT</li>
                </ul>
              </div>

              <div className={styles.reqGroup}>
                <p className={styles.reqGroupTitle}>Datos de contacto</p>
                <ul className={styles.reqList}>
                  <li>Email de contacto</li>
                  <li>Teléfono de contacto</li>
                </ul>
              </div>

              <div className={styles.actionButtons}>
                <button
                  type="button"
                  className={styles.ghostBtn}
                  onClick={openModal}
                >
                  <span aria-hidden="true">📎</span>
                  Subir documentación
                </button>

                {/* <button
                  type="button"
                  className={styles.primaryBtn}
                  onClick={openModal}
                >
                  Iniciar evaluación
                </button> */}
              </div>

              <div className={styles.microText}>
                <p>La evaluación inicial no tiene costo.</p>
                <p>
                  En hasta 72 horas te contactamos con una primera evaluación
                  financiera.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.closing}>
        <Container>
          <div className={styles.closingInner}>
            <SectionTitle
              subtitle="Evaluación inicial"
              title="Más opciones de financiamiento. Una sola estrategia."
              highlight="estrategia"
              centered
            />
            <p className={styles.closingText}>
              En Value Latam analizamos las alternativas disponibles y
              estructuramos la solución financiera más conveniente para cada
              empresa.
            </p>

            <Link href="/contacto" className={styles.closingLink}>
              Hablar con el equipo
            </Link>
          </div>
        </Container>
      </section>

      {isOpen && (
        <div
          className={styles.modalBackdrop}
          onClick={closeModal}
          role="presentation"
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="evaluacion-title"
          >
            <div className={styles.modalHeader}>
              <div>
                <span className={styles.modalEyebrow}>Iniciar evaluación</span>
                <h3 id="evaluacion-title" className={styles.modalTitle}>
                  Subí la documentación y tus datos de contacto
                </h3>
                <p className={styles.modalText}>
                  Completá la información para que podamos realizar una primera
                  evaluación financiera.
                </p>
              </div>

              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeModal}
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Nombre o razón social"
                    value={formData.empresa}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email de contacto</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="empresa@dominio.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="telefono">Teléfono de contacto</label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="+54 9 11 1234-5678"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.uploadGrid}>
                <label className={styles.uploadCard}>
                  <span className={styles.uploadTitle}>
                    Último balance inscripto
                  </span>
                  <span className={styles.uploadHint}>PDF, Excel o imagen</span>
                  <input
                    type="file"
                    accept=".pdf,.xls,.xlsx,.csv,.jpg,.jpeg,.png"
                    onChange={handleFileChange("balance")}
                  />
                  <span className={styles.uploadBtn}>Seleccionar archivo</span>
                  <span className={styles.fileName}>
                    {getFileLabel(files.balance)}
                  </span>
                </label>

                <label className={styles.uploadCard}>
                  <span className={styles.uploadTitle}>
                    Ventas posteriores al cierre
                  </span>
                  <span className={styles.uploadHint}>PDF, Excel o imagen</span>
                  <input
                    type="file"
                    accept=".pdf,.xls,.xlsx,.csv,.jpg,.jpeg,.png"
                    onChange={handleFileChange("ventas")}
                  />
                  <span className={styles.uploadBtn}>Seleccionar archivo</span>
                  <span className={styles.fileName}>
                    {getFileLabel(files.ventas)}
                  </span>
                </label>

                <label className={styles.uploadCard}>
                  <span className={styles.uploadTitle}>
                    Composición accionaria con CUIT
                  </span>
                  <span className={styles.uploadHint}>PDF, Excel o imagen</span>
                  <input
                    type="file"
                    accept=".pdf,.xls,.xlsx,.csv,.jpg,.jpeg,.png"
                    onChange={handleFileChange("accionaria")}
                  />
                  <span className={styles.uploadBtn}>Seleccionar archivo</span>
                  <span className={styles.fileName}>
                    {getFileLabel(files.accionaria)}
                  </span>
                </label>
              </div>

              {status === "error" && (
                <p className={styles.feedbackError}>
                  Completá empresa, email, teléfono y los 3 archivos requeridos.
                </p>
              )}

              {status === "success" && (
                <p className={styles.feedbackSuccess}>
                  La interfaz ya quedó lista. Ahora solo falta conectar este
                  formulario a tu endpoint para recibir la documentación de
                  forma real.
                </p>
              )}

              <div className={styles.submitRow}>
                <button
                  type="submit"
                  className={styles.primaryBtn}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Enviando..." : "Iniciar evaluación"}
                </button>
              </div>
              {status === "sent" && (
                <p className={styles.feedbackSuccess}>
                  ¡Gracias! Recibimos la información. En hasta 72 horas te
                  contactamos con una primera evaluación financiera.
                </p>
              )}

              {status === "error" && (
                <p className={styles.feedbackError}>
                  Revisá los datos y los archivos obligatorios, e intentá
                  nuevamente.
                </p>
              )}

              <p className={styles.modalLegal}>
                La evaluación inicial no tiene costo. En hasta 72 horas te
                contactamos con una primera evaluación financiera.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
