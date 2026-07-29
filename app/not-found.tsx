import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fffaf2] px-6 py-16 text-[#2f261f]">
      <section className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b48635]">
          Mission Error 404
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
          This page entered the Sock Portal.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6a5a4b] md:text-xl">
          We checked behind the dryer, inside the fitted sheet, and under the
          laundry basket. The page is still missing.
        </p>

        <div className="relative mt-10 w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-white p-5 shadow-2xl">
          <img
            src="/sock-portal.png"
            alt="The Sock Portal, a mischievous purple laundry vortex stealing socks"
            className="h-auto w-full rounded-[1.75rem]"
          />
        </div>

        <blockquote className="mx-auto mt-8 max-w-2xl rounded-2xl border-l-4 border-[#b48635] bg-white px-6 py-5 text-xl font-bold italic leading-8 shadow-sm">
          “The page remains missing. Super Handy Man remains extremely
          optimistic.”
        </blockquote>

        <div className="mt-9 flex w-full max-w-xl flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-[#2f261f] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl"
          >
            Return to Headquarters
          </Link>

          <Link
            href="/#missions"
            className="rounded-full border border-[#d8c6ad] bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            Choose a Mission
          </Link>
        </div>

        <div className="mt-12 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
          <Link
            href="/invisible-heroics"
            className="rounded-[2rem] border border-[#eadcc8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
              Comic Archive
            </p>

            <h2 className="mt-3 text-2xl font-black">Invisible Heroics</h2>

            <p className="mt-3 leading-7 text-[#6a5a4b]">
              Read the household victories nobody notices.
            </p>
          </Link>

          <Link
            href="/household-team-ups"
            className="rounded-[2rem] border border-[#eadcc8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
              Ongoing Saga
            </p>

            <h2 className="mt-3 text-2xl font-black">Household Team-Ups</h2>

            <p className="mt-3 leading-7 text-[#6a5a4b]">
              Follow the repairs, tools, and temporary chaos.
            </p>
          </Link>

          <Link
            href="/villains/sock-portal"
            className="rounded-[2rem] border border-[#eadcc8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b48635]">
              Prime Suspect
            </p>

            <h2 className="mt-3 text-2xl font-black">Investigate the Portal</h2>

            <p className="mt-3 leading-7 text-[#6a5a4b]">
              Review the evidence behind the missing page.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}