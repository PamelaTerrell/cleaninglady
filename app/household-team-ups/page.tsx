import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Household Team-Ups | Super Cleaning Lady",
  description:
    "Follow Super Cleaning Lady and Super Handy Man through repairs, ratchet sets, missing screws, and the temporary messes created in pursuit of home improvement.",
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
  },

  {
  title: "The Case of the Missing Drill",
  slug: "missing-drill",
  category: "Household Team-Ups",
  image: "/comics/missing-drill.png",
  alt: "Super Handy Man searches through an enormous collection of tools for his missing drill while Super Cleaning Lady, Super Spray, and Spongie help",
  description:
    "Super Handy Man confidently announces that every problem has a solution—especially this one. Unfortunately, the current problem is locating his drill inside a workshop containing several thousand possible solutions.",
  punchline:
    "Sometimes the problem is too many solutions.",
  missionHref: "/household-team-ups",
  missionLabel: "See More Team-Ups",
},

  {
    part: "Part 2",
    title: "The Ratchet Set Returns",
    slug: "super-handy-ratchet-set",
    image: "/comics/super-handy-ratchet-set.png",
    alt: "Super Handy Man arrives with tools to tighten one thing and turns the living room into a temporary repair zone",
    description:
      "Peace has finally returned to the living room. Then Super Handy Man arrives carrying a drill, an extension cord, and the same ratchet set. He promises he is only tightening one thing.",
    quote:
      "He repairs the house. She repairs the aftermath.",
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
},

{
  part: "Part 4",
  title: "The Wobbly Shelf Emergency",
  slug: "wobbly-shelf-emergency",
  image: "/comics/wobbly-shelf.png",
  alt: "Super Cleaning Lady, Super Handy Man, the Super Spray Bottle, and Spongie team up to fix a dangerously wobbly shelf",
  description:
    "A shelf starts leaning like it pays rent, and the whole team responds. Super Handy Man brings every tool he owns, Super Cleaning Lady handles the rescue, Super Spray stays ready, and Spongie proudly contributes the duster.",
  quote:
    "Some problems need teamwork... and slightly too many tools.",
},

{
  part: "Part 5",
  title: "The Lid Drawer Uprising",
  slug: "lid-drawer-uprising",
  image: "/comics/lid-drawer.png",
  alt: "Super Cleaning Lady and Spongie confront an avalanche of mismatched food-storage lids spilling from a kitchen cabinet",
  description:
    "Super Cleaning Lady attempts to put away one clean container and accidentally triggers a full-scale lid rebellion. With Spongie assisting, she sorts, matches, rescues, and exiles the suspicious extras.",
  quote:
    "No one will notice until they need a lid.",
},

{
  part: "Part 6",
  title: "The Vacuum Fix",
  slug: "vacuum-fix",
  image: "/comics/vacuum-fix.png",
  alt: "Super Handy Man proudly demonstrates a repaired vacuum cleaner just before it blasts a cloud of dust directly onto Super Cleaning Lady",
  description:
    "Super Cleaning Lady discovers a clog, and Super Handy Man launches a full repair operation. After tools, testing, and great confidence, the vacuum finally works—just long enough to launch the entire clog directly at her.",
  quote:
    "I think we found the clog.",
},

{
  part: "Part 7",
  title: "Tiny Mess, Big Drama",
  slug: "tiny-mess-big-drama",
  image: "/comics/tiny-mess-big-drama.png",
  alt: "Spongie and the Super Spray Bottle dramatically team up to defeat one tiny crumb in the kitchen",
  description:
    "Super Spray and Spongie discover a microscopic kitchen mess and respond as if the entire kingdom is at stake. Spongie brings the panic, Super Spray brings the polish, and together they save the day one crumb at a time.",
  quote:
    "Small mess. Big teamwork.",
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
      <section className="relative overflow-hidden bg-[#2f261f] px-6 py-20 text-white md:py-24">
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

          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
            Household Team-Ups
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#f7ead6] md:text-xl">
            He fixes what is broken. She restores order after the repair spreads
            across three rooms.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.17em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
            >
              Back to Headquarters
            </Link>

            <a
              href="#saga"
              className="rounded-full border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-[0.17em] text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Read the Saga
            </a>
          </div>
        </div>
      </section>

      {/* CHARACTER INTRODUCTION */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Super Cleaning Lady
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Defender of clean surfaces and proper tool storage.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              She battles dust, doom piles, mystery splatter, and household
              objects that have wandered far from their assigned homes.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Introducing Super Handy Man
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Repair specialist. Tool enthusiast. Temporary chaos generator.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              He owns the correct tool, although locating it may require opening
              six cases. He can repair almost anything, eventually, and every
              project begins with the words, “This should only take five
              minutes.”
            </p>
          </div>
        </div>
      </section>

      {/* THE SAGA */}
      <section id="saga" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              The ongoing saga
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              The ratchet set refuses to remain contained.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              What began as one tool-related emergency has developed into a
              continuing story about home improvement, misplaced sockets, and
              the heroic restoration of the living room.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {teamUps.map((story, index) => (
              <article
                key={story.slug}
                className="overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)]"
              >
                <div
                  className={`grid items-center lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
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

                    <h3 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
                      {story.title}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                      {story.description}
                    </p>

                    <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-6 text-xl font-bold italic leading-8 shadow-sm">
                      “{story.quote}”
                    </blockquote>
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
            Their special powers
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Improving the home, one temporary mess at a time.
          </h2>

          <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
            <div className="rounded-[2rem] bg-white/10 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c96d]">
                His power
              </p>

              <h3 className="mt-3 text-2xl font-black">Fixing the problem</h3>

              <p className="mt-4 leading-7 text-[#f7ead6]">
                Repairing, installing, tightening, measuring, and explaining
                why the first hardware-store trip did not count.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/10 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c96d]">
                Her power
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Restoring civilization
              </h3>

              <p className="mt-4 leading-7 text-[#f7ead6]">
                Returning the tools, removing the packaging, wiping the dust,
                and finding the one socket hiding beneath the sofa.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/10 p-7">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4c96d]">
                Combined power
              </p>

              <h3 className="mt-3 text-2xl font-black">A better house</h3>

              <p className="mt-4 leading-7 text-[#f7ead6]">
                The project gets finished, the room gets rescued, and nobody
                mentions the mysterious extra screw.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE REPORTS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Future incident reports
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              More projects are probably already spreading.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {futureReports.map((report) => (
              <article
                key={report.title}
                className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm"
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b48635]">
                  Coming eventually
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
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
            While the tools are out
          </p>

          <h2 className="mt-4 text-4xl font-black">
            The house still needs rescuing.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            Follow the continuing team-up saga, revisit Super Cleaning Lady’s
            solo victories, or choose a mission and confront your own household
            chaos.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/invisible-heroics"
              className="rounded-full border border-[#d8c6ad] bg-[#fffaf2] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              See Invisible Heroics
            </Link>

            <Link
              href="/#missions"
              className="rounded-full bg-[#2f261f] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl"
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