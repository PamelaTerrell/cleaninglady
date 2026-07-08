const missions = [
  "Kitchen Rescue",
  "Bathroom Reset",
  "Laundry Mountain",
  "Closet Chaos",
  "Company’s Coming",
  "One-Bag Declutter",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 rounded-full bg-[#f4dfb4] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7a5520]">
          Super Cleaning Lady
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Saving homes from dust, clutter, and chaos.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          Cleaning motivation, room rescue missions, sparkle tricks, and real-life
          resets for people who are tired of feeling buried by their own homes.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#missions"
            className="rounded-full bg-[#2f261f] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-1"
          >
            Start a Mission
          </a>

          
        </div>
      </section>

      <section id="missions" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Choose Your Mission
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            One room. One reset. One win at a time.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {missions.map((mission) => (
              <div
                key={mission}
                className="rounded-3xl border border-[#eadcc8] bg-[#fffaf2] p-6 shadow-sm"
              >
                <h3 className="text-2xl font-black">{mission}</h3>
                <p className="mt-3 text-[#6a5a4b]">
                  A simple rescue plan for when this part of the house needs a hero.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="printables" className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#2f261f] p-10 text-white shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
            No shame. No perfection.
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Just one rescue mission at a time.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#f7ead6]">
            I’m Pamela, and I believe cleaning does not have to feel like punishment.
            Sometimes it can feel like power. Super Cleaning Lady is where home care
            meets humor, sparkle, survival, and a little bit of superhero energy.
          </p>
        </div>
      </section>
    </main>
  );
}