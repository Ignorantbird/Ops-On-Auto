// src/components/PricingHero.tsx - CORRECTED WITH DEFAULT EXPORT
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, TrendingUp, Zap, Calendar, Search } from "lucide-react";

const PricingHero = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-36 h-36 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/5 rounded-full blur-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/5 rounded-full blur-md"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Value proposition icons */}
          <div className="flex justify-center mb-8 space-x-6">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <DollarSign className="w-6 h-6 text-orange-400" />
            </div>
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <TrendingUp className="w-6 h-6 text-orange-400" />
            </div>
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <Zap className="w-6 h-6 text-orange-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Automation That Fits Your
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Business & Budget</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            From startups to enterprise - find the perfect automation package that scales with your growth and delivers measurable ROI from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Talk to Expert Now
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6"
            >
              <Search className="mr-2 h-5 w-5" />
              Calculate ROI
            </Button>
          </div>

          {/* Pricing promises */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-8 h-8 text-orange-400 mb-2" />
              <span className="text-white/80 text-sm">No Setup Fees</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-8 h-8 text-orange-400 mb-2" />
              <span className="text-white/80 text-sm">30-Day Guarantee</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-8 h-8 text-orange-400 mb-2" />
              <span className="text-white/80 text-sm">Cancel Anytime</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-8 h-8 text-orange-400 mb-2" />
              <span className="text-white/80 text-sm">ROI Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;