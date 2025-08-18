export default function Header(){
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="font-semibold tracking-tight text-[color:var(--text)]">sendit.lat</div>
      <nav aria-label="Principal" className="flex items-center gap-3">
        <a href="#steps" className="text-[color:var(--muted)] hover:text-[color:var(--text)] transition">Cómo funciona</a>
        <a href="#waitlist" className="rounded-full border border-[color:var(--divider)] px-4 py-2 text-sm text-[color:var(--text)] hover:border-[color:var(--text)] transition">
          Únete a la lista
        </a>
      </nav>
    </header>
  );
}