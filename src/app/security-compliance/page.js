import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import {
  ShieldCheck,
  Lock,
  Server,
  Key,
  Users2,
  FileCheck,
  Mail,
  ChevronRight,
  ExternalLink,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Cpu,
  EyeOff,
} from "lucide-react";

export const metadata = {
  title: "Security & Compliance | Worksensy CRM",
  description:
    "Enterprise security, encryption protocols, Meta Webhook verification, and regulatory compliance standards powering Worksensy CRM.",
  alternates: {
    canonical: "https://worksensy.com/security-compliance",
  },
};

export default function SecurityCompliancePage() {
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
                Security &amp; Compliance
              </li>
            </ol>
          </nav>

          {/* Header Banner */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ebe5fa] bg-gradient-to-br from-[#ffffff] via-[#fbf9ff] to-[#f4effe] p-6 sm:p-10 lg:p-12 mb-10 shadow-[0_12px_40px_rgba(91,19,255,0.05)]">
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e2d5fc] bg-[#f4effe] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#5b13ff] mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                Enterprise Security &amp; Trust
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0d0f19]">
                Security &amp; Compliance
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#64748b]">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white border border-[#eee8fc] px-3 py-1 font-medium text-[#475569]">
                  Last updated: March 2026
                </span>
                <span className="text-[#94a3b8]">•</span>
                <span className="font-medium text-[#5b13ff]">
                  Worksensy Infrastructure &amp; Integration Protection
                </span>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#475569]">
                At Worksensy, data security is engineered into every layer of our
                platform. From encrypted database architectures to rigorous Meta
                Webhook signature checks, we ensure your sales pipelines,
                client data, and access tokens are completely fortified.
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
            {/* Sidebar (Desktop) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
              <div className="rounded-2xl border border-[#ebe5fa] bg-white p-6 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-4">
                  Security Framework
                </h2>
                <nav className="space-y-1">
                  {[
                    { id: "sec-1", title: "1. Infrastructure & VPC Isolation" },
                    { id: "sec-2", title: "2. End-to-End Encryption" },
                    { id: "sec-3", title: "3. Meta Lead Ads Integration" },
                    { id: "sec-4", title: "4. Zero Third-Party Data Selling" },
                    { id: "sec-5", title: "5. Role-Based Access Control" },
                    { id: "sec-6", title: "6. Data Retention & Deletion" },
                    { id: "sec-7", title: "7. Vulnerability Disclosure" },
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
                  Legal Documents
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
                </ul>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Section 1 */}
              <section
                id="sec-1"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    1
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Infrastructure &amp; VPC Isolation
                  </h2>
                </div>
                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-[#475569]">
                  <p>
                    All Worksensy core services, databases, and microservices are
                    hosted in isolated Virtual Private Clouds (VPC) with
                    automated firewall rules. Direct public database access is
                    strictly blocked.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl border border-[#f0ecfa] bg-[#faf8ff] flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-[#5b13ff] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-[#0d0f19]">
                        Isolated VPC Subnets
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl border border-[#f0ecfa] bg-[#faf8ff] flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#5b13ff] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-[#0d0f19]">
                        Automated Firewall &amp; WAF
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section
                id="sec-2"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    2
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    End-to-End Encryption
                  </h2>
                </div>
                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-[#475569]">
                  <p>
                    We adopt rigorous technical safeguards including{" "}
                    <strong>TLS 1.3 / SSL encryption</strong> for data in transit
                    and <strong>AES-256 encryption</strong> for stored tokens,
                    API secrets, and lead details at rest.
                  </p>
                  <div className="p-4 rounded-xl border border-[#eee8fc] bg-[#faf8ff] flex items-start gap-3">
                    <Lock className="w-5 h-5 text-[#5b13ff] mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sm text-[#0d0f19] mb-1">
                        Cryptographic Key Management
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569]">
                        Sensitive credentials and Meta access tokens are stored
                        with hardware security module (HSM) supported encryption
                        keys.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section
                id="sec-3"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    3
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Meta Lead Ads Integration Security
                  </h2>
                </div>
                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-[#475569]">
                  <p>
                    In strict compliance with the{" "}
                    <strong>Meta Platform Developer Policy (Section 4.b)</strong>
                    :
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5b13ff] shrink-0 mt-0.5" />
                      <span>
                        <strong>HMAC-SHA256 Webhook Verification:</strong> Every
                        incoming Meta Webhook payload is cryptographically
                        verified against the Meta App Secret before processing.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5b13ff] shrink-0 mt-0.5" />
                      <span>
                        <strong>Minimal Scope Principle:</strong> We only request
                        the exact Meta permissions required for lead ingestion
                        and page sync.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#5b13ff] shrink-0 mt-0.5" />
                      <span>
                        <strong>Instant Token Revocation:</strong> When a user
                        disconnects via Facebook settings, all stored tokens are
                        immediately invalidated.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section
                id="sec-4"
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
                    campaigns. Your customer data remains strictly your
                    property.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section
                id="sec-5"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    5
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Granular Role-Based Access Control (RBAC)
                  </h2>
                </div>
                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-[#475569]">
                  <p>
                    Worksensy enforces strict internal permission gates. Sales
                    agents only access leads assigned directly to them, while
                    managers and administrators maintain audit oversight across
                    team pipelines.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section
                id="sec-6"
                className="rounded-2xl border border-[#ebe5fa] bg-white p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4effe] text-[#5b13ff] font-bold text-sm">
                    6
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Data Retention &amp; User Erasure
                  </h2>
                </div>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#475569]">
                  <p>
                    We fully respect international privacy mandates (GDPR, CCPA)
                    and Meta user data erasure requirements. All erasure
                    requests are processed within 48 to 72 hours.
                  </p>
                  <Link
                    href="/data-deletion"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5b13ff] underline hover:text-[#450cc7]"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>View User Data Deletion Instructions</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </section>

              {/* Section 7 */}
              <section
                id="sec-7"
                className="rounded-2xl border border-[#ebe5fa] bg-gradient-to-br from-[#ffffff] via-[#fbf9ff] to-[#f4effe] p-6 sm:p-8 shadow-sm scroll-mt-28"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6 text-[#5b13ff]" />
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0d0f19]">
                    Vulnerability Disclosure &amp; Security Contact
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#475569] mb-4 leading-relaxed">
                  If you discover a security vulnerability or have questions
                  regarding our technical safeguards, please report it to our
                  security response desk:
                </p>
                <a
                  href="mailto:support@worksensy.com?subject=Security%20Vulnerability%20Report"
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
