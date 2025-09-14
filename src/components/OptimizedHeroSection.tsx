// STEP 1: Fix OptimizedHeroSection.tsx - Layout and Z-index Issues
// Replace the entire OptimizedHeroSection.tsx component

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
    // 🔧 FIXED: Updated section to account for fixed navigation height and proper spacing
    <section className="relative min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden">
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

      {/* 🔧 FIXED: Increased z-index and added proper container spacing */}
      <div className="container mx-auto px-6 relative z-30 w-full">
        <div className="max-w-5xl mx-auto text-center">
          {/* 🔧 FIXED: Enhanced content box with proper spacing and backdrop */}
          <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              <span className="hero-heading-primary block mb-2 text-white">
                Automate Repetitive Work.
              </span>
              <span className="block text-orange-300 font-extrabold">
                2 Weeks, Not 6 Months
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Skip the 6-month enterprise timelines. Get Silicon Valley-quality automation delivered in 2 weeks with 50-80% cost savings. Starting at $4,997.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={handleWorkflowAudit}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Get 2-Week Setup
              </button>
              
              <button
                onClick={handleExploreServices}
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg"
              >
                <ArrowRight className="w-5 h-5" />
                View Service Guide
              </button>
            </div>
          </div>
          
          {/* 🔧 FIXED: Trust Indicators with mobile-responsive layout and visibility */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-white/90 px-2 sm:px-0">
            <div className="flex items-center gap-2 sm:gap-3 group bg-black/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 justify-center sm:justify-start">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-200">
                2-week delivery guarantee
              </span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 group bg-black/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 justify-center sm:justify-start">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-200">
                Enterprise-grade quality
              </span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 group bg-black/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 justify-center sm:justify-start">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-200">
                50-80% cost savings
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-30"
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