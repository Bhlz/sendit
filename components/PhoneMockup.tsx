export default function PhoneMockup(){
  return (
    <div className="mx-auto w-72 md:w-96">
      <div className="relative aspect-[9/19.5] w-full rounded-[44px] bg-[color:var(--bg)] border border-[color:var(--divider)] shadow-soft overflow-hidden">
        {/* Chat simplificado con paleta azul/naranja */}
        <div className="absolute inset-0 p-4 flex flex-col gap-2">
          <div className="self-start max-w-[78%] rounded-2xl bg-[color:var(--input)] border border-[color:var(--divider)] px-3 py-2 text-sm text-[color:var(--muted)]">
            Quiero enviar un paquete
          </div>
          <div className="self-end max-w-[78%] rounded-2xl bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/30 text-[color:var(--text)] px-3 py-2 text-sm">
            ¡Perfecto! Comparte origen, destino y medidas 📦
          </div>
          <div className="self-start max-w-[78%] rounded-2xl bg-[color:var(--input)] border border-[color:var(--divider)] px-3 py-2 text-sm text-[color:var(--muted)]">
            Listo, ya está. ¿Cuánto sale?
          </div>
          <div className="self-end max-w-[78%] rounded-2xl bg-[color:var(--accent2)]/10 border border-[color:var(--accent2)]/40 px-3 py-2 text-sm text-[color:var(--text)]">
            Tu guía está lista. Págala y descarga aquí.
          </div>
        </div>
      </div>
    </div>
  );
}