import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eadcc8] bg-[#fffaf2]/90 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/super-spray-hero.png"
            alt="Super Cleaning Lady spray bottle mascot"
            className="h-10 w-10 drop-shadow-sm"
          />

          <span className="text-sm font-black uppercase tracking-[0.18em] text-[#2f261f]">
            Super Cleaning Lady
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-bold uppercase tracking-[0.14em] text-[#6a5a4b] md:flex">
          <a href="/#missions" className="transition hover:text-[#b48635]">
            Missions
          </a>
          <a href="/#villains" className="transition hover:text-[#b48635]">
            Villains
          </a>
          <a href="/#no-shame" className="transition hover:text-[#b48635]">
            No-Shame Zone
          </a>
        </nav>
      </div>
    </header>
  );
}