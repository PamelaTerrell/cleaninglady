import Link from "next/link";
import Footer from "@/components/Footer";

const heroics = [
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
];

export default function InvisibleHeroicsPage() {
  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#2f261f] px-6 py-24 text-white">
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f4c96d]">
            Super Cleaning Lady Presents
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
            Invisible Heroics
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#f7ead6] md:text-xl">
            A celebration of the household victories nobody notices—until
            somebody stops doing them.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.17em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a]"
            >
              Back to Headquarters
            </Link>

            <a
              href="#heroics"
              className="rounded-full border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-[0.17em] text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              See the Heroics
            </a>
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
            They replace the liner, wipe the mystery splatter, empty the
            forgotten trash can, and somehow know when the refrigerator has
            started growing a new civilization.
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