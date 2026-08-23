import Image from "next/image";
import Link from "next/link";

/* -------------------------------------------------------------------------- */
/* HEADER STYLES                                                              */
/* -------------------------------------------------------------------------- */

const styles = {
  header:
    "sticky top-0 z-50 border-b border-[#d9e7f8] bg-white/95 shadow-sm backdrop-blur-md",

  headerContainer:
    "mx-auto max-w-7xl px-3 sm:px-5 lg:px-6",

  headerMainRow:
    "flex min-h-[76px] items-center justify-between gap-3 sm:min-h-[92px] lg:min-h-[104px]",

  /* LOGO */
  logoLink:
    "group flex min-w-0 shrink items-center rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155dcc] focus-visible:ring-offset-4",

  logoImage:
    "h-auto w-[150px] object-contain transition duration-200 group-hover:scale-[1.02] sm:w-[190px] md:w-[215px] lg:w-[245px] xl:w-[270px]",

  /* DESKTOP NAVIGATION */
  desktopNavigation:
    "hidden items-center gap-1 lg:flex",

  desktopNavigationLink:
    "rounded-full px-3 py-3 text-xs font-black uppercase tracking-[0.1em] text-[#1757a6] transition hover:bg-[#edf7ff] hover:text-[#ed3d7f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155dcc] xl:px-4",

  /* PRIMARY ACTION */
  missionButton:
    "hidden shrink-0 rounded-full bg-[#155dcc] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#104da9] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd21f] focus-visible:ring-offset-4 sm:inline-flex",

  /* MOBILE / TABLET NAVIGATION */
  mobileNavigation:
    "grid grid-cols-3 gap-2 border-t border-[#d9e7f8] py-3 sm:grid-cols-4 lg:hidden",

  mobileNavigationLink:
    "rounded-full border border-[#cfe1f7] bg-[#f7fbff] px-2 py-2.5 text-center text-[0.61rem] font-black uppercase tracking-[0.06em] text-[#1757a6] shadow-sm transition hover:border-[#ed77a1] hover:bg-white hover:text-[#ed3d7f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155dcc] sm:text-[0.66rem]",
};

/* -------------------------------------------------------------------------- */
/* NAVIGATION                                                                 */
/* -------------------------------------------------------------------------- */

const navigation = [
  {
    label: "Missions",
    href: "/#missions",
  },
  {
    label: "Villains",
    href: "/#villains",
  },
  {
    label: "No-Shame",
    href: "/#no-shame",
  },
  {
    label: "Squad",
    href: "/squad",
  },
  {
    label: "Comics",
    href: "/invisible-heroics",
  },
  {
    label: "Super Handy Man",
    href: "/super-handy-man",
  },
];

/* -------------------------------------------------------------------------- */
/* HEADER                                                                     */
/* -------------------------------------------------------------------------- */

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerMainRow}>
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Super Cleaning Lady home"
            className={styles.logoLink}
          >
            <Image
              src="/super-cleaning-lady-header.png"
              alt="Super Cleaning Lady"
              width={600}
              height={360}
              priority
              sizes="(max-width: 639px) 150px, (max-width: 767px) 190px, (max-width: 1023px) 215px, (max-width: 1279px) 245px, 270px"
              className={styles.logoImage}
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Primary navigation"
            className={styles.desktopNavigation}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.desktopNavigationLink}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* PRIMARY ACTION */}
          <Link
            href="/#missions"
            className={styles.missionButton}
          >
            Start a Mission
          </Link>
        </div>

        {/* TABLET AND MOBILE NAVIGATION */}
        <nav
          aria-label="Mobile navigation"
          className={styles.mobileNavigation}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileNavigationLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}