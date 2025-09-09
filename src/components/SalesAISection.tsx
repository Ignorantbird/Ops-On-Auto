// src/components/SalesAISection.tsx - UPDATED FOR AGENTIC AI POSITIONING
import { useState } from "react";
import { CheckCircle, Clock, TrendingUp, Users, Zap, ArrowRight, Play, Calendar, MessageSquare, Bot, Target, Shield, DollarSign, Phone, Mail, User, BarChart3, Handshake, Brain, Lightbulb } from "lucide-react";
import { CTA_ACTIONS } from "@/lib/BookingLinks";

const SalesAISection = () => {
  const [activeTab, setActiveTab] = useState('how-it-works');

  // Core features matching Image 2 exactly
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

  // Detailed use cases with specific ROI data (UPDATED with USD)
  const useCases = [
    {
      title: "Autonomous Lead Qualification & Scoring",
      scenario: "AI agent analyzes prospect behavior, asks intelligent qualifying questions, and scores leads based on buying intent and fit",
      result: "300% increase in qualified leads + 67% faster sales cycle",
      timeline: "Live in 2-3 weeks",
      industries: ["SaaS", "Consultancies", "B2B Services"],
      savings: "Save $900/month vs SDR team"
    },
    {
      title: "Intelligent Follow-Up Sequences", 
      scenario: "AI agent plans and executes personalized follow-up strategies based on prospect engagement and behavioral triggers",
      result: "85% reduction in lead drop-off + 40% higher response rates",
      timeline: "Live in 2 weeks",
      industries: ["Real Estate", "Insurance", "Financial Services"],
      savings: "Save $600/month vs manual follow-up"
    },
    {
      title: "Smart Meeting Booking & Management",
      scenario: "AI agent handles calendar coordination, sends strategic confirmations, and manages rescheduling with context awareness",
      result: "200% more meetings booked + 50% reduction in no-shows",
      timeline: "Live in 1-2 weeks", 
      industries: ["Agencies", "Professional Services", "Coaching"],
      savings: "Save $500/month vs scheduling team"
    },
    {
      title: "Strategic Upsell & Cross-sell Automation",
      scenario: "AI agent identifies optimal upsell moments and suggests relevant upgrades based on customer usage patterns and needs analysis",
      result: "45% increase in average order value + 30% higher customer lifetime value",
      timeline: "Live in 3-4 weeks",
      industries: ["E-commerce", "SaaS", "Subscription Services"],
      savings: "Generate $1,600+ additional monthly revenue"
    }
  ];

  // UPDATED: Pricing tiers with USD (Premium Agentic AI positioning)
  const pricingTiers = [
    {
      name: "AI Sales Agent Starter",
      price: "$1,100",
      description: "Intelligent AI agent for growing sales teams",
      features: [
        "Autonomous lead qualification system",
        "Intelligent objection handling responses",
        "CRM integration (HubSpot/Salesforce)", 
        "Smart email & SMS follow-up sequences",
        "AI-powered performance analytics",
        "30-day setup & agent training"
      ],
      ideal: "Growing businesses, sales teams, entrepreneurs",
      timeline: "2-3 weeks",
      popular: false,
      roi: "4-6x ROI in first 90 days",
      savings: "Save $500+/month"
    },
    {
      name: "AI Sales Agent Pro",
      price: "$1,900", 
      description: "Advanced AI sales agent for scaling teams",
      features: [
        "Multi-channel AI conversations (email, SMS, chat)",
        "Advanced lead scoring & predictive analytics",
        "Custom objection handling training",
        "Automated meeting booking & management",
        "Strategic upsell & cross-sell optimization",
        "Advanced reporting & revenue forecasting",
        "90-day optimization & strategy calls"
      ],
      ideal: "Growing sales teams, agencies, service businesses",
      timeline: "3-4 weeks",
      popular: true,
      roi: "6-10x ROI in first 90 days",
      savings: "Save $1,200+/month"
    },
    {
      name: "Enterprise AI Sales Workforce",
      price: "$3,600+",
      description: "Complete autonomous AI sales team for enterprises",
      features: [
        "Unlimited AI sales agent conversations",
        "Advanced predictive lead scoring & analysis",
        "Custom AI training for your specific products",
        "Multi-team pipeline orchestration",
        "Revenue forecasting & predictive analytics",
        "API integrations with all sales tools",
        "Dedicated success manager & quarterly reviews",
        "6-month partnership with ongoing optimization"
      ],
      ideal: "Enterprise sales teams, large agencies, corporations",
      timeline: "4-6 weeks",
      popular: false,
      roi: "10-15x ROI in first 90 days",
      savings: "Save $4,000+/month"
    }
  ];

  // Success metrics (UPDATED with USD)
  const successMetrics = [
    { metric: "Lead Conversion", value: "300% increase", icon: TrendingUp },
    { metric: "Sales Cycle", value: "67% faster", icon: Clock },
    { metric: "Revenue Impact", value: "$100K+ annually", icon: DollarSign },
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
        {/* Agentic AI Positioning Banner */}
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 border border-purple-200">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-medium mb-4">
              <Brain className="w-4 h-4 mr-2" />
              Premium Agentic AI Service
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              AI Sales Agent That Thinks, Plans & Acts Independently
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Unlike basic automation, our AI sales agent uses advanced reasoning to understand prospects, make intelligent decisions, and execute complex sales strategies without human oversight.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm mb-3">{feature.description}</p>
              <div className="text-sm text-purple-600 font-semibold">
                ✓ {feature.benefit}
              </div>
            </div>
          ))}
        </div>
        
        {/* Sales Processes Grid */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Sales Processes Our AI Agent Masters</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {salesProcesses.map((process, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-200">
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
          <div key={index} className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
            <p className="text-slate-600 mb-4">{useCase.scenario}</p>
            <div className="space-y-3">
              <div className="text-green-600 font-semibold">
                📈 {useCase.result}
              </div>
              <div className="text-purple-600 font-medium">
                ⚡ {useCase.timeline}
              </div>
              <div className="text-blue-600 font-medium">
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
            tier.popular ?
              'border-purple-500 transform scale-105' : 'border-gray-200'
          }`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">{tier.price}</div>
              <p className="text-slate-600">{tier.description}</p>
            </div>
            
            <div className="mb-6 space-y-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="text-sm font-semibold text-green-800">{tier.roi}</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <div className="text-sm font-semibold text-purple-800">{tier.savings}</div>
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
              <div className="text-sm text-purple-600">
                <strong>Timeline:</strong> {tier.timeline}
              </div>
            </div>
            
            <button 
              onClick={() => CTA_ACTIONS.GET_WORKFLOW_AUDIT()}
              className={`w-full mt-6 py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                tier.popular 
                  ? 'bg-purple-500 text-white hover:bg-purple-600 shadow-lg hover:shadow-xl'
                  : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    )
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-purple-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Hero Section with Agentic AI Positioning */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Premium Agentic AI Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            AI Sales Agent That 
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent"> Thinks & Acts</span> Independently
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Deploy an intelligent AI sales agent that reasons like your best salesperson, handles complex conversations, and closes deals 24/7 without human oversight.
          </p>

          {/* Category Link */}
          <div className="mb-8">
            <a 
              href="/agentic-ai" 
              className="inline-flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-medium hover:bg-purple-600 transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Explore All Agentic AI Services
            </a>
          </div>
          
          {/* Success Metrics */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {successMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                  <div className="text-slate-600 text-sm">{metric.metric}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab Navigation - Correct Sizing Like DataAnalytics */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-100">
              {[
                { key: 'how-it-works', label: 'How It Works', icon: Bot },
                { key: 'use_cases', label: 'Use Cases', icon: Target },
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
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>

        {/* Final CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Deploy Your AI Sales Agent?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join 180+ sales teams who've automated their processes with intelligent AI agents. 
            Start with a free sales process audit and see how AI can transform your revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => CTA_ACTIONS.GET_WORKFLOW_AUDIT()}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Free AI Sales Audit
            </button>
            <button 
              onClick={() => CTA_ACTIONS.BOOK_STRATEGY_CALL()}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Strategy Call
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-8 text-sm text-purple-200">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Free AI sales audit & strategy session
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              4-10x ROI guaranteed in 90 days
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