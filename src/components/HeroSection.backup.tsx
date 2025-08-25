import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BookOpen, CheckCircle, Calendar, MessageSquare } from "lucide-react";
import { PrimaryCTA, SecondaryCTA } from "@/components/cta/StandardizedCTA";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-16 flex items-center bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating animated shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-lg transform rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-lg animate-float animation-delay-2000"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-white/10 rounded-lg transform rotate-12 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/15 rounded-lg animate-bounce animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/10 rounded-lg animate-float animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-white/10 rounded-lg transform -rotate-45 animate-pulse animation-delay-500"></div>
        
        {/* Additional atmospheric elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl animate-float animation-delay-2500"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-2xl animate-pulse animation-delay-1500"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Typography with Better Visual Hierarchy */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Automate Repetitive Work.
              <span className="block mt-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Focus on What Matters.
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Smart AI solutions to automate reports, follow-ups, lead scoring, and more—so you can scale without burning out.
          </p>
          
          {/* Enhanced CTA Section with Better Spacing */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <PrimaryCTA 
              label="Book Free Audit" 
              icon="calendar"
              className="transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            />
            <SecondaryCTA 
              label="Explore Services" 
              icon="arrow"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            />
          </div>
          
          {/* Enhanced Trust Indicators with Proper Icons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                No long-term contracts
              </span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                30-day money-back guarantee
              </span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                Setup in 2 weeks or less
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;