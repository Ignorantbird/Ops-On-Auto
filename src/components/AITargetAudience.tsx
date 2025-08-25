import { TrendingUp, Home, Rocket, Users } from "lucide-react";

const AITargetAudience = () => {
  const audiences = [
    {
      icon: TrendingUp,
      title: "PPC Agencies",
      description: "Increase speed-to-lead without hiring more agents",
      benefits: [
        "Instant lead qualification",
        "24/7 response capability", 
        "Reduced cost per conversion",
        "Scale without headcount"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Home,
      title: "Real Estate Teams",
      description: "Call and qualify property leads instantly",
      benefits: [
        "Immediate lead follow-up",
        "Property-specific conversations",
        "Showing appointments automation",
        "Market insight delivery"
      ],
      color: "from-green-500 to-blue-600"
    },
    {
      icon: Rocket,
      title: "Startups & SMBs",
      description: "Automate lead management without extra headcount",
      benefits: [
        "Cost-effective scaling",
        "Professional lead handling",
        "Consistent follow-up",
        "Growth without overhead"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Consulting Businesses",
      description: "Free up time for billable work, not admin",
      benefits: [
        "Automated lead qualification",
        "Meeting scheduling",
        "Initial discovery calls",
        "More billable hours"
      ],
      color: "from-slate-600 to-slate-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Who Uses Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Agentic AI</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From agencies to startups, our AI solutions help businesses of all sizes automate their most critical processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full">
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${audience.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900 text-center">
                    {audience.title}
                  </h3>

                  <p className="text-slate-600 text-center mb-6 leading-relaxed">
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

        {/* Use case callout */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Not Sure Which Solution Fits Your Business?
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Our AI experts will analyze your current processes and recommend the perfect AI solution for your specific industry and use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
                Schedule Consultation
              </button>
              <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
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