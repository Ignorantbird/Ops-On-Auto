// src/components/AISolutions.tsx - SAFE ENHANCEMENT (keeps your current structure)
import { Button } from "@/components/ui/button";
import { Phone, Bot, UserCheck, TrendingUp, ArrowRight, Brain, Database, FileText, Cog, Wand2} from "lucide-react";

const AISolutions = () => {
  // ENHANCED your existing 4 solutions + add 2 more using existing components
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
      pricing: "₹65,000 - ₹180,000", // ENHANCED PRICING
      timeline: "2-4 weeks",
      gradient: "from-pink-500 to-rose-600",
      badge: "🎯 High Converting",
      link: "/voice-ai" // EXISTING ROUTE
    },
    {
      icon: Bot,
      title: "Sales AI Assistants", 
      description: "Handle objection management, upsell suggestions, and automated follow-up sequences — keeping your sales pipeline active 24/7.",
      benefits: [
        "Intelligent objection handling",
        "Personalized upsell opportunities",
        "Automated follow-up sequences", 
        "Pipeline optimization"
      ],
      pricing: "₹55,000 - ₹150,000", // ENHANCED PRICING
      timeline: "2-5 weeks",
      gradient: "from-purple-500 to-pink-600",
      badge: "✨ Revenue Boost",
      link: "/agentic-ai" // EXISTING ROUTE (part of agentic AI)
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
      pricing: "₹45,000 - ₹120,000", // ENHANCED PRICING
      timeline: "2-4 weeks",
      gradient: "from-green-500 to-blue-600",
      badge: "🎨 HR Automation",
      link: "/agentic-ai" // EXISTING ROUTE (part of agentic AI)
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
      pricing: "₹75,000 - ₹250,000", // ENHANCED PRICING
      timeline: "3-6 weeks",
      gradient: "from-orange-500 to-red-600",
      badge: "📊 Analytics Engine",
      link: "/ai-data-processing" // EXISTING ROUTE
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
      pricing: "₹80,000 - ₹300,000", // ENHANCED PRICING
      timeline: "4-8 weeks",
      gradient: "from-blue-500 to-purple-600",
      badge: "🔥 Most Advanced",
      link: "/ai-data-processing" // EXISTING ROUTE
    },
    {
      icon: FileText,
      title: "Programmatic SEO & Content",
      description: "Scale your content creation and SEO efforts with AI-powered systems that generate hundreds of optimized pages automatically.",
      benefits: [
        "Mass content generation",
        "SEO optimization at scale",
        "Automated publishing",
        "Performance tracking"
      ],
      pricing: "₹60,000 - ₹200,000", // ENHANCED PRICING
      timeline: "3-6 weeks", 
      gradient: "from-indigo-500 to-purple-600",
      badge: "🚀 Growth Engine",
      link: "/programmatic-seo" // EXISTING ROUTE
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
      link: "/generative-ai" // NOW LINKS TO NEW PAGE!
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Enhanced AI Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive suite of AI solutions designed to automate your most critical business processes and accelerate growth
          </p>
        </div>

        {/* Enhanced Solutions with Pricing */}
        <div className="space-y-20">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    {solution.badge && (
                      <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                        {solution.badge}
                      </span>
                    )}
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700">{benefit}</span>
                      </div>
                    ))}
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

                  {/* CTA */}
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${solution.gradient} text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg`}
                    onClick={() => window.location.href = solution.link}
                  >
                    Learn More About {solution.title.split(' ')[0]} AI
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

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Scale with AI?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your business operations with intelligent automation. Start with a free consultation to discover your AI opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/workflow-audit'}
            >
              Get Free AI Audit
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-600"
              onClick={() => window.location.href = '/contact'}
            >
              Book Strategy Call
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-blue-200">
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              No upfront costs for consultation
            </div>
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Results guaranteed in 90 days
            </div>
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Full refund if not satisfied
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;