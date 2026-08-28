import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spongie | Morale & Tiny Emergency Division",
  description:
    "Meet Spongie, the tiny but wildly confident sidekick of Super Cleaning Lady. Small sponge. Big confidence. Every crumb is an incident.",
};

/* -------------------------------------------------------------------------- */
/* PAGE STYLES                                                                */
/* -------------------------------------------------------------------------- */

const styles = {
  page:
    "min-h-screen bg-[#fffaf2] text-[#2f261f]",

  /* HERO */
  heroSection:
    "relative overflow-hidden bg-[#2f261f] text-white",

  heroPattern:
    "absolute inset-0 opacity-[0.06]",

  heroContainer:
    "relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:py-20",

  heroCharacterArea:
    "relative flex min-h-[420px] items-center justify-center",

  heroCharacterGlow:
    "absolute h-72 w-72 rounded-full bg-[#f4c96d]/20 blur-3xl",

  heroCharacterImage:
    "relative max-h-[500px] w-auto max-w-full object-contain drop-shadow-2xl",

  backToHeadquartersLink:
    "inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-white/20",

  heroDivisionLabel:
    "mt-8 text-sm font-black uppercase tracking-[0.28em] text-[#f4c96d]",

  heroTitle:
    "mt-4 text-5xl font-black leading-none sm:text-6xl md:text-7xl",

  heroTagline:
    "mt-6 max-w-2xl text-2xl font-black leading-8 text-[#f4c96d]",

  heroDescription:
    "mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  heroActions:
    "mt-8 flex flex-col gap-4 sm:flex-row",

  emergencyFilesButton:
    "rounded-full bg-[#f4c96d] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]",

  teamUpsLink:
    "rounded-full border border-white/30 bg-white/5 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10",

  /* OFFICIAL SIDEKICK FILE */
  sidekickFileSection:
    "px-6 py-20",

  sidekickFileContainer:
    "mx-auto max-w-6xl",

  sidekickFileHeader:
    "mx-auto max-w-4xl text-center",

  sidekickFileLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  sidekickFileTitle:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  sidekickFileDescription:
    "mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]",

  personnelStatsGrid:
    "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",

  personnelStatCard:
    "rounded-[2rem] border border-[#eadcc8] bg-white p-7 shadow-sm",

  personnelStatLabel:
    "text-xs font-black uppercase tracking-[0.2em] text-[#b48635]",

  personnelStatValue:
    "mt-3 text-2xl font-black",

  personnelStatDescription:
    "mt-4 leading-7 text-[#6a5a4b]",

  /* SPONGIE CODE */
  spongieCodeSection:
    "bg-white px-6 py-20",

  spongieCodeContainer:
    "mx-auto max-w-6xl",

  spongieCodeHeader:
    "mx-auto max-w-4xl text-center",

  spongieCodeLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  spongieCodeTitle:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  spongieCodeGrid:
    "mt-12 grid gap-6 md:grid-cols-2",

  spongieCodeCard:
    "rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm",

  spongieCodeNumber:
    "text-6xl font-black text-[#f4c96d]/50",

  spongieCodeRule:
    "mt-4 text-3xl font-black",

  spongieCodeDescription:
    "mt-5 text-lg leading-8 text-[#6a5a4b]",

  /* THREAT ASSESSMENT */
  threatAssessmentSection:
    "px-6 py-20",

  threatAssessmentCard:
    "mx-auto max-w-5xl rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl sm:p-10 md:p-14",

  threatAssessmentHeader:
    "text-center",

  threatAssessmentLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]",

  threatAssessmentTitle:
    "mt-4 text-4xl font-black md:text-5xl",

  threatAssessmentDescription:
    "mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  threatLevelList:
    "mt-10 space-y-4",

  threatLevelRow:
    "grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 sm:grid-cols-[1fr_160px_1.4fr] sm:items-center",

  threatName:
    "text-lg font-black",

  threatCode:
    "text-sm font-black uppercase tracking-[0.15em] text-[#f4c96d]",

  threatResponse:
    "text-[#f7ead6]",

  threatAssessmentNotice:
    "mt-8 rounded-[1.5rem] border border-[#f4c96d]/30 bg-[#f4c96d]/10 p-6 text-center",

  threatAssessmentNoticeLabel:
    "text-xs font-black uppercase tracking-[0.2em] text-[#f4c96d]",

  threatAssessmentNoticeText:
    "mt-2 text-xl font-black",

  /* INCIDENT FILES */
  incidentFilesSection:
    "scroll-mt-32 bg-white px-6 py-20",

  incidentFilesContainer:
    "mx-auto max-w-6xl",

  incidentFilesHeader:
    "mx-auto max-w-4xl text-center",

  incidentFilesLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  incidentFilesTitle:
    "mt-4 text-4xl font-black md:text-5xl",

  incidentFilesDescription:
    "mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]",

  incidentFilesGrid:
    "mt-12 grid gap-8 md:grid-cols-2",

  incidentCard:
    "group overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] shadow-sm transition hover:-translate-y-1 hover:shadow-lg",

  incidentImageArea:
    "bg-white p-4",

  incidentImage:
    "h-auto w-full rounded-[1.5rem]",

  incidentContent:
    "p-7",

  incidentCategory:
    "text-xs font-black uppercase tracking-[0.2em] text-[#b48635]",

  incidentTitle:
    "mt-3 text-3xl font-black",

  incidentDescription:
    "mt-4 leading-7 text-[#6a5a4b]",

  incidentQuote:
    "mt-6 border-l-4 border-[#b48635] pl-5 text-lg font-bold italic leading-7",

  /* PERFORMANCE REVIEW */
  performanceReviewSection:
    "px-6 py-20",

  performanceReviewContainer:
    "mx-auto max-w-6xl",

  performanceReviewHeader:
    "mx-auto mb-12 max-w-4xl text-center",

  performanceReviewLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  performanceReviewTitle:
    "mt-4 text-4xl font-black md:text-5xl",

  performanceReviewGrid:
    "grid gap-8 lg:grid-cols-2",

  performanceReviewCard:
    "rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 shadow-sm sm:p-10",

  performanceReviewCategory:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  performanceReviewCardTitle:
    "mt-4 text-4xl font-black",

  performanceReviewItems:
    "mt-7 space-y-4",

  performanceStrength:
    "rounded-2xl bg-[#fffaf2] px-5 py-4 font-bold",

  performanceOpportunity:
    "rounded-2xl bg-[#fffaf2] px-5 py-4 font-bold",

  /* BACKUP CREW */
  backupCrewSection:
    "bg-white px-6 py-20",

  backupCrewContainer:
    "mx-auto max-w-6xl",

  backupCrewHeader:
    "mx-auto max-w-4xl text-center",

  backupCrewLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  backupCrewTitle:
    "mt-4 text-4xl font-black md:text-5xl",

  backupCrewDescription:
    "mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]",

  backupCrewGrid:
    "mt-12 grid gap-6 md:grid-cols-3",

  backupCrewCard:
    "group overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg",

  backupCrewImageArea:
    "relative flex h-64 items-center justify-center overflow-hidden bg-white p-6",

  backupCrewImageGlow:
    "absolute h-40 w-40 rounded-full bg-[#f4c96d]/20 blur-3xl",

  backupCrewImage:
    "relative h-full w-auto max-w-full object-contain drop-shadow-xl transition duration-300 group-hover:scale-[1.03]",

  backupCrewContent:
    "p-7",

  backupCrewRole:
    "text-xs font-black uppercase tracking-[0.2em] text-[#b48635]",

  backupCrewName:
    "mt-3 text-3xl font-black",

  backupCrewDescriptionText:
    "mt-4 leading-7 text-[#6a5a4b]",

  backupCrewLinkText:
    "mt-6 text-sm font-black uppercase tracking-[0.16em] text-[#b48635]",

  /* FINAL CALLOUT */
  finalCalloutSection:
    "px-6 py-20",

  finalCalloutCard:
    "mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl sm:p-10 md:p-14",

  finalCalloutLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]",

  finalCalloutTitle:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  finalCalloutDescription:
    "mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  finalCalloutActions:
    "mt-8 flex flex-col justify-center gap-4 sm:flex-row",

  chooseMissionButton:
    "rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]",

  returnToSquadLink:
    "rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10",
};

/* -------------------------------------------------------------------------- */
/* PERSONNEL FILE                                                             */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* THE SPONGIE CODE                                                           */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* THREAT LEVELS                                                              */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* INCIDENT FILES                                                             */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* PERFORMANCE REVIEW                                                         */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* BACKUP CREW                                                                */
/* -------------------------------------------------------------------------- */

const backupCrew = [
  {
    name: "Super Cleaning Lady",
    role: "Actual Adult Supervision",
    image: "/super-cleaning-lady-alone.png",
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

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function SpongiePage() {
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
            backgroundSize: "22px 22px",
          }}
        />

        <div className={styles.heroContainer}>
          <div className={styles.heroCharacterArea}>
            <div
              className={styles.heroCharacterGlow}
              aria-hidden="true"
            />

            <img
              src="/spongie.png"
              alt="Spongie, the tiny sponge superhero wearing goggles and a cape"
              className={styles.heroCharacterImage}
            />
          </div>

          <div>
            <Link
              href="/"
              className={styles.backToHeadquartersLink}
            >
              ← Back to Headquarters
            </Link>

            <p className={styles.heroDivisionLabel}>
              Morale & Tiny Emergency Division
            </p>

            <h1 className={styles.heroTitle}>
              Spongie
            </h1>

            <p className={styles.heroTagline}>
              Small sponge. Big confidence.
            </p>

            <p className={styles.heroDescription}>
              Official sidekick, emergency enthusiast, duster operator, and
              living proof that confidence does not always require supporting
              documentation.
            </p>

            <div className={styles.heroActions}>
              <a
                href="#incident-files"
                className={styles.emergencyFilesButton}
              >
                View Emergency Files
              </a>

              <Link
                href="/household-team-ups"
                className={styles.teamUpsLink}
              >
                See the Team-Ups
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL SIDEKICK FILE */}
      <section className={styles.sidekickFileSection}>
        <div className={styles.sidekickFileContainer}>
          <div className={styles.sidekickFileHeader}>
            <p className={styles.sidekickFileLabel}>
              Official Sidekick File
            </p>

            <h2 className={styles.sidekickFileTitle}>
              Qualified by enthusiasm alone.
            </h2>

            <p className={styles.sidekickFileDescription}>
              Some heroes rely on years of training. Spongie relies on goggles,
              a cape, a duster, and complete certainty that this is his moment.
            </p>
          </div>

          <div className={styles.personnelStatsGrid}>
            {personnelStats.map((stat) => (
              <article
                key={stat.label}
                className={styles.personnelStatCard}
              >
                <p className={styles.personnelStatLabel}>
                  {stat.label}
                </p>

                <h3 className={styles.personnelStatValue}>
                  {stat.value}
                </h3>

                <p className={styles.personnelStatDescription}>
                  {stat.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE SPONGIE CODE */}
      <section className={styles.spongieCodeSection}>
        <div className={styles.spongieCodeContainer}>
          <div className={styles.spongieCodeHeader}>
            <p className={styles.spongieCodeLabel}>
              The Spongie Code
            </p>

            <h2 className={styles.spongieCodeTitle}>
              Four rules. Zero hesitation.
            </h2>
          </div>

          <div className={styles.spongieCodeGrid}>
            {spongieCode.map((item) => (
              <article
                key={item.number}
                className={styles.spongieCodeCard}
              >
                <span className={styles.spongieCodeNumber}>
                  {item.number}
                </span>

                <h3 className={styles.spongieCodeRule}>
                  {item.title}
                </h3>

                <p className={styles.spongieCodeDescription}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THREAT ASSESSMENT */}
      <section className={styles.threatAssessmentSection}>
        <div className={styles.threatAssessmentCard}>
          <div className={styles.threatAssessmentHeader}>
            <p className={styles.threatAssessmentLabel}>
              Official Threat Assessment
            </p>

            <h2 className={styles.threatAssessmentTitle}>
              According to Spongie.
            </h2>

            <p className={styles.threatAssessmentDescription}>
              These ratings have not been reviewed by Super Cleaning Lady,
              local authorities, or anyone with meaningful emergency-management
              experience.
            </p>
          </div>

          <div className={styles.threatLevelList}>
            {threatLevels.map((item) => (
              <div
                key={item.threat}
                className={styles.threatLevelRow}
              >
                <p className={styles.threatName}>
                  {item.threat}
                </p>

                <p className={styles.threatCode}>
                  {item.level}
                </p>

                <p className={styles.threatResponse}>
                  {item.response}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.threatAssessmentNotice}>
            <p className={styles.threatAssessmentNoticeLabel}>
              Important
            </p>

            <p className={styles.threatAssessmentNoticeText}>
              Spongie has never assigned anything CODE GREEN.
            </p>
          </div>
        </div>
      </section>

      {/* INCIDENT FILES */}
      <section
        id="incident-files"
        className={styles.incidentFilesSection}
      >
        <div className={styles.incidentFilesContainer}>
          <div className={styles.incidentFilesHeader}>
            <p className={styles.incidentFilesLabel}>
              Tiny Emergency Archives
            </p>

            <h2 className={styles.incidentFilesTitle}>
              His courage has been documented.
            </h2>

            <p className={styles.incidentFilesDescription}>
              So has the dramatic overreaction.
            </p>
          </div>

          <div className={styles.incidentFilesGrid}>
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
                  <p className={styles.incidentCategory}>
                    {incident.eyebrow}
                  </p>

                  <h3 className={styles.incidentTitle}>
                    {incident.title}
                  </h3>

                  <p className={styles.incidentDescription}>
                    {incident.description}
                  </p>

                  <blockquote className={styles.incidentQuote}>
                    “{incident.quote}”
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE REVIEW */}
      <section className={styles.performanceReviewSection}>
        <div className={styles.performanceReviewContainer}>
          <div className={styles.performanceReviewHeader}>
            <p className={styles.performanceReviewLabel}>
              Annual Performance Review
            </p>

            <h2 className={styles.performanceReviewTitle}>
              Management has notes.
            </h2>
          </div>

          <div className={styles.performanceReviewGrid}>
            <article className={styles.performanceReviewCard}>
              <p className={styles.performanceReviewCategory}>
                Strengths
              </p>

              <h3 className={styles.performanceReviewCardTitle}>
                Things going extremely well.
              </h3>

              <div className={styles.performanceReviewItems}>
                {performanceStrengths.map((item) => (
                  <div
                    key={item}
                    className={styles.performanceStrength}
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.performanceReviewCard}>
              <p className={styles.performanceReviewCategory}>
                Areas for Development
              </p>

              <h3 className={styles.performanceReviewCardTitle}>
                Opportunities.
              </h3>

              <div className={styles.performanceReviewItems}>
                {opportunities.map((item) => (
                  <div
                    key={item}
                    className={styles.performanceOpportunity}
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
      <section className={styles.backupCrewSection}>
        <div className={styles.backupCrewContainer}>
          <div className={styles.backupCrewHeader}>
            <p className={styles.backupCrewLabel}>
              Actual Qualified Backup
            </p>

            <h2 className={styles.backupCrewTitle}>
              Fortunately, Spongie does not work alone.
            </h2>

            <p className={styles.backupCrewDescription}>
              When enthusiasm reaches operational limits, other departments are
              available.
            </p>
          </div>

          <div className={styles.backupCrewGrid}>
            {backupCrew.map((member) => (
              <Link
                key={member.name}
                href={member.href}
                className={styles.backupCrewCard}
              >
                <div className={styles.backupCrewImageArea}>
                  <div
                    className={styles.backupCrewImageGlow}
                    aria-hidden="true"
                  />

                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.backupCrewImage}
                  />
                </div>

                <div className={styles.backupCrewContent}>
                  <p className={styles.backupCrewRole}>
                    {member.role}
                  </p>

                  <h3 className={styles.backupCrewName}>
                    {member.name}
                  </h3>

                  <p className={styles.backupCrewDescriptionText}>
                    {member.description}
                  </p>

                  <p className={styles.backupCrewLinkText}>
                    Visit Their HQ →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALLOUT */}
      <section className={styles.finalCalloutSection}>
        <div className={styles.finalCalloutCard}>
          <p className={styles.finalCalloutLabel}>
            Tiny Emergency Status
          </p>

          <h2 className={styles.finalCalloutTitle}>
            Something somewhere probably needs dusting.
          </h2>

          <p className={styles.finalCalloutDescription}>
            Spongie is standing by with goggles secured, cape deployed, and
            confidence levels significantly above recommended limits.
          </p>

          <div className={styles.finalCalloutActions}>
            <Link
              href="/#missions"
              className={styles.chooseMissionButton}
            >
              Choose a Mission
            </Link>

            <Link
              href="/squad"
              className={styles.returnToSquadLink}
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