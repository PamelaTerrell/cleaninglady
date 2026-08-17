import Link from "next/link";
import Footer from "@/components/Footer";

const heroics = [

  {
  title: "Tinkering Totally Counts",
  slug: "tinkering",
  category: "Everyday Heroics",
  image: "/comics/tinkering.png",
  alt: "Super Cleaning Lady moves around the house completing small cleaning and organizing tasks while following her energy",
  description:
    "No master plan. No full-house reset. Just one pillow fluffed, one surface wiped, one pile handled, and somehow the whole place starts behaving better.",
  punchline:
    "You do not have to clean the whole house to make the whole house feel better.",
  missionHref: "/#missions",
  missionLabel: "Choose a Tiny Mission",
},



  {
  title: "The Coffee Pot Controversy",
  slug: "coffee-pot",
  category: "Kitchen Heroics",
  image: "/comics/coffee-pot.png",
  alt: "Super Cleaning Lady rejects the idea that coffee tastes better from a dirty coffee maker and cleans the pot, basket, and reservoir",
  description:
    "A wise old coffee guru called it seasoning. Super Cleaning Lady called it yesterday’s coffee clinging to the equipment for emotional support.",
  punchline:
    "Clean pot. Clean basket. Clean reservoir. Better coffee.",
  missionHref: "/missions/kitchen-rescue",
  missionLabel: "Start the Kitchen Rescue",
},

  {
    title: "The Power of Clean Sheets",
    slug: "bed-sheets",
    category: "Bedroom Heroics",
    image: "/comics/bed-sheets.png",
    alt: "Super Cleaning Lady compares a messy bed with old sheets to a fresh bed with clean sheets and a much better day",
    description:
      "The old sheets were holding onto crumbs, wrinkles, and several bad decisions. The clean set arrives like a full bedroom reboot.",
    punchline: "Change the sheets. Change the whole vibe.",
    missionHref: "/missions/bedroom-reset",
    missionLabel: "Start the Bedroom Reset",
  },
  {
    title: "Company Is Coming: The Ratchet Set Incident",
    slug: "company-is-coming-ratchet-set",
    category: "Emergency Heroics",
    image: "/comics/company-is-coming-ratchet-set.png",
    alt: "Super Cleaning Lady discovers her husband's ratchet set scattered across the living room five minutes before company arrives",
    description:
      "The text arrives: company will be there in five minutes. The pillows are fluffed. The room looks respectable. And somehow an entire ratchet set has established operations on the coffee table.",
    punchline: "The ratchet set does not live here.",
    missionHref: "/missions/companys-coming",
    missionLabel: "Start the Company’s Coming Mission",
  },
  {
    title: "The Mystery Under the Stove",
    slug: "under-the-stove",
    category: "Kitchen Heroics",
    image: "/comics/under-the-stove.png",
    alt: "Super Cleaning Lady pulls the stove away from the wall and discovers crumbs, grease, pet hair, and dust underneath",
    description:
      "Crumbs fall. Grease splatters. Pet hair drifts. Somehow, it all gathers beneath the stove like it reserved the space months ago.",
    punchline:
      "No crumb bunker survives on Super Cleaning Lady’s watch.",
    missionHref: "/missions/kitchen-rescue",
    missionLabel: "Start the Kitchen Rescue",
  },
  {
    title: "The Forgotten Trash Can",
    slug: "forgotten-trash-can",
    category: "Kitchen Heroics",
    image: "/comics/forgotten-trash-can.png",
    alt: "Super Cleaning Lady heroically washes a dirty household trash can",
    description:
      "Everybody uses it. Nobody remembers that the container itself eventually needs help.",
    punchline:
      "She cleaned the trash can. Society continued as though nothing remarkable had occurred.",
    missionHref: "/missions/kitchen-rescue",
    missionLabel: "Start the Kitchen Rescue",
  },
  {
    title: "The Shower Curtain Liner",
    slug: "shower-curtain-liner",
    category: "Bathroom Heroics",
    image: "/comics/shower-curtain-liner.png",
    alt: "Super Cleaning Lady replaces an old shower curtain liner while everyone else fails to notice",
    description:
      "No applause. No medal. Not even a casual, “Hey, the shower looks better.” Just another household crisis quietly defeated.",
    punchline:
      "Some heroes save the world. Others replace the shower curtain liner before it becomes self-aware.",
    missionHref: "/missions/bathroom-reset",
    missionLabel: "Start the Bathroom Reset",
  },

  {
  title: "The Windowsill Archaeological Dig",
  slug: "windowsill-archaeological-dig",
  category: "Invisible Heroics",
  image: "/comics/windowsill-archaeological-dig.png",
  alt: "Super Cleaning Lady, Spritzy, and Spongie discover an entire archaeological civilization of dust, crumbs, bugs, and forgotten objects while cleaning a windowsill",
  description:
    "It starts with one innocent thought: “I’ll just wipe the windowsill real quick.” Then Spritzy finds evidence of an ancient crumb kingdom, Spongie enters excavation mode, and suddenly everyone is doing archaeology.",
  punchline:
    "Nobody plans to deep-clean a windowsill. Sometimes you just uncover a tiny indoor ecosystem.",
  missionHref: "/missions/living-room-reset",
  missionLabel: "Start the Living Room Reset",
},
];

export default function InvisibleHeroicsPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* HERO */}
<section className="relative overflow-hidden bg-[#2f261f] px-6 py-14 text-white md:py-18 lg:py-20">
  <div
    className="absolute inset-0 opacity-[0.07]"
    aria-hidden="true"
    style={{
      backgroundImage:
        "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
      backgroundSize: "24px 24px",
    }}
  />

  <div
    className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#d9487d]/20 blur-3xl"
    aria-hidden="true"
  />

  <div
    className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#4da6d8]/20 blur-3xl"
    aria-hidden="true"
  />

  <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
    {/* CHARACTER IMAGE */}
    <div className="order-2 flex justify-center lg:order-1">
      <div className="relative">
        <div
          className="absolute inset-10 rounded-full bg-[#f4c96d]/20 blur-3xl"
          aria-hidden="true"
        />

        <img
          src="/scl-and-spongie.png"
          alt="Super Cleaning Lady with her spray bottle and sponge sidekicks"
          className="relative mx-auto w-full max-w-[22rem] drop-shadow-[0_28px_45px_rgba(0,0,0,0.4)] sm:max-w-md lg:max-w-lg"
        />
      </div>
    </div>

    {/* HERO COPY */}
    <div className="order-1 text-center lg:order-2 lg:text-left">
      <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f4c96d]">
        Super Cleaning Lady Presents
      </p>

      <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
        Invisible
        <span className="block text-[#f4c96d]">Heroics</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#f7ead6] md:text-xl lg:mx-0">
        A celebration of the household victories nobody notices—until somebody
        stops doing them.
      </p>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70 lg:mx-0">
        Meet the heroes battling crumbs, mystery splatter, laundry mountains,
        and every tiny domestic crisis hiding in plain sight.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
        <a
          href="#heroics"
          className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.17em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl"
        >
          See the Heroics
        </a>

        <Link
          href="/"
          className="rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.17em] text-white transition hover:-translate-y-1 hover:bg-white/10"
        >
          Back to Headquarters
        </Link>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
        {["Real messes", "Tiny victories", "No judgment"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#f7ead6]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

  

       
           

      {/* INTRO */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
            No parade required
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Real heroes handle the tiny disasters.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6a5a4b]">
            They replace the liner, change the sheets, wipe the mystery
            splatter, empty the forgotten trash can, and somehow know when the
            refrigerator has started growing a new civilization.
          </p>
        </div>
      </section>

      {/* COMIC ARCHIVE */}
      <section id="heroics" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
                The archives
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Recent acts of domestic bravery
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#6a5a4b]">
              More ridiculous, relatable household victories will be added as
              Super Cleaning Lady encounters them.
            </p>
          </div>

          <div className="space-y-14">
            {heroics.map((heroic, index) => (
              <article
                key={heroic.slug}
                className="overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] shadow-[0_24px_70px_rgba(47,38,31,0.12)]"
              >
                <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="bg-white p-4 sm:p-6">
                    <img
                      src={heroic.image}
                      alt={heroic.alt}
                      className="h-auto w-full rounded-[1.75rem]"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#f4c96d] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2f261f]">
                        {heroic.category}
                      </span>

                      <span className="text-sm font-bold text-[#8a7766]">
                        Heroic Act #{heroics.length - index}
                      </span>
                    </div>

                    <h3 className="mt-6 text-4xl font-black leading-tight">
                      {heroic.title}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-[#6a5a4b]">
                      {heroic.description}
                    </p>

                    <blockquote className="mt-7 rounded-2xl border-l-4 border-[#b48635] bg-white p-6 text-xl font-bold italic leading-8 shadow-sm">
                      “{heroic.punchline}”
                    </blockquote>

                    <div className="mt-8">
                      <Link
                        href={heroic.missionHref}
                        className="inline-flex rounded-full bg-[#2f261f] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30]"
                      >
                        {heroic.missionLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOUSEHOLD TEAM-UPS */}
<section className="px-6 py-20">
  <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#2f261f] px-8 py-14 text-center text-white shadow-2xl md:px-14">
    <img
      src="/super-handy-man.png"
      alt="Super Handy Man wearing glasses, a work shirt, and a tool belt"
      className="mx-auto mb-8 w-52 drop-shadow-2xl sm:w-64 md:w-72"
    />

    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
      The saga continues
    </p>

    <h2 className="mt-4 text-4xl font-black md:text-5xl">
      Meet Super Handy Man.
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#f7ead6]">
      Follow Super Cleaning Lady and Super Handy Man through ratchet sets,
      supposedly five-minute repairs, missing screws, and the temporary chaos
      created in the name of home improvement.
    </p>

    <blockquote className="mx-auto mt-7 max-w-2xl rounded-2xl border-l-4 border-[#f4c96d] bg-white/10 px-6 py-5 text-xl font-bold italic leading-8">
      “He repairs the house. She repairs the aftermath.”
    </blockquote>

    <Link
      href="/household-team-ups"
      className="mt-9 inline-flex rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.17em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
    >
      Read Household Team-Ups
    </Link>
  </div>

</section>

      {/* COMING SOON */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#2f261f] px-8 py-14 text-center text-white shadow-2xl md:px-14">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f4c96d] text-4xl shadow-lg">
            ⚡
          </div>

          <p className="mt-7 text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]">
            More reports incoming
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            The invisible work never ends.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#f7ead6]">
            Future cases may involve rogue toilet paper rolls, suspicious
            refrigerator containers, ceiling-fan dust, lonely socks, and trash
            cans nobody remembers owning.
          </p>

          <Link
            href="/#missions"
            className="mt-9 inline-flex rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.17em] text-[#2f261f] transition hover:-translate-y-1 hover:bg-[#ffe19a]"
          >
            Choose a Cleaning Mission
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}