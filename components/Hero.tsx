'use client';

import PhoneMockup from "./PhoneMockup";
import Countdown from "./Countdown";
import ParticlesBg from "./ParticlesBg";
import ScrollReveal from "./ScrollReveal";
import { useTilt } from "@/hooks/useTilt";
// import ThreeHeroBg from "./ThreeHeroBg"; // ← descomenta si quieres el fondo 3D

export default function Hero() {
  const tiltRef = useTilt(10);

  return (
    <section
      className="relative hero-gradient min-h-[78vh] md:min-h-[86vh] flex items-center px-6 overflow-hidden"
      id="hero"
      aria-labelledby="hero-title"
    >
      {/* Fondos */}
      <ParticlesBg />
      {/* <ThreeHeroBg /> */}
      <ScrollReveal />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center pt-6">
        {/* Columna izquierda: copy + CTAs */}
        <div className="relative z-10">
          {/* Chip superior */}
          <div
            className="chip glass text-muted"
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

          {/* Título con shimmer global */}
          <h1
            id="hero-title"
            className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-[-0.02em]"
            data-reveal="up"
          >
            <span className="shimmer">Envíos por WhatsApp</span>.{" "}
            <span className="text-[color:var(--accent)]">Casi magia.</span>
          </h1>

          {/* Subtítulo */}
          <p
            className="mt-5 text-lg text-[color:var(--muted)]"
            data-reveal="up"
            data-delay="0.05"
          >
            Genera, paga y rastrea tus guías desde una conversación. Únete a la beta privada.
          </p>

          {/* Countdown + chips */}
          <div className="mt-6 flex items-center gap-4" data-reveal="up" data-delay="0.1">
            <Countdown label="Lanzamiento" />
            <div className="flex items-center gap-2 text-xs">
              <span className="chip">Sin apps</span>
              <span className="chip">Paqueterías líderes</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-4" data-reveal="up" data-delay="0.15">
            <a
              href="#waitlist"
              className="rounded-2xl px-5 py-3 bg-[color:var(--text)] text-white shadow-soft glow-brand hover:opacity-95 transition"
            >
              Obtener acceso temprano
            </a>
            <a
              href="#steps"
              className="rounded-2xl px-5 py-3 border border-[color:var(--divider)] hover:border-[color:var(--text)] transition"
            >
              Ver cómo funciona
            </a>
          </div>

          <p
            className="mt-6 text-sm text-[color:var(--muted)]"
            data-reveal="up"
            data-delay="0.2"
          >
            Sin apps. Sin fricción. Con paqueterías líderes.
          </p>
        </div>

        {/* Columna derecha: mockup con tilt */}
        <div className="relative" data-reveal="left">
          <div ref={tiltRef} className="will-change-transform transition-transform duration-300">
            <PhoneMockup />
          </div>
          {/* Glow decorativo */}
          <div
            className="absolute -z-10 -top-10 -right-10 w-64 h-64 rounded-full blur-3xl"
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
