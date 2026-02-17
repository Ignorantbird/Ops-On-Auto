'use client';

// src/components/DataAnalyticsSection.tsx - RESTRUCTURED TO MATCH VOICE AI LAYOUT
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Database, 
  MessageCircle, 
  FileText,
  CheckCircle, 
  ArrowRight,
  Zap,
  DollarSign,
  Clock,
  Users,
  ArrowLeft,
  Activity,
  PieChart,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CTA_ACTIONS from "@/lib/BookingLinks";

const DataAnalyticsSection = () => {
  const [activeTab, setActiveTab] = useState('how-it-works');
  const router = useRouter();

  // Simple benefit icons (matching Voice AI structure)
  const benefitIcons = [
    {
      icon: Clock,
      title: "24/7 Data Analysis",
      description: "AI continuously monitors and analyzes data streams",
      color: "text-pink-500"
    },
    {
      icon: TrendingUp,
      title: "10x Faster Insights",
      description: "Get strategic insights in minutes, not weeks",
      color: "text-pink-500"
    },
    {
      icon: Target,
      title: "Instant Recommendations",
      description: "AI provides actionable recommendations automatically",
      color: "text-pink-500"
    },
    {
      icon: BarChart3,
      title: "Complete Intelligence",
      description: "Full analytical AI ecosystem for your business",
      color: "text-pink-500"
    }
  ];

  // Simple feature cards (matching Voice AI structure)
  const featureCards = [
    {
      icon: Brain,
      title: "24/7 AI Data Conversations",
      description: "AI that continuously analyzes your data streams and identifies opportunities in real-time",
      benefit: "Never miss a pattern - AI analyzes data when you're unavailable"
    },
    {
      icon: Target,
      title: "Intelligent Revenue Optimization",
      description: "AI analyzes revenue patterns in real-time and provides strategic recommendations",
      benefit: "Focus only on high-impact opportunities qualified prospects"
    },
    {
      icon: TrendingUp,
      title: "Smart Predictive Modeling",
      description: "AI trained on your business data to forecast trends and prevent issues",
      benefit: "Turn predictions into competitive advantages automatically"
    },
    {
      icon: BarChart3,
      title: "Automated Intelligence Reports",
      description: "AI generates executive-level insights and moves data through your decision pipeline",
      benefit: "Get strategic insights without manual analysis"
    }
  ];

  // Updated use cases with USD pricing
  const useCases = [
    {
      title: "Revenue Intelligence & Growth Optimization",
      scenario: "AI agent analyzes sales patterns, customer behavior, and market trends to predict revenue and identify untapped growth opportunities",
      result: "40% improvement in forecast accuracy + 25% increase in revenue through AI-recommended strategies",
      timeline: "Live in 3-4 weeks",
      industries: ["SaaS", "E-commerce", "Professional Services"],
      savings: "Generate $15,000+ additional monthly revenue"
    },
    {
      title: "Customer Intelligence & Churn Prevention",
      scenario: "AI agent analyzes customer journeys, predicts churn risk, and identifies high-value prospects for targeted campaigns",
      result: "45% reduction in churn + 200% improvement in customer lifetime value",
      timeline: "Live in 4-5 weeks",
      industries: ["Subscription Services", "E-commerce", "SaaS"],
      savings: "Save $25,000-60,000 monthly in customer acquisition costs"
    },
    {
      title: "Operational Efficiency Intelligence",
      scenario: "AI agent monitors business processes, identifies bottlenecks, and recommends optimization strategies with ROI calculations",
      result: "35% reduction in operational costs + 50% faster process completion",
      timeline: "Live in 3-6 weeks", 
      industries: ["Manufacturing", "Logistics", "Service Businesses"],
      savings: "Save $40,000-80,000 monthly in operational costs"
    },
    {
      title: "Marketing Intelligence & ROI Optimization",
      scenario: "AI agent tracks campaign performance across channels, optimizes ad spend, and predicts best-performing content",
      result: "3-5x improvement in ROAS + 70% reduction in wasted ad spend",
      timeline: "Live in 2-4 weeks",
      industries: ["Agencies", "E-commerce", "Lead Generation"],
      savings: "Save $8,000-30,000 monthly in ad spend optimization"
    }
  ];

  // Updated pricing tiers with USD
  const pricingTiers = [
    {
      name: "Analytical AI Starter",
      price: "$1,500",
      description: "Intelligent AI agent for data-driven businesses",
      features: [
        "Custom analytical AI agent setup",
        "Automated data analysis & insights generation",
        "Predictive intelligence dashboard",
        "Smart reporting & strategic recommendations",
        "Multi-source data integration (CRM, marketing, sales)",
        "30-day optimization & AI agent training"
      ],
      ideal: "Growing businesses, startups, small agencies",
      timeline: "3 weeks",
      popular: false,
      roi: "8-12x ROI in first 90 days",
      savings: "Generate $8,000+/month in data-driven insights"
    },
    {
      name: "Intelligence Pro",
      price: "$3,500", 
      description: "Advanced AI agent with predictive capabilities",
      features: [
        "Advanced analytical AI agent with machine learning",
        "Predictive modeling & revenue forecasting",
        "Customer intelligence & churn prevention system",
        "Revenue optimization insights & recommendations",
        "Automated competitive analysis & market intelligence",
        "Custom dashboard & executive reporting suite",
        "Advanced integrations & API access",
        "Priority support & continuous optimization"
      ],
      ideal: "Established businesses, agencies, enterprises",
      timeline: "4-5 weeks",
      popular: true,
      roi: "15-20x ROI in first 90 days", 
      savings: "Generate $25,000+/month in strategic insights"
    },
    {
      name: "Enterprise Intelligence",
      price: "Custom Quote",
      description: "Full analytical AI ecosystem for large enterprises",
      features: [
        "Multi-agent analytical AI system",
        "Advanced machine learning models & custom algorithms",
        "Real-time intelligence platform with AI recommendations",
        "Custom AI model development & training",
        "Enterprise-grade security & compliance",
        "Dedicated AI specialist team & account manager",
        "White-label solutions & custom branding",
        "24/7 monitoring, support & continuous improvement"
      ],
      ideal: "Large enterprises, multi-location businesses",
      timeline: "6-8 weeks",
      popular: false,
      roi: "25-50x ROI in first year",
      savings: "Generate $100,000+/month in operational efficiency"
    }
  ];

  // Key platforms (matching Voice AI - 5 platforms)
  const platforms = [
    { name: "HubSpot", logo: "👥", description: "CRM integration" },
    { name: "Google Analytics", logo: "📊", description: "Website analytics" },
    { name: "Salesforce", logo: "⚡", description: "Sales data" },
    { name: "Shopify", logo: "🛒", description: "E-commerce data" },
    { name: "Custom APIs", logo: "🔧", description: "Tailored integrations" }
  ];

  const tabContent = {
    'how-it-works': (
      <div className="space-y-8">
        {/* Agentic AI Positioning Banner */}
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 border border-purple-200 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-medium mb-4">
              <Brain className="w-4 h-4 mr-2" />
              Premium Agentic AI Service
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              AI Agent That Analyzes, Thinks & Recommends
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Unlike basic analytics tools, our Analytical AI Agent uses advanced reasoning to understand your data context, identify patterns humans miss, and provide strategic recommendations for business growth.
            </p>
            <Button 
              onClick={() => router.push('/agentic-ai')} 
              className="mt-6 bg-purple-500 hover:bg-purple-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              View All Agentic AI Services
            </Button>
          </div>
        </div>

        {/* Simple Feature Cards (matching Voice AI layout) */}
        <div className="grid md:grid-cols-2 gap-8">
          {featureCards.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h4>
                    <p className="text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="flex items-center text-sm text-purple-600">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Integrations (matching Voice AI - 5 platforms) */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Powered by Leading Data Platforms</h3>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            We integrate with the most advanced data technologies to deliver natural, human-like intelligence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="text-3xl mb-2">{platform.logo}</div>
                <div className="font-semibold text-slate-900 text-sm">{platform.name}</div>
                <div className="text-xs text-slate-600">{platform.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),

    'use-cases': (
      <div className="space-y-8">
        <div className="grid gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-6 items-center">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">{useCase.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{useCase.scenario}</p>
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <div className="text-green-600 font-semibold text-sm mb-1">Results</div>
                    <div className="text-slate-700 text-sm">{useCase.result}</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-purple-500 mr-2" />
                      <span className="text-slate-600">{useCase.timeline}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-slate-600">{useCase.savings}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-slate-600">{useCase.industries.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    'pricing': (
      <div className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
              tier.popular 
                ? 'border-purple-500 bg-gradient-to-b from-purple-50 to-white transform scale-105' 
                : 'border-slate-200 bg-white hover:border-purple-300'
            }`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">{tier.price}</div>
                <p className="text-slate-600">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 mb-8">
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-green-600 font-semibold text-sm">Expected ROI</div>
                  <div className="text-green-700">{tier.roi}</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-blue-600 font-semibold text-sm">Value Creation</div>
                  <div className="text-blue-700">{tier.savings}</div>
                </div>
              </div>

              <Button 
                className={`w-full py-3 ${
                  tier.popular 
                    ? 'bg-purple-500 hover:bg-purple-600 text-white' 
                    : 'bg-white border-2 border-purple-500 text-purple-600 hover:bg-purple-50'
                }`}
                onClick={() => CTA_ACTIONS.BOOK_STRATEGY_SESSION()}
              >
                {tier.price === 'Custom Quote' ? 'Get Custom Quote' : 'Start Project'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Hero Section - Simplified to match Voice AI */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-200 text-purple-700 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Analytical AI Agent - Premium Agentic AI Service
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Turn Data Into <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Intelligence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Deploy an AI agent that thinks, analyzes, and generates strategic insights automatically. Stop guessing - start making data-driven decisions that multiply your revenue.
          </p>
          
          <Button 
            onClick={() => router.push('/agentic-ai')} 
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white text-lg px-8 py-4 mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Explore All Agentic AI Services
          </Button>
        </div>

        {/* Benefit Icons Section - Matching Voice AI */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {benefitIcons.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Tab Navigation - Fixed to match working horizontal tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-100">
            {[
              { key: 'how-it-works', label: 'How It Works', icon: Brain },
              { key: 'use-cases', label: 'Use Cases', icon: Target },
              { key: 'pricing', label: 'Pricing', icon: DollarSign }
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                    activeTab === tab.key
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto">
          {tabContent[activeTab]}
        </div>

        {/* CTA Section - Self-contained to avoid import issues */}
        <div className="mt-10">
          <section className="py-20 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl p-12 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Deploy Your AI Data Agent?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join 200+ businesses using intelligent AI to analyze data, generate insights, and automate strategic decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  
                  <Button 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => CTA_ACTIONS.BOOK_STRATEGY_SESSION()}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Strategy Call
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-white/80">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    No long-term contracts
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    30-day money-back guarantee
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Setup in 3-4 weeks
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsSection;