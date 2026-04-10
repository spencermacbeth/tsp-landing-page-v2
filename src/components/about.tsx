import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ShieldCheck, Globe, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const SCORE_URL = "https://www.retirementscorecalculator.com/";

const credentials = [
  { icon: Award, label: "25 Years Experience" },
  { icon: ShieldCheck, label: "Licensed Financial Advisor" },
  { icon: Globe, label: "Full Market Access" },
  { icon: MapPin, label: "Kelowna, BC" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-light-purple/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo column */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-brand-purple/15 w-full max-w-md">
                <Image
                  src="/images/brad-macbeth.jpeg"
                  alt="Brad MacBeth — Licensed Financial Advisor and Founder of The Simple Plan"
                  width={450}
                  height={550}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full rounded-3xl bg-gradient-to-br from-brand-purple/20 to-sky-blue/20" />
            </div>
          </div>

          {/* Content column */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-brand-purple uppercase tracking-widest mb-3">
                Your Advisor
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-body leading-tight">
                Easy to get to know.{" "}
                <span className="text-brand-purple">Easy to grow with.</span>
              </h2>
            </div>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3">
              {credentials.map((cred) => (
                <Badge
                  key={cred.label}
                  variant="secondary"
                  className="bg-white border border-border px-4 py-2 text-sm font-medium text-text-body/80"
                >
                  <cred.icon className="h-4 w-4 mr-2 text-brand-purple" />
                  {cred.label}
                </Badge>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-brand-purple pl-5 py-2">
              <p className="text-lg text-text-body/80 leading-relaxed italic">
                &ldquo;I built The Simple Plan because most people don&apos;t
                need a 50-page binder — they need a clear roadmap and someone
                they can trust to explain it in plain English.&rdquo;
              </p>
              <cite className="text-sm font-semibold text-brand-purple mt-2 block not-italic">
                — Brad MacBeth, The Simple Plan
              </cite>
            </blockquote>

            {/* Bio */}
            <div className="space-y-4 text-text-body/70 leading-relaxed">
              <p>
                For 25 years, Brad has helped Canadian families across the
                country plan for retirement, protect what matters, and build
                confidence in their financial future. As a broker — not tied to
                any single institution — he has access to the full market and
                selects what&apos;s genuinely right for each client.
              </p>
              <p>
                His approach is built on three simple steps:{" "}
                <strong className="text-text-body">Plan</strong> (a real
                cashflow plan for your retirement years),{" "}
                <strong className="text-text-body">Protect</strong> (the right
                insurance and coverage), and{" "}
                <strong className="text-text-body">Progress</strong> (an
                investment strategy aligned with your goals). One call. One
                advisor. One clear plan.
              </p>
            </div>

            <a
              href={SCORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full px-8 text-base font-semibold h-14"
              )}
            >
              Start With Your Free Score
              <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
