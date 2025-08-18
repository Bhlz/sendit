'use client';
import { useEffect, useState } from 'react';

type Props = { target?: string; label?: string; };
const pad = (n:number)=>n.toString().padStart(2,'0');

export default function Countdown({ target, label='Lanzamiento' }:Props){
  const [txt,setTxt] = useState<string | null>(null);
  useEffect(()=>{
    if(!target) return;
    const end = new Date(target).getTime();
    const id = setInterval(()=>{
      const diff = Math.max(0, end - Date.now());
      const d = Math.floor(diff/86400000);
      const h = Math.floor((diff/3600000)%24);
      const m = Math.floor((diff/60000)%60);
      const s = Math.floor((diff/1000)%60);
      setTxt(`${pad(d)}d : ${pad(h)}h : ${pad(m)}m : ${pad(s)}s`);
    },1000);
    return ()=>clearInterval(id);
  },[target]);

  if(!target){
    return <div aria-live="polite" className="inline-flex items-center gap-2 text-[color:var(--muted)]">
      <span className="h-2 w-2 rounded-full bg-[color:var(--accent2)] animate-pulse" aria-hidden="true" />
      <span>Muy pronto</span>
    </div>;
  }
  return (
    <div aria-live="polite" className="inline-flex items-center gap-3 rounded-full border border-[color:var(--divider)] px-3 py-2 text-sm text-[color:var(--muted)]">
      <span className="text-[color:var(--text)]/80">{label} en</span>
      <span className="font-mono tracking-wider text-[color:var(--text)]">{txt ?? '—'}</span>
    </div>
  );
}