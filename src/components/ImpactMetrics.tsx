// 4. FIXED ImpactMetrics.tsx - Create proper metrics visualization
import { TrendingUp, Clock, Users, Zap } from "lucide-react";

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "15-25",
      label: "Hours saved per week through automation",
      color: "text-green-500"
    },
    {
      icon: Users,
      value: "30%",
      label: "Increase in lead conversion with instant response",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      value: "50%",
      label: "Faster task completion with automated workflows",
      color: "text-orange-500"
    },
    {
      icon: Zap,
      value: "1-3",
      label: "Weeks for complete automation implementation",
      color: "text-purple-500"
    }
  ];

  const additionalBenefits = [
    "Significant organic traffic gains from scalable SEO",
    "Higher client satisfaction from consistent communication",
    "More accurate sales forecasting and reporting",
    "Team focus shifted to high-impact, strategic work"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Key Outcomes from Our Clients
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from businesses that used to struggle with repetitive tasks. OptsOnAuto
          </p>
        </div>
        
        {/* Main Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="group text-center p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className={`text-4xl font-bold ${metric.color} mb-3`}>
                  {metric.value}
                </div>
                <div className="text-slate-600 leading-relaxed">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Additional Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
