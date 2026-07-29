import Link from "next/link";

const navigation = [
  {
    label: "Missions",
    href: "/#missions",
  },
  {
    label: "Villains",
    href: "/#villains",
  },
  {
    label: "No-Shame",
    href: "/#no-shame",
  },

  {
  label: "Squad",
  href: "/#squad",
},
  {
    label: "Comics",
    href: "/invisible-heroics",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eadcc8] bg-[#fffaf2]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-16 items-center justify-between gap-3 sm:min-h-20 sm:gap-6">
          <Link
            href="/"
            aria-label="Super Cleaning Lady home"
            className="group flex shrink-0 items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fffaf2]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#eadcc8] bg-white shadow-sm transition group-hover:-translate-y-0.5 group-hover:shadow-md sm:h-12 sm:w-12">
              <img
                src="/super-spray-hero.png"
                alt=""
                className="h-9 w-9 object-contain drop-shadow-sm sm:h-10 sm:w-10"
              />
            </span>

            <span className="hidden sm:block">
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-[#b48635]">
                Household Heroics
              </span>

              <span className="mt-1 block text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] lg:text-base">
                Super Cleaning Lady
              </span>
            </span>

            <span className="text-sm font-black uppercase tracking-[0.14em] text-[#2f261f] sm:hidden">
              SCL
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#6a5a4b] transition hover:bg-white hover:text-[#b48635] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#missions"
            className="hidden shrink-0 rounded-full bg-[#2f261f] px-5 py-3 text-xs font-black uppercase tracking-[0.15em] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#4a3b30] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635] focus-visible:ring-offset-4 sm:inline-flex md:hidden lg:inline-flex"
          >
            Start a Mission
          </Link>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="grid grid-cols-2 gap-2 border-t border-[#eadcc8] py-3 md:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-[#eadcc8] bg-white px-3 py-2 text-center text-[0.67rem] font-black uppercase tracking-[0.1em] text-[#6a5a4b] shadow-sm transition hover:border-[#d4b67e] hover:text-[#b48635] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}