import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SCORE_URL = "https://www.retirementscorecalculator.com/";

export function FinalCta() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-hero-dark via-hero-mid to-brand-purple relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,167,214,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
          Knowing is always better than wondering.
        </h2>

        <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
          Your free Retirement Score takes about 2 minutes. It shows you exactly
          where your family&apos;s financial plan stands today — the strong
          points and the gaps. No commitment, no sales call.
        </p>

        <a
          href={SCORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-white text-hero-dark hover:bg-white/90 rounded-full px-10 text-lg font-bold h-16 shadow-xl shadow-black/20"
          )}
        >
          Get Your Free Retirement Score
          <span className="ml-2">&rarr;</span>
        </a>

        <p className="text-sm text-white/50 mt-6 max-w-md mx-auto leading-relaxed">
          Free. Takes 2 minutes. No account required. For informational purposes
          only. Individual circumstances vary. Results are estimates based on the
          information you provide. Not financial advice.
        </p>
      </div>
    </section>
  );
}
