// src/components/CustomIntegrations.tsx - ENHANCED
import { Button } from "@/components/ui/button";
import { Mail, Settings } from "lucide-react";

export const CustomIntegrations = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 text-center shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
          
          <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Settings className="h-8 w-8 text-orange-600" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Don't See Your 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Tool?</span>
          </h2>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            We can integrate with almost any modern platform — even custom-built systems. If your tool isn't listed, let's talk.
          </p>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400 text-lg px-8 py-6 transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Us for Custom Integrations
          </Button>
        </div>
      </div>
    </section>
  );
};