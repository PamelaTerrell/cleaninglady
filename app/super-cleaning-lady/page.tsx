import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Super Cleaning Lady | Restoration & Rescue Command",
  description:
    "Meet Super Cleaning Lady, defender of real homes, tiny victories, clean surfaces, and no-shame rescue missions.",
};

const specialties = [
  {
    label: "Primary Mission",
    value: "Restore Civilization",
    description:
      "Reclaiming rooms that have quietly surrendered to clutter, laundry, crumbs, and mystery objects.",
  },
  {
    label: "Special Ability",
    value: "Seeing the Starting Point",
    description:
      "When the whole house feels overwhelming, she finds the one thing that will make everything feel slightly better.",
  },
  {
    label: "Battle Philosophy",
    value: "Progress Over Perfection",
    description:
      "A cleaner counter counts. One finished load counts. Taking out the trash absolutely counts.",
  },
  {
    label: "Natural Habitat",
    value: "Real-Life Homes",
    description:
      "Especially homes containing people, pets, dishes, shoes, laundry, snacks, and evidence of daily life.",
  },
  {
    label: "Known Weakness",
    value: "The Doom Pile",
    description:
      "That one pile containing mail, chargers, receipts, a sock, three pens, and something nobody wants to identify.",
  },
  {
    label: "Victory Condition",
    value: "Better Than Before",
    description:
      "Not magazine-perfect. Not spotless. Just calmer, cleaner, and noticeably less annoying.",
  },
];

const rules = [
  {
    number: "01",
    title: "No shame.",
    description:
      "Mess is not a moral failure. Homes get used. Laundry multiplies. Dishes return. This is normal.",
  },
  {
    number: "02",
    title: "No perfection.",
    description:
      "We are not preparing the house for architectural photography. We are making life easier.",
  },
  {
    number: "03",
    title: "Start where it bothers you.",
    description:
      "The most strategic cleaning plan is sometimes simply fixing the thing you are tired of looking at.",
  },
  {
    number: "04",
    title: "Tiny victories count.",
    description:
      "One drawer. One bag. One clear chair. One clean sink. Victory does not require an entire Saturday.",
  },
];

const missions = [
  {
    title: "Kitchen Rescue",
    href: "/missions/kitchen-rescue",
    image: "/dish-goblin.png",
    eyebrow: "Kitchen Command",
    description:
      "Counters buried. Sink rebelling. Dish Goblin gaining confidence. Time to restore order.",
  },
  {
    title: "Bathroom Reset",
    href: "/missions/bathroom-reset",
    image: "/toothpaste-splatter.png",
    eyebrow: "Bathroom Command",
    description:
      "Mirrors, counters, mystery splatter, and everything nobody notices until suddenly they do.",
  },
  {
    title: "Bedroom Reset",
    href: "/missions/bedroom-reset",
    image: "/comics/bed-sheets.png",
    eyebrow: "Bedroom Command",
    description:
      "Fresh sheets, calmer surfaces, and one fitted-sheet confrontation standing between you and victory.",
  },
  {
    title: "Laundry Mountain",
    href: "/missions/laundry-mountain",
    image: "/laundry-mountain.png",
    eyebrow: "Fabric Emergency",
    description:
      "Scale the pile, recover the chair, and determine whether those clothes are clean, dirty, or emotionally complicated.",
  },
  {
    title: "Closet Chaos",
    href: "/missions/closet-chaos",
    image: "/closet-chaos.png",
    eyebrow: "Containment Operation",
    description:
      "Enter carefully. The shoe avalanche risk is no longer theoretical.",
  },
  {
    title: "One-Bag Declutter",
    href: "/missions/one-bag-declutter",
    image: "/one-bag-declutter.png",
    eyebrow: "Low-Energy Rescue",
    description:
      "One bag. One small area. One less collection of objects silently judging you.",
  },
];

const victories = [
  {
    title: "The Shower Curtain Liner",
    image: "/comics/shower-curtain-liner.png",
    quote:
      "Some heroes save the world. Others replace the shower curtain liner before it becomes self-aware.",
  },
  {
    title: "The Mystery Under the Stove",
    image: "/comics/under-the-stove.png",
    quote: "No crumb bunker survives on Super Cleaning Lady’s watch.",
  },
  {
    title: "The Power of Clean Sheets",
    image: "/comics/bed-sheets.png",
    quote: "Change the sheets. Change the whole vibe.",
  },
  {
    title: "The Shoe Committee",
    image: "/comics/shoe-committee.png",
    quote: "The committee has reached a sole-ution.",
  },
];

const villains = [
  {
    name: "The Dish Goblin",
    image: "/dish-goblin-friendly.png",
    href: "/villains/dish-goblin",
    weakness: "An empty sink.",
  },
  {
    name: "The Doom Basket",
    image: "/doom-basket.png",
    href: "/villains/doom-basket",
    weakness: "Putting things where they actually belong.",
  },
  {
    name: "Crumbzilla",
    image: "/crumbzilla.png",
    href: "/villains/crumbzilla",
    weakness: "Vacuum technology.",
  },
  {
    name: "Mystery Sticky Spot",
    image: "/mystery-sticky-spot.png",
    href: "/villains/mystery-sticky-spot",
    weakness: "Persistence and perhaps gloves.",
  },
];

const squad = [
  {
    name: "Super Handy Man",
    role: "Repair Division",
    image: "/shm.png",
    href: "/super-handy-man",
    description:
      "Fixes what is broken and temporarily relocates half the garage into the house.",
  },
  {
    name: "Spritzy",
    role: "Surface Recovery",
    image: "/super-spray.png",
    href: "/spritzy",
    description:
      "Specialist in fingerprints, mystery residue, sticky spots, and sparkle restoration.",
  },
  {
    name: "Spongie",
    role: "Morale Division",
    image: "/spongie.png",
    href: "/spongie",
    description:
      "Small sponge. Big confidence. Questionable qualifications. Excellent attitude.",
  },
];

export default function SuperCleaningLadyPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#2f261f] text-white">
        <div
          className="absolute inset-0 opacity-[0.05]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-6 md:pb-20 md:pt-10">
          <div className="mb-7 flex justify-center">
            <Link
              href="/"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]"
            >
              ← Back to Headquarters
            </Link>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl sm:rounded-[2.5rem]">
            <img
              src="/super-cleaning-lady-hero.png"
              alt="Super Cleaning Lady standing confidently in a hilariously chaotic real-life home ready to begin a rescue mission"
              className="h-auto w-full"
            />
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f4c96d]">
              Restoration & Rescue Command
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Super Cleaning Lady
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#f7ead6] md:text-xl">
              Defender of real homes, tiny victories, clean surfaces, and the
              radical belief that your house does not need to be perfect to feel
              better.
            </p>

            <blockquote className="mx-auto mt-7 max-w-3xl text-xl font-black italic leading-8 text-[#f4c96d] sm:text-2xl">
              “No shame. No perfection. Just one rescue mission at a time.”
            </blockquote>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#missions"
                className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl"
              >
                Choose a Rescue Mission
              </a>

              <Link
                href="/invisible-heroics"
                className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                See Her Heroics
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL HERO FILE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Official Hero File
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Fighting household chaos without judging the household.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              Her specialty is not perfection. It is walking into the mess,
              finding the next useful thing to do, and making the room feel
              better than it did ten minutes ago.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((item) => (
              <article
                key={item.label}
                className="rounded-[2rem] border border-[#eadcc8] bg-white p-7 shadow-sm"
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b48635]">
                  {item.label}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight">
                  {item.value}
                </h3>

                <p className="mt-4 leading-7 text-[#6a5a4b]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE SCL CODE */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              The Super Cleaning Lady Code
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              The house works for you. Not the other way around.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {rules.map((rule) => (
              <article
                key={rule.number}
                className="relative overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm"
              >
                <span className="text-6xl font-black text-[#f4c96d]/50">
                  {rule.number}
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  {rule.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                  {rule.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section
        id="missions"
        className="scroll-mt-32 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Rescue Dispatch
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Where does the house need backup?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              Pick the room or problem that is bothering you most. That is
              enough of a plan.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission) => (
              <Link
                key={mission.title}
                href={mission.href}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden bg-[#fffaf2]">
                  <img
                    src={mission.image}
                    alt={`${mission.title} mission illustration`}
                    className="h-60 w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b48635]">
                    {mission.eyebrow}
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    {mission.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-[#6a5a4b]">
                    {mission.description}
                  </p>

                  <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-[#b48635]">
                    Start Mission →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INVISIBLE HEROICS */}
      <section className="bg-[#2f261f] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
              Invisible Heroics
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Nobody noticed. She did it anyway.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#f7ead6]">
              Some household victories receive no applause, no medal, and not
              even a casual “Hey, that looks better.” They still count.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {victories.map((victory) => (
              <article
                key={victory.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
              >
                <div className="bg-white p-4">
                  <img
                    src={victory.image}
                    alt={`${victory.title} comic`}
                    className="h-auto w-full rounded-[1.5rem]"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-3xl font-black">
                    {victory.title}
                  </h3>

                  <blockquote className="mt-5 border-l-4 border-[#f4c96d] pl-5 text-lg font-bold italic leading-7 text-[#f7ead6]">
                    “{victory.quote}”
                  </blockquote>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/invisible-heroics"
              className="inline-flex rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
            >
              See More Invisible Heroics
            </Link>
          </div>
        </div>
      </section>

      {/* VILLAINS */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Known Adversaries
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Every hero needs ridiculous enemies.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              Some lurk beneath furniture. Some occupy sinks. Some begin as one
              innocent basket and slowly acquire jurisdiction over an entire
              room.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {villains.map((villain) => (
              <Link
                key={villain.name}
                href={villain.href}
                className="group rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={villain.image}
                  alt={`${villain.name} household villain`}
                  className="mx-auto h-40 w-40 object-contain drop-shadow-lg transition duration-300 group-hover:scale-105"
                />

                <h3 className="mt-5 text-2xl font-black">
                  {villain.name}
                </h3>

                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                  Known Weakness
                </p>

                <p className="mt-2 leading-6 text-[#6a5a4b]">
                  {villain.weakness}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NO-SHAME FIELD DIRECTIVE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 shadow-sm sm:p-10 md:p-14">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Field Directive
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              You are allowed to stop before the whole house is done.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              Clean the sink and stop. Fold one basket and stop. Clear the
              dining room table and declare victory. A useful home does not have
              to be a finished project.
            </p>
          </div>

          <div className="mx-auto mt-9 grid max-w-4xl gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] bg-[#fffaf2] p-6 text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                One Room
              </p>
              <p className="mt-2 text-2xl font-black">
                Counts
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#fffaf2] p-6 text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                Ten Minutes
              </p>
              <p className="mt-2 text-2xl font-black">
                Counts
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#fffaf2] p-6 text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
                Good Enough
              </p>
              <p className="mt-2 text-2xl font-black">
                Absolutely Counts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SQUAD */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
              Backup Has Arrived
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Even Super Cleaning Lady has a team.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
              One fixes things. One handles surface recovery. One has no idea
              what is happening but remains extremely supportive.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {squad.map((member) => (
              <Link
                key={member.name}
                href={member.href}
                className="group overflow-hidden rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-white p-6">
                  <div
                    className="absolute h-40 w-40 rounded-full bg-[#f4c96d]/20 blur-3xl"
                    aria-hidden="true"
                  />

                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative h-full w-auto max-w-full object-contain drop-shadow-xl transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b48635]">
                    {member.role}
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    {member.name}
                  </h3>

                  <p className="mt-4 leading-7 text-[#6a5a4b]">
                    {member.description}
                  </p>

                  <p className="mt-6 text-sm font-black uppercase tracking-[0.16em] text-[#b48635]">
                    Meet {member.name} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl sm:p-10 md:p-14">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
            Current Mission Status
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            The house does not need saving all at once.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            Pick one thing. Make it better. Enjoy the tiny victory. The rest of
            the house will still be there when you are ready.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#missions"
              className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl"
            >
              Start a Rescue Mission
            </Link>

            <Link
              href="/invisible-heroics"
              className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10"
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