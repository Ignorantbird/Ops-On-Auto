// 5. FIXED IndustriesFinalCTA.tsx - Remove confusing gradient styling, use clean design
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

export const IndustriesFinalCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Let's discuss your unique challenges and design an automation plan that works for your business.
          </h2>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a custom workflow audit tailored to your industry's specific needs and compliance requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Get Your Free Industry Workflow Audit
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