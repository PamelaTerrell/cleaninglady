import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MissionProgress from "@/components/MissionProgress";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Super Cleaning Lady | Funny Household Comics & Cleaning Motivation",
  description:
    "Funny cleaning missions, household comics, ridiculous villains, Super Handy Man repairs, no-shame motivation, and small victories for real homes with real messes.",
};

/* -------------------------------------------------------------------------- */
/* PAGE STYLES                                                                */
/* -------------------------------------------------------------------------- */

const styles = {
  page:
    "min-h-screen bg-[#fffaf2] text-[#2f261f]",

  /* HERO */
  heroSection:
    "relative overflow-hidden",

  heroBackground:
    "absolute inset-0 opacity-[0.28]",

  heroContainer:
    "relative mx-auto flex min-h-[68vh] max-w-6xl flex-col items-center justify-center px-5 py-12 text-center sm:px-6 md:py-16",

  heroImageFrame:
    "relative mb-8 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-[2rem] drop-shadow-2xl lg:max-w-4xl",

  heroImage:
    "object-cover",

  heroEyebrow:
    "text-xs font-black uppercase tracking-[0.26em] text-[#b48635] sm:text-sm",

  heroHeading:
    "mt-4 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl",

  heroHeadingSecondLine:
    "block",

  heroDescription:
    "mt-5 max-w-2xl text-base leading-7 text-[#6a5a4b] sm:text-lg md:leading-8",

  heroActions:
    "mt-8 flex w-full max-w-xl flex-col justify-center gap-4 sm:flex-row",

  heroPrimaryButton:
    "rounded-full bg-[#2f261f] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]",

  heroSecondaryButton:
    "rounded-full border border-[#d8c6ad] bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]",

  heroBadgeList:
    "mt-8 flex flex-wrap justify-center gap-3",

  heroBadge:
    "rounded-full border border-[#eadcc8] bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-[#7a5520] shadow-sm backdrop-blur",

  /* SHARED SECTION STYLES */
  sectionContainer:
    "mx-auto max-w-6xl",

  centeredSectionHeader:
    "mx-auto max-w-4xl text-center",

  sectionEyebrow:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  sectionHeading:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  sectionDescription:
    "mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]",

  leftSectionHeading:
    "mt-3 max-w-4xl text-4xl font-black leading-tight md:text-5xl",

  leftSectionDescription:
    "mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]",

  /* MISSIONS */
  missionsSection:
    "scroll-mt-36 bg-white px-6 py-20",

  missionGrid:
    "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",

  missionCard:
    "group flex h-full flex-col rounded-3xl border border-[#eadcc8] bg-[#fffaf2] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]",

  missionImageFrame:
    "relative h-60 overflow-hidden rounded-2xl bg-white",

  missionImage:
    "object-cover object-top shadow-sm transition duration-300 group-hover:scale-[1.03]",

  missionTitle:
    "mt-5 text-2xl font-black",

  missionDescription:
    "mt-3 flex-1 leading-7 text-[#6a5a4b]",

  missionLinkText:
    "mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#b48635]",

  /* SQUAD */
  squadSection:
    "scroll-mt-36 px-6 py-20",

  squadGrid:
    "mt-12 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4",

  squadCard:
    "group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]",

  squadImageArea:
    "relative h-72 overflow-hidden bg-[#fffaf2] sm:h-80",

  squadImageGlow:
    "absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4c96d]/20 blur-3xl",

  squadImage:
    "object-contain p-5 drop-shadow-xl transition duration-300 group-hover:scale-[1.03]",

  squadContent:
    "flex flex-1 flex-col p-7",

  squadRole:
    "text-xs font-black uppercase tracking-[0.2em] text-[#b48635]",

  squadName:
    "mt-3 text-2xl font-black leading-tight",

  squadDescription:
    "mt-4 flex-1 leading-7 text-[#6a5a4b]",

  squadLinkText:
    "mt-6 text-xs font-black uppercase tracking-[0.15em] text-[#b48635]",

  squadActions:
    "mt-10 flex flex-col justify-center gap-4 sm:flex-row",

  squadPrimaryButton:
    "rounded-full bg-[#2f261f] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl",

  squadSecondaryButton:
    "rounded-full border border-[#d8c6ad] bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md",

  /* VILLAINS */
  villainsSection:
    "scroll-mt-36 bg-white px-6 py-20",

  villainGrid:
    "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",

  villainCard:
    "group rounded-2xl border border-[#eadcc8] bg-[#fffaf2] p-5 text-center font-black shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]",

  villainImage:
    "mx-auto mb-5 h-36 w-36 object-contain drop-shadow-md transition duration-300 group-hover:scale-105",

  /* FEATURED COMICS */
  comicsSection:
    "scroll-mt-36 overflow-hidden bg-[#2f261f] px-6 py-20 text-white",

  comicsHeader:
    "mx-auto mb-12 max-w-4xl text-center",

  comicsEyebrow:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#f4c96d]",

  comicsHeading:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  comicsDescription:
    "mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  comicsList:
    "space-y-16",

  comicLayout:
    "grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]",

  comicImageFrame:
    "overflow-hidden rounded-[2rem] border-4 border-white/10 bg-white shadow-2xl",

  comicImage:
    "h-auto w-full",

  comicReportLabel:
    "text-xs font-black uppercase tracking-[0.18em] text-[#f4c96d]/80",

  comicSeries:
    "mt-3 text-sm font-black uppercase tracking-[0.22em] text-[#f4c96d]",

  comicTitle:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  comicDescription:
    "mt-6 text-lg leading-8 text-[#f7ead6]",

  comicQuote:
    "mt-7 rounded-r-2xl border-l-4 border-[#f4c96d] bg-white/5 px-6 py-5 text-xl font-bold italic leading-8",

  comicActions:
    "mt-8 flex flex-col gap-4",

  comicPrimaryButton:
    "rounded-full bg-[#f4c96d] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]",

  comicSecondaryButton:
    "rounded-full border border-white/30 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10",

  /* SUPER HANDY MAN */
  handyManSection:
    "scroll-mt-36 px-6 py-20",

  handyManFeatureCard:
    "overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-white shadow-[0_24px_70px_rgba(47,38,31,0.13)]",

  handyManFeatureGrid:
    "grid lg:grid-cols-[0.9fr_1.1fr]",

  handyManImageArea:
    "relative min-h-[440px] overflow-hidden bg-[#2f261f]",

  handyManImagePattern:
    "absolute inset-0 opacity-[0.06]",

  handyManImageGlow:
    "absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4c96d]/10 blur-3xl",

  handyManImage:
    "object-contain p-8 drop-shadow-2xl sm:p-10",

  handyManContent:
    "flex flex-col justify-center p-8 sm:p-10 lg:p-14",

  handyManStatusRow:
    "flex flex-wrap items-center gap-3",

  handyManDivisionBadge:
    "rounded-full bg-[#f4c96d] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2f261f]",

  handyManEstimate:
    "text-xs font-black uppercase tracking-[0.18em] text-[#8a7766]",

  handyManEyebrow:
    "mt-7 text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  handyManHeading:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  handyManDescription:
    "mt-6 text-lg leading-8 text-[#6a5a4b]",

  handyManQuote:
    "mt-7 rounded-2xl border-l-4 border-[#b48635] bg-[#fffaf2] px-6 py-5 text-xl font-black italic leading-8",

  handyManAside:
    "mt-5 font-bold italic leading-7 text-[#8a7766]",

  handyManActions:
    "mt-8 flex flex-col gap-4 sm:flex-row",

  handyManPrimaryButton:
    "rounded-full bg-[#2f261f] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]",

  handyManSecondaryButton:
    "rounded-full border border-[#d8c6ad] bg-[#fffaf2] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]",

  handyManStatsGrid:
    "mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-3",

  handyManStatCard:
    "rounded-[1.5rem] border border-[#eadcc8] bg-white p-5 text-center shadow-sm",

  handyManStatLabel:
    "text-xs font-black uppercase tracking-[0.18em] text-[#b48635]",

  handyManStatValue:
    "mt-2 text-2xl font-black",

  /* QUICK RESCUES */
  quickRescuesSection:
    "bg-white px-6 py-20",

  quickRescuesHeader:
    "mb-10 text-center",

  quickRescueGrid:
    "grid gap-8 md:grid-cols-3",

  quickRescueCard:
    "flex flex-col rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md",

  quickRescueEyebrow:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]",

  quickRescueTitle:
    "mt-4 text-3xl font-black leading-tight",

  quickRescueDescription:
    "mt-4 flex-1 leading-7 text-[#6a5a4b]",

  quickRescueLink:
    "mt-7 text-sm font-black uppercase tracking-[0.16em] text-[#b48635] transition hover:text-[#7a5520]",

  /* NO SHAME */
  noShameSection:
    "scroll-mt-36 px-6 py-20",

  noShameCard:
    "mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl sm:p-10 md:p-14",

  noShameImageFrame:
    "relative mx-auto mb-8 h-52 w-52",

  noShameImage:
    "object-contain drop-shadow-xl",

  noShameEyebrow:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]",

  noShameHeading:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  noShameDescription:
    "mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  noShameActions:
    "mt-8 flex flex-col justify-center gap-4 sm:flex-row",

  noShamePrimaryButton:
    "rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]",

  noShameSecondaryButton:
    "rounded-full border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10",
};

/* -------------------------------------------------------------------------- */
/* MISSIONS                                                                   */
/* -------------------------------------------------------------------------- */

const missions = [
  {
    title: "Kitchen Rescue",
    href: "/missions/kitchen-rescue",
    image: "/dish-goblin.png",
    description:
      "For when the counters have disappeared and the sink is staging a rebellion.",
  },
  {
    title: "Bathroom Reset",
    href: "/missions/bathroom-reset",
    image: "/toothpaste-splatter.png",
    description:
      "Because the mirror should not look like it survived a toothpaste explosion.",
  },
  {
    title: "Bedroom Reset",
    href: "/missions/bedroom-reset",
    image: "/comics/bed-sheets.png",
    description:
      "Fresh sheets, a better mood, and one fitted-sheet battle standing between you and victory.",
  },
  {
    title: "Laundry Mountain",
    href: "/missions/laundry-mountain",
    image: "/laundry-mountain.png",
    description:
      "Scale the pile. Find the floor. Become the legend.",
  },
  {
    title: "Closet Chaos",
    href: "/missions/closet-chaos",
    image: "/closet-chaos.png",
    description:
      "Enter bravely. Sort ruthlessly. Try not to awaken the shoe avalanche.",
  },
  {
    title: "Company’s Coming",
    href: "/missions/companys-coming",
    image: "/company-is-coming.png",
    description:
      "The emergency clean for when someone texts, “We’re five minutes away.”",
  },
  {
    title: "One-Bag Declutter",
    href: "/missions/one-bag-declutter",
    image: "/one-bag-declutter.png",
    description:
      "One bag. One mission. Fewer things silently judging you from the corner.",
  },
];

/* -------------------------------------------------------------------------- */
/* VILLAINS                                                                   */
/* -------------------------------------------------------------------------- */

const villains = [
  {
    name: "The Dish Goblin",
    href: "/villains/dish-goblin",
    image: "/dish-goblin-friendly.png",
  },
  {
    name: "Laundry Mountain",
    href: "/missions/laundry-mountain",
    image: "/laundry-mountain.png",
  },
  {
    name: "The Doom Basket",
    href: "/villains/doom-basket",
    image: "/doom-basket.png",
  },
  {
    name: "Toothpaste Splatter",
    href: "/missions/bathroom-reset",
    image: "/toothpaste-splatter.png",
  },
  {
    name: "Crumbzilla",
    href: "/villains/crumbzilla",
    image: "/crumbzilla.png",
  },
  {
    name: "The Paper Pile of Despair",
    href: "/villains/paper-pile-of-despair",
    image: "/paper-pile-of-despair.png",
  },
  {
    name: "Mystery Sticky Spot",
    href: "/villains/mystery-sticky-spot",
    image: "/mystery-sticky-spot.png",
  },
  {
    name: "The Sock Portal",
    href: "/villains/sock-portal",
    image: "/sock-portal.png",
  },
];

/* -------------------------------------------------------------------------- */
/* SQUAD                                                                      */
/* -------------------------------------------------------------------------- */

const squad = [
  {
    role: "Team Leader",
    name: "Super Cleaning Lady",
    description:
      "Restores order, defeats mystery grime, and knows exactly where the ratchet set does not live.",
    image: "/super-cleaning-lady-alone.png",
    alt: "Super Cleaning Lady wearing her pink cape and holding a spray bottle",
    imageClassName: "scale-[0.92]",
    href: "/super-cleaning-lady",
    cta: "Enter Restoration & Rescue Command",
  },
  {
    role: "Repair Division",
    name: "Super Handy Man",
    description:
      "Fixes the house, owns every tool, and begins most adventures with, “This should only take five minutes.”",
    image: "/shm.png",
    alt: "Super Handy Man wearing glasses, work clothes, and a tool belt",
    imageClassName: "scale-[1.14]",
    href: "/super-handy-man",
    cta: "Enter the Five-Minute Fix Division",
  },
  {
    role: "Sparkle Support",
    name: "Spritzy",
    description:
      "Armed with cleaning power, a heroic cape, and unwavering faith that every sticky spot can be defeated.",
    image: "/super-spray.png",
    alt: "Spritzy, the superhero spray bottle, wearing a red cape and holding a yellow cleaning cloth",
    imageClassName: "scale-[0.94]",
    href: "/spritzy",
    cta: "Enter Surface Recovery",
  },
  {
    role: "Tiny Sidekick",
    name: "Spongie",
    description:
      "Small sponge. Big confidence. Absolutely no fear of mystery splatter.",
    image: "/spongie.png",
    alt: "Spongie wearing goggles and a red cape while holding a blue duster",
    imageClassName: "scale-[1.16]",
    href: "/spongie",
    cta: "Enter Tiny Emergency Division",
  },
];

/* -------------------------------------------------------------------------- */
/* FEATURED COMICS                                                            */
/* -------------------------------------------------------------------------- */

const featuredComics = [
  {
    series: "Five-Minute Fix Division",
    eyebrow: "Newest Incident Report",
    title: "The Shredder Dome",
    image: "/comics/shredder-dome.png",
    alt: "Super Cleaning Lady empties a paper shredder from inside the Shredder Dome while Super Handy Man operates an overly complicated suction control panel",
    description:
      "Super Cleaning Lady had one simple complaint: emptying an overstuffed shredder sent paper clippings everywhere. Super Handy Man responded with a person-sized suction dome, multiple pressure gauges, an alarming number of levers, and an entirely new shredder-emptying procedure.",
    quote: "Every problem has a solution. Especially this one!",
    relatedHref: "/super-handy-man",
    relatedLabel: "Enter the Five-Minute Fix Division",
  },
  {
    series: "Laundry Heroics",
    eyebrow: "Incident Report",
    title: "The Wrinkle Summit",
    image: "/comics/wrinkle-summit.png",
    alt: "Super Cleaning Lady and the cleaning squad attend a hilarious wrinkle-removal convention featuring irons, steamers, dryer tricks, and questionable alternative methods",
    description:
      "Irons. Steamers. Damp towels. Dryer tricks. Mattress pressing. And several techniques that probably should not have made it past the convention planning committee. The world’s greatest minds have gathered for one mission: defeat the wrinkle.",
    quote: "When the shirt is wrinkled, the competition gets personal.",
    relatedHref: "/missions/laundry-mountain",
    relatedLabel: "Start Laundry Mountain",
  },
];

/* -------------------------------------------------------------------------- */
/* QUICK RESCUES                                                              */
/* -------------------------------------------------------------------------- */

const quickRescues = [
  {
    eyebrow: "10-Minute Rescue",
    title: "For when motivation is missing.",
    description:
      "Pick one tiny area, set a timer, and do not negotiate with the clutter. The clutter has had enough chances.",
    href: "/#missions",
    label: "Choose a Mission",
  },
  {
    eyebrow: "Emergency Clean",
    title: "For surprise visitors.",
    description:
      "The doorbell is not a drill. Hide the chaos, wipe the obvious, light a candle, and act natural.",
    href: "/missions/companys-coming",
    label: "Start the Emergency Clean",
  },
  {
    eyebrow: "Good Enough Glory",
    title: "For real-life homes.",
    description:
      "We are not polishing ceiling fans with a toothbrush today. We are reclaiming peace and possibly the dining room table.",
    href: "/missions/one-bag-declutter",
    label: "Make One Area Better",
  },
];

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.heroSection}>
        <div
          className={styles.heroBackground}
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #f4c96d 0, transparent 28%), radial-gradient(circle at 80% 30%, #dceeff 0, transparent 30%)",
          }}
        />

        <div className={styles.heroContainer}>
          <div className={styles.heroImageFrame}>
            <Image
              src="/clean-squad2.png"
              alt="Super Cleaning Lady, Super Handy Man, Spritzy, and Spongie standing together"
              fill
              preload
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
              className={styles.heroImage}
            />
          </div>

          <p className={styles.heroEyebrow}>
            Cleaning motivation for real-life homes
          </p>

          <h1 className={styles.heroHeading}>
            Your house isn’t messy.
            <span className={styles.heroHeadingSecondLine}>
              It’s just experiencing a plot twist.
            </span>
          </h1>

          <p className={styles.heroDescription}>
            Fighting dust, dishes, doom piles, rogue tools, runaway socks, and
            whatever that is under the couch—with rescue missions for homes that
            are one laundry basket away from becoming an ecosystem.
          </p>

          <div className={styles.heroActions}>
            <a href="#missions" className={styles.heroPrimaryButton}>
              Start a Mission
            </a>

            <a
              href="#invisible-heroics"
              className={styles.heroSecondaryButton}
            >
              Read the Comics
            </a>
          </div>

          <div className={styles.heroBadgeList}>
            {[
              "No shame",
              "Tiny victories",
              "Real homes",
              "Questionable villains",
            ].map((item) => (
              <span key={item} className={styles.heroBadge}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <MissionProgress />

      {/* MISSIONS */}
      <section id="missions" className={styles.missionsSection}>
        <div className={styles.sectionContainer}>
          <p className={styles.sectionEyebrow}>Dispatch Center</p>

          <h2 className={styles.leftSectionHeading}>
            One room. One reset. One tiny victory over chaos.
          </h2>

          <p className={styles.leftSectionDescription}>
            You do not need a perfect house. You need a starting point, a trash
            bag, maybe some music, and the courage to face whatever has been
            quietly getting on your nerves.
          </p>

          <div className={styles.missionGrid}>
            {missions.map((mission) => (
              <Link
                key={mission.title}
                href={mission.href}
                className={styles.missionCard}
              >
                <div className={styles.missionImageFrame}>
                  <Image
                    src={mission.image}
                    alt={`${mission.title} mission illustration`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className={styles.missionImage}
                  />
                </div>

                <h3 className={styles.missionTitle}>{mission.title}</h3>

                <p className={styles.missionDescription}>
                  {mission.description}
                </p>

                <p className={styles.missionLinkText}>Open Mission →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE SQUAD */}
      <section id="squad" className={styles.squadSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.centeredSectionHeader}>
            <p className={styles.sectionEyebrow}>Meet the Squad</p>

            <h2 className={styles.sectionHeading}>
              Every household crisis needs the right hero.
            </h2>

            <p className={styles.sectionDescription}>
              Together, they battle dust, clutter, questionable repairs,
              runaway socks, mystery splatter, and every tiny domestic emergency
              hiding in plain sight.
            </p>
          </div>

          <div className={styles.squadGrid}>
            {squad.map((member) => (
              <Link
                key={member.name}
                href={member.href}
                className={styles.squadCard}
              >
                <div className={styles.squadImageArea}>
                  <div
                    className={styles.squadImageGlow}
                    aria-hidden="true"
                  />

                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                    className={`${styles.squadImage} ${member.imageClassName}`}
                  />
                </div>

                <div className={styles.squadContent}>
                  <p className={styles.squadRole}>{member.role}</p>

                  <h3 className={styles.squadName}>{member.name}</h3>

                  <p className={styles.squadDescription}>
                    {member.description}
                  </p>

                  <p className={styles.squadLinkText}>
                    {member.cta} →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.squadActions}>
            <Link
              href="/invisible-heroics"
              className={styles.squadPrimaryButton}
            >
              See Invisible Heroics
            </Link>

            <Link
              href="/household-team-ups"
              className={styles.squadSecondaryButton}
            >
              Read the Team-Ups
            </Link>
          </div>
        </div>
      </section>

      {/* VILLAINS */}
      <section id="villains" className={styles.villainsSection}>
        <div className={styles.sectionContainer}>
          <p className={styles.sectionEyebrow}>Villains We Fight</p>

          <h2 className={styles.leftSectionHeading}>
            Every home has enemies. Some are sticky.
          </h2>

          <p className={styles.leftSectionDescription}>
            Some villains live in the sink. Some multiply in laundry baskets.
            Some hide beneath furniture and answer to “crumbs.” No household
            nuisance is too ridiculous to identify, name, and defeat.
          </p>

          <div className={styles.villainGrid}>
            {villains.map((villain) => (
              <Link
                key={villain.name}
                href={villain.href}
                className={styles.villainCard}
              >
                <Image
                  src={villain.image}
                  alt={`${villain.name} household villain illustration`}
                  width={144}
                  height={144}
                  sizes="144px"
                  className={styles.villainImage}
                />

                <span>{villain.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COMICS */}
      <section
        id="invisible-heroics"
        className={styles.comicsSection}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.comicsHeader}>
            <p className={styles.comicsEyebrow}>
              Latest Incident Reports
            </p>

            <h2 className={styles.comicsHeading}>
              Small household problems. Extremely large responses.
            </h2>

            <p className={styles.comicsDescription}>
              From international wrinkle diplomacy to a machine designed to
              prevent three paper shreds from touching the floor, ordinary home
              maintenance has officially gotten out of hand.
            </p>
          </div>

          <div className={styles.comicsList}>
            {featuredComics.map((comic, index) => (
              <article
                key={comic.title}
                className={styles.comicLayout}
              >
                <div
                  className={`${styles.comicImageFrame} ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={comic.image}
                    alt={comic.alt}
                    width={1536}
                    height={2048}
                    sizes="(max-width: 1023px) 100vw, 60vw"
                    className={styles.comicImage}
                  />
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className={styles.comicReportLabel}>
                    {comic.eyebrow}
                  </p>

                  <p className={styles.comicSeries}>
                    {comic.series}
                  </p>

                  <h3 className={styles.comicTitle}>
                    {comic.title}
                  </h3>

                  <p className={styles.comicDescription}>
                    {comic.description}
                  </p>

                  <blockquote className={styles.comicQuote}>
                    “{comic.quote}”
                  </blockquote>

                  <div className={styles.comicActions}>
                    <Link
                      href={comic.relatedHref}
                      className={styles.comicPrimaryButton}
                    >
                      {comic.relatedLabel}
                    </Link>

                    <Link
                      href="/invisible-heroics"
                      className={styles.comicSecondaryButton}
                    >
                      Read More Comics
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SUPER HANDY MAN */}
      <section
        id="super-handy-man"
        className={styles.handyManSection}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.handyManFeatureCard}>
            <div className={styles.handyManFeatureGrid}>
              <div className={styles.handyManImageArea}>
                <div
                  className={styles.handyManImagePattern}
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                <div
                  className={styles.handyManImageGlow}
                  aria-hidden="true"
                />

                <Image
                  src="/shm.png"
                  alt="Super Handy Man wearing glasses, a work shirt, and a tool belt"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className={styles.handyManImage}
                />
              </div>

              <div className={styles.handyManContent}>
                <div className={styles.handyManStatusRow}>
                  <span className={styles.handyManDivisionBadge}>
                    Repair Division
                  </span>

                  <span className={styles.handyManEstimate}>
                    Estimated time: five minutes
                  </span>
                </div>

                <p className={styles.handyManEyebrow}>
                  The Five-Minute Fix Division
                </p>

                <h2 className={styles.handyManHeading}>
                  Meet Super Handy Man.
                </h2>

                <p className={styles.handyManDescription}>
                  Repair specialist. Tool enthusiast. Temporary chaos
                  generator. Every project begins with confidence, several
                  tools, and one dangerously optimistic estimate.
                </p>

                <blockquote className={styles.handyManQuote}>
                  “Every problem has a solution. Especially this one.”
                </blockquote>

                <p className={styles.handyManAside}>
                  Although lately he has been wondering whether every solution
                  has a problem.
                </p>

                <div className={styles.handyManActions}>
                  <Link
                    href="/super-handy-man"
                    className={styles.handyManPrimaryButton}
                  >
                    Meet Super Handy Man
                  </Link>

                  <Link
                    href="/household-team-ups"
                    className={styles.handyManSecondaryButton}
                  >
                    Read the Team-Ups
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.handyManStatsGrid}>
            <div className={styles.handyManStatCard}>
              <p className={styles.handyManStatLabel}>
                Estimated Time
              </p>

              <p className={styles.handyManStatValue}>
                5 Minutes
              </p>
            </div>

            <div className={styles.handyManStatCard}>
              <p className={styles.handyManStatLabel}>
                Tool Requirement
              </p>

              <p className={styles.handyManStatValue}>
                All of Them
              </p>
            </div>

            <div className={styles.handyManStatCard}>
              <p className={styles.handyManStatLabel}>
                Extra Screws
              </p>

              <p className={styles.handyManStatValue}>
                Probably Normal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK RESCUES */}
      <section className={styles.quickRescuesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.quickRescuesHeader}>
            <p className={styles.sectionEyebrow}>
              Pick Your Energy Level
            </p>

            <h2 className={styles.sectionHeading}>
              Progress does not require an entire Saturday.
            </h2>

            <p className={styles.sectionDescription}>
              Ten minutes still counts. One bag still counts. Cleaning the thing
              that is bothering you most and ignoring everything else also
              counts.
            </p>
          </div>

          <div className={styles.quickRescueGrid}>
            {quickRescues.map((rescue) => (
              <article
                key={rescue.eyebrow}
                className={styles.quickRescueCard}
              >
                <p className={styles.quickRescueEyebrow}>
                  {rescue.eyebrow}
                </p>

                <h3 className={styles.quickRescueTitle}>
                  {rescue.title}
                </h3>

                <p className={styles.quickRescueDescription}>
                  {rescue.description}
                </p>

                <Link
                  href={rescue.href}
                  className={styles.quickRescueLink}
                >
                  {rescue.label} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NO SHAME */}
      <section
        id="no-shame"
        className={styles.noShameSection}
      >
        <div className={styles.noShameCard}>
          <div className={styles.noShameImageFrame}>
            <Image
              src="/cleaning-hero-in-action.png"
              alt="Super Cleaning Lady looking a little disheveled after battling household chaos"
              fill
              sizes="208px"
              className={styles.noShameImage}
            />
          </div>

          <p className={styles.noShameEyebrow}>
            No shame. No perfection.
          </p>

          <h2 className={styles.noShameHeading}>
            Just one rescue mission at a time.
          </h2>

          <p className={styles.noShameDescription}>
            I’m Pamela, and I believe cleaning does not have to feel like
            punishment. This is not a place for perfect pantries, judgmental
            baseboards, or people who fold fitted sheets for fun. Super Cleaning
            Lady is for real homes, real messes, and tiny victories that still
            count.
          </p>

          <div className={styles.noShameActions}>
            <Link
              href="/#missions"
              className={styles.noShamePrimaryButton}
            >
              Start Somewhere Small
            </Link>

            <Link
              href="/invisible-heroics"
              className={styles.noShameSecondaryButton}
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