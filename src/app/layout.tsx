import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
   metadataBase: new URL("https://joaomiano.com.br"),
   title: "Portifólio - João Miano",
   description: "Portifólio para exibir meus projetos e habilidades",
   openGraph: {
      title: "Portifólio - João Miano",
      description: "Portifólio para exibir projetos e habilidades",
      url: "https://joaomiano.com.br",
      siteName: "Portifólio - João Miano",
      images: [
         {
            url: "/cover.png",
            width: 1200,
            height: 630,
            alt: "João Miano - Desenvolvedor",
         },
      ],
      locale: "pt_BR",
      type: "website",
   },
   twitter: {
      card: "summary_large_image",
      title: "Portifólio - João Miano",
      description: "Portifólio para exibir meus projetos e habilidades",
      images: ["/perfil.png"],
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-br">
         <body>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               {children}
            </ThemeProvider>

         </body>
      </html>
   );
}
