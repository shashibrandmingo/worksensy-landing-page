"use client";

import Container from "../ui/Container";
import {
  Users2,
  Zap,
  BarChart3,
  Settings2,
  Check,
  Crown,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

/* ==========================================================================
   PRICING PLANS DATA
   ========================================================================== */
const PRICING_PLANS = [
  {
    id: "free",
    name: "Free",
    price: "₹0",
    priceValue: "0",
    audience: "For 2 users",
    icon: Users2,
    isPopular: false,
    ctaText: "Get Started",
    ctaHref: "#demo",
    features: [
      "Lead capture basics",
      "Follow-up tracking",
      "Team access for 2 users",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    price: "₹4,499",
    priceValue: "4499",
    audience: "Up to 5 users",
    icon: Zap,
    isPopular: false,
    ctaText: "Choose Starter",
    ctaHref: "#demo",
    features: [
      "Lead capture from multiple sources",
      "Meeting scheduling",
      "Quotations & reminders",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹7,999",
    priceValue: "7999",
    audience: "Up to 10 users",
    icon: BarChart3,
    isPopular: true,
    badge: "Most Popular",
    ctaText: "Choose Growth",
    ctaHref: "#demo",
    features: [
      "Advanced lead tracking",
      "Manager visibility",
      "Reports & notifications",
    ],
  },
  {
    id: "customized",
    name: "Customized",
    price: "Custom",
    priceValue: null,
    audience: "For larger or unique team needs",
    icon: Settings2,
    isPopular: false,
    ctaText: "Contact Sales",
    ctaHref: "#demo",
    features: [
      "Flexible user count",
      "Tailored workflow setup",
      "Dedicated consultation",
    ],
  },
];

const TRUST_POINTS = [
  { icon: Zap, label: "Quick setup" },
  { icon: BarChart3, label: "Scalable plans" },
  { icon: Headphones, label: "Support available" },
];

/* SEO: structured data for priced plans (Custom plan has no fixed price) */
const PRICING_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WorkSensy Sales CRM",
  applicationCategory: "BusinessApplication",
  offers: PRICING_PLANS.filter((p) => p.priceValue !== null).map((p) => ({
    "@type": "Offer",
    name: `${p.name} - ${p.audience}`,
    price: p.priceValue,
    priceCurrency: "INR",
  })),
};

/* ==========================================================================
   COMPONENT
   ========================================================================== */
export default function PricingSection() {
  const { openDemoModal } = useDemoModal();

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="section-spacing scroll-mt-20 lg:scroll-mt-24 relative overflow-hidden border-0 bg-transparent"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_JSON_LD) }}
      />

      {/* Soft decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-72 w-72 rounded-full bg-[#5b13ff]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#8a2dfa]/5 blur-3xl"
      />

      <Container className="relative z-10">
        {/* ================= HEADER ================= */}
        <header className="mx-auto mb-6 flex max-w-3xl flex-col items-center text-center sm:mb-10">
          <span className="mb-3 inline-flex items-center rounded-full border border-[#e9dcff] bg-[#f4effe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#5b13ff] sm:mb-4">
            Affordable Pricing
          </span>

          <h2
            id="pricing-heading"
            className="text-[clamp(20px,6vw,26px)] font-bold leading-[1.18] tracking-tight text-[#0d0f19] sm:text-[32px] lg:text-[40px]"
          >
            <span className="block whitespace-nowrap">
              Simple pricing for <span className="text-[#5b13ff]">growing</span>
            </span>
            <span className="block text-[#5b13ff]">sales teams</span>
          </h2>

          <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[#64748b] sm:text-[15px]">
            Choose the right affordable WorkSensy plan for your team size and sales
            workflow.
          </p>
        </header>

        {/* ================= PRICING CARDS ================= */}
        <ul
          role="list"
          className="mx-auto grid max-w-[1100px] grid-cols-1 items-stretch gap-3 min-[560px]:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5"
        >
          {PRICING_PLANS.map((plan) => {
            const Icon = plan.icon;

            return (
              <li key={plan.id} className="flex">
                <article
                  className={`relative flex w-full flex-col justify-between rounded-[18px] p-3.5 transition-all duration-300 sm:rounded-[20px] sm:p-5 xl:p-6 ${
                    plan.isPopular
                      ? "border-2 border-[#bca5f8] bg-[#faf7ff] shadow-[0_16px_40px_rgba(91,19,255,0.14)] hover:shadow-[0_20px_48px_rgba(91,19,255,0.2)] lg:-translate-y-1.5"
                      : "border border-[#eeecf9] bg-white shadow-[0_6px_24px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(91,19,255,0.1)]"
                  }`}
                >
                  {/* Popular badge */}
                  {plan.isPopular && (
                    <div className="mb-2 flex justify-start sm:absolute sm:right-4 sm:top-4 sm:mb-0 sm:block">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#5b13ff] to-[#8a2dfa] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white shadow-sm sm:px-2.5 sm:py-1 sm:text-[10.5px]">
                        <Crown
                          className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header Block: Compact horizontal on mobile / Stacked on desktop */}
                    <div className="flex items-center justify-between gap-3 sm:block">
                      {/* Left: Icon + Name & Mobile Audience */}
                      <div className="flex items-center gap-2.5 sm:block">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:mb-4 sm:h-10 sm:w-10 ${
                            plan.isPopular
                              ? "bg-[#ede4ff] text-[#5b13ff]"
                              : "bg-[#f4effe] text-[#6d28d9]"
                          }`}
                        >
                          <Icon
                            className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                        </div>

                        <div>
                          <h3 className="text-[15px] font-bold tracking-tight text-[#0d0f19] sm:text-[18px]">
                            {plan.name}
                          </h3>
                          <p className="text-[11.5px] font-medium text-[#64748b] sm:hidden">
                            {plan.audience}
                          </p>
                        </div>
                      </div>

                      {/* Right on mobile / Below on desktop: Price & Desktop Audience */}
                      <div className="text-right sm:text-left">
                        <p className="text-[20px] font-extrabold leading-none tracking-tight text-[#0d0f19] sm:mt-1.5 sm:text-[32px]">
                          {plan.price}
                        </p>
                        <p className="mt-1.5 hidden min-h-[20px] text-[12.5px] font-medium text-[#64748b] sm:block sm:text-[13px]">
                          {plan.audience}
                        </p>
                      </div>
                    </div>

                    <div
                      className="my-2.5 border-t border-[#f1f0f7] sm:my-4"
                      aria-hidden="true"
                    />

                    {/* Features */}
                    <ul role="list" className="space-y-1.5 sm:space-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 sm:items-start sm:gap-2.5">
                          <span
                            aria-hidden="true"
                            className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#f1eafe] text-[#7c3aed] sm:mt-0.5 sm:h-[18px] sm:w-[18px]"
                          >
                            <Check className="h-2 w-2 sm:h-2.5 sm:w-2.5" strokeWidth={3} />
                          </span>
                          <span className="text-[12px] leading-tight text-[#475569] sm:text-[13px] sm:leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-3.5 sm:mt-6">
                    <button
                      type="button"
                      onClick={() =>
                        openDemoModal({
                          teamSize:
                            plan.id === "customized"
                              ? "Customized"
                              : plan.audience,
                          planSource: `Pricing - ${plan.name} (${plan.price})`,
                        })
                      }
                      aria-label={`${plan.ctaText} - ${plan.name} plan`}
                      className={`flex w-full items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-center text-[12.5px] font-semibold transition-all duration-200 cursor-pointer sm:rounded-xl sm:py-2.5 sm:text-[13.5px] ${
                        plan.isPopular
                          ? "bg-gradient-to-r from-[#5b13ff] to-[#8a2dfa] text-white shadow-[0_8px_20px_rgba(91,19,255,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(91,19,255,0.4)] hover:brightness-110"
                          : "border border-[#ebdfff] bg-[#f8f5ff] text-[#5b13ff] hover:border-[#dbc8ff] hover:bg-[#ede4ff]"
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      {plan.isPopular && (
                        <ArrowRight
                          className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* ================= TRUST STRIP ================= */}
        <ul
          role="list"
          aria-label="Plan highlights"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-[13px] text-[#334155] sm:mt-10"
        >
          {TRUST_POINTS.map((point, index) => {
            const TrustIcon = point.icon;
            return (
              <li key={point.label} className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <TrustIcon
                    className="h-4 w-4 text-[#7c3aed]"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  <span className="font-medium">{point.label}</span>
                </span>
                {index < TRUST_POINTS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-3.5 w-px bg-[#e2e8f0] sm:inline-block"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
