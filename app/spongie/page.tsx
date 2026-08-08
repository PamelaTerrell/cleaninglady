import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spongie | Morale & Tiny Emergency Division",
  description:
    "Meet Spongie, the tiny but wildly confident sidekick of Super Cleaning Lady. Small sponge. Big confidence. Every crumb is an incident.",
};

const personnelStats = [
  {
    label: "Department",
    value: "Morale Division",
    description:
      "Responsible for enthusiasm, encouragement, dramatic reactions, and declaring victory.",
  },
  {
    label: "Special Ability",
    value: "Maximum Confidence",
    description:
      "Spongie has never encountered a household problem he did not immediately believe he could handle.",
  },
  {
    label: "Experience Level",
    value: "Under Review",
    description:
      "Enthusiasm continues to exceed documented qualifications.",
  },
  {
    label: "Standard Equipment",
    value: "One Duster",
    description:
      "Whether or not the current situation actually requires a duster.",
  },
  {
    label: "Known Weakness",
    value: "Threat Assessment",
    description:
      "One crumb and a full kitchen catastrophe may receive approximately the same response.",
  },
  {
    label: "Current Status",
    value: "CAPE DEPLOYED",
    description:
      "Standing by for the next tiny emergency, invited or otherwise.",
  },
];

const spongieCode = [
  {
    number: "01",
    title: "Every mess is a mission.",
    description:
      "One crumb? Mission. Tiny drip? Mission. Sock on the floor? Developing situation.",
  },
  {
    number: "02",
    title: "Confidence comes first.",
    description:
      "Qualifications can be discussed after the emergency has been dramatically announced.",
  },
  {
    number: "03",
    title: "No problem is too small.",
    description:
      "Especially when a very small problem can be made substantially more exciting.",
  },
  {
    number: "04",
    title: "Celebrate everything.",
    description:
      "Counter wiped? Victory. Sock found? Victory. Trash removed without leaking? Historic victory.",
  },
];

const threatLevels = [
  {
    threat: "One Crumb",
    level: "CODE YELLOW",
    response: "Immediate investigation.",
  },
  {
    threat: "Three Crumbs",
    level: "CODE ORANGE",
    response: "Spritzy should be notified.",
  },
  {
    threat: "Mystery Splatter",
    level: "CODE RED",
    response: "Cape deployed. Duster ready.",
  },
  {
    threat: "Sock Missing",
    level: "CODE SOCK",
    response: "There is no protocol. Panic confidently.",
  },
];

const incidents = [
  {
    title: "Tiny Mess, Big Drama",
    image: "/comics/tiny-mess-big-drama.png",
    alt: "Spongie and Spritzy dramatically respond to a tiny kitchen mess",
    eyebrow: "Historic Overreaction",
    description:
      "Spongie and Spritzy discover a microscopic kitchen mess and respond with the urgency normally reserved for natural disasters.",
    quote: "Small mess. Big teamwork.",
  },
  {
    title: "The Lid Drawer Uprising",
    image: "/comics/lid-drawer.png",
    alt: "Spongie assists Super Cleaning Lady during an avalanche of food-storage lids",
    eyebrow: "Containment Operation",
    description:
      "A cabinet opens. Lids escape. Spongie enters the situation with courage, determination, and absolutely no organizational authority.",
    quote: "No one will notice until they need a lid.",
  },
  {
    title: "The Wobbly Shelf Emergency",
    image: "/comics/wobbly-shelf.png",
    alt: "Spongie joins Super Cleaning Lady, Super Handy Man, and Spritzy during the wobbly shelf emergency",
    eyebrow: "Full Squad Response",
    description:
      "Super Handy Man handles the repair. Super Cleaning Lady restores order. Spritzy handles surfaces. Spongie contributes the duster and several important facial expressions.",
    quote:
      "Some problems need teamwork... and slightly too many tools.",
  },
  {
    title: "Sticky, Crumbly, Unknown",
    image: "/comics/sticky-crumbly.png",
    alt: "Spongie joins Super Cleaning Lady and Spritzy to investigate a mysterious sticky household mess",
    eyebrow: "Unidentified Substance",
    description:
      "Nobody knows what it is. Nobody knows how long it has been there. Spongie has already classified the area as hostile.",
    quote: "Some mysteries should stay unsolved.",
  },
];

const performanceStrengths = [
  "Arrives quickly.",
  "Brings his own duster.",
  "Excellent attitude.",
  "Unafraid of crumbs.",
  "Strong cape presence.",
  "Never asks whether assistance was requested.",
];

const opportunities = [
  "Determine whether help is actually needed.",
  "Distinguish debris from furniture.",
  "Reduce emergency siren noises.",
  "Allow Spritzy to finish speaking.",
  "Stop referring to one crumb as “the incident.”",
  "Accept that the duster is not required for plumbing repairs.",
];

const backupCrew = [
  {
    name: "Super Cleaning Lady",
    role: "Actual Adult Supervision",
    image: "/scl.png",
    href: "/super-cleaning-lady",
    description:
      "Determines whether the emergency is, in fact, an emergency.",
  },
  {
    name: "Super Handy Man",
    role: "Repair Division",
    image: "/shm.png",
    href: "/super-handy-man",
    description:
      "Provides tools, solutions, and occasionally several exciting new problems.",
  },
  {
    name: "Spritzy",
    role: "Surface Recovery",
    image: "/super-spray.png",
    href: "/spritzy",
    description:
      "Spongie’s frequent partner in unnecessarily dramatic cleanup operations.",
  },
];

export default function SpongiePage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#2f261f] text-white">
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
          <div className="relative flex min-h-[420px] items-center justify-center">
            <div
              className="absolute h-72 w-72 rounded-full bg-[#f4c96d]/20 blur-3xl"
              aria-hidden="true"
            />

            <img
              src="/spongie.png"
              alt="Spongie, the tiny sponge superhero wearing goggles and a cape"
              className="relative max-h-[500px] w-auto max-w-full object-contain drop-shadow-2xl"
            />
          </div>

          <div>
            <Link
              href="/"
              className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-white/20"
            >
              ← Back to Headquarters
            </Link>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-[#f4c96d]">
              Morale & Tiny Emergency Division
            </p>

            <h1 className="mt-4 text-5xl font-black leading-none sm:text-6xl md:text-7xl">
              Spongie
            </h1>

            <p className="mt-6 max-w-2xl text-2xl font-black leading-8 text-[#f4c96d]">
              Small sponge. Big confidence.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
              Official sidekick, emergency enthusiast, duster operator, and
              living proof that confidence does not always require supporting
              documentation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#incident-files"
                className="rounded-full bg-[#f4c96d] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
              >
                View Emergency Files
              </a>

              <Link
                href="/household-team-ups"
                className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                See the Team-Ups
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL FILE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Official Sidekick File
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Qualified by enthusiasm alone.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              Some heroes rely on years of training. Spongie relies on goggles,
              a cape, a duster, and complete certainty that this is his moment.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {personnelStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[2rem] border border-[#eadcc8] bg-white p-7 shadow-sm"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b48635]">
                  {stat.label}
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  {stat.value}
                </h3>

                <p className="mt-4 leading-7 text-[#6a5a4b]">
                  {stat.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE SPONGIE CODE */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              The Spongie Code
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Four rules. Zero hesitation.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {spongieCode.map((item) => (
              <article
                key={item.number}
                className="rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm"
              >
                <span className="text-6xl font-black text-[#f4c96d]/50">
                  {item.number}
                </span>

                <h3 className="mt-4 text-3xl font-black">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THREAT ASSESSMENT */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl sm:p-10 md:p-14">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
              Official Threat Assessment
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              According to Spongie.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
              These ratings have not been reviewed by Super Cleaning Lady,
              local authorities, or anyone with meaningful emergency-management
              experience.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {threatLevels.map((item) => (
              <div
                key={item.threat}
                className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 sm:grid-cols-[1fr_160px_1.4fr] sm:items-center"
              >
                <p className="text-lg font-black">
                  {item.threat}
                </p>

                <p className="text-sm font-black uppercase tracking-[0.15em] text-[#f4c96d]">
                  {item.level}
                </p>

                <p className="text-[#f7ead6]">
                  {item.response}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[#f4c96d]/30 bg-[#f4c96d]/10 p-6 text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f4c96d]">
              Important
            </p>

            <p className="mt-2 text-xl font-black">
              Spongie has never assigned anything CODE GREEN.
            </p>
          </div>
        </div>
      </section>

      {/* INCIDENT FILES */}
      <section
        id="incident-files"
        className="scroll-mt-32 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Tiny Emergency Archives
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              His courage has been documented.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              So has the dramatic overreaction.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {incidents.map((incident) => (
              <article
                key={incident.title}
                className="group overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="bg-white p-4">
                  <img
                    src={incident.image}
                    alt={incident.alt}
                    className="h-auto w-full rounded-[1.5rem]"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b48635]">
                    {incident.eyebrow}
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    {incident.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#6a5a4b]">
                    {incident.description}
                  </p>

                  <blockquote className="mt-6 border-l-4 border-[#b48635] pl-5 text-lg font-bold italic leading-7">
                    “{incident.quote}”
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE REVIEW */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Annual Performance Review
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Management has notes.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 shadow-sm sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
                Strengths
              </p>

              <h3 className="mt-4 text-4xl font-black">
                Things going extremely well.
              </h3>

              <div className="mt-7 space-y-4">
                {performanceStrengths.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#fffaf2] px-5 py-4 font-bold"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 shadow-sm sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
                Areas for Development
              </p>

              <h3 className="mt-4 text-4xl font-black">
                Opportunities.
              </h3>

              <div className="mt-7 space-y-4">
                {opportunities.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#fffaf2] px-5 py-4 font-bold"
                  >
                    → {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BACKUP CREW */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Actual Qualified Backup
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Fortunately, Spongie does not work alone.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              When enthusiasm reaches operational limits, other departments are
              available.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {backupCrew.map((member) => (
              <Link
                key={member.name}
                href={member.href}
                className="group overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-6">
                  <div
                    className="absolute h-40 w-40 rounded-full bg-[#f4c96d]/20 blur-3xl"
                    aria-hidden="true"
                  />

                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative h-full w-auto max-w-full object-contain drop-shadow-xl transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b48635]">
                    {member.role}
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    {member.name}
                  </h3>

                  <p className="mt-4 leading-7 text-[#6a5a4b]">
                    {member.description}
                  </p>

                  <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-[#b48635]">
                    Visit Their HQ →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl sm:p-10 md:p-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
            Tiny Emergency Status
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Something somewhere probably needs dusting.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            Spongie is standing by with goggles secured, cape deployed, and
            confidence levels significantly above recommended limits.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#missions"
              className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
            >
              Choose a Mission
            </Link>

            <Link
              href="/squad"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Return to Squad HQ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}