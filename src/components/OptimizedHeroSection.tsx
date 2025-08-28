// src/components/OptimizedHeroSection.tsx - ENHANCED WITH DARKER TEXT & PROPER BUTTON LINKING
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Calendar } from "lucide-react";
import { PrimaryCTA, SecondaryCTA } from "@/components/cta/StandardizedCTA";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OptimizedHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  // Delay animations until after initial render for better Core Web Vitals
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Button click handlers with proper routing
  const handleWorkflowAudit = () => {
    navigate('/workflow-audit');
  };

  const handleExploreServices = () => {
    navigate('/services');
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] pt-16 flex items-center bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden">
      {/* ENHANCED Background for Better Text Contrast */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        {/* Optimized background elements */}
        <div className="opacity-0 animate-fadeIn animation-delay-500">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 rounded-lg transform rotate-45 opacity-50"></div>
        </div>
      </div>

      {/* Main Content - Enhanced for Maximum Visibility */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* MAXIMUM VISIBILITY - Text on semi-transparent background */}
          <div className="mb-8 bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              {/* First line - keeping white for contrast */}
              <span className="hero-heading-primary block mb-2 text-white">
                Automate Repetitive Work.
              </span>
              {/* UPDATED: Second line with MUCH DARKER color for better readability */}
              <span className="block text-slate-800 font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
                Focus on What Matters.
              </span>
            </h1>
          </div>
          
          {/* ENHANCED Subtitle with Better Readability */}
          <p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            style={{
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: `
                0 2px 4px rgba(0, 0, 0, 0.5),
                0 4px 8px rgba(0, 0, 0, 0.3),
                0 1px 2px rgba(0, 0, 0, 0.7)
              `
            }}
          >
            <strong className="text-white">AI automation for entrepreneurs</strong> - from CRM setup to voice AI bots.
            <br className="hidden sm:block" />
            Save 20+ hours weekly at a fraction of traditional costs.
          </p>
          
          {/* UPDATED: Enhanced CTA Section with Proper Button Linking */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={handleWorkflowAudit}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold bg-orange-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/20 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <Calendar className="w-5 h-5" />
              Get Free Business Audit
            </button>
            
            <button 
              onClick={handleExploreServices}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600 border-2 transition-all duration-300 hover:scale-105"
            >
              <ArrowRight className="w-5 h-5" />
              View Service Guide
            </button>
          </div>
          
          {/* Enhanced Trust Indicators with Proper Icons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                Setup in 2 weeks or less
              </span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                Custom workflow setup
              </span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                ROI in 30 days or less
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToServices}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHeroSection;