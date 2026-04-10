"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const SCORE_URL = "https://www.retirementscorecalculator.com/";

const problems = [
  "Do I have enough to retire? I honestly don't know.",
  "I have money in different accounts, but no actual plan.",
  "I want to make sure my family is taken care of.",
  "I feel overwhelmed every time I try to figure this out.",
  "I don't want to be a burden on my kids.",
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-brand-purple uppercase tracking-widest mb-3">
                Sound familiar?
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-body leading-tight">
                That quiet worry about retirement?{" "}
                <span className="text-brand-purple">You&apos;re not alone.</span>
              </h2>
            </div>

            <p className="text-lg text-text-body/70 leading-relaxed">
              After 25 years helping Canadian families plan for retirement, these
              are the questions I hear most:
            </p>

            <ul className="space-y-4">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <CircleCheck className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                  <span className="text-text-body/80 leading-relaxed">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-text-body/80 leading-relaxed italic border-l-4 border-brand-purple pl-4">
              Here&apos;s what I&apos;ve learned: the worry is almost always
              worse than the number. Once you see where you actually stand, you
              can breathe — and make a plan.
            </p>

            <a
              href={SCORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full px-8 text-base font-semibold h-14"
              )}
            >
              Replace Worry With a Number
              <span className="ml-2">&rarr;</span>
            </a>
          </div>

          {/* Right column - image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-purple/10">
              <Image
                src="/images/woman-planning.png"
                alt="Canadian woman thoughtfully planning her retirement"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -top-6 -right-6 w-full h-full rounded-3xl bg-light-purple" />
          </div>
        </div>
      </div>
    </section>
  );
}
