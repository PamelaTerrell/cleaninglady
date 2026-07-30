import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#cfe1f7] bg-[#f7fbff] px-5 py-12 text-center sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        {/* BRAND LOGO */}
        <Link
          href="/"
          aria-label="Super Cleaning Lady home"
          className="inline-flex rounded-3xl transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155dcc] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7fbff]"
        >
          <Image
            src="/super-cleaning-lady-header.png"
            alt="Super Cleaning Lady"
            width={600}
            height={360}
            className="h-auto w-[230px] object-contain sm:w-[285px] md:w-[330px]"
          />
        </Link>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#4d6685] sm:text-base">
          Fighting dust, dishes, doom piles, and whatever that is under the
          couch. No shame. No perfection. Just one tiny victory at a time.
        </p>

        {/* FOOTER NAVIGATION */}
        <nav
          aria-label="Footer navigation"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-black"
        >
          <Link
            href="/#missions"
            className="text-[#1757a6] transition hover:text-[#ed3d7f]"
          >
            Missions
          </Link>

          <Link
            href="/#squad"
            className="text-[#1757a6] transition hover:text-[#ed3d7f]"
          >
            Meet the Squad
          </Link>

          <Link
            href="/#villains"
            className="text-[#1757a6] transition hover:text-[#ed3d7f]"
          >
            Villains
          </Link>

          <Link
            href="/invisible-heroics"
            className="text-[#1757a6] transition hover:text-[#ed3d7f]"
          >
            Comics
          </Link>

          <Link
            href="/household-team-ups"
            className="text-[#1757a6] transition hover:text-[#ed3d7f]"
          >
            Team-Ups
          </Link>

          <Link
            href="/#no-shame"
            className="text-[#1757a6] transition hover:text-[#ed3d7f]"
          >
            No Shame
          </Link>
        </nav>

        {/* BRAND MOTTO */}
        <div className="mx-auto mt-9 max-w-3xl rounded-[2rem] border border-[#cfe1f7] bg-white px-6 py-5 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ed3d7f] sm:text-base">
            Clean Home. Clear Mind.{" "}
            <span className="text-[#f0b900]">Super You.</span>
          </p>
        </div>

        <div className="mx-auto mt-9 h-px max-w-2xl bg-[#cfe1f7]" />

        {/* SITE CREDIT */}
        <div className="mt-7 space-y-2 text-xs leading-6 text-[#6d8098]">
          <p>
            A{" "}
            <a
              href="https://stabileusa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#1757a6] underline decoration-[#9fc5ef] underline-offset-4 transition hover:text-[#ed3d7f]"
            >
              StabileUSA.com
            </a>{" "}
            project created by{" "}
            <a
              href="https://pamelajterrell.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#1757a6] underline decoration-[#9fc5ef] underline-offset-4 transition hover:text-[#ed3d7f]"
            >
              PamelaJTerrell.com
            </a>
            .
          </p>

          <p>
            © {new Date().getFullYear()} Super Cleaning Lady. Saving homes from
            chaos, one suspicious sticky spot at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}