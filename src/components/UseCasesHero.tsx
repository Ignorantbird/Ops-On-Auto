// 2. FIXED UseCasesHero.tsx - Fix character encoding
import { Button } from "@/components/ui/button";
import { Calendar, FileSearch } from "lucide-react";

const UseCasesHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          See How Automation{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Transforms Business</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          From instant AI-powered lead calls to SEO content published at scale — our automations save hours, boost conversions, and give your team the freedom to focus on high-impact work.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
            <Calendar className="w-5 h-5 mr-2" />
            Book a Free Demo
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
            <FileSearch className="w-5 h-5 mr-2" />
            Start with a Workflow Audit
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default UseCasesHero;