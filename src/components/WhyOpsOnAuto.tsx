import { Clock, TrendingUp, Shield } from "lucide-react";

const WhyOpsOnAuto = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and free up 20+ hours per week for your team to focus on high-value work."
    },
    {
      icon: TrendingUp,
      title: "Scale Smarter",
      description: "Grow your business efficiently with AI-powered workflows that adapt to your changing needs."
    },
    {
      icon: Shield,
      title: "Built for You",
      description: "Custom solutions designed specifically for your industry, tools, and unique business processes."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Teams Choose OpsOnAuto
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOpsOnAuto;