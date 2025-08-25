import { Button } from "@/components/ui/button";
import { Phone, Bot, UserCheck, TrendingUp, ArrowRight } from "lucide-react";

const AISolutions = () => {
  const solutions = [
    {
      icon: Phone,
      title: "Voice AI Bots",
      description: "Call new leads within 2 minutes of enquiry submission, answer their questions, qualify them, and schedule meetings directly in your calendar.",
      benefits: [
        "Instant lead response (within 2 minutes)",
        "Natural conversation flow", 
        "Automatic meeting scheduling",
        "24/7 availability"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Bot,
      title: "Sales AI Assistants",
      description: "Handle objection management, upsell suggestions, and automated follow-up sequences — keeping your sales pipeline active 24/7.",
      benefits: [
        "Intelligent objection handling",
        "Personalized upsell opportunities",
        "Automated follow-up sequences", 
        "Pipeline optimization"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: UserCheck,
      title: "Interview AI",
      description: "Pre-screen candidates with conversational AI that asks relevant questions, assesses answers, and generates structured reports for your hiring team.",
      benefits: [
        "Automated candidate screening",
        "Consistent interview process",
        "Detailed assessment reports",
        "Time-saving recruitment"
      ],
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Lead Analysis & Reporting",
      description: "AI-generated insights that show which campaigns, keywords, and channels drive the best ROI — essential for PPC and high-volume lead-gen industries.",
      benefits: [
        "Real-time campaign analysis",
        "ROI optimization insights",
        "Automated reporting",
        "Performance predictions"
      ],
      gradient: "from-slate-600 to-slate-700"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">AI Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose from our suite of intelligent AI solutions designed to automate your most critical business processes
          </p>
        </div>

        <div className="space-y-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Icon Section */}
                <div className="lg:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className={`w-32 h-32 bg-gradient-to-r ${solution.gradient} rounded-3xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-400/20 rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400/20 rounded-full animate-bounce delay-500"></div>
                    <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                    {solution.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Ready to See AI in Action?</h3>
            <p className="text-lg text-slate-600 mb-6">
              Book a free demo and see how our AI solutions can transform your business operations
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4"
            >
              <Bot className="w-5 h-5 mr-2" />
              Schedule AI Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;