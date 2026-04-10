import {
  Landmark,
  ShieldCheck,
  Receipt,
  TrendingUp,
  ScrollText,
  Building2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Landmark,
    title: "Retirement Income Planning",
    description:
      "CPP, OAS, RRSP, RRIF, TFSA, pension splitting — we map how all the pieces fit together for your specific situation, so you never wonder if you'll run out.",
  },
  {
    icon: ShieldCheck,
    title: "Family Protection & Insurance",
    description:
      "Life, critical illness, disability — the right coverage so your family is protected if something unexpected happens. We find the right fit from across the full market.",
  },
  {
    icon: Receipt,
    title: "Tax Optimization",
    description:
      "Strategic RRSP and TFSA planning, income splitting, and retirement withdrawal sequencing — to keep more of what you've earned and minimize what you give to CRA.",
  },
  {
    icon: TrendingUp,
    title: "Investment Management",
    description:
      "A portfolio strategy built around your goals — not a bank's product shelf. We have access to the full market and select what's genuinely right for you.",
  },
  {
    icon: ScrollText,
    title: "Estate & Legacy Planning",
    description:
      "Beneficiary structures, wealth transfer, and protecting what you've built for the people who matter most. Clear plans that don't leave your family guessing.",
  },
  {
    icon: Building2,
    title: "Mortgage & Banking",
    description:
      "One call handles it all — including mortgage advice and banking that integrates with your broader financial plan, so nothing falls through the cracks.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-gradient-to-br from-hero-dark via-hero-mid to-brand-purple"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-sky-blue uppercase tracking-widest mb-3">
            One Call for All Your Needs
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Everything your family&apos;s financial future needs —{" "}
            <span className="text-sky-blue">in one place.</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            As a broker, Brad has access to the full market — not tied to one
            institution&apos;s products. From retirement income to insurance to
            estate planning, everything works together as one plan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-white/8 backdrop-blur-sm border-white/10 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-7">
                <div className="h-12 w-12 rounded-xl bg-sky-blue/15 flex items-center justify-center mb-5 group-hover:bg-sky-blue/25 transition-colors">
                  <service.icon className="h-6 w-6 text-sky-blue" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
