import Link from "next/link";
import MissionProgress from "@/components/MissionProgress";
import Footer from "@/components/Footer";

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
    href: "/missions/laundry-mountain",
    image: "/sock-portal.png",
  },
];

/*
  FEATURED COMIC

  When you create another comic, you can update this object
  without changing the layout farther down the page.
*/
const featuredComic = {
  series: "Invisible Heroics",
  title: "The Shower Curtain Liner",
  image: "/comics/shower-curtain-liner.png",
  alt: "Super Cleaning Lady replaces an old shower curtain liner while everyone else fails to notice",
  description:
    "No applause. No medal. Not even a casual, “Hey, the shower looks better.” Just another household crisis quietly defeated.",
  quote:
    "Some heroes save the world. Others replace the shower curtain liner before it becomes self-aware.",
  relatedHref: "/missions/bathroom-reset",
  relatedLabel: "Start the Bathroom Reset",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* HERO */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <img
          src="/home-superhero-cleaning-bottle-mascot.png"
          alt="Super Cleaning Lady spray bottle superhero mascot"
          className="mb-8 w-96 drop-shadow-xl md:w-[30rem] lg:w-[36rem]"
        />

        <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Your house isn’t messy. It’s just experiencing a plot twist.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          Fighting dust, dishes, doom piles, and whatever that is under the
          couch — with rescue missions for homes that are one sock pile away
          from becoming a wildlife habitat.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#missions"
            className="rounded-full bg-[#2f261f] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Start a Mission
          </a>

          <a
            href="#villains"
            className="rounded-full border border-[#d8c6ad] bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            Meet the Villains
          </a>
        </div>
      </section>

      <MissionProgress />

      {/* MISSIONS */}
      <section id="missions" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Dispatch Center
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl font-black md:text-5xl">
            One room. One reset. One tiny victory over chaos.
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
            You do not need a perfect house. You need a starting point, a trash
            bag, maybe some music, and the courage to face the doom pile.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {missions.map((mission) => (
              <Link
                key={mission.title}
                href={mission.href}
                className="group block rounded-3xl border border-[#eadcc8] bg-[#fffaf2] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={mission.image}
                  alt={`${mission.title} mission illustration`}
                  className="mb-5 h-32 w-full rounded-2xl object-cover object-center shadow-sm transition group-hover:scale-[1.02]"
                />

                <h3 className="text-2xl font-black">{mission.title}</h3>

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

      {/* VILLAINS */}
      <section id="villains" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
            Villains We Fight
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl font-black md:text-5xl">
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
                className="group rounded-2xl border border-[#eadcc8] bg-white p-5 text-center font-black shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={villain.image}
                  alt={`${villain.name} villain illustration`}
                  className="mx-auto mb-5 h-32 w-32 object-contain drop-shadow-md transition group-hover:scale-105"
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
        className="overflow-hidden bg-[#2f261f] px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4c96d]">
              Meanwhile at Super Cleaning Lady Headquarters…
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Household victories nobody notices.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
              Welcome to the glamorous world of invisible labor, where the
              bathroom improves mysteriously and nobody asks how.
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
  href="/invisible-heroics"
  className="rounded-full border border-white/30 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
>
  See More Heroics
</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* QUICK RESCUES */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-[2rem] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              10-Minute Rescue
            </p>

            <h3 className="mt-4 text-3xl font-black">
              For when motivation is missing.
            </h3>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Pick one tiny area, set a timer, and do not negotiate with the
              clutter. The clutter has had enough chances.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Emergency Clean
            </p>

            <h3 className="mt-4 text-3xl font-black">
              For surprise visitors.
            </h3>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              The doorbell is not a drill. Hide the chaos, wipe the obvious,
              light a candle, and act natural.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Good Enough Glory
            </p>

            <h3 className="mt-4 text-3xl font-black">For real-life homes.</h3>

            <p className="mt-4 leading-7 text-[#6a5a4b]">
              We are not polishing ceiling fans with a toothbrush today. We
              are reclaiming peace and possibly the dining room table.
            </p>
          </div>
        </div>
      </section>

      {/* NO SHAME */}
      <section id="no-shame" className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-[#2f261f] p-10 text-center text-white shadow-2xl">
          <img
            src="/cleaning-hero-in-action.png"
            alt="Super Cleaning Lady looking a little disheveled after battling household chaos"
            className="mx-auto mb-8 w-44 drop-shadow-xl md:w-52"
          />

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f4dfb4]">
            No shame. No perfection.
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Just one rescue mission at a time.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#f7ead6]">
            I’m Pamela, and I believe cleaning does not have to feel like
            punishment. This is not a place for perfect pantries, judgmental
            baseboards, or people who fold fitted sheets for fun. Super
            Cleaning Lady is for real homes, real messes, and tiny victories
            that still count.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}