'use client';

import { motion, type MotionProps } from 'framer-motion';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

// Alias con tipos correctos para <a> con Motion
type AnchorMotionProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & MotionProps
>;

/* ===========================
   Botón primario "shiny"
   =========================== */
export function PrimaryShinyButton({
  className = '',
  children,
  ...rest
}: AnchorMotionProps) {
  return (
    <motion.a
      {...rest}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={[
        'group', // ← para controlar el sheen por CSS
        'relative inline-flex items-center justify-center rounded-2xl',
        'px-5 py-3 text-white',
        'transition will-change-transform',
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--ring)]',
        'p-[2px] bg-[linear-gradient(135deg,var(--accent),var(--accent2))]',
        className,
      ].join(' ')}
    >
      {/* interior (usa tu token de texto como fondo oscuro) */}
      <span className="relative z-10 rounded-[14px] bg-[color:var(--text)] px-4 py-2.5 shadow-soft">
        {children}
      </span>

      {/* sheen controlado por :hover del grupo (sin complicar tipos de Motion) */}
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <span
          className="shiny-sheen absolute -inset-y-2 -left-1/2 w-2/3 rotate-[20deg] 
                     bg-gradient-to-r from-white/0 via-white/40 to-white/0"
          style={{ transform: 'translateX(-140%)' }}
        />
      </span>

      {/* Animación del sheen vía CSS (evita problemas de tipos) */}
      <style jsx>{`
        .group:hover .shiny-sheen {
          transform: translateX(180%) rotate(20deg);
          transition: transform 0.8s ease-out;
        }
      `}</style>
    </motion.a>
  );
}

/* ===========================
   Botón secundario "ghost"
   =========================== */
export function SecondaryGhostButton({
  className = '',
  children,
  ...rest
}: AnchorMotionProps) {
  return (
    <motion.a
      {...rest}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
      className={[
        'relative inline-flex items-center justify-center rounded-2xl',
        'px-5 py-3 border border-[color:var(--divider)]',
        'hover:shadow-soft transition will-change-transform',
        'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--ring)]',
        className,
      ].join(' ')}
    >
      {/* borde gradiente al hover */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity 
                   bg-[linear-gradient(135deg,var(--accent),var(--accent2))] -z-10"
      />
      {/* fondo interior para simular borde */}
      <span
        aria-hidden
        className="absolute inset-[1px] rounded-[14px] 
                   bg-[color:var(--surface)]/80 dark:bg-[color:var(--surface)]/70 -z-10"
      />
      <span className="relative z-10 inline-flex items-center">{children}</span>
    </motion.a>
  );
}
