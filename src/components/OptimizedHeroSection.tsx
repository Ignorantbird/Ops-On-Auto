// src/components/OptimizedHeroSection.tsx - PERFORMANCE OPTIMIZED VERSION
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
      {/* REDUCED & OPTIMIZED Background Elements - Only essential shapes */}
      <div className="absolute inset-0 z-0 opacity-0 animate-fadeIn animation-delay-500">
        {/* Only 3 optimized background elements instead of 6+ */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/5 rounded-lg transform rotate-45 opacity-50"></div>
      </div>
      
      {/* Main Content - Prioritized for LCP */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* OPTIMIZED Typography - Reduced animation complexity */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Automate Repetitive Work.
              <span className="block mt-2 text-orange-300">
                Focus on Growing Your Business.
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            <strong>AI automation for entrepreneurs</strong> - from CRM setup to voice AI bots. 
            <span className="text-orange-200">Save 20+ hours weekly</span> at a fraction of traditional costs.
          </p>
          
          {/* OPTIMIZED CTA Section - Immediate visibility */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <PrimaryCTA 
              label="Get Free Business Audit" 
              icon="calendar"
              className="transform hover:scale-105 transition-transform duration-200 shadow-xl"
            />
            <SecondaryCTA 
              label="View Success Stories" 
              icon="arrow"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-blue-600 transition-all duration-200"
            />
          </div>
          
          {/* ENHANCED Trust Indicators - More specific to your value prop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white/90 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium">
                <strong>50-80% cost savings</strong><br/>
                <span className="text-white/70">vs traditional agencies</span>
              </span>
            </div>
            
            <div className="flex items-center gap-3 justify-center group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium">
                <strong>2-week delivery</strong><br/>
                <span className="text-white/70">not 2-3 months</span>
              </span>
            </div>
            
            <div className="flex items-center gap-3 justify-center group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium">
                <strong>24/7 AI availability</strong><br/>
                <span className="text-white/70">never calls in sick</span>
              </span>
            </div>
          </div>

          {/* NEW: Instant Value Indicator */}
          <div className={`mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-2xl mx-auto transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center justify-center gap-4 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">$2,000+</div>
                <div className="text-sm text-white/70">Monthly savings</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">25+</div>
                <div className="text-sm text-white/70">Hours saved/week</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-300">2-14</div>
                <div className="text-sm text-white/70">Days to deploy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Simplified scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHeroSection;