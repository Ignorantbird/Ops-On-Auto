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
        title="Agentic AI Solutions - Autonomous AI Agents That Work 24/7"
        description="Advanced Agentic AI solutions: AI Sales Persons, Voice AI Bots, Interview AI, and Data Analytics. Deploy intelligent agents that think, decide, and act autonomously to grow your business 24/7."
        keywords="agentic AI, AI sales person, autonomous AI agents, voice AI bots, sales automation, interview AI, AI data analysis, AI decision making, conversational AI"
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