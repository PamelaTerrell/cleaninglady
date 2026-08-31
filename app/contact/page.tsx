import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Headquarters | Super Cleaning Lady",
  description:
    "Contact Super Cleaning Lady Headquarters for publishing, syndication, licensing, media, collaboration, comic, character, or household emergency inquiries.",
};

/* -------------------------------------------------------------------------- */
/* PAGE STYLES                                                                */
/* -------------------------------------------------------------------------- */

const styles = {
  page:
    "min-h-screen bg-[#fffaf2] text-[#2f261f]",

  /* HERO */
  heroSection:
    "relative overflow-hidden bg-[#2f261f] px-6 py-16 text-white md:py-20",

  heroPattern:
    "absolute inset-0 opacity-[0.06]",

  heroGlowLeft:
    "absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#d9487d]/20 blur-3xl",

  heroGlowRight:
    "absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#4da6d8]/20 blur-3xl",

  heroContent:
    "relative mx-auto max-w-5xl text-center",

  backToHeadquartersLink:
    "inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4c96d]",

  heroLabel:
    "mt-8 text-sm font-black uppercase tracking-[0.28em] text-[#f4c96d]",

  heroTitle:
    "mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-7xl",

  heroDescription:
    "mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#f7ead6] md:text-xl",

  heroStatus:
    "mx-auto mt-8 max-w-2xl rounded-[1.75rem] border border-white/10 bg-white/10 px-6 py-5 text-lg font-bold leading-8",

  /* PUBLISHING OPPORTUNITIES */
  publishingSection:
    "px-6 py-20",

  publishingCard:
    "mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#eadcc8] bg-white shadow-[0_24px_70px_rgba(47,38,31,0.12)]",

  publishingLayout:
    "grid items-stretch lg:grid-cols-[1.1fr_0.9fr]",

  publishingContent:
    "p-8 sm:p-10 lg:p-12",

  publishingLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  publishingTitle:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  publishingDescription:
    "mt-5 text-lg leading-8 text-[#6a5a4b]",

  publishingList:
    "mt-8 grid gap-4 sm:grid-cols-2",

  publishingItem:
    "rounded-[1.5rem] border border-[#eadcc8] bg-[#fffaf2] p-5 font-bold leading-7",

  publishingCallout:
    "flex flex-col justify-center bg-[#2f261f] p-8 text-white sm:p-10 lg:p-12",

  publishingCalloutLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]",

  publishingCalloutTitle:
    "mt-4 text-3xl font-black leading-tight",

  publishingCalloutDescription:
    "mt-5 text-lg leading-8 text-[#f7ead6]",

  publishingCalloutNote:
    "mt-7 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 font-bold leading-7",

  /* CONTACT FORM */
  contactSection:
    "bg-white px-6 py-20",

  contactLayout:
    "mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]",

  formCard:
    "rounded-[2.5rem] border border-[#eadcc8] bg-[#fffaf2] p-8 shadow-sm sm:p-10",

  formLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  formTitle:
    "mt-4 text-4xl font-black leading-tight",

  formDescription:
    "mt-5 text-lg leading-8 text-[#6a5a4b]",

  form:
    "mt-10 space-y-6",

  fieldGroup:
    "space-y-2",

  fieldLabel:
    "block text-sm font-black uppercase tracking-[0.14em] text-[#4d4137]",

  textInput:
    "w-full rounded-2xl border border-[#d9c8ae] bg-white px-5 py-4 text-base text-[#2f261f] outline-none transition placeholder:text-[#9b8b7b] focus:border-[#b48635] focus:ring-2 focus:ring-[#f4c96d]/40",

  selectInput:
    "w-full rounded-2xl border border-[#d9c8ae] bg-white px-5 py-4 text-base text-[#2f261f] outline-none transition focus:border-[#b48635] focus:ring-2 focus:ring-[#f4c96d]/40",

  messageInput:
    "min-h-[220px] w-full resize-y rounded-2xl border border-[#d9c8ae] bg-white px-5 py-4 text-base leading-7 text-[#2f261f] outline-none transition placeholder:text-[#9b8b7b] focus:border-[#b48635] focus:ring-2 focus:ring-[#f4c96d]/40",

  submitButton:
    "inline-flex w-full items-center justify-center rounded-full bg-[#2f261f] px-7 py-4 text-sm font-black uppercase tracking-[0.17em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#4a3b30] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b48635] sm:w-auto",

  responseTimeNote:
    "mt-5 text-sm font-bold leading-6 text-[#8a7766]",

  /* HEADQUARTERS STATUS */
  headquartersCard:
    "rounded-[2.5rem] bg-[#2f261f] p-8 text-white shadow-2xl sm:p-10",

  headquartersLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]",

  headquartersTitle:
    "mt-4 text-4xl font-black leading-tight",

  headquartersDescription:
    "mt-5 text-lg leading-8 text-[#f7ead6]",

  statusList:
    "mt-8 space-y-4",

  statusItem:
    "rounded-[1.5rem] border border-white/10 bg-white/10 p-5",

  statusName:
    "text-lg font-black",

  statusDescription:
    "mt-2 leading-7 text-[#f7ead6]",

  emergencyNotice:
    "mt-8 rounded-[1.5rem] border border-[#f4c96d]/30 bg-[#f4c96d]/10 p-5",

  emergencyNoticeLabel:
    "text-xs font-black uppercase tracking-[0.18em] text-[#f4c96d]",

  emergencyNoticeText:
    "mt-2 leading-7 text-[#f7ead6]",

  /* BUSINESS NOTE */
  businessSection:
    "px-6 py-20",

  businessCard:
    "mx-auto max-w-5xl rounded-[2.5rem] border border-[#eadcc8] bg-white p-8 text-center shadow-sm sm:p-10 md:p-12",

  businessLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#b48635]",

  businessTitle:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  businessDescription:
    "mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#6a5a4b]",

  businessClosing:
    "mx-auto mt-7 max-w-2xl rounded-[1.5rem] bg-[#fffaf2] p-6 text-lg font-bold leading-8",

  /* FINAL CALLOUT */
  finalCalloutSection:
    "px-6 pb-20",

  finalCalloutCard:
    "mx-auto max-w-4xl rounded-[2.5rem] bg-[#2f261f] p-8 text-center text-white shadow-2xl sm:p-10 md:p-14",

  finalCalloutLabel:
    "text-sm font-black uppercase tracking-[0.25em] text-[#f4c96d]",

  finalCalloutTitle:
    "mt-4 text-4xl font-black leading-tight md:text-5xl",

  finalCalloutDescription:
    "mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f7ead6]",

  finalCalloutActions:
    "mt-8 flex flex-col justify-center gap-4 sm:flex-row",

  comicsLink:
    "rounded-full bg-[#f4c96d] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#2f261f] shadow-lg transition hover:-translate-y-1 hover:bg-[#ffe19a] hover:shadow-xl",

  squadLink:
    "rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-1 hover:bg-white/10",
};

/* -------------------------------------------------------------------------- */
/* PAGE CONTENT                                                               */
/* -------------------------------------------------------------------------- */

const publishingOpportunities = [
  "Newspaper comic publication",
  "Recurring comic features",
  "Magazine publication",
  "Digital publication partnerships",
  "Newsletter features",
  "Syndication conversations",
  "Licensing opportunities",
  "Creative collaborations",
];

const headquartersStatus = [
  {
    name: "Super Cleaning Lady",
    description: "On duty and attempting to keep Headquarters operational.",
  },
  {
    name: "Spritzy",
    description: "Fully stocked and suspicious of several nearby surfaces.",
  },
  {
    name: "Spongie",
    description:
      "Emotionally prepared. Operational qualifications remain under review.",
  },
  {
    name: "Super Handy Man",
    description:
      "Has opened a toolbox. Current project scope is no longer known.",
  },
];

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.heroSection}>
        <div
          className={styles.heroPattern}
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div
          className={styles.heroGlowLeft}
          aria-hidden="true"
        />

        <div
          className={styles.heroGlowRight}
          aria-hidden="true"
        />

        <div className={styles.heroContent}>
          <Link
            href="/"
            className={styles.backToHeadquartersLink}
          >
            ← Back to Headquarters
          </Link>

          <p className={styles.heroLabel}>
            Communications Division
          </p>

          <h1 className={styles.heroTitle}>
            Contact Headquarters
          </h1>

          <p className={styles.heroDescription}>
            Have a question, collaboration idea, publishing opportunity,
            household villain sighting, or suspicious situation requiring the
            attention of the squad? Dispatch a message to Headquarters.
          </p>

          <div className={styles.heroStatus}>
            Publishing inquiries are especially welcome. We are actively looking
            for ways to bring the Super Cleaning Lady comic universe to more
            readers.
          </div>
        </div>
      </section>

      {/* PUBLISHING OPPORTUNITIES */}
      <section className={styles.publishingSection}>
        <div className={styles.publishingCard}>
          <div className={styles.publishingLayout}>
            <div className={styles.publishingContent}>
              <p className={styles.publishingLabel}>
                Publishers, Editors & Media Folks
              </p>

              <h2 className={styles.publishingTitle}>
                Want to publish Super Cleaning Lady?
              </h2>

              <p className={styles.publishingDescription}>
                We are actively looking for opportunities to bring Super
                Cleaning Lady, Super Handy Man, Spritzy, Spongie, and the rest
                of the household universe to newspapers, magazines, digital
                publications, newsletters, licensed features, and other creative
                partnerships.
              </p>

              <div className={styles.publishingList}>
                {publishingOpportunities.map((opportunity) => (
                  <div
                    key={opportunity}
                    className={styles.publishingItem}
                  >
                    {opportunity}
                  </div>
                ))}
              </div>
            </div>

            <aside className={styles.publishingCallout}>
              <p className={styles.publishingCalloutLabel}>
                Currently Seeking
              </p>

              <h3 className={styles.publishingCalloutTitle}>
                Places where household chaos deserves a regular audience.
              </h3>

              <p className={styles.publishingCalloutDescription}>
                If you represent a newspaper, magazine, website, newsletter,
                publisher, media company, or another platform interested in
                featuring the comics, we would love to hear from you.
              </p>

              <div className={styles.publishingCalloutNote}>
                Please choose <strong>Publishing / Syndication Opportunity</strong>{" "}
                in the form so Headquarters knows your message involves serious
                business.
                <br />
                <br />
                Well... as serious as a comic universe involving Rollmageddon
                9000™ can be.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className={styles.contactSection}>
        <div className={styles.contactLayout}>
          <div className={styles.formCard}>
            <p className={styles.formLabel}>
              Official Communication Form
            </p>

            <h2 className={styles.formTitle}>
              Dispatch a Household Distress Signal
            </h2>

            <p className={styles.formDescription}>
              Or a publishing opportunity. Or a perfectly ordinary question.
              Headquarters accepts all three.
            </p>

            <form
              action="https://formspree.io/f/mrpgenlq"
              method="POST"
              className={styles.form}
            >
              <div className={styles.fieldGroup}>
                <label
                  htmlFor="name"
                  className={styles.fieldLabel}
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Who is contacting Headquarters?"
                  className={styles.textInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label
                  htmlFor="email"
                  className={styles.fieldLabel}
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className={styles.textInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label
                  htmlFor="organization"
                  className={styles.fieldLabel}
                >
                  Organization or Publication
                </label>

                <input
                  id="organization"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  placeholder="Optional — newspaper, magazine, company, etc."
                  className={styles.textInput}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label
                  htmlFor="inquiry-type"
                  className={styles.fieldLabel}
                >
                  Nature of the Emergency
                </label>

                <select
                  id="inquiry-type"
                  name="inquiryType"
                  required
                  defaultValue=""
                  className={styles.selectInput}
                >
                  <option value="" disabled>
                    Select an inquiry type
                  </option>

                  <option value="publishing-syndication">
                    Publishing / Syndication Opportunity
                  </option>

                  <option value="licensing-partnership">
                    Licensing / Partnership
                  </option>

                  <option value="media">
                    Media Inquiry
                  </option>

                  <option value="collaboration">
                    Creative Collaboration
                  </option>

                  <option value="comic-character">
                    Comic or Character Question
                  </option>

                  <option value="general">
                    General Question
                  </option>

                  <option value="villain-sighting">
                    Household Villain Sighting
                  </option>

                  <option value="handy-man">
                    Super Handy Man Has Made Things Worse
                  </option>

                  <option value="other">
                    Other Mysterious Situation
                  </option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label
                  htmlFor="message"
                  className={styles.fieldLabel}
                >
                  What Happened?
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell Headquarters everything it needs to know..."
                  className={styles.messageInput}
                />
              </div>

              <input
                type="hidden"
                name="_subject"
                value="New Super Cleaning Lady Headquarters Message"
              />

              <button
                type="submit"
                className={styles.submitButton}
              >
                Dispatch to Headquarters →
              </button>
            </form>

            <p className={styles.responseTimeNote}>
              Response time: usually reasonable. Unless Super Handy Man says,
              “This should only take five minutes.”
            </p>
          </div>

          {/* HEADQUARTERS STATUS */}
          <aside className={styles.headquartersCard}>
            <p className={styles.headquartersLabel}>
              Headquarters Status
            </p>

            <h2 className={styles.headquartersTitle}>
              Current operational readiness.
            </h2>

            <p className={styles.headquartersDescription}>
              Conditions may change rapidly if someone discovers a loose screw,
              a mystery splatter, or an improperly stored ratchet set.
            </p>

            <div className={styles.statusList}>
              {headquartersStatus.map((member) => (
                <div
                  key={member.name}
                  className={styles.statusItem}
                >
                  <p className={styles.statusName}>
                    🟢 {member.name}
                  </p>

                  <p className={styles.statusDescription}>
                    {member.description}
                  </p>
                </div>
              ))}
            </div>

            <div className={styles.emergencyNotice}>
              <p className={styles.emergencyNoticeLabel}>
                Actual Emergency Notice
              </p>

              <p className={styles.emergencyNoticeText}>
                If someone is injured, the house is on fire, or something is
                exploding that was not intentionally built by Super Handy Man,
                please contact the appropriate real-world emergency service
                instead.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* BUSINESS NOTE */}
      <section className={styles.businessSection}>
        <div className={styles.businessCard}>
          <p className={styles.businessLabel}>
            Publishing & Partnerships
          </p>

          <h2 className={styles.businessTitle}>
            The comics are looking for a bigger neighborhood.
          </h2>

          <p className={styles.businessDescription}>
            SuperCleaningLady.com began as a creative home for funny,
            encouraging comics about ordinary household life. We are interested
            in thoughtful opportunities that can introduce the characters and
            their no-shame humor to wider audiences.
          </p>

          <div className={styles.businessClosing}>
            Newspaper editors, publishers, syndication contacts, digital media
            teams, newsletter creators, and potential licensing partners:
            please feel very welcome to contact Headquarters.
          </div>
        </div>
      </section>

      {/* FINAL CALLOUT */}
      <section className={styles.finalCalloutSection}>
        <div className={styles.finalCalloutCard}>
          <p className={styles.finalCalloutLabel}>
            While You Are Here
          </p>

          <h2 className={styles.finalCalloutTitle}>
            Headquarters remains open for household nonsense.
          </h2>

          <p className={styles.finalCalloutDescription}>
            Read the latest Invisible Heroics, meet the squad, or investigate
            what Super Handy Man has somehow turned into a three-day project.
          </p>

          <div className={styles.finalCalloutActions}>
            <Link
              href="/invisible-heroics"
              className={styles.comicsLink}
            >
              Read the Comics
            </Link>

            <Link
              href="/squad"
              className={styles.squadLink}
            >
              Meet the Squad
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}