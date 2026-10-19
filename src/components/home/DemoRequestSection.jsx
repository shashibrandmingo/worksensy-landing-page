import Container from "../ui/Container";
import DemoLeadForm from "../common/DemoLeadForm";
import { Zap, Users2, Headphones, ShieldCheck, Gift } from "lucide-react";

/* ==========================================================================
   FEATURE CARDS & TRUST POINTS DATA
   ========================================================================== */
const HIGHLIGHT_CARDS = [
  {
    icon: Zap,
    title: "Lead capture from multiple sources",
    iconBg: "bg-[#f4effe]",
    iconColor: "text-[#7c3aed]",
  },
  {
    icon: Users2,
    title: "Personalized CRM setup",
    iconBg: "bg-[#eff6ff]",
    iconColor: "text-[#2563eb]",
  },
  {
    icon: Headphones,
    title: "Quick demo & onboarding support",
    iconBg: "bg-[#ecfdf5]",
    iconColor: "text-[#10b981]",
  },
];

const TRUST_POINTS = [
  { icon: ShieldCheck, label: "No spam" },
  { icon: Gift, label: "Free consultation" },
  { icon: Zap, label: "Fast response" },
];

/* ==========================================================================
   DEMO REQUEST SECTION COMPONENT (100% PURE LUCIDE - ZERO RAW SVG)
   ========================================================================== */
export default function DemoRequestSection() {
  return (
    <section
      id="contact"
      aria-labelledby="demo-heading"
      className="section-spacing scroll-mt-20 lg:scroll-mt-24 relative border-0 bg-white overflow-hidden"
    >
      <div id="demo" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
      {/* Decorative Soft Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5b13ff]/4 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#8a2dfa]/4 blur-3xl"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-7xl mx-auto">
          {/* ================= LEFT COLUMN: CONTENT & HIGHLIGHTS ================= */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow Pill */}
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e9dcff] bg-[#f4effe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5b13ff] w-fit shadow-2xs">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#5b13ff]"
                aria-hidden="true"
              />
              <span>Tell Us Your Requirement</span>
            </span>

            {/* Main Heading (Matching BuiltForTeams Exact Typography) */}
            <h2
              id="demo-heading"
              className="text-[clamp(19px,5.4vw,26px)] font-bold leading-[1.2] tracking-tight text-[#0d0f19] sm:text-[32px] lg:text-[40px]"
            >
              <span className="block">Let’s build the right</span>
              <span className="block">
                <span className="text-[#5b13ff]">sales workflow</span> for your
                team
              </span>
            </h2>

            {/* Subtitle Description */}
            <p className="mt-3 text-[14px] leading-relaxed text-[#64748b] sm:text-[15px] max-w-xl">
              Share your business needs and our team will help you set up lead
              capture, follow-ups, meetings, quotations, and CRM workflows
              tailored to your process.
            </p>

            {/* 3 Compact Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 mt-6">
              {HIGHLIGHT_CARDS.map((card) => {
                const CardIcon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#faf9ff]/70 border border-[#eeecf9] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs hover:bg-white"
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${card.iconBg} ${card.iconColor}`}
                    >
                      <CardIcon
                        className="w-4 h-4 stroke-[2.2]"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-[13px] font-semibold text-[#0d0f19] leading-snug">
                      {card.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-2 mt-6">
              {TRUST_POINTS.map((item) => {
                const PointIcon = item.icon;
                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11.5px] font-medium text-[#475569] bg-[#f8fafc] border border-[#e2e8f0] shadow-2xs"
                  >
                    <PointIcon
                      className="w-3.5 h-3.5 text-[#5b13ff] stroke-[2.2]"
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: REUSABLE GLOBAL DEMO FORM ================= */}
          <div className="lg:col-span-7">
            <DemoLeadForm planSource="Direct Website Form" />
          </div>
        </div>
      </Container>
    </section>
  );
}
