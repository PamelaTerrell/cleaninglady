import Image from "next/image";

/* -------------------------------------------------------------------------- */
/* HOUSEHOLD EMERGENCY ALERT                                                  */
/* -------------------------------------------------------------------------- */

const styles = {
  section:
    "px-6 py-16",

  panel:
    "mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border-4 border-[#2f261f] bg-white shadow-[0_24px_70px_rgba(47,38,31,0.16)]",

  /* HEADER */
  header:
    "flex flex-col gap-4 bg-[#2f261f] px-6 py-6 text-white sm:px-8 md:flex-row md:items-center md:justify-between",

  identity:
    "flex items-center gap-4",

  alertIcon:
    "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f4c96d] text-3xl shadow-inner",

  systemLabel:
    "text-xs font-black uppercase tracking-[0.22em] text-[#f4c96d]",

  systemName:
    "mt-1 text-xl font-black sm:text-2xl",

  threatBadge:
    "self-start rounded-full bg-[#f4c96d] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#2f261f] md:self-auto",

  /* MAIN ALERT CONTENT */
  content:
    "grid lg:grid-cols-[1.1fr_0.9fr]",

  bulletin:
    "p-7 sm:p-9 lg:p-10",

  bulletinLabel:
    "text-xs font-black uppercase tracking-[0.22em] text-[#b48635]",

  bulletinHeading:
    "mt-3 text-3xl font-black leading-tight sm:text-4xl",

  bulletinDescription:
    "mt-5 text-lg leading-8 text-[#6a5a4b]",

  advisory:
    "mt-6 rounded-2xl border-l-4 border-[#b48635] bg-[#fffaf2] px-5 py-4 font-bold leading-7 text-[#4a3b30]",

  /* CURRENT CONDITIONS */
  conditions:
    "border-t border-[#eadcc8] bg-[#fffaf2] p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10",

  conditionsHeading:
    "text-xs font-black uppercase tracking-[0.22em] text-[#b48635]",

  conditionsList:
    "mt-5 space-y-3",

  conditionRow:
    "flex items-center justify-between gap-4 border-b border-[#eadcc8] pb-3 text-sm",

  conditionName:
    "font-bold text-[#4a3b30]",

  conditionStatus:
    "text-right text-xs font-black uppercase tracking-[0.12em] text-[#b48635]",

  estimate:
    "mt-6 rounded-2xl bg-white p-5 shadow-sm",

  estimateLabel:
    "text-xs font-black uppercase tracking-[0.18em] text-[#8a7766]",

  estimateValue:
    "mt-2 text-2xl font-black",

  /* INCIDENT IMAGE */
  bulletinImageSection:
    "border-t border-[#eadcc8] bg-white px-7 py-8 sm:px-9 lg:px-10",

  bulletinImageFrame:
    "relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-[#eadcc8] bg-[#fffaf2] shadow-sm",

  bulletinImage:
    "object-cover",

  bulletinImageCaption:
    "mx-auto mt-4 max-w-3xl text-center text-xs font-black uppercase tracking-[0.16em] text-[#8a7766]",

  /* TICKER */
  ticker:
    "border-t-4 border-[#2f261f] bg-[#f4c96d] px-6 py-5 sm:px-8",

  tickerLayout:
    "flex flex-col gap-2 md:flex-row md:items-center md:gap-5",

  tickerLabel:
    "shrink-0 text-xs font-black uppercase tracking-[0.18em] text-[#2f261f]",

  tickerMessage:
    "font-black leading-6 text-[#2f261f]",
};

/* -------------------------------------------------------------------------- */
/* CURRENT HOUSEHOLD CONDITIONS                                               */
/* -------------------------------------------------------------------------- */

const householdConditions = [
  {
    name: "Laundry Mountain",
    status: "Active",
  },
  {
    name: "Dish Goblin",
    status: "Contained",
  },
  {
    name: "Mystery Sticky Spot",
    status: "Under Investigation",
  },
  {
    name: "Sock Portal",
    status: "Expanding",
  },
  {
    name: "Super Handy Man",
    status: "Gone to Get a Tool",
  },
];

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

export default function HouseholdEmergencyAlert() {
  return (
    <section
      className={styles.section}
      aria-labelledby="household-emergency-heading"
    >
      <div className={styles.panel}>
        {/* ALERT HEADER */}
        <div className={styles.header}>
          <div className={styles.identity}>
            <div
              className={styles.alertIcon}
              aria-hidden="true"
            >
              🚨
            </div>

            <div>
              <p className={styles.systemLabel}>
                Super Cleaning Lady Headquarters
              </p>

              <p className={styles.systemName}>
                Household Emergency Alert System
              </p>
            </div>
          </div>

          <div className={styles.threatBadge}>
            Threat Level: Orange
          </div>
        </div>

        {/* ALERT CONTENT */}
        <div className={styles.content}>
          {/* BULLETIN */}
          <div className={styles.bulletin}>
            <p className={styles.bulletinLabel}>
              Situation Developing
            </p>

            <h2
              id="household-emergency-heading"
              className={styles.bulletinHeading}
            >
              A fitted sheet has captured several household items.
            </h2>

            <p className={styles.bulletinDescription}>
              Headquarters has confirmed that a fitted sheet discovered inside
              the dryer is currently containing another fitted sheet, three
              pillowcases, and one sock.
            </p>

            <div className={styles.advisory}>
              Residents are advised not to attempt separation without backup.
              The location of the matching sock remains unknown.
            </div>
          </div>

          {/* CURRENT CONDITIONS */}
          <aside
            className={styles.conditions}
            aria-label="Current household conditions"
          >
            <p className={styles.conditionsHeading}>
              Current Conditions
            </p>

            <div className={styles.conditionsList}>
              {householdConditions.map((condition) => (
                <div
                  key={condition.name}
                  className={styles.conditionRow}
                >
                  <span className={styles.conditionName}>
                    {condition.name}
                  </span>

                  <span className={styles.conditionStatus}>
                    {condition.status}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.estimate}>
              <p className={styles.estimateLabel}>
                Super Handy Man Estimated Return
              </p>

              <p className={styles.estimateValue}>
                “Five minutes.”
              </p>
            </div>
          </aside>
        </div>

        {/* INCIDENT IMAGE */}
        <div className={styles.bulletinImageSection}>
          <div className={styles.bulletinImageFrame}>
            <Image
              src="/household-emergency-spongie.png"
              alt="Spongie dramatically overreacts to a fitted sheet and missing sock emergency in the laundry room"
              fill
              sizes="(max-width: 1023px) 100vw, 1024px"
              className={styles.bulletinImage}
            />
          </div>

          <p className={styles.bulletinImageCaption}>
            Spongie has assessed the situation as extremely alarming.
          </p>
        </div>

        {/* HEADQUARTERS TICKER */}
        <div
          className={styles.ticker}
          aria-label="Breaking news from Super Cleaning Lady Headquarters"
        >
          <div className={styles.tickerLayout}>
            <span className={styles.tickerLabel}>
              ● Breaking
            </span>

            <span className={styles.tickerMessage}>
              The chair in the bedroom has officially lost its furniture status
              and is now classified as a clothing storage facility.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}