import Link from "next/link";
import Footer from "@/components/Footer";

const quickSteps = [
  "Grab a laundry basket and collect random items from visible surfaces. This is not organizing. This is witness protection.",
  "Clear the entryway so guests do not immediately know the house has been through something.",
  "Wipe the bathroom sink and mirror. Guests always find the bathroom. They are talented that way.",
  "Close doors to rooms that have chosen violence.",
  "Light a candle or spray something pleasant. We are creating an atmosphere of competence.",
];

const deepSteps = [
  "Start at the front door and clean the path guests will actually see.",
  "Clear the living room surfaces: coffee table, side tables, and any chair pretending to be storage.",
  "Reset the bathroom with a clean hand towel, wiped sink, and toilet check.",
  "Handle obvious kitchen chaos: dishes contained, counters wiped, trash removed.",
  "Fluff pillows, straighten blankets, and remove anything that says, “we gave up Wednesday.”",
  "Do a final walk-through like a secret agent protecting your reputation.",
];

const supplies = [
  "Laundry basket",
  "Trash bag",
  "All-purpose cleaner",
  "Clean hand towel",
  "Candle or room spray",
  "Calm face",
];

export default function CompanysComingPage() {
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
          Mission File 005
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Company’s Coming
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          The emergency clean for when someone texts, “We’re five minutes away,”
          and your home immediately enters a witness protection program.
        </p>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Difficulty
            </p>
            <h2 className="mt-3 text-3xl font-black">Full Panic Mode</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Time is short. Standards are flexible. The goal is not perfection.
              The goal is plausible deniability.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Time Needed
            </p>
            <h2 className="mt-3 text-3xl font-black">5–30 Minutes</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Whether you have five minutes or half an hour, we are cleaning only
              what the visitors can see. This is strategy, not deceit.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Victory Goal
            </p>
            <h2 className="mt-3 text-3xl font-black">Look Surprisingly Fine</h2>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              If guests walk in and do not immediately whisper “oh no,” this
              mission has succeeded.
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
              Gather your emergency-cleaning equipment.
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
              5-Minute Panic Clean
            </p>

            <h2 className="mt-4 text-4xl font-black">
              For when the driveway has become a threat.
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
              30-Minute Emergency Reset
            </p>

            <h2 className="mt-4 text-4xl font-black">
              For when there is still time to fake a lifestyle.
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
            Congratulations. The house looks like adults live here.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            It does not have to be spotless. If the bathroom is safe, the main
            room is presentable, and the secret basket of chaos is hidden
            somewhere reasonable, this mission counts.
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