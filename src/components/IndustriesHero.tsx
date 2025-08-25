// src/components/IndustriesHero.tsx - CORRECTED WITH DEFAULT EXPORT
import { Button } from "@/components/ui/button";
import { Building2, Users, Target, Briefcase, Heart, ShoppingCart, Home, Calendar, Search } from "lucide-react";

const IndustriesHero = () => {
  const industryIcons = [
    { Icon: Building2 },
    { Icon: Users },
    { Icon: Target },
    { Icon: Briefcase },
    { Icon: Heart },
    { Icon: ShoppingCart },
    { Icon: Home }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-md"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating industry icons */}
          <div className="flex flex-wrap justify-center mb-8 gap-4">
            {industryIcons.map(({ Icon }, index) => (
              <div key={index} className="relative">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {index % 3 === 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Automation Solutions for
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Every Industry</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            From healthcare to e-commerce, consultancies to real estate - we create custom automation workflows tailored to your industry's unique challenges and compliance requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Workflow Audit
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6"
            >
              <Search className="mr-2 h-5 w-5" />
              Explore Industry Playbooks
            </Button>
          </div>

          {/* Industry stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15-25</div>
              <div className="text-white/80">Hours Saved Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2 Min</div>
              <div className="text-white/80">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1-3 Weeks</div>
              <div className="text-white/80">Implementation Time</div>
            </div>
          </div>

          {/* Industry compliance badges */}
          <div className="flex flex-wrap justify-center gap-6 opacity-90">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesHero;