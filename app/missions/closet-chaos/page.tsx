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

const missionDetails = [
  {
    label: "Difficulty",
    value: "Hidden Disaster",
    description:
      "The room may look fine, but behind that door is a whole documentary about delayed decisions.",
  },
  {
    label: "Time Needed",
    value: "10–45 Minutes",
    description:
      "Start with the floor or one shelf. The goal is progress, not a closet that gets its own television special.",
  },
  {
    label: "Victory Goal",
    value: "Prevent the Avalanche",
    description:
      "If you can open the door without flinching, ducking, or whispering “please no,” this mission is working.",
  },
];

const closetHeroic = {
  title: "Closet Chaos",
  image: "/comics/closet.png",
  alt: "Super Cleaning Lady opens an overstuffed closet, survives a shoe avalanche, and organizes the chaos",
  description:
    "The closet had been making threats for weeks. When the door finally opened, the situation involved a shoe avalanche, a hanger jungle, and at least one cardigan nobody remembers buying.",
  punchline:
    "Enter bravely. Sort ruthlessly. Try not to awaken the shoe avalanche.",
};

export default function ClosetChaosPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* COMPACT HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-10 text-center md:pb-10 md:pt-14">
        <Link
          href="/"
          className="inline-flex rounded-full border border-[#eadcc8] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#7a5520] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
        >
          ← Back to HQ
        </Link>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
          Mission File 004
        </p>

        <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Closet Chaos
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#6a5a4b] sm:text-lg md:leading-8">
          For when opening the closet door feels like disturbing a sleeping
          beast, and one wrong move could trigger a shoe avalanche.
        </p>

        <img
          src="/closet-chaos.png"
          alt="Closet Chaos, a monster made of clothes bursting out of a messy closet"
          className="mx-auto mt-6 w-40 drop-shadow-xl sm:w-48 md:w-56"
        />
      </section>

      {/* FEATURED SHOE COMMITTEE COMIC */}
      <section className="bg-white px-5 py-14 sm:px-6 md:py-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)]">
          <div className="grid items-center lg:grid-cols-[1.2fr_0.8fr]">
            <div className="bg-white p-3 sm:p-5 lg:p-6">
              <img
                src="/comics/shoe-committee.png"
                alt="Super Cleaning Lady holds a humorous shoe-storage committee meeting to solve an overflowing closet problem"
                className="h-auto w-full rounded-[1.5rem] sm:rounded-[1.75rem]"
              />
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b48635]">
                Emergency Shoe Storage Summit
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                The Shoe Committee is now in session.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                Vertical storage, labeled containers, and a bench with hidden
                compartments have arrived to present their cases. The shoes
                remain unwilling to cooperate.
              </p>

              <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-5 text-lg font-bold italic leading-8 shadow-sm sm:p-6 sm:text-xl">
                “The committee has reached a sole-ution.”
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

      {/* ORIGINAL CLOSET INCIDENT */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Earlier Closet Incident
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Before the committee, there was the avalanche.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              The door was bulging. The hangers had formed a jungle. Somewhere
              inside, a lonely sock was waiting to be rescued.
            </p>
          </div>

          <article className="mx-auto mt-10 grid max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="bg-white p-4 sm:p-6">
              <img
                src={closetHeroic.image}
                alt={closetHeroic.alt}
                className="h-auto w-full rounded-[1.75rem]"
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b48635]">
                Closet Heroics
              </p>

              <h3 className="mt-4 text-4xl font-black leading-tight">
                {closetHeroic.title}
              </h3>

              <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                {closetHeroic.description}
              </p>

              <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-6 text-xl font-bold italic leading-8 shadow-sm">
                “{closetHeroic.punchline}”
              </blockquote>

              <div className="mt-8">
                <Link
                  href="/invisible-heroics"
                  className="inline-flex rounded-full border border-[#d8c6ad] bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
                >
                  See All Invisible Heroics
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SUPPLIES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
              Mission Supplies
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Gather your closet-taming tools.
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
          </article>

          <article className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-7 shadow-sm sm:p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              45-Minute Reset
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
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
          </article>
        </div>
      </section>

      {/* VICTORY */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Victory Condition
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight">
            Congratulations. The closet is no longer a booby trap.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            It does not need to look like a celebrity closet. If you found the
            floor, removed a few questionable items, and reduced the chance of
            being attacked by footwear, this mission counts.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <form action={completeMission}>
              <input type="hidden" name="mission" value="closet-chaos" />

              <button
                type="submit"
                className="rounded-full bg-[#2f261f] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
              >
                I Survived This Mission
              </button>
            </form>

            <Link
              href="/#missions"
              className="inline-flex rounded-full border border-[#d8c6ad] bg-[#fffaf2] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
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