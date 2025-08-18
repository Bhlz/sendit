'use client';
import { useState, useRef } from 'react';

export default function WaitlistForm(){
  const [loading,setLoading] = useState(false);
  const [ok,setOk] = useState(false);
  const [error,setError] = useState<string|null>(null);
  const liveRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setLoading(true); setError(null);
    const form = e.currentTarget;
    const trap = (form.querySelector('input[name="company"]') as HTMLInputElement)?.value;
    if(trap){ setLoading(false); setError('Error de validación.'); return; }
    const data = Object.fromEntries(new FormData(form)) as Record<string,string>;
    try{
      const res = await fetch('/api/early-access',{ method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
      const json = await res.json();
      if(json.ok){ setOk(true); form.reset(); liveRef.current?.focus(); }
      else setError('No pudimos registrar tus datos. Intenta de nuevo.');
    }catch{ setError('Error de red. Intenta en unos segundos.'); }
    finally{ setLoading(false); }
  }

  const waMessage = encodeURIComponent('Hola, quiero acceso a la beta de sendit.lat 🚀');

  return (
    <div className="card p-6 md:p-8">
      <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em]" id="waitlist-title">Únete a la lista de acceso temprano</h3>
      <p className="mt-2 text-[color:var(--muted)]">Te avisaremos primero. Si compartes tu enlace, subes en la lista.</p>

      {!ok ? (
        <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-4" aria-labelledby="waitlist-title" aria-busy={loading}>
          <div className="sr-only">
            <label>Empresa</label>
            <input name="company" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label className="text-sm text-[color:var(--muted)]" htmlFor="name">Nombre</label>
            <input id="name" name="name" required className="mt-1 w-full rounded-lg bg-[color:var(--bg)] border border-[color:var(--divider)] px-3 py-2 outline-none focus:border-[color:var(--accent)]/60" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="text-sm text-[color:var(--muted)]" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg bg-[color:var(--bg)] border border-[color:var(--divider)] px-3 py-2 outline-none focus:border-[color:var(--accent)]/60" placeholder="tucorreo@ejemplo.com" />
          </div>
          <div>
            <label className="text-sm text-[color:var(--muted)]" htmlFor="whatsapp">WhatsApp</label>
            <input id="whatsapp" name="whatsapp" inputMode="tel" className="mt-1 w-full rounded-lg bg-[color:var(--bg)] border border-[color:var(--divider)] px-3 py-2 outline-none focus:border-[color:var(--accent)]/60" placeholder="+52 33 1234 5678" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-[color:var(--muted)]" htmlFor="volume">Volumen mensual</label>
              <select id="volume" name="volume" defaultValue="0-20" className="mt-1 w-full rounded-lg bg-[color:var(--bg)] border border-[color:var(--divider)] px-3 py-2">
                <option>0-20</option><option>21-100</option><option>100+</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-[color:var(--muted)]" htmlFor="platform">Plataforma</label>
              <select id="platform" name="platform" defaultValue="Manual" className="mt-1 w-full rounded-lg bg-[color:var(--bg)] border border-[color:var(--divider)] px-3 py-2">
                <option>Shopify</option><option>Mercado Libre</option><option>Manual</option><option>Otro</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-2 flex items-start gap-2 pt-2">
            <input id="consent" name="consent" type="checkbox" required className="mt-1" />
            <label htmlFor="consent" className="text-sm text-[color:var(--muted)]">Acepto la <a className="underline hover:text-[color:var(--accent)]" href="/privacidad" target="_blank">política de privacidad</a>.</label>
          </div>

          {error && <div className="md:col-span-2 text-sm" style={{color:'#C62828'}} role="alert">{error}</div>}

          <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
            <button disabled={loading} className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] text-white font-medium px-6 py-3 hover:brightness-110 shadow-brand transition disabled:opacity-60">
              {loading ? 'Enviando...' : 'Unirme a la lista'}
            </button>
            <a className="rounded-full border border-[color:var(--divider)] px-6 py-3 text-[color:var(--text)] hover:border-[color:var(--text)] transition" href={`https://wa.me/?text=${waMessage}`} target="_blank" rel="noreferrer">
              Continuar en WhatsApp
            </a>
          </div>
        </form>
      ) : (
        <div className="mt-6 rounded-lg border border-[color:var(--divider)] bg-[color:var(--bg)] p-4">
          <div ref={liveRef} tabIndex={-1} aria-live="polite" className="text-lg font-medium">¡Estás dentro! 🎉</div>
          <p className="mt-1 text-[color:var(--muted)]">Te avisaremos antes del lanzamiento. Comparte tu enlace cuando esté disponible para subir en la lista.</p>
          <div className="mt-4">
            <a className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent2)] text-white font-medium px-6 py-3 hover:brightness-110 shadow-brand transition" href={`https://wa.me/?text=${waMessage}`} target="_blank" rel="noreferrer">
              Avísame por WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}