// src/components/AuditBenefits.tsx - FIXED
import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, Wrench, TrendingUp } from "lucide-react";

const AuditBenefits = () => {
  const benefits = [
    {
      icon: Search,
      title: "Personalized Workflow Analysis",
      description: "A personalized analysis of your current workflows"
    },
    {
      icon: Target,
      title: "Bottleneck Identification",
      description: "Identification of repetitive task bottlenecks"
    },
    {
      icon: Wrench,
      title: "Automation Strategy",
      description: "Recommended automation tools & strategies for your setup"
    },
    {
      icon: TrendingUp,
      title: "ROI Estimate",
      description: "A time & ROI estimate so you know the value before committing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What You'll Get in Your Free 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Workflow Audit</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AuditBenefits;
