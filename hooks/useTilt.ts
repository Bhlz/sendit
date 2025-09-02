'use client';
import { useEffect, useRef } from 'react';

export function useTilt(max = 12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;               // captura estable
    if (!node) return;

    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - y) * max;
      const ry = (x - 0.5) * max;
      node.style.transform =
        `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    };

    const reset = () => {
      node.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
    };

    node.addEventListener('mousemove', onMove);
    node.addEventListener('mouseleave', reset);

    return () => {
      node.removeEventListener('mousemove', onMove);
      node.removeEventListener('mouseleave', reset);
    };
  }, [max]);

  return ref;
}
