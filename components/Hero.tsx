'use client';

import dynamic from 'next/dynamic';
import { useTilt } from '@/hooks/useTilt';
import { usePerfMode } from '@/hooks/usePerfMode';
import Countdown from './Countdown';
import { LIGHT_PERF } from '@/lib/env';

// Carga diferida de piezas "pesadas"
const PhoneMockup = dynamic(() => import('./PhoneMockup'), { ssr: false });
const ParticlesBg = dynamic(() => import('./ParticlesBg'), { ssr: false });
const AuroraFX   = dynamic(() => import('./AuroraFX'),   { ssr: false });

export default function Hero() {
  const tiltRef = useTilt(10);
  const { perfOn } = usePerfMode();

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="
        relative hero-gradient
        min-h-[72vh] sm:min-h-[78vh] lg:min-h-[88vh]
        flex items-center
        px-4 sm:px-6
        overflow-hidden
      "
      style={{ contain: 'layout paint' }}
    >
      {/* Fondos condicionados */}
      <ParticlesBg disabled={perfOn} lite={!perfOn} />
      <AuroraFX disabled={perfOn || LIGHT_PERF} />

      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 lg:grid-cols-2
          gap-10 lg:gap-12
          items-center
          pt-8
          w-full
        "
      >
        <div className="relative z-10 order-1">
          <div
            aria-hidden
            className="pointer-events-none absolute -z-10 -top-10 -left-6 h-64 w-64 sm:h-80 sm:w-80 rounded-full blur-3xl opacity-70"
            style={{ background: "radial-gradient(circle, rgba(10,132,255,.18), transparent 60%)" }}
          />

          <div className="chip glass text-muted inline-flex" aria-label="Estado: Beta privada">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)] animate-pulse mr-2" aria-hidden />
            Beta privada
          </div>

          <h1
            id="hero-title"
            className="mt-4 text-[clamp(1.9rem,4.6vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.02em]"
          >
            <span className="shimmer">Envíos por WhatsApp</span>.{" "}
            <span className="text-[color:var(--accent)]">Casi magia.</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] text-[color:var(--muted)] max-w-[52ch]">
            Genera, paga y rastrea tus guías desde una conversación. Únete a la beta privada.
          </p>

          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <Countdown label="Lanzamiento" />
            <div className="flex items-center gap-2 text-xs">
              <span className="chip motion-safe:animate-float" style={{ animationDuration: '11s' }}>Sin apps</span>
              <span className="chip motion-safe:animate-float" style={{ animationDuration: '9.5s', animationDelay: '.6s' }}>Paqueterías líderes</span>
              <span className="chip motion-safe:animate-float" style={{ animationDuration: '12.5s', animationDelay: '.2s' }}>Pagos seguros</span>
            </div>
          </div>

          <div className="mt-6 sm:mt-7 flex flex-wrap gap-3 sm:gap-4">
            <a href="#waitlist" className="relative inline-flex items-center justify-center rounded-2xl px-5 py-3 text-white p-[2px] bg-[linear-gradient(135deg,var(--accent),var(--accent2))] shadow-soft glow-brand">
              <span className="rounded-[14px] bg-[color:var(--text)] px-4 py-2.5">Obtener acceso temprano</span>
            </a>
            <a href="#steps" className="rounded-2xl px-5 py-3 border border-[color:var(--divider)] hover:border-[color:var(--text)] transition">
              Ver cómo funciona
            </a>
          </div>

          <p className="mt-5 sm:mt-6 text-[13px] sm:text-sm text-[color:var(--muted)]">
            Sin apps. Sin fricción. Con paqueterías líderes.
          </p>
        </div>

        {/* Mockup con tilt (no depende de perfOn; el propio PhoneMockup optimiza Canvas) */}
        <div className="relative order-2 lg:order-2">
          <div ref={tiltRef} className="will-change-transform transition-transform duration-300 mx-auto w-[clamp(16rem,70vw,25rem)]">
            <PhoneMockup />
          </div>

          <div
            className="absolute -z-10 -top-8 sm:-top-10 -right-6 sm:-right-10 w-40 h-40 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-80"
            style={{ background: "radial-gradient(circle, rgba(255,107,0,0.18), transparent 60%)" }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
