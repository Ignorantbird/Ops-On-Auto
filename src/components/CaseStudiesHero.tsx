// src/components/CaseStudiesHero.tsx - CORRECTED WITH DEFAULT EXPORT
import { Button } from "@/components/ui/button";
import { Award, TrendingUp, Clock, Target, Users, BarChart3, Calendar, Search } from "lucide-react";

const CaseStudiesHero = () => {
  const resultIcons = [
    { Icon: TrendingUp, value: "+30%", label: "Conversion" },
    { Icon: Clock, value: "15-25h", label: "Time Saved" },
    { Icon: Target, value: "90%", label: "Accuracy" },
    { Icon: Users, value: "24/7", label: "Availability" }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-10 w-60 h-60 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 left-1/2 w-52 h-52 bg-white/5 rounded-full blur-xl"></div>
        
        {/* Floating achievement badges */}
        <div className="absolute top-32 right-1/4">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
            <Award className="w-6 h-6 text-orange-400" />
          </div>
        </div>
        <div className="absolute bottom-32 left-1/4">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
            <BarChart3 className="w-6 h-6 text-orange-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Results preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
            {resultIcons.map(({ Icon, value, label }, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 mb-3 hover:bg-white/20 transition-all duration-300">
                  <Icon className="w-8 h-8 text-orange-400 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-white/80 text-sm">{label}</div>
              </div>
            ))}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Real Results.{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Real Impact.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Our clients save time, boost conversions, and scale faster with OpsOnAuto's automation solutions. See how businesses like yours transformed their operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6"
            >
              <Search className="mr-2 h-5 w-5" />
              Download Case Study Bundle
            </Button>
          </div>

          {/* Social proof indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 opacity-90">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>50+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>Proven ROI Across Industries</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>Real Client Data</span>
            </div>
          </div>

          {/* Success metrics preview */}
          <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
            <p className="text-white/90 text-lg">
              <span className="font-bold text-orange-400">"From 4 hours to 15 minutes"</span> - See how our automation solutions consistently deliver measurable results for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;