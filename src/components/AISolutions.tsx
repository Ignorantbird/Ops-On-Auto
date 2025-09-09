// src/components/AISolutions.tsx - FIXED WITH WORKING BUTTON LINKS
import { Button } from "@/components/ui/button";
import { Phone, Bot, UserCheck, TrendingUp, ArrowRight, Brain, Database, FileText, Cog, Wand2, Calendar, MessageCircle} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AISolutions = () => {
  const navigate = useNavigate();

  // Enhanced solutions with proper routing
  const solutions = [
    {
      icon: Phone,
      title: "Voice AI Bots",
      description: "Call new leads within 2 minutes of enquiry submission, answer their questions naturally, qualify them, and schedule meetings directly in your calendar.",
      benefits: [
        "Instant lead response (within 2 minutes)",
        "Natural conversation flow", 
        "Automatic meeting scheduling",
        "24/7 availability"
      ],
      pricing: "₹65,000 - ₹180,000",
      timeline: "2-4 weeks",
      gradient: "from-pink-500 to-rose-600",
      badge: "🎯 High Converting",
      link: "/voice-ai"
    },
    {
      icon: Bot,
      title: "AI Sales Person", 
      description: "Complete AI sales team that handles objection management, lead qualification, and automated follow-up sequences — your 24/7 sales workforce.",
      benefits: [
        "24/7 sales conversations",
        "Intelligent objection handling",
        "Automated pipeline management", 
        "3-5x ROI in 90 days"
      ],
      pricing: "₹55,000 - ₹180,000",
      timeline: "2-4 weeks",
      gradient: "from-blue-500 to-indigo-600",
      badge: "💰 Revenue Multiplier",
      link: "/sales-ai"
    },
    {
      icon: UserCheck,
      title: "Interview AI",
      description: "Pre-screen candidates with conversational AI that asks relevant questions, assesses answers, and generates structured reports for your hiring team.",
      benefits: [
        "Automated candidate screening",
        "Consistent interview process",
        "Detailed assessment reports",
        "Time-saving recruitment"
      ],
      pricing: "₹45,000 - ₹120,000",
      timeline: "2-4 weeks",
      gradient: "from-green-500 to-blue-600",
      badge: "🎨 HR Automation",
      link: "/agentic-ai"
    },
    {
      icon: TrendingUp,
      title: "Lead Analysis & Reporting",
      description: "AI-generated insights that show which campaigns, keywords, and channels drive the best ROI — essential for PPC and high-volume lead-gen industries.",
      benefits: [
        "Real-time campaign analysis",
        "ROI optimization insights",
        "Automated reporting",
        "Performance predictions"
      ],
      pricing: "₹75,000 - ₹250,000",
      timeline: "3-6 weeks",
      gradient: "from-orange-500 to-red-600",
      badge: "📊 Analytics Engine",
      link: "/data-analytics"
    },
    {
      icon: Database,
      title: "AI Data Processing & Analytics",
      description: "Transform raw business data into actionable insights with advanced AI analysis, predictive modeling, and automated reporting systems.",
      benefits: [
        "Predictive business insights",
        "Automated data processing",
        "Real-time dashboards",
        "Custom AI models"
      ],
      pricing: "₹80,000 - ₹300,000",
      timeline: "4-8 weeks",
      gradient: "from-blue-500 to-purple-600",
      badge: "🔥 Most Advanced",
      link: "/data-analytics"
    },
    {
      icon: Wand2,
      title: "Generative AI Content Factory",
      description: "Custom AI that creates brand-consistent content, proposals, marketing materials, and creative assets at scale - your 24/7 creative team.",
      benefits: [
        "Brand-consistent content creation",
        "500% increase in content output",
        "Multi-format creative generation",
        "Automated content optimization"
      ],
      pricing: "₹45,000 - ₹150,000",
      timeline: "2-4 weeks", 
      gradient: "from-purple-500 to-pink-600",
      badge: "🎨 Creative Power",
      link: "/generative-ai"
    }
  ];

  // Handler functions for button clicks
  const handleLearnMore = (solutionLink: string) => {
    navigate(solutionLink);
  };

  const handleBookConsultation = () => {
    navigate('/workflow-audit');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Advanced AI Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive suite of AI automation solutions designed to transform your business operations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex items-center gap-12 ${!isEven ? 'flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className="flex-1">
                  {/* Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                    {solution.badge}
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">What You Get:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Pricing & Timeline */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 mb-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Investment Range</div>
                        <div className="text-2xl font-bold text-blue-600">{solution.pricing}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 mb-1">Delivery Timeline</div>
                        <div className="text-xl font-semibold text-slate-900">{solution.timeline}</div>
                      </div>
                    </div>
                  </div>

                  {/* FIXED: CTA Button with proper onClick handler and correct text */}
                  <Button
                    size="lg"
                    onClick={() => handleLearnMore(solution.link)}
                    className={`bg-gradient-to-r ${solution.gradient} text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg`}
                  >
                    Learn More About {solution.title.replace(/ AI$/, '')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {/* Icon Side */}
                <div className="flex-1 flex justify-center">
                  <div className={`relative w-64 h-64 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                    <Icon className="w-32 h-32 text-white" />
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FIXED: Enhanced CTA Section with working buttons */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Scale with AI?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your business operations with intelligent automation. Start with a free consultation to discover your AI opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleBookConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free AI Consultation
            </Button>
            
            <Button 
              size="lg" 
              onClick={handleContactUs}
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact AI Specialists
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;