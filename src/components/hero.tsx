"use client";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Shield, Clock, BarChart3, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const SCORE_URL = "https://www.retirementscorecalculator.com/";

const heroCards = [
  {
    icon: Clock,
    title: "Takes just 2 minutes",
    description:
      "Get a personalized retirement readiness score — completely free, no commitment.",
  },
  {
    icon: BarChart3,
    stat: "40%",
    description:
      "Only 40% of Canadians have a written financial plan. The Simple Plan changes that.",
  },
  {
    icon: Award,
    stat: "25 years",
    description:
      "Brad MacBeth has helped Canadian families plan with clarity and confidence since 1999.",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-hero-dark via-hero-mid to-hero-light">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(134,106,174,0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(1,85,163,0.2),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl w-full px-6 pt-28 pb-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <Badge
              variant="secondary"
              className="bg-white/15 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium"
            >
              <Shield className="h-4 w-4 mr-2" />
              Trusted by Canadian Families
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Do you know where you stand for retirement?
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-lg">
              Most Canadians have a vague sense of whether they&apos;re saving
              enough — but almost nobody has a real number they feel confident
              about. Let&apos;s change that.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SCORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-hero-dark hover:bg-white/90 rounded-full px-8 text-base font-semibold h-14 shadow-lg shadow-black/20"
                )}
              >
                Get Your Free Retirement Score
                <span className="ml-2">&rarr;</span>
              </a>
              <a
                href="#services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full px-8 text-base h-14 bg-transparent"
                )}
              >
                How We Help
              </a>
            </div>
          </div>

          {/* Right column - cards */}
          <div className="space-y-4 lg:pl-8">
            {heroCards.map((card, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-sky-blue/20 flex items-center justify-center">
                    <card.icon className="h-5 w-5 text-sky-blue" />
                  </div>
                  <div>
                    {card.stat ? (
                      <p className="text-2xl font-black text-white mb-1">
                        {card.stat}
                      </p>
                    ) : (
                      <p className="text-base font-bold text-white mb-1">
                        {card.title}
                      </p>
                    )}
                    <p className="text-sm text-white/70 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
