'use client';

import ScrollReveal from "./ScrollReveal";

type Benefit = { title: string; desc: string; icon: JSX.Element };

function IconBubble({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        relative h-10 w-10 shrink-0
        rounded-2xl
        bg-[linear-gradient(140deg,rgba(10,132,255,0.18),rgba(255,107,0,0.15))]
        border border-[color:var(--divider)]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* brillo interno */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20"
           style={{ background: "radial-gradient(120% 80% at 0% 0%, rgba(255,255,255,0.8), transparent 45%)" }} />
      {/* dots sutiles */}
      <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-white/35 dark:bg-white/10 blur-[6px]" />
      <div className="relative z-10 flex items-center justify-center h-full text-[color:var(--text)]">
        {children}
      </div>
    </div>
  );
}

function BenefitCard({ title, desc, icon, i }: Benefit & { i: number }) {
  return (
    <li
      className="
        group relative
        rounded-2xl
        p-[1px]
        bg-[linear-gradient(140deg,rgba(10,132,255,0.35),rgba(255,107,0,0.30))]
        [mask-composite:exclude]
        transition-transform duration-300
        hover:translate-y-[-2px]
      "
      data-reveal="up"
      data-delay={0.05 + i * 0.03}
    >
      {/* inner glass */}
      <div
        className="
          relative rounded-2xl glass
          bg-[color:var(--surface)]/70
          backdrop-blur
          p-5 sm:p-6
          overflow-hidden
        "
      >
        {/* sheen */}
        <span
          className="
            pointer-events-none absolute -inset-y-1 -left-1/2 w-[80%]
            rotate-[20deg]
            bg-gradient-to-r from-white/0 via-white/30 to-white/0
            translate-x-[-140%] group-hover:translate-x-[180%]
            transition-transform duration-700 ease-out
          "
          aria-hidden
        />

        <div className="flex items-start gap-4">
          <IconBubble>
            {/* ícono inline para no agregar libs */}
            {icon}
          </IconBubble>
          <div>
            <h3 className="text-base sm:text-lg font-semibold tracking-[-0.01em]">
              {title}
            </h3>
            <p className="mt-2 text-[13.5px] sm:text-[15px] text-[color:var(--muted)]">
              {desc}
            </p>
          </div>
        </div>

        {/* glow al pasar */}
        <div
          className="
            pointer-events-none absolute -z-10
            -top-10 -right-10 h-40 w-40 rounded-full blur-3xl
            opacity-0 group-hover:opacity-40
            transition-opacity duration-500
          "
          style={{ background: 'radial-gradient(circle, rgba(10,132,255,0.22), transparent 60%)' }}
          aria-hidden
        />
      </div>
    </li>
  );
}

export default function Benefits() {
  const items: Benefit[] = [
    {
      title: "Sin apps ni formularios",
      desc: "Olvida registros eternos. Usa el chat que ya conoces.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90">
          <path fill="currentColor" d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2Z" />
        </svg>
      )
    },
    {
      title: "Mejores precios",
      desc: "Accede a tarifas con descuento con paqueterías líderes.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90">
          <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm0 20c-3.87-1.12-7-5.13-7-9.5V6.3l7-3.11 7 3.11V11.5C19 15.87 15.87 19.88 12 21Z"/>
          <path fill="currentColor" d="M12 7a4 4 0 100 8 4 4 0 000-8Zm0 6a2 2 0 110-4 2 2 0 010 4Z"/>
        </svg>
      )
    },
    {
      title: "Todo en un lugar",
      desc: "Genera, paga y rastrea sin salir de la conversación.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90">
          <path fill="currentColor" d="M4 4h7v7H4V4Zm9 0h7v7h-7V4Zm0 9h7v7h-7v-7ZM4 13h7v7H4v-7Z"/>
        </svg>
      )
    },
    {
      title: "Para todos",
      desc: "Desde particulares hasta e-commerce: funciona para ambos.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90">
          <path fill="currentColor" d="M12 12a4 4 0 10-4-4 4 4 0 004 4Zm-7 9a7 7 0 0114 0Z"/>
        </svg>
      )
    }
  ];

  return (
    <section
      className="relative px-4 sm:px-6 py-12 sm:py-16"
      aria-labelledby="benefits-title"
    >
      {/* Decor: grid + orbes */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] dark:opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          color: "rgba(10,27,46,0.6)"
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -z-10 -top-20 -left-10 h-64 w-64 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(10,132,255,0.22), transparent 60%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -z-10 bottom-0 right-0 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.18), transparent 60%)' }}
        aria-hidden
      />

      {/* Reveal engine */}
      <ScrollReveal />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4">
          <h2
            id="benefits-title"
            className="
              text-[clamp(1.6rem,3.2vw,2.4rem)]
              font-semibold tracking-[-0.02em]
            "
            data-reveal="up"
          >
            <span className="shimmer">Hecho para enviar</span>{" "}
            <span className="text-[color:var(--accent)]">sin fricción</span>
          </h2>

          {/* chip complementario */}
          <div
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-full glass"
            data-reveal="up"
            data-delay="0.05"
          >
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] animate-pulse" />
            Listo para producción
          </div>
        </div>

        <ul
          role="list"
          className="
            mt-7 sm:mt-8
            grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
            gap-4 sm:gap-6
          "
        >
          {items.map((it, i) => (
            <BenefitCard key={it.title} i={i} {...it} />
          ))}
        </ul>
      </div>

      {/* estilos locales extra */}
      <style jsx>{`
        /* suaviza el scroll reveal si no está cargado el motor */
        [data-reveal] { will-change: transform, opacity; }

        /* fallback si quisieras activar un pulso sutil en los bordes
           .group:hover & { box-shadow: ... } ya lo hace el glow */
      `}</style>
    </section>
  );
}
