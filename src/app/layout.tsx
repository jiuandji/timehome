import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../styles/variables.css";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TIME HOME REALTY — Inmobiliaria Premium en la Costa Brava",
  description:
    "Agencia inmobiliaria especializada en la compraventa y arrendamiento de bienes raíces en la Costa Brava. Villas, apartamentos y propiedades exclusivas. Servicio en 5 idiomas.",
  keywords: [
    "inmobiliaria Costa Brava",
    "comprar casa Costa Brava",
    "villa lujo Platja d'Aro",
    "apartamento Begur",
    "propiedad Palamós",
    "Costa Brava real estate",
    "luxury villa Spain",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
