// src/components/ResourcesHero.tsx - COMPLETELY REDESIGNED TO MATCH DESIGN SYSTEM
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, Lightbulb, Calendar, Search, Sparkles, ArrowRight } from "lucide-react";

const ResourcesHero = () => {
  return (
    <section className="relative min-h-[70vh] pt-20 pb-12 px-4 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-orange-400/20 rounded-full blur-lg animate-pulse delay-700"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-32 right-20 w-8 h-8 bg-white/20 rounded-lg rotate-45 animate-spin slow"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-orange-300/30 rounded-lg rotate-12"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-white/30 rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          {/* Floating premium icons */}
          <div className="flex justify-center mb-12 space-x-6">
            {[
              { icon: BookOpen, delay: "0ms" },
              { icon: TrendingUp, delay: "200ms" },
              { icon: Lightbulb, delay: "400ms" }
            ].map(({ icon: Icon, delay }, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ animationDelay: delay }}
              >
                <div className="p-5 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/30 shadow-2xl group-hover:scale-110 transition-all duration-300 hover:bg-white/20">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 right-2 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-orange-300/60 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Main heading with enhanced styling */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Automation Insights, Tips &{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
                Strategies
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-80"></div>
            </span>
          </h1>
          
          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Explore guides, real-world use cases, and expert advice to help you save time, scale
            your business, and make your tools work harder.
          </p>

          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0 font-bold"
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Subscribe for Updates
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              className="group bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <BookOpen className="mr-3 h-6 w-6 group-hover:rotate-6 transition-transform" />
              Browse All Resources
            </Button>
          </div>

          {/* Enhanced stats section */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Automation Guides", icon: "📚" },
              { number: "25+", label: "Case Studies", icon: "💼" },
              { number: "Weekly", label: "New Content", icon: "🚀" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors">
                  {stat.number}
                </div>
                <div className="text-lg text-white/80 font-medium group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
};

export default ResourcesHero;