// 4. ALSO UPDATE: src/components/CaseStudiesCTA.tsx
import { Button } from "@/components/ui/button";
import { Calendar, Search } from "lucide-react";

export const CaseStudiesCTA = () => {
  return (
    <section className="py-20 px-4 bg-slate-800 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Success Story <span className="text-orange-400">Starts Here</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's build an automation solution that delivers measurable impact for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 border-0"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Demo
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6 bg-transparent"
            >
              <Search className="mr-2 h-5 w-5" />
              Start Workflow Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
