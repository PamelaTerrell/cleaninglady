import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Super Handy Man | The Five-Minute Fix Division",
  description:
    "Meet Super Handy Man, repair specialist, tool enthusiast, over-engineering expert, and firm believer that every problem has a solution. Especially this one.",
};

/* -------------------------------------------------------------------------- */
/* PAGE STYLES                                                                */
/* -------------------------------------------------------------------------- */

const styles = {
  page:
    "min-h-screen bg-[#fffaf2] text-[#2f261f]",

  heroSection:
    "relative overflow-hidden bg-[#2f261f] text-white",

  heroPattern:
    "absolute inset-0 opacity-[0.05]",

  heroContainer:
    "relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-6 md:pb-20 md:pt-10",

  backToSquadButton:
    "rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]",

  heroImageFrame:
    "overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl sm:rounded-[2.5rem]",

  heroContent:
    "mx-auto mt-10 max-w-4xl text-center",

  heroEyebrow:
    "text-sm font-black uppercase tracking-[0.28em] text-[#f4c96d]",

  heroTitle:
    "mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-7xl",

  heroDescription:
    "mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#f7ead6] md:text-xl",

  heroQuote:
    "mx-auto mt-7 max-w-3xl text-xl font-black italic leading-8 text-[#f4c96d] sm:text-2xl",

  heroPrimaryButton:
    "rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl",

  heroSecondaryButton:
    "rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10",

  pageSection:
    "px-6 py-20",

  whiteSection:
    "bg-white px-6 py-20",

  sectionContainer:
    "mx-auto max-w-6xl",

  narrowSectionContainer:
    "mx-auto max-w-5xl",

  sectionHeader:
    "mx-auto max-w-4xl text-center",

  sectionEyebrow:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  sectionHeading:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  sectionDescription:
    "mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]",

  personnelGrid:
    "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",

  personnelCard:
    "rounded-[2rem] border border-[#eadcc8] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md",

  cardEyebrow:
    "text-xs font-black uppercase tracking-[0.22em] text-[#b48635]",

  cardTitle:
    "mt-3 text-2xl font-black leading-tight",

  cardBody:
    "mt-4 leading-7 text-[#6a5a4b]",

  codeGrid:
    "mt-12 grid gap-6 md:grid-cols-3",

  codeCard:
    "relative overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm",

  codeNumber:
    "text-6xl font-black text-[#f4c96d]/50",

  codeTitle:
    "mt-4 text-3xl font-black leading-tight",

  featuredIncidentShell:
    "overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-white shadow-[0_24px_70px_rgba(47,38,31,0.14)]",

  featuredIncidentGrid:
    "grid items-center lg:grid-cols-[1.2fr_0.8fr]",

  featuredIncidentImageArea:
    "bg-[#fffaf2] p-4 sm:p-6",

  featuredIncidentImage:
    "h-auto w-full rounded-[1.75rem]",

  featuredIncidentTextArea:
    "p-8 sm:p-10 lg:p-12",

  featuredQuote:
    "mt-7 rounded-2xl border-l-4 border-[#b48635] bg-[#fffaf2] p-6 text-xl font-black italic leading-8",

  timelineSection:
    "bg-[#2f261f] px-6 py-20 text-white",

  timelineEyebrow:
    "text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]",

  timelineDescription:
    "mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  timelineList:
    "mx-auto mt-12 max-w-3xl",

  timelineRow:
    "grid grid-cols-[80px_1fr] gap-5 border-b border-white/10 py-5 sm:grid-cols-[110px_1fr]",

  timelineTime:
    "font-black text-[#f4c96d]",

  timelineEvent:
    "text-[#f7ead6]",

  timelineFinalEvent:
    "font-black text-white",

  finalEstimateCard:
    "mx-auto mt-8 max-w-3xl rounded-[1.5rem] border border-[#f4c96d]/20 bg-white/5 p-6 text-center",

  incidentArchiveSection:
    "scroll-mt-32 bg-white px-6 py-20",

  incidentGrid:
    "mt-12 grid gap-8 md:grid-cols-2",

  incidentCard:
    "group overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] shadow-sm transition hover:-translate-y-1 hover:shadow-lg",

  incidentImageArea:
    "overflow-hidden bg-white p-3 sm:p-4",

  incidentImage:
    "h-auto w-full rounded-[1.5rem] transition duration-300 group-hover:scale-[1.01]",

  incidentContent:
    "p-7 sm:p-8",

  incidentEyebrow:
    "text-xs font-black uppercase tracking-[0.2em] text-[#b48635]",

  incidentTitle:
    "mt-3 text-3xl font-black leading-tight",

  incidentQuote:
    "mt-6 border-l-4 border-[#b48635] pl-5 text-lg font-bold italic leading-7",

  responseStatusBox:
    "mt-6 rounded-2xl border border-[#eadcc8] bg-white p-5",

  responseStatusEyebrow:
    "text-xs font-black uppercase tracking-[0.18em] text-[#b48635]",

  responseStatusText:
    "mt-2 text-sm font-bold leading-6 text-[#4d4137]",

  fieldNotesCard:
    "rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 shadow-sm sm:p-10 md:p-12",

  fieldNotesList:
    "mt-10 space-y-5",

  fieldNote:
    "grid gap-4 rounded-[1.75rem] bg-[#fffaf2] p-6 sm:grid-cols-[90px_1fr] sm:items-center",

  fieldNoteNumber:
    "text-sm font-black uppercase tracking-[0.16em] text-[#b48635]",

  fieldNoteText:
    "text-lg font-bold leading-8 text-[#4d4137]",

  responseTeamGrid:
    "mt-12 grid gap-6 md:grid-cols-3",

  responseTeamCard:
    "group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]",

  responseTeamImageArea:
    "relative flex h-64 items-center justify-center overflow-hidden bg-white p-6",

  responseTeamGlow:
    "absolute h-40 w-40 rounded-full blur-3xl",

  responseTeamImage:
    "relative h-full w-auto max-w-full object-contain drop-shadow-xl transition duration-300 group-hover:scale-[1.03]",

  responseTeamContent:
    "flex flex-1 flex-col p-7",

  responseTeamRole:
    "text-xs font-black uppercase tracking-[0.2em] text-[#b48635]",

  responseTeamName:
    "mt-3 text-3xl font-black",

  responseTeamDescription:
    "mt-4 flex-1 leading-7 text-[#6a5a4b]",

  responseTeamLinkText:
    "mt-6 text-sm font-black uppercase tracking-[0.16em] text-[#b48635]",

  sceneStatusCard:
    "mx-auto mt-8 max-w-3xl rounded-[1.75rem] border border-[#eadcc8] bg-[#fffaf2] px-6 py-6 text-center shadow-sm",

  sceneStatusEyebrow:
    "text-xs font-black uppercase tracking-[0.2em] text-[#b48635]",

  sceneStatusTitle:
    "mt-2 text-lg font-black leading-7 text-[#2f261f]",

  sceneStatusNote:
    "mt-2 text-sm font-bold italic text-[#8a7766]",

  projectReportGrid:
    "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",

  projectReportCard:
    "rounded-[1.75rem] border border-[#eadcc8] bg-white p-6 text-center shadow-sm",

  projectReportLabel:
    "text-xs font-black uppercase tracking-[0.16em] text-[#b48635]",

  projectReportValue:
    "mt-2 text-2xl font-black",

  finalCalloutSection:
    "px-6 pb-20",

  finalCalloutCard:
    "mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl sm:p-10 md:p-14",

  finalCalloutEyebrow:
    "text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]",

  finalCalloutHeading:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  finalCalloutText:
    "mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  finalPrimaryButton:
    "rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl",

  finalSecondaryButton:
    "rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10",
};

/* -------------------------------------------------------------------------- */
/* PAGE CONTENT                                                               */
/* -------------------------------------------------------------------------- */

const personnelStats = [
  {
    label: "Department",
    value: "Repair Division",
    description:
      "Fixing things that were broken and occasionally things that were fine.",
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
    
    title: "The Shredder Dome",
    eyebrow: "Over-Engineering Achievement",
    image: "/comics/shredder-dome.png",
    alt: "Super Cleaning Lady enters the Shredder Dome while Super Handy Man operates an excessively complicated suction control panel",
    description:
      "Super Cleaning Lady had one simple complaint: emptying an overstuffed shredder sent paper clippings everywhere. Super Handy Man responded with a person-sized suction dome, multiple pressure gauges, several unnecessary levers, and an entirely new entry procedure.",
    quote: "Every problem has a solution. Especially this one!",
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
    quote:
      "Some problems need teamwork... and slightly too many tools.",
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
    event:
      "Super Cleaning Lady begins relocating tools from the dining room.",
  },
  {
    time: "2 hr",
    event:
      "“It was actually a good thing we opened this up.”",
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
    text:
      "Never clean around an active repair. The repair will expand to occupy the available clean surface.",
  },
  {
    number: "002",
    text:
      "A tool placed on the dining room table becomes invisible to Super Handy Man within approximately six minutes.",
  },
  {
    number: "003",
    text:
      "Never ask, “Are you almost done?” unless you are emotionally prepared for an explanation.",
  },
];

const responseTeam = [
  {
    name: "Super Cleaning Lady",
    role: "Restores Civilization",
    image: "/scl.png",
    href: "/super-cleaning-lady",
    description:
      "Returns tools, clears packaging, wipes the dust, and determines which rooms unexpectedly became part of the repair.",
    cta: "Visit Restoration & Rescue Command",
    glow: "bg-[#f4c96d]/20",
  },
  {
    name: "Spritzy",
    role: "Surface Recovery",
    image: "/super-spray.png",
    href: "/spritzy",
    description:
      "Handles fingerprints, dust, mystery residue, smudges, and whatever happened near the workbench.",
    cta: "Visit Surface Recovery",
    glow: "bg-[#dceeff]",
  },
  {
    name: "Spongie",
    role: "Morale Division",
    image: "/spongie.png",
    href: "/spongie",
    description:
      "Provides encouragement, dramatic reactions, and enthusiasm wildly disproportionate to his qualifications.",
    cta: "Visit Tiny Emergency Division",
    glow: "bg-[#f4c96d]/25",
  },
];

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function SuperHandyManPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.heroSection}>
        <div
          className={styles.heroPattern}
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className={styles.heroContainer}>
          <div className="mb-7 flex justify-center">
            <Link href="/squad" className={styles.backToSquadButton}>
              ← Back to Squad Headquarters
            </Link>
          </div>

          <div className={styles.heroImageFrame}>
            <img
              src="/super-handy-man-hero.png"
              alt="Super Handy Man standing triumphantly inside his hilariously chaotic workshop surrounded by tools and over-engineered inventions"
              className="h-auto w-full"
            />
          </div>

          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>
              The Five-Minute Fix Division
            </p>

            <h1 className={styles.heroTitle}>
              Super Handy Man
            </h1>

            <p className={styles.heroDescription}>
              Repair specialist. Tool enthusiast. Occasional philosopher.
              Unwavering believer that every household problem can be solved
              with enough ingenuity, enough tools, and possibly another trip to
              the hardware store.
            </p>

            <blockquote className={styles.heroQuote}>
              “Every problem has a solution. Especially this one.”
            </blockquote>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#incident-files"
                className={styles.heroPrimaryButton}
              >
                Open Incident Files
              </a>

              <Link
                href="/household-team-ups"
                className={styles.heroSecondaryButton}
              >
                Read the Team-Ups
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONNEL FILE */}
      <section className={styles.pageSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>
              Official Personnel File
            </p>

            <h2 className={styles.sectionHeading}>
              Qualified for almost everything.
            </h2>

            <p className={styles.sectionDescription}>
              According to Super Handy Man, anyway.
            </p>
          </div>

          <div className={styles.personnelGrid}>
            {personnelStats.map((stat) => (
              <article
                key={stat.label}
                className={styles.personnelCard}
              >
                <p className={styles.cardEyebrow}>
                  {stat.label}
                </p>

                <h3 className={styles.cardTitle}>
                  {stat.value}
                </h3>

                <p className={styles.cardBody}>
                  {stat.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUPER HANDY MAN CODE */}
      <section className={styles.whiteSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>
              The Super Handy Man Code
            </p>

            <h2 className={styles.sectionHeading}>
              Three principles. Questionable time estimates.
            </h2>
          </div>

          <div className={styles.codeGrid}>
            {handyManCode.map((item) => (
              <article
                key={item.number}
                className={styles.codeCard}
              >
                <span className={styles.codeNumber}>
                  {item.number}
                </span>

                <h3 className={styles.codeTitle}>
                  {item.title}
                </h3>

                <p className={styles.cardBody}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHICAL CRISIS */}
      <section className="px-5 py-20 sm:px-6">
        <div className={styles.sectionContainer}>
          <div className={styles.featuredIncidentShell}>
            <div className={styles.featuredIncidentGrid}>
              <div className={styles.featuredIncidentImageArea}>
                <img
                  src="/comics/solution-problem.png"
                  alt="Super Handy Man discovers that solving one problem may have created several new ones"
                  className={styles.featuredIncidentImage}
                />
              </div>

              <div className={styles.featuredIncidentTextArea}>
                <p className={styles.sectionEyebrow}>
                  Philosophical Crisis
                </p>

                <h2 className={styles.sectionHeading}>
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

                <blockquote className={styles.featuredQuote}>
                  “Or is it every solution has a problem?”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIVE-MINUTE TIMELINE */}
      <section className={styles.timelineSection}>
        <div className={styles.narrowSectionContainer}>
          <div className="text-center">
            <p className={styles.timelineEyebrow}>
              Official Project Timeline
            </p>

            <h2 className={styles.sectionHeading}>
              What “five minutes” actually means.
            </h2>

            <p className={styles.timelineDescription}>
              Estimated times are provided by Super Handy Man and have not been
              reviewed by an independent authority.
            </p>
          </div>

          <div className={styles.timelineList}>
            {timeline.map((item, index) => (
              <div
                key={`${item.time}-${item.event}`}
                className={styles.timelineRow}
              >
                <div className={styles.timelineTime}>
                  {item.time}
                </div>

                <div
                  className={
                    index === timeline.length - 1
                      ? styles.timelineFinalEvent
                      : styles.timelineEvent
                  }
                >
                  {item.event}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.finalEstimateCard}>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4c96d]">
              Final Time Estimate
            </p>

            <p className="mt-2 text-xl font-black">
              Still five minutes, technically.
            </p>
          </div>
        </div>
      </section>

      {/* INCIDENT FILES */}
      <section
        id="incident-files"
        className={styles.incidentArchiveSection}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>
              Five-Minute Fix Archives
            </p>

            <h2 className={styles.sectionHeading}>
              Previous repairs. Mixed results.
            </h2>

            <p className={styles.sectionDescription}>
              A documented history of optimism, tools, unexpected
              complications, and eventual victory.
            </p>
          </div>

          <div className={styles.incidentGrid}>
            {incidents.map((incident) => (
              <article
                key={incident.title}
                className={styles.incidentCard}
              >
                <div className={styles.incidentImageArea}>
                  <img
                    src={incident.image}
                    alt={incident.alt}
                    className={styles.incidentImage}
                  />
                </div>

                <div className={styles.incidentContent}>
                  <p className={styles.incidentEyebrow}>
                    {incident.eyebrow}
                  </p>

                  <h3 className={styles.incidentTitle}>
                    {incident.title}
                  </h3>

                  <p className={styles.cardBody}>
                    {incident.description}
                  </p>

                  <blockquote className={styles.incidentQuote}>
                    “{incident.quote}”
                  </blockquote>

                  <div className={styles.responseStatusBox}>
                    <p className={styles.responseStatusEyebrow}>
                      Post-Repair Response Team Deployed
                    </p>

                    <p className={styles.responseStatusText}>
                      Super Cleaning Lady: restoring order · Spritzy: surface
                      recovery · Spongie: morale support
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FIELD NOTES */}
      <section className={styles.pageSection}>
        <div className={styles.narrowSectionContainer}>
          <div className={styles.fieldNotesCard}>
            <div className="text-center">
              <p className={styles.sectionEyebrow}>
                Super Cleaning Lady Field Notes
              </p>

              <h2 className={styles.sectionHeading}>
                Observations from the repair zone.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
                Years of field experience have produced several important
                operational findings.
              </p>
            </div>

            <div className={styles.fieldNotesList}>
              {fieldNotes.map((note) => (
                <article
                  key={note.number}
                  className={styles.fieldNote}
                >
                  <span className={styles.fieldNoteNumber}>
                    Note {note.number}
                  </span>

                  <p className={styles.fieldNoteText}>
                    {note.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POST-REPAIR RESPONSE TEAM */}
      <section className={styles.whiteSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>
              Post-Repair Response Team Deployed
            </p>

            <h2 className={styles.sectionHeading}>
              Because eventually somebody has to clean this up.
            </h2>

            <p className={styles.sectionDescription}>
              Once the repair is complete, the Five-Minute Fix Division quietly
              hands the scene over to the people who have to live here.
            </p>
          </div>

          <div className={styles.responseTeamGrid}>
            {responseTeam.map((member) => (
              <Link
                key={member.name}
                href={member.href}
                className={styles.responseTeamCard}
              >
                <div className={styles.responseTeamImageArea}>
                  <div
                    className={`${styles.responseTeamGlow} ${member.glow}`}
                    aria-hidden="true"
                  />

                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.responseTeamImage}
                  />
                </div>

                <div className={styles.responseTeamContent}>
                  <p className={styles.responseTeamRole}>
                    {member.role}
                  </p>

                  <h3 className={styles.responseTeamName}>
                    {member.name}
                  </h3>

                  <p className={styles.responseTeamDescription}>
                    {member.description}
                  </p>

                  <p className={styles.responseTeamLinkText}>
                    {member.cta} →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.sceneStatusCard}>
            <p className={styles.sceneStatusEyebrow}>
              Official Scene Status
            </p>

            <p className={styles.sceneStatusTitle}>
              Repair complete. Cleanup operations now underway.
            </p>

            <p className={styles.sceneStatusNote}>
              Super Handy Man has already left to find another tool.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT REPORT */}
      <section className={styles.pageSection}>
        <div className={styles.narrowSectionContainer}>
          <div className={styles.projectReportGrid}>
            <div className={styles.projectReportCard}>
              <p className={styles.projectReportLabel}>
                Original Estimate
              </p>

              <p className={styles.projectReportValue}>
                5 Minutes
              </p>
            </div>

            <div className={styles.projectReportCard}>
              <p className={styles.projectReportLabel}>
                Tools Used
              </p>

              <p className={styles.projectReportValue}>
                Most of Them
              </p>
            </div>

            <div className={styles.projectReportCard}>
              <p className={styles.projectReportLabel}>
                Hardware Runs
              </p>

              <p className={styles.projectReportValue}>
                Classified
              </p>
            </div>

            <div className={styles.projectReportCard}>
              <p className={styles.projectReportLabel}>
                Extra Screws
              </p>

              <p className={styles.projectReportValue}>
                Probably Normal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCalloutSection}>
        <div className={styles.finalCalloutCard}>
          <p className={styles.finalCalloutEyebrow}>
            Project Status
          </p>

          <h2 className={styles.finalCalloutHeading}>
            Something else is probably broken.
          </h2>

          <p className={styles.finalCalloutText}>
            Follow Super Handy Man into the next supposedly five-minute repair,
            or return to Squad Headquarters before he asks you to hold the
            flashlight.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/household-team-ups"
              className={styles.finalPrimaryButton}
            >
              Read Household Team-Ups
            </Link>

            <Link
              href="/squad"
              className={styles.finalSecondaryButton}
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