import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const WorkflowAuditHero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('audit-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-white/5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Discover How Much Time{" "}
          <span className="text-white/90">You Could Save</span>{" "}
          with Automation
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Book your free 30-minute workflow audit and get a tailored automation plan for your business.
        </p>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto shadow-cta"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book My Free Audit
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

export default WorkflowAuditHero;