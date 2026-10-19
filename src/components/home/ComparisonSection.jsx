"use client";

import Container from "../ui/Container";
import { Check, Minus, ArrowRight } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

/* ==========================================================================
   COMPARISON DATA (7 CORE WORKFLOW CAPABILITIES)
   status values: "builtin" | "partial" | "none"
   ========================================================================== */
const COMPARISON_ROWS = [
  {
    feature:
      "Capture leads from Website, Meta, Justdial & Google Sheets in one place",
    worksensy: "builtin",
    others: "none",
  },
  {
    feature: "Track and assign leads with team-wise access",
    worksensy: "builtin",
    others: "partial",
  },
  {
    feature: "Manage follow-ups, reminders, and lead statuses",
    worksensy: "builtin",
    others: "partial",
  },
  {
    feature: "Schedule meetings directly from the CRM",
    worksensy: "builtin",
    others: "none",
  },
  {
    feature: "Create quotations and manage client database",
    worksensy: "builtin",
    others: "partial",
  },
  {
    feature: "View manager-level visibility and team activity log",
    worksensy: "builtin",
    others: "partial",
  },
  {
    feature: "Get dashboards, reports, and instant notifications",
    worksensy: "builtin",
    others: "none",
  },
];

const STATUS_LABEL = {
  builtin: "Built in",
  partial: "Partial or add-on",
  none: "Not available",
};

/* ==========================================================================
   STATUS INDICATOR (lucide-react icons + pure CSS)
   ========================================================================== */
function StatusIcon({ status }) {
  if (status === "builtin") {
    return (
      <>
        <span
          aria-hidden="true"
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ede4ff] text-[#5b13ff]"
        >
          <Check className="h-3.5 w-3.5" strokeWidth={2.8} />
        </span>
        <span className="sr-only">{STATUS_LABEL.builtin}</span>
      </>
    );
  }

  if (status === "partial") {
    return (
      <>
        <span
          aria-hidden="true"
          className="flex h-5 w-5 shrink-0 overflow-hidden rounded-full border border-[#94a3b8]"
        >
          <span className="h-full w-1/2 bg-[#64748b]" />
          <span className="h-full w-1/2 bg-[#f1f5f9]" />
        </span>
        <span className="sr-only">{STATUS_LABEL.partial}</span>
      </>
    );
  }

  return (
    <>
      <span
        aria-hidden="true"
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f1f5f9] text-[#94a3b8]"
      >
        <Minus className="h-3 w-3" strokeWidth={2.5} />
      </span>
      <span className="sr-only">{STATUS_LABEL.none}</span>
    </>
  );
}

/* ==========================================================================
   COMPONENT
   ========================================================================== */
export default function ComparisonSection() {
  const { openDemoModal } = useDemoModal();

  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="section-spacing scroll-mt-20 lg:scroll-mt-24 relative overflow-hidden border-0 bg-transparent"
    >
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
        <header className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center sm:mb-10">
          <span className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[#5b13ff]">
            WorkSensy vs Others
          </span>

          <h2
            id="comparison-heading"
            className="text-[26px] font-bold leading-[1.18] tracking-tight text-[#0d0f19] sm:text-[32px] lg:text-[40px]"
          >
            <span className="block">Most CRMs manage data.</span>
            <span className="block">
              <span className="text-[#5b13ff]">WorkSensy</span> helps you close
              better.
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#64748b] sm:text-[15px]">
            See how WorkSensy brings lead capture, follow-ups, meetings,
            quotations, and team visibility into one clean sales workflow.
          </p>
        </header>

        {/* ================= TABLE CARD ================= */}
        <div className="mx-auto max-w-[820px] overflow-hidden rounded-[20px] border border-[#eeecf9] bg-white shadow-[0_12px_40px_rgba(91,19,255,0.07)] sm:rounded-[24px]">
          <table className="w-full table-fixed border-collapse text-left">
            <caption className="sr-only">
              Feature comparison between WorkSensy Sales CRM and other CRMs
            </caption>

            <thead>
              <tr className="border-b border-[#eeecf9]">
                <th
                  scope="col"
                  className="w-[56%] bg-[#faf9ff] px-4 py-3.5 text-[12.5px] font-semibold text-[#475569] sm:w-[58%] sm:px-6 sm:py-4 sm:text-[14px]"
                >
                  What matters in a Sales CRM
                </th>
                <th
                  scope="col"
                  className="w-[24%] bg-[#5b13ff] px-1 py-3.5 text-center text-[13px] font-bold tracking-tight text-white sm:w-[22%] sm:py-4 sm:text-[15px]"
                >
                  WorkSensy
                </th>
                <th
                  scope="col"
                  className="w-[20%] bg-[#faf9ff] px-1 py-3.5 text-center text-[13px] font-bold tracking-tight text-[#334155] sm:py-4 sm:text-[15px]"
                >
                  Others
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#f1edf8]">
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="transition-colors hover:bg-[#faf9ff]/60"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 text-[12.5px] font-normal leading-snug text-[#334155] sm:px-6 sm:py-3.5 sm:text-[14px]"
                  >
                    {row.feature}
                  </th>

                  <td className="bg-[#f7f2ff] px-1 py-3 text-center sm:py-3.5">
                    <div className="flex items-center justify-center">
                      <StatusIcon status={row.worksensy} />
                    </div>
                  </td>

                  <td className="px-1 py-3 text-center sm:py-3.5">
                    <div className="flex items-center justify-center">
                      <StatusIcon status={row.others} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= LEGEND ================= */}
        <ul
          role="list"
          aria-label="Legend"
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-[#334155]"
        >
          <li className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ede4ff] text-[#5b13ff]"
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="font-medium">Built in</span>
          </li>
          <li className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex h-4 w-4 overflow-hidden rounded-full border border-[#94a3b8]"
            >
              <span className="h-full w-1/2 bg-[#64748b]" />
              <span className="h-full w-1/2 bg-[#f1f5f9]" />
            </span>
            <span className="font-medium">Partial or add-on</span>
          </li>
          <li className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex h-4 w-4 items-center justify-center rounded-full bg-[#f1f5f9] text-[#94a3b8]"
            >
              <Minus className="h-2.5 w-2.5" strokeWidth={3} />
            </span>
            <span className="font-medium">Not available</span>
          </li>
        </ul>

        {/* ================= CTA ================= */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() =>
              openDemoModal({
                teamSize: "Select team size",
                planSource: "Comparison - Book Free Demo",
              })
            }
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#5b13ff] to-[#8a2dfa] px-7 py-3 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(91,19,255,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(91,19,255,0.42)] hover:brightness-110 cursor-pointer"
          >
            <span>Book a free demo</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </section>
  );
}
