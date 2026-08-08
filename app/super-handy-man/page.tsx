import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Super Handy Man | The Five-Minute Fix Division",
  description:
    "Meet Super Handy Man, repair specialist, tool enthusiast, over-engineering expert, and firm believer that every problem has a solution. Especially this one.",
};

const personnelStats = [
  {
    label: "Department",
    value: "Repair Division",
    description: "Fixing things that were broken and occasionally things that were fine.",
  },
  {
    label: "Special Ability",
    value: "Owning the Exact Tool",
    description:
      "The correct tool is absolutely somewhere in the garage. Probably.",
  },
  {
    label: "Estimated Project Time",
    value: "Five Minutes",
    description:
      "This estimate has never been independently verified.",
  },
  {
    label: "Actual Project Time",
    value: "Classified",
    description:
      "Please direct all follow-up questions to the hardware store.",
  },
  {
    label: "Natural Habitat",
    value: "Garage",
    description:
      "Also frequently sighted beneath sinks and in hardware-store aisles.",
  },
  {
    label: "Known Weakness",
    value: "Tool Containment",
    description:
      "Once a project begins, tools may migrate into neighboring rooms.",
  },
];

const handyManCode = [
  {
    number: "01",
    title: "Every problem has a solution.",
    description:
      "There is always a way. It may require three toolboxes, two flashlights, and removing a panel nobody knew existed.",
  },
  {
    number: "02",
    title: "Especially this one.",
    description:
      "Confidence is established before the problem has been fully identified.",
  },
  {
    number: "03",
    title: "This should only take five minutes.",
    description:
      "No available historical evidence supports this statement.",
  },
];

const incidents = [
  {
    title: "The Solution Problem",
    eyebrow: "Philosophical Crisis",
    image: "/comics/solution-problem.png",
    alt: "Super Handy Man questions whether every solution might also have a problem",
    description:
      "After years of declaring that every problem has a solution, Super Handy Man encounters an uncomfortable possibility.",
    quote: "Or is it every solution has a problem?",
  },
  {
    title: "The Case of the Missing Drill",
    eyebrow: "Workshop Emergency",
    image: "/comics/missing-drill.png",
    alt: "Super Handy Man searches through an enormous collection of tools for his missing drill",
    description:
      "He owns approximately every tool ever manufactured. Unfortunately, this has made locating one specific tool substantially harder.",
    quote: "Sometimes the problem is too many solutions.",
  },
  {
    title: "The Vacuum Fix",
    eyebrow: "Successful Repair*",
    image: "/comics/vacuum-fix.png",
    alt: "A repaired vacuum blasts dust toward Super Cleaning Lady",
    description:
      "The vacuum was clogged. The vacuum is no longer clogged. Technically, the repair was completely successful.",
    quote: "I think we found the clog.",
  },
  {
    title: "The Wobbly Shelf Emergency",
    eyebrow: "Full Team Response",
    image: "/comics/wobbly-shelf.png",
    alt: "Super Cleaning Lady, Super Handy Man, Spritzy, and Spongie respond to a wobbly shelf",
    description:
      "One slightly unstable shelf triggers a response involving the entire squad and considerably more equipment than expected.",
    quote: "Some problems need teamwork... and slightly too many tools.",
  },
  {
    title: "The Sock Portal Investigation",
    eyebrow: "Unsolved Mystery",
    image: "/comics/sock-portal-fix.png",
    alt: "Super Handy Man investigates the mysterious disappearance of socks inside a dryer",
    description:
      "One sock disappears and an ordinary laundry question becomes a full mechanical investigation.",
    quote:
      "The Sock Portal remains a mystery. Super Handy Man remains extremely optimistic.",
  },
];

const timeline = [
  {
    time: "0 min",
    event: "“This should only take five minutes.”",
  },
  {
    time: "5 min",
    event: "Toolbox opened.",
  },
  {
    time: "12 min",
    event: "Second toolbox opened.",
  },
  {
    time: "20 min",
    event: "Different screwdriver required.",
  },
  {
    time: "35 min",
    event: "Flashlight requested.",
  },
  {
    time: "45 min",
    event: "Hardware store mentioned.",
  },
  {
    time: "1 hr",
    event: "Super Cleaning Lady begins relocating tools from the dining room.",
  },
  {
    time: "2 hr",
    event: "“It was actually a good thing we opened this up.”",
  },
  {
    time: "3 hr",
    event: "Repair complete.",
  },
  {
    time: "3 hr 10",
    event: "One mysterious screw discovered.",
  },
];

const fieldNotes = [
  {
    number: "001",
    text: "Never clean around an active repair. The repair will expand to occupy the available clean surface.",
  },
  {
    number: "002",
    text: "A tool placed on the dining room table becomes invisible to Super Handy Man within approximately six minutes.",
  },
  {
    number: "003",
    text: "Never ask, “Are you almost done?” unless you are emotionally prepared for an explanation.",
  },
];

const supportCrew = [
  {
    name: "Super Cleaning Lady",
    role: "Restores Civilization",
    image: "/scl.png",
    description:
      "Returns tools, removes packaging, wipes the dust, and identifies which rooms have accidentally become part of the project.",
  },
  {
    name: "Spritzy",
    role: "Surface Recovery",
    image: "/super-spray.png",
    description:
      "Standing by for fingerprints, dust, mystery residue, and whatever happened near the workbench.",
  },
  {
    name: "Spongie",
    role: "Morale Division",
    image: "/spongie.png",
    description:
      "Provides enthusiasm dramatically disproportionate to his qualifications.",
  },
];

export default function SuperHandyManPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#2f261f] text-white">
        <div
          className="absolute inset-0 opacity-[0.05]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-6 md:pb-20 md:pt-10">
          <div className="mb-7 flex justify-center">
            <Link
              href="/"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]"
            >
              ← Back to Headquarters
            </Link>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl sm:rounded-[2.5rem]">
            <img
              src="/super-handy-man-hero.png"
              alt="Super Handy Man standing triumphantly inside his hilariously chaotic workshop surrounded by tools and over-engineered inventions"
              className="h-auto w-full"
            />
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f4c96d]">
              The Five-Minute Fix Division
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Super Handy Man
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#f7ead6] md:text-xl">
              Repair specialist. Tool enthusiast. Occasional philosopher.
              Unwavering believer that every household problem can be solved
              with enough ingenuity, enough tools, and possibly another trip to
              the hardware store.
            </p>

            <blockquote className="mx-auto mt-7 max-w-3xl text-xl font-black italic leading-8 text-[#f4c96d] sm:text-2xl">
              “Every problem has a solution. Especially this one.”
            </blockquote>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#incident-files"
                className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl"
              >
                Open Incident Files
              </a>

              <Link
                href="/household-team-ups"
                className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Read the Team-Ups
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONNEL FILE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Official Personnel File
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Qualified for almost everything.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              According to Super Handy Man, anyway.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {personnelStats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-[2rem] border border-[#eadcc8] bg-white p-7 shadow-sm"
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b48635]">
                  {stat.label}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight">
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

      {/* THE SHM CODE */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              The Super Handy Man Code
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Three principles. Questionable time estimates.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {handyManCode.map((item) => (
              <article
                key={item.number}
                className="relative overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm"
              >
                <span className="text-6xl font-black text-[#f4c96d]/50">
                  {item.number}
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-[#6a5a4b]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PHILOSOPHICAL CRISIS */}
      <section className="px-5 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-white shadow-[0_24px_70px_rgba(47,38,31,0.14)]">
            <div className="grid items-center lg:grid-cols-[1.2fr_0.8fr]">
              <div className="bg-[#fffaf2] p-4 sm:p-6">
                <img
                  src="/comics/solution-problem.png"
                  alt="Super Handy Man discovers that solving one problem may have created several new ones"
                  className="h-auto w-full rounded-[1.75rem]"
                />
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
                  Philosophical Crisis
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                  The Solution Problem
                </h2>

                <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                  Super Handy Man has built his entire repair philosophy around
                  one fundamental truth: every problem has a solution.
                </p>

                <p className="mt-4 text-lg leading-8 text-[#6a5a4b]">
                  Then one perfectly reasonable solution produced several
                  containers, loose parts, displaced tools, and a completely new
                  category of problem.
                </p>

                <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-[#fffaf2] p-6 text-xl font-black italic leading-8">
                  “Or is it every solution has a problem?”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIVE MINUTE TIMELINE */}
      <section className="bg-[#2f261f] px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
              Official Project Timeline
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              What “five minutes” actually means.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
              Estimated times are provided by Super Handy Man and have not been
              reviewed by an independent authority.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            {timeline.map((item, index) => (
              <div
                key={`${item.time}-${item.event}`}
                className="grid grid-cols-[80px_1fr] gap-5 border-b border-white/10 py-5 sm:grid-cols-[110px_1fr]"
              >
                <div className="font-black text-[#f4c96d]">
                  {item.time}
                </div>

                <div
                  className={
                    index === timeline.length - 1
                      ? "font-black text-white"
                      : "text-[#f7ead6]"
                  }
                >
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCIDENT FILES */}
      <section id="incident-files" className="scroll-mt-32 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Five-Minute Fix Archives
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Previous repairs. Mixed results.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              A documented history of optimism, tools, unexpected complications,
              and eventual victory.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {incidents.map((incident) => (
              <article
                key={incident.title}
                className="group overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden bg-white p-3 sm:p-4">
                  <img
                    src={incident.image}
                    alt={incident.alt}
                    className="h-auto w-full rounded-[1.5rem] transition duration-300 group-hover:scale-[1.01]"
                  />
                </div>

                <div className="p-7 sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b48635]">
                    {incident.eyebrow}
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-tight">
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

      {/* SCL FIELD NOTES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 shadow-sm sm:p-10 md:p-12">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
                Super Cleaning Lady Field Notes
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Observations from the repair zone.
              </h2>
            </div>

            <div className="mt-10 space-y-5">
              {fieldNotes.map((note) => (
                <article
                  key={note.number}
                  className="grid gap-4 rounded-[1.75rem] bg-[#fffaf2] p-6 sm:grid-cols-[90px_1fr] sm:items-center"
                >
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-[#b48635]">
                    Note {note.number}
                  </span>

                  <p className="text-lg font-bold leading-8 text-[#4d4137]">
                    {note.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT CREW */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Repair Zone Support Crew
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Because eventually somebody has to clean this up.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {supportCrew.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] text-center shadow-sm"
              >
                <div className="flex h-64 items-center justify-center bg-white p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-auto max-w-full object-contain drop-shadow-xl"
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl sm:p-10 md:p-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
            Project Status
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Something else is probably broken.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            Follow Super Handy Man into the next supposedly five-minute repair,
            or return to headquarters before he asks you to hold the flashlight.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/household-team-ups"
              className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl"
            >
              Read Household Team-Ups
            </Link>

            <Link
              href="/#missions"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Escape to a Mission
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}