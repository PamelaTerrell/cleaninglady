import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { completeMission } from "@/app/actions";

export const metadata: Metadata = {
  title: "One-Bag Declutter | Super Cleaning Lady",
  description:
    "A funny decluttering mission for when you need one bag, one starting point, and fewer things silently judging you from the corner.",
};

const quickSteps = [
  "Grab one bag. Trash bag, donation bag, grocery bag — any bag that is willing to serve.",
  "Pick one area. Do not wander the house like a confused cleaning ghost.",
  "Find five things that are obvious trash. Receipts from 2022 do not need a farewell ceremony.",
  "Find five things you do not use, like, need, or understand why you own.",
  "Remove the bag from the room immediately before the clutter files an appeal.",
];

const deepSteps = [
  "Choose one zone: entryway, nightstand, kitchen counter, bathroom drawer, car, or doom basket.",
  "Set a timer for 20–30 minutes. The timer is your boss now.",
  "Sort quickly into trash, donate, relocate, and why-is-this-here.",
  "Do not make emotional eye contact with every object.",
  "Tie up the trash or close the donation bag.",
  "Take the bag to the trash, car, garage, or donation spot before it becomes a decorative feature.",
];

const supplies = [
  "One bag",
  "Timer",
  "Donation box",
  "Trash bag",
  "Laundry basket",
  "No-nonsense attitude",
];

export default function OneBagDeclutterPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
     <section className="mx-auto max-w-5xl px-6 pb-8 pt-10 text-center md:pb-10 md:pt-14">
  <Link
    href="/"
    className="inline-flex rounded-full border border-[#eadcc8] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#7a5520] transition hover:-translate-y-1 hover:shadow-md"
  >
    ← Back to HQ
  </Link>

  <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
    Mission File 006
  </p>

  <h1 className="mx-auto mt-3 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
    One-Bag Declutter
  </h1>

  <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#6a5a4b] sm:text-lg md:leading-8">
    One bag. One starting point. Fewer things silently judging you from the corner.
  </p>
</section>

      {/* FEATURED ONE-BAG DECLUTTER COMIC */}
<section className="bg-white px-4 pb-14 pt-4 sm:px-6 md:pb-16">
  <div className="mx-auto max-w-6xl">
   

    <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-3 shadow-[0_24px_70px_rgba(47,38,31,0.12)] sm:p-5">
      <img
        src="/comics/one-bag-declutter-comic.png"
        alt="Super Cleaning Lady fills one bag with trash and donations while clutter objects dramatically protest being removed"
        className="h-auto w-full rounded-[1.5rem]"
      />
    </div>

    <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-bold italic leading-8 text-[#6a5a4b]">
      “It’s not empty. It’s breathable. That’s a win.”
    </p>
  </div>
</section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Difficulty
            </p>
            <h2 className="mt-3 text-3xl font-black">Sneaky Chaos</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              It looks innocent until you realize the counter has been collecting
              objects like it is starting a museum.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Time Needed
            </p>
            <h2 className="mt-3 text-3xl font-black">10–30 Minutes</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              This is the perfect mission for when you want progress without
              accidentally reorganizing your entire personality.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Victory Goal
            </p>
            <h2 className="mt-3 text-3xl font-black">Fill One Bag</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Not one room. Not one closet. One bag. We are keeping expectations
              realistic because we have been hurt before.
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
              Gather your anti-clutter equipment.
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
              For when the clutter is getting bold.
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
              For when you are ready to evict some nonsense.
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
            Congratulations. One bag of chaos has been removed from the premises.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            The house may not be perfect, but one bag is gone, one area is lighter,
            and at least five objects have stopped loitering in your life. This
            mission absolutely counts.
          </p>

          <form action={completeMission} className="mt-8">
  <input type="hidden" name="mission" value="one-bag-declutter" />

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