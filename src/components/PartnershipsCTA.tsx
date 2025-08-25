import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const PartnershipsCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work With Certified Experts
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our credentials mean your automation projects are in safe hands.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto shadow-cta"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book a Free Workflow Audit
          </Button>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Certified professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Proven partnerships</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Secure solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsCTA;