'use client';
import { useEffect, useRef } from 'react';

export default function ParticlesBg(){
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    const canvas = ref.current!; const ctx = canvas.getContext('2d')!;
    let raf=0; let w=0,h=0; const DPR = Math.min(window.devicePixelRatio||1,2);
    const particles = Array.from({length: 80}, ()=>({
      x: Math.random(), y: Math.random(),
      vx: (Math.random()-0.5)*0.0008, vy: (Math.random()-0.5)*0.0008
    }));
    function resize(){
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w*DPR; canvas.height = h*DPR; ctx.setTransform(DPR,0,0,DPR,0,0);
    }
    function step(){
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle = 'rgba(10,132,255,0.8)';
      ctx.strokeStyle = 'rgba(255,107,0,0.35)';
      for(const p of particles){
        p.x += p.vx; p.y += p.vy;
        if(p.x<0||p.x>1) p.vx*=-1; if(p.y<0||p.y>1) p.vy*=-1;
        const x = p.x*w, y=p.y*h;
        ctx.beginPath(); ctx.arc(x,y,1.6,0,Math.PI*2); ctx.fill();
      }
      // links
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const a=particles[i], b=particles[j];
          const dx=(a.x-b.x)*w, dy=(a.y-b.y)*h;
          const d=Math.hypot(dx,dy);
          if(d<120){
            ctx.globalAlpha = (120-d)/200;
            ctx.beginPath(); ctx.moveTo(a.x*w,a.y*h); ctx.lineTo(b.x*w,b.y*h); ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      raf = requestAnimationFrame(step);
    }
    const ro = new ResizeObserver(resize); ro.observe(canvas);
    resize(); raf = requestAnimationFrame(step);
    return ()=>{ cancelAnimationFrame(raf); ro.disconnect(); };
  },[]);
  return <canvas ref={ref} className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true" />;
}
