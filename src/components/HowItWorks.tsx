import { FileText, Settings, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Book a Free Workflow Audit",
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

  return (
    <section className="py-24 bg-white">
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
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg border-4 border-gray-50">
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/use-cases" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors group"
            >
              See Use Cases
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;