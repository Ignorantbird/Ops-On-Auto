// src/components/AgenticAIHero.tsx - FIXED WITH PROPER BUTTON LINKS
import { Button } from "@/components/ui/button";
import { Bot, Brain, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CTA_ACTIONS } from "@/lib/BookingLinks";

const AgenticAIHero = () => {
  const navigate = useNavigate();

  const handleBookDemo = () => {
    CTA_ACTIONS.BOOK_STRATEGY_SESSION();
  };

  const handleWatchDemo = () => {
    // Open a demo video or scroll to demo section
    window.open('https://calendly.com/your-demo-link', '_blank');
    // Alternative: scroll to demo section
    // const demoSection = document.getElementById('ai-demo-section');
    // if (demoSection) {
    //   demoSection.scrollIntoView({ behavior: 'smooth' });
    // }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 pt-20 flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-60 left-1/2 w-12 h-12 bg-white/5 rounded-full animate-bounce delay-700"></div>
        
        {/* AI Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
          <path d="M100,200 Q300,100 500,200 T900,200" stroke="currentColor" strokeWidth="2" fill="none" className="text-orange-500">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M100,400 Q300,300 500,400 T900,400" stroke="currentColor" strokeWidth="2" fill="none" className="text-white">
            <animate attributeName="stroke-dasharray" values="1000,0;0,1000;1000,0" dur="10s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating AI Icons */}
          <div className="flex justify-center mb-8 space-x-8">
            <div className="relative">
              <Bot className="w-16 h-16 text-orange-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full animate-ping"></div>
            </div>
            <div className="relative">
              <Brain className="w-16 h-16 text-white animate-bounce" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full animate-ping delay-500"></div>
            </div>
            <div className="relative">
              <Zap className="w-16 h-16 text-orange-400 animate-pulse delay-1000" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full animate-ping delay-1000"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Human-Like AI That Works 24/7
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Deploy AI Sales Persons, Voice AI Bots, Interview AI, and Data Analytics – advanced agents that think, decide, and act autonomously to grow your business 24/7.
          </p>
          
          {/* FIXED: CTAs with proper onClick handlers */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleBookDemo}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Bot className="w-5 h-5 mr-2" />
              Book a Free AI Demo
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleWatchDemo}
              className="text-lg px-8 py-6 border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Watch AI in Action
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-sm text-white/80">
            <p>✓ No setup fees ✓ 30-day trial ✓ Human-like conversations ✓ Real-time decisions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticAIHero;