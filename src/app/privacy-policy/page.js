import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import {
  ShieldCheck,
  Lock,
  Database,
  Share2,
  FileText,
  Mail,
  ChevronRight,
  ExternalLink,
  Trash2,
  CheckCircle2,
  Building,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Worksensy CRM",
  description:
    "Privacy Policy for Worksensy Operations OS & CRM and Meta Lead Ads integration. Learn how we safeguard user data with zero third-party selling and end-to-end encryption.",
  alternates: {
    canonical: "https://worksensy.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
              <li className="font-semibold text-[#5b13ff]">Privacy Policy</li>
            </ol>
          </nav>

          {/* Header Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ebe5fa] bg-gradient-to-br from-[#ffffff] via-[#fbf9ff] to-[#f4effe] p-6 sm:p-10 lg:p-12 mb-10 shadow-[0_12px_40px_rgba(91,19,255,0.05)]">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e2d5fc] bg-[#f4effe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#5b13ff] mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                Legal &amp; Privacy Protection
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0d0f19]">
                Privacy Policy
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#64748b]">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white border border-[#eee8fc] px-3 py-1 font-medium text-[#475569]">
                  Last updated: March 2026
                </span>
                <span className="text-[#94a3b8]">•</span>
                <span className="font-medium text-[#5b13ff]">
                  Effective for Worksensy CRM &amp; Meta Lead Ads Integration
                </span>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#475569]">
                We operate the Operations OS &amp; CRM platform at{" "}
                <a
                  href="https://worksensy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#5b13ff] underline hover:text-[#450cc7]"
                >
                  worksensy.com
                </a>
                . We are deeply dedicated to safeguarding user privacy and
                personal data, especially concerning customer information
                captured through our integrations with Meta Technologies
                (Facebook &amp; Instagram Lead Ads).
              </p>
            </div>

            {/* Ambient decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#5b13ff]/10 blur-3xl"
            />
          </div>

          {/* Main Grid: Content + Quick Navigation Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Table of Contents / Sidebar (Desktop) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
              <div className="rounded-2xl border border-[#ebe5fa] bg-white p-6 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-4">
                  On this page
                </h2>
                <nav className="space-y-1">
                  {[
                    { id: "section-1", title: "1. Introduction" },
                    { id: "section-2", title: "2. Information We Collect" },
                    { id: "section-3", title: "3. How We Use the Information" },
                    { id: "section-4", title: "4. Zero Third-Party Data Selling" },
                    { id: "section-5", title: "5. Data Security & Encryption" },
                    { id: "section-6", title: "6. Your Data Deletion Rights" },
                    { id: "section-7", title: "7. Contact & Compliance Officer" },
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

              {/* Quick Legal Links Box */}
              <div className="rounded-2xl border border-[#ebe5fa] bg-gradient-to-br from-[#ffffff] to-[#faf8ff] p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-3">
                  Related Documents
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li>
                    <Link
                      href="/terms-of-service"
                      className="flex items-center justify-between text-[#475569] hover:text-[#5b13ff] p-2 rounded-lg hover:bg-white transition-colors"
                    >
                      <span>Terms of Service</span>
                      <ChevronRight className="w-4 h-4 text-[#94a3b8]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/data-deletion"
                      className="flex items-center justify-between text-[#475569] hover:text-[#5b13ff] p-2 rounded-lg hover:bg-white transition-colors font-medium text-[#5b13ff]"
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
                    Introduction
                  </h2>
                </div>
                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-[#475569]">
                  <p>
                    Welcome to <strong>Worksensy</strong> (&ldquo;we&rdquo;,
                    &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We operate the
                    Operations OS &amp; CRM platform available at{" "}
                    <a
                      href="https://worksensy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5b13ff] underline font-medium"
                    >
                      https://worksensy.com
                    </a>
                    .
                  </p>
                  <p>
                    We are deeply dedicated to safeguarding user privacy and
                    personal data. This Privacy Policy governs our data handling
                    practices, especially concerning customer information
                    captured through our integrations with Meta Technologies
                    (Facebook &amp; Instagram Lead Ads).
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
                    Information We Collect
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#475569] mb-5">
                  When you interact with our platform or when our business
                  clients connect their Meta advertising accounts to Worksensy
                  CRM, we may process:
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border border-[#eee8fc] bg-[#faf8ff] p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-[#5b13ff] mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[#0d0f19] text-base mb-1">
                          Meta Lead Ads Inquiry Data
                        </h3>
                        <p className="text-sm leading-relaxed text-[#475569]">
                          Full Name, Email Address, Phone Number, City, and
                          customized form responses submitted by prospective
                          customers through Facebook and Instagram Instant Lead
                          Ads.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#eee8fc] bg-[#faf8ff] p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-[#5b13ff] mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[#0d0f19] text-base mb-1">
                          Authentication &amp; Token Credentials
                        </h3>
                        <p className="text-sm leading-relaxed text-[#475569]">
                          Meta Page Access Tokens and App Scopes required to
                          subscribe to Meta Webhooks for real-time lead
                          generation sync.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#eee8fc] bg-[#faf8ff] p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-[#5b13ff] mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[#0d0f19] text-base mb-1">
                          Account Information
                        </h3>
                        <p className="text-sm leading-relaxed text-[#475569]">
                          Business name, manager contact info, and internal
                          sales agent user accounts.
                        </p>
                      </div>
                    </div>
                  </div>
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
                    How We Use the Information
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#475569] mb-5">
                  The data we process is used exclusively for legitimate
                  business purposes:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-[#ebe5fa] bg-white hover:border-[#5b13ff]/40 transition-colors">
                    <div className="flex items-center gap-2 font-semibold text-[#0d0f19] mb-2 text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#5b13ff]" />
                      Instant Lead Routing
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      To deliver incoming Meta Lead Ad submissions straight to
                      your CRM pipeline within seconds.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-[#ebe5fa] bg-white hover:border-[#5b13ff]/40 transition-colors">
                    <div className="flex items-center gap-2 font-semibold text-[#0d0f19] mb-2 text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#5b13ff]" />
                      Sales Team Follow-ups
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      To allow authorized sales representatives to contact
                      interested clients regarding their inquiries.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-[#ebe5fa] bg-white hover:border-[#5b13ff]/40 transition-colors">
                    <div className="flex items-center gap-2 font-semibold text-[#0d0f19] mb-2 text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#5b13ff]" />
                      Activity Tracking &amp; Logs
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      To maintain audit logs, quotation history, and sales
                      performance metrics.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-[#ebe5fa] bg-white hover:border-[#5b13ff]/40 transition-colors">
                    <div className="flex items-center gap-2 font-semibold text-[#0d0f19] mb-2 text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-[#5b13ff]" />
                      Security &amp; Abuse Prevention
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      To detect and prevent unauthorized API calls or duplicate
                      lead spam.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section
                id="section-4"
                className="rounded-2xl border-2 border-[#5b13ff]/30 bg-gradient-to-br from-[#f8f5ff] via-[#ffffff] to-[#f4effe] p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b13ff] text-white font-bold text-sm">
                    4
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Zero Third-Party Data Selling
                  </h2>
                </div>

                <div className="rounded-xl bg-white border border-[#e5d8ff] p-5 shadow-xs">
                  <p className="text-sm sm:text-base leading-relaxed text-[#1e293b]">
                    <strong className="text-[#5b13ff] font-bold">
                      Strict Policy:
                    </strong>{" "}
                    Worksensy will <strong>NEVER</strong> sell, rent, license,
                    or barter user data or incoming lead details to any data
                    broker, advertiser, or third party for promotional
                    campaigns. Your data remains strictly your property.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section
                id="section-5"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    5
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Data Security &amp; Encryption
                  </h2>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-[#475569]">
                  We adopt rigorous technical safeguards including{" "}
                  <strong>TLS/SSL encryption</strong> for data in transit and{" "}
                  <strong>AES-256 encryption</strong> for stored tokens and
                  access credentials. All databases are hosted in isolated VPCs
                  with automated firewall monitoring.
                </p>
              </section>

              {/* Section 6 */}
              <section
                id="section-6"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    6
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Your Data Deletion Rights
                  </h2>
                </div>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#475569]">
                  <p>
                    In strict adherence to Meta Platform Terms and global
                    regulations (GDPR/CCPA), every individual has the absolute
                    right to request the permanent erasure of their personal
                    information from our system.
                  </p>
                  <div className="p-4 rounded-xl bg-[#faf8ff] border border-[#eee8fc] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[#0d0f19] text-sm">
                        Need to delete your lead records or Meta account data?
                      </p>
                      <p className="text-xs text-[#64748b]">
                        Follow our official deletion workflow or contact our
                        compliance desk.
                      </p>
                    </div>
                    <Link
                      href="/data-deletion"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5b13ff] text-white text-xs font-semibold hover:bg-[#480ec9] transition-colors shrink-0 shadow-xs"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      View Deletion Instructions
                    </Link>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748b]">
                    You can also email our compliance desk directly at{" "}
                    <a
                      href="mailto:support@worksensy.com"
                      className="text-[#5b13ff] underline font-semibold"
                    >
                      support@worksensy.com
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section
                id="section-7"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    7
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Contact &amp; Compliance Officer
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
                  <div className="p-4 rounded-xl border border-[#ebe5fa] bg-[#faf8ff]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1">
                      <Building className="w-3.5 h-3.5 text-[#5b13ff]" />
                      Brand / Entity
                    </div>
                    <p className="font-semibold text-sm sm:text-base text-[#0d0f19]">
                      Worksensy Technologies
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-[#ebe5fa] bg-[#faf8ff]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1">
                      <Mail className="w-3.5 h-3.5 text-[#5b13ff]" />
                      Support &amp; Inquiries
                    </div>
                    <a
                      href="mailto:support@worksensy.com"
                      className="font-semibold text-sm sm:text-base text-[#5b13ff] underline hover:text-[#450cc7]"
                    >
                      support@worksensy.com
                    </a>
                  </div>

                  <div className="p-4 rounded-xl border border-[#ebe5fa] bg-[#faf8ff]">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1">
                      <Globe className="w-3.5 h-3.5 text-[#5b13ff]" />
                      Official Website
                    </div>
                    <a
                      href="https://worksensy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sm sm:text-base text-[#5b13ff] underline hover:text-[#450cc7]"
                    >
                      https://worksensy.com
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
