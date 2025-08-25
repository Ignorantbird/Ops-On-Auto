import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PrimaryCTA } from "@/components/cta/StandardizedCTA";

const ServicesHero = () => {
  return (
    <section className="relative min-h-[60vh] pt-32 flex items-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-lg transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400/15 rounded-lg"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-blue-400/20 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-blue-400/25 rounded-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-blue-400/15 rounded-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-blue-400/20 rounded-lg transform -rotate-45"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Automation Services Built for Real Business Needs
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            From CRM automation to programmatic SEO — and now advanced Agentic AI solutions — we design workflows that save time, cut costs, and scale your business without adding extra headcount.
          </p>
          
          <div className="mb-8">
            <PrimaryCTA label="Book AI Demo" icon="calendar" />
          </div>
          
          <div className="text-sm text-white/80 flex flex-wrap justify-center gap-6">
            <span className="flex items-center">
              <span className="text-green-400 mr-1">✓</span>
              No long-term contracts
            </span>
            <span className="flex items-center">
              <span className="text-green-400 mr-1">✓</span>
              30-day money-back guarantee
            </span>
            <span className="flex items-center">
              <span className="text-green-400 mr-1">✓</span>
              Setup in 2 weeks or less
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;