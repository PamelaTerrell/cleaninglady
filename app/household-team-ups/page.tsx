import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Household Team-Ups | Super Cleaning Lady",
  description:
    "Follow Super Cleaning Lady and Super Handy Man through repairs, missing tools, questionable solutions, and the temporary chaos created in pursuit of home improvement.",
};

const featuredTeamUp = {
  part: "Part 9",
  title: "The Solution Problem",
  image: "/comics/solution-problem.png",
  alt: "Super Handy Man proudly declares that every problem has a solution before wondering whether every solution actually has a problem",
  description:
    "Super Handy Man begins with his usual confidence: every problem has a solution. Especially this one. Several tools, containers, loose parts, and one spectacular new mess later, a troubling philosophical question emerges.",
  quote: "Or is it every solution has a problem?",
};

const teamUps = [
  {
    part: "Part 1",
    title: "The Ratchet Set Incident",
    slug: "ratchet-set-incident",
    image: "/comics/company-is-coming-ratchet-set.png",
    alt: "Super Cleaning Lady discovers a ratchet set scattered across the living room just before company arrives",
    description:
      "Company is five minutes away. The pillows are fluffed. The living room is almost respectable. Then Super Cleaning Lady discovers an entire ratchet set conducting unauthorized operations on the coffee table.",
    quote: "The ratchet set does not live here.",
    responseTeam: true,
  },
  {
    part: "Part 2",
    title: "The Ratchet Set Returns",
    slug: "super-handy-ratchet-set",
    image: "/comics/super-handy-ratchet-set.png",
    alt: "Super Handy Man arrives with tools to tighten one thing and turns the living room into a temporary repair zone",
    description:
      "Peace has finally returned to the living room. Then Super Handy Man arrives carrying a drill, an extension cord, and the same ratchet set. He promises he is only tightening one thing.",
    quote: "He repairs the house. She repairs the aftermath.",
    responseTeam: true,
  },
  {
    part: "Part 3",
    title: "Every Problem Has a Solution",
    slug: "sock-portal-investigation",
    image: "/comics/sock-portal-fix.png",
    alt: "Super Handy Man investigates the mysterious Sock Portal with numerous tools while Super Cleaning Lady watches",
    description:
      "One sock disappears, and Super Handy Man launches a full dryer investigation involving a flashlight, drill, socket set, and unwavering confidence. The dryer survives. The sock does not return.",
    quote:
      "The Sock Portal remains a mystery. Super Handy Man remains extremely optimistic.",
    responseTeam: true,
  },
  {
    part: "Part 4",
    title: "The Wobbly Shelf Emergency",
    slug: "wobbly-shelf-emergency",
    image: "/comics/wobbly-shelf.png",
    alt: "Super Cleaning Lady, Super Handy Man, Spritzy, and Spongie team up to fix a dangerously wobbly shelf",
    description:
      "A shelf starts leaning like it pays rent, and the whole team responds. Super Handy Man brings every tool he owns, Super Cleaning Lady handles the rescue, Spritzy stands ready, and Spongie proudly contributes the duster.",
    quote:
      "Some problems need teamwork... and slightly too many tools.",
    responseTeam: true,
  },
  {
    part: "Part 5",
    title: "The Lid Drawer Uprising",
    slug: "lid-drawer-uprising",
    image: "/comics/lid-drawer.png",
    alt: "Super Cleaning Lady and Spongie confront an avalanche of mismatched food-storage lids spilling from a kitchen cabinet",
    description:
      "Super Cleaning Lady attempts to put away one clean container and accidentally triggers a full-scale lid rebellion. With Spongie assisting, she sorts, matches, rescues, and exiles the suspicious extras.",
    quote: "No one will notice until they need a lid.",
    responseTeam: false,
  },
  {
    part: "Part 6",
    title: "The Vacuum Fix",
    slug: "vacuum-fix",
    image: "/comics/vacuum-fix.png",
    alt: "Super Handy Man proudly demonstrates a repaired vacuum cleaner just before it blasts a cloud of dust directly onto Super Cleaning Lady",
    description:
      "Super Cleaning Lady discovers a clog, and Super Handy Man launches a full repair operation. After tools, testing, and great confidence, the vacuum finally works—just long enough to launch the entire clog directly at her.",
    quote: "I think we found the clog.",
    responseTeam: true,
  },
  {
    part: "Part 7",
    title: "Tiny Mess, Big Drama",
    slug: "tiny-mess-big-drama",
    image: "/comics/tiny-mess-big-drama.png",
    alt: "Spongie and Spritzy dramatically team up to defeat one tiny crumb in the kitchen",
    description:
      "Spritzy and Spongie discover a microscopic kitchen mess and respond as if the entire kingdom is at stake. Spongie brings the panic, Spritzy brings the polish, and together they save the day one crumb at a time.",
    quote: "Small mess. Big teamwork.",
    responseTeam: false,
  },
  {
    part: "Part 8",
    title: "The Case of the Missing Drill",
    slug: "missing-drill",
    image: "/comics/missing-drill.png",
    alt: "Super Handy Man searches through a huge collection of tools for his missing drill while insisting every problem has a solution",
    description:
      "Super Handy Man proudly declares, “Every problem has a solution. Especially this one.” Unfortunately, the problem is that he cannot find his drill because his workshop contains approximately fourteen thousand other tools.",
    quote: "Sometimes the problem is too many solutions.",
    responseTeam: true,
  },
];

const futureReports = [
  {
    title: "The Five-Minute Shelf",
    description:
      "One shelf. Two hardware-store trips. Three hours. The shelf is level and the relationship survives.",
  },
  {
    title: "The Mystery Extra Screw",
    description:
      "The furniture is assembled. One screw remains. Super Handy Man insists manufacturers always include extras.",
  },
  {
    title: "The Caulk Incident",
    description:
      "A tiny bathroom repair somehow leaves caulk on the sink, the floor, his shirt, and one unrelated doorknob.",
  },
];

export default function HouseholdTeamUpsPage() {
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
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f4c96d]">
            Super Cleaning Lady Presents
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            Household Team-Ups
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#f7ead6] md:text-xl">
            He fixes what is broken. She restores order after the repair spreads
            across three rooms.
          </p>

          <blockquote className="mx-auto mt-7 max-w-2xl text-xl font-bold italic text-[#f4c96d]">
            “Every problem has a solution. Especially this one.”
          </blockquote>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/super-handy-man"
              className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.17em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Meet Super Handy Man
            </Link>

            <a
              href="#saga"
              className="rounded-full border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-[0.17em] text-white transition hover:-translate-y-1 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]"
            >
              Read the Saga
            </a>
          </div>

          <div className="mt-5">
            <Link
              href="/"
              className="text-xs font-black uppercase tracking-[0.16em] text-[#f7ead6] transition hover:text-white"
            >
              ← Back to Headquarters
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED LATEST INCIDENT */}
      <section className="bg-white px-5 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Latest Incident Report
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              The slogan has encountered a complication.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              After years of believing every problem has a solution, Super Handy
              Man has stumbled into a deeply inconvenient possibility.
            </p>
          </div>

          <article className="overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.14)]">
            <div className="grid items-center lg:grid-cols-[1.2fr_0.8fr]">
              <div className="bg-white p-3 sm:p-5 lg:p-6">
                <img
                  src={featuredTeamUp.image}
                  alt={featuredTeamUp.alt}
                  className="h-auto w-full rounded-[1.5rem] sm:rounded-[1.75rem]"
                />
              </div>

              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#f4c96d] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2f261f]">
                    {featuredTeamUp.part}
                  </span>

                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#8a7766]">
                    Household Team-Up
                  </span>
                </div>

                <h3 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
                  {featuredTeamUp.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                  {featuredTeamUp.description}
                </p>

                <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-6 text-xl font-bold italic leading-8 shadow-sm">
                  “{featuredTeamUp.quote}”
                </blockquote>

                <div className="mt-6 rounded-2xl border border-[#eadcc8] bg-white p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                    Post-Repair Response Team Deployed
                  </p>

                  <p className="mt-2 text-sm font-bold leading-6 text-[#4d4137]">
                    Super Cleaning Lady: restoring order · Spritzy: surface
                    recovery · Spongie: morale support
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CHARACTER INTRODUCTION */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Super Cleaning Lady
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Defender of clean surfaces and proper tool storage.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              She battles dust, doom piles, mystery splatter, and household
              objects that have wandered far from their assigned homes.
            </p>
          </article>

          <article className="rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Super Handy Man
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Repair specialist. Tool enthusiast. Temporary chaos generator.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              He owns the correct tool, although locating it may require opening
              six cases. He can repair almost anything, eventually, and every
              project begins with the words, “This should only take five
              minutes.”
            </p>

            <Link
              href="/super-handy-man"
              className="mt-7 inline-flex text-sm font-black uppercase tracking-[0.16em] text-[#b48635] transition hover:text-[#7a5520]"
            >
              Enter the Five-Minute Fix Division →
            </Link>
          </article>
        </div>
      </section>

      {/* THE SAGA */}
      <section id="saga" className="scroll-mt-32 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              The Ongoing Saga
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Every repair leaves a story behind.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              What began as one ratchet-set emergency has expanded into missing
              drills, rebellious lids, vacuum explosions, mystery socks, and a
              growing philosophical crisis about solutions.
            </p>
          </div>

          <div className="mt-14 space-y-14">
            {teamUps.map((story, index) => (
              <article
                key={story.slug}
                className="overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.1)]"
              >
                <div
                  className={`grid items-center lg:grid-cols-2 ${
                    index % 2 === 1
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
                  <div className="bg-white p-4 sm:p-6">
                    <img
                      src={story.image}
                      alt={story.alt}
                      className="h-auto w-full rounded-[1.75rem]"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#f4c96d] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2f261f]">
                        {story.part}
                      </span>

                      <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#8a7766]">
                        Household Team-Up
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                      {story.title}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                      {story.description}
                    </p>

                    <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-6 text-xl font-bold italic leading-8 shadow-sm">
                      “{story.quote}”
                    </blockquote>

                    {story.responseTeam && (
                      <div className="mt-6 rounded-2xl border border-[#eadcc8] bg-white p-5">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                          Post-Repair Response Team Deployed
                        </p>

                        <p className="mt-2 text-sm font-bold leading-6 text-[#4d4137]">
                          Super Cleaning Lady: restoring order · Spritzy:
                          surface recovery · Spongie: morale support
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM DYNAMIC */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#2f261f] px-8 py-14 text-center text-white shadow-2xl md:px-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
            Their Special Powers
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Improving the home, one temporary mess at a time.
          </h2>

          <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
            <article className="rounded-[2rem] border border-white/10 bg-white/10 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c96d]">
                His Power
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Fixing the problem
              </h3>

              <p className="mt-4 leading-7 text-[#f7ead6]">
                Repairing, installing, tightening, measuring, and explaining
                why the first hardware-store trip did not count.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/10 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c96d]">
                Her Power
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Restoring civilization
              </h3>

              <p className="mt-4 leading-7 text-[#f7ead6]">
                Returning the tools, removing the packaging, wiping the dust,
                and finding the one socket hiding beneath the sofa.
              </p>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/10 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c96d]">
                Combined Power
              </p>

              <h3 className="mt-3 text-2xl font-black">
                A better house
              </h3>

              <p className="mt-4 leading-7 text-[#f7ead6]">
                The project gets finished, the room gets rescued, and nobody
                mentions the mysterious extra screw.
              </p>
            </article>
          </div>

          <blockquote className="mx-auto mt-10 max-w-3xl rounded-2xl border-l-4 border-[#f4c96d] bg-white/5 px-6 py-5 text-xl font-bold italic leading-8">
            “He creates a solution. She determines how many new problems came
            with it.”
          </blockquote>
        </div>
      </section>

      {/* FUTURE REPORTS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Next Incident Pending
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              More projects are probably already spreading.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
              Somewhere in the house, a screw is loose, a shelf is leaning, and
              Super Handy Man is already reaching for the toolbox.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {futureReports.map((report) => (
              <article
                key={report.title}
                className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b48635]">
                  Coming Eventually
                </p>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  {report.title}
                </h3>

                <p className="mt-4 leading-7 text-[#6a5a4b]">
                  {report.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-[1.75rem] border border-[#eadcc8] bg-[#fffaf2] px-6 py-6 text-center shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b48635]">
              Current Household Status
            </p>

            <p className="mt-2 text-lg font-black leading-7">
              Nothing is technically broken at the moment.
            </p>

            <p className="mt-2 text-sm font-bold text-[#8a7766]">
              Super Handy Man remains on standby.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
            While the Tools Are Out
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            The house still needs rescuing.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            Visit the Five-Minute Fix Division, revisit Super Cleaning Lady’s
            solo victories, or choose a mission and confront your own household
            chaos.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/super-handy-man"
              className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl"
            >
              Visit the Fix Division
            </Link>

            <Link
              href="/invisible-heroics"
              className="rounded-full border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              See Invisible Heroics
            </Link>

            <Link
              href="/#missions"
              className="rounded-full border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Choose a Mission
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}