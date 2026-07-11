import Link from "next/link";
import Footer from "@/components/Footer";

const symptoms = [
  "You have mail from three different emotional eras.",
  "There is at least one envelope you are afraid to open because it looks official.",
  "Receipts have formed a fragile paper ecosystem.",
  "You keep moving the pile to another surface and calling it progress.",
  "You bought a folder, but the papers refused to respect it.",
  "There is a sticky note with a phone number and absolutely no context.",
  "One paper looks important, but refuses to explain why.",
];

const rescueSteps = [
  "Gather the paper pile into one place. Do not let it spread across multiple kingdoms.",
  "Throw away obvious junk mail, expired coupons, old envelopes, and paper nonsense.",
  "Make four piles: act on, keep/file, shred, and why-is-this-even-here.",
  "Open the scary envelope. It cannot hurt you if it has already been sitting there for six weeks. Probably.",
  "Handle anything that takes under two minutes.",
  "Put important papers in one folder, tray, or basket labeled clearly enough for future you.",
  "Remove trash and shredding immediately before the pile rebuilds itself overnight.",
];

const villainStats = [
  {
    label: "Threat Level",
    value: "Administrative",
    text: "Not loud. Just silently judging you from the counter.",
  },
  {
    label: "Known Hideouts",
    value: "Flat Surfaces",
    text: "Kitchen counters, desks, entry tables, and that one chair no one sits in.",
  },
  {
    label: "Special Power",
    value: "Avoidance",
    text: "Can make a grown adult suddenly decide to clean the garage instead.",
  },
];

export default function PaperPileOfDespairPage() {
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
          Villain File 004
        </p>

        <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          The Paper Pile of Despair
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          A stack of mail, receipts, forms, coupons, school papers, mystery notes,
          and envelopes that somehow gained emotional weight while you were busy
          trying to live your life.
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
              You may be dealing with The Paper Pile of Despair if...
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
              It started as today’s mail.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              At first, it was just one envelope. Then a receipt joined it. Then
              a coupon, a reminder, a form, and a paper you kept because it looked
              important but refused to provide details.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              Soon the pile became less about paper and more about unresolved
              decisions wearing a business casual outfit.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Super Cleaning Lady Says
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Paper piles survive on uncertainty.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              The Paper Pile of Despair gains strength when every paper feels
              like a question. Your job is to turn the questions into categories.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              Trash, file, act on, shred, or relocate. The pile cannot survive
              direct decision-making. It is allergic to clarity.
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
            How to defeat The Paper Pile of Despair without accidentally doing
            your taxes.
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
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
            Victory Message
          </p>

          <h2 className="mt-4 text-4xl font-black">
            The Paper Pile of Despair has been reduced to paperwork with
            boundaries.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            If the pile is smaller, sorted, or no longer occupying half the
            counter like it pays rent, this victory counts. Please enjoy your
            newly discovered flat surface.
          </p>

          <Link
            href="/missions/one-bag-declutter"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Start One-Bag Declutter
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}