import Link from "next/link";
import MissionProgress from "@/components/MissionProgress";
import Footer from "@/components/Footer";


const missions = [
  {
    title: "Kitchen Rescue",
    href: "/missions/kitchen-rescue",
    description:
      "For when the counters have disappeared and the sink is staging a rebellion.",
  },
  {
    title: "Bathroom Reset",
    href: "/missions/bathroom-reset",
    description:
      "Because the mirror should not look like it survived a toothpaste explosion.",
  },
  {
    title: "Laundry Mountain",
    href: "/missions/laundry-mountain",
    description: "Scale the pile. Find the floor. Become the legend.",
  },
  {
    title: "Closet Chaos",
    href: "/missions/closet-chaos",
    description:
      "Enter bravely. Sort ruthlessly. Try not to awaken the shoe avalanche.",
  },
  {
    title: "Company’s Coming",
    href: "/missions/companys-coming",
    description:
      "The emergency clean for when someone texts, “We’re five minutes away.”",
  },
  {
    title: "One-Bag Declutter",
    href: "/missions/one-bag-declutter",
    description:
      "One bag. One mission. Fewer things silently judging you from the corner.",
  },
];
 

const villains = [
  {
    name: "The Dish Goblin",
    href: "/villains/dish-goblin",
    image: "/dish-goblin.png",
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
  },
  {
    name: "Crumbzilla",
    href: "/villains/crumbzilla",
  },
  {
    name: "The Paper Pile of Despair",
    href: "/villains/paper-pile-of-despair",
  },
  {
    name: "Mystery Sticky Spot",
    href: "/villains/mystery-sticky-spot",
  },
  {
    name: "The Sock Portal",
    href: "/missions/laundry-mountain",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 rounded-full bg-[#f4dfb4] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#7a5520]">
          Super Cleaning Lady
        </p>

        <img
          src="/superhero-cleaning-bottle-mascot.png"
          alt="Super Cleaning Lady spray bottle superhero mascot"
          className="mb-8 w-44 drop-shadow-xl md:w-60"
        />

        <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
  Your house isn’t messy. It’s just experiencing a plot twist.
</h1>

<p className="mt-6 max-w-2xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
  Fighting dust, dishes, doom piles, and whatever that is under the couch —
  with rescue missions for homes that are one sock pile away from becoming a
  wildlife habitat.
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
    className="block rounded-3xl border border-[#eadcc8] bg-[#fffaf2] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
  >
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
            Some hide under furniture and answer to “crumbs.” Super Cleaning Lady
            believes no villain is too ridiculous to name and defeat.
          </p>

         <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {villains.map((villain) => (
    <Link
      key={villain.name}
      href={villain.href}
      className="group rounded-2xl border border-[#eadcc8] bg-white p-5 text-center font-black shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      {villain.image ? (
        <img
          src={villain.image}
          alt={`${villain.name} villain illustration`}
          className="mx-auto mb-4 h-24 w-24 object-contain drop-shadow-md transition group-hover:scale-105"
        />
      ) : (
        <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#fffaf2] text-3xl shadow-inner">
          ⚠️
        </div>
      )}

      <span>{villain.name}</span>
    </Link>
  ))}
</div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-[2rem] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              10-Minute Rescue
            </p>
            <h3 className="mt-4 text-3xl font-black">For when motivation is missing.</h3>
            <p className="mt-4 leading-7 text-[#6a5a4b]">
              Pick one tiny area, set a timer, and do not negotiate with the
              clutter. The clutter has had enough chances.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#fffaf2] p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
              Emergency Clean
            </p>
            <h3 className="mt-4 text-3xl font-black">For surprise visitors.</h3>
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
              We are not polishing ceiling fans with a toothbrush today. We are
              reclaiming peace and possibly the dining room table.
            </p>
          </div>
        </div>
      </section>

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
      I’m Pamela, and I believe cleaning does not have to feel like punishment.
      This is not a place for perfect pantries, judgmental baseboards, or people
      who fold fitted sheets for fun. Super Cleaning Lady is for real homes,
      real messes, and tiny victories that still count.
    </p>
  </div>
</section>
      <Footer />
    </main>
  );
}