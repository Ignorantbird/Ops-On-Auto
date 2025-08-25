import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
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
      <Helmet>
        <title>Agentic AI Solutions - Human-Like AI That Works 24/7 | OpsOnAuto</title>
        <meta name="description" content="Advanced AI automation solutions including Voice AI Bots, Sales AI Assistants, Interview AI, and Lead Analysis. Automate conversations, decisions, and analysis with human-like AI that works 24/7." />
        <meta name="keywords" content="agentic AI, voice AI bots, sales automation, interview AI, lead analysis, AI solutions, workflow automation, conversational AI" />
        <link rel="canonical" href="https://opsonauto.com/agentic-ai" />
      </Helmet>
      
      {/* FIXED: Use white background instead of bg-background */}
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