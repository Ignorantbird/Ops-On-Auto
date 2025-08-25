import { Plug, GraduationCap, Rocket, ArrowRight } from "lucide-react";

const AIHowItWorks = () => {
  const steps = [
    {
      icon: Plug,
      title: "Connect AI to Your Systems", 
      description: "Integrate our AI with your CRM, web forms, or lead sources. Quick setup with popular tools like HubSpot, Salesforce, and custom APIs.",
      timeline: "Day 1-2",
      details: ["CRM integration", "Form connections", "API setup", "Data mapping"]
    },
    {
      icon: GraduationCap,
      title: "Train on Your Workflows",
      description: "Our AI learns your specific processes, scripts, FAQs, and business rules. Custom training ensures it sounds like your team.",
      timeline: "Day 3-5", 
      details: ["Script training", "FAQ integration", "Brand voice setup", "Process mapping"]
    },
    {
      icon: Rocket,
      title: "Launch with Monitoring",
      description: "Go live with real-time monitoring, performance tracking, and continuous optimization. Full support during launch phase.",
      timeline: "Day 6+",
      details: ["Live deployment", "Performance monitoring", "Ongoing optimization", "Support & training"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            How <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get your AI solution up and running in just one week with our proven implementation process
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-orange-400 to-blue-500 opacity-20 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto lg:mx-0">
                      {index + 1}
                    </div>
                  </div>

                  <div className="group p-8 pt-12 lg:pt-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto lg:mx-0 mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Timeline badge */}
                    <div className="inline-block px-3 py-1 bg-orange-100 border border-orange-200 rounded-full text-sm text-orange-600 font-medium mb-4">
                      {step.timeline}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Arrow for larger screens */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-blue-400" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Implementation guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Rocket className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-slate-900">7-Day Implementation Guarantee</h3>
              <p className="text-slate-600">Your AI solution will be live and working within one week, or we'll extend support at no extra cost.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHowItWorks;