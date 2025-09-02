'use client';

import PhoneMockup from "./PhoneMockup";
import Countdown from "./Countdown";
import ParticlesBg from "./ParticlesBg";
import ScrollReveal from "./ScrollReveal";
import { useTilt } from "@/hooks/useTilt";
// import ThreeHeroBg from "./ThreeHeroBg";

export default function Hero() {
  const tiltRef = useTilt(10);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="
        relative hero-gradient
        min-h-[70vh] sm:min-h-[76vh] lg:min-h-[86vh]
        flex items-center
        px-4 sm:px-6
        overflow-hidden
      "
    >
      {/* Fondos */}
      <ParticlesBg />
      {/* <ThreeHeroBg /> */}
      <ScrollReveal />

      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-12
          items-center
          pt-6
          w-full
        "
      >
        {/* Columna izquierda */}
        <div className="relative z-10 order-1">
          <div
            className="chip glass text-muted inline-flex"
            data-reveal="up"
            data-delay="0.05"
            aria-label="Estado: Beta privada"
          >
            <span
              className="h-2 w-2 rounded-full bg-[color:var(--accent)] animate-pulse mr-2"
              aria-hidden
            />
            Beta privada
          </div>

          <h1
            id="hero-title"
            className="
              mt-4
              text-[clamp(1.75rem,4vw,3.5rem)]
              font-semibold
              leading-[1.1]
              tracking-[-0.02em]
            "
            data-reveal="up"
          >
            <span className="shimmer">Envíos por WhatsApp</span>.{" "}
            <span className="text-[color:var(--accent)]">Casi magia.</span>
          </h1>

          <p
            className="
              mt-4 sm:mt-5
              text-[15px] sm:text-[17px]
              text-[color:var(--muted)]
            "
            data-reveal="up"
            data-delay="0.05"
          >
            Genera, paga y rastrea tus guías desde una conversación. Únete a la beta privada.
          </p>

          <div
            className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4"
            data-reveal="up"
            data-delay="0.1"
          >
            <Countdown label="Lanzamiento" />
            <div className="flex items-center gap-2 text-xs">
              <span className="chip">Sin apps</span>
              <span className="chip">Paqueterías líderes</span>
            </div>
          </div>

          <div
            className="mt-6 sm:mt-7 flex flex-wrap gap-3 sm:gap-4"
            data-reveal="up"
            data-delay="0.15"
          >
            <a
              href="#waitlist"
              className="
                rounded-2xl px-4 sm:px-5 py-3
                bg-[color:var(--text)] text-white
                shadow-soft glow-brand
                hover:opacity-95 transition
              "
            >
              Obtener acceso temprano
            </a>
            <a
              href="#steps"
              className="
                rounded-2xl px-4 sm:px-5 py-3
                border border-[color:var(--divider)]
                hover:border-[color:var(--text)] transition
              "
            >
              Ver cómo funciona
            </a>
          </div>

          <p
            className="mt-5 sm:mt-6 text-[13px] sm:text-sm text-[color:var(--muted)]"
            data-reveal="up"
            data-delay="0.2"
          >
            Sin apps. Sin fricción. Con paqueterías líderes.
          </p>
        </div>

        {/* Columna derecha */}
        <div className="relative order-2 lg:order-2" data-reveal="left">
          <div
            ref={tiltRef}
            className="
              will-change-transform transition-transform duration-300
              mx-auto
              w-[clamp(16rem,70vw,24rem)]
            "
          >
            <PhoneMockup />
          </div>

          {/* Glow decorativo (más pequeño en mobile) */}
          <div
            className="
              absolute -z-10
              -top-8 sm:-top-10
              -right-6 sm:-right-10
              w-40 h-40 sm:w-64 sm:h-64
              rounded-full blur-3xl
            "
            style={{
              background:
                "radial-gradient(circle, rgba(255,107,0,0.18), transparent 60%)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
