import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spritzy | Super Cleaning Lady",
  description:
    "Meet Spritzy, the sparkle support specialist of Super Cleaning Lady — cheerful, loyal, and always ready to defeat sticky spots, suspicious splatters, and household drama.",
};

const stats = [
  {
    label: "Official Role",
    value: "Sparkle Support",
    text: "Spritzy brings backup, good attitude, and immediate emotional support for sticky situations.",
  },
  {
    label: "Special Skill",
    value: "Surface Rescue",
    text: "Counters, sinks, handles, tables, and mystery messes rarely survive a Spritzy intervention.",
  },
  {
    label: "Threat Response",
    value: "Cheerful but Serious",
    text: "Adorable? Yes. But fully prepared to end a suspicious splatter on sight.",
  },
];

const powers = [
  "Encourages everyone dramatically during cleanup operations.",
  "Believes every sticky spot can be defeated with enough spray and determination.",
  "Appears exactly when the counter starts looking emotionally complicated.",
  "Brings sparkle energy to kitchens, bathrooms, and household emergencies.",
  "Maintains optimism even when no one knows what the mess actually is.",
  "Serves as morale support, surface support, and occasional comic relief.",
];

const favorites = [
  {
    title: "Mystery Sticky Spot",
    href: "/villains/mystery-sticky-spot",
    text: "One of Spritzy’s greatest rivals. Suspicious. Shiny. Emotionally offensive.",
  },
  {
    title: "The Dish Goblin",
    href: "/villains/dish-goblin",
    text: "Spritzy is always ready to help when the sink starts looking like a ceramic hostage situation.",
  },
  {
    title: "Bathroom Reset",
    href: "/missions/bathroom-reset",
    text: "A natural habitat for sparkle support, fresh surfaces, and restored dignity.",
  },
];

export default function SpritzyPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex rounded-full border border-[#d9e7f8] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#155dcc] transition hover:-translate-y-1 hover:shadow-md"
          >
            ← Back to HQ
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#ed3d7f]">
            Meet the Squad
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Spritzy
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
            The sparkle support specialist of the Super Cleaning Lady universe.
            Spritzy is cheerful, fearless, and always ready to assist when a
            household surface gets sticky, grimy, suspicious, or just plain rude.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#d9e7f8] bg-white p-5 shadow-[0_24px_70px_rgba(21,93,204,0.10)] md:p-8">
            <img
              src="/spritzy.png"
              alt="Spritzy, the cheerful spray bottle sidekick from Super Cleaning Lady"
              className="mx-auto w-full max-w-md drop-shadow-xl"
            />
          </div>

          <div className="rounded-[2rem] border border-[#d9e7f8] bg-[#f7fbff] p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#155dcc]">
              Squad File 003
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Small bottle.
              <br />
              Big sparkle energy.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5e6777]">
              Spritzy is the team member who shows up smiling, ready to help,
              and fully convinced that one good cleaning session can change the
              emotional direction of an entire room.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#5e6777]">
              She specializes in sticky counters, suspicious splatters, sink
              drama, and all the household messes that make people pause and
              say, “What exactly happened here?”
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/villains/mystery-sticky-spot"
                className="inline-flex rounded-full bg-[#155dcc] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-md transition hover:-translate-y-1 hover:bg-[#104da9] hover:shadow-lg"
              >
                See Her Rival
              </Link>

              <Link
                href="/household-team-ups"
                className="inline-flex rounded-full border border-[#cfe1f7] bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#155dcc] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                View Team-Ups
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[2rem] border border-[#d9e7f8] bg-[#f7fbff] p-8 shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#155dcc]">
                {stat.label}
              </p>
              <h2 className="mt-3 text-3xl font-black">{stat.value}</h2>
              <p className="mt-4 leading-7 text-[#5e6777]">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POWERS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#155dcc] p-8 text-white shadow-2xl md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#dff1ff]">
            Signature Strengths
          </p>

          <h2 className="mt-4 text-4xl font-black">
            What Spritzy brings to the cleanup.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {powers.map((power) => (
              <div
                key={power}
                className="rounded-2xl bg-white/10 p-5 font-bold leading-7 text-white"
              >
                {power}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALITY + QUOTE */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#d9e7f8] bg-[#fffaf2] p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ed3d7f]">
              Personality Report
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Delightful. Loyal. Slightly dramatic.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              Spritzy has the spirit of a motivational coach and the instincts
              of a cleanup first responder. She believes in fresh starts,
              cleaner counters, and the power of not letting sticky things
              become part of the decor.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
              While other people may hesitate in the face of a suspicious mess,
              Spritzy chooses courage, optimism, and immediate intervention.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d9e7f8] bg-[#f7fbff] p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#155dcc]">
              Spritzy Says
            </p>

            <h2 className="mt-4 text-4xl font-black">
              “We do not need the full backstory.
              <br />
              We just need a cloth.”
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#5e6777]">
              Spritzy’s approach is simple: no overthinking, no emotional
              negotiations with the mess, and absolutely no long committee
              meeting about whether the sticky spot is still technically there.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#5e6777]">
              If it is suspicious, she sprays. If it is sticky, she assists. If
              it is crumbly too, she calls in reinforcements.
            </p>
          </div>
        </div>
      </section>

      {/* FAVORITES */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ed3d7f]">
              Spritzy in Action
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Best places to spot her.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {favorites.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-[#d9e7f8] bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#6a5a4b]">{item.text}</p>

                <Link
                  href={item.href}
                  className="mt-6 inline-flex rounded-full border border-[#cfe1f7] bg-[#f7fbff] px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#155dcc] transition hover:-translate-y-1 hover:shadow-md"
                >
                  Visit Page
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
            Squad Invitation
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Need backup for a suspicious household situation?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            Spritzy is ready to assist with sticky spots, sparkle emergencies,
            and any surface that has started making people uncomfortable.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#squad"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              Meet the Squad
            </Link>

            <Link
              href="/invisible-heroics"
              className="inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white/20"
            >
              Read the Comics
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}