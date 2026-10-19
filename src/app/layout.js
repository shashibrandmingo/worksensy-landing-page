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
    default: "WorkSensy — All-in-One Sales CRM & Lead Management Platform",
    template: "%s | WorkSensy CRM",
  },
  description:
    "A powerful sales CRM and lead management platform to capture leads, automate follow-ups, schedule meetings, manage quotations & invoices, and keep your team aligned — all in one place.",
  keywords: [
    "Sales CRM",
    "Lead Management Software",
    "Automated Follow-ups",
    "Meeting Scheduling",
    "Client Database",
    "WorkSensy CRM",
    "Lead Capture Software",
    "Sales Pipeline Management",
  ],
  authors: [{ name: "WorkSensy Team", url: "https://worksensy.com" }],
  creator: "WorkSensy",
  publisher: "WorkSensy",
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
  openGraph: {
    title: "WorkSensy — Manage Leads, Track Sales & Grow Faster",
    description:
      "A powerful sales CRM and lead management platform built for modern sales teams, agencies, consultants, and growing businesses.",
    url: "https://worksensy.com",
    siteName: "WorkSensy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WorkSensy — All-in-One Sales CRM",
    description:
      "Capture leads, automate follow-ups, schedule meetings, and grow faster with WorkSensy.",
    creator: "@worksensy",
  },
  alternates: {
    canonical: "https://worksensy.com",
  },
};

export const viewport = {
  themeColor: "#8a2dfa",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  // Structured Data (JSON-LD) for 100% SEO Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WorkSensy",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free Trial Available",
    },
    description:
      "A powerful sales CRM and lead management platform to capture leads, automate follow-ups, and keep your team aligned.",
    url: "https://worksensy.com",
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <DemoModalProvider>{children}</DemoModalProvider>
      </body>
    </html>
  );
}

