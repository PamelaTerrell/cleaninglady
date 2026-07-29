export default function Footer() {
  return (
    <footer className="border-t border-[#eadcc8] bg-[#fffaf2] px-6 py-12 text-center">
      <div className="mx-auto max-w-6xl">
        <img
          src="/super-spray-hero.png"
          alt="Super Cleaning Lady spray bottle superhero mascot"
          className="mx-auto mb-5 w-16 drop-shadow-md"
        />

        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
          Super Cleaning Lady
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6a5a4b]">
          Fighting dust, dishes, doom piles, and whatever that is under the
          couch. No shame. No perfection. Just one tiny victory at a time.
        </p>

        <nav
          aria-label="Footer navigation"
          className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-bold text-[#2f261f]"
        >
          <a
            href="/#missions"
            className="transition hover:text-[#b48635]"
          >
            Missions
          </a>

          <a
            href="/#squad"
            className="transition hover:text-[#b48635]"
          >
            Meet the Squad
          </a>

          <a
            href="/#villains"
            className="transition hover:text-[#b48635]"
          >
            Villains
          </a>

          <a
            href="/invisible-heroics"
            className="transition hover:text-[#b48635]"
          >
            Comics
          </a>

          <a
            href="/household-team-ups"
            className="transition hover:text-[#b48635]"
          >
            Team-Ups
          </a>

          <a
            href="/#no-shame"
            className="transition hover:text-[#b48635]"
          >
            No Shame
          </a>
        </nav>

        <div className="mx-auto mt-8 h-px max-w-2xl bg-[#eadcc8]" />

        <div className="mt-7 space-y-2 text-xs leading-6 text-[#8a7866]">
          <p>
            A{" "}
            <a
              href="https://stabileusa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#6a5a4b] underline decoration-[#d8c6ad] underline-offset-4 transition hover:text-[#b48635]"
            >
              StabileUSA.com
            </a>{" "}
            project created by{" "}
            <a
              href="https://pamelajterrell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#6a5a4b] underline decoration-[#d8c6ad] underline-offset-4 transition hover:text-[#b48635]"
            >
              PamelaJTerrell.com
            </a>
            .
          </p>

          <p>
            © {new Date().getFullYear()} Super Cleaning Lady. Saving homes from
            chaos, one suspicious sticky spot at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}