// 6. FIXED UseCasesCTA.tsx - Fix character encoding and improve design
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, CheckCircle } from "lucide-react";

const UseCasesCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's identify the best automation opportunities for your business and get you started today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Demo
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
          
          <div className="flex flex-wrap justify-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Custom solution</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">No obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesCTA;