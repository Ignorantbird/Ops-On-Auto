// src/pages/VoiceAI.tsx - UPDATED FOR AGENTIC AI POSITIONING
import Navigation from "@/components/Navigation";
import VoiceAISection from "@/components/VoiceAISection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const VoiceAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Voice Agent - Intelligent Voice Automation That Never Sleeps | OpsOnAuto"
        description="Advanced AI Voice Agent for intelligent conversations. Human-like voice bots that handle lead qualification, appointment booking, and customer service 24/7. Premium Agentic AI starting from $800."
        keywords="AI voice agent, agentic AI voice, intelligent voice automation, voice AI bot, conversational AI, lead qualification bot, appointment booking bot, voice automation"
        canonical="/voice-ai"
      />
      <Navigation />
      <VoiceAISection />
      <Footer />
    </div>
  );
};

export default VoiceAI;