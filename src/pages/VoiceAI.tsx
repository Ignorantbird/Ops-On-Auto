import Navigation from "@/components/Navigation";
import VoiceAISection from "@/components/VoiceAISection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const VoiceAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Voice AI Calling Bot Services - Human-Like Sales & Lead Qualification"
        description="Professional Voice AI calling bot services. Human-like AI bots that qualify leads, book appointments, and handle customer inquiries with natural conversation flow. Starting at ₹40,000."
        keywords="voice AI bot, AI calling bot, lead qualification bot, appointment booking bot, conversational AI, sales automation, voice AI services"
        canonical="/voice-ai"
      />
      <Navigation />
      <VoiceAISection />
      <Footer />
    </div>
  );
};

export default VoiceAI;