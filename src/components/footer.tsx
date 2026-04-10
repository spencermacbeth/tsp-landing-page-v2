import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const SCORE_URL = "https://www.retirementscorecalculator.com/";

const getStartedLinks = [
  { label: "Free Retirement Score", href: SCORE_URL, external: true },
  { label: "How We Help", href: "#services" },
  { label: "About Brad", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
];

const serviceLinks = [
  { label: "Retirement Planning", href: "#services" },
  { label: "Life Insurance", href: "#services" },
  { label: "Tax Optimization", href: "#services" },
  { label: "Investment Management", href: "#services" },
  { label: "Estate Planning", href: "#services" },
];

export function Footer() {
  return (
    <footer className="bg-text-body text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-white.png"
                alt="The Simple Plan"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-lg font-bold">The Simple Plan</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Helping Canadian families plan for retirement, protect what
              matters, and build lasting financial confidence — with clarity
              and without jargon.
            </p>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">
              Get Started
            </h4>
            <ul className="space-y-3">
              {getStartedLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} The Simple Plan. Brad MacBeth.
              All rights reserved.
            </p>
            <p className="text-xs text-white/40 mt-1">
              Kelowna, BC &middot; Serving clients across Canada
            </p>
          </div>
        </div>

        <p className="text-xs text-white/30 mt-8 leading-relaxed max-w-3xl">
          For informational purposes only. The Retirement Score Calculator
          provides a general indication of retirement readiness and does not
          constitute personalized financial advice. Insurance products and
          financial services are subject to eligibility and underwriting
          requirements. Brad MacBeth is a licensed financial advisor operating as
          a broker with access to multiple institutions. Past performance does
          not indicate future results.
        </p>
      </div>
    </footer>
  );
}
