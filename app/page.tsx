import type { Metadata } from "next";
import Link from "next/link";
import MissionProgress from "@/components/MissionProgress";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Super Cleaning Lady | Funny Cleaning Motivation",
  description:
    "Funny cleaning missions, household comics, ridiculous villains, no-shame motivation, and small victories for real homes with real messes.",
};

/* -------------------------------------------------------------------------- */
/*                                   MISSIONS                                 */
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
/*                                  VILLAINS                                  */
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
/*                                    SQUAD                                   */
/* -------------------------------------------------------------------------- */

const squad = [
  {
    role: "Team Leader",
    name: "Super Cleaning Lady",
    description:
      "Restores order, defeats mystery grime, and knows exactly where the ratchet set does not live.",
    image: "/scl.png",
    alt: "Super Cleaning Lady wearing her pink cape and holding a spray bottle",
    imageClassName: "h-[92%]",
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
    imageClassName: "h-[118%]",
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
    imageClassName: "h-[94%]",
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
    imageClassName: "h-[122%]",
    href: "/spongie",
    cta: "Enter Tiny Emergency Division",
  },
];

/* -------------------------------------------------------------------------- */
/*                              FEATURED COMIC                                */
/* -------------------------------------------------------------------------- */

const featuredComic = {
  series: "Laundry Heroics",
  title: "The Wrinkle Summit",
  image: "/comics/wrinkle-summit.png",
  alt: "Super Cleaning Lady and the cleaning squad attend a hilarious wrinkle-removal convention featuring irons, steamers, dryer tricks, and questionable alternative methods",
  description:
    "Irons. Steamers. Damp towels. Dryer tricks. Mattress pressing. And several techniques that probably should not have made it past the convention planning committee. The world’s greatest minds have gathered for one mission: defeat the wrinkle.",
  quote: "When the shirt is wrinkled, the competition gets personal.",
  relatedHref: "/missions/laundry-mountain",
  relatedLabel: "Start Laundry Mountain",
};

/* -------------------------------------------------------------------------- */
/*                              QUICK RESCUES                                 */
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.28]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #f4c96d 0, transparent 28%), radial-gradient(circle at 80% 30%, #dceeff 0, transparent 30%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[68vh] max-w-6xl flex-col items-center justify-center px-5 py-12 text-center sm:px-6 md:py-16">
          <img
            src="/full-squad.png"
            alt="Super Cleaning Lady, Super Handy Man, Spritzy, and Spongie standing together"
            className="mb-8 w-full max-w-3xl rounded-[2rem] drop-shadow-2xl lg:max-w-4xl"
          />

          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#b48635] sm:text-sm">
            Cleaning motivation for real-life homes
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Your house isn’t messy.
            <span className="block">
              It’s just experiencing a plot twist.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#6a5a4b] sm:text-lg md:leading-8">
            Fighting dust, dishes, doom piles, rogue tools, runaway socks, and
            whatever that is under the couch—with rescue missions for homes that
            are one laundry basket away from becoming an ecosystem.
          </p>

          <div className="mt-8 flex w-full max-w-xl flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#missions"
              className="rounded-full bg-[#2f261f] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
            >
              Start a Mission
            </a>

            <a
              href="#invisible-heroics"
              className="rounded-full border border-[#d8c6ad] bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
            >
              Read the Comics
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "No shame",
              "Tiny victories",
              "Real homes",
              "Questionable villains",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#eadcc8] bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-[#7a5520] shadow-sm backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <MissionProgress />

      {/* ================================================================== */}
      {/* MISSIONS                                                           */}
      {/* ================================================================== */}

      <section id="missions" className="scroll-mt-36 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Dispatch Center
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            One room. One reset. One tiny victory over chaos.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
            You do not need a perfect house. You need a starting point, a trash
            bag, maybe some music, and the courage to face whatever has been
            quietly getting on your nerves.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission) => (
              <Link
                key={mission.title}
                href={mission.href}
                className="group flex h-full flex-col rounded-3xl border border-[#eadcc8] bg-[#fffaf2] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
              >
                <div className="overflow-hidden rounded-2xl bg-white">
                  <img
                    src={mission.image}
                    alt={`${mission.title} mission illustration`}
                    className="h-60 w-full object-cover object-top shadow-sm transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="mt-5 text-2xl font-black">
                  {mission.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-[#6a5a4b]">
                  {mission.description}
                </p>

                <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#b48635]">
                  Open Mission →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MEET THE SQUAD                                                     */}
      {/* ================================================================== */}

      <section id="squad" className="scroll-mt-36 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Meet the Squad
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Every household crisis needs the right hero.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              Together, they battle dust, clutter, questionable repairs,
              runaway socks, mystery splatter, and every tiny domestic emergency
              hiding in plain sight.
            </p>
          </div>

          <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {squad.map((member) => {
              const content = (
                <>
                  <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#fffaf2] p-5 sm:h-80">
                    <div
                      className="absolute h-44 w-44 rounded-full bg-[#f4c96d]/20 blur-3xl"
                      aria-hidden="true"
                    />

                    <img
                      src={member.image}
                      alt={member.alt}
                      className={`relative w-auto max-w-full object-contain drop-shadow-xl transition duration-300 group-hover:scale-[1.03] ${member.imageClassName}`}
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b48635]">
                      {member.role}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight">
                      {member.name}
                    </h3>

                    <p className="mt-4 flex-1 leading-7 text-[#6a5a4b]">
                      {member.description}
                    </p>

                    {member.cta && (
                      <p className="mt-6 text-xs font-black uppercase tracking-[0.15em] text-[#b48635]">
                        {member.cta} →
                      </p>
                    )}
                  </div>
                </>
              );

              if (member.href) {
                return (
                  <Link
                    key={member.name}
                    href={member.href}
                    className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <article
                  key={member.name}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-white shadow-sm"
                >
                  {content}
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/invisible-heroics"
              className="rounded-full bg-[#2f261f] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl"
            >
              See Invisible Heroics
            </Link>

            <Link
              href="/household-team-ups"
              className="rounded-full border border-[#d8c6ad] bg-white px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              Read the Team-Ups
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* VILLAINS                                                           */}
      {/* ================================================================== */}

      <section id="villains" className="scroll-mt-36 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Villains We Fight
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            Every home has enemies. Some are sticky.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
            Some villains live in the sink. Some multiply in laundry baskets.
            Some hide beneath furniture and answer to “crumbs.” No household
            nuisance is too ridiculous to identify, name, and defeat.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {villains.map((villain) => (
              <Link
                key={villain.name}
                href={villain.href}
                className="group rounded-2xl border border-[#eadcc8] bg-[#fffaf2] p-5 text-center font-black shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
              >
                <img
                  src={villain.image}
                  alt={`${villain.name} household villain illustration`}
                  className="mx-auto mb-5 h-36 w-36 object-contain drop-shadow-md transition duration-300 group-hover:scale-105"
                />

                <span>{villain.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FEATURED COMIC                                                     */}
      {/* ================================================================== */}

      <section
        id="invisible-heroics"
        className="scroll-mt-36 overflow-hidden bg-[#2f261f] px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4c96d]">
              Latest Incident Report
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Household problems have officially become competitive.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
              Somewhere between an iron, a steamer, and a person trying to press
              a shirt beneath a mattress, wrinkle removal became a spectator
              sport.
            </p>
          </div>

          <article className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[2rem] border-4 border-white/10 bg-white shadow-2xl">
              <img
                src={featuredComic.image}
                alt={featuredComic.alt}
                className="h-auto w-full"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f4c96d]">
                {featuredComic.series}
              </p>

              <h3 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                {featuredComic.title}
              </h3>

              <p className="mt-6 text-lg leading-8 text-[#f7ead6]">
                {featuredComic.description}
              </p>

              <blockquote className="mt-7 rounded-r-2xl border-l-4 border-[#f4c96d] bg-white/5 px-6 py-5 text-xl font-bold italic leading-8">
                “{featuredComic.quote}”
              </blockquote>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href={featuredComic.relatedHref}
                  className="rounded-full bg-[#f4c96d] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
                >
                  {featuredComic.relatedLabel}
                </Link>

                <Link
                  href="/invisible-heroics"
                  className="rounded-full border border-white/30 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  Read More Comics
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SUPER HANDY MAN                                                    */}
      {/* ================================================================== */}

      <section id="team-ups" className="scroll-mt-36 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-white shadow-[0_24px_70px_rgba(47,38,31,0.13)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden bg-[#2f261f] p-8 sm:p-10">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
                    backgroundSize: "22px 22px",
                  }}
                />

                <div
                  className="absolute h-72 w-72 rounded-full bg-[#f4c96d]/10 blur-3xl"
                  aria-hidden="true"
                />

                <img
                  src="/shm.png"
                  alt="Super Handy Man wearing glasses, a work shirt, and a tool belt"
                  className="relative h-full max-h-[520px] w-auto max-w-full object-contain drop-shadow-2xl"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#f4c96d] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2f261f]">
                    Repair Division
                  </span>

                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#8a7766]">
                    Estimated time: five minutes
                  </span>
                </div>

                <p className="mt-7 text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
                  The Five-Minute Fix Division
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                  Meet Super Handy Man.
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
                  Repair specialist. Tool enthusiast. Temporary chaos
                  generator. Every project begins with confidence, several
                  tools, and one dangerously optimistic estimate.
                </p>

                <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-[#fffaf2] px-6 py-5 text-xl font-black italic leading-8">
                  “Every problem has a solution. Especially this one.”
                </blockquote>

                <p className="mt-5 font-bold italic leading-7 text-[#8a7766]">
                  Although lately he has been wondering whether every solution
                  has a problem.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/super-handy-man"
                    className="rounded-full bg-[#2f261f] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
                  >
                    Meet Super Handy Man
                  </Link>

                  <Link
                    href="/household-team-ups"
                    className="rounded-full border border-[#d8c6ad] bg-[#fffaf2] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635]"
                  >
                    Read the Team-Ups
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* QUICK SHM TEASER */}
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[#eadcc8] bg-white p-5 text-center shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                Estimated Time
              </p>
              <p className="mt-2 text-2xl font-black">5 Minutes</p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadcc8] bg-white p-5 text-center shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                Tool Requirement
              </p>
              <p className="mt-2 text-2xl font-black">All of Them</p>
            </div>

            <div className="rounded-[1.5rem] border border-[#eadcc8] bg-white p-5 text-center shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                Extra Screws
              </p>
              <p className="mt-2 text-2xl font-black">Probably Normal</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* QUICK RESCUES                                                      */}
      {/* ================================================================== */}

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Pick Your Energy Level
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Progress does not require an entire Saturday.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6a5a4b]">
              Ten minutes still counts. One bag still counts. Cleaning the thing
              that is bothering you most and ignoring everything else also
              counts.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {quickRescues.map((rescue) => (
              <article
                key={rescue.eyebrow}
                className="flex flex-col rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
                  {rescue.eyebrow}
                </p>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  {rescue.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-[#6a5a4b]">
                  {rescue.description}
                </p>

                <Link
                  href={rescue.href}
                  className="mt-7 text-sm font-black uppercase tracking-[0.16em] text-[#b48635] transition hover:text-[#7a5520]"
                >
                  {rescue.label} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* NO SHAME                                                          */}
      {/* ================================================================== */}

      <section id="no-shame" className="scroll-mt-36 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl sm:p-10 md:p-14">
          <img
            src="/cleaning-hero-in-action.png"
            alt="Super Cleaning Lady looking a little disheveled after battling household chaos"
            className="mx-auto mb-8 w-44 drop-shadow-xl md:w-52"
          />

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
            No shame. No perfection.
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Just one rescue mission at a time.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            I’m Pamela, and I believe cleaning does not have to feel like
            punishment. This is not a place for perfect pantries, judgmental
            baseboards, or people who fold fitted sheets for fun. Super Cleaning
            Lady is for real homes, real messes, and tiny victories that still
            count.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#missions"
              className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
            >
              Start Somewhere Small
            </Link>

            <Link
              href="/invisible-heroics"
              className="rounded-full border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
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