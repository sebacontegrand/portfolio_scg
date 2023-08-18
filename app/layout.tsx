import "./globals.css";
import { Archivo, Poppins, Plus_Jakarta_Sans } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Sebastian Portfolio",
  description: "Mejora la propuesta de valor de tu negocio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
