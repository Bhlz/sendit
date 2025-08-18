import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sendit.lat — Envíos por WhatsApp (Beta privada)",
  description: "Genera, paga y rastrea tus guías desde una conversación. Únete a la beta privada.",
  openGraph: {
    title: "sendit.lat — Coming soon",
    description: "Envíos por WhatsApp. Casi magia.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "sendit.lat" }]
  },
  metadataBase: new URL("https://sendit.lat")
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="es">
      <body className="min-h-screen text-text antialiased">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white border border-[color:var(--divider)] text-sm px-3 py-2 rounded">Saltar al contenido</a>
        {children}
      </body>
    </html>
  );
}