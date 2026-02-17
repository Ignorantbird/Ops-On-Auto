'use client';

import AgenticAIHero from "@/components/AgenticAIHero";
import WhatIsAgenticAI from "@/components/WhatIsAgenticAI";
import AISolutions from "@/components/AISolutions";
import AIHowItWorks from "@/components/AIHowItWorks";
import AITargetAudience from "@/components/AITargetAudience";
import AIKeyOutcomes from "@/components/AIKeyOutcomes";
import AISocialProof from "@/components/AISocialProof";
import AIFinalCTA from "@/components/AIFinalCTA";

const AgenticAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <AgenticAIHero />
      <WhatIsAgenticAI />
      <AISolutions />
      <AIHowItWorks />
      <AITargetAudience />
      <AIKeyOutcomes />
      <AISocialProof />
      <AIFinalCTA />
    </div>
  );
};

export default AgenticAI;
