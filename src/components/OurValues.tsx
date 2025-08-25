// src/components/OurValues.tsx - FIXED
import { Zap, Wrench, Eye, Headphones } from "lucide-react";

const OurValues = () => {
  const values = [
    {
      icon: Zap,
      title: "Efficiency First",
      description: "We design automations that save hours every week—not just a few minutes.",
      color: "orange"
    },
    {
      icon: Wrench,
      title: "Custom Solutions", 
      description: "No cookie-cutter setups. Every workflow is tailored to your unique needs.",
      color: "blue"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear processes, measurable results, and open communication at every step.",
      color: "green"
    },
    {
      icon: Headphones,
      title: "Continuous Support",
      description: "We don't disappear after launch—we help you adapt and scale your automation.",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: {
        accent: "from-orange-400 to-orange-500",
        bg: "from-orange-50 to-orange-100",
        hoverBg: "from-orange-100 to-orange-200",
        icon: "text-orange-600"
      },
      blue: {
        accent: "from-blue-400 to-blue-500", 
        bg: "from-blue-50 to-blue-100",
        hoverBg: "from-blue-100 to-blue-200",
        icon: "text-blue-600"
      },
      green: {
        accent: "from-green-400 to-green-500",
        bg: "from-green-50 to-green-100", 
        hoverBg: "from-green-100 to-green-200",
        icon: "text-green-600"
      },
      purple: {
        accent: "from-purple-400 to-purple-500",
        bg: "from-purple-50 to-purple-100",
        hoverBg: "from-purple-100 to-purple-200", 
        icon: "text-purple-600"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            💡 Our 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Values</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const colors = getColorClasses(value.color);
            return (
              <div 
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 text-center group relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.accent}`}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} group-hover:${colors.hoverBg} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300`}>
                  <value.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
