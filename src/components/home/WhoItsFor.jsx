import Link from "next/link";
import Container from "../ui/Container";
import { Users2, BarChart2, User, Building2, ArrowDown } from "lucide-react";

const PERSONAS = [
  {
    id: "agencies",
    title: "Agencies",
    description:
      "Manage leads, follow-ups, and client conversations in one place.",
    icon: Users2,
    iconBoxClass: "bg-[#f4effe] text-[#5b13ff]",
  },
  {
    id: "sales-teams",
    title: "Sales Teams",
    description:
      "Track pipeline, assign leads, and improve conversion visibility.",
    icon: BarChart2,
    iconBoxClass: "bg-[#ecfdf5] text-[#059669]",
  },
  {
    id: "consultants",
    title: "Consultants",
    description:
      "Schedule meetings, send quotations, and manage prospects easily.",
    icon: User,
    iconBoxClass: "bg-[#fff7ed] text-[#ea580c]",
  },
  {
    id: "growing-businesses",
    title: "Growing Businesses",
    description: "Bring your team, lead sources, and workflows together.",
    icon: Building2,
    iconBoxClass: "bg-[#eff6ff] text-[#2563eb]",
  },
];

export default function WhoItsFor() {
  return (
    <section
      id="solutions"
      aria-labelledby="who-its-for-heading"
      className="section-spacing scroll-mt-20 lg:scroll-mt-24 relative overflow-hidden border-0 bg-transparent"
    >
      {/* Soft ambient glow (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[260px] w-[min(900px,90%)] -translate-x-1/2 rounded-full bg-[#f4effe] opacity-60 blur-[90px]"
      />

      <Container>
        <div className="relative z-10">
          {/* Section Header */}
          <header className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#e9dcff] bg-[#f4effe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5b13ff]">
              Who it&apos;s for
            </span>

            <h2
              id="who-its-for-heading"
              className="text-[24px] font-bold leading-[1.18] tracking-tight text-[#0d0f19] sm:text-[34px] lg:text-[40px]"
            >
              <span className="block">Built for teams that need</span>
              <span className="block text-[#5b13ff]">
                a better sales workflow
              </span>
            </h2>

            <p className="mt-2.5 sm:mt-3 max-w-xl text-[13px] leading-relaxed text-[#64748b] sm:text-[15px]">
              Whether you handle inbound leads, sales follow-ups, meetings, or
              client management, WorkSensy helps you stay organized and close
              faster.
            </p>
          </header>

          {/* Persona Cards: 2x2 on mobile (two-two), 4-cols on desktop */}
          <ul
            role="list"
            className="mx-auto mt-6 sm:mt-8 grid max-w-[1100px] grid-cols-2 gap-2.5 sm:gap-4 lg:mt-10 lg:grid-cols-4 lg:gap-5"
          >
            {PERSONAS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id} className="flex">
                  <article className="group flex w-full flex-col items-start rounded-[16px] sm:rounded-[20px] border border-[#eeecf9] bg-white p-3.5 sm:p-5 text-left shadow-[0_4px_16px_rgba(91,19,255,0.05)] sm:shadow-[0_8px_28px_rgba(91,19,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(91,19,255,0.11)] lg:p-5 xl:p-6">
                    <div
                      className={`mb-2.5 sm:mb-4 flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl transition-transform duration-300 group-hover:scale-105 ${item.iconBoxClass}`}
                    >
                      <Icon
                        className="h-4.5 w-4.5 sm:h-5 sm:w-5"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mb-1 sm:mb-1.5 text-[14px] sm:text-[17px] font-bold leading-snug text-[#0d0f19] lg:text-[16px] xl:text-[17px]">
                      {item.title}
                    </h3>

                    <p className="text-[11.5px] sm:text-[13px] leading-[1.45] sm:leading-[1.6] text-[#64748b]">
                      {item.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>

          {/* Bottom CTA Pill */}
          <div className="mt-8 flex justify-center lg:mt-10">
            <Link
              href="#features"
              aria-label="Scroll to explore WorkSensy CRM features"
              className="group inline-flex items-center gap-3 rounded-full border border-[#eeecf9] bg-white py-2 pl-2.5 pr-5 shadow-[0_4px_18px_rgba(91,19,255,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(91,19,255,0.13)]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f4effe] text-[#5b13ff] transition-transform group-hover:translate-y-0.5">
                <ArrowDown
                  className="h-3.5 w-3.5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </span>
              <span aria-hidden="true" className="h-5 w-px bg-[#eeecf9]" />
              <span className="text-[13px] font-semibold text-[#5b13ff]">
                Scroll to explore CRM features
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
