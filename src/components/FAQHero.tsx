// src/components/FAQHero.tsx - ENHANCED DESIGN MATCHING SYSTEM
import { Button } from "@/components/ui/button";
import { Calendar, HelpCircle, MessageCircle, Search } from "lucide-react";

const FAQHero = () => {
  const scrollToConsultation = () => {
    // Navigate to consultation booking or contact page
    window.location.href = "/workflow-audit";
  };

  return (
    <section className="relative min-h-[60vh] pt-20 pb-12 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-orange-400/20 rounded-full blur-lg animate-pulse delay-700"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-32 right-20 w-8 h-8 bg-white/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-orange-300/30 rounded-lg rotate-12"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-white/30 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        {/* FAQ-themed floating icons */}
        <div className="flex justify-center mb-12 space-x-6">
          {[
            { icon: HelpCircle, delay: "0ms" },
            { icon: MessageCircle, delay: "200ms" },
            { icon: Search, delay: "400ms" }
          ].map(({ icon: Icon, delay }, index) => (
            <div 
              key={index}
              className="relative group"
              style={{ animationDelay: delay }}
            >
              <div className="p-5 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/30 shadow-2xl group-hover:scale-110 transition-all duration-300 hover:bg-white/20">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Frequently Asked Questions
        </h1>
        
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Find quick answers to common questions about our services, process, and how automation can work for you.
        </p>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            onClick={scrollToConsultation}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0 font-bold"
          >
            <Calendar className="w-6 h-6 mr-3" />
            Book a Free Consultation
          </Button>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
};

export default FAQHero;