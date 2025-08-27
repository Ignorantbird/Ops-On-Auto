// src/components/SalesAISection.tsx - NEW COMPONENT
import { useState } from "react";
import { CheckCircle, Clock, TrendingUp, Users, Zap, ArrowRight, Play, Calendar, MessageSquare, Bot, Target, Shield, DollarSign, Phone, Mail, User, BarChart3, Handshake } from "lucide-react";

const SalesAISection = () => {
  const [activeTab, setActiveTab] = useState('how-it-works');

  // Core features of AI Sales Person
  const coreFeatures = [
    {
      icon: Bot,
      title: "24/7 AI Sales Conversations",
      description: "AI that never sleeps, handling prospects across all time zones",
      benefit: "Convert leads even when your team is offline"
    },
    {
      icon: Target,
      title: "Intelligent Lead Qualification",
      description: "AI analyzes prospect behavior and automatically scores leads",
      benefit: "Focus only on high-intent, qualified prospects"
    },
    {
      icon: Handshake,
      title: "Smart Objection Handling",
      description: "AI trained on your best sales scripts to overcome common objections",
      benefit: "Turn objections into opportunities automatically"
    },
    {
      icon: TrendingUp,
      title: "Automated Pipeline Management",
      description: "AI moves prospects through your sales funnel intelligently",
      benefit: "Never lose track of prospects or miss follow-ups"
    }
  ];

  // Detailed use cases with specific ROI data
  const useCases = [
    {
      title: "Lead Qualification & Scoring",
      scenario: "AI analyzes prospect behavior, asks qualifying questions, and scores leads based on buying intent",
      result: "300% increase in qualified leads + 67% faster sales cycle",
      timeline: "Live in 2-3 weeks",
      industries: ["SaaS", "Consultancies", "B2B Services"],
      savings: "Save ₹45,000/month vs SDR team"
    },
    {
      title: "Automated Follow-Up Sequences", 
      scenario: "AI sends personalized follow-ups based on prospect actions and engagement levels",
      result: "85% reduction in lead drop-off + 40% higher response rates",
      timeline: "Live in 2 weeks",
      industries: ["Real Estate", "Insurance", "Financial Services"],
      savings: "Save ₹30,000/month vs manual follow-up"
    },
    {
      title: "Sales Meeting Booking",
      scenario: "AI handles calendar scheduling, sends confirmations, and manages rescheduling automatically",
      result: "200% more meetings booked + 50% reduction in no-shows",
      timeline: "Live in 1-2 weeks", 
      industries: ["Agencies", "Professional Services", "Coaching"],
      savings: "Save ₹25,000/month vs scheduling team"
    },
    {
      title: "Upsell & Cross-sell Automation",
      scenario: "AI identifies opportunities and suggests relevant upgrades to existing customers",
      result: "45% increase in average order value + 30% higher customer lifetime value",
      timeline: "Live in 3-4 weeks",
      industries: ["E-commerce", "SaaS", "Subscription Services"],
      savings: "Generate ₹80,000+ additional monthly revenue"
    }
  ];

  // Pricing tiers with ROI focus
  const pricingTiers = [
    {
      name: "Sales AI Starter",
      price: "₹55,000",
      description: "Perfect for small sales teams getting started with AI",
      features: [
        "AI lead qualification system",
        "Basic objection handling scripts",
        "CRM integration (HubSpot/Salesforce)", 
        "Email & SMS follow-up automation",
        "Performance analytics dashboard",
        "30-day setup & optimization"
      ],
      ideal: "Small businesses, startups, solo entrepreneurs",
      timeline: "2-3 weeks",
      popular: false,
      roi: "3-5x ROI in first 90 days",
      savings: "Save ₹25,000/month"
    },
    {
      name: "Sales AI Pro",
      price: "₹95,000", 
      description: "Complete AI sales automation for growing teams",
      features: [
        "Advanced multi-channel AI conversations",
        "Smart lead scoring & prioritization",
        "Custom objection handling training",
        "Automated meeting booking & management",
        "Upsell & cross-sell optimization",
        "Advanced analytics & reporting",
        "90-day optimization & strategy calls"
      ],
      ideal: "Growing sales teams, agencies, service businesses",
      timeline: "3-4 weeks",
      popular: true,
      roi: "5-8x ROI in first 90 days",
      savings: "Save ₹60,000/month"
    },
    {
      name: "Enterprise Sales AI",
      price: "₹180,000+",
      description: "Full AI sales workforce for enterprise teams",
      features: [
        "Unlimited AI sales conversations",
        "Advanced predictive lead scoring",
        "Custom AI training for your products",
        "Multi-team pipeline management",
        "Revenue forecasting & analytics",
        "API integrations with all your tools",
        "Dedicated success manager & quarterly reviews",
        "6-month partnership with ongoing optimization"
      ],
      ideal: "Enterprise sales teams, large agencies, corporations",
      timeline: "4-6 weeks",
      popular: false,
      roi: "8-12x ROI in first 90 days",
      savings: "Save ₹200,000+/month"
    }
  ];

  // Success metrics
  const successMetrics = [
    { metric: "Lead Conversion", value: "300% increase", icon: TrendingUp },
    { metric: "Sales Cycle", value: "67% faster", icon: Clock },
    { metric: "Revenue Impact", value: "₹50L+ annually", icon: DollarSign },
    { metric: "Team Efficiency", value: "5x productivity", icon: Users }
  ];

  // Sales processes we automate
  const salesProcesses = [
    { process: "Lead Qualification", icon: "🎯", description: "Smart questioning & scoring" },
    { process: "Follow-Up Sequences", icon: "📧", description: "Personalized nurture campaigns" },
    { process: "Objection Handling", icon: "🛡️", description: "AI-powered responses" },
    { process: "Meeting Booking", icon: "📅", description: "Automated scheduling" },
    { process: "Pipeline Management", icon: "📊", description: "Smart lead progression" },
    { process: "Upsell Opportunities", icon: "⬆️", description: "Revenue optimization" },
    { process: "Customer Retention", icon: "🔄", description: "Churn prevention" },
    { process: "Sales Reporting", icon: "📈", description: "Real-time analytics" }
  ];

  const tabContent = {
    'how-it-works': (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm mb-3">{feature.description}</p>
              <div className="text-sm text-green-600 font-semibold">
                ✓ {feature.benefit}
              </div>
            </div>
          ))}
        </div>
        
        {/* Sales Processes Grid */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Sales Processes We Automate</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {salesProcesses.map((process, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-blue-100 hover:shadow-md transition-all duration-200">
                <div className="text-2xl mb-2">{process.icon}</div>
                <div className="font-semibold text-slate-900 text-sm mb-1">{process.process}</div>
                <div className="text-xs text-slate-600">{process.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    'use_cases': (
      <div className="grid md:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
            <p className="text-slate-600 mb-4">{useCase.scenario}</p>
            <div className="space-y-3">
              <div className="text-green-600 font-semibold">
                📈 {useCase.result}
              </div>
              <div className="text-blue-600 font-medium">
                ⚡ {useCase.timeline}
              </div>
              <div className="text-purple-600 font-medium">
                💰 {useCase.savings}
              </div>
              <div className="text-sm text-slate-500">
                <strong>Perfect for:</strong> {useCase.industries.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    'pricing': (
      <div className="grid md:grid-cols-3 gap-6">
        {pricingTiers.map((tier, index) => (
          <div key={index} className={`relative bg-white rounded-xl border-2 p-6 hover:shadow-xl transition-all duration-300 ${
            tier.popular ? 'border-blue-500 transform scale-105' : 'border-gray-200'
          }`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">{tier.price}</div>
              <p className="text-slate-600">{tier.description}</p>
            </div>
            
            <div className="mb-6 space-y-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="text-sm font-semibold text-green-800">{tier.roi}</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="text-sm font-semibold text-blue-800">{tier.savings}</div>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-gray-100 pt-4 space-y-2 mb-6">
              <div className="text-sm text-slate-600">
                <strong>Ideal for:</strong> {tier.ideal}
              </div>
              <div className="text-sm text-blue-600">
                <strong>Timeline:</strong> {tier.timeline}
              </div>
            </div>
            
            <button className={`w-full mt-6 py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
              tier.popular 
                ? 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105' 
                : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    )
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4 mr-2" />
            AI Sales Person - Your 24/7 Sales Team
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            AI Sales Team That 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Never Stops Selling</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Deploy intelligent AI that handles lead qualification, objection management, and sales conversations 24/7. 
            Scale your sales without hiring more people - your AI sales team works while you sleep.
          </p>
          
          {/* Success Metrics Bar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-600">{metric.metric}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all flex items-center justify-center group hover:scale-105">
              <Calendar className="w-5 h-5 mr-2" />
              Book Sales AI Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              See AI Sales in Action
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-100">
            {[
              { key: 'how-it-works', label: 'How It Works', icon: Bot },
              { key: 'use_cases', label: 'Use Cases', icon: Target },
              { key: 'pricing', label: 'Pricing', icon: DollarSign }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                  activeTab === tab.key
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>

        {/* Final CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Sales with AI?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 180+ sales teams who've automated their processes and 3x'd their conversion rates. 
            Start with a free sales process audit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Free Sales Process Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Strategy Call
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-8 text-sm text-blue-200">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Free sales audit & strategy session
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              3-5x ROI guaranteed in 90 days
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Money-back guarantee if not satisfied
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesAISection;