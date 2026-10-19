"use client";

import Image from "next/image";
import Container from "../ui/Container";
import {
  Zap,
  ArrowRight,
  Calendar,
  Check,
  Globe,
  Users2,
  CalendarDays,
  FileText,
} from "lucide-react";
import { TRUST_BADGES } from "@/constants/navigation";
import { useDemoModal } from "@/context/DemoModalContext";

/* Shared look for every floating card in the desktop cluster */
const CARD =
  "absolute z-10 flex flex-col rounded-[24px] border p-5 transition-transform duration-300 hover:scale-[1.02] hover:z-20";
const ICON_BOX =
  "w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0";
const TITLE = "text-[15px] font-bold text-[#0d0f19] leading-[1.3] mt-3";
const DESC = "text-[13px] font-normal text-[#6b7186] leading-[1.5] mt-1";

/*
  Desktop stage = 760 x 450. Hub centre = (380, 215).
  Layout rule: NO card touches another card or the hub (min 18px gap).

  Row A : card1 x 0-290   | hub x 328-432 | card2 x 470-760
  Row B : card3 x 0-245   | card4 x 263-538 | card5 x 556-756
*/
const NODES = [
  { x: 325, y: 128 }, // card 1
  { x: 455, y: 170 }, // card 2
  { x: 275, y: 222 }, // card 3
  { x: 380, y: 289 }, // card 4
  { x: 532, y: 255 }, // card 5
];

/* Compact cards used on mobile / tablet (< 1024px) */
const MOBILE_CARDS = [
  {
    title: "Capture Leads from Multiple Sources",
    desc: "Website, Meta Ads, Google Sheets and more.",
    Icon: Globe,
    card: "bg-[#f6f1ff] border-[#eadffc]",
    icon: "bg-[#e9ddfd] text-[#5b13ff]",
    chip: "capture",
  },
  {
    title: "Follow-ups & Reminders",
    desc: "Automate and never miss a lead.",
    Icon: CalendarDays,
    card: "bg-white border-[#eeecf9]",
    icon: "bg-[#ffe4ec] text-[#f43f5e]",
  },
  {
    title: "Meeting Scheduling",
    desc: "Schedule meetings with ease.",
    Icon: Calendar,
    card: "bg-[#eef4ff] border-[#e3ecfb]",
    icon: "bg-[#dbe8ff] text-[#2563eb]",
    chip: "sync",
  },
  {
    title: "Quotations & Client Database",
    desc: "Create quotes and manage clients.",
    Icon: FileText,
    card: "bg-[#fff6e0] border-[#fbe9c4]",
    icon: "bg-[#ffe7b3] text-[#d97706]",
  },
  {
    title: "Team-wise Access & Manager Visibility",
    desc: "Keep your team aligned.",
    Icon: Users2,
    card: "bg-[#ecfbf3] border-[#d9f3e6]",
    icon: "bg-[#d3f5e3] text-[#10b981]",
  },
];

export default function HeroSection() {
  const { openDemoModal } = useDemoModal();

  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-section-container relative overflow-hidden bg-white"
    >
      <div
        className="bg-ambient-glow -top-24 left-1/4 w-[500px] h-[500px] bg-[#5b13ff]/8 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="bg-ambient-glow top-28 right-6 w-[450px] h-[450px] bg-[#8a2dfa]/8 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -left-24 w-72 h-72 rounded-full bg-[#5b13ff]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4">
          {/* ================= LEFT COLUMN ================= */}
          <div className="w-full lg:w-[44%] flex flex-col items-start text-left relative shrink-0">
            <div
              className="hidden sm:block absolute -top-6 -left-14 w-12 h-24 bg-[radial-gradient(#cbbef8_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-60 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 hero-pill-badge">
              <Zap
                className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b] shrink-0"
                aria-hidden="true"
              />
              <span>ALL-IN-ONE SALES CRM</span>
            </div>

            <h1 id="hero-heading" className="hero-main-title">
              Manage Leads, <br />
              Track Sales &amp; <br />
              <span className="whitespace-nowrap">Grow Faster with</span> <br />
              <span className="text-[#5b13ff]">WorkSensy</span>
            </h1>

            <p className="hero-desc-text">
              A powerful sales CRM and lead management platform to capture
              leads, automate follow-ups, schedule meetings, manage quotations
              &amp; invoices, and keep your team aligned — all in one place.
            </p>

            <div className="hero-actions-row">
              <button
                type="button"
                onClick={() =>
                  openDemoModal({
                    teamSize: "Select team size",
                    planSource: "Hero - Start Free Trial",
                  })
                }
                className="btn-hero-trial cursor-pointer"
                aria-label="Start your 14-day free trial with WorkSensy"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() =>
                  openDemoModal({
                    teamSize: "Select team size",
                    planSource: "Hero - Book Demo",
                  })
                }
                className="btn-hero-demo cursor-pointer"
                aria-label="Book a personalized live product demo"
              >
                <Calendar
                  className="w-4 h-4 text-[#5b13ff] shrink-0"
                  aria-hidden="true"
                />
                <span>Book Demo</span>
              </button>
            </div>

            <div className="hero-trust-row">
              {TRUST_BADGES.map((badgeText, idx) => (
                <div key={idx} className="hero-trust-item">
                  <div className="hero-trust-check">
                    <Check
                      className="w-2.5 h-2.5 stroke-[3]"
                      aria-hidden="true"
                    />
                  </div>
                  <span>{badgeText}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end relative">
            {/*
              Wrapper = REAL scaled size (760x450 stage x scale), so layout
              height shrinks with the cluster and it never overflows the
              container (left col 44% + cluster + gap <= container width).
            */}
            <div className="hidden lg:block relative shrink-0 lg:w-[509px] lg:h-[302px] xl:w-[631px] xl:h-[374px]">
              <div className="absolute top-0 left-0 w-[760px] h-[450px] origin-top-left lg:scale-[0.67] xl:scale-[0.83]">
                {/* soft glows + dot matrix */}
                <div
                  className="absolute -top-10 right-0 w-72 h-72 rounded-full bg-purple-200/40 blur-3xl pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute top-24 -right-6 w-16 h-32 bg-[radial-gradient(#cbbef8_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-60 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Connectors */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-[11]"
                  viewBox="0 0 760 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <g
                    stroke="#7c3aed"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    className="animate-dash"
                    opacity="0.85"
                  >
                    <path d="M 366 163 C 360 150, 340 138, 325 128" />
                    <path d="M 428 185 C 438 178, 446 172, 455 170" />
                    <path d="M 330 222 C 310 222, 292 222, 275 222" />
                    <path d="M 380 267 L 380 289" />
                    <path d="M 434 228 C 470 230, 510 240, 532 255" />
                  </g>
                  {NODES.map((n, i) => (
                    <g key={i}>
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r="9"
                        fill="#5b13ff"
                        opacity="0.16"
                      />
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r="4.5"
                        fill="#5b13ff"
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                    </g>
                  ))}
                </svg>

                {/* Hub */}
                <div className="absolute top-[215px] left-[380px] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  <div
                    className="absolute w-[150px] h-[150px] rounded-full bg-[#8a2dfa]/10 blur-xl"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute w-[104px] h-[104px] rounded-[30px] bg-white border border-[#ede9fe] shadow-[0_18px_44px_rgba(91,19,255,0.2)]"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 w-[70px] h-[70px] rounded-[20px] bg-[#0c0d14] flex items-center justify-center p-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/logo/Worksensy%20logoicon.png"
                      alt="WorkSensy Sales CRM Hub"
                      width={72}
                      height={72}
                      priority
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>

                {/* CARD 1 - Capture Leads (x 0-290) */}
                <div
                  className={`${CARD} -rotate-[3deg] hover:rotate-0 border-[#eadffc]`}
                  style={{
                    top: 0,
                    left: 0,
                    width: 290,
                    background:
                      "linear-gradient(135deg,#f1e9ff 0%,#fbf9ff 100%)",
                    boxShadow: "0 16px 36px -12px rgba(91,19,255,0.18)",
                  }}
                >
                  <div className="flex items-start justify-between w-full">
                    <div className={`${ICON_BOX} bg-[#e9ddfd] text-[#5b13ff]`}>
                      <Globe
                        className="w-5 h-5 stroke-[2]"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#ece3ff] text-[#5b13ff] flex items-center gap-1.5">
                      <Zap
                        className="w-3 h-3 fill-current"
                        aria-hidden="true"
                      />
                      Auto Capture
                    </span>
                  </div>
                  <h3 className={TITLE}>
                    Capture Leads <br /> from Multiple Sources
                  </h3>
                  <p className={DESC}>
                    Website, Meta Ads, Google Sheets and more.
                  </p>
                </div>

                {/* CARD 2 - Follow-ups (x 470-760) */}
                <div
                  className={`${CARD} rotate-[2deg] hover:rotate-0 border-[#efeaf9]`}
                  style={{
                    top: 8,
                    left: 470,
                    width: 290,
                    background:
                      "linear-gradient(135deg,#ffffff 0%,#f6f3ff 100%)",
                    boxShadow: "0 16px 36px -12px rgba(91,19,255,0.14)",
                  }}
                >
                  <div className={`${ICON_BOX} bg-[#ffe4ec] text-[#f43f5e]`}>
                    <CalendarDays
                      className="w-5 h-5 stroke-[2]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className={TITLE}>Follow-ups &amp; Reminders</h3>
                  <p className={DESC}>Automate and never miss a lead.</p>
                </div>

                {/* CARD 3 - Meeting Scheduling (x 0-245) */}
                <div
                  className={`${CARD} border-[#e3ecfb]`}
                  style={{
                    top: 205,
                    left: 0,
                    width: 245,
                    background:
                      "linear-gradient(135deg,#eef4ff 0%,#f9fbff 100%)",
                    boxShadow: "0 16px 36px -12px rgba(37,99,235,0.14)",
                  }}
                >
                  <div className={`${ICON_BOX} bg-[#dbe8ff] text-[#2563eb]`}>
                    <Calendar
                      className="w-5 h-5 stroke-[2]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className={TITLE}>Meeting Scheduling</h3>
                  <p className={`${DESC} whitespace-nowrap`}>
                    Schedule meetings with ease.
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white border border-[#e5e9f2] shadow-sm mt-3 w-fit">
                    <div className="w-[16px] h-[16px] rounded-[3px] border border-[#d1d5db] bg-white flex flex-col items-center justify-between overflow-hidden shrink-0">
                      <div className="w-full h-[4px] bg-[#1a73e8]" />
                      <span className="text-[8.5px] font-extrabold text-[#1a73e8] leading-none mb-px">
                        31
                      </span>
                    </div>
                    <span className="text-[10.5px] font-semibold text-[#374151] whitespace-nowrap">
                      Sync with Google Calendar
                    </span>
                  </div>
                </div>

                {/* CARD 4 - Quotations (x 263-538) */}
                <div
                  className={`${CARD} border-[#fbe9c4]`}
                  style={{
                    top: 305,
                    left: 263,
                    width: 275,
                    background:
                      "linear-gradient(135deg,#fff4dc 0%,#fffaf0 100%)",
                    boxShadow: "0 16px 36px -12px rgba(234,160,8,0.2)",
                  }}
                >
                  <div className={`${ICON_BOX} bg-[#ffe7b3] text-[#d97706]`}>
                    <FileText
                      className="w-5 h-5 stroke-[2]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className={`${TITLE} whitespace-nowrap`}>
                    Quotations &amp; Client Database
                  </h3>
                  <p className={DESC}>Create quotes and manage clients.</p>
                </div>

                {/* CARD 5 - Team-wise Access (x 556-756) */}
                <div
                  className={`${CARD} border-[#d9f3e6]`}
                  style={{
                    top: 215,
                    left: 556,
                    width: 200,
                    background:
                      "linear-gradient(135deg,#e9fbf1 0%,#f6fffa 100%)",
                    boxShadow: "0 16px 36px -12px rgba(16,185,129,0.16)",
                  }}
                >
                  <div className={`${ICON_BOX} bg-[#d3f5e3] text-[#10b981]`}>
                    <Users2 className="w-5 h-5 stroke-[2]" aria-hidden="true" />
                  </div>
                  <h3 className={`${TITLE} whitespace-nowrap`}>
                    Team-wise Access <br /> &amp; Manager Visibility
                  </h3>
                  <p className={`${DESC} whitespace-nowrap`}>
                    Keep your team aligned.
                  </p>
                </div>
              </div>
            </div>

            {/* ============ Mobile / Tablet fallback (< 1024px) ============ */}
            <div className="lg:hidden w-full flex flex-col items-center mt-2">
              <div className="flex flex-col items-center mb-5">
                <div className="flex items-center justify-center w-16 h-16 rounded-[20px] bg-white shadow-lg shadow-purple-500/20 ring-[6px] ring-purple-500/10 p-2">
                  <Image
                    src="/images/logo/Worksensy%20logoicon.png"
                    alt="WorkSensy Sales CRM Hub"
                    width={72}
                    height={72}
                    priority
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <span className="text-[11px] font-semibold text-[#5b13ff] mt-3 bg-[#f4effe] px-3 py-1 rounded-full border border-[#e9dcff]">
                  All-in-One Sales CRM Hub
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {MOBILE_CARDS.map((c) => (
                  <div
                    key={c.title}
                    className={`flex items-start gap-3.5 p-4 rounded-2xl border shadow-[0_8px_20px_-12px_rgba(91,19,255,0.18)] sm:last:col-span-2 ${c.card}`}
                  >
                    <div
                      className={`w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0 ${c.icon}`}
                    >
                      <c.Icon
                        className="w-5 h-5 stroke-[2]"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[14px] font-bold text-[#0d0f19] leading-snug">
                        {c.title}
                      </h3>
                      <p className="text-[12.5px] text-[#6b7186] mt-0.5 leading-snug">
                        {c.desc}
                      </p>
                      {c.chip === "capture" && (
                        <span className="inline-flex items-center gap-1 mt-2.5 text-[10.5px] font-semibold px-2.5 py-1 rounded-full bg-[#ece3ff] text-[#5b13ff]">
                          <Zap
                            className="w-3 h-3 fill-current"
                            aria-hidden="true"
                          />
                          Auto Capture
                        </span>
                      )}
                      {c.chip === "sync" && (
                        <span className="inline-flex items-center gap-1.5 mt-2.5 text-[10.5px] font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#e5e9f2] text-[#374151]">
                          <span className="w-[14px] h-[14px] rounded-[3px] border border-[#d1d5db] flex flex-col items-center overflow-hidden">
                            <span className="w-full h-[3px] bg-[#1a73e8]" />
                            <span className="text-[7.5px] font-extrabold text-[#1a73e8] leading-none mt-px">
                              31
                            </span>
                          </span>
                          Sync with Google Calendar
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
