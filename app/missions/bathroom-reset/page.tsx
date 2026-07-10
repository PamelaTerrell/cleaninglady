import Link from "next/link";
import Footer from "@/components/Footer";

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

export default function BathroomResetPage() {
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
          Mission File 003
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Bathroom Reset
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          Because the mirror should not look like it survived a toothpaste
          explosion, and the sink area should not require a search party.
        </p>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Difficulty
            </p>
            <h2 className="mt-3 text-3xl font-black">Splash Zone Chaos</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Not impossible. Just damp, suspicious, and somehow covered in tiny
              dots no one will admit creating.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Time Needed
            </p>
            <h2 className="mt-3 text-3xl font-black">10–30 Minutes</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              A quick wipe can change the whole mood. A full reset can make you
              feel like you live in a civilized society.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Victory Goal
            </p>
            <h2 className="mt-3 text-3xl font-black">Restore the Sparkle</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              We are aiming for fresh, not palace-level. If the mirror is clear
              and the sink is no longer alarming, you win.
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

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Victory Condition
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Congratulations. The bathroom no longer has an attitude.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            It does not need to sparkle like a hotel commercial. If the mirror is
            clear, the sink is wiped, and the toilet has been addressed with
            dignity, this mission counts.
          </p>

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