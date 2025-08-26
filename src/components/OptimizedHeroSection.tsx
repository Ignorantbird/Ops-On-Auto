// src/components/OptimizedHeroSection.tsx - ENHANCED TEXT VISIBILITY
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Calendar } from "lucide-react";
import { PrimaryCTA, SecondaryCTA } from "@/components/cta/StandardizedCTA";
import { useEffect, useState } from "react";

const OptimizedHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Delay animations until after initial render for better Core Web Vitals
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
              {/* Use existing CSS class with maximum contrast */}
              <span className="hero-heading-primary block mb-2">
                Automate Repetitive Work.
              </span>
              {/* Second line also with maximum contrast */}
              <span className="hero-heading-primary block text-orange-300">
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
            <strong className="text-white">AI automation for entrepreneurs</strong> - from CRM setup to voice AI bots.{' '}
            <span className="text-orange-200 font-semibold">Save 20+ hours weekly</span> at a fraction of traditional costs.
          </p>
          
          {/* ENHANCED CTA Section */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <PrimaryCTA 
              label="Get Free Business Audit" 
              icon="calendar"
              className="transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg px-8 py-4 font-bold"
            />
            <SecondaryCTA 
              label="View Success Stories" 
              icon="arrow"
              className="bg-white/15 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 shadow-lg text-lg px-8 py-4 font-semibold"
            />
          </div>
          
          {/* ENHANCED Trust Indicators with Better Visibility */}
          <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-8 mb-16 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center gap-3 group">
              <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span 
                className="font-semibold group-hover:text-orange-200 transition-colors duration-200"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                50-80% cost savings vs traditional agencies
              </span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span 
                className="font-semibold group-hover:text-orange-200 transition-colors duration-200"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                2-week delivery not 2-3 months
              </span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span 
                className="font-semibold group-hover:text-orange-200 transition-colors duration-200"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                24/7 AI availability never calls in sick
              </span>
            </div>
          </div>

          {/* Enhanced Social Proof Stats */}
          <div className={`bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center justify-center gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-1">$2,000+</div>
                <div className="text-sm text-white/80 font-medium">Monthly savings</div>
              </div>
              <div className="w-px h-16 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-1">25+</div>
                <div className="text-sm text-white/80 font-medium">Hours saved/week</div>
              </div>
              <div className="w-px h-16 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300 mb-1">2-14</div>
                <div className="text-sm text-white/80 font-medium">Days to deploy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center shadow-lg">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHeroSection;