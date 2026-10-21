"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import { HelpCircle, ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "How quickly can my team get started with WorkSensy?",
    answer:
      "You can be fully set up in under 5 minutes. Our guided onboarding helps you connect your lead sources (Meta Ads, Website forms, Google Sheets) and start capturing and assigning leads right away.",
  },
  {
    question: "Can I connect WorkSensy with Meta (Facebook/Instagram) Ads?",
    answer:
      "Yes! WorkSensy comes with native real-time integration for Meta Lead Ads. As soon as a user submits an ad form, the lead instantly populates in your WorkSensy CRM dashboard with automatic sales rep notification.",
  },
  {
    question: "Does WorkSensy support automated WhatsApp follow-ups?",
    answer:
      "Yes, WorkSensy integrates directly with the official WhatsApp Business API to trigger automated welcome messages, meeting confirmations, quotation reminders, and pipeline follow-ups.",
  },
  {
    question: "Why is WorkSensy the most affordable sales CRM for growing teams?",
    answer:
      "Unlike traditional enterprise CRMs that charge expensive per-seat fees and hidden onboarding costs, WorkSensy provides transparent, budget-friendly pricing designed specifically for growing businesses, startups, and agencies. You get full Meta Lead Ads integration, WhatsApp automation, and deal tracking at a fraction of the cost.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Absolutely. We offer a 14-day free trial with full access to all premium features. No credit card is required to sign up.",
  },
  {
    question: "Can I migrate my existing leads from spreadsheets or another CRM?",
    answer:
      "Yes, you can import existing customer and lead data easily with our one-click CSV and Excel importer, with smart field mapping.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-spacing scroll-mt-20 lg:scroll-mt-24 bg-[#faf9ff]/70 border-t border-[#f0edfa]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <Badge icon={HelpCircle} className="mb-4">
            FREQUENTLY ASKED QUESTIONS
          </Badge>
          <h2 className="section-heading mb-4">
            Got questions? <br />
            <span className="text-gradient-purple">We&apos;ve got answers</span>
          </h2>
          <p className="body-large text-[#555971]">
            Find answers to common questions about WorkSensy, setup, integrations, and pricing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#eeecf9] rounded-2xl bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-[#0d0f19] hover:text-[#5b13ff] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-[#f4effe] text-[#5b13ff] rotate-180" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#555971] leading-relaxed border-t border-gray-50 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
