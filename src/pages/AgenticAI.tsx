// src/pages/AgenticAI.tsx - FIXED TO USE SEO COMPONENT
import Navigation from "@/components/Navigation";
import { SEO } from "@/components/SEO"; // Use centralized SEO component
import AgenticAIHero from "@/components/AgenticAIHero";
import WhatIsAgenticAI from "@/components/WhatIsAgenticAI";
import AISolutions from "@/components/AISolutions";
import AIHowItWorks from "@/components/AIHowItWorks";
import AITargetAudience from "@/components/AITargetAudience";
import AIKeyOutcomes from "@/components/AIKeyOutcomes";
import AISocialProof from "@/components/AISocialProof";
import AIFinalCTA from "@/components/AIFinalCTA";
import Footer from "@/components/Footer";

const AgenticAI = () => {
  return (
    <>
      {/* FIXED: Use SEO component instead of Helmet directly */}
      <SEO
        title="Agentic AI Solutions - Human-Like AI That Works 24/7"
        description="Advanced AI automation solutions including Voice AI Bots, Sales AI Assistants, Interview AI, and Lead Analysis. Automate conversations, decisions, and analysis with human-like AI that works 24/7."
        keywords="agentic AI, voice AI bots, sales automation, interview AI, lead analysis, AI solutions, workflow automation, conversational AI"
        canonical="/agentic-ai"
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <AgenticAIHero />
          <WhatIsAgenticAI />
          <AISolutions />
          <AIHowItWorks />
          <AITargetAudience />
          <AIKeyOutcomes />
          <AISocialProof />
          <AIFinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AgenticAI;