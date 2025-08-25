// src/components/ResourcesCTA.tsx - FIXED
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen } from "lucide-react";

const ResourcesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to 
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent"> Automate Your Workflows?</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get started with automation today and see how much time you can save.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Demo
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6 bg-transparent backdrop-blur-sm"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Browse All Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesCTA;
