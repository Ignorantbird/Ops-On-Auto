'use client';

import FAQHero from "@/components/FAQHero";
import FAQSection from "@/components/FAQSection";
import FAQFinalCTA from "@/components/FAQFinalCTA";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <FAQHero />
      <FAQSection />
      <FAQFinalCTA />
    </div>
  );
};

export default FAQ;
