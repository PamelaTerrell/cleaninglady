import Link from "next/link";
import Footer from "@/components/Footer";

export default function VictoryPage({
  searchParams,
}: {
  searchParams: { message?: string };
}) {
  const message =
    searchParams.message ||
    "Mission survived. The house is not perfect, but it has been warned.";

  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#2f261f]">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <img
          src="/cleaning-hero-in-action.png"
          alt="Super Cleaning Lady looking disheveled but victorious"
          className="mb-8 w-48 drop-shadow-xl md:w-64"
        />

        <p className="rounded-full bg-[#f4dfb4] px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#7a5520]">
          Victory Report
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Mission survived.
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6a5a4b]">
          {message}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#missions"
            className="rounded-full bg-[#2f261f] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Choose Another Mission
          </Link>

          <Link
            href="/"
            className="rounded-full border border-[#d8c6ad] bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2f261f] shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            Back to HQ
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}