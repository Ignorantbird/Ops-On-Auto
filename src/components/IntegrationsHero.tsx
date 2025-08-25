// src/components/IntegrationsHero.tsx - CORRECTED WITH DEFAULT EXPORT
import { Button } from "@/components/ui/button";
import { Calendar, Search } from "lucide-react";

const IntegrationsHero = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/5 rounded-full blur-md"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            We Work With the Tools You{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Already</span> Use
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Seamless integrations with 200+ platforms. Connect your existing stack and automate workflows without switching tools or disrupting your current processes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Integration Consultation
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6"
            >
              <Search className="mr-2 h-5 w-5" />
              View All Integrations
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 opacity-90">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>200+ Platform Integrations</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>No Code Required</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>Setup in 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsHero;