import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { completeMission } from "@/app/actions";

export const metadata: Metadata = {
  title: "Bathroom Reset | Super Cleaning Lady",
  description:
    "A funny bathroom cleaning mission for toothpaste splatter, sink drama, questionable toilet-seat mist, and shower curtain liners entering their villain era.",
};

/* -------------------------------------------------------------------------- */
/* PAGE STYLES                                                                */
/* -------------------------------------------------------------------------- */

const styles = {
  page:
    "min-h-screen bg-[#fffaf2] text-[#2f261f]",

  pageSection:
    "px-6 py-16",

  whiteSection:
    "bg-white px-6 py-16",

  sectionContainer:
    "mx-auto max-w-6xl",

  centeredSectionHeader:
    "mx-auto max-w-3xl text-center",

  backButton:
    "inline-flex rounded-full border border-[#eadcc8] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#7a5520] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fffaf2]",

  goldEyebrow:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  goldEyebrowSmallTracking:
    "text-sm font-black uppercase tracking-[0.22em] text-[#b48635]",

  missionEyebrow:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]",

  lightEyebrow:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]",

  heroTitle:
    "mx-auto mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl",

  sectionHeadingLarge:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  sectionHeading:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl",

  comicHeading:
    "mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl",

  heroicTitle:
    "mt-4 text-4xl font-black leading-tight",

  heroDescription:
    "mx-auto mt-4 max-w-3xl text-base leading-7 text-[#6a5a4b] sm:text-lg md:leading-8",

  bodyText:
    "text-lg leading-8 text-[#6a5a4b]",

  bodyTextWithTopMargin:
    "mt-5 text-lg leading-8 text-[#6a5a4b]",

  mutedBodyText:
    "leading-7 text-[#6a5a4b]",

  heroVillainImage:
    "mx-auto mt-6 w-40 drop-shadow-xl sm:w-48 md:w-56",

  featuredComicShell:
    "mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)]",

  featuredComicGrid:
    "grid items-center lg:grid-cols-[1.2fr_0.8fr]",

  featuredComicImageArea:
    "bg-white p-3 sm:p-5 lg:p-6",

  featuredComicImage:
    "h-auto w-full rounded-[1.5rem] sm:rounded-[1.75rem]",

  featuredComicTextArea:
    "p-7 sm:p-10 lg:p-12",

  quoteBox:
    "mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-5 text-lg font-bold italic leading-8 shadow-sm sm:p-6 sm:text-xl",

  missionDetailsGrid:
    "mx-auto grid max-w-6xl gap-6 md:grid-cols-3",

  missionDetailCard:
    "rounded-[2rem] border border-[#eadcc8] bg-white p-7 shadow-sm sm:p-8",

  missionDetailTitle:
    "mt-3 text-3xl font-black leading-tight",

  bathroomHeroicsList:
    "mt-12 space-y-12",

  bathroomHeroicCard:
    "grid overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)] lg:grid-cols-[1.15fr_0.85fr]",

  bathroomHeroicImageArea:
    "bg-white p-4 sm:p-6",

  bathroomHeroicImage:
    "h-auto w-full rounded-[1.75rem]",

  bathroomHeroicTextArea:
    "flex flex-col justify-center p-8 sm:p-10 lg:p-12",

  bathroomHeroicQuote:
    "mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-6 text-xl font-bold italic leading-8 shadow-sm",

  invisibleHeroicsButton:
    "inline-flex rounded-full border border-[#d8c6ad] bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]",

  darkPanel:
    "rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl md:p-10",

  suppliesGrid:
    "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",

  supplyItem:
    "rounded-2xl border border-white/10 bg-white/10 p-5 font-bold text-[#fffaf2]",

  missionStepsGrid:
    "mx-auto grid max-w-6xl gap-8 lg:grid-cols-2",

  missionStepsCard:
    "rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-7 shadow-sm sm:p-8 md:p-10",

  missionStepsList:
    "mt-8 space-y-4",

  missionStep:
    "flex gap-4 rounded-2xl bg-white p-5 shadow-sm",

  missionStepNumber:
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2f261f] text-sm font-black text-white",

  missionStepText:
    "leading-7 text-[#6a5a4b]",

  reminderCard:
    "mx-auto max-w-5xl rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 text-center shadow-sm md:p-12",

  reminderText:
    "mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]",

  victorySection:
    "px-6 pb-16",

  victoryCard:
    "mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl md:p-12",

  victoryTitle:
    "mt-4 text-4xl font-black leading-tight",

  victoryText:
    "mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  victoryButtons:
    "mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row",

  completeMissionButton:
    "rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#fff4dd] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]",

  chooseMissionButton:
    "inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:-translate-y-1 hover:bg-white/20 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]",
};

/* -------------------------------------------------------------------------- */
/* MISSION CONTENT                                                            */
/* -------------------------------------------------------------------------- */

const missionDetails = [
  {
    label: "Difficulty",
    value: "Splash Zone Chaos",
    description:
      "Not impossible. Just damp, suspicious, and somehow covered in tiny dots no one will admit creating.",
  },
  {
    label: "Time Needed",
    value: "10–30 Minutes",
    description:
      "A quick wipe can change the whole mood. A full reset can make you feel like you live in a civilized society.",
  },
  {
    label: "Victory Goal",
    value: "Restore the Sparkle",
    description:
      "We are aiming for fresh, not palace-level. If the mirror is clear and the sink is no longer alarming, you win.",
  },
];

const quickSteps = [
  "Remove trash, empty bottles, and anything that has been living on the counter rent-free.",
  "Clear the sink area. The toothbrushes deserve a less dramatic neighborhood.",
  "Wipe the mirror so you can see yourself without toothpaste-based special effects.",
  "Swish the toilet bowl. We are not discussing it. We are just doing it.",
  "Wipe the obvious surfaces and pretend the bathroom has always respected you.",
];

const deepSteps = [
  "Take everything off the counter and sort it into keep, trash, and why-do-I-own-this.",
  "Clean the mirror until it stops looking like a crime scene for toothpaste.",
  "Scrub the sink, faucet, and counter.",
  "Clean the toilet inside and out like the brave adult you are.",
  "Wipe the shower or tub walls, especially the soap scum headquarters.",
  "Empty the shower caddy. Toss the empties, retire the rusty razor, and question whether you truly need backup backup shampoo.",
  "Check the shower curtain liner. Clean it or replace it before it becomes self-aware.",
  "Sweep or vacuum the floor, then mop if the floor has become emotionally sticky.",
];

const supplies = [
  "Trash bag",
  "Bathroom cleaner",
  "Glass cleaner",
  "Toilet brush",
  "Microfiber cloth",
  "Courage and possibly gloves",
];

const bathroomHeroics = [
  {
    title: "The Shower Caddy Crisis",
    image: "/comics/shower-caddy.png",
    alt: "Super Cleaning Lady, Spritzy, and Spongie confront an overflowing shower caddy filled with backup shampoo, a rusty razor, soap-scum goo, and products taking over the bathtub",
    description:
      "It started with one harmless idea: tidy the shower caddy real quick. Then came the backup backup shampoo, the rusty razor, the thriving soap-scum goo, and the horrifying realization that the tub rim had become overflow storage.",
    punchline:
      "If there’s a rusty razor, soap-scum goo, and backup backup shampoo... it’s cleanup time.",
  },
  {
    title: "The Shower Curtain Liner",
    image: "/comics/shower-curtain-liner.png",
    alt: "Super Cleaning Lady replaces an old shower curtain liner while everyone else fails to notice",
    description:
      "No applause. No medal. Not even a casual, “Hey, the shower looks better.” Just another household crisis quietly defeated.",
    punchline:
      "Some heroes save the world. Others replace the shower curtain liner before it becomes self-aware.",
  },
];

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function BathroomResetPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-10 text-center md:pb-10 md:pt-14">
        <Link href="/" className={styles.backButton}>
          ← Back to HQ
        </Link>

        <p className={`mt-6 ${styles.missionEyebrow}`}>
          Mission File 002
        </p>

        <h1 className={styles.heroTitle}>
          Bathroom Reset
        </h1>

        <p className={styles.heroDescription}>
          Because the mirror should not look like it survived a toothpaste
          explosion, the sink should not require adult supervision, and the
          toilet seat should not experience a peach-blossom weather event.
        </p>

        <img
          src="/toothpaste-splatter.png"
          alt="Toothpaste Splatter, a mischievous toothpaste villain on a bathroom mirror"
          className={styles.heroVillainImage}
        />
      </section>

      {/* FEATURED BATHROOM BRIEFING */}
      <section className="bg-white px-5 py-14 sm:px-6 md:py-16">
        <div className={styles.featuredComicShell}>
          <div className={styles.featuredComicGrid}>
            <div className={styles.featuredComicImageArea}>
              <img
                src="/comics/spray-the-air-not-the-chair.png"
                alt="Super Cleaning Lady explains to Super Handy Man that bathroom air freshener should be sprayed into the air rather than over the toilet seat"
                className={styles.featuredComicImage}
              />
            </div>

            <div className={styles.featuredComicTextArea}>
              <p className={styles.goldEyebrowSmallTracking}>
                Important Bathroom Briefing
              </p>

              <h2 className={styles.comicHeading}>
                Spray the air, not the chair.
              </h2>

              <p className={styles.bodyTextWithTopMargin}>
                Super Cleaning Lady delivers an essential household announcement:
                air freshener belongs in the air, not drifting down onto the
                toilet seat like a scented weather system.
              </p>

              <blockquote className={styles.quoteBox}>
                “Fresh bathroom. Dry toilet seat. Civilization restored.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION DETAILS */}
      <section className={styles.pageSection}>
        <div className={styles.missionDetailsGrid}>
          {missionDetails.map((detail) => (
            <article
              key={detail.label}
              className={styles.missionDetailCard}
            >
              <p className={styles.missionEyebrow}>
                {detail.label}
              </p>

              <h2 className={styles.missionDetailTitle}>
                {detail.value}
              </h2>

              <p className={`mt-4 ${styles.mutedBodyText}`}>
                {detail.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* BATHROOM HEROICS */}
      <section className={styles.whiteSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.centeredSectionHeader}>
            <p className={styles.goldEyebrow}>
              Bathroom Heroics
            </p>

            <h2 className={styles.sectionHeadingLarge}>
              Apparently the bathroom has multiple plotlines.
            </h2>

            <p className={styles.bodyTextWithTopMargin}>
              A shower caddy becomes a storage facility. A shower curtain liner
              quietly enters its villain era. Nobody calls for help, but somehow
              Super Cleaning Lady gets involved anyway.
            </p>
          </div>

          <div className={styles.bathroomHeroicsList}>
            {bathroomHeroics.map((heroic, index) => {
              const imageOrder =
                index % 2 === 1 ? "lg:order-2" : "";

              const textOrder =
                index % 2 === 1 ? "lg:order-1" : "";

              return (
                <article
                  key={heroic.title}
                  className={styles.bathroomHeroicCard}
                >
                  <div
                    className={`${styles.bathroomHeroicImageArea} ${imageOrder}`}
                  >
                    <img
                      src={heroic.image}
                      alt={heroic.alt}
                      className={styles.bathroomHeroicImage}
                    />
                  </div>

                  <div
                    className={`${styles.bathroomHeroicTextArea} ${textOrder}`}
                  >
                    <p className={styles.goldEyebrowSmallTracking}>
                      Invisible Heroics
                    </p>

                    <h3 className={styles.heroicTitle}>
                      {heroic.title}
                    </h3>

                    <p className={styles.bodyTextWithTopMargin}>
                      {heroic.description}
                    </p>

                    <blockquote className={styles.bathroomHeroicQuote}>
                      “{heroic.punchline}”
                    </blockquote>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/invisible-heroics"
              className={styles.invisibleHeroicsButton}
            >
              See All Invisible Heroics
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION SUPPLIES */}
      <section className={styles.pageSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.darkPanel}>
            <p className={styles.lightEyebrow}>
              Mission Supplies
            </p>

            <h2 className={styles.sectionHeading}>
              Gather your weapons against sink drama.
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
      <section className={styles.whiteSection}>
        <div className={styles.missionStepsGrid}>
          <article className={styles.missionStepsCard}>
            <p className={styles.missionEyebrow}>
              10-Minute Rescue
            </p>

            <h2 className={styles.sectionHeading}>
              For when the bathroom is being disrespectful.
            </h2>

            <ol className={styles.missionStepsList}>
              {quickSteps.map((step, index) => (
                <li
                  key={step}
                  className={styles.missionStep}
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

          <article className={styles.missionStepsCard}>
            <p className={styles.missionEyebrow}>
              30-Minute Reset
            </p>

            <h2 className={styles.sectionHeading}>
              For when you are ready to defeat the splash zone.
            </h2>

            <ol className={styles.missionStepsList}>
              {deepSteps.map((step, index) => (
                <li
                  key={step}
                  className={styles.missionStep}
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

      {/* SUPER CLEANING LADY REMINDER */}
      <section className={styles.pageSection}>
        <div className={styles.reminderCard}>
          <p className={styles.missionEyebrow}>
            Super Cleaning Lady Reminder
          </p>

          <h2 className={styles.sectionHeading}>
            You do not need to scrub every tile to make the bathroom feel better.
          </h2>

          <p className={styles.reminderText}>
            Clear the counter, wipe the sink, clean the mirror, and address the
            toilet. Anything beyond that is an optional bonus mission, not a
            requirement for victory.
          </p>
        </div>
      </section>

      {/* VICTORY */}
      <section className={styles.victorySection}>
        <div className={styles.victoryCard}>
          <p className={styles.lightEyebrow}>
            Victory Condition
          </p>

          <h2 className={styles.victoryTitle}>
            Congratulations. The bathroom no longer has an attitude.
          </h2>

          <p className={styles.victoryText}>
            It does not need to sparkle like a hotel commercial. If the mirror
            is clear, the sink is wiped, and the toilet has been addressed with
            dignity, this mission counts.
          </p>

          <div className={styles.victoryButtons}>
            <form action={completeMission}>
              <input
                type="hidden"
                name="mission"
                value="bathroom-reset"
              />

              <button
                type="submit"
                className={styles.completeMissionButton}
              >
                I Survived This Mission
              </button>
            </form>

            <Link
              href="/#missions"
              className={styles.chooseMissionButton}
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