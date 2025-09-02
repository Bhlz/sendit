import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header(){
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
      <Link href="/" className="inline-flex items-center gap-3 sm:gap-4">
        {/* Logo grande y responsive */}
        <Image
          src="/logos/sendit_logo_complete.svg"
          alt="sendit"
          width={320}               // tamaño intrínseco (no se usa tal cual por CSS)
          height={80}
          priority
          className="w-auto h-[clamp(32px,7vw,56px)]" 
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 240px, 320px"
        />
        <span className="sr-only">sendit.lat</span>
      </Link>

      <nav aria-label="Principal" className="flex items-center gap-2 sm:gap-3">
        <a
          href="#steps"
          className="hidden sm:inline text-[color:var(--muted)] hover:text-[color:var(--text)] transition"
        >
          Cómo funciona
        </a>
        <a
          href="#waitlist"
          className="rounded-full border border-[color:var(--divider)] px-3 sm:px-4 py-2 text-sm text-[color:var(--text)] hover:border-[color:var(--text)] transition"
        >
          Únete a la lista
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
