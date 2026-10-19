import Container from "../ui/Container";
import {
  Magnet,
  Columns3,
  CalendarClock,
  Calendar,
  Users2,
  Network,
  FileText,
  Receipt,
  Contact,
  BarChart3,
  PieChart,
  Bell,
} from "lucide-react";

/* ==========================================================================
   12 KEY FEATURES DATA
   ========================================================================== */
const FEATURES_LIST = [
  {
    id: "lead-capture",
    title: "Lead Capture",
    description:
      "Capture leads from Google Sheets, Meta, Justdial, website forms, and other channels.",
    icon: Magnet,
    iconBoxClass: "bg-[#f4effe] text-[#7c3aed]",
  },
  {
    id: "pipeline-management",
    title: "Pipeline Management",
    description: "Organize opportunities and track every stage clearly.",
    icon: Columns3,
    iconBoxClass: "bg-[#eff6ff] text-[#0284c7]",
  },
  {
    id: "follow-ups",
    title: "Follow-ups",
    description: "Schedule reminders and never miss an important lead.",
    icon: CalendarClock,
    iconBoxClass: "bg-[#f4effe] text-[#7c3aed]",
  },
  {
    id: "meetings",
    title: "Meetings",
    description: "Book and manage meetings directly from the CRM.",
    icon: Calendar,
    iconBoxClass: "bg-[#ecfdf5] text-[#10b981]",
  },
  {
    id: "team-access",
    title: "Team-wise Access",
    description: "Role-based access for agents, managers, and admins.",
    icon: Users2,
    iconBoxClass: "bg-[#fff7ed] text-[#ea580c]",
  },
  {
    id: "manager-levels",
    title: "Manager Levels",
    description: "Better control and structured reporting visibility.",
    icon: Network,
    iconBoxClass: "bg-[#f5f3ff] text-[#7c3aed]",
  },
  {
    id: "activity-log",
    title: "Activity Log",
    description: "Track actions, updates, and team performance.",
    icon: FileText,
    iconBoxClass: "bg-[#eff6ff] text-[#2563eb]",
  },
  {
    id: "quotations",
    title: "Quotations",
    description: "Create and manage professional quotations quickly.",
    icon: Receipt,
    iconBoxClass: "bg-[#fff1f2] text-[#e11d48]",
  },
  {
    id: "client-database",
    title: "Client Database",
    description: "Keep all client information organized in one place.",
    icon: Contact,
    iconBoxClass: "bg-[#ecfdf5] text-[#059669]",
  },
  {
    id: "reports",
    title: "Reports",
    description: "Measure team output and lead progress with reports.",
    icon: BarChart3,
    iconBoxClass: "bg-[#fff7ed] text-[#d97706]",
  },
  {
    id: "insights-dashboard",
    title: "Insights Dashboard",
    description: "Get a quick overview of sales performance.",
    icon: PieChart,
    iconBoxClass: "bg-[#f4effe] text-[#7c3aed]",
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Instant alerts for new leads and follow-up actions.",
    icon: Bell,
    iconBoxClass: "bg-[#eff6ff] text-[#2563eb]",
  },
];

/* SEO: structured data describing the feature list */
const FEATURES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Key Features of WorkSensy Sales CRM",
  itemListElement: FEATURES_LIST.map((f, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: f.title,
    description: f.description,
  })),
};

/* ==========================================================================
   COMPONENT
   ========================================================================== */
export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="section-spacing scroll-mt-20 lg:scroll-mt-24 relative overflow-hidden border-0 bg-transparent"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FEATURES_JSON_LD) }}
      />

      {/* Soft decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[240px] w-[min(900px,90%)] -translate-x-1/2 rounded-full bg-[#f4effe] opacity-60 blur-[90px]"
      />

      <Container>
        <div className="relative z-10">
          {/* ================= HEADER ================= */}
          <header className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center sm:mb-10">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#dcd4f5]" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#5b13ff]">
                Features
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-[#dcd4f5]" />
            </div>

            <h2
              id="features-heading"
              className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0d0f19] sm:text-[32px] lg:text-[38px]"
            >
              Key Features of WorkSensy Sales CRM
            </h2>

            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#64748b] sm:text-[15px]">
              Everything your team needs to capture leads, manage pipelines,
              follow up faster, and close more deals.
            </p>
          </header>

          {/* ================= FEATURE CARDS (4 x 3) ================= */}
          <ul
            role="list"
            className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          >
            {FEATURES_LIST.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.id} className="flex">
                  <article className="group flex w-full flex-col items-start rounded-[20px] border border-[#eeecf9] bg-white p-5 text-left shadow-[0_6px_24px_rgba(91,19,255,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c8fb] hover:bg-[#f8f5ff] hover:shadow-[0_14px_34px_rgba(91,19,255,0.1)] xl:p-6">
                    <div
                      className={`mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${item.iconBoxClass}`}
                    >
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mb-1.5 text-[16px] font-bold leading-snug text-[#0d0f19] xl:text-[17px]">
                      {item.title}
                    </h3>

                    <p className="text-[13px] leading-[1.6] text-[#64748b]">
                      {item.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
