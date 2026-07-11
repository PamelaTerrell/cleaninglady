import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mystery Sticky Spot | Super Cleaning Lady",
  description:
    "Meet Mystery Sticky Spot, the suspicious household villain that appears on counters, floors, handles, and places no one wants to discuss.",
};

const symptoms = [
  "Your hand touched something and immediately regretted it.",
  "There is a shiny spot on the counter with no clear backstory.",
  "The floor makes a tiny sound when you step there.",
  "Someone says, “What is that?” and everyone suddenly becomes very busy.",
  "You wiped it once, but it somehow remained spiritually present.",
  "It has collected one crumb, two hairs, and a tiny piece of something that looks like seasoning.",
  "No one knows what made it, but everyone agrees it has attitude.",
];

const rescueSteps = [
  "Identify the sticky zone without asking too many emotional questions.",
  "Remove anything sitting near or on top of the spot.",
  "Spray cleaner or use warm soapy water.",
  "Let it sit briefly if the spot has developed confidence.",
  "Wipe firmly with a cloth or sponge.",
  "Check for remaining stickiness. If your hand pauses, the villain is still alive.",
  "Dry the area and admire the surface now that it no longer has a personality.",
];

const villainStats = [
  {
    label: "Threat Level",
    value: "Suspicious",
    text: "Small in size. Large in emotional impact.",
  },
  {
    label: "Known Hideouts",
    value: "Everywhere",
    text: "Counters, floors, fridge handles, cabinet pulls, tables, and chair arms.",
  },
  {
    label: "Special Power",
    value: "Uncertainty",
    text: "No one knows what it is, who made it, or why it has texture.",
  },
];

export default function MysteryStickySpotPage() {
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
          Villain File 005
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Mystery Sticky Spot
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          The suspicious household villain that appears on counters, floors,
          handles, tables, and other places no one is willing to discuss under
          oath.
        </p>

        <img
  src="/mystery-sticky-spot.png"
  alt="Mystery Sticky Spot, a gooey wanted-poster household villain"
  className="mx-auto mt-10 w-56 drop-shadow-xl md:w-72"
/>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {villainStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
                {stat.label}
              </p>
              <h2 className="mt-3 text-3xl font-black">{stat.value}</h2>
              <p className="mt-4 leading-7 text-[#6a5a4b]">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] bg-[#2f261f] p-8 text-white shadow-2xl md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
              Warning Signs
            </p>

            <h2 className="mt-4 text-4xl font-black">
              You may be dealing with Mystery Sticky Spot if...
            </h2>

            <div className="mt-8 grid gap-4">
              {symptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="rounded-2xl bg-white/10 p-5 font-bold leading-7 text-[#fffaf2]"
                >
                  {symptom}
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
              Villain Origin Story
            </p>

            <h2 className="mt-4 text-4xl font-black">
              No one knows where it came from.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              Was it juice? Syrup? Sauce? A snack incident? A cleaning product
              that turned against us? Mystery Sticky Spot refuses to provide
              documentation.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              It appears quietly, waits patiently, and then attacks the next
              person who touches the counter without warning.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Super Cleaning Lady Says
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Do not investigate too deeply.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              The goal is not to solve the crime. The goal is to remove the
              evidence before someone leans on it and becomes emotionally
              involved.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              Warm water, cleaner, and determination can handle most sticky
              villains. If needed, let the cleaner sit for a minute. Sticky
              villains hate patience.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Defeat Plan
          </p>

          <h2 className="mt-4 text-4xl font-black">
            How to defeat Mystery Sticky Spot before it becomes part of the
            architecture.
          </h2>

          <ol className="mt-8 space-y-4">
            {rescueSteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-2xl bg-[#fffaf2] p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2f261f] text-sm font-black text-white">
                  {index + 1}
                </span>
                <span className="leading-7 text-[#6a5a4b]">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl md:p-12">
          
          <img
    src="/cleaning-hero-in-action.png"
    alt="Super Cleaning Lady looking disheveled but victorious after battling household chaos"
    className="mx-auto mb-6 w-36 drop-shadow-xl md:w-44"
  />
          
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
            Victory Message
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Mystery Sticky Spot has been removed from public life.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            If your hand no longer sticks, your foot no longer pauses, and the
            surface has stopped feeling suspicious, this victory counts. No
            further investigation is required.
          </p>

          <Link
            href="/missions/kitchen-rescue"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Start Kitchen Rescue
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}