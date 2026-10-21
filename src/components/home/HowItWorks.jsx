import Container from "../ui/Container";
import {
  Globe,
  Infinity as MetaInfinity,
  Zap,
  Users2,
  TrendingUp,
} from "lucide-react";

const STEPS = [
  {
    id: "capture-leads",
    title: "Capture Leads",
    description:
      "Bring leads from your Website, Meta Ads, and Justdial into one CRM inbox.",
  },
  {
    id: "track-manage",
    title: "Track & Manage",
    description:
      "Assign leads to your team, update statuses, and keep all opportunities organized.",
  },
  {
    id: "close-grow",
    title: "Close & Grow",
    description:
      "Follow up faster, convert more leads into clients, and grow your revenue.",
  },
];

const HOW_TO_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Capture leads in 3 simple steps with WorkSensy CRM",
  description:
    "Connect your website, Meta, and Justdial to capture and convert leads faster.",
  step: STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.description,
  })),
};

const CARD =
  "group flex items-start gap-3.5 sm:gap-5 rounded-[18px] sm:rounded-[20px] border border-[#eeecf9] bg-white p-4 sm:p-6 shadow-[0_8px_28px_rgba(91,19,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(91,19,255,0.1)] lg:p-5 xl:p-6";

const STEP_NUMBER =
  "flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#5b13ff] text-[15px] sm:text-[18px] font-bold text-white shadow-[0_6px_18px_rgba(91,19,255,0.35)]";

const CARD_TITLE =
  "text-[16px] sm:text-[19px] font-bold leading-snug text-[#0d0f19] lg:text-[18px] xl:text-[19px]";

const CARD_DESC =
  "mt-1 text-[12.5px] sm:text-[14px] leading-relaxed text-[#64748b]";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="section-spacing scroll-mt-20 lg:scroll-mt-24 relative overflow-hidden border-0 bg-transparent"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_JSON_LD) }}
      />

      {/* Soft decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[#5b13ff]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#8a2dfa]/5 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* ============ LEFT: HEADER ============ */}
          <header className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#e9dcff] bg-[#f4effe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5b13ff]">
              How it works
            </span>

            <h2
              id="how-it-works-heading"
              className="text-[28px] font-bold leading-[1.15] tracking-tight text-[#0d0f19] sm:text-[34px] lg:text-[38px] xl:text-[44px]"
            >
              <span className="block">Capture leads</span>
              <span className="block">
                in <span className="text-[#5b13ff]">3 simple steps</span>
              </span>
            </h2>

            <p className="mt-2.5 sm:mt-3 max-w-sm sm:max-w-md text-[13.5px] sm:text-[15px] leading-relaxed text-[#475569] sm:text-[#64748b] text-balance lg:mt-4">
              <span className="block sm:inline">
                Connect your website, Meta, and Justdial
              </span>{" "}
              <span className="block sm:inline">
                to capture and convert leads faster.
              </span>
            </p>
          </header>

          {/* ============ RIGHT: STEPS ============ */}
          <ol
            role="list"
            className="flex flex-col gap-4 lg:col-span-7 lg:gap-4 xl:gap-5"
          >
            {/* STEP 1 */}
            <li>
              <article className={CARD}>
                <div className={STEP_NUMBER} aria-hidden="true">
                  1
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className={CARD_TITLE}>{STEPS[0].title}</h3>
                  <p className={CARD_DESC}>{STEPS[0].description}</p>

                  <ul
                    role="list"
                    aria-label="Lead sources"
                    className="mt-3 sm:mt-3.5 flex flex-wrap items-center gap-1.5 sm:gap-2"
                  >
                    <li className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-[#e9dcff] bg-[#f4effe] px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[12px] font-semibold text-[#0d0f19]">
                      <Globe
                        className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#5b13ff]"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                      Website
                    </li>
                    <li className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-[#dbeafe] bg-[#eff6ff] px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[12px] font-semibold text-[#0d0f19]">
                      <MetaInfinity
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0284c7]"
                        strokeWidth={2.4}
                        aria-hidden="true"
                      />
                      Meta
                    </li>
                    <li className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-[#ffedd5] bg-[#fff7ed] px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[12px] font-semibold text-[#0d0f19]">
                      <span
                        aria-hidden="true"
                        className="flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-[3px] sm:rounded-[4px] bg-[#ea580c] text-[8.5px] sm:text-[9px] font-extrabold leading-none text-white"
                      >
                        Jd
                      </span>
                      Justdial
                    </li>
                  </ul>
                </div>
              </article>
            </li>

            {/* STEP 2 */}
            <li>
              <article className={CARD}>
                <div className={STEP_NUMBER} aria-hidden="true">
                  2
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className={CARD_TITLE}>{STEPS[1].title}</h3>
                  <p className={CARD_DESC}>{STEPS[1].description}</p>

                  <ul
                    role="list"
                    aria-label="Lead stages"
                    className="mt-3 sm:mt-3.5 flex flex-wrap items-center gap-1.5 sm:gap-2"
                  >
                    <li className="rounded-md sm:rounded-lg border border-[#dbeafe] bg-[#eff6ff] px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-[12px] font-medium text-[#2563eb]">
                      New Lead
                    </li>
                    <li className="rounded-md sm:rounded-lg border border-[#fde8c8] bg-[#fff7ed] px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-[12px] font-medium text-[#d97706]">
                      In Progress
                    </li>
                    <li className="rounded-md sm:rounded-lg border border-[#ede9fe] bg-[#f4effe] px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-[12px] font-medium text-[#7c3aed]">
                      Follow Up
                    </li>
                    <li className="rounded-md sm:rounded-lg border border-[#d1fae5] bg-[#ecfdf5] px-2.5 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-[12px] font-medium text-[#16a34a]">
                      Closed
                    </li>
                  </ul>
                </div>
              </article>
            </li>

            {/* STEP 3 */}
            <li>
              <article className={CARD}>
                <div className={STEP_NUMBER} aria-hidden="true">
                  3
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className={CARD_TITLE}>{STEPS[2].title}</h3>
                  <p className={CARD_DESC}>{STEPS[2].description}</p>

                  <ul
                    role="list"
                    aria-label="Outcomes"
                    className="mt-3 sm:mt-3.5 flex flex-wrap items-center gap-1.5 sm:gap-2"
                  >
                    <li className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl border border-[#ede9fe] bg-[#f4effe] px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[12px] font-semibold text-[#5b13ff]">
                      <Zap
                        className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current"
                        aria-hidden="true"
                      />
                      <span>Faster Follow-ups</span>
                    </li>
                    <li className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl border border-[#dbeafe] bg-[#eff6ff] px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[12px] font-semibold text-[#2563eb]">
                      <Users2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                      <span>Higher Conversions</span>
                    </li>
                    <li className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg sm:rounded-xl border border-[#d1fae5] bg-[#ecfdf5] px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[12px] font-semibold text-[#16a34a]">
                      <TrendingUp className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                      <span>Business Growth</span>
                    </li>
                  </ul>
                </div>
              </article>
            </li>
          </ol>
        </div>
      </Container>
    </section>
  );
}
