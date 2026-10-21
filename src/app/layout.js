import { Poppins } from "next/font/google";
import { DemoModalProvider } from "@/context/DemoModalContext";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://worksensy.com"),
  title: {
    default:
      "WorkSensy — Affordable Sales CRM & Lead Management Software",
    template: "%s | WorkSensy — Affordable Sales CRM",
  },
  description:
    "WorkSensy is the most affordable sales CRM to capture Meta leads, automate follow-ups, schedule meetings, and close deals faster. Start your free trial today!",
  applicationName: "WorkSensy CRM",
  category: "Business & Productivity Software",
  classification: "Affordable Sales CRM & Lead Automation Platform",
  keywords: [
    "Affordable Sales CRM",
    "Best Affordable CRM",
    "Affordable CRM for Small Business",
    "Affordable CRM India",
    "Affordable Lead Management Software",
    "Budget Friendly Sales CRM",
    "Low Cost Sales CRM",
    "Sales CRM Software",
    "Meta Lead Ads CRM",
    "Facebook Lead Ads Integration",
    "WhatsApp CRM Automation",
    "Automated Follow-ups",
    "Meeting Scheduling CRM",
    "Quotation Management Software",
    "Sales Pipeline Software",
    "CRM for Agencies",
    "CRM for Sales Teams",
    "WorkSensy CRM",
  ],
  authors: [{ name: "WorkSensy Technologies", url: "https://worksensy.com" }],
  creator: "WorkSensy Technologies",
  publisher: "WorkSensy Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://worksensy.com",
    languages: {
      "en-IN": "https://worksensy.com",
      "en-US": "https://worksensy.com",
      "x-default": "https://worksensy.com",
    },
  },
  openGraph: {
    title:
      "WorkSensy — Affordable Sales CRM & Lead Management Software",
    description:
      "Looking for an affordable sales CRM? Capture Meta leads, automate follow-ups, schedule meetings, and accelerate deal closures with WorkSensy. Start free!",
    url: "https://worksensy.com",
    siteName: "WorkSensy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo/Worksensy%20logo.png",
        width: 1200,
        height: 630,
        alt: "WorkSensy — Affordable Sales CRM & Lead Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkSensy — Most Affordable Sales CRM",
    description:
      "The best affordable sales CRM for growing teams. Capture leads, automate follow-ups, and close more deals with WorkSensy.",
    creator: "@worksensy",
    images: ["/images/logo/Worksensy%20logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=2", type: "image/png" },
      { url: "/favicon.ico?v=2" },
    ],
    apple: [
      { url: "/favicon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png?v=2",
  },
};

export const viewport = {
  themeColor: "#5b13ff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  // Rich Structured Data (JSON-LD) Graph for 100% Google Rich Results
  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Organization Schema
      {
        "@type": "Organization",
        "@id": "https://worksensy.com/#organization",
        name: "Worksensy Technologies",
        url: "https://worksensy.com",
        logo: {
          "@type": "ImageObject",
          url: "https://worksensy.com/images/logo/Worksensy%20logo.png",
          caption: "WorkSensy CRM Logo",
        },
        sameAs: [
          "https://www.facebook.com/people/Worksensy/61591053419877/",
          "https://www.instagram.com/worksensy/",
          "https://www.linkedin.com/company/worksensy/",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "support@worksensy.com",
            contactType: "customer support",
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
      // 2. WebSite with Sitelinks SearchBox Schema
      {
        "@type": "WebSite",
        "@id": "https://worksensy.com/#website",
        url: "https://worksensy.com",
        name: "WorkSensy",
        description:
          "The most affordable sales CRM and lead management platform for modern businesses.",
        publisher: {
          "@id": "https://worksensy.com/#organization",
        },
      },
      // 3. SoftwareApplication Schema
      {
        "@type": "SoftwareApplication",
        "@id": "https://worksensy.com/#software",
        name: "WorkSensy — Affordable Sales CRM",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Affordable Sales CRM, Lead Automation, Sales Pipeline",
        operatingSystem: "Web-based, Cloud, iOS, Android",
        url: "https://worksensy.com",
        description:
          "An affordable sales CRM and lead management platform to capture leads from Meta Ads and websites, automate follow-ups, and manage pipelines.",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "380",
          bestRating: "5",
          worstRating: "1",
        },
        offers: [
          {
            "@type": "Offer",
            name: "Free Trial",
            price: "0",
            priceCurrency: "INR",
            description: "14-Day Full Feature Free Trial",
          },
          {
            "@type": "Offer",
            name: "Starter Plan",
            price: "4499",
            priceCurrency: "INR",
            description: "CRM for growing teams up to 5 users",
          },
          {
            "@type": "Offer",
            name: "Growth Plan",
            price: "7999",
            priceCurrency: "INR",
            description: "CRM for high-velocity teams up to 10 users",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png?v=2" />
        <link rel="shortcut icon" href="/favicon.png?v=2" />
        <link rel="apple-touch-icon" href="/favicon.png?v=2" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataGraph),
          }}
        />
      </head>
      <body>
        <DemoModalProvider>{children}</DemoModalProvider>
      </body>
    </html>
  );
}
