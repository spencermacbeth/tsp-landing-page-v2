import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const testimonials = [
  {
    quote:
      "Brad made everything so clear and understandable. For the first time in years, I actually feel confident about where we're headed. He took the time to explain everything — no jargon, no rushing.",
    author: "K.B.",
    role: "Retired, British Columbia",
  },
  {
    quote:
      "After my divorce, I had no idea what I had or where I stood. Brad walked me through everything patiently and built a plan I actually understand. I finally feel like I'm in control of my own future.",
    author: "K.F.",
    role: "Business Owner, Alberta",
  },
  {
    quote:
      "I used to avoid thinking about retirement because it felt overwhelming. Brad simplified everything into three clear steps. Now I have a real plan — and that quiet worry I used to carry is just gone.",
    author: "M.R.",
    role: "Teacher, Ontario",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-brand-purple uppercase tracking-widest mb-3">
              What Clients Say
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-body leading-tight">
              Real families.{" "}
              <span className="text-brand-purple">Real clarity.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.author} delay={i * 150}>
              <Card className="border-border/50 hover:shadow-lg hover:shadow-brand-purple/5 transition-all duration-300 hover:-translate-y-1 h-full">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-brand-purple/20 mb-3" />

                  <p className="text-text-body/80 leading-relaxed mb-6 text-[15px]">
                    {t.quote}
                  </p>

                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-text-body">{t.author}</p>
                    <p className="text-sm text-text-body/50">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
