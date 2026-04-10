import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { StatsBand } from "@/components/stats-band";
import { ProblemSection } from "@/components/problem-section";
import { RetirementScore } from "@/components/retirement-score";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "The Simple Plan",
            description:
              "Licensed financial advisory practice helping affluent Canadians 50+ navigate retirement with clarity and confidence.",
            url: "https://getthesimpleplan.com",
            telephone: "+12508594817",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kelowna",
              addressRegion: "BC",
              addressCountry: "CA",
            },
            founder: {
              "@type": "Person",
              name: "Brad MacBeth",
              jobTitle: "Licensed Financial Advisor",
            },
            areaServed: {
              "@type": "Country",
              name: "Canada",
            },
            serviceType: [
              "Retirement Planning",
              "Tax Optimization",
              "Estate Planning",
              "Investment Management",
              "Insurance",
            ],
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <ProblemSection />
        <RetirementScore />
        <Services />
        <Testimonials />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
