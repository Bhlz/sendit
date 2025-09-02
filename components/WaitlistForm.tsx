'use client';
import { useState, useRef } from 'react';
const PUBLIC_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || '';

export default function WaitlistForm(){
  const [loading,setLoading] = useState(false);
  const [ok,setOk] = useState(false);
  const [error,setError] = useState<string|null>(null);
  const [code,setCode] = useState<string|null>(null);
  const [shareUrl,setShareUrl] = useState<string>(PUBLIC_SITE_URL);
  const liveRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setLoading(true); setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string,string>;
    try{
      const res = await fetch('/api/early-access', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ email: data.email, name: data.name })
      });
      const json = await res.json();
      if(!res.ok || !json.ok){ throw new Error(json.error || 'Error'); }
      setOk(true); setCode(json.code); setShareUrl(json.shareUrl);
      setTimeout(()=>liveRef.current?.focus(), 0);
    }catch(err:any){
      setError(err.message || 'Error inesperado');
    }finally{
      setLoading(false);
    }
  }

  const shareWa = `https://wa.me/?text=${encodeURIComponent('Únete a Sendit (beta privada): ' + (shareUrl || PUBLIC_SITE_URL))}`;

  return (
    <div className="card p-6 md:p-8">
      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight" id="waitlist-title">Únete a la lista de acceso temprano</h3>
      <p className="mt-2 text-[color:var(--muted)]">Te avisaremos primero. Si compartes tu enlace, subes en la lista.</p>

      {!ok ? (
        <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-4" aria-labelledby="waitlist-title" aria-busy={loading}>
          <div className="sr-only">
            <label>Empresa</label>
            <input name="company" tabIndex={-1} autoComplete="off" />
          </div>
          <div>
            <label className="text-sm text-[color:var(--muted)]" htmlFor="name">Nombre</label>
            <input id="name" name="name" className="mt-1 w-full rounded-xl bg-[color:var(--input)] border border-[color:var(--divider)] px-3 py-2" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="text-sm text-[color:var(--muted)]" htmlFor="email">Email</label>
            <input id="email" name="email" required type="email" className="mt-1 w-full rounded-xl bg-[color:var(--input)] border border-[color:var(--divider)] px-3 py-2" placeholder="tucorreo@ejemplo.com" />
          </div>
          <div className="md:col-span-2 flex gap-3">
            <button disabled={loading} className="inline-flex items-center justify-center rounded-xl bg-[color:var(--text)] text-white px-4 py-2 shadow-soft hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]">
              {loading ? 'Enviando…' : 'Anotarme'}
            </button>
            <span aria-live="polite" ref={liveRef} className="sr-only">{error ? `Error: ${error}` : ok ? 'Registro exitoso' : ''}</span>
            {error && <span className="text-sm text-red-600">{error}</span>}
          </div>
        </form>
      ) : (
        <div className="mt-6 rounded-xl border border-[color:var(--divider)] p-4">
          <p className="text-[color:var(--muted)]">¡Listo! Este es tu enlace de referido:</p>
          <div className="mt-2 flex flex-col md:flex-row gap-3">
            <input readOnly value={shareUrl} className="w-full rounded-xl bg-[color:var(--input)] border border-[color:var(--divider)] px-3 py-2 font-mono" />
            <a target="_blank" rel="noreferrer" href={shareWa} className="inline-flex items-center justify-center rounded-xl bg-green-600 text-white px-4 py-2 hover:opacity-95">
              Compartir por WhatsApp
            </a>
          </div>
          <p className="mt-2 text-xs text-[color:var(--muted)]">Tu código: <span className="font-mono">{code}</span></p>
        </div>
      )}
    </div>
  );
}
