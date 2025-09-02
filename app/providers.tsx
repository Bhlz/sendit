// app/providers.tsx
'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.12, smoothWheel: true });
    const onTick = (t:number) => lenis.raf(t * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onLenisScroll);
    ScrollTrigger.refresh();
    return () => {
      gsap.ticker.remove(onTick);
      lenis.off?.('scroll', onLenisScroll);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}
