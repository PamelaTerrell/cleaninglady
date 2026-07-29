import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { completeMission } from "@/app/actions";

export const metadata: Metadata = {
  title: "Kitchen Rescue | Super Cleaning Lady",
  description:
    "A funny kitchen cleaning mission for when the counters have disappeared, the sink is staging a rebellion, and one spoon is somehow in the living room.",
};

const quickSteps = [
  "Throw away the obvious trash. Do not interview every receipt.",
  "Move dishes to the sink or dishwasher. We are creating the illusion of control.",
  "Clear one counter. Just one. This is a rescue mission, not a documentary.",
  "Wipe the sticky zones. You know the ones.",
  "Take out the trash if it smells like it has opinions.",
];

const deepSteps = [
  "Start or unload the dishwasher.",
  "Wash the dishes that are blocking your will to live.",
  "Clear and wipe all counters.",
  "Wipe the stovetop and the front of the microwave.",
  "Sweep the floor, especially the crumb colony near the cabinets.",
  "Take out the trash and replace the bag like the responsible hero you are.",
];

const supplies = [
  "Trash bag",
  "Dish soap",
  "Sponge or cloth",
  "All-purpose cleaner",
  "Timer",
  "Music, podcast, or dramatic superhero theme",
];

const kitchenHeroics = [
  {
    title: "The Coffee Pot Controversy",
    image: "/comics/coffee-pot.png",
    alt: "Super Cleaning Lady rejects the idea that coffee tastes better from a dirty coffee maker and cleans the pot, basket, and reservoir",
    description:
      "A wise old coffee guru called it seasoning. Super Cleaning Lady called it yesterday’s coffee clinging to the equipment for emotional support.",
    punchline:
      "Clean pot. Clean basket. Clean reservoir. Better coffee.",
  },
  {
    title: "The Mystery Under the Stove",
    image: "/comics/under-the-stove.png",
    alt: "Super Cleaning Lady pulls the stove away from the wall and discovers crumbs, grease, pet hair, and dust underneath",
    description:
      "Crumbs fall. Grease splatters. Pet hair drifts. Somehow, it all gathers beneath the stove like it reserved the space months ago.",
    punchline:
      "No crumb bunker survives on Super Cleaning Lady’s watch.",
  },
];

export default function KitchenRescuePage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 py-10 text-center md:py-14">
  <Link
    href="/"
    className="inline-flex rounded-full border border-[#eadcc8] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#7a5520] transition hover:-translate-y-1 hover:shadow-md"
  >
    ← Back to HQ
  </Link>

  <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
    Mission File 001
  </p>

  <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
    Kitchen Rescue
  </h1>

  <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#6a5a4b] sm:text-lg md:leading-8">
    For when the counters have disappeared, the sink is staging a rebellion,
    and something near the toaster is making you question your choices.
  </p>
</section>

      {/* KITCHEN HEROICS */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Reports from the kitchen
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Before the mission begins, review the evidence.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              The kitchen has many ways to create chaos. Some involve crumbs.
              Others involve coffee residue claiming to be flavor.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {kitchenHeroics.map((heroic) => (
              <article
                key={heroic.title}
                className="overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_22px_60px_rgba(47,38,31,0.12)]"
              >
                <div className="bg-white p-4 sm:p-6">
                  <img
                    src={heroic.image}
                    alt={heroic.alt}
                    className="h-auto w-full rounded-[1.75rem]"
                  />
                </div>

                <div className="p-8 sm:p-10">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b48635]">
                    Kitchen Heroics
                  </p>

                  <h3 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                    {heroic.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                    {heroic.description}
                  </p>

                  <blockquote className="mt-6 rounded-2xl border-l-4 border-[#b48635] bg-white p-6 text-lg font-bold italic leading-8 shadow-sm">
                    “{heroic.punchline}”
                  </blockquote>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/invisible-heroics"
              className="inline-flex rounded-full border border-[#d8c6ad] bg-[#fffaf2] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              See All Invisible Heroics
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION DETAILS */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Difficulty
            </p>

            <h2 className="mt-3 text-3xl font-black">Medium Chaos</h2>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Not a disaster. Not peaceful. Somewhere between “I can fix this”
              and “Why is there a spoon in the living room?” We do not ask
              questions during rescue missions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Time Needed
            </p>

            <h2 className="mt-3 text-3xl font-black">10–30 Minutes</h2>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Choose the quick rescue or the full reset. Either way, the
              kitchen loses and you win.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Victory Goal
            </p>

            <h2 className="mt-3 text-3xl font-black">Find the Counter</h2>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              We are not creating a magazine kitchen. We are locating flat
              surfaces and restoring basic civilization.
            </p>
          </div>
        </div>
      </section>

      {/* SUPPLIES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] bg-[#2f261f] p-8 text-white shadow-2xl md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
              Mission Supplies
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Gather your weapons against grime.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {supplies.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 p-5 font-bold text-[#fffaf2]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STEPS */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              10-Minute Rescue
            </p>

            <h2 className="mt-4 text-4xl font-black">
              For when motivation is running on fumes.
            </h2>

            <ol className="mt-8 space-y-4">
              {quickSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2f261f] text-sm font-black text-white">
                    {index + 1}
                  </span>

                  <span className="leading-7 text-[#6a5a4b]">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              30-Minute Reset
            </p>

            <h2 className="mt-4 text-4xl font-black">
              For when you are ready to reclaim the kingdom.
            </h2>

            <ol className="mt-8 space-y-4">
              {deepSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2f261f] text-sm font-black text-white">
                    {index + 1}
                  </span>

                  <span className="leading-7 text-[#6a5a4b]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* OPTIONAL DEEP-CLEAN NOTE */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
            Bonus Heroics
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Feeling unusually powerful?
          </h2>

          <p className="mt-5 leading-8 text-[#6a5a4b]">
            Rinse the removable coffee pot and basket according to the
            manufacturer’s directions, and check whether the reservoir needs
            cleaning or descaling. You may also investigate beneath the stove—but
            only after it is completely cool and only if it can be moved safely.
            Never pull, disconnect, or strain a gas line for the sake of a crumb.
          </p>
        </div>
      </section>

      {/* VICTORY */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Victory Condition
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Congratulations. The kitchen has rejoined polite society.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            It does not have to be perfect. If the counter is visible, the sink
            is less dramatic, and the mystery sticky spot has been handled,
            this mission counts.
          </p>

          <form action={completeMission} className="mt-8">
            <input type="hidden" name="mission" value="kitchen-rescue" />

            <button
              type="submit"
              className="rounded-full bg-[#2f261f] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              I Survived This Mission
            </button>
          </form>

          <Link
            href="/#missions"
            className="mt-8 inline-flex rounded-full bg-[#2f261f] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Choose Another Mission
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}