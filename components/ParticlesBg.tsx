'use client';

import { useEffect, useRef } from 'react';

type Props = {
  disabled?: boolean;
  lite?: boolean; // baja densidad / fps
};

export default function ParticlesBg({ disabled, lite }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (disabled) return;
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Partículas muy ligeras
    const count = lite ? 24 : 48;
    const dots = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * (lite ? 0.15 : 0.25),
      vy: (Math.random() - 0.5) * (lite ? 0.15 : 0.25),
      r: Math.random() * (lite ? 1.1 : 1.6) + 0.4,
      a: Math.random() * 0.35 + 0.1,
    }));

    const step = () => {
      // fps más bajo en modo lite
      raf = window.requestAnimationFrame(step);
      ctx.clearRect(0, 0, w, h);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10,132,255,${d.a})`;
        ctx.fill();
      }
    };
    step();

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [disabled, lite]);

  if (disabled) return null;
  return (
    <canvas
      ref={ref}
      className="absolute inset-0 -z-10"
      aria-hidden
      style={{ pointerEvents: 'none' }}
    />
  );
}
