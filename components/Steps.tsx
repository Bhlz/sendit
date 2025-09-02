'use client';

import ScrollReveal from "./ScrollReveal";

type Step = { title: string; desc: string; icon: JSX.Element };

function StepCard({ i, title, desc, icon }: { i: number } & Step) {
  const stepNumber = i + 1;

  return (
    <article
      className="
        group relative
        rounded-2xl p-[1px]
        bg-[linear-gradient(140deg,rgba(10,132,255,0.35),rgba(255,107,0,0.30))]
        transition-transform duration-300
        hover:-translate-y-0.5
      "
      data-reveal="up"
      data-delay={0.05 + i * 0.04}
      aria-label={`Paso ${stepNumber}: ${title}`}
    >
      {/* Inner glass */}
      <div
        className="
          relative rounded-2xl glass
          bg-[color:var(--surface)]/70
          backdrop-blur
          overflow-hidden
          p-5 sm:p-6
        "
      >
        {/* Sheen */}
        <span
          className="
            pointer-events-none absolute -inset-y-2 -left-1/2 w-[80%]
            rotate-[20deg]
            bg-gradient-to-r from-white/0 via-white/30 to-white/0
            translate-x-[-140%] group-hover:translate-x-[180%]
            transition-transform duration-700 ease-out
          "
          aria-hidden
        />

        <div className="flex items-start gap-4">
          {/* Badge número + icon */}
          <div className="relative">
            <div
              className="
                flex items-center justify-center
                h-10 w-10 rounded-2xl
                bg-[linear-gradient(140deg,rgba(10,132,255,0.18),rgba(255,107,0,0.15))]
                border border-[color:var(--divider)]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]
                text-[color:var(--text)]
              "
              aria-hidden
            >
              {icon}
            </div>
            <span
              className="
                absolute -bottom-2 -right-2
                h-6 min-w-6 px-1
                rounded-full
                text-[11px] font-semibold
                bg-[color:var(--text)] text-white
                shadow-soft
                grid place-items-center
              "
              aria-hidden
            >
              {stepNumber}
            </span>
          </div>

          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold tracking-[-0.01em]">
              {title}
            </h3>
            <p className="mt-2 text-[13.5px] sm:text-[15px] text-[color:var(--muted)]">
              {desc}
            </p>
          </div>
        </div>

        {/* Glow al hover */}
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

      {/* Conectores: horizontal en md+, vertical en móvil (excepto último) */}
      {stepNumber < 3 && (
        <>
          {/* Horizontal (md+) */}
          <span
            className="
              hidden md:block
              absolute top-1/2 -right-3
              h-[2px] w-7
              bg-[linear-gradient(90deg,var(--accent),var(--accent2))]
              opacity-70
            "
            aria-hidden
          />
          {/* Vertical (móvil) */}
          <span
            className="
              md:hidden
              absolute -bottom-3 left-1/2 -translate-x-1/2
              h-7 w-[2px]
              bg-[linear-gradient(180deg,var(--accent),var(--accent2))]
              opacity-70
            "
            aria-hidden
          />
        </>
      )}
    </article>
  );
}

export default function Steps() {
  const steps: Step[] = [
    {
      title: "Escribe en WhatsApp",
      desc: "Di: “Quiero enviar un paquete” y sigue las instrucciones.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
          <path
            fill="currentColor"
            d="M20.52 3.48A11.77 11.77 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.85A11.7 11.7 0 0 0 2.6 19L0 24l5.26-2.53a11.85 11.85 0 0 0 6.8 2.08h.01c6.56 0 11.85-5.3 11.85-11.86a11.8 11.8 0 0 0-3.4-8.21M12.06 21.3h-.01a9.47 9.47 0 0 1-4.83-1.32l-.35-.2-3.12 1.5.66-3.03-.22-.31a9.47 9.47 0 0 1-1.47-5.07c0-5.22 4.25-9.47 9.48-9.47A9.4 9.4 0 0 1 21.5 11.9c0 5.22-4.25 9.4-9.44 9.4m5.5-7.06c-.3-.16-1.8-.88-2.09-.98-.28-.1-.5-.15-.72.15-.21.3-.82.98-1 1.18-.19.2-.37.22-.68.08-.3-.16-1.25-.46-2.39-1.45-.88-.78-1.48-1.74-1.66-2.04-.17-.3-.02-.46.13-.62.13-.13.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.54-.08-.16-.72-1.7-.98-2.33-.26-.64-.52-.55-.72-.55h-.6c-.2 0-.54.08-.83.38-.3.3-1.1 1.08-1.1 2.62 0 1.54 1.13 3.02 1.28 3.22.16.2 2.23 3.4 5.4 4.76.76.33 1.35.53 1.82.68.76.24 1.45.2 2 .12.61-.09 1.8-.73 2.05-1.45.25-.72.25-1.34.17-1.45-.08-.1-.27-.17-.57-.32"
          />
        </svg>
      ),
    },
    {
      title: "Comparte detalles",
      desc: "Origen, destino y medidas. En segundos obtienes opciones.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
          <path fill="currentColor" d="M20 8h-7V4h7m1-2h-9a1 1 0 0 0-1 1v17l5-2 5 2V1a1 1 0 0 0-1-1M4 6h6v2H4v12h9v2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
        </svg>
      ),
    },
    {
      title: "Paga y descarga",
      desc: "Tu guía queda lista para imprimir y rastrear.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
          <path fill="currentColor" d="M5 20h14v-2H5v2ZM19 9h-4V3H9v6H5l7 7 7-7Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="steps"
      aria-labelledby="steps-title"
      className="relative px-4 sm:px-6 py-14 sm:py-16"
    >
      {/* Decor: líneas sutiles + orbes */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          color: "rgba(10,27,46,0.6)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -z-10 -top-24 left-0 h-60 w-60 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(10,132,255,0.22), transparent 60%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -z-10 -bottom-16 right-0 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.18), transparent 60%)" }}
        aria-hidden
      />

      {/* Motor de reveal */}
      <ScrollReveal />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4">
          <h2
            id="steps-title"
            className="text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold tracking-[-0.02em]"
            data-reveal="up"
          >
            <span className="shimmer">Así de simple</span>
          </h2>
          <p
            className="hidden md:block text-[color:var(--muted)]"
            data-reveal="up"
            data-delay="0.05"
          >
            Tres pasos. Cero fricción. Todo desde una conversación.
          </p>
        </div>

        {/* Subcopy en mobile */}
        <p className="mt-3 md:hidden text-[color:var(--muted)] max-w-2xl" data-reveal="up" data-delay="0.05">
          Tres pasos. Cero fricción. Todo desde una conversación.
        </p>

        {/* Grid de pasos */}
        <div
          className="
            relative mt-8 sm:mt-10
            grid grid-cols-1 md:grid-cols-3
            gap-4 sm:gap-6
          "
        >
          {steps.map((s, i) => (
            <StepCard key={s.title} i={i} {...s} />
          ))}

          {/* Línea de progreso detrás (solo md+) */}
          <div
            className="
              hidden md:block
              pointer-events-none absolute top-1/2 left-[8.5%] right-[8.5%]
              h-[2px]
              bg-[linear-gradient(90deg,var(--accent),var(--accent2))]
              opacity-20
              -z-10
            "
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
