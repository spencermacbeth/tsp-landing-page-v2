"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "63%",
    label: "of Canadian women worry about outliving their savings",
  },
  {
    value: "70%",
    label: "of Boomer women will outlive their spouse",
  },
  {
    value: "52%",
    label:
      "of non-retirees say having a plan is the #1 source of confidence",
  },
  {
    value: "$1.54M",
    label: "what Canadians believe they need to retire comfortably",
  },
];

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className="text-4xl md:text-5xl font-black text-white mb-2">
        {value}
      </p>
      <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-48 mx-auto">
        {label}
      </p>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="bg-gradient-to-r from-brand-purple via-hero-mid to-deep-navy py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <AnimatedStat key={stat.value} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
