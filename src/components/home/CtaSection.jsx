import Container from "../ui/Container";
import Button from "../ui/Button";
import { ArrowRight, Calendar, Check, Sparkles } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="section-spacing relative overflow-hidden bg-white">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-br from-[#120a2e] via-[#1b103e] to-[#0c0520] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-purple-900/30">
          {/* Ambient Lighting inside CTA */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 bg-[#8a2dfa]/30 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#5b13ff]/30 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-purple-200 mb-6 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>Get Started In Less Than 2 Minutes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Ready to automate your sales &amp;{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                grow revenue faster?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-purple-200/80 max-w-2xl mb-10 leading-relaxed">
              Join thousands of modern sales leaders who trust WorkSensy to organize leads,
              automate follow-ups, and convert prospects into loyal clients.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-8">
              <Button
                href="#free-trial"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto shadow-xl shadow-purple-500/30 bg-[#8a2dfa] hover:bg-[#7922e3]"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>

              <Button
                href="#demo"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md"
              >
                <Calendar className="w-5 h-5 mr-1 text-purple-300" />
                <span>Schedule a 1-on-1 Walkthrough</span>
              </Button>
            </div>

            {/* Checklist */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-purple-200/80">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> Instant Setup
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> Cancel Anytime
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> 24/7 Dedicated Support
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
