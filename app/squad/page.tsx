import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meet the Squad | Super Cleaning Lady",
  description:
    "Meet Super Cleaning Lady, Super Handy Man, Spritzy, and Spongie — the household squad fighting mess, clutter, sticky spots, questionable repairs, and tiny domestic emergencies.",
};

const squad = [
  {
    name: "Super Cleaning Lady",
    role: "Restoration & Rescue Command",
    image: "/super-cleaning-lady-alone.png",
    href: "/super-cleaning-lady",
    tagline: "No shame. No perfection. Just one rescue mission at a time.",
    description:
      "Team leader, clutter negotiator, defender of usable surfaces, and the person most likely to know where something actually belongs.",
    specialty:
      "Restoring order when the whole house starts feeling like one giant unfinished task.",
    status: "COMMAND ACTIVE",
  },
  {
    name: "Super Handy Man",
    role: "The Five-Minute Fix Division",
    image: "/shm.png",
    href: "/super-handy-man",
    tagline: "Every problem has a solution. Especially this one.",
    description:
      "Repair specialist, tool collector, confident estimator of project duration, and occasional creator of exciting new cleanup zones.",
    specialty:
      "Fixing the thing that is broken while temporarily involving three nearby rooms.",
    status: "TOOLS DEPLOYED",
  },
  {
    name: "Spritzy",
    role: "Surface Recovery Division",
    image: "/super-spray.png",
    href: "/spritzy",
    tagline: "Sticky, smudged, suspicious? She’s on it.",
    description:
      "Sparkle support specialist with a heroic cape, cleaning cloth, excellent attitude, and very little tolerance for mystery residue.",
    specialty:
      "Counters, handles, sinks, fingerprints, splatter, and anything that feels weird when you touch it.",
    status: "SPRITZ READY",
  },
  {
    name: "Spongie",
    role: "Morale & Tiny Emergency Division",
    image: "/spongie.png",
    href: "/spongie",
    tagline: "Small sponge. Big confidence.",
    description:
      "Tiny sidekick, emergency enthusiast, duster operator, and living proof that enthusiasm can dramatically exceed qualifications.",
    specialty:
      "Maintaining morale while treating one crumb like a developing situation.",
    status: "CAPE DEPLOYED",
  },
];

const dispatchGuide = [
  {
    problem: "The whole room is overwhelming.",
    hero: "Super Cleaning Lady",
    href: "/super-cleaning-lady",
    response: "Restoration & Rescue Command",
  },
  {
    problem: "Something is broken.",
    hero: "Super Handy Man",
    href: "/super-handy-man",
    response: "Five-Minute Fix Division",
  },
  {
    problem: "Something is sticky.",
    hero: "Spritzy",
    href: "/spritzy",
    response: "Surface Recovery",
  },
  {
    problem: "Something extremely minor has happened.",
    hero: "Spongie",
    href: "/spongie",
    response: "Full emergency response, apparently.",
  },
];

export default function SquadPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#2f261f] px-6 py-16 text-white md:py-20">
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-white/20"
          >
            ← Back to Headquarters
          </Link>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-[#f4c96d]">
            Household Command Center
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            Meet the Squad
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#f7ead6] md:text-xl">
            Four heroes. Four departments. One house that apparently requires
            an organizational structure.
          </p>

          <blockquote className="mx-auto mt-7 max-w-3xl text-xl font-black italic leading-8 text-[#f4c96d]">
            “Every household crisis has a department.”
          </blockquote>
        </div>
      </section>

      {/* TEAM PORTRAIT */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-white p-4 shadow-[0_24px_70px_rgba(47,38,31,0.12)] sm:p-6">
            <img
              src="/full-squad.png"
              alt="Super Cleaning Lady, Super Handy Man, Spritzy, and Spongie standing together"
              className="h-auto w-full rounded-[2rem]"
            />
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-lg leading-8 text-[#6a5a4b]">
              Some teams fight aliens. Some save cities. This one fights
              laundry, crumbs, crooked shelves, sticky fingerprints, runaway
              socks, and household objects that have wandered far from their
              assigned homes.
            </p>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Active Departments
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Choose your specialist.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              Household chaos is complicated. Fortunately, it has now been
              unnecessarily divided into departments.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {squad.map((member) => (
              <Link
                key={member.name}
                href={member.href}
                className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-[340px] items-center justify-center overflow-hidden bg-white p-8">
                  <div
                    className="absolute h-56 w-56 rounded-full bg-[#f4c96d]/20 blur-3xl"
                    aria-hidden="true"
                  />

                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative h-full w-auto max-w-full object-contain drop-shadow-2xl transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8 sm:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#f4c96d] px-4 py-2 text-xs font-black uppercase tracking-[0.16em]">
                      {member.status}
                    </span>

                    <span className="text-xs font-black uppercase tracking-[0.16em] text-[#8a7766]">
                      {member.role}
                    </span>
                  </div>

                  <h3 className="mt-5 text-4xl font-black">
                    {member.name}
                  </h3>

                  <blockquote className="mt-4 border-l-4 border-[#b48635] pl-5 text-lg font-black italic leading-7">
                    “{member.tagline}”
                  </blockquote>

                  <p className="mt-5 leading-7 text-[#6a5a4b]">
                    {member.description}
                  </p>

                  <div className="mt-6 rounded-[1.5rem] border border-[#eadcc8] bg-white p-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                      Primary Specialty
                    </p>

                    <p className="mt-2 font-bold leading-7">
                      {member.specialty}
                    </p>
                  </div>

                  <p className="mt-7 text-sm font-black uppercase tracking-[0.16em] text-[#b48635]">
                    Visit {member.name} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DISPATCH GUIDE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl sm:p-10 md:p-14">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
                Emergency Dispatch Guide
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Who should you call?
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#f7ead6]">
                Please use the following highly scientific household response
                matrix.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {dispatchGuide.map((item) => (
                <Link
                  key={item.problem}
                  href={item.href}
                  className="group grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 transition hover:bg-white/15 sm:grid-cols-[1.2fr_0.8fr_1fr] sm:items-center"
                >
                  <p className="font-bold text-[#f7ead6]">
                    {item.problem}
                  </p>

                  <p className="font-black text-[#f4c96d]">
                    {item.hero}
                  </p>

                  <p className="text-sm text-white/80">
                    {item.response}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM DYNAMIC */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Operational Structure
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              How the household actually gets rescued.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                Step 1
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Assess
              </h3>

              <p className="mt-4 leading-7 text-[#6a5a4b]">
                Super Cleaning Lady determines what is actually happening.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                Step 2
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Complicate
              </h3>

              <p className="mt-4 leading-7 text-[#6a5a4b]">
                Super Handy Man introduces several tools and possibly a hardware
                store receipt.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                Step 3
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Recover
              </h3>

              <p className="mt-4 leading-7 text-[#6a5a4b]">
                Spritzy restores the surfaces and removes mystery residue.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-7">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                Step 4
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Celebrate
              </h3>

              <p className="mt-4 leading-7 text-[#6a5a4b]">
                Spongie declares the operation a historic success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POST-INCIDENT STATUS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 text-center shadow-sm sm:p-10 md:p-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
            Standard Household Outcome
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            The problem gets solved.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            The room gets better. The tools eventually disappear. The counter
            stops being sticky. Spongie accepts congratulations.
          </p>

          <div className="mx-auto mt-9 grid max-w-4xl gap-4 sm:grid-cols-4">
            <div className="rounded-[1.5rem] bg-[#fffaf2] p-5">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#b48635]">
                Order
              </p>
              <p className="mt-2 text-xl font-black">
                Restored
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#fffaf2] p-5">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#b48635]">
                Repair
              </p>
              <p className="mt-2 text-xl font-black">
                Complete*
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#fffaf2] p-5">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#b48635]">
                Surfaces
              </p>
              <p className="mt-2 text-xl font-black">
                Recovered
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#fffaf2] p-5">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#b48635]">
                Morale
              </p>
              <p className="mt-2 text-xl font-black">
                Excessive
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs font-bold italic text-[#8a7766]">
            *One mysterious screw may remain.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl sm:p-10 md:p-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
            Squad Status
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Standing by for the next household plot twist.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            Choose a mission, investigate a villain, or follow the team into
            another completely ordinary situation that has somehow become an
            incident.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#missions"
              className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
            >
              Choose a Mission
            </Link>

            <Link
              href="/household-team-ups"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Read the Team-Ups
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}