import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { completeMission } from "@/app/actions";

export const metadata: Metadata = {
  title: "Closet Chaos | Super Cleaning Lady",
  description:
    "A funny closet cleaning mission for when opening the door feels dangerous and the shoe avalanche risk is no longer theoretical.",
};

const quickSteps = [
  "Pick up everything on the closet floor. Yes, the floor is still in there somewhere.",
  "Remove anything that obviously does not belong in the closet. The coffee mug has no alibi.",
  "Choose five items to donate, toss, or relocate. Five. We are not filming a makeover show.",
  "Line up shoes enough to prevent a toe-stubbing incident.",
  "Close the closet door with dignity, not panic.",
];

const deepSteps = [
  "Take out one section at a time. Do not empty the entire closet unless you enjoy danger.",
  "Sort items into keep, donate, trash, and why-was-this-in-here.",
  "Remove clothes that do not fit, do not flatter, or make you feel like a sad beige curtain.",
  "Group similar items together so the closet stops acting like a mystery box.",
  "Put shoes, bags, and accessories where they can be found by a normal human.",
  "Take out donations or trash immediately before they sneak back into the closet.",
];

const supplies = [
  "Trash bag",
  "Donation bag or box",
  "Hangers",
  "Laundry basket",
  "Timer",
  "Emotional support beverage",
];

export default function ClosetChaosPage() {
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
          Mission File 004
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Closet Chaos
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          For when opening the closet door feels like disturbing a sleeping beast,
          and one wrong move could trigger a shoe avalanche.
        </p>

        <img
  src="/closet-chaos.png"
  alt="Closet Chaos, a monster made of clothes bursting out of a messy closet"
  className="mx-auto mt-10 w-56 drop-shadow-xl md:w-72"
/>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Difficulty
            </p>
            <h2 className="mt-3 text-3xl font-black">Hidden Disaster</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              The room may look fine, but behind that door is a whole documentary
              about delayed decisions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Time Needed
            </p>
            <h2 className="mt-3 text-3xl font-black">10–45 Minutes</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Start with the floor or one shelf. The goal is progress, not a
              closet that gets its own television special.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Victory Goal
            </p>
            <h2 className="mt-3 text-3xl font-black">Prevent the Avalanche</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              If you can open the door without flinching, ducking, or whispering
              “please no,” this mission is working.
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
              Gather your closet-taming tools.
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
              For when the closet has started making threats.
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
              45-Minute Reset
            </p>

            <h2 className="mt-4 text-4xl font-black">
              For when you are ready to enter the danger zone.
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
            Congratulations. The closet is no longer a booby trap.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            It does not need to look like a celebrity closet. If you found the
            floor, removed a few questionable items, and reduced the chance of
            being attacked by footwear, this mission counts.
          </p>

          <form action={completeMission} className="mt-8">
  <input type="hidden" name="mission" value="closet-chaos" />

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