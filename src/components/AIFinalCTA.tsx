// src/components/AIFinalCTA.tsx - FIXED WITH WORKING BUTTON LINKS
import { PrimaryCTA, SecondaryCTA } from "@/components/cta/StandardizedCTA";
import { CheckCircle, Bot, MessageCircle, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIFinalCTA = () => {
  const navigate = useNavigate();

  // Button click handlers
  const handleBookDemo = () => {
    navigate('/workflow-audit');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-float delay-1000 blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float delay-500 blur-md"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating AI Icons */}
          <div className="flex justify-center mb-8 space-x-6">
            {[
              { icon: Bot, delay: "0ms" },
              { icon: MessageCircle, delay: "200ms" },
              { icon: Calendar, delay: "400ms" }
            ].map(({ icon: Icon, delay }, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ animationDelay: delay }}
              >
                <div className="p-4 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/30 shadow-2xl group-hover:scale-110 transition-all duration-300 hover:bg-white/20">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full animate-ping"></div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to Put <span className="text-orange-400">AI to Work</span> for You?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's build an AI solution that sounds human, acts fast, and delivers measurable ROI. Transform your business operations starting today.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {['No setup fees', '7-day implementation', 'Proven ROI', 'Custom AI training'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/90 text-sm">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          {/* FIXED: CTA Buttons with proper onClick handlers */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button 
              onClick={handleBookDemo}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold bg-orange-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/20 animate-pulse"
            >
              <Bot className="w-5 h-5" />
              Book AI Demo
            </button>
            
            <button 
              onClick={handleContactUs}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold bg-white/10 border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 shadow-md hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </button>
          </div>

          {/* Final assurance */}
          <div className="mt-12 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 max-w-2xl mx-auto">
            <p className="text-white/90">
              <strong className="text-white">Ready in 7 days:</strong> Your custom AI solution will be trained, tested, and ready to handle real conversations within one week of starting the project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFinalCTA;