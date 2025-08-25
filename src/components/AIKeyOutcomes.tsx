import { TrendingUp, Clock, MessageCircle, Target } from "lucide-react";
import { useState, useEffect } from "react";

const AIKeyOutcomes = () => {
  const outcomes = [
    {
      icon: TrendingUp,
      title: "Conversion Rate Boost",
      description: "Average increase in lead-to-customer conversion through faster, more consistent follow-up",
      suffix: "%",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Hours Saved Weekly",
      description: "Time saved per week on repetitive tasks like lead qualification and follow-up calls",
      suffix: "h",
      color: "text-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Response Time",
      description: "Average response time to new leads, dramatically improving engagement rates",
      suffix: " min",
      color: "text-orange-500"
    }
  ];

  const [counters, setCounters] = useState({
    conversion: 0,
    time: 0,
    response: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCounters(prev => ({
        conversion: prev.conversion < 30 ? prev.conversion + 1 : 30,
        time: prev.time < 15 ? prev.time + 1 : 15,
        response: prev.response < 2 ? prev.response + 0.1 : 2
      }));
    }, 100);

    const timeout = setTimeout(() => clearInterval(timer), 3000);
    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Measurable <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Key Outcomes</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our clients see immediate, measurable results from day one of implementation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            let displayValue;
            
            if (index === 0) displayValue = Math.floor(counters.conversion);
            else if (index === 1) displayValue = Math.floor(counters.time);
            else displayValue = counters.response.toFixed(1);
            
            return (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400/20 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                </div>

                <div className="mb-4">
                  <div className={`text-5xl md:text-6xl font-bold ${outcome.color} mb-2`}>
                    {displayValue}{outcome.suffix}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {outcome.title}
                  </h3>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  {outcome.description}
                </p>

                {/* Progress bar visualization */}
                <div className="mt-6">
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        index === 0 ? 'bg-green-500' : 
                        index === 1 ? 'bg-blue-500' : 'bg-orange-500'
                      }`}
                      style={{
                        width: index === 0 ? `${(counters.conversion / 30) * 100}%` :
                               index === 1 ? `${(counters.time / 15) * 100}%` :
                               `${(counters.response / 2) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional metrics */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <Target className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
            <div className="text-sm text-slate-600">Lead Coverage</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900 mb-1">365</div>
            <div className="text-sm text-slate-600">Days per Year</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900 mb-1">90%</div>
            <div className="text-sm text-slate-600">Accuracy Rate</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <MessageCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900 mb-1">0</div>
            <div className="text-sm text-slate-600">Missed Calls</div>
          </div>
        </div>

        {/* ROI Calculator teaser */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Calculate Your AI ROI
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              See how much time and money you could save with our AI solutions tailored to your business volume
            </p>
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors font-medium">
              Get ROI Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIKeyOutcomes;