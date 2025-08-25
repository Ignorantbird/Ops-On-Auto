// 5. FIXED ProcessLinkback.tsx - Remove yellow background, fix character encoding
import { Button } from "@/components/ui/button";
import { Phone, FileText, Rocket } from "lucide-react";

const ProcessLinkback = () => {
  const steps = [
    {
      icon: Phone,
      step: "01",
      title: "Discovery Call",
      description: "Understand your workflows, pain points, and goals."
    },
    {
      icon: FileText,
      step: "02", 
      title: "Tailored Automation Plan",
      description: "Design a custom solution for your needs."
    },
    {
      icon: Rocket,
      step: "03",
      title: "Launch + Support",
      description: "Deploy, test, and optimize your automation."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How We Work
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From discovery to deployment — we make automation simple and effective
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
            Get Your Custom Use Case
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessLinkback;