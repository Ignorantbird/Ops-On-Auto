// src/components/AuditSocialProof.tsx - FIXED
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const AuditSocialProof = () => {
  const testimonials = [
    {
      quote: "The workflow audit opened our eyes to bottlenecks we didn't even notice. Two weeks later, they had us saving 12 hours a week.",
      company: "B2B Marketing Agency"
    },
    {
      quote: "In just 30 minutes, OpsOnAuto mapped a plan that cut our manual lead follow-up time to almost zero.",
      company: "Real Estate Company"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Clients Say</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
              
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-orange-500 mb-6" />
                <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <footer className="text-sm font-medium text-slate-600">
                  — {testimonial.company}
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuditSocialProof;