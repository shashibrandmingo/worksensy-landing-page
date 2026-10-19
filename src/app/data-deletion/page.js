import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import {
  Trash2,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Mail,
  ChevronRight,
  ExternalLink,
  Clock,
  AlertOctagon,
  Copy,
  Settings,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "User Data Deletion Instructions | Worksensy CRM",
  description:
    "Official instructions for deleting user data and Meta Facebook/Instagram Lead Ad information from Worksensy CRM in compliance with Meta Platform Terms and GDPR/CCPA.",
  alternates: {
    canonical: "https://worksensy.com/data-deletion",
  },
};

export default function DataDeletionPage() {
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
              <li className="font-semibold text-[#5b13ff]">
                User Data Deletion Instructions
              </li>
            </ol>
          </nav>

          {/* Header Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ebe5fa] bg-gradient-to-br from-[#ffffff] via-[#fbf9ff] to-[#f4effe] p-6 sm:p-10 lg:p-12 mb-10 shadow-[0_12px_40px_rgba(91,19,255,0.05)]">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e2d5fc] bg-[#f4effe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#5b13ff] mb-4">
                <Trash2 className="w-3.5 h-3.5" />
                User Data Privacy &amp; Rights
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0d0f19]">
                User Data Deletion Instructions
              </h1>

              <p className="mt-3 text-base sm:text-lg font-medium text-[#5b13ff]">
                How to request complete deletion of your Facebook &amp;
                Instagram Lead information from Worksensy CRM
              </p>

              <div className="mt-5 rounded-2xl border border-[#eeddfc] bg-white/80 backdrop-blur-xs p-4 sm:p-5">
                <p className="text-xs sm:text-sm leading-relaxed text-[#475569]">
                  According to the{" "}
                  <strong className="text-[#0d0f19]">
                    Meta Platform Developer Policy (Section 4.b)
                  </strong>{" "}
                  and international data privacy laws (GDPR, CCPA), any user who
                  interacts with the Worksensy application or submits their
                  contact details through a Facebook Lead Ad has the absolute
                  right to request the permanent deletion of their data.
                </p>
              </div>
            </div>

            {/* Ambient decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#5b13ff]/10 blur-3xl"
            />
          </div>

          {/* Main Grid: 2 Deletion Options + Outcomes Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Options List */}
            <div className="lg:col-span-8 space-y-8">
              {/* Option 1 */}
              <section
                id="option-1"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b13ff] text-white font-bold text-base shadow-sm">
                      1
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                        Option 1: Disconnect &amp; Revoke via Facebook Settings
                      </h2>
                      <p className="text-xs sm:text-sm text-[#5b13ff] font-medium">
                        Fastest method if you connected your Facebook Account /
                        Page
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  {[
                    {
                      step: "Step 1",
                      text: "Log into your Facebook account and navigate to Settings & Privacy > Settings.",
                    },
                    {
                      step: "Step 2",
                      text: "In the left navigation bar, click on Apps and Websites.",
                    },
                    {
                      step: "Step 3",
                      text: "Find Worksensy under your active apps.",
                    },
                    {
                      step: "Step 4",
                      text: "Click the Remove button.",
                    },
                    {
                      step: "Step 5",
                      text: "Check the box to confirm deletion of associated app permissions and click Remove. Facebook will automatically notify Worksensy to revoke tokens.",
                    },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-[#f0ecfa] bg-[#faf8ff]"
                    >
                      <span className="inline-flex shrink-0 items-center justify-center px-2.5 py-1 rounded-md bg-white border border-[#e8ddfc] text-xs font-bold text-[#5b13ff]">
                        {s.step}
                      </span>
                      <p className="text-xs sm:text-sm text-[#334155] leading-relaxed pt-0.5">
                        {s.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Option 2 */}
              <section
                id="option-2"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5b13ff] text-white font-bold text-base shadow-sm">
                    2
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                      Option 2: Direct Erasure Request via Email
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5b13ff] font-medium">
                      For customers who filled out a Facebook Lead Ad form
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#475569] mb-5 leading-relaxed">
                  If you submitted your personal contact information (Phone,
                  Name, Email) through an advertisement and want it purged from
                  our databases, please email us directly:
                </p>

                <div className="rounded-2xl border border-[#eee8fc] bg-[#faf8ff] p-5 sm:p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white border border-[#e8ddfc]">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1">
                        <Mail className="w-3.5 h-3.5 text-[#5b13ff]" />
                        Send Email To
                      </div>
                      <a
                        href="mailto:support@worksensy.com?subject=Meta%20User%20Data%20Deletion%20Request"
                        className="font-bold text-sm sm:text-base text-[#5b13ff] underline hover:text-[#450cc7]"
                      >
                        support@worksensy.com
                      </a>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#e8ddfc]">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1">
                        <Clock className="w-3.5 h-3.5 text-[#5b13ff]" />
                        Turnaround Time
                      </div>
                      <p className="font-semibold text-sm sm:text-base text-[#0d0f19]">
                        48 to 72 hours
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#e8ddfc]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1">
                      Subject Line
                    </div>
                    <code className="text-xs sm:text-sm font-semibold text-[#5b13ff] bg-[#f4effe] px-2.5 py-1 rounded-md inline-block">
                      Meta User Data Deletion Request
                    </code>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#e8ddfc]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-1">
                      Information to Include
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      Your Full Name, Phone Number, or Email address that was
                      entered in the lead form so we can accurately identify and
                      purge your lead record.
                    </p>
                  </div>

                  <p className="text-xs text-[#64748b] pt-1">
                    * All data is permanently purged from production systems
                    within 48 to 72 hours, and a formal confirmation email is sent
                    back to you.
                  </p>
                </div>
              </section>

              {/* What happens when deleted */}
              <section className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <AlertOctagon className="w-6 h-6 text-[#ef4444]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    What happens when your data is deleted?
                  </h2>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-[#fee2e2] bg-[#fff5f5]">
                    <CheckCircle2 className="w-5 h-5 text-[#ef4444] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#991b1b] leading-relaxed">
                      Your contact details (phone, email, name) are permanently
                      dropped from the CRM database.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-[#fee2e2] bg-[#fff5f5]">
                    <CheckCircle2 className="w-5 h-5 text-[#ef4444] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#991b1b] leading-relaxed">
                      All active sales follow-up reminders and activity logs
                      linked to your record are wiped.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-[#fee2e2] bg-[#fff5f5]">
                    <CheckCircle2 className="w-5 h-5 text-[#ef4444] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#991b1b] leading-relaxed">
                      Your record cannot be restored once the purge cycle
                      completes.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar Contact / Help */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
              <div className="rounded-2xl border border-[#ebe5fa] bg-gradient-to-br from-[#ffffff] to-[#faf8ff] p-6 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3">
                  <HelpCircle className="w-5 h-5 text-[#5b13ff]" />
                  <h3 className="font-bold text-[#0d0f19] text-base">
                    Have any questions?
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                  Contact our dedicated data protection and compliance team
                  anytime. We are committed to transparency and immediate
                  compliance.
                </p>
                <a
                  href="mailto:support@worksensy.com?subject=Meta%20User%20Data%20Deletion%20Inquiry"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#5b13ff] text-white font-semibold text-sm hover:bg-[#480ec9] transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Support Team</span>
                </a>
              </div>

              {/* Related Links */}
              <div className="rounded-2xl border border-[#ebe5fa] bg-white p-5 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-3">
                  Compliance Documents
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="flex items-center justify-between text-[#475569] hover:text-[#5b13ff] p-2 rounded-lg hover:bg-[#faf8ff] transition-colors"
                    >
                      <span>Privacy Policy</span>
                      <ChevronRight className="w-4 h-4 text-[#94a3b8]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-service"
                      className="flex items-center justify-between text-[#475569] hover:text-[#5b13ff] p-2 rounded-lg hover:bg-[#faf8ff] transition-colors"
                    >
                      <span>Terms of Service</span>
                      <ChevronRight className="w-4 h-4 text-[#94a3b8]" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/security-compliance"
                      className="flex items-center justify-between text-[#475569] hover:text-[#5b13ff] p-2 rounded-lg hover:bg-[#faf8ff] transition-colors"
                    >
                      <span>Security &amp; Compliance</span>
                      <ChevronRight className="w-4 h-4 text-[#94a3b8]" />
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
