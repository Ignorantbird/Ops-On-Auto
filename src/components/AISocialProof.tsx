'use client';

// src/components/AISocialProof.tsx - FIXED WITH WORKING BUTTON LINKS
import { CheckCircle, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const AISocialProof = () => {
  const router = useRouter();

  // Button click handlers
  const handleViewCaseStudies = () => {
    router.push('/case-studies');
  };

  const handleScheduleDemo = () => {
    router.push('/workflow-audit');
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Director",
      company: "TechFlow Solutions",
      content: "Our AI assistant handles 80% of initial customer inquiries. Response time dropped from hours to seconds.",
      result: "3x faster customer response"
    },
    {
      name: "Michael Chen",
      role: "Sales Manager",
      company: "GrowthCorp",
      content: "The voice AI bot calls our leads within 2 minutes. Our lead-to-meeting rate increased by 40%.",
      result: "40% more qualified meetings"
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Lead",
      company: "ScaleUp Inc",
      content: "AI-generated content helped us publish 10x more landing pages. Organic traffic grew 300% in 3 months.",
      result: "300% traffic increase"
    },
    {
      name: "David Park",
      role: "CEO",
      company: "InnovateHub",
      content: "Interview AI pre-screens candidates perfectly. Our hiring process is now 60% faster with better quality.",
      result: "60% faster hiring"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how other businesses have transformed their operations with our AI solutions
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            return (
              <div key={index} className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
                
                <blockquote className="text-slate-600 leading-relaxed mb-4">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {testimonial.result}
                </div>

                {/* Subtle hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            );
          })}
        </div>

        {/* Aggregate stats */}
        <div className="grid md:grid-cols-4 gap-6 text-center mb-16">
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
            <div className="text-slate-600">Businesses Automated</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <div className="text-3xl font-bold text-orange-500 mb-2">10K+</div>
            <div className="text-slate-600">Leads Processed</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <div className="text-3xl font-bold text-blue-500 mb-2">98%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-slate-600">AI Availability</div>
          </div>
        </div>

        {/* FIXED: Case study callout with working buttons */}
        <div className="text-center">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Want to See More Detailed Results?
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Read our full case studies to see exactly how we've helped businesses like yours achieve measurable AI ROI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleViewCaseStudies}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-semibold"
              >
                View Case Studies
              </button>
              <button 
                onClick={handleScheduleDemo}
                className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISocialProof;