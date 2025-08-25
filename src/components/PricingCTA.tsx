// 5. FIXED PricingCTA.tsx - Create if it doesn't exist or ensure proper styling
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

const PricingCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Not Sure Which Plan Is Right for You?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Let's walk through your needs and design the perfect automation plan together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Workflow Audit
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-500 text-blue-500 px-8 py-4 text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;