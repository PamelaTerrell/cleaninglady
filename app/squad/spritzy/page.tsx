import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spritzy | Super Cleaning Lady",
  description:
    "Meet Spritzy, the sparkle support specialist of the Super Cleaning Lady universe—cheerful, loyal, and always ready to defeat sticky spots, suspicious splatters, and household drama.",
};

/* -------------------------------------------------------------------------- */
/* PAGE STYLES                                                                */
/* -------------------------------------------------------------------------- */

const styles = {
  page:
    "min-h-screen bg-[#fffaf2] text-[#2f261f]",

  sectionContainer:
    "mx-auto max-w-6xl",

  /* HERO */
  heroSection:
    "mx-auto max-w-6xl px-6 py-14 md:py-20",

  heroHeader:
    "text-center",

  backButton:
    "inline-flex rounded-full border border-[#d9e7f8] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#155dcc] transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155dcc]",

  heroEyebrow:
    "mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#ed3d7f]",

  heroHeading:
    "mx-auto mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl",

  heroDescription:
    "mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b] md:text-xl",

  heroFeatureGrid:
    "mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]",

  heroImageCard:
    "rounded-[2rem] border border-[#d9e7f8] bg-white p-5 shadow-[0_24px_70px_rgba(21,93,204,0.10)] md:p-8",

  heroImageFrame:
    "relative mx-auto aspect-square w-full max-w-md",

  heroImage:
    "object-contain drop-shadow-xl",

  profileCard:
    "rounded-[2rem] border border-[#d9e7f8] bg-[#f7fbff] p-8 shadow-sm md:p-10",

  profileEyebrow:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#155dcc]",

  profileHeading:
    "mt-4 text-4xl font-black leading-tight",

  profileText:
    "mt-6 text-lg leading-8 text-[#5e6777]",

  profileTextSecondary:
    "mt-5 text-lg leading-8 text-[#5e6777]",

  profileActions:
    "mt-8 flex flex-wrap gap-4",

  primaryButton:
    "inline-flex rounded-full bg-[#155dcc] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-md transition hover:-translate-y-1 hover:bg-[#104da9] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155dcc]",

  secondaryButton:
    "inline-flex rounded-full border border-[#cfe1f7] bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#155dcc] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155dcc]",

  /* STATS */
  statsSection:
    "bg-white px-6 py-16",

  statsGrid:
    "mx-auto grid max-w-6xl gap-6 md:grid-cols-3",

  statCard:
    "rounded-[2rem] border border-[#d9e7f8] bg-[#f7fbff] p-8 shadow-sm",

  statLabel:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#155dcc]",

  statValue:
    "mt-3 text-3xl font-black",

  statText:
    "mt-4 leading-7 text-[#5e6777]",

  /* POWERS */
  powersSection:
    "px-6 py-16",

  powersCard:
    "mx-auto max-w-6xl rounded-[2rem] bg-[#155dcc] p-8 text-white shadow-2xl md:p-10",

  powersEyebrow:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#dff1ff]",

  powersHeading:
    "mt-4 text-4xl font-black",

  powersGrid:
    "mt-8 grid gap-4 md:grid-cols-2",

  powerItem:
    "rounded-2xl bg-white/10 p-5 font-bold leading-7 text-white",

  /* PERSONALITY */
  personalitySection:
    "bg-white px-6 py-16",

  personalityGrid:
    "mx-auto grid max-w-6xl gap-8 lg:grid-cols-2",

  personalityCard:
    "rounded-[2rem] border border-[#d9e7f8] bg-[#fffaf2] p-8 shadow-sm md:p-10",

  quoteCard:
    "rounded-[2rem] border border-[#d9e7f8] bg-[#f7fbff] p-8 shadow-sm md:p-10",

  personalityEyebrow:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#ed3d7f]",

  quoteEyebrow:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#155dcc]",

  personalityHeading:
    "mt-4 text-4xl font-black",

  personalityText:
    "mt-6 text-lg leading-8 text-[#6a5a4b]",

  personalityTextSecondary:
    "mt-5 text-lg leading-8 text-[#6a5a4b]",

  quoteText:
    "mt-6 text-lg leading-8 text-[#5e6777]",

  quoteTextSecondary:
    "mt-5 text-lg leading-8 text-[#5e6777]",

  /* FAVORITES */
  favoritesSection:
    "px-6 py-16",

  favoritesHeader:
    "mb-10 text-center",

  favoritesEyebrow:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#ed3d7f]",

  favoritesHeading:
    "mt-4 text-4xl font-black md:text-5xl",

  favoritesGrid:
    "grid gap-6 lg:grid-cols-3",

  favoriteCard:
    "flex h-full flex-col rounded-[2rem] border border-[#d9e7f8] bg-white p-8 shadow-sm",

  favoriteTitle:
    "text-2xl font-black",

  favoriteText:
    "mt-4 flex-1 leading-7 text-[#6a5a4b]",

  favoriteButton:
    "mt-6 inline-flex self-start rounded-full border border-[#cfe1f7] bg-[#f7fbff] px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#155dcc] transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155dcc]",

  /* CTA */
  ctaSection:
    "px-6 py-16",

  ctaCard:
    "mx-auto max-w-4xl rounded-[2rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl md:p-12",

  ctaEyebrow:
    "text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]",

  ctaHeading:
    "mt-4 text-4xl font-black",

  ctaDescription:
    "mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  ctaActions:
    "mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row",

  ctaPrimaryButton:
    "inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:shadow-xl",

  ctaSecondaryButton:
    "inline-flex rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white/20",
};

/* -------------------------------------------------------------------------- */
/* PAGE CONTENT                                                               */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function SpritzyPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.heroSection}>
        <div className={styles.heroHeader}>
          <Link href="/" className={styles.backButton}>
            ← Back to HQ
          </Link>

          <p className={styles.heroEyebrow}>
            Meet the Squad
          </p>

          <h1 className={styles.heroHeading}>
            Spritzy
          </h1>

          <p className={styles.heroDescription}>
            The sparkle support specialist of the Super Cleaning Lady universe.
            Spritzy is cheerful, fearless, and always ready to assist when a
            household surface gets sticky, grimy, suspicious, or just plain rude.
          </p>
        </div>

        <div className={styles.heroFeatureGrid}>
          <div className={styles.heroImageCard}>
            <div className={styles.heroImageFrame}>
              <Image
                src="/spritzy.png"
                alt="Spritzy, the cheerful spray bottle sidekick from Super Cleaning Lady"
                fill
                priority
                sizes="(max-width: 1023px) 90vw, 448px"
                className={styles.heroImage}
              />
            </div>
          </div>

          <div className={styles.profileCard}>
            <p className={styles.profileEyebrow}>
              Squad File 003
            </p>

            <h2 className={styles.profileHeading}>
              Small bottle.
              <br />
              Big sparkle energy.
            </h2>

            <p className={styles.profileText}>
              Spritzy is the team member who shows up smiling, ready to help,
              and fully convinced that one good cleaning session can change the
              emotional direction of an entire room.
            </p>

            <p className={styles.profileTextSecondary}>
              She specializes in sticky counters, suspicious splatters, sink
              drama, and all the household messes that make people pause and
              say, “What exactly happened here?”
            </p>

            <div className={styles.profileActions}>
              <Link
                href="/villains/mystery-sticky-spot"
                className={styles.primaryButton}
              >
                See Her Rival
              </Link>

              <Link
                href="/household-team-ups"
                className={styles.secondaryButton}
              >
                View Team-Ups
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <article
              key={stat.label}
              className={styles.statCard}
            >
              <p className={styles.statLabel}>
                {stat.label}
              </p>

              <h2 className={styles.statValue}>
                {stat.value}
              </h2>

              <p className={styles.statText}>
                {stat.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* POWERS */}
      <section className={styles.powersSection}>
        <div className={styles.powersCard}>
          <p className={styles.powersEyebrow}>
            Signature Strengths
          </p>

          <h2 className={styles.powersHeading}>
            What Spritzy brings to the cleanup.
          </h2>

          <div className={styles.powersGrid}>
            {powers.map((power) => (
              <div
                key={power}
                className={styles.powerItem}
              >
                {power}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALITY + QUOTE */}
      <section className={styles.personalitySection}>
        <div className={styles.personalityGrid}>
          <article className={styles.personalityCard}>
            <p className={styles.personalityEyebrow}>
              Personality Report
            </p>

            <h2 className={styles.personalityHeading}>
              Delightful. Loyal. Slightly dramatic.
            </h2>

            <p className={styles.personalityText}>
              Spritzy has the spirit of a motivational coach and the instincts
              of a cleanup first responder. She believes in fresh starts,
              cleaner counters, and the power of not letting sticky things
              become part of the decor.
            </p>

            <p className={styles.personalityTextSecondary}>
              While other people may hesitate in the face of a suspicious mess,
              Spritzy chooses courage, optimism, and immediate intervention.
            </p>
          </article>

          <article className={styles.quoteCard}>
            <p className={styles.quoteEyebrow}>
              Spritzy Says
            </p>

            <h2 className={styles.personalityHeading}>
              “We do not need the full backstory.
              <br />
              We just need a cloth.”
            </h2>

            <p className={styles.quoteText}>
              Spritzy’s approach is simple: no overthinking, no emotional
              negotiations with the mess, and absolutely no long committee
              meeting about whether the sticky spot is still technically there.
            </p>

            <p className={styles.quoteTextSecondary}>
              If it is suspicious, she sprays. If it is sticky, she assists. If
              it is crumbly too, she calls in reinforcements.
            </p>
          </article>
        </div>
      </section>

      {/* FAVORITES */}
      <section className={styles.favoritesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.favoritesHeader}>
            <p className={styles.favoritesEyebrow}>
              Spritzy in Action
            </p>

            <h2 className={styles.favoritesHeading}>
              Best places to spot her.
            </h2>
          </div>

          <div className={styles.favoritesGrid}>
            {favorites.map((item) => (
              <article
                key={item.title}
                className={styles.favoriteCard}
              >
                <h3 className={styles.favoriteTitle}>
                  {item.title}
                </h3>

                <p className={styles.favoriteText}>
                  {item.text}
                </p>

                <Link
                  href={item.href}
                  className={styles.favoriteButton}
                >
                  Visit Page
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <p className={styles.ctaEyebrow}>
            Squad Invitation
          </p>

          <h2 className={styles.ctaHeading}>
            Need backup for a suspicious household situation?
          </h2>

          <p className={styles.ctaDescription}>
            Spritzy is ready to assist with sticky spots, sparkle emergencies,
            and any surface that has started making people uncomfortable.
          </p>

          <div className={styles.ctaActions}>
            <Link
              href="/#squad"
              className={styles.ctaPrimaryButton}
            >
              Meet the Squad
            </Link>

            <Link
              href="/invisible-heroics"
              className={styles.ctaSecondaryButton}
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