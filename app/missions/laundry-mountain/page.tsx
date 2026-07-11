import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { completeMission } from "@/app/actions";

export const metadata: Metadata = {
  title: "Laundry Mountain | Super Cleaning Lady",
  description:
    "A funny laundry rescue mission for when the clothes have formed a landscape, the socks are missing, and the chair has become a closet.",
};

const quickSteps = [
  "Gather all laundry into one place. Yes, even the shirt on the chair that has become furniture.",
  "Separate obvious clean from obvious dirty. Do not hold a trial for every sock.",
  "Start one load. One load is a victory. We are not opening a laundromat today.",
  "Put clean clothes in one basket or on one surface. Containment is progress.",
  "Throw away dryer lint, empty pockets, and any mystery paper that has become laundry confetti.",
];

const deepSteps = [
  "Collect laundry from bedrooms, bathrooms, chairs, floors, and any suspicious corners.",
  "Sort into simple piles: lights, darks, towels, and things that require courage.",
  "Start the first load immediately before the laundry negotiates its way back to the floor.",
  "Fold or hang one clean basket completely.",
  "Put away what you fold. This is where many brave souls fall.",
  "Reset the laundry area so it no longer looks like fabric exploded.",
];

const supplies = [
  "Laundry basket",
  "Detergent",
  "Dryer sheets or wool balls",
  "Trash bag",
  "Timer",
  "A heroic amount of patience",
];

export default function LaundryMountainPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      <section className="mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
        <Link
          href="/"
          className="inline-flex rounded-full border border-[#eadcc8] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#7a5520] transition hover:-translate-y-1 hover:shadow-md"
        >
          ← Back to HQ
        </Link>

        <img
          src="/superhero-cleaning-bottle-mascot.png"
          alt="Super Cleaning Lady spray bottle superhero mascot"
          className="mx-auto mt-10 w-40 drop-shadow-xl md:w-56"
        />

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
          Mission File 002
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Laundry Mountain
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          For when the clothes have formed a landscape, the socks have declared
          independence, and you are no longer sure what is clean, dirty, or simply
          emotionally complicated.
        </p>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Difficulty
            </p>
            <h2 className="mt-3 text-3xl font-black">High Fabric Drama</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              The laundry is not just a chore anymore. It has become a mountain
              range with emotional consequences.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Time Needed
            </p>
            <h2 className="mt-3 text-3xl font-black">10 Minutes to All Day</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Start small. One load counts. Folding one basket counts. Finding
              the floor definitely counts.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Victory Goal
            </p>
            <h2 className="mt-3 text-3xl font-black">Defeat One Pile</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              We are not solving every textile problem in the house. We are
              choosing one pile and showing it who pays the mortgage.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] bg-[#2f261f] p-8 text-white shadow-2xl md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
              Mission Supplies
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Gather your laundry-fighting gear.
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

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              10-Minute Rescue
            </p>

            <h2 className="mt-4 text-4xl font-black">
              For when the laundry is winning.
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
              For when you are ready to scale the summit.
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

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Victory Condition
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Congratulations. The laundry pile has lost altitude.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            It does not all have to be folded today. If one load is started, one
            basket is handled, or one chair has been freed from its fabric prison,
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