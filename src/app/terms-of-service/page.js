import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Mail,
  ChevronRight,
  ExternalLink,
  Trash2,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Terms of Service | Worksensy CRM",
  description:
    "Terms of Service for Worksensy Operations OS & CRM. Read the agreement, service description, and Meta Lead Ads compliance requirements.",
  alternates: {
    canonical: "https://worksensy.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfbfe] text-[#0d0f19]">
      <Header />

      <main className="flex-1 py-10 sm:py-14 lg:py-16">
        <Container>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[13px] text-[#64748b]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#5b13ff] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#94a3b8]" />
              </li>
              <li>
                <span className="text-[#64748b]">Legal</span>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#94a3b8]" />
              </li>
              <li className="font-semibold text-[#5b13ff]">Terms of Service</li>
            </ol>
          </nav>

          {/* Header Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ebe5fa] bg-gradient-to-br from-[#ffffff] via-[#fbf9ff] to-[#f4effe] p-6 sm:p-10 lg:p-12 mb-10 shadow-[0_12px_40px_rgba(91,19,255,0.05)]">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e2d5fc] bg-[#f4effe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#5b13ff] mb-4">
                <FileText className="w-3.5 h-3.5" />
                User Agreement
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0d0f19]">
                Terms of Service
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#64748b]">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white border border-[#eee8fc] px-3 py-1 font-medium text-[#475569]">
                  Last updated: March 2026
                </span>
                <span className="text-[#94a3b8]">•</span>
                <span className="font-medium text-[#5b13ff]">
                  Worksensy Operations OS &amp; CRM
                </span>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#475569]">
                Please review these Terms carefully before using Worksensy CRM.
                These terms govern your access to our cloud-based sales
                operating system, quotation engine, and lead synchronization
                integrations.
              </p>
            </div>

            {/* Ambient decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#5b13ff]/10 blur-3xl"
            />
          </div>

          {/* Main Grid: Content + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Table of Contents / Sidebar (Desktop) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
              <div className="rounded-2xl border border-[#ebe5fa] bg-white p-6 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-4">
                  Terms Sections
                </h2>
                <nav className="space-y-1">
                  {[
                    { id: "section-1", title: "1. Agreement to Terms" },
                    { id: "section-2", title: "2. Description of the Service" },
                    {
                      id: "section-3",
                      title: "3. Meta Lead Ads Compliance & Ethics",
                    },
                    { id: "section-4", title: "4. Limitation of Liability" },
                    { id: "section-5", title: "Questions Regarding Terms" },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block px-3 py-2 text-xs sm:text-sm font-medium rounded-lg text-[#475569] hover:text-[#5b13ff] hover:bg-[#f4effe] transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Documents */}
              <div className="rounded-2xl border border-[#ebe5fa] bg-gradient-to-br from-[#ffffff] to-[#faf8ff] p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-3">
                  Related Documents
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="flex items-center justify-between text-[#475569] hover:text-[#5b13ff] p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <span>Privacy Policy</span>
                      <ChevronRight className="w-4 h-4 text-[#94a3b8]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/data-deletion"
                      className="flex items-center justify-between text-[#475569] hover:text-[#5b13ff] p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <span>User Data Deletion</span>
                      <Trash2 className="w-3.5 h-3.5 text-[#5b13ff]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/security-compliance"
                      className="flex items-center justify-between text-[#475569] hover:text-[#5b13ff] p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <span>Security &amp; Compliance</span>
                      <ChevronRight className="w-4 h-4 text-[#94a3b8]" />
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Document Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Section 1 */}
              <section
                id="section-1"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Agreement to Terms
                  </h2>
                </div>
                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-[#475569]">
                  <p>
                    By accessing or using Worksensy CRM (&ldquo;Service&rdquo;)
                    operated by <strong>Worksensy Technologies</strong>, you
                    agree to be bound by these Terms of Service. If you disagree
                    with any part of the terms, you may not access the service.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section
                id="section-2"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Description of the Service
                  </h2>
                </div>
                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-[#475569]">
                  <p>
                    Worksensy provides a cloud-based CRM and workflow operating
                    system that allows businesses to streamline lead management,
                    track customer sales pipelines, generate quotations, and
                    synchronize incoming inquiries from advertising platforms
                    including Meta Lead Ads.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section
                id="section-3"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Meta Lead Ads Compliance &amp; Ethics
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#475569] mb-5">
                  Users integrating their Facebook Pages or Meta Advertising
                  accounts with Worksensy agree to:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-[#eee8fc] bg-[#faf8ff]">
                    <CheckCircle2 className="w-5 h-5 text-[#5b13ff] mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#0d0f19] text-sm sm:text-base mb-0.5">
                        Meta Commercial &amp; Developer Policies
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        Comply fully with Meta&apos;s Commercial Terms and
                        Developer Policies at all times.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl border border-[#eee8fc] bg-[#faf8ff]">
                    <CheckCircle2 className="w-5 h-5 text-[#5b13ff] mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#0d0f19] text-sm sm:text-base mb-0.5">
                        Legitimate Inquiries Only
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        Only contact consumers who have intentionally submitted
                        inquiries through legitimate lead forms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl border border-[#eee8fc] bg-[#faf8ff]">
                    <CheckCircle2 className="w-5 h-5 text-[#5b13ff] mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-[#0d0f19] text-sm sm:text-base mb-0.5">
                        Opt-out &amp; Deletion Respect
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        Respect all opt-out and data deletion requests received
                        from prospective customers immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section
                id="section-4"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Limitation of Liability
                  </h2>
                </div>
                <div className="p-4 rounded-xl border border-[#fed7aa] bg-[#fffaf5] flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#f97316] mt-0.5 shrink-0" />
                  <p className="text-sm sm:text-base leading-relaxed text-[#7c2d12]">
                    Worksensy Technologies will not be liable for any indirect,
                    incidental, or consequential damages resulting from downtime
                    of third-party APIs (including Meta Graph API or hosting
                    providers).
                  </p>
                </div>
              </section>

              {/* Questions Regarding Terms */}
              <section
                id="section-5"
                className="rounded-2xl border border-[#ebe5fa] bg-gradient-to-br from-[#ffffff] via-[#fbf9ff] to-[#f4effe] p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-3">
                  <HelpCircle className="w-6 h-6 text-[#5b13ff]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Questions Regarding Terms?
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#475569] mb-4">
                  If you have questions about these Terms of Service or need legal
                  clarifications, please contact our legal team:
                </p>
                <a
                  href="mailto:support@worksensy.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5b13ff] text-white font-semibold text-sm hover:bg-[#480ec9] transition-colors shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>support@worksensy.com</span>
                </a>
              </section>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
