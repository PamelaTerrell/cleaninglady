import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { completeMission } from "@/app/actions";

export const metadata: Metadata = {
  title: "Bedroom Reset",
  description:
    "A funny, no-shame bedroom reset from Super Cleaning Lady featuring fresh sheets, fitted-sheet combat, ridiculous bedding layers, and household nonsense.",
  alternates: {
    canonical: "/missions/bedroom-reset",
  },
  openGraph: {
    title: "Bedroom Reset | Super Cleaning Lady",
    description:
      "Fresh sheets, fitted-sheet combat, absurd bedding layers, and a no-shame bedroom reset from the Super Cleaning Lady comic universe.",
    url: "/missions/bedroom-reset",
    type: "article",
    images: [
      {
        url: "/comics/bed-layer-olympics.png",
        alt: "The Bed Layer Olympics from Super Cleaning Lady",
      },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* PAGE STYLES                                                                */
/* -------------------------------------------------------------------------- */

const styles = {
  page:
    "min-h-screen bg-[#fffaf2] text-[#2f261f]",

  /* SHARED */
  sectionContainer:
    "mx-auto max-w-6xl",

  sectionLabel:
    "text-sm font-black uppercase tracking-[0.24em] text-[#b48635]",

  sectionTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl",

  sectionBody:
    "mt-5 text-lg leading-8 text-[#6a5a4b]",

  /* HERO */
  heroSection:
    "relative overflow-hidden px-6 pb-12 pt-10 text-center md:pb-16 md:pt-16",

  heroGlow:
    "pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f4c96d]/20 blur-3xl",

  heroContent:
    "relative mx-auto max-w-5xl",

  backToHeadquartersLink:
    "inline-flex rounded-full border border-[#eadcc8] bg-white px-5 py-2 text-sm font-black uppercase tracking-[0.17em] text-[#7a5520] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fffaf2]",

  missionFileLabel:
    "mt-8 text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  missionTitle:
    "mx-auto mt-4 max-w-4xl text-4xl font-black leading-[0.98] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",

  missionIntroduction:
    "mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl",

  heroBadgeRow:
    "mt-8 flex flex-wrap justify-center gap-3",

  heroBadge:
    "rounded-full border border-[#eadcc8] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.13em] text-[#7a5520] shadow-sm",

  /* CLEAN SHEETS */
  cleanSheetsSection:
    "bg-white px-5 py-16 sm:px-6 md:py-20",

  cleanSheetsCard:
    "mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)]",

  cleanSheetsLayout:
    "grid items-center lg:grid-cols-[1.18fr_0.82fr]",

  cleanSheetsImageArea:
    "bg-white p-3 sm:p-5 lg:p-6",

  cleanSheetsImage:
    "h-auto w-full rounded-[1.5rem] sm:rounded-[1.75rem]",

  cleanSheetsContent:
    "p-8 sm:p-10 lg:p-12",

  cleanSheetsSeries:
    "text-sm font-black uppercase tracking-[0.22em] text-[#b48635]",

  cleanSheetsTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl",

  cleanSheetsDescription:
    "mt-5 text-lg leading-8 text-[#6a5a4b]",

  cleanSheetsQuote:
    "mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-5 text-lg font-bold italic leading-8 shadow-sm sm:p-6 sm:text-xl",

  /* FITTED SHEET */
  fittedSheetSection:
    "px-5 py-16 sm:px-6 md:py-20",

  fittedSheetCard:
    "mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#4b3d31] bg-[#2f261f] text-white shadow-[0_24px_70px_rgba(47,38,31,0.18)]",

  fittedSheetLayout:
    "grid items-center lg:grid-cols-[0.82fr_1.18fr]",

  fittedSheetContent:
    "p-8 sm:p-10 lg:p-12",

  fittedSheetSeries:
    "text-sm font-black uppercase tracking-[0.22em] text-[#f4c96d]",

  fittedSheetTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl",

  fittedSheetDescription:
    "mt-5 text-lg leading-8 text-[#f7ead6]",

  fittedSheetQuote:
    "mt-7 rounded-2xl border-l-4 border-[#f4c96d] bg-white/10 p-5 text-lg font-bold italic leading-8 sm:p-6 sm:text-xl",

  fittedSheetAction:
    "mt-8 inline-flex rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white",

  fittedSheetImageArea:
    "bg-white p-3 sm:p-5 lg:p-6",

  fittedSheetImage:
    "h-auto w-full rounded-[1.5rem] sm:rounded-[1.75rem]",

  /* BED LAYER OLYMPICS */
  bedLayerSection:
    "bg-[#eef7ff] px-5 py-16 sm:px-6 md:py-20",

  bedLayerCard:
    "mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#cfe1f7] bg-white shadow-[0_24px_70px_rgba(23,87,166,0.12)]",

  bedLayerImageArea:
    "bg-white p-3 sm:p-5 lg:p-6",

  bedLayerImage:
    "h-auto w-full rounded-[1.5rem] sm:rounded-[1.75rem]",

  bedLayerContent:
    "p-8 text-center sm:p-10 lg:p-12",

  bedLayerSeries:
    "text-sm font-black uppercase tracking-[0.22em] text-[#1757a6]",

  bedLayerTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl",

  bedLayerDescription:
    "mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#5a6470]",

  bedLayerQuote:
    "mx-auto mt-7 max-w-3xl rounded-2xl border-l-4 border-[#1757a6] bg-[#f7fbff] p-5 text-lg font-bold italic leading-8 shadow-sm sm:p-6 sm:text-xl",

  bedLayerDisclaimer:
    "mx-auto mt-6 max-w-3xl text-sm font-bold leading-6 text-[#728090]",

  /* MISSION DETAILS */
  missionDetailsSection:
    "px-6 py-20",

  missionDetailsHeader:
    "mx-auto max-w-4xl text-center",

  missionDetailsGrid:
    "mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3",

  missionDetailCard:
    "rounded-[2rem] border border-[#eadcc8] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-8",

  missionDetailLabel:
    "text-sm font-black uppercase tracking-[0.22em] text-[#b48635]",

  missionDetailValue:
    "mt-3 text-3xl font-black leading-tight",

  missionDetailDescription:
    "mt-4 leading-7 text-[#6a5a4b]",

  /* SUPPLIES */
  suppliesSection:
    "px-6 pb-20",

  suppliesCard:
    "mx-auto max-w-6xl rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl md:p-10 lg:p-12",

  suppliesHeader:
    "max-w-3xl",

  suppliesLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]",

  suppliesTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl",

  suppliesDescription:
    "mt-4 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  suppliesGrid:
    "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",

  supplyItem:
    "rounded-2xl border border-white/10 bg-white/10 p-5 font-bold leading-7 text-[#fffaf2]",

  /* MISSION STEPS */
  missionStepsSection:
    "bg-white px-6 py-20",

  missionStepsHeader:
    "mx-auto max-w-4xl text-center",

  missionStepsGrid:
    "mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2",

  missionStepCard:
    "rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-7 shadow-sm sm:p-8 md:p-10",

  missionStepLabel:
    "text-sm font-black uppercase tracking-[0.23em] text-[#b48635]",

  missionStepTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl",

  missionStepList:
    "mt-8 space-y-4",

  missionStepItem:
    "flex gap-4 rounded-2xl bg-white p-5 shadow-sm",

  missionStepNumber:
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2f261f] text-sm font-black text-white",

  missionStepText:
    "leading-7 text-[#6a5a4b]",

  /* ENCOURAGEMENT */
  encouragementSection:
    "px-6 py-20",

  encouragementCard:
    "mx-auto max-w-5xl rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 text-center shadow-sm md:p-12",

  encouragementLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  encouragementTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl",

  encouragementDescription:
    "mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]",

  encouragementPunchline:
    "mx-auto mt-7 max-w-2xl rounded-2xl bg-[#fffaf2] p-5 text-lg font-black leading-8",

  /* VICTORY */
  victorySection:
    "px-6 pb-20",

  victoryCard:
    "mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl md:p-12",

  victoryLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]",

  victoryTitle:
    "mt-4 text-4xl font-black leading-tight",

  victoryDescription:
    "mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  victoryActions:
    "mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row",

  completeMissionButton:
    "rounded-full bg-[#f4c96d] px-8 py-4 text-sm font-black uppercase tracking-[0.17em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white",

  chooseAnotherMissionLink:
    "inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-[0.17em] text-white shadow-sm transition hover:-translate-y-1 hover:bg-white/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]",
};

/* -------------------------------------------------------------------------- */
/* PAGE CONTENT                                                               */
/* -------------------------------------------------------------------------- */

const heroBadges = [
  "Fresh Sheets",
  "No Shame",
  "Household Nonsense",
];

const missionDetails = [
  {
    label: "Difficulty",
    value: "Fitted Sheet Combat",
    description:
      "Mostly manageable until one corner escapes and the entire operation becomes personal.",
  },
  {
    label: "Time Needed",
    value: "10–30 Minutes",
    description:
      "Ten minutes gets clean sheets on the bed. Thirty minutes can make the room look suspiciously responsible.",
  },
  {
    label: "Victory Goal",
    value: "Change the Whole Vibe",
    description:
      "Clean, comfortable, and ready for actual rest. Seventeen decorative pillows are not required.",
  },
];

const quickSteps = [
  "Strip the bed before the sheets can negotiate another night.",
  "Put the old sheets directly into the laundry basket. Do not establish a temporary floor-based linen department.",
  "Put on a clean fitted sheet and locate the correct corner before the situation becomes personal.",
  "Add fresh pillowcases so your face has somewhere respectable to spend the night.",
  "Straighten the blanket, fluff the pillows, and admire the fastest bedroom transformation known to humanity.",
];

const deepSteps = [
  "Strip the sheets, pillowcases, blankets, and anything else that has quietly joined the bedding ecosystem.",
  "Start the laundry before the old sheets establish permanent residency in the basket.",
  "Check beneath the bed for socks, cups, wrappers, and evidence from previous civilizations.",
  "Dust the nightstands, headboard, lamps, and any surface currently wearing a small gray sweater.",
  "Vacuum or sweep the floor, including the mysterious territory beneath the bed.",
  "Make the bed with fresh sheets, fluffed pillows, and the confidence of someone whose life is briefly under control.",
];

const supplies = [
  "Fresh sheets",
  "Clean pillowcases",
  "Laundry basket",
  "Vacuum or broom",
  "Microfiber cloth",
  "The strength to fight a fitted sheet",
];

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function BedroomResetPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.heroSection}>
        <div
          className={styles.heroGlow}
          aria-hidden="true"
        />

        <div className={styles.heroContent}>
          <Link
            href="/"
            className={styles.backToHeadquartersLink}
          >
            ← Back to HQ
          </Link>

          <p className={styles.missionFileLabel}>
            Mission File 003
          </p>

          <h1 className={styles.missionTitle}>
            Bedroom Reset
          </h1>

          <p className={styles.missionIntroduction}>
            Because the old sheets have been holding onto crumbs, wrinkles, and
            several bad decisions. It is time for a bedroom reboot—without
            pretending your bed needs twelve engineered layers to count.
          </p>

          <div className={styles.heroBadgeRow}>
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className={styles.heroBadge}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CLEAN SHEETS COMIC */}
      <section className={styles.cleanSheetsSection}>
        <div className={styles.cleanSheetsCard}>
          <div className={styles.cleanSheetsLayout}>
            <div className={styles.cleanSheetsImageArea}>
              <img
                src="/comics/bed-sheets.png"
                alt="Super Cleaning Lady compares a difficult day with old sheets to a much better evening with fresh clean sheets"
                className={styles.cleanSheetsImage}
              />
            </div>

            <div className={styles.cleanSheetsContent}>
              <p className={styles.cleanSheetsSeries}>
                Bedroom Heroics
              </p>

              <h2 className={styles.cleanSheetsTitle}>
                Change the sheets. Change the whole vibe.
              </h2>

              <p className={styles.cleanSheetsDescription}>
                The day may have been chaotic, the laundry may remain
                unresolved, and tomorrow may already be making demands. But
                tonight, the bed is clean, comfortable, and temporarily on your
                side.
              </p>

              <blockquote className={styles.cleanSheetsQuote}>
                “Fresh sheets: the fastest legal way to feel like you have your
                life together.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FITTED SHEET INCIDENT */}
      <section className={styles.fittedSheetSection}>
        <div className={styles.fittedSheetCard}>
          <div className={styles.fittedSheetLayout}>
            <div className={styles.fittedSheetContent}>
              <p className={styles.fittedSheetSeries}>
                Five-Minute Fix Division
              </p>

              <h2 className={styles.fittedSheetTitle}>
                The Fitted Sheet Incident
              </h2>

              <p className={styles.fittedSheetDescription}>
                Super Cleaning Lady had one simple objective: fold a fitted
                sheet. Several failed corner negotiations later, Super Handy
                Man consulted{" "}
                <em>Advanced Over Engineering for Beginners</em> and deployed
                the Hydraulic Fitted Sheet Folding Apparatus 3000.
              </p>

              <blockquote className={styles.fittedSheetQuote}>
                “Every Problem has a solution. Especially this one!”
              </blockquote>

              <Link
                href="/super-handy-man"
                className={styles.fittedSheetAction}
              >
                Enter the Five-Minute Fix Division
              </Link>
            </div>

            <div className={styles.fittedSheetImageArea}>
              <img
                src="/comics/fitted-sheet.png"
                alt="The Fitted Sheet Incident featuring Super Cleaning Lady and Super Handy Man's elaborate fitted-sheet folding solution"
                className={styles.fittedSheetImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BED LAYER OLYMPICS */}
      <section className={styles.bedLayerSection}>
        <article className={styles.bedLayerCard}>
          <div className={styles.bedLayerImageArea}>
            <img
              src="/comics/bed-layer-olympics.png"
              alt="The Bed Layer Olympics featuring Super Cleaning Lady, Super Handy Man, Spritzy, and Spongie exploring the absurd number of mattress protectors, pads, toppers, sheets, blankets, comforters, and pillows available for one bed"
              className={styles.bedLayerImage}
            />
          </div>

          <div className={styles.bedLayerContent}>
            <p className={styles.bedLayerSeries}>
              Household Nonsense Division
            </p>

            <h2 className={styles.bedLayerTitle}>
              The Bed Layer Olympics
            </h2>

            <p className={styles.bedLayerDescription}>
              It begins innocently enough with a mattress. Then somebody
              mentions a mattress protector. And a mattress pad. And a mattress
              topper. Suddenly there are cooling pads, heated pads, waterproof
              barriers, memory foam, gel foam, weighted blankets, duvets,
              comforters, body pillows, decorative pillows, and one additional
              pillow whose primary qualification appears to be that there was
              still room.
            </p>

            <blockquote className={styles.bedLayerQuote}>
              “Same bed. A million options. Household nonsense at its finest.”
            </blockquote>

            <p className={styles.bedLayerDisclaimer}>
              Super Cleaning Lady is a comic universe, not a bedding
              certification authority. Please layer responsibly.
            </p>
          </div>
        </article>
      </section>

      {/* MISSION DETAILS */}
      <section className={styles.missionDetailsSection}>
        <div className={styles.missionDetailsHeader}>
          <p className={styles.sectionLabel}>
            Mission Briefing
          </p>

          <h2 className={styles.sectionTitle}>
            Back to the part that actually matters.
          </h2>

          <p className={styles.sectionBody}>
            You do not need a mattress laboratory, an architectural pillow
            plan, or a twelve-step bedding system. Clean sheets and a little
            reset are plenty.
          </p>
        </div>

        <div className={styles.missionDetailsGrid}>
          {missionDetails.map((detail) => (
            <article
              key={detail.label}
              className={styles.missionDetailCard}
            >
              <p className={styles.missionDetailLabel}>
                {detail.label}
              </p>

              <h3 className={styles.missionDetailValue}>
                {detail.value}
              </h3>

              <p className={styles.missionDetailDescription}>
                {detail.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SUPPLIES */}
      <section className={styles.suppliesSection}>
        <div className={styles.suppliesCard}>
          <div className={styles.suppliesHeader}>
            <p className={styles.suppliesLabel}>
              Mission Supplies
            </p>

            <h2 className={styles.suppliesTitle}>
              Gather your weapons against bedroom fatigue.
            </h2>

            <p className={styles.suppliesDescription}>
              Notice that “industrial mattress-layer optimization system” is
              not on this list.
            </p>
          </div>

          <div className={styles.suppliesGrid}>
            {supplies.map((item) => (
              <div
                key={item}
                className={styles.supplyItem}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION STEPS */}
      <section className={styles.missionStepsSection}>
        <div className={styles.missionStepsHeader}>
          <p className={styles.sectionLabel}>
            Choose Your Mission
          </p>

          <h2 className={styles.sectionTitle}>
            Ten minutes or thirty. Both count.
          </h2>

          <p className={styles.sectionBody}>
            Pick the version that matches the energy you actually have today.
            This is a rescue mission, not an audition for a hotel catalog.
          </p>
        </div>

        <div className={styles.missionStepsGrid}>
          <article className={styles.missionStepCard}>
            <p className={styles.missionStepLabel}>
              10-Minute Rescue
            </p>

            <h2 className={styles.missionStepTitle}>
              For when the sheets have entered their villain era.
            </h2>

            <ol className={styles.missionStepList}>
              {quickSteps.map((step, index) => (
                <li
                  key={step}
                  className={styles.missionStepItem}
                >
                  <span className={styles.missionStepNumber}>
                    {index + 1}
                  </span>

                  <span className={styles.missionStepText}>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </article>

          <article className={styles.missionStepCard}>
            <p className={styles.missionStepLabel}>
              30-Minute Reset
            </p>

            <h2 className={styles.missionStepTitle}>
              For when the whole bedroom needs a fresh start.
            </h2>

            <ol className={styles.missionStepList}>
              {deepSteps.map((step, index) => (
                <li
                  key={step}
                  className={styles.missionStepItem}
                >
                  <span className={styles.missionStepNumber}>
                    {index + 1}
                  </span>

                  <span className={styles.missionStepText}>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      {/* ENCOURAGEMENT */}
      <section className={styles.encouragementSection}>
        <div className={styles.encouragementCard}>
          <p className={styles.encouragementLabel}>
            Super Cleaning Lady Reminder
          </p>

          <h2 className={styles.encouragementTitle}>
            You do not need to reset the entire room to deserve clean sheets.
          </h2>

          <p className={styles.encouragementDescription}>
            Changing the bedding alone can make tonight feel better. Dusting,
            vacuuming, rescuing the area beneath the bed, and figuring out what
            happened to the missing pillowcase are all optional bonus missions.
          </p>

          <div className={styles.encouragementPunchline}>
            One clean bed is a victory. The Bed Layer Olympics are entirely
            optional.
          </div>
        </div>
      </section>

      {/* VICTORY */}
      <section className={styles.victorySection}>
        <div className={styles.victoryCard}>
          <p className={styles.victoryLabel}>
            Victory Condition
          </p>

          <h2 className={styles.victoryTitle}>
            Congratulations. The bed is no longer working against you.
          </h2>

          <p className={styles.victoryDescription}>
            It does not need to look like a luxury hotel. If the sheets are
            clean, the pillows are comfortable, and you are looking forward to
            climbing into bed tonight, the mission counts.
          </p>

          <div className={styles.victoryActions}>
            <form action={completeMission}>
              <input
                type="hidden"
                name="mission"
                value="bedroom-reset"
              />

              <button
                type="submit"
                className={styles.completeMissionButton}
              >
                I Changed the Whole Vibe
              </button>
            </form>

            <Link
              href="/#missions"
              className={styles.chooseAnotherMissionLink}
            >
              Choose Another Mission
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}