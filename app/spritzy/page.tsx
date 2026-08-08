import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spritzy | Surface Recovery Division",
  description:
    "Meet Spritzy, the cheerful superhero spray bottle of Super Cleaning Lady. Sticky spots, mystery splatter, fingerprints, and suspicious residue do not stand a chance.",
};

const stats = [
  {
    label: "Department",
    value: "Surface Recovery",
    description:
      "Responsible for counters, sinks, handles, fingerprints, smudges, and anything that feels weird when you touch it.",
  },
  {
    label: "Special Ability",
    value: "Sticky Spot Detection",
    description:
      "Can identify an emotionally offensive surface from several rooms away.",
  },
  {
    label: "Standard Equipment",
    value: "Spray + Cloth",
    description:
      "Simple, effective, and significantly less complicated than Super Handy Man’s approach to anything.",
  },
  {
    label: "Natural Habitat",
    value: "Freshly Wiped Surfaces",
    description:
      "Frequently spotted in kitchens, bathrooms, and anywhere fingerprints have formed a government.",
  },
  {
    label: "Known Weakness",
    value: "Mystery Residue",
    description:
      "Not because she fears it. Because she absolutely needs to know what happened.",
  },
  {
    label: "Current Status",
    value: "SPRITZ READY",
    description:
      "Cape secured. Cloth ready. Rollers immaculate.",
  },
];

const spritzyCode = [
  {
    number: "01",
    title: "We do not need the full backstory.",
    description:
      "Whatever happened to the counter happened. We can process our emotions after we wipe it.",
  },
  {
    number: "02",
    title: "Sticky is a temporary condition.",
    description:
      "Spritzy refuses to accept mystery residue as a permanent design choice.",
  },
  {
    number: "03",
    title: "Spray with purpose.",
    description:
      "The goal is surface recovery, not turning the entire room into a weather system.",
  },
  {
    number: "04",
    title: "Leave it better than you found it.",
    description:
      "Shiny is optional. Less alarming is already a major victory.",
  },
];

const approvedZones = [
  {
    place: "Kitchen Counter",
    status: "APPROVED",
    note: "High-priority sparkle territory.",
  },
  {
    place: "Bathroom Sink",
    status: "APPROVED",
    note: "Frequent toothpaste activity detected.",
  },
  {
    place: "Cabinet Handles",
    status: "APPROVED",
    note: "Fingerprint jurisdiction.",
  },
  {
    place: "Mystery Sticky Spot",
    status: "DEPLOY IMMEDIATELY",
    note: "Do not ask questions until gloves are available.",
  },
];

const prohibitedZones = [
  {
    place: "Television Screen",
    note: "Absolutely not without checking the proper cleaning method.",
  },
  {
    place: "Electronics",
    note: "Spritzy does not freelance around electricity.",
  },
  {
    place: "Unidentified Antique",
    note: "Surface recovery has legal limits.",
  },
  {
    place: "Super Handy Man’s Open Toolbox",
    note: "Technically cleanable. Strategically unwise.",
  },
];

const incidents = [
  {
    title: "Tiny Mess, Big Drama",
    image: "/comics/tiny-mess-big-drama.png",
    alt: "Spritzy and Spongie dramatically respond to a tiny kitchen mess",
    eyebrow: "Joint Response",
    description:
      "A microscopic mess appears in the kitchen. Spritzy brings the polish. Spongie brings the panic.",
    quote: "Small mess. Big teamwork.",
  },
  {
    title: "Sticky, Crumbly, Unknown",
    image: "/comics/sticky-crumbly.png",
    alt: "Spritzy, Spongie, and Super Cleaning Lady investigate a mysterious sticky household mess",
    eyebrow: "Unidentified Substance",
    description:
      "Sticky. Crumbly. Suspicious. Nobody knows what it is, and Spritzy is not leaving until the surface has been restored.",
    quote: "Some mysteries should stay unsolved.",
  },
  {
    title: "The Wobbly Shelf Emergency",
    image: "/comics/wobbly-shelf.png",
    alt: "Spritzy stands ready during a household shelf repair emergency",
    eyebrow: "Post-Repair Support",
    description:
      "Super Handy Man fixes the shelf. Super Cleaning Lady restores order. Spritzy waits patiently for the inevitable fingerprints.",
    quote:
      "Some problems need teamwork... and slightly too many tools.",
  },
  {
    title: "Spray the Air, Not the Chair",
    image: "/comics/spray-the-air-not-the-chair.png",
    alt: "A humorous bathroom comic about using spray appropriately",
    eyebrow: "Bathroom Advisory",
    description:
      "A fresh bathroom is good. A mysteriously wet toilet seat is not part of the mission.",
    quote: "Fresh bathroom. Dry toilet seat. Civilization restored.",
  },
];

const backupCrew = [
  {
    name: "Super Cleaning Lady",
    role: "Restoration & Rescue Command",
    image: "/scl.png",
    href: "/super-cleaning-lady",
    description:
      "Identifies what actually needs cleaning and when enough is enough.",
  },
  {
    name: "Super Handy Man",
    role: "Repair Division",
    image: "/shm.png",
    href: "/super-handy-man",
    description:
      "Creates an impressive number of surfaces that will eventually require recovery.",
  },
  {
    name: "Spongie",
    role: "Morale Division",
    image: "/spongie.png",
    href: "/spongie",
    description:
      "Spritzy’s enthusiastic partner in tiny emergencies and unnecessary escalation.",
  },
];

export default function SpritzyPage() {
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
              className="absolute h-72 w-72 rounded-full bg-[#dceeff] blur-3xl"
              aria-hidden="true"
            />

            <img
              src="/super-spray.png"
              alt="Spritzy, the superhero spray bottle with a red cape, pink rollers, apron, and cleaning cloth"
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
              Surface Recovery Division
            </p>

            <h1 className="mt-4 text-5xl font-black leading-none sm:text-6xl md:text-7xl">
              Spritzy
            </h1>

            <p className="mt-6 max-w-2xl text-2xl font-black leading-8 text-[#f4c96d]">
              Sticky, smudged, suspicious? She’s on it.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
              Sparkle support specialist, mystery-residue investigator, and
              cheerful defender of every surface that has started feeling a
              little too personal.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#incident-files"
                className="rounded-full bg-[#f4c96d] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
              >
                View Surface Reports
              </a>

              <Link
                href="/squad"
                className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Visit Squad HQ
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
              Official Sparkle File
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Cheerful demeanor. Serious cleaning intentions.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              Spritzy may arrive smiling, but she takes surface recovery very
              seriously. Especially when the surface in question makes that
              little sticky sound when you lift your hand.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
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

      {/* THE SPRITZY CODE */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              The Spritzy Code
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Four rules for suspicious surfaces.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {spritzyCode.map((item) => (
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

      {/* APPROVED / NOT APPROVED */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Official Deployment Guide
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Spritzy has boundaries.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              Enthusiastic spraying is not the same thing as indiscriminate
              spraying. Even superheroes read the surface instructions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 shadow-sm sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
                Approved Spritz Zones
              </p>

              <h3 className="mt-4 text-4xl font-black">
                Cleared for action.
              </h3>

              <div className="mt-7 space-y-4">
                {approvedZones.map((item) => (
                  <div
                    key={item.place}
                    className="rounded-[1.5rem] bg-[#fffaf2] p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-lg font-black">{item.place}</p>

                      <span className="rounded-full bg-[#f4c96d] px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.15em]">
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-3 leading-6 text-[#6a5a4b]">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-xl sm:p-10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
                Absolutely Not Spritz Zones
              </p>

              <h3 className="mt-4 text-4xl font-black">
                Step away from the trigger.
              </h3>

              <div className="mt-7 space-y-4">
                {prohibitedZones.map((item) => (
                  <div
                    key={item.place}
                    className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5"
                  >
                    <p className="text-lg font-black text-[#f4c96d]">
                      {item.place}
                    </p>

                    <p className="mt-3 leading-6 text-[#f7ead6]">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SPRITZY SAYS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] p-8 text-center shadow-sm sm:p-10 md:p-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
            Spritzy Says
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            “We do not need the full backstory. We just need a cloth.”
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
            There are questions worth asking in life. “How long has this been
            sticky?” is frequently not one of them.
          </p>
        </div>
      </section>

      {/* INCIDENT FILES */}
      <section
        id="incident-files"
        className="scroll-mt-32 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Surface Recovery Archives
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Previous sparkle emergencies.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              A documented history of sticky spots, mystery substances, tiny
              messes, and surfaces that eventually recovered.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {incidents.map((incident) => (
              <article
                key={incident.title}
                className="group overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="bg-[#fffaf2] p-4">
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
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl sm:p-10 md:p-14">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
                Surface Recovery Report
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Current operational metrics.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-center">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f4c96d]">
                  Smudges
                </p>
                <p className="mt-2 text-2xl font-black">Unwelcome</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-center">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f4c96d]">
                  Sticky Spots
                </p>
                <p className="mt-2 text-2xl font-black">Temporary</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-center">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f4c96d]">
                  Fingerprints
                </p>
                <p className="mt-2 text-2xl font-black">Under Review</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 text-center">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f4c96d]">
                  Sparkle Morale
                </p>
                <p className="mt-2 text-2xl font-black">Excellent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACKUP CREW */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Backup Has Arrived
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Surface recovery is a team sport.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {backupCrew.map((member) => (
              <Link
                key={member.name}
                href={member.href}
                className="group overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-white text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#fffaf2] p-6">
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
            Surface Status
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Something somewhere is probably sticky.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            Spritzy is standing by with cape flowing, rollers secured, cloth
            ready, and absolutely no interest in allowing mystery residue to
            become permanent.
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