import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Doom Basket | Super Cleaning Lady",
  description:
    "Meet The Doom Basket, the mysterious container of random objects you meant to deal with later, before later became a lifestyle.",
};

const symptoms = [
  "You have a basket, bin, tote, chair, or bag full of things you were definitely going to deal with later.",
  "The basket has been moved from room to room like it is on tour.",
  "You are no longer fully sure what is inside it.",
  "You have considered buying another basket instead of addressing the original basket.",
  "The basket has become part of the decor and you have stopped seeing it emotionally.",
];

const rescueSteps = [
  "Carry the Doom Basket to one clear surface. Do not dump it on the floor unless you enjoy plot twists.",
  "Remove obvious trash first. Receipts, wrappers, expired coupons, and tiny paper mysteries must go.",
  "Make three piles: belongs here, belongs elsewhere, and why-do-I-own-this.",
  "Put away everything that belongs in the current room.",
  "Relocate the elsewhere pile immediately before it starts a new colony.",
  "Throw away or donate the nonsense pile. Do not let it negotiate.",
];

const villainStats = [
  {
    label: "Threat Level",
    value: "Sneaky",
    text: "Looks harmless. Quietly destroys peace.",
  },
  {
    label: "Known Hideouts",
    value: "Corners",
    text: "Also closets, bedrooms, laundry rooms, and that chair.",
  },
  {
    label: "Special Power",
    value: "Multiplication",
    text: "One basket becomes three if ignored long enough.",
  },
];

export default function DoomBasketPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* COMPACT HERO */}
<section className="mx-auto max-w-5xl px-6 pb-7 pt-10 text-center md:pb-9 md:pt-14">
  <Link
    href="/"
    className="inline-flex rounded-full border border-[#eadcc8] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#7a5520] transition hover:-translate-y-1 hover:shadow-md"
  >
    ← Back to HQ
  </Link>

  <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
    Villain File 001
  </p>

  <h1 className="mx-auto mt-3 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-6xl">
    The Doom Basket
  </h1>

  <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
    A mysterious container of random objects you planned to deal with
    “later.” Later has now become a lifestyle.
  </p>

  <img
    src="/doom-basket.png"
    alt="The Doom Basket, a mischievous basket overflowing with random clutter"
    className="mx-auto mt-6 w-44 drop-shadow-xl sm:w-52 md:w-60"
  />
</section>

{/* FEATURED DOOM BASKET COMIC */}
<section className="bg-white px-4 pb-14 pt-4 sm:px-6 md:pb-16">
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
        Clutter Incident Report
      </p>

      <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
        The Doom Basket is the new junk drawer.
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
        It contains receipts, chargers, mystery keys, one unmatched sock, and
        everything except a clear purpose. Same chaos. Better handles.
      </p>
    </div>

    <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-3 shadow-[0_24px_70px_rgba(47,38,31,0.12)] sm:p-5">
      <img
        src="/comics/doom-basket-new-junk-drawer.png"
        alt="Super Cleaning Lady and Spongie discover that the Doom Basket has become a portable junk drawer overflowing with random household objects"
        className="h-auto w-full rounded-[1.5rem]"
      />
    </div>

    <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-bold italic leading-8 text-[#6a5a4b]">
      “No one notices it until they need the one thing at the bottom.”
    </p>
  </div>
</section>

{/* VILLAIN STATS */}
<section className="px-6 py-16">
  <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
    {villainStats.map((stat) => (
      <div
        key={stat.label}
        className="rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm"
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
              You may be dealing with a Doom Basket if...
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
              It started as a helpful basket. Then it gained power.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              At first, the basket was innocent. A temporary place for things
              that needed to be put away. Then one day, someone added a charger,
              three socks, a receipt, a hair clip, unopened mail, a mystery cord,
              and a pair of sunglasses from 2019.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              Suddenly, the basket was no longer storage. It was a tiny emotional
              landfill with handles.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Super Cleaning Lady Says
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Do not fear the basket. The basket fears decisions.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              Doom Baskets survive because they are vague. The moment you start
              making decisions — trash, donate, put away, relocate — their power
              weakens.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              You do not have to fix your whole house. You only have to defeat
              one container of nonsense at a time.
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
            How to defeat The Doom Basket without accidentally starting a whole
            new life.
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
            The Doom Basket has been weakened.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            If the basket is empty, lighter, or no longer silently threatening
            you from the corner, this victory counts. The basket may return, but
            now it knows you have a plan.
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