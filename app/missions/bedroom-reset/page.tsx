import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { completeMission } from "@/app/actions";

export const metadata: Metadata = {
  title: "Bedroom Reset | Super Cleaning Lady",
  description:
    "A funny bedroom cleaning mission for changing overdue sheets, restoring the bed, and improving the entire mood of tomorrow.",
};

/* -------------------------------------------------------------------------- */
/* PAGE STYLES                                                                */
/* -------------------------------------------------------------------------- */

const styles = {
  page:
    "min-h-screen bg-[#fffaf2] text-[#2f261f]",

  /* HERO */
  heroSection:
    "mx-auto max-w-5xl px-6 pb-8 pt-10 text-center md:pb-10 md:pt-14",

  backToHeadquartersLink:
    "inline-flex rounded-full border border-[#eadcc8] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#7a5520] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fffaf2]",

  missionFileLabel:
    "mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]",

  missionTitle:
    "mx-auto mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl",

  missionIntroduction:
    "mx-auto mt-4 max-w-3xl text-base leading-7 text-[#6a5a4b] sm:text-lg md:leading-8",

  /* CLEAN SHEETS COMIC */
  cleanSheetsComicSection:
    "bg-white px-5 py-14 sm:px-6 md:py-16",

  cleanSheetsComicCard:
    "mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)]",

  cleanSheetsComicLayout:
    "grid items-center lg:grid-cols-[1.2fr_0.8fr]",

  cleanSheetsComicImageArea:
    "bg-white p-3 sm:p-5 lg:p-6",

  cleanSheetsComicImage:
    "h-auto w-full rounded-[1.5rem] sm:rounded-[1.75rem]",

  cleanSheetsComicContent:
    "p-7 sm:p-10 lg:p-12",

  cleanSheetsComicSeries:
    "text-sm font-black uppercase tracking-[0.22em] text-[#b48635]",

  cleanSheetsComicTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl",

  cleanSheetsComicDescription:
    "mt-5 text-lg leading-8 text-[#6a5a4b]",

  cleanSheetsComicQuote:
    "mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-5 text-lg font-bold italic leading-8 shadow-sm sm:p-6 sm:text-xl",

  /* FITTED SHEET COMIC */
  fittedSheetComicSection:
    "px-5 pb-14 sm:px-6 md:pb-16",

  fittedSheetComicCard:
    "mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#2f261f] text-white shadow-[0_24px_70px_rgba(47,38,31,0.16)]",

  fittedSheetComicLayout:
    "grid items-center lg:grid-cols-[0.78fr_1.22fr]",

  fittedSheetComicContent:
    "p-7 sm:p-10 lg:p-12",

  fittedSheetComicSeries:
    "text-sm font-black uppercase tracking-[0.22em] text-[#f4c96d]",

  fittedSheetComicTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl",

  fittedSheetComicDescription:
    "mt-5 text-lg leading-8 text-[#f7ead6]",

  fittedSheetComicQuote:
    "mt-7 rounded-2xl border-l-4 border-[#f4c96d] bg-white/10 p-5 text-lg font-bold italic leading-8 sm:p-6 sm:text-xl",

  fittedSheetComicAction:
    "mt-8 inline-flex rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white",

  fittedSheetComicImageArea:
    "bg-white p-3 sm:p-5 lg:p-6",

  fittedSheetComicImage:
    "h-auto w-full rounded-[1.5rem] sm:rounded-[1.75rem]",

  /* MISSION DETAILS */
  missionDetailsSection:
    "px-6 py-16",

  missionDetailsGrid:
    "mx-auto grid max-w-6xl gap-6 md:grid-cols-3",

  missionDetailCard:
    "rounded-[2rem] border border-[#eadcc8] bg-white p-7 shadow-sm sm:p-8",

  missionDetailLabel:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]",

  missionDetailValue:
    "mt-3 text-3xl font-black leading-tight",

  missionDetailDescription:
    "mt-4 leading-7 text-[#6a5a4b]",

  /* MISSION SUPPLIES */
  suppliesSection:
    "px-6 pb-16",

  suppliesContainer:
    "mx-auto max-w-6xl",

  suppliesCard:
    "rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl md:p-10",

  suppliesLabel:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]",

  suppliesTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl",

  suppliesGrid:
    "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",

  supplyItem:
    "rounded-2xl border border-white/10 bg-white/10 p-5 font-bold text-[#fffaf2]",

  /* MISSION STEPS */
  missionStepsSection:
    "bg-white px-6 py-16",

  missionStepsGrid:
    "mx-auto grid max-w-6xl gap-8 lg:grid-cols-2",

  missionStepCard:
    "rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-7 shadow-sm sm:p-8 md:p-10",

  missionStepLabel:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]",

  missionStepTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl",

  missionStepList:
    "mt-8 space-y-4",

  missionStepItem:
    "flex gap-4 rounded-2xl bg-white p-5 shadow-sm",

  missionStepNumber:
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2f261f] text-sm font-black text-white",

  missionStepText:
    "leading-7 text-[#6a5a4b]",

  /* ENCOURAGEMENT */
  encouragementSection:
    "px-6 py-16",

  encouragementCard:
    "mx-auto max-w-5xl rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 text-center shadow-sm md:p-12",

  encouragementLabel:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]",

  encouragementTitle:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl",

  encouragementDescription:
    "mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]",

  /* VICTORY */
  victorySection:
    "px-6 pb-16",

  victoryCard:
    "mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl md:p-12",

  victoryLabel:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]",

  victoryTitle:
    "mt-4 text-4xl font-black leading-tight",

  victoryDescription:
    "mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  victoryActions:
    "mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row",

  completeMissionButton:
    "rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#fff4dd] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]",

  chooseAnotherMissionLink:
    "inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:-translate-y-1 hover:bg-white/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]",
};

/* -------------------------------------------------------------------------- */
/* MISSION DETAILS                                                            */
/* -------------------------------------------------------------------------- */

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
      "Ten minutes gives you fresh sheets. Thirty minutes can make the entire bedroom look like responsible adults live there.",
  },
  {
    label: "Victory Goal",
    value: "Change the Whole Vibe",
    description:
      "We are aiming for clean, comfortable, and ready for actual rest. Decorative pillow perfection is not required.",
  },
];

/* -------------------------------------------------------------------------- */
/* QUICK RESET                                                                */
/* -------------------------------------------------------------------------- */

const quickSteps = [
  "Strip the bed before the sheets can negotiate another night.",
  "Put the old sheets directly into the laundry basket. Do not create a temporary floor-based linen department.",
  "Put on a clean fitted sheet and locate the correct corner before losing your patience.",
  "Add fresh pillowcases so your face has somewhere respectable to spend the night.",
  "Straighten the blanket, fluff the pillows, and admire the fastest bedroom transformation known to humanity.",
];

/* -------------------------------------------------------------------------- */
/* DEEP RESET                                                                 */
/* -------------------------------------------------------------------------- */

const deepSteps = [
  "Strip the sheets, pillowcases, blankets, and anything else that has quietly joined the bedding ecosystem.",
  "Start the laundry before the old sheets establish permanent residency in the basket.",
  "Check beneath the bed for socks, cups, wrappers, and evidence from previous civilizations.",
  "Dust the nightstands, headboard, lamps, and any surface currently wearing a small gray sweater.",
  "Vacuum or sweep the floor, including the mysterious territory beneath the bed.",
  "Make the bed with fresh sheets, fluffed pillows, and the confidence of someone whose life is briefly under control.",
];

/* -------------------------------------------------------------------------- */
/* SUPPLIES                                                                   */
/* -------------------------------------------------------------------------- */

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
          several bad decisions. It is time for a full bedroom reboot.
        </p>
      </section>

      {/* CLEAN SHEETS COMIC */}
      <section className={styles.cleanSheetsComicSection}>
        <div className={styles.cleanSheetsComicCard}>
          <div className={styles.cleanSheetsComicLayout}>
            <div className={styles.cleanSheetsComicImageArea}>
              <img
                src="/comics/bed-sheets.png"
                alt="Super Cleaning Lady compares a difficult day with old sheets to a much better evening with fresh clean sheets"
                className={styles.cleanSheetsComicImage}
              />
            </div>

            <div className={styles.cleanSheetsComicContent}>
              <p className={styles.cleanSheetsComicSeries}>
                Bedroom Heroics
              </p>

              <h2 className={styles.cleanSheetsComicTitle}>
                Change the sheets. Change the whole vibe.
              </h2>

              <p className={styles.cleanSheetsComicDescription}>
                The day may have been chaotic, the laundry may remain
                unresolved, and tomorrow may already be making demands. But
                tonight, the bed is clean, comfortable, and temporarily on your
                side.
              </p>

              <blockquote className={styles.cleanSheetsComicQuote}>
                “Fresh sheets: the fastest legal way to feel like you have your
                life together.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FITTED SHEET INCIDENT */}
      <section className={styles.fittedSheetComicSection}>
        <div className={styles.fittedSheetComicCard}>
          <div className={styles.fittedSheetComicLayout}>
            <div className={styles.fittedSheetComicContent}>
              <p className={styles.fittedSheetComicSeries}>
                Five-Minute Fix Division
              </p>

              <h2 className={styles.fittedSheetComicTitle}>
                The Fitted Sheet Incident
              </h2>

              <p className={styles.fittedSheetComicDescription}>
                Super Cleaning Lady had one simple objective: fold a fitted
                sheet. Several failed corner negotiations later, Super Handy Man
                consulted{" "}
                <em>Advanced Over Engineering for Beginners</em> and deployed
                the Hydraulic Fitted Sheet Folding Apparatus 3000.
              </p>

              <blockquote className={styles.fittedSheetComicQuote}>
                “Every Problem has a solution. Especially this one!”
              </blockquote>

              <Link
                href="/super-handy-man"
                className={styles.fittedSheetComicAction}
              >
                Enter the Five-Minute Fix Division
              </Link>
            </div>

            <div className={styles.fittedSheetComicImageArea}>
              <img
                src="/comics/fitted-sheet.png"
                alt="The Fitted Sheet Incident comic featuring Super Cleaning Lady struggling to fold a fitted sheet before Super Handy Man consults Advanced Over Engineering for Beginners and unveils an elaborate fitted sheet folding machine"
                className={styles.fittedSheetComicImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION DETAILS */}
      <section className={styles.missionDetailsSection}>
        <div className={styles.missionDetailsGrid}>
          {missionDetails.map((detail) => (
            <article
              key={detail.label}
              className={styles.missionDetailCard}
            >
              <p className={styles.missionDetailLabel}>
                {detail.label}
              </p>

              <h2 className={styles.missionDetailValue}>
                {detail.value}
              </h2>

              <p className={styles.missionDetailDescription}>
                {detail.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* MISSION SUPPLIES */}
      <section className={styles.suppliesSection}>
        <div className={styles.suppliesContainer}>
          <div className={styles.suppliesCard}>
            <p className={styles.suppliesLabel}>
              Mission Supplies
            </p>

            <h2 className={styles.suppliesTitle}>
              Gather your weapons against bedroom fatigue.
            </h2>

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
        </div>
      </section>

      {/* MISSION STEPS */}
      <section className={styles.missionStepsSection}>
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
            vacuuming, and rescuing the area beneath the bed are optional bonus
            missions—not requirements for victory.
          </p>
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
            clean, the pillows are fluffed, and you are looking forward to
            climbing into bed tonight, this mission counts.
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