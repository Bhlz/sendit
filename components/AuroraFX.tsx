'use client';

import { motion } from 'framer-motion';

const MDiv = motion.div;

export default function AuroraFX({ disabled = false }: { disabled?: boolean }) {
  if (disabled) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <MDiv
        className="absolute -top-24 -left-24 h-80 w-80 sm:h-[28rem] sm:w-[28rem] rounded-full blur-[80px] opacity-[.55] mix-blend-soft-light"
        style={{
          background:
            'conic-gradient(from 120deg, rgba(10,132,255,.28), rgba(255,255,255,0), rgba(10,132,255,.22))',
        }}
        animate={{ x: ['-10%', '10%', '-10%'], y: ['-8%', '6%', '-8%'], rotate: [0, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <MDiv
        className="absolute top-1/4 -right-24 h-72 w-72 sm:h-[26rem] sm:w-[26rem] rounded-full blur-[80px] opacity-[.45] mix-blend-soft-light"
        style={{
          background:
            'conic-gradient(from 200deg, rgba(255,107,0,.22), rgba(255,255,255,0), rgba(255,107,0,.18))',
        }}
        animate={{ x: ['10%', '-6%', '10%'], y: ['4%', '-10%', '4%'], rotate: [0, -6, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 sm:h-80 sm:w-80 rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,.35), transparent 60%)' }}
      />
    </div>
  );
}
