"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { ClipboardList, BarChart3, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/fade-in";

const SCORE_URL = "https://www.retirementscorecalculator.com/";

const steps = [
  {
    icon: ClipboardList,
    number: "1",
    title: "Answer a few simple questions",
    description:
      "About where you are today — savings, timeline, what you're hoping for.",
  },
  {
    icon: BarChart3,
    number: "2",
    title: "Get your personalized Retirement Score",
    description: "An honest snapshot of where your plan stands right now.",
  },
  {
    icon: Target,
    number: "3",
    title: "See exactly what to focus on",
    description:
      "The specific steps that could make the biggest difference for your situation.",
  },
];

export function RetirementScore() {
  return (
    <section className="py-20 md:py-28 bg-light-purple/50" id="retirement-score">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-brand-purple uppercase tracking-widest mb-3">
              Your Free Starting Point
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-body leading-tight mb-6">
              What&apos;s Your{" "}
              <span className="text-sky-blue">Retirement Score</span>?
            </h2>
            <p className="text-lg text-text-body/70 leading-relaxed">
              Most Canadians have no idea if they&apos;re actually on track — not
              a rough guess, but a real number they can plan around. Your free
              Retirement Score changes that in about 2 minutes.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Score card visual */}
          <FadeIn className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-3xl shadow-2xl shadow-brand-purple/10 p-8 border border-border">
                <Image
                  src="/images/retirement-score-card.png"
                  alt="Sample Retirement Score card showing a personalized retirement readiness score"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-text-body mb-1">
                    A clear picture in 2 minutes. Free.
                  </h3>
                  <p className="text-sm text-text-body/60">
                    No account needed. No sales call. Just your number.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Steps */}
          <FadeIn delay={150} className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-5">
                <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-purple to-deep-navy flex items-center justify-center shadow-lg shadow-brand-purple/20">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded-full">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-body mb-1">
                    {step.title}
                  </h3>
                  <p className="text-text-body/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <a
                href={SCORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-sky-blue hover:bg-sky-blue/90 text-white rounded-full px-8 text-base font-semibold h-14 shadow-lg shadow-sky-blue/20"
                )}
              >
                Get Your Free Retirement Score
                <span className="ml-2">&rarr;</span>
              </a>
              <p className="text-sm text-text-body/50 mt-3">
                Free. Takes about 2 minutes. No commitment required.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
