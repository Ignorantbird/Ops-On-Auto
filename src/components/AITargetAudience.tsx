// src/components/AITargetAudience.tsx - FIXED WITH WORKING BUTTON LINKS
import { Users, TrendingUp, Building2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AITargetAudience = () => {
  const navigate = useNavigate();

  // Button click handlers
  const handleScheduleConsultation = () => {
    navigate('/workflow-audit');
  };

  const handleViewCaseStudies = () => {
    navigate('/case-studies');
  };

  const audiences = [
    {
      icon: Users,
      title: "Small Business Owners",
      description: "Scale operations without hiring more staff. Perfect for businesses with 5-50 employees looking to automate repetitive tasks.",
      benefits: [
        "Reduce operational costs by 40%",
        "Scale customer support 24/7",
        "Automate lead qualification",
        "Free up time for strategic work"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Sales Teams",
      description: "Never miss a lead again. AI handles initial contact, qualification, and scheduling while your team focuses on closing deals.",
      benefits: [
        "Instant lead response within 2 minutes",
        "Higher qualification accuracy",
        "Automated follow-up sequences",
        "Increased meeting booking rates"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Building2,
      title: "Marketing Agencies",
      description: "Deliver better results for clients with AI-powered automation. Scale content creation, reporting, and client communication.",
      benefits: [
        "Automated client reporting",
        "Scalable content generation",
        "Better campaign performance",
        "More clients with same team size"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Built for Forward-Thinking Teams
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our AI solutions are designed for businesses ready to embrace automation and scale intelligently
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            
            return (
              <div key={index} className="group relative">
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${audience.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    {audience.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {audience.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {audience.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${audience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-3xl font-bold text-blue-500 mb-2">85%</div>
            <div className="text-slate-600">Faster lead response time</div>
          </div>
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-3xl font-bold text-orange-500 mb-2">40%</div>
            <div className="text-slate-600">Increase in qualified leads</div>
          </div>
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-3xl font-bold text-blue-500 mb-2">24/7</div>
            <div className="text-slate-600">Availability without breaks</div>
          </div>
        </div>

        {/* FIXED: Use case callout with working buttons */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Not Sure Which Solution Fits Your Business?
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Our AI experts will analyze your current processes and recommend the perfect AI solution for your specific industry and use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleScheduleConsultation}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-semibold"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={handleViewCaseStudies}
                className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITargetAudience;