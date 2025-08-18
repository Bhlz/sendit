export default function Steps(){
  const steps = [
    { title: "Escribe en WhatsApp", desc: "Di: “Quiero enviar un paquete” y sigue las instrucciones." },
    { title: "Comparte detalles", desc: "Origen, destino y medidas. En segundos obtienes opciones." },
    { title: "Paga y descarga", desc: "Tu guía queda lista para imprimir y rastrear." }
  ];
  return (
    <section id="steps" aria-labelledby="steps-title" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 id="steps-title" className="text-3xl md:text-4xl font-semibold tracking-[-0.02em]">Así de simple</h2>
        <p className="mt-3 text-[color:var(--muted)] max-w-2xl">Tres pasos. Cero fricción. Todo desde una conversación.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s,i)=>(
            <article key={i} className="card p-6 hover:shadow-brand transition" aria-label={`Paso ${i+1}: ${s.title}`}>
              <div className="text-[color:var(--accent2)] text-sm font-medium">Paso {i+1}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-[color:var(--muted)]">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}