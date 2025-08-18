export default function Footer(){
  return (
    <footer className="px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[color:var(--muted)]">
        <div>© {new Date().getFullYear()} sendit.lat — Hecho en México</div>
        <div className="flex items-center gap-4">
          <a href="/privacidad" className="hover:text-[color:var(--accent)]">Privacidad</a>
          <a href="/terminos" className="hover:text-[color:var(--accent)]">Términos</a>
          <a href="mailto:hola@sendit.lat" className="hover:text-[color:var(--accent)]">Contacto</a>
        </div>
      </div>
    </footer>
  );
}