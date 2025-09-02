import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { SITE_URL } from "@/lib/env";

export const metadata: Metadata = {
  title: "sendit.lat — Envíos por WhatsApp (Beta privada)",
  description: "Genera, paga y rastrea tus guías desde una conversación. Únete a la beta privada.",
  openGraph: {
    title: "sendit.lat — Coming soon",
    description: "Envíos por WhatsApp. Casi magia.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "sendit.lat" }]
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#070B12" }
  ],
  metadataBase: new URL(SITE_URL)
};

/**
 * DEFAULT: claro.
 * Si localStorage.theme === 'dark' → aplica oscuro.
 * Si no hay nada en localStorage → claro.
 * (Ignoramos la preferencia del sistema.)
 */
const themeInit = `
(function(){
  try {
    var stored = localStorage.getItem('theme'); // 'dark' | 'light' | null
    var root = document.documentElement;
    if (stored === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark'); // default claro
    }
  } catch(e){}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body
        className="
          min-h-screen
          bg-[color:var(--bg)]
          text-[color:var(--text)]
          antialiased transition-colors duration-300
        "
      >
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:ring-2 focus:ring-[color:var(--ring)] rounded px-2 py-1 bg-[color:var(--surface)] border border-[color:var(--divider)] text-[color:var(--text)] text-sm"
        >
          Saltar al contenido
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
