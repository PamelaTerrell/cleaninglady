import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { completeMission } from "@/app/actions";

export const metadata: Metadata = {
  title: "Bathroom Reset | Super Cleaning Lady",
  description:
    "A funny bathroom cleaning mission for when the mirror survived a toothpaste explosion, the sink needs adult supervision, and the shower curtain liner has entered its villain era.",
};

const quickSteps = [
  "Remove trash, empty bottles, and anything that has been living on the counter rent-free.",
  "Clear the sink area. The toothbrushes deserve a less dramatic neighborhood.",
  "Wipe the mirror so you can see yourself without toothpaste-based special effects.",
  "Swish the toilet bowl. We are not discussing it. We are just doing it.",
  "Wipe the obvious surfaces and pretend the bathroom has always respected you.",
];

const deepSteps = [
  "Take everything off the counter and sort it into keep, trash, and why-do-I-own-this.",
  "Clean the mirror until it stops looking like a crime scene for toothpaste.",
  "Scrub the sink, faucet, and counter.",
  "Clean the toilet inside and out like the brave adult you are.",
  "Wipe the shower or tub walls, especially the soap scum headquarters.",
  "Check the shower curtain liner. Clean it or replace it before it becomes self-aware.",
  "Sweep or vacuum the floor, then mop if the floor has become emotionally sticky.",
];

const supplies = [
  "Trash bag",
  "Bathroom cleaner",
  "Glass cleaner",
  "Toilet brush",
  "Microfiber cloth",
  "Courage and possibly gloves",
];

const bathroomHeroic = {
  title: "The Shower Curtain Liner",
  image: "/comics/shower-curtain-liner.png",
  alt: "Super Cleaning Lady replaces an old shower curtain liner while everyone else fails to notice",
  description:
    "No applause. No medal. Not even a casual, “Hey, the shower looks better.” Just another household crisis quietly defeated.",
  punchline:
    "Some heroes save the world. Others replace the shower curtain liner before it becomes self-aware.",
};

export default function BathroomResetPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* HERO */}
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
          Mission File 003
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Bathroom Reset
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          Because the mirror should not look like it survived a toothpaste
          explosion, the sink area should not require a search party, and the
          shower curtain liner should not be developing a personality.
        </p>

        <img
          src="/toothpaste-splatter.png"
          alt="Toothpaste Splatter, a mischievous toothpaste villain on a bathroom mirror"
          className="mx-auto mt-10 w-56 drop-shadow-xl md:w-72"
        />
      </section>

      {/* BATHROOM HEROICS */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Report from the bathroom
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              The invisible work nobody notices.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              The bathroom quietly improves. The shower feels fresher. Nobody
              asks why. Super Cleaning Lady knows exactly what happened.
            </p>
          </div>

          <article className="mx-auto mt-12 grid max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="bg-white p-4 sm:p-6">
              <img
                src={bathroomHeroic.image}
                alt={bathroomHeroic.alt}
                className="h-auto w-full rounded-[1.75rem]"
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b48635]">
                Bathroom Heroics
              </p>

              <h3 className="mt-4 text-4xl font-black leading-tight">
                {bathroomHeroic.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                {bathroomHeroic.description}
              </p>

              <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-6 text-xl font-bold italic leading-8 shadow-sm">
                “{bathroomHeroic.punchline}”
              </blockquote>

              <div className="mt-8">
                <Link
                  href="/invisible-heroics"
                  className="inline-flex rounded-full border border-[#d8c6ad] bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  See All Invisible Heroics
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* MISSION DETAILS */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Difficulty
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Splash Zone Chaos
            </h2>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Not impossible. Just damp, suspicious, and somehow covered in
              tiny dots no one will admit creating.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Time Needed
            </p>

            <h2 className="mt-3 text-3xl font-black">10–30 Minutes</h2>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              A quick wipe can change the whole mood. A full reset can make you
              feel like you live in a civilized society.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Victory Goal
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Restore the Sparkle
            </h2>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              We are aiming for fresh, not palace-level. If the mirror is clear
              and the sink is no longer alarming, you win.
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
              Gather your weapons against sink drama.
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
              For when the bathroom is being disrespectful.
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
              For when you are ready to defeat the splash zone.
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

      {/* VICTORY */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Victory Condition
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Congratulations. The bathroom no longer has an attitude.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            It does not need to sparkle like a hotel commercial. If the mirror
            is clear, the sink is wiped, and the toilet has been addressed with
            dignity, this mission counts.
          </p>

          <form action={completeMission} className="mt-8">
            <input type="hidden" name="mission" value="bathroom-reset" />

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