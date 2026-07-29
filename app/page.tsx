import type { Metadata } from "next";
import Link from "next/link";
import MissionProgress from "@/components/MissionProgress";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Super Cleaning Lady | Funny Cleaning Motivation",
  description:
    "Funny cleaning missions, relatable household comics, no-shame motivation, and small victories for real homes with real messes.",
};

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
    description: "Scale the pile. Find the floor. Become the legend.",
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

const squad = [
  {
    role: "Team Leader",
    name: "Super Cleaning Lady",
    description:
      "Restores order, defeats mystery grime, and knows exactly where the ratchet set does not live.",
    image: "/scl.png",
    alt: "Super Cleaning Lady wearing her pink cape and holding a spray bottle",
    imageClassName: "h-[92%]",
  },
  {
    role: "Repair Division",
    name: "Super Handy Man",
    description:
      "Fixes the house, owns every tool, and begins most adventures with, “This should only take five minutes.”",
    image: "/shm.png",
    alt: "Super Handy Man wearing glasses, work clothes, and a tool belt",
    imageClassName: "h-[118%]",
  },
  {
    role: "Sparkle Support",
    name: "The Super Spray Bottle",
    description:
      "Armed with cleaning power, a heroic cape, and unwavering faith that every sticky spot can be defeated.",
    image: "/super-spray.png",
    alt: "The Super Spray Bottle wearing a red cape and holding a yellow cleaning cloth",
    imageClassName: "h-[94%]",
  },
  {
    role: "Tiny Sidekick",
    name: "Spongie",
    description:
      "Small sponge. Big confidence. Absolutely no fear of mystery splatter.",
    image: "/spongie.png",
    alt: "Spongie wearing goggles and a red cape while holding a blue duster",
    imageClassName: "h-[122%]",
  },
];

const featuredComic = {
  series: "Invisible Heroics",
  title: "Tinkering Totally Counts",
  image: "/comics/tinkering.png",
  alt: "Super Cleaning Lady completes small cleaning and organizing tasks around the house while following her energy",
  description:
    "No master plan. No full-house reset. Just one pillow fluffed, one surface wiped, one pile handled, and somehow the whole place starts behaving better.",
  quote:
    "You do not have to clean the whole house to make the whole house feel better.",
  relatedHref: "/invisible-heroics",
  relatedLabel: "See More Invisible Heroics",
};

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
      {/* HERO */}
      <section className="mx-auto flex min-h-[68vh] max-w-6xl flex-col items-center justify-center px-6 py-12 text-center md:py-16">
        <img
          src="/clean-squad.png"
          alt="Super Cleaning Lady, Super Handy Man, the Super Spray Bottle, and Spongie standing together"
          className="mb-8 w-full max-w-3xl rounded-[2rem] drop-shadow-2xl lg:max-w-4xl"
        />

        <p className="text-sm font-black uppercase tracking-[0.26em] text-[#b48635]">
          Cleaning motivation for real-life homes
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Your house isn’t messy. It’s just experiencing a plot twist.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#6a5a4b] sm:text-lg md:leading-8">
          Fighting dust, dishes, doom piles, and whatever that is under the
          couch—with rescue missions for homes that are one sock pile away from
          becoming a wildlife habitat.
        </p>

        <div className="mt-8 flex w-full max-w-xl flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#missions"
            className="rounded-full bg-[#2f261f] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl"
          >
            Start a Mission
          </a>

          <a
            href="#invisible-heroics"
            className="rounded-full border border-[#d8c6ad] bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            Read the Comics
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["No shame", "Tiny victories", "Real homes"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#eadcc8] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-[#7a5520] shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <MissionProgress />

      {/* MISSIONS */}
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
            bag, maybe some music, and the courage to face the doom pile.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission) => (
              <Link
                key={mission.title}
                href={mission.href}
                className="group block rounded-3xl border border-[#eadcc8] bg-[#fffaf2] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="overflow-hidden rounded-2xl bg-white">
                  <img
                    src={mission.image}
                    alt={`${mission.title} mission illustration`}
                    className="h-60 w-full object-cover object-top shadow-sm transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="mt-5 text-2xl font-black">{mission.title}</h3>

                <p className="mt-3 leading-7 text-[#6a5a4b]">
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

      {/* MEET THE SQUAD */}
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
              runaway socks, and every tiny domestic emergency hiding in plain
              sight.
            </p>
          </div>

          <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {squad.map((member) => (
              <article
                key={member.name}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
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
                </div>
              </article>
            ))}
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

      {/* VILLAINS */}
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
            Some hide under furniture and answer to “crumbs.” Super Cleaning
            Lady believes no villain is too ridiculous to name and defeat.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {villains.map((villain) => (
              <Link
                key={villain.name}
                href={villain.href}
                className="group rounded-2xl border border-[#eadcc8] bg-[#fffaf2] p-5 text-center font-black shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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

      {/* FEATURED COMIC */}
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
              Small household victories still count.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
              No rigid routine required. Sometimes progress starts by wandering
              toward the next thing that happens to bother you.
            </p>
          </div>

          <article className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
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
                  href="/#missions"
                  className="rounded-full border border-white/30 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  Choose a Mission
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* HOUSEHOLD TEAM-UPS */}
      <section id="team-ups" className="scroll-mt-36 px-6 py-20">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-white shadow-[0_24px_70px_rgba(47,38,31,0.13)] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex min-h-[440px] items-center justify-center overflow-hidden bg-[#2f261f] p-8 sm:p-10">
            <img
              src="/shm.png"
              alt="Super Handy Man wearing glasses, a work shirt, and a tool belt"
              className="h-full max-h-[520px] w-auto max-w-full object-contain drop-shadow-2xl"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              The Saga Continues
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Meet Super Handy Man.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6a5a4b]">
              Follow Super Cleaning Lady and Super Handy Man through ratchet
              sets, supposedly five-minute repairs, missing screws, and the
              temporary chaos created in the name of home improvement.
            </p>

            <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-[#fffaf2] px-6 py-5 text-xl font-bold italic leading-8">
              “He repairs the house. She repairs the aftermath.”
            </blockquote>

            <div className="mt-8">
              <Link
                href="/household-team-ups"
                className="inline-flex rounded-full bg-[#2f261f] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl"
              >
                Read Household Team-Ups
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK RESCUES */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Pick Your Energy Level
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Progress does not require an entire Saturday.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {quickRescues.map((rescue) => (
              <article
                key={rescue.eyebrow}
                className="flex flex-col rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm"
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

      {/* NO SHAME */}
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