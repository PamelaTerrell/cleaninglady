import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { completeMission } from "@/app/actions";

export const metadata: Metadata = {
  title: "Bedroom Reset | Super Cleaning Lady",
  description:
    "A funny bedroom cleaning mission for changing overdue sheets, restoring the bed, and improving the entire mood of tomorrow.",
};

const missionDetails = [
  {
    label: "Difficulty",
    value: "Fitted Sheet Combat",
    description:
      "Mostly manageable until one corner escapes and the entire operation becomes personal.",
  },
  {
    label: "Time Needed",
    value: "10–30 Minutes",
    description:
      "Ten minutes gives you fresh sheets. Thirty minutes can make the entire bedroom look like responsible adults live there.",
  },
  {
    label: "Victory Goal",
    value: "Change the Whole Vibe",
    description:
      "We are aiming for clean, comfortable, and ready for actual rest. Decorative pillow perfection is not required.",
  },
];

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
      {/* COMPACT HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-10 text-center md:pb-10 md:pt-14">
        <Link
          href="/"
          className="inline-flex rounded-full border border-[#eadcc8] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#7a5520] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fffaf2]"
        >
          ← Back to HQ
        </Link>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
          Mission File 003
        </p>

        <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Bedroom Reset
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#6a5a4b] sm:text-lg md:leading-8">
          Because the old sheets have been holding onto crumbs, wrinkles, and
          several bad decisions. It is time for a full bedroom reboot.
        </p>
      </section>

      {/* FEATURED CLEAN-SHEETS COMIC */}
      <section className="bg-white px-5 py-14 sm:px-6 md:py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)]">
          <div className="grid items-center lg:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-white p-3 sm:p-5 lg:p-6">
              <img
                src="/comics/bed-sheets.png"
                alt="Super Cleaning Lady compares a difficult day with old sheets to a much better evening with fresh clean sheets"
                className="h-auto w-full rounded-[1.5rem] sm:rounded-[1.75rem]"
              />
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b48635]">
                Bedroom Heroics
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Change the sheets. Change the whole vibe.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                The day may have been chaotic, the laundry may remain
                unresolved, and tomorrow may already be making demands. But
                tonight, the bed is clean, comfortable, and temporarily on your
                side.
              </p>

              <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-5 text-lg font-bold italic leading-8 shadow-sm sm:p-6 sm:text-xl">
                “Fresh sheets: the fastest legal way to feel like you have your
                life together.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION DETAILS */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {missionDetails.map((detail) => (
            <article
              key={detail.label}
              className="rounded-[2rem] border border-[#eadcc8] bg-white p-7 shadow-sm sm:p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
                {detail.label}
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight">
                {detail.value}
              </h2>

              <p className="mt-4 leading-7 text-[#6a5a4b]">
                {detail.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* MISSION SUPPLIES */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
              Mission Supplies
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Gather your weapons against bedroom fatigue.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {supplies.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 font-bold text-[#fffaf2]"
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
          <article className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-7 shadow-sm sm:p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              10-Minute Rescue
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
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
          </article>

          <article className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-7 shadow-sm sm:p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              30-Minute Reset
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
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
          </article>
        </div>
      </section>

      {/* ENCOURAGEMENT */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Super Cleaning Lady Reminder
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            You do not need to reset the entire room to deserve clean sheets.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
            Changing the bedding alone can make tonight feel better. Dusting,
            vacuuming, and rescuing the area beneath the bed are optional bonus
            missions—not requirements for victory.
          </p>
        </div>
      </section>

      {/* VICTORY */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
            Victory Condition
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight">
            Congratulations. The bed is no longer working against you.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            It does not need to look like a luxury hotel. If the sheets are
            clean, the pillows are fluffed, and you are looking forward to
            climbing into bed tonight, this mission counts.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <form action={completeMission}>
              <input type="hidden" name="mission" value="bedroom-reset" />

              <button
                type="submit"
                className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#fff4dd] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]"
              >
                I Changed the Whole Vibe
              </button>
            </form>

            <Link
              href="/#missions"
              className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:-translate-y-1 hover:bg-white/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]"
            >
              Choose Another Mission
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}