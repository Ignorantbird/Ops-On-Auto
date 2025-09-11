// src/components/AISolutions.tsx - UPDATED WITH 2x2 GRID AND BORDERED BOX
import { Button } from "@/components/ui/button";
import { Phone, Bot, UserCheck, TrendingUp, ArrowRight, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AISolutions = () => {
  const navigate = useNavigate();

  // AGENTIC AI SERVICES ONLY - AI That Thinks & Acts Autonomously
  const solutions = [
    {
      icon: Bot,
      title: "AI Sales Person",
      badge: "💰 Revenue Multiplier",
      description: "Autonomous AI sales agents that handle intelligent objection management, advanced lead qualification, and strategic follow-up sequences — your 24/7 sales workforce.",
      benefits: [
        "24/7 autonomous sales conversations",
        "Intelligent objection handling",
        "Strategic pipeline management",
        "5-8x ROI in 90 days"
      ],
      investmentRange: "$1,100 - $2,800+",
      timeline: "2-4 weeks",
      gradient: "from-blue-500 to-indigo-600",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      link: "/sales-ai"
    },
    {
      icon: Phone,
      title: "Voice AI Agents",
      badge: "🎯 High Converting",
      description: "Intelligent AI agents that call new leads within 2 minutes, have natural conversations, qualify prospects, and schedule meetings automatically in your calendar.",
      benefits: [
        "Instant lead response (within 2 minutes)",
        "Natural conversation intelligence",
        "Autonomous meeting scheduling",
        "24/7 intelligent availability"
      ],
      investmentRange: "$800 - $2,800+",
      timeline: "2-4 weeks",
      gradient: "from-pink-500 to-rose-600",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
      link: "/voice-ai"
    },
    {
      icon: TrendingUp,
      title: "AI Data Analytics Agents",
      badge: "📊 Intelligence Engine",
      description: "Intelligent AI agents that analyze data patterns, generate strategic insights, and provide predictive recommendations — essential for data-driven decision making.",
      benefits: [
        "Autonomous data pattern analysis",
        "Strategic insight generation",
        "Predictive intelligence recommendations",
        "Real-time decision support"
      ],
      investmentRange: "$1,500 - $3,500+",
      timeline: "3-5 weeks",
      gradient: "from-purple-500 to-pink-600",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
      link: "/data-analytics"
    },
    {
      icon: UserCheck,
      title: "Interview AI Agents",
      badge: "🎨 HR Intelligence",
      description: "Intelligent AI agents that pre-screen candidates with sophisticated conversations, assess qualifications autonomously, and generate detailed reports for your hiring team.",
      benefits: [
        "Autonomous candidate screening",
        "Consistent intelligent interviews",
        "Detailed assessment intelligence",
        "Strategic recruitment automation"
      ],
      investmentRange: "$900 - $2,400+",
      timeline: "2-4 weeks",
      gradient: "from-green-500 to-blue-600",
      iconBg: "bg-gradient-to-br from-green-500 to-blue-600",
      link: "/agentic-ai"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Advanced 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Agentic AI Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Deploy intelligent AI agents that think, decide, and act autonomously to grow your business 24/7. 
            Each agent is trained specifically for your industry and business goals.
          </p>
        </div>

        {/* Service Cards Stack - Updated Layout */}
        <div className="max-w-6xl mx-auto space-y-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Icon Side */}
                  <div className={`text-center ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative inline-block">
                      {/* Badge positioned outside the tilted container */}
                      <div className="absolute -top-6 -right-2 z-20">
                        <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full shadow-md">
                          {solution.badge}
                        </span>
                      </div>
                      
                      {/* 3D Icon Container - Tilted Style */}
                      <div className="relative">
                        <div className={`w-48 h-48 rounded-3xl ${solution.iconBg} flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-3 transition-all duration-500 relative`}>
                          {/* Orange accent dot - top right */}
                          <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full shadow-lg"></div>
                          <IconComponent className="w-20 h-20 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {solution.title}
                      </h3>
                      
                      <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        {solution.description}
                      </p>

                      {/* What You Get - 2x2 Grid Layout */}
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-slate-900 mb-4">What You Get:</h4>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-700 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Investment & Timeline - Bordered Box */}
                      <div className="mb-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <div className="text-sm text-slate-500 mb-2">Investment Range</div>
                            <div className="text-2xl font-bold text-blue-600">
                              {solution.investmentRange}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-500 mb-2">Delivery Timeline</div>
                            <div className="text-2xl font-bold text-slate-900">
                              {solution.timeline}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        onClick={() => navigate(solution.link)}
                        className={`w-full bg-gradient-to-r ${solution.gradient} hover:opacity-90 text-white border-0 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        Learn More About {solution.title}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Not sure which AI agent is right for your business? Get a personalized recommendation.
          </p>
          <Button 
            onClick={() => navigate('/workflow-audit')}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0 font-bold"
          >
            <Brain className="w-6 h-6 mr-3" />
            Get AI Strategy Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;