import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Sock Portal | Super Cleaning Lady",
  description:
    "Meet the Sock Portal, the mysterious laundry-room vortex responsible for separating perfectly good socks from their lifelong partners.",
};

const warningSigns = [
  "You placed two matching socks in the washer, but only one returned.",
  "A single sock has been living on top of the dryer for several months.",
  "Your laundry basket contains socks that appear to belong to another household.",
  "The fitted sheet somehow escaped intact, but one tiny ankle sock vanished.",
];

const preferredVictims = [
  "Brand-new socks",
  "The comfortable pair",
  "Children’s socks approximately six minutes after purchase",
  "The only black sock that matches your work clothes",
  "Any sock whose partner has already shown unusual loyalty",
];

const hidingPlaces = [
  "Inside fitted sheets",
  "Behind the washer",
  "Under the dryer",
  "Inside pant legs",
  "Between the laundry basket and another dimension",
  "Exactly where you already looked twice",
];

export default function SockPortalPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#2f261f] px-6 py-14 text-white md:py-20">
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#8a5ad8]/25 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#4da6d8]/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-center lg:text-left">
            <Link
              href="/#villains"
              className="inline-flex rounded-full border border-white/25 bg-white/5 px-5 py-2 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              ← Back to Villains
            </Link>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-[#f4c96d]">
              Laundry Villain File
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
              The Sock Portal
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#f7ead6] md:text-xl lg:mx-0">
              A swirling laundry-room vortex with one purpose: separating
              perfectly good socks from their lifelong partners.
            </p>

            <blockquote className="mt-7 rounded-2xl border-l-4 border-[#f4c96d] bg-white/10 px-6 py-5 text-xl font-bold italic leading-8">
              “It does not take both socks. That would be too merciful.”
            </blockquote>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/missions/laundry-mountain"
                className="rounded-full bg-[#f4c96d] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
              >
                Start Laundry Mountain
              </Link>

              <a
                href="#case-file"
                className="rounded-full border border-white/30 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Open the Case File
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <div
                className="absolute inset-10 rounded-full bg-[#b88cff]/25 blur-3xl"
                aria-hidden="true"
              />

              <img
                src="/sock-portal.png"
                alt="The Sock Portal, a mischievous purple laundry vortex stealing mismatched socks"
                className="relative w-full rounded-[2.5rem] border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CASE SUMMARY */}
      <section id="case-file" className="scroll-mt-36 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Case Summary
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              The investigation remains active.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              Twelve socks enter the laundry process. Eleven return. No one sees
              anything. No one hears anything. The dryer maintains its silence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b48635]">
                Threat Level
              </p>

              <h3 className="mt-3 text-3xl font-black">Mysteriously High</h3>

              <p className="mt-4 leading-7 text-[#6a5a4b]">
                The Portal prefers small objects, emotional attachments, and
                exactly the sock you needed this morning.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b48635]">
                Known Territory
              </p>

              <h3 className="mt-3 text-3xl font-black">Laundry Rooms</h3>

              <p className="mt-4 leading-7 text-[#6a5a4b]">
                It may also operate from bedrooms, hampers, gym bags, and that
                mysterious gap beside the washing machine.
              </p>
            </article>

            <article className="rounded-[2rem] border border-[#eadcc8] bg-white p-8 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b48635]">
                Villain Goal
              </p>

              <h3 className="mt-3 text-3xl font-black">Permanent Mismatch</h3>

              <p className="mt-4 leading-7 text-[#6a5a4b]">
                Its ultimate objective is a drawer filled entirely with lonely,
                suspiciously unrelated socks.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SOCK PORTAL COMIC */}
<section className="bg-white px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
        Incident Report
      </p>

      <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
        Every problem has a solution. Especially this one.
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
        Super Handy Man brings the flashlight, the drill, the socket set, and
        enough confidence to investigate one missing sock. The Portal remains
        completely uncooperative.
      </p>
    </div>

    <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] p-3 shadow-2xl sm:p-5">
      <img
        src="/comics/sock-portal-fix.png"
        alt="Super Handy Man investigates a missing sock with an excessive number of tools while the mysterious Sock Portal remains unsolved"
        className="h-auto w-full rounded-[1.75rem]"
      />
    </div>

    <p className="mx-auto mt-7 max-w-2xl text-center text-lg font-bold italic leading-8 text-[#6a5a4b]">
      “The Sock Portal remains a mystery. Super Handy Man remains extremely
      optimistic.”
    </p>
  </div>
</section>

      {/* WARNING SIGNS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Warning Signs
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Has the Portal opened in your home?
            </h2>

            <div className="mt-8 space-y-4">
              {warningSigns.map((sign, index) => (
                <div
                  key={sign}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2f261f] text-sm font-black text-white">
                    {index + 1}
                  </span>

                  <p className="leading-7 text-[#6a5a4b]">{sign}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
              Preferred Victims
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              It always takes the good sock.
            </h2>

            <div className="mt-8 space-y-4">
              {preferredVictims.map((victim) => (
                <div
                  key={victim}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 font-bold leading-7 text-[#f7ead6]"
                >
                  {victim}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIDING PLACES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Search Locations
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Check these places before blaming another dimension.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hidingPlaces.map((place) => (
              <div
                key={place}
                className="rounded-[2rem] border border-[#eadcc8] bg-white p-7 text-center text-lg font-black shadow-sm"
              >
                {place}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSE PLAN */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#2f261f] px-8 py-14 text-center text-white shadow-2xl md:px-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
            Recommended Response
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Contain the laundry before the Portal grows stronger.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#f7ead6]">
            Gather the loose socks, empty the machines, check the fitted sheets,
            and complete one load from beginning to end. Do not allow the clean
            laundry to establish a permanent settlement on the chair.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/missions/laundry-mountain"
              className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
            >
              Enter Laundry Mountain
            </Link>

            <Link
              href="/#villains"
              className="rounded-full border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Investigate More Villains
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL REPORT */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
            Final Report
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight">
            The missing sock may never return.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
            You may locate it tomorrow, next month, or inside a fitted sheet two
            years from now. Until then, its partner may join the emergency
            cleaning-rag division with full honors.
          </p>

          <p className="mt-7 text-2xl font-black text-[#2f261f]">
            No sock left behind—unless the Portal has other plans.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}