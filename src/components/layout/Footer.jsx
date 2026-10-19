"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { Search, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";

/* ==========================================================================
   FOOTER NAVIGATION DATA
   ========================================================================== */
const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "CRM Solutions", href: "#solutions" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#integrations" },
      { label: "Book Demo", href: "#demo" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Agencies", href: "#solutions" },
      { label: "Sales Teams", href: "#solutions" },
      { label: "Consultants", href: "#solutions" },
      { label: "Growing Businesses", href: "#solutions" },
      { label: "Lead Management", href: "#features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "#help" },
      { label: "FAQs", href: "#faq" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About WorkSensy", href: "#about" },
      { label: "Why WorkSensy", href: "#why" },
      { label: "Customer Stories", href: "#stories" },
      { label: "Support", href: "#contact" },
      { label: "Get Started", href: "#trial" },
    ],
  },
];

const TRUST_TAGS = [
  { icon: Zap, label: "Quick Setup" },
  { icon: ShieldCheck, label: "Enterprise Security" },
  { icon: CheckCircle2, label: "No Credit Card Required" },
];

/* 3 Social Channels: Instagram | Facebook | LinkedIn - Zero SVG, Zero icon import */
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/worksensy/",
    element: (
      <span className="relative block w-[17px] h-[17px] rounded-[5px] border-[1.8px] border-current">
        <span className="absolute inset-0 m-auto w-[7px] h-[7px] rounded-full border-[1.6px] border-current" />
        <span className="absolute top-[1.5px] right-[1.5px] w-[2px] h-[2px] rounded-full bg-current" />
      </span>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Worksensy/61591053419877/",
    element: (
      <span className="font-bold font-sans text-[17px] leading-none text-current select-none">
        f
      </span>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/worksensy/",
    element: (
      <span className="font-bold font-sans text-[13.5px] tracking-tight leading-none text-current select-none">
        in
      </span>
    ),
  },
];

const POPULAR_SEARCHES = [
  "Sales CRM",
  "Lead Management CRM",
  "CRM for Agencies",
  "CRM for Sales Teams",
  "Follow-up Management",
  "Meeting Scheduling CRM",
  "Quotation Management",
  "Client Database CRM",
  "Team Activity Log",
  "Sales Pipeline Software",
  "CRM with Google Sheets",
  "CRM with Meta Leads",
  "CRM with Justdial Leads",
  "Lead Tracking Software",
];

/* ==========================================================================
   COMPONENT
   ========================================================================== */
export default function Footer() {
  const currentYear = 2026;

  return (
    <footer
      aria-label="WorkSensy site footer"
      className="relative overflow-hidden bg-[#090a18] text-white"
    >
      {/* Top Gradient Hairline Accent */}
      <div
        className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8a2dfa]/60 to-transparent"
        aria-hidden="true"
      />

      {/* Atmospheric Ambient Glows */}
      <div
        className="absolute -top-32 left-1/4 w-[480px] h-[480px] rounded-full bg-[#5b13ff]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-[#8a2dfa]/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* =========================================================
            MAIN NAVIGATION GRID (Brand + 4 Columns)
           ========================================================= */}
        <div className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,2.4fr)] gap-10 lg:gap-12 xl:gap-16">
          {/* Brand Info & Channels */}
          <div className="flex flex-col items-start">
            {/* Clean Transparent White Logo (Zero White Pill/Box) */}
            <Link
              href="/"
              aria-label="WorkSensy Home"
              className="inline-flex items-center"
            >
              <Image
                src="/images/logo/worksensy-white-logo.png"
                alt="WorkSensy"
                width={200}
                height={52}
                priority
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 max-w-[340px] text-[14px] leading-relaxed text-[#b4b8cf]">
              Sales CRM for lead capture, follow-ups, meetings, quotations, and
              team visibility.
            </p>

            {/* Trust Pills */}
            <ul className="mt-4 flex flex-wrap gap-2">
              {TRUST_TAGS.map((tag) => {
                const IconComponent = tag.icon;
                return (
                  <li
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#2c2d5f] bg-[#15163a]/80 py-1.5 px-3 text-[11px] font-medium text-[#d6d8ea]"
                  >
                    <IconComponent
                      className="w-3.5 h-3.5 text-[#8a2dfa] shrink-0"
                      aria-hidden="true"
                    />
                    {tag.label}
                  </li>
                );
              })}
            </ul>

            {/* Social Channels Row: Instagram | Facebook | LinkedIn */}
            <ul className="mt-5 flex items-center gap-2.5">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    title={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-9 h-9 rounded-xl border border-[#23244d] bg-[#14153a] text-[#c3c6dd] transition-all duration-200 hover:text-white hover:border-[#8a2dfa] hover:bg-[#8a2dfa]/20 hover:-translate-y-0.5"
                  >
                    {item.element}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 Link Columns */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8"
          >
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[14px] font-semibold text-white mb-3.5">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13.5px] text-[#aeb2ca] transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* =========================================================
            COPYRIGHT & LEGAL ROW (Placed ABOVE Popular Searches)
           ========================================================= */}
        <div className="border-t border-[#25265a]/70 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#aeb2ca]">
          <p className="text-center sm:text-left">
            &copy; {currentYear} WorkSensy. All rights reserved.
          </p>

          <ul className="flex items-center text-[13px] text-[#aeb2ca]">
            <li>
              <Link
                href="#privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
            </li>
            <li className="px-4 text-[#3e4070]" aria-hidden="true">
              |
            </li>
            <li>
              <Link
                href="#terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
            </li>
            <li className="px-4 text-[#3e4070]" aria-hidden="true">
              |
            </li>
            <li>
              <Link
                href="#cookies"
                className="hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </li>
          </ul>
        </div>

        {/* =========================================================
            POPULAR SEARCHES (AT THE VERY BOTTOM)
           ========================================================= */}
        <div className="border-t border-[#25265a]/70 py-7 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-5">
            <h2 className="flex items-center gap-2.5 text-[16px] sm:text-[17px] font-semibold text-white">
              <Search className="w-4 h-4 text-[#8a2dfa]" aria-hidden="true" />
              <span>Popular searches</span>
            </h2>
            <p className="text-[12.5px] text-[#aeb2ca]">
              Explore popular searches about WorkSensy
            </p>
          </div>

          <ul className="flex flex-wrap gap-2 sm:gap-2.5">
            {POPULAR_SEARCHES.map((term) => (
              <li key={term}>
                <Link
                  href="#features"
                  className="inline-flex items-center rounded-full border border-[#2c2d5f] bg-[#12133a]/80 px-4 py-1.5 text-[12px] font-medium text-[#c9cce2] transition-all duration-200 hover:border-[#8a2dfa] hover:bg-[#5b13ff]/20 hover:text-white"
                >
                  {term}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
