// 2. DIRECT REPLACEMENT FOR: src/components/KeyOutcomes.tsx  
import { Clock, TrendingUp, Zap, Star } from "lucide-react";

export const KeyOutcomes = () => {
  const outcomes = [
    {
      icon: Clock,
      value: "15-25",
      unit: "hours saved per week",
      description: "through automation"
    },
    {
      icon: TrendingUp,
      value: "30%",
      unit: "increase in conversions",
      description: "on average"
    },
    {
      icon: Zap,
      value: "1-3",
      unit: "weeks deployment",
      description: "average time"
    },
    {
      icon: Star,
      value: "50%",
      unit: "faster onboarding",
      description: "for new clients"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Key <span className="text-orange-500">Outcomes</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Consistent results our clients achieve across industries and business sizes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <div 
                key={index}
                className="text-center bg-white border border-slate-300 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-orange-600" />
                </div>
                
                <div className="mb-2">
                  <span className="text-4xl font-bold text-orange-500">
                    {outcome.value}
                  </span>
                </div>
                
                <p className="font-semibold text-slate-900 mb-2">
                  {outcome.unit}
                </p>
                
                <p className="text-slate-600 text-sm">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 text-lg">
            Ready to achieve similar results? 
            <span className="text-orange-600 font-medium"> Let's discuss your automation needs.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
