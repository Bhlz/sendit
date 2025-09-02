'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DISABLE = process.env.NEXT_PUBLIC_DISABLE_ANIM === '1';

/**
 * data-reveal="up|down|left|right|fade"  data-delay="0.1"
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (DISABLE) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const kills: Array<() => void> = [];

    els.forEach((el) => {
      // Garantiza visibilidad inicial (evita parpadeos/desapariciones)
      gsap.set(el, { autoAlpha: 1, x: 0, y: 0 });

      const dir = el.dataset.reveal || 'up';
      const delay = parseFloat(el.dataset.delay || '0');

      const from: gsap.TweenVars = { autoAlpha: 0, duration: 0.9, ease: 'power2.out', delay };
      if (dir === 'up') from.y = 24;
      if (dir === 'down') from.y = -24;
      if (dir === 'left') from.x = -24;
      if (dir === 'right') from.x = 24;
      if (dir === 'fade') { delete from.x; delete from.y; }

      const to: gsap.TweenVars = { autoAlpha: 1, x: 0, y: 0 };

      const tween = gsap.fromTo(el, from, {
        ...to,
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      });

      const st = tween.scrollTrigger as ScrollTrigger | null;
      if (st) kills.push(() => st.kill());
    });

    // Recalcular después de crear triggers
    ScrollTrigger.refresh();

    return () => {
      kills.forEach(fn => fn());
    };
  }, []);

  return null;
}
