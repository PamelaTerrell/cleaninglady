import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Dish Goblin | Super Cleaning Lady",
  description:
    "Meet The Dish Goblin, the sink-dwelling villain behind dirty dishes, mystery drain goop, and pans that have been soaking long enough to receive mail.",
};

const symptoms = [
  "The sink is full, but no one remembers using that many bowls.",
  "There is one spoon lying sideways like it gave up.",
  "You have started rinsing around other dishes instead of dealing with them.",
  "The dishwasher is either full, clean, dirty, or in a mysterious third state.",
  "Someone placed a cup beside the sink instead of inside it, which feels personal.",
  "There is goopie stuff in the sink drain, and frankly, no one is emotionally ready to identify it.",
  
];

const rescueSteps = [
  "Remove trash and food scraps first. The sink needs fewer plot complications.",
  "Stack similar dishes together so the chaos looks slightly more professional.",
  "Load the dishwasher if you have one. If not, fill the sink with hot soapy water.",
  "Wash the easy items first to build false confidence.",
  "Handle the worst pan last, because every mission has a final boss.",
  "Wipe the sink when you are done so it knows who is in charge.",
];

const villainStats = [
  {
    label: "Threat Level",
    value: "Sink-Based",
    text: "Harmless at first. Then suddenly there are forks everywhere.",
  },
  {
    label: "Known Hideouts",
    value: "The Sink",
    text: "Also counters, nightstands, coffee tables, and somehow the bathroom.",
  },
  {
    label: "Special Power",
    value: "Stacking",
    text: "Can turn three dishes into an emotional support mountain.",
  },
];

export default function DishGoblinPage() {
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
          Villain File 003
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          The Dish Goblin
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          The sink-dwelling villain who appears whenever one innocent plate turns
          into a ceramic traffic jam.
        </p>

        <img
  src="/dish-goblin.png"
  alt="The Dish Goblin, a goofy sink-dwelling villain made of dirty dishes"
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
              You may be dealing with The Dish Goblin if...
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
              It began with one plate.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              One plate was placed in the sink. Then a cup. Then a fork. Then
              someone added a pan and suddenly the sink became a gated community
              for dirty dishes.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              The Dish Goblin thrives on delay. It loves the phrase, “I’ll get
              to it later,” because later is where dishes go to multiply.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Super Cleaning Lady Says
            </p>

            <h2 className="mt-4 text-4xl font-black">
              The sink is not a storage unit.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              The Dish Goblin loses power the moment dishes start moving.
              Dishwasher, drying rack, trash, cabinet — any direction is better
              than sink-based despair.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              Do not wait until you feel inspired. No one feels inspired by wet
              spoons. Begin anyway.
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
            How to defeat The Dish Goblin without losing your will to live.
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
            The Dish Goblin has retreated.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            If the sink is empty, almost empty, or no longer making eye contact
            with you, this victory counts. The Goblin may return, but today it
            has been humbled.
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