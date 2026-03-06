// app/layout.jsx  (o src/app/layout.jsx)
import { Work_Sans } from "next/font/google";
import "./globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://valuelatam.com"),
  title: {
    default: "Value Latam | Mercado de Capitales & Consultoría Financiera",
    template: "Value Latam",
  },
  description:
    "Firma especializada en mercado de capitales y estructuración de financiamiento a través de agentes registrados. Consultoría financiera estratégica para empresas: financiamiento, inversiones y gestión de liquidez con ejecución end-to-end.",
  keywords: [
    "mercado de capitales",
    "financiamiento en mercado de capitales",
    "estructuración de financiamiento",
    "ALyC",
    "SGR",
    "CNV",
    "consultoría financiera estratégica",
    "gestión de liquidez",
    "inversiones",
    "empresas",
    "PyME",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Value Latam | Mercado de Capitales & Consultoría Financiera",
    description:
      "Mercado de capitales y estructuración de financiamiento a través de agentes registrados. Consultoría financiera estratégica para empresas con ejecución end-to-end.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Value Latam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Latam | Mercado de Capitales & Consultoría Financiera",
    description:
      "Mercado de capitales y estructuración de financiamiento a través de agentes registrados. Consultoría financiera estratégica para empresas.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={workSans.variable}>
        <a className="sr-only skip-link" href="#content">
          Saltar al contenido
        </a>

        <Header />

        <main id="content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
