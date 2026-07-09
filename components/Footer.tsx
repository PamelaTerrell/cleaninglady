export default function Footer() {
  return (
    <footer className="border-t border-[#eadcc8] bg-[#fffaf2] px-6 py-10 text-center">
      <div className="mx-auto max-w-6xl">
        <img
          src="/super-spray-hero.png"
          alt="Super Cleaning Lady spray bottle superhero mascot"
          className="mx-auto mb-5 w-16 drop-shadow-md"
        />

        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
          Super Cleaning Lady
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6a5a4b]">
          Fighting dust, dishes, doom piles, and whatever that is under the
          couch. No shame. No perfection. Just one tiny victory at a time.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[#2f261f]">
          <a href="#missions" className="transition hover:text-[#b48635]">
            Missions
          </a>
          <a href="#villains" className="transition hover:text-[#b48635]">
            Villains
          </a>
          <a href="#no-shame" className="transition hover:text-[#b48635]">
            No-Shame Zone
          </a>
        </div>

        <p className="mt-8 text-xs text-[#8a7866]">
          © {new Date().getFullYear()} Super Cleaning Lady. A Stabile USA Project. Saving homes from
          chaos, one suspicious sticky spot at a time.
        </p>
      </div>
    </footer>
  );
}