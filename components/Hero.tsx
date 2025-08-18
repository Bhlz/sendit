import PhoneMockup from "./PhoneMockup";
import Countdown from "./Countdown";

export default function Hero(){
  return (
    <section className="relative min-h-[78vh] md:min-h-[86vh] flex items-center px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center pt-6">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-[-0.02em]">
            Envíos por WhatsApp. <span className="text-[color:var(--accent)]">Casi magia.</span>
          </h1>
          <p className="mt-5 text-lg text-[color:var(--muted)]">
            Genera, paga y rastrea tus guías desde una conversación. Únete a la beta privada.
          </p>
          <div className="mt-6">
            <Countdown label="Lanzamiento" />
          </div>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#waitlist" className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] text-white font-medium px-6 py-3 hover:brightness-110 shadow-brand transition">
              Quiero acceso temprano
            </a>
            <a href="#steps" className="rounded-full border border-[color:var(--divider)] px-6 py-3 text-[color:var(--text)] hover:border-[color:var(--text)] transition">
              Ver cómo funciona
            </a>
          </div>
          <p className="mt-6 text-sm text-[color:var(--muted)]">Sin apps. Sin fricción. Con paqueterías líderes.</p>
        </div>

        <div className="relative">
          <PhoneMockup />
          <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 rounded-full blur-3xl animate-float" style={{ background: "radial-gradient(circle, rgba(255,107,0,0.18), transparent 60%)" }} />
        </div>
      </div>
    </section>
  );
}