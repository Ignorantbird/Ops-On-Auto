import { Brain, MessageCircle, GitBranch } from "lucide-react";

const WhatIsAgenticAI = () => {
  const features = [
    {
      icon: Brain,
      title: "Real-time decision-making",
      description: "Makes intelligent choices based on context and goals"
    },
    {
      icon: MessageCircle,
      title: "Human-like interactions", 
      description: "Natural conversations that feel authentic and engaging"
    },
    {
      icon: GitBranch,
      title: "Multi-step workflows",
      description: "Executes complex processes toward defined outcomes"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            What is <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Agentic AI</span>?
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Agentic AI goes beyond simple chatbots. It can think, decide, and act toward a goal — just like a skilled human team member.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="text-2xl font-semibold mb-4 text-slate-900">
              The Difference is Intelligence
            </h3>
            <p className="text-lg text-slate-600">
              While traditional automation follows rigid scripts, agentic AI adapts, learns, and makes decisions in real-time.
              It's like having a smart assistant who understands your business goals and works autonomously to achieve them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAgenticAI;