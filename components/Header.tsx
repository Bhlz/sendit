import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header(){
  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <Link href="/" className="inline-flex items-center gap-2">
        <span className="relative block h-8 w-8 md:h-9 md:w-9">
          <Image
            src="/logos/sendit_logo_complete.svg"
            alt="sendit"
            fill
            sizes="36px"
            priority
            className="object-contain"
          />
        </span>
        <span className="sr-only">sendit.lat</span>
      </Link>

      <nav aria-label="Principal" className="flex items-center gap-3">
        <a href="#steps" className="text-[color:var(--muted)] hover:text-[color:var(--text)] transition">
          Cómo funciona
        </a>
        <a
          href="#waitlist"
          className="rounded-full border border-[color:var(--divider)] px-4 py-2 text-sm text-[color:var(--text)] hover:border-[color:var(--text)] transition"
        >
          Únete a la lista
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
