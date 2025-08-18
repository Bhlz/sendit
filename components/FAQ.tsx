export default function FAQ(){
  const qas = [
    { q: "¿Cuándo lanzan?", a: "Muy pronto. Los preregistrados obtienen acceso anticipado en oleadas." },
    { q: "¿Cuánto cuesta?", a: "Tendremos precios con descuento por volumen y tarifas preferenciales en las paqueterías." },
    { q: "¿Con qué paqueterías funciona?", a: "Con paqueterías líderes en México. Confirmamos integraciones en el onboarding." },
    { q: "¿Sirve para e-commerce?", a: "Sí. Para tiendas y para envíos ocasionales de particulares." }
  ];
  return (
    <section className="px-6 py-16" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto">
        <h2 id="faq-title" className="text-3xl md:text-4xl font-semibold tracking-[-0.02em]">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-[color:var(--divider)] border border-[color:var(--divider)] rounded-brand overflow-hidden">
          {qas.map((item,i)=>(
            <details key={i} className="group open:bg-[color:var(--accent)]/5">
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between">
                <span className="font-medium">{item.q}</span>
                <span className="text-[color:var(--muted)] group-open:rotate-180 transition" aria-hidden="true">⌄</span>
              </summary>
              <div className="px-5 pb-5 text-[color:var(--muted)]">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}