function Bullet({ title, desc }:{ title:string; desc:string; }){
  return (
    <div className="card p-6 hover:shadow-brand transition">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10" aria-hidden="true" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-[color:var(--muted)]">{desc}</p>
    </div>
  );
}

export default function Benefits(){
  const items = [
    { title: "Sin apps ni formularios", desc: "Olvida registros eternos. Usa el chat que ya conoces." },
    { title: "Mejores precios", desc: "Accede a tarifas con descuento con paqueterías líderes." },
    { title: "Todo en un lugar", desc: "Genera, paga y rastrea sin salir de la conversación." },
    { title: "Para todos", desc: "Desde particulares hasta e-commerce: funciona para ambos." }
  ];
  return (
    <section className="px-6 pb-8" aria-labelledby="benefits-title">
      <div className="max-w-6xl mx-auto">
        <h2 id="benefits-title" className="text-3xl md:text-4xl font-semibold tracking-[-0.02em]">Hecho para enviar sin fricción</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((it,i)=><Bullet key={i} title={it.title} desc={it.desc} />)}
        </div>
      </div>
    </section>
  );
}