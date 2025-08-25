// src/components/FAQFinalCTA.tsx - ENHANCED DESIGN MATCHING SYSTEM
import { Button } from "@/components/ui/button";
import { Calendar, Mail, MessageCircle } from "lucide-react";

const FAQFinalCTA = () => {
  const scrollToConsultation = () => {
    window.location.href = "/workflow-audit";
  };

  const scrollToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Question mark emoji */}
          <div className="text-6xl mb-8">❓</div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's talk and design a solution that works for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToConsultation}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0 font-bold"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book a Free Consultation
            </Button>
            
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <Mail className="w-6 h-6 mr-3" />
              Contact Us
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors">Free consultation</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors">No obligation</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors">Custom solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQFinalCTA;