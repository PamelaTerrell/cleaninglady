import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { completeMission } from "@/app/actions";

export const metadata: Metadata = {
  title: "Bedroom Reset | Super Cleaning Lady",
  description:
    "A funny bedroom cleaning mission for changing overdue sheets, restoring the bed, and improving the entire mood of tomorrow.",
};

const quickSteps = [
  "Strip the bed before the sheets can negotiate another night.",
  "Put the old sheets directly into the laundry basket. Do not create a temporary floor-based linen department.",
  "Put on a clean fitted sheet and locate the correct corner before losing your patience.",
  "Add fresh pillowcases so your face has somewhere respectable to spend the night.",
  "Straighten the blanket, fluff the pillows, and admire the fastest bedroom transformation known to humanity.",
];

const deepSteps = [
  "Strip the sheets, pillowcases, blankets, and anything else that has quietly joined the bedding ecosystem.",
  "Start the laundry before the old sheets establish permanent residency in the basket.",
  "Check beneath the bed for socks, cups, wrappers, and evidence from previous civilizations.",
  "Dust the nightstands, headboard, lamps, and any surface currently wearing a small gray sweater.",
  "Vacuum or sweep the floor, including the mysterious territory beneath the bed.",
  "Make the bed with fresh sheets, fluffed pillows, and the confidence of someone whose life is briefly under control.",
];

const supplies = [
  "Fresh sheets",
  "Clean pillowcases",
  "Laundry basket",
  "Vacuum or broom",
  "Microfiber cloth",
  "The strength to fight a fitted sheet",
];

export default function BedroomResetPage() {
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
          Bedroom Reset
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          Because the old sheets have been holding onto crumbs, wrinkles, and
          several bad decisions. It is time for a full bedroom reboot.
        </p>

       
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Difficulty
            </p>

            <h2 className="mt-3 text-3xl font-black">Fitted Sheet Combat</h2>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Mostly manageable until one corner escapes and the entire
              operation becomes personal.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Time Needed
            </p>

            <h2 className="mt-3 text-3xl font-black">10–30 Minutes</h2>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Ten minutes gives you fresh sheets. Thirty minutes can make the
              entire bedroom look like responsible adults live there.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Victory Goal
            </p>

            <h2 className="mt-3 text-3xl font-black">Change the Whole Vibe</h2>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              We are aiming for clean, comfortable, and ready for actual rest.
              Decorative pillow perfection is not required.
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
              Gather your weapons against bedroom fatigue.
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
              For when the sheets have entered their villain era.
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
              For when the whole bedroom needs a fresh start.
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
            Congratulations. The bed is no longer working against you.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            It does not need to look like a luxury hotel. If the sheets are
            clean, the pillows are fluffed, and you are looking forward to
            climbing into bed tonight, this mission counts.
          </p>

          <form action={completeMission} className="mt-8">
            <input type="hidden" name="mission" value="bedroom-reset" />

            <button
              type="submit"
              className="rounded-full bg-[#2f261f] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              I Changed the Whole Vibe
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