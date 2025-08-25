// src/components/WhoWeWorkWith.tsx - FIXED
import { User, TrendingUp, Clock } from "lucide-react";

const WhoWeWorkWith = () => {
  const audiences = [
    {
      icon: User,
      title: "For Consultants & Freelancers",
      subtitle: "Automate Administrative Work",
      benefits: [
        "Automate client reporting and follow-ups",
        "Streamline proposal generation", 
        "Reduce manual data entry by 80%",
        "Focus on billable work, not busy work"
      ]
    },
    {
      icon: TrendingUp,
      title: "For Startup Teams",
      subtitle: "Scale Without Burning Out",
      benefits: [
        "Automate lead qualification and scoring",
        "Streamline customer onboarding",
        "Reduce manual processes by 60%", 
        "Grow efficiently with limited resources"
      ]
    },
    {
      icon: Clock,
      title: "For SMB Employees", 
      subtitle: "Eliminate Time Drains",
      benefits: [
        "Automate repetitive reporting tasks",
        "Streamline communication workflows",
        "Reduce manual data processing",
        "Focus on strategic initiatives"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Who We 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Help</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We work with businesses of all sizes to eliminate time-consuming manual processes 
            and scale operations efficiently.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full flex items-center justify-center mb-6">
                <audience.icon className="w-8 h-8 text-orange-600" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {audience.title}
              </h3>
              <p className="text-orange-600 font-medium mb-6 text-sm">
                {audience.subtitle}
              </p>
              
              <ul className="space-y-3">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
