'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  // null = aún no sabemos (evita parpadeo del icono)
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    // Lee el estado aplicado por el script SSR
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains('dark');
    root.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
    setIsDark(next);
  }

  return (
    <button
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-pressed={!!isDark}
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--divider)] px-3 py-2 text-sm hover:border-[color:var(--text)] transition"
    >
      {isDark ? (
        <>
          {/* Luna (oscuro activo → ofrecer claro) */}
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden className="opacity-90">
            <path fill="currentColor" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
          <span>Claro</span>
        </>
      ) : (
        <>
          {/* Sol (claro activo → ofrecer oscuro) */}
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden className="opacity-90">
            <path fill="currentColor" d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v-2h-3v2h3zm-4.24 7.16l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM13 1h-2v3h2V1zm-7.16 15.24l-1.8 1.79 1.41 1.41 1.79-1.79-1.4-1.41zM12 6a6 6 0 100 12A6 6 0 0012 6z"/>
          </svg>
          <span>Oscuro</span>
        </>
      )}
    </button>
  );
}
