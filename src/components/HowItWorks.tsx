// src/components/HowItWorks.tsx - ENHANCED WITH PROPER BUTTON LINKING
import { FileText, Settings, Rocket, ArrowRight, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTA_ACTIONS from "@/lib/BookingLinks";

const HowItWorks = () => {
  const navigate = useNavigate();

  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Book 30-Min Strategy Call",
      description: "Schedule a 30-minute call where we analyze your current processes and identify automation opportunities."
    },
    {
      number: "02", 
      icon: Settings,
      title: "We Identify Repetitive Tasks",
      description: "Our team maps out your workflows and pinpoints the time-consuming tasks that can be automated."
    },
    {
      number: "03",
      icon: Rocket,
      title: "You Get Custom AI Automation",
      description: "We build and deploy tailored automation solutions that work seamlessly with your existing tools."
    }
  ];

  const handleWorkflowAudit = () => {
    navigate('/workflow-audit');
  };

  return (
    <section id="services-section" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Simple Process. Smart Results.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting started with automation is easier than you think. Here's how we work together to transform your operations.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg border-4 border-gray-50 group-hover:border-orange-100 transition-colors">
                    <step.icon className="w-10 h-10 text-blue-600 group-hover:text-orange-500 transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* UPDATED: Enhanced CTA Section with Multiple Button Options */}
          <div className="text-center space-y-6">
            {/* Primary CTA Button */}
            <Button 
              onClick={() => CTA_ACTIONS.BOOK_STRATEGY_SESSION()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-lg font-semibold bg-orange-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-500/20"
            >
              <Calendar className="w-5 h-5" />
              Book 30-Min Strategy Call
            </Button>
            
            {/* Secondary Link */}
            <div className="mt-4">
              <Link 
                to="/use-cases" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors group"
              >
                See Real Use Cases & Results
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust indicators under the CTA */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No commitment required
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free 30-minute consultation
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Custom automation plan included
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;