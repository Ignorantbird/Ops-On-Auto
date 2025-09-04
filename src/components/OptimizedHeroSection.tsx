// src/components/OptimizedHeroSection.tsx - PURPLE COW MESSAGING TRANSFORMATION
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
          {/* PURPLE COW MESSAGING - Text on semi-transparent background */}
          <div className="mb-8 bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              {/* Purple Cow Hook - Speed Differentiator */}
              <span className="hero-heading-primary block mb-2 text-white">
                Automate Repetitive Work.
              </span>
              {/* Purple Cow Differentiator - The Remarkable Statement */}
              <span className="block text-slate-800 font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
                2 Weeks, Not 6 Months
              </span>
            </h1>
            
            {/* Purple Cow Value Proposition */}
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/95">
              Skip the 6-month enterprise timelines. Get Silicon Valley-quality automation 
              delivered in 2 weeks with 50-80% cost savings. Starting at $4,997.
            </p>
          </div>
          
          {/* Enhanced CTA Section with Purple Cow Messaging */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <PrimaryCTA 
              label="Get 2-Week Setup" 
              icon="calendar"
              className="transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              onClick={handleWorkflowAudit}
            />
            <button
              onClick={handleExploreServices}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center gap-3"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              View Service Guide
            </button>
          </div>
          
          {/* Purple Cow Trust Indicators - Focus on Differentiators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                2-week delivery guarantee
              </span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                Enterprise-grade quality
              </span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                50-80% cost savings
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