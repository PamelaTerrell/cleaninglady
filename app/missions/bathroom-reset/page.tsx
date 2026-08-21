import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { completeMission } from "@/app/actions";

export const metadata: Metadata = {
  title: "Bathroom Reset | Super Cleaning Lady",
  description:
    "A funny bathroom cleaning mission for toothpaste splatter, sink drama, questionable toilet-seat mist, and shower curtain liners entering their villain era.",
};

const missionDetails = [
  {
    label: "Difficulty",
    value: "Splash Zone Chaos",
    description:
      "Not impossible. Just damp, suspicious, and somehow covered in tiny dots no one will admit creating.",
  },
  {
    label: "Time Needed",
    value: "10–30 Minutes",
    description:
      "A quick wipe can change the whole mood. A full reset can make you feel like you live in a civilized society.",
  },
  {
    label: "Victory Goal",
    value: "Restore the Sparkle",
    description:
      "We are aiming for fresh, not palace-level. If the mirror is clear and the sink is no longer alarming, you win.",
  },
];

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
  "Empty the shower caddy. Toss the empties, retire the rusty razor, and question whether you truly need backup backup shampoo.",
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

const bathroomHeroics = [
  {
    title: "The Shower Caddy Crisis",
    image: "/comics/shower-caddy.png",
    alt: "Super Cleaning Lady, Spritzy, and Spongie confront an overflowing shower caddy filled with backup shampoo, a rusty razor, soap-scum goo, and products taking over the bathtub",
    description:
      "It started with one harmless idea: tidy the shower caddy real quick. Then came the backup backup shampoo, the rusty razor, the thriving soap-scum goo, and the horrifying realization that the tub rim had become overflow storage.",
    punchline:
      "If there’s a rusty razor, soap-scum goo, and backup backup shampoo... it’s cleanup time.",
  },
  {
    title: "The Shower Curtain Liner",
    image: "/comics/shower-curtain-liner.png",
    alt: "Super Cleaning Lady replaces an old shower curtain liner while everyone else fails to notice",
    description:
      "No applause. No medal. Not even a casual, “Hey, the shower looks better.” Just another household crisis quietly defeated.",
    punchline:
      "Some heroes save the world. Others replace the shower curtain liner before it becomes self-aware.",
  },
];

export default function BathroomResetPage() {
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
          Mission File 002
        </p>

        <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Bathroom Reset
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#6a5a4b] sm:text-lg md:leading-8">
          Because the mirror should not look like it survived a toothpaste
          explosion, the sink should not require adult supervision, and the
          toilet seat should not experience a peach-blossom weather event.
        </p>

        <img
          src="/toothpaste-splatter.png"
          alt="Toothpaste Splatter, a mischievous toothpaste villain on a bathroom mirror"
          className="mx-auto mt-6 w-40 drop-shadow-xl sm:w-48 md:w-56"
        />
      </section>

      {/* FEATURED SPRAY-THE-AIR COMIC */}
      <section className="bg-white px-5 py-14 sm:px-6 md:py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)]">
          <div className="grid items-center lg:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-white p-3 sm:p-5 lg:p-6">
              <img
                src="/comics/spray-the-air-not-the-chair.png"
                alt="Super Cleaning Lady explains to Super Handy Man that bathroom air freshener should be sprayed into the air rather than over the toilet seat"
                className="h-auto w-full rounded-[1.5rem] sm:rounded-[1.75rem]"
              />
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b48635]">
                Important Bathroom Briefing
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Spray the air, not the chair.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                Super Cleaning Lady delivers an essential household announcement:
                air freshener belongs in the air, not drifting down onto the
                toilet seat like a scented weather system.
              </p>

              <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-5 text-lg font-bold italic leading-8 shadow-sm sm:p-6 sm:text-xl">
                “Fresh bathroom. Dry toilet seat. Civilization restored.”
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

     {/* BATHROOM HEROICS */}
<section className="bg-white px-6 py-16">
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
        Bathroom Heroics
      </p>

      <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
        Apparently the bathroom has multiple plotlines.
      </h2>

      <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
        A shower caddy becomes a storage facility. A shower curtain liner
        quietly enters its villain era. Nobody calls for help, but somehow
        Super Cleaning Lady gets involved anyway.
      </p>
    </div>

    <div className="mt-12 space-y-12">
      {bathroomHeroics.map((heroic, index) => (
        <article
          key={heroic.title}
          className="grid overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)] lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div
            className={`bg-white p-4 sm:p-6 ${
              index % 2 === 1 ? "lg:order-2" : ""
            }`}
          >
            <img
              src={heroic.image}
              alt={heroic.alt}
              className="h-auto w-full rounded-[1.75rem]"
            />
          </div>

          <div
            className={`flex flex-col justify-center p-8 sm:p-10 lg:p-12 ${
              index % 2 === 1 ? "lg:order-1" : ""
            }`}
          >
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b48635]">
              Invisible Heroics
            </p>

            <h3 className="mt-4 text-4xl font-black leading-tight">
              {heroic.title}
            </h3>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              {heroic.description}
            </p>

            <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-6 text-xl font-bold italic leading-8 shadow-sm">
              “{heroic.punchline}”
            </blockquote>
          </div>
        </article>
      ))}
    </div>

    <div className="mt-10 text-center">
      <Link
        href="/invisible-heroics"
        className="inline-flex rounded-full border border-[#d8c6ad] bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
      >
        See All Invisible Heroics
      </Link>
    </div>
  </div>
</section>

      {/* MISSION SUPPLIES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
              Mission Supplies
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Gather your weapons against sink drama.
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
          </article>

          <article className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-7 shadow-sm sm:p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              30-Minute Reset
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
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
          </article>
        </div>
      </section>

      {/* NO-SHAME REMINDER */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Super Cleaning Lady Reminder
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            You do not need to scrub every tile to make the bathroom feel better.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
            Clear the counter, wipe the sink, clean the mirror, and address the
            toilet. Anything beyond that is an optional bonus mission, not a
            requirement for victory.
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
            Congratulations. The bathroom no longer has an attitude.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            It does not need to sparkle like a hotel commercial. If the mirror
            is clear, the sink is wiped, and the toilet has been addressed with
            dignity, this mission counts.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <form action={completeMission}>
              <input type="hidden" name="mission" value="bathroom-reset" />

              <button
                type="submit"
                className="rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#fff4dd] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]"
              >
                I Survived This Mission
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