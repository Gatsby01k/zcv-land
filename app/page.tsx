import Hero from "@/components/sections/Hero";
import Strip from "@/components/sections/Strip";
import ProgramSection from "@/components/sections/ProgramSection";
import BonusSection from "@/components/sections/BonusSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StandardsSection from "@/components/sections/StandardsSection";
import FinalCta from "@/components/sections/FinalCta";

export default function Page() {
  return (
    <main>
      <Hero />
      <Strip />
      <section className="shell" id="program">
        <ProgramSection />
        <BonusSection />
        <CalculatorSection />
        <ProcessSection />
        <StandardsSection />
      </section>
      <FinalCta />
    </main>
  );
}
