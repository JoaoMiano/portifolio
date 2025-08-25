import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portifólio - João Miano",
  description: "Portifólio para exibir meus projetos e habilidades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
