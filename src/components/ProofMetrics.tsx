// 3. FIXED ProofMetrics.tsx - Create proper metrics section
import { TrendingUp, Clock, Users, Award } from "lucide-react";

export const ProofMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "15-25",
      label: "Hours saved weekly",
      color: "text-green-500"
    },
    {
      icon: Clock,
      value: "2 Min", 
      label: "Average response time",
      color: "text-blue-500"
    },
    {
      icon: Award,
      value: "1-3 Weeks",
      label: "Implementation time",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</div>
                  <div className="text-slate-600">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
