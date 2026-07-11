import Link from "next/link";
import Footer from "@/components/Footer";

const symptoms = [
  "There are crumbs in places where no food was officially served.",
  "The couch is making crunchy sounds.",
  "The kitchen floor has developed a suspicious texture.",
  "Someone said, “It’s just a few crumbs,” and now the crumbs have formed a community.",
  "You found a snack remnant and cannot confidently identify the snack.",
];

const rescueSteps = [
  "Start with the visible crumb zones: counters, table, floor, couch, and anywhere snacks go to retire.",
  "Pick up large pieces first. Do not make your vacuum emotionally responsible for whole crackers.",
  "Wipe counters and tables with a damp cloth or cleaner.",
  "Vacuum or sweep the floor, especially under chairs, cabinets, and the snack migration paths.",
  "Check couch cushions if you are emotionally prepared.",
  "Empty the vacuum or toss the sweep pile immediately. Crumbzilla must not be allowed to regroup.",
];

const villainStats = [
  {
    label: "Threat Level",
    value: "Crunchy",
    text: "Not terrifying, but deeply disrespectful under bare feet.",
  },
  {
    label: "Known Hideouts",
    value: "Couches",
    text: "Also counters, rugs, car seats, and under the table.",
  },
  {
    label: "Special Power",
    value: "Spreading",
    text: "One cracker becomes a floor-based ecosystem.",
  },
];

export default function CrumbzillaPage() {
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
          Villain File 002
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Crumbzilla
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          The tiny-but-mighty villain responsible for crunchy floors, snack dust,
          couch mysteries, and the phrase, “Why is this sticky and crumbly?”
        </p>
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
              You may be dealing with Crumbzilla if...
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
              It began with one innocent snack.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              A cracker was eaten. Perhaps a cookie. Maybe something with a
              dangerous amount of flakes. One tiny piece fell. Then another. Then
              the couch cushion opened a portal.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              Before anyone knew what happened, Crumbzilla had claimed the floor,
              the couch, and possibly the car.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Super Cleaning Lady Says
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Crumbs are small, but they have confidence.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              Crumbzilla wins when crumbs become background scenery. The trick is
              to attack the obvious crumb zones before they turn into a crunchy
              little kingdom.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              You do not need to deep-clean the whole house. Just defeat the
              snack evidence.
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
            How to defeat Crumbzilla before the floor becomes a snack museum.
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
            Crumbzilla has been swept from the scene.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            If the floor no longer crunches, the couch is less suspicious, and
            snack debris has been removed from public view, this victory counts.
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