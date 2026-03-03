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
    default: "Value Latam | Consultoría Financiera Integral",
    template: "%s | Value Latam",
  },
  description:
    "Consultoría financiera integral para empresas. Financiamiento, inversiones, gestión de liquidez y comercio exterior. Experiencia senior para ejecutar con claridad en contextos volátiles.",
  keywords: [
    "consultoría financiera",
    "financiamiento",
    "inversiones",
    "liquidez",
    "comercio exterior",
    "empresas",
    "PyME",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Value Latam | Consultoría Financiera Integral",
    description:
      "Consultoría financiera integral para empresas. Experiencia senior para ejecutar con claridad.",
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
    title: "Value Latam | Consultoría Financiera Integral",
    description:
      "Consultoría financiera integral para empresas. Experiencia senior para ejecutar con claridad.",
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
