// import Container from "../ui/Container";
// import {
//   Layers,
//   Rocket,
//   Users,
//   Building2,
//   Landmark,
//   Check,
// } from "lucide-react";

// /* ==========================================================================
//    TEAMS & INDUSTRY SEGMENTS DATA
//    ========================================================================== */
// const TEAM_SEGMENTS = [
//   {
//     id: "startups",
//     title: "Startups",
//     description:
//       "Launch faster with a simple CRM that keeps leads, follow-ups, and workflows organized from day one.",
//     icon: Rocket,
//     iconBox: "bg-[#f4effe] text-[#7c3aed]",
//     checkBox: "bg-[#f1eafe] text-[#7c3aed]",
//     points: ["Agile workflows", "Everything in one place"],
//   },
//   {
//     id: "growing-teams",
//     title: "Growing Teams",
//     description:
//       "Improve collaboration, assign ownership clearly, and scale sales operations without extra complexity.",
//     icon: Users,
//     iconBox: "bg-[#ecfdf5] text-[#10b981]",
//     checkBox: "bg-[#e6faf1] text-[#10b981]",
//     points: ["Better visibility", "Scalable operations"],
//   },
//   {
//     id: "enterprises",
//     title: "Enterprises",
//     description:
//       "Standardize processes, gain stronger controls, and manage larger teams with confidence.",
//     icon: Building2,
//     iconBox: "bg-[#fff7ed] text-[#f97316]",
//     checkBox: "bg-[#ffefdc] text-[#f97316]",
//     points: ["Advanced controls", "Enterprise-grade security"],
//   },
//   {
//     id: "public-sector",
//     title: "Public Sector",
//     description:
//       "Support structured operations with transparency, accountability, and dependable access control.",
//     icon: Landmark,
//     iconBox: "bg-[#eff6ff] text-[#2563eb]",
//     checkBox: "bg-[#e3eeff] text-[#2563eb]",
//     points: ["Compliance ready", "Secure & reliable"],
//   },
// ];

// /* SEO: structured data describing who the product is built for */
// const SEGMENTS_JSON_LD = {
//   "@context": "https://schema.org",
//   "@type": "ItemList",
//   name: "WorkSensy CRM is built for teams of every size, across every industry",
//   itemListElement: TEAM_SEGMENTS.map((s, i) => ({
//     "@type": "ListItem",
//     position: i + 1,
//     name: s.title,
//     description: s.description,
//   })),
// };

// /* ==========================================================================
//    COMPONENT
//    ========================================================================== */
// export default function BuiltForTeams() {
//   return (
//     <section
//       id="teams"
//       aria-labelledby="teams-heading"
//       className="section-spacing relative overflow-hidden border-0 bg-transparent"
//     >
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(SEGMENTS_JSON_LD) }}
//       />

//       {/* Soft decorative glows */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-1/2 top-0 h-[240px] w-[min(900px,90%)] -translate-x-1/2 rounded-full bg-[#f4effe] opacity-60 blur-[90px]"
//       />

//       <Container className="relative z-10">
//         {/* ================= HEADER ================= */}
//         <header className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center sm:mb-10">
//           <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#e9dcff] bg-[#f4effe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5b13ff]">
//             <Layers
//               className="h-3.5 w-3.5"
//               strokeWidth={2.4}
//               aria-hidden="true"
//             />
//             Built for every team
//           </span>

//           <h2
//             id="teams-heading"
//             className="text-[clamp(19px,5.4vw,26px)] font-bold leading-[1.2] tracking-tight text-[#0d0f19] sm:text-[32px] lg:text-[40px]"
//           >
//             <span className="block">Built for teams of every size,</span>
//             <span className="block text-[#5b13ff]">across every industry</span>
//           </h2>

//           <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#64748b] sm:text-[15px]">
//             From startups to enterprise teams, WorkSensy adapts to your workflow
//             and scales with you as you grow.
//           </p>
//         </header>

//         {/* ================= SEGMENT CARDS ================= */}
//         <ul
//           role="list"
//           className="mx-auto grid max-w-[1100px] grid-cols-1 items-stretch gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4 lg:gap-5"
//         >
//           {TEAM_SEGMENTS.map((segment) => {
//             const Icon = segment.icon;

//             return (
//               <li key={segment.id} className="flex">
//                 <article className="group flex w-full flex-col justify-between rounded-[20px] border border-[#eeecf9] bg-white p-5 shadow-[0_6px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#dbc8ff] hover:shadow-[0_14px_34px_rgba(91,19,255,0.1)] xl:p-6">
//                   <div>
//                     <div
//                       className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${segment.iconBox}`}
//                     >
//                       <Icon
//                         className="h-[18px] w-[18px]"
//                         strokeWidth={2.2}
//                         aria-hidden="true"
//                       />
//                     </div>

//                     <h3 className="text-[17px] font-bold tracking-tight text-[#0d0f19] sm:text-[18px]">
//                       {segment.title}
//                     </h3>

//                     <p className="mt-2 text-[13px] leading-[1.6] text-[#64748b]">
//                       {segment.description}
//                     </p>
//                   </div>

//                   <div className="mt-5 border-t border-[#f1f0f7] pt-4">
//                     <ul role="list" className="space-y-2">
//                       {segment.points.map((point) => (
//                         <li key={point} className="flex items-center gap-2.5">
//                           <span
//                             aria-hidden="true"
//                             className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${segment.checkBox}`}
//                           >
//                             <Check className="h-2.5 w-2.5" strokeWidth={3} />
//                           </span>
//                           <span className="text-[13px] font-medium text-[#334155]">
//                             {point}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </article>
//               </li>
//             );
//           })}
//         </ul>
//       </Container>
//     </section>
//   );
// }

import Container from "../ui/Container";
import {
  Layers,
  Rocket,
  Users,
  Building2,
  Landmark,
  Check,
} from "lucide-react";

/* ==========================================================================
   TEAMS & INDUSTRY SEGMENTS DATA
   ========================================================================== */
const TEAM_SEGMENTS = [
  {
    id: "startups",
    title: "Startups",
    description:
      "Launch faster with a simple CRM that keeps leads, follow-ups, and workflows organized from day one.",
    icon: Rocket,
    iconBox: "bg-[#f4effe] text-[#7c3aed]",
    checkBox: "bg-[#f1eafe] text-[#7c3aed]",
    points: ["Agile workflows", "Everything in one place"],
  },
  {
    id: "growing-teams",
    title: "Growing Teams",
    description:
      "Improve collaboration, assign ownership clearly, and scale sales operations without extra complexity.",
    icon: Users,
    iconBox: "bg-[#ecfdf5] text-[#10b981]",
    checkBox: "bg-[#e6faf1] text-[#10b981]",
    points: ["Better visibility", "Scalable operations"],
  },
  {
    id: "enterprises",
    title: "Enterprises",
    description:
      "Standardize processes, gain stronger controls, and manage larger teams with confidence.",
    icon: Building2,
    iconBox: "bg-[#fff7ed] text-[#f97316]",
    checkBox: "bg-[#ffefdc] text-[#f97316]",
    points: ["Advanced controls", "Enterprise-grade security"],
  },
  {
    id: "public-sector",
    title: "Public Sector",
    description:
      "Support structured operations with transparency, accountability, and dependable access control.",
    icon: Landmark,
    iconBox: "bg-[#eff6ff] text-[#2563eb]",
    checkBox: "bg-[#e3eeff] text-[#2563eb]",
    points: ["Compliance ready", "Secure & reliable"],
  },
];

/* SEO: structured data describing who the product is built for */
const SEGMENTS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "WorkSensy CRM is built for teams of every size, across every industry",
  itemListElement: TEAM_SEGMENTS.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    description: s.description,
  })),
};

/* ==========================================================================
   COMPONENT
   ========================================================================== */
export default function BuiltForTeams() {
  return (
    <section
      id="teams"
      aria-labelledby="teams-heading"
      className="section-spacing relative border-0 bg-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SEGMENTS_JSON_LD) }}
      />

      <Container className="relative z-10">
        {/* ================= HEADER ================= */}
        <header className="mx-auto mb-8 flex max-w-3xl flex-col items-center text-center sm:mb-10">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#e9dcff] bg-[#f4effe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#5b13ff]">
            <Layers
              className="h-3.5 w-3.5"
              strokeWidth={2.4}
              aria-hidden="true"
            />
            Built for every team
          </span>

          <h2
            id="teams-heading"
            className="text-[clamp(19px,5.4vw,26px)] font-bold leading-[1.2] tracking-tight text-[#0d0f19] sm:text-[32px] lg:text-[40px]"
          >
            <span className="block">Built for teams of every size,</span>
            <span className="block text-[#5b13ff]">across every industry</span>
          </h2>

          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#64748b] sm:text-[15px]">
            From startups to enterprise teams, WorkSensy adapts to your workflow
            and scales with you as you grow.
          </p>
        </header>

        {/* ================= SEGMENT CARDS ================= */}
        <ul
          role="list"
          className="mx-auto grid max-w-[1100px] grid-cols-1 items-stretch gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {TEAM_SEGMENTS.map((segment) => {
            const Icon = segment.icon;

            return (
              <li key={segment.id} className="flex">
                <article className="group flex w-full flex-col justify-between rounded-[20px] border border-[#eeecf9] bg-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#dbc8ff] hover:shadow-[0_10px_26px_rgba(91,19,255,0.09)] xl:p-6">
                  <div>
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${segment.iconBox}`}
                    >
                      <Icon
                        className="h-[18px] w-[18px]"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-[17px] font-bold tracking-tight text-[#0d0f19] sm:text-[18px]">
                      {segment.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-[1.6] text-[#64748b]">
                      {segment.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#f1f0f7] pt-4">
                    <ul role="list" className="space-y-2">
                      {segment.points.map((point) => (
                        <li key={point} className="flex items-center gap-2.5">
                          <span
                            aria-hidden="true"
                            className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${segment.checkBox}`}
                          >
                            <Check className="h-2.5 w-2.5" strokeWidth={3} />
                          </span>
                          <span className="text-[13px] font-medium text-[#334155]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
