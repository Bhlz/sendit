'use client';

import { useEffect, useState } from 'react';
import { LIGHT_PERF } from '@/lib/env';

/**
 * Combina:
 * - Bandera global (NEXT_PUBLIC_LIGHT_PERF)
 * - Autodetección de hardware (cores/mem)
 * - prefers-reduced-motion
 */
export function usePerfMode() {
  const [lowPower, setLowPower] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Autodetección (suave)
    try {
      const cores = navigator.hardwareConcurrency || 4;
      const mem = (navigator as any).deviceMemory || 4;
      setLowPower(cores <= 4 || mem <= 4);
    } catch {
      setLowPower(false);
    }

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);

  // Modo rendimiento final:
  // Si LIGHT_PERF está activo, fuerza "on".
  const perfOn = LIGHT_PERF || lowPower || reducedMotion;

  return { perfOn, lowPower, reducedMotion };
}
