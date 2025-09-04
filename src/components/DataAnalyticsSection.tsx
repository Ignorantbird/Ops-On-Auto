// src/components/DataAnalyticsSection.tsx - NEW COMPONENT
import { useState } from "react";
import { CheckCircle, Clock, TrendingUp, Users, Zap, ArrowRight, Play, Calendar, MessageSquare, BarChart3, Target, Shield, DollarSign, Database, Brain, Activity, Lightbulb, PieChart, LineChart } from "lucide-react";

const DataAnalyticsSection = () => {
  const [activeTab, setActiveTab] = useState('how-it-works');

  // Core features of AI Data Analytics
  const coreFeatures = [
    {
      icon: Brain,
      title: "Predictive Business Intelligence",
      description: "AI that forecasts trends, identifies opportunities, and predicts outcomes before they happen",
      benefit: "Make decisions based on future insights, not just past data"
    },
    {
      icon: Activity,
      title: "Real-Time Data Processing",
      description: "Live dashboards that update automatically as your business generates data",
      benefit: "React to changes instantly, not days or weeks later"
    },
    {
      icon: Target,
      title: "Automated Insight Generation",
      description: "AI automatically finds patterns and generates actionable recommendations",
      benefit: "Discover hidden opportunities without manual analysis"
    },
    {
      icon: BarChart3,
      title: "Custom Analytics Workflows",
      description: "Tailored analytics systems that match your specific business metrics and KPIs",
      benefit: "Get exactly the insights you need for your industry"
    }
  ];

  // Detailed use cases with specific ROI data
  const useCases = [
    {
      title: "Revenue Optimization Analytics",
      scenario: "AI analyzes sales data, customer behavior, and market trends to optimize pricing and identify revenue opportunities",
      result: "25-40% increase in revenue + 60% improvement in profit margins",
      timeline: "Live in 3-4 weeks",
      industries: ["E-commerce", "SaaS", "Retail"],
      savings: "Generate ₹2-5 lakhs additional monthly revenue"
    },
    {
      title: "Customer Behavior Analytics", 
      scenario: "AI tracks customer journeys, predicts churn, and identifies high-value prospects for targeted campaigns",
      result: "45% reduction in churn + 200% improvement in customer lifetime value",
      timeline: "Live in 4-5 weeks",
      industries: ["Subscription Services", "E-commerce", "SaaS"],
      savings: "Save ₹3-8 lakhs monthly in customer acquisition costs"
    },
    {
      title: "Operational Efficiency Analytics",
      scenario: "AI monitors business processes, identifies bottlenecks, and recommends optimization strategies",
      result: "35% reduction in operational costs + 50% faster process completion",
      timeline: "Live in 3-6 weeks", 
      industries: ["Manufacturing", "Logistics", "Service Businesses"],
      savings: "Save ₹5-12 lakhs monthly in operational costs"
    },
    {
      title: "Marketing ROI Analytics",
      scenario: "AI tracks campaign performance across channels and optimizes ad spend for maximum ROI",
      result: "3-5x improvement in ROAS + 70% reduction in wasted ad spend",
      timeline: "Live in 2-4 weeks",
      industries: ["Agencies", "E-commerce", "Lead Generation"],
      savings: "Save ₹1-4 lakhs monthly in ad spend optimization"
    }
  ];

  // Pricing tiers with ROI focus
  const pricingTiers = [
    {
      name: "Automation Accelerator",
      price: "$4,997",
      description: "Enterprise automation in 2 weeks, not 6 months",
      features: [
        "Custom workflow automation setup",
        "CRM integration & lead management",
        "Automated reporting dashboards", 
        "Email & communication automation",
        "2-week rapid implementation",
        "30-day optimization & training"
      ],
      ideal: "Growing startups, small agencies, emerging SMBs",
      timeline: "2 weeks",
      popular: false,
      roi: "5-8x ROI in first 90 days",
      savings: "Save $2,500+/month in operational costs"
    },
    {
      name: "Growth Engine Pro",
      price: "$12,997", 
      description: "Complete AI transformation at startup speed",
      features: [
        "Advanced AI workflow automation",
        "Multi-platform integration (CRM, email, social)",
        "Predictive analytics & insights",
        "Voice AI & chatbot implementation",
        "Custom dashboard & KPI tracking",
        "60-day optimization with monthly strategy calls"
      ],
      ideal: "Scaling businesses, established agencies, growing e-commerce",
      timeline: "2-3 weeks",
      popular: true,
      roi: "10-15x ROI in first 90 days",
      savings: "Generate $8,000+/month in additional revenue"
    },
    {
      name: "Scale Master Enterprise",
      price: "$24,997",
      description: "Full AI ecosystem with enterprise sophistication",
      features: [
        "Complete AI automation ecosystem",
        "Advanced machine learning models", 
        "Real-time data processing & analytics",
        "Enterprise-grade security & compliance",
        "Custom API development & integrations",
        "Dedicated success manager & quarterly reviews",
        "90-day partnership with ongoing optimization"
      ],
      ideal: "Large SMBs, funded startups, mid-market companies",
      timeline: "3-4 weeks", 
      popular: false,
      roi: "15-25x ROI in first 90 days",
      savings: "Save $15,000+/month in operational efficiency"
    },
    {
      name: "Custom AI Dominance",
      price: "$49,997+",
      description: "Bespoke AI advantage systems for market leaders",
      features: [
        "Fully custom AI solution architecture",
        "Proprietary algorithm development",
        "Advanced automation with ML capabilities",
        "Enterprise integration & scalability",
        "Dedicated AI specialist & data scientist",
        "6-month strategic partnership",
        "Competitive advantage IP development"
      ],
      ideal: "Funded startups, enterprises, market leaders",
      timeline: "4-6 weeks",
      popular: false,
      roi: "20-50x ROI in first 90 days", 
      savings: "Generate $25,000+/month competitive advantage"
    }
  ];

  // Success metrics
  const successMetrics = [
    { metric: "Cost Savings", value: "$6K+/month", icon: DollarSign },
    { metric: "Implementation Speed", value: "2 weeks", icon: Clock },
    { metric: "Decision Speed", value: "10x faster", icon: Clock },
    { metric: "ROI Achievement", value: "15x average", icon: Target }
  ];

  // Data sources we connect
  const dataSources = [
    { source: "CRM Systems", icon: "👥", description: "HubSpot, Salesforce, Pipedrive" },
    { source: "Marketing Platforms", icon: "📱", description: "Google Analytics, Facebook Ads, LinkedIn" },
    { source: "E-commerce Data", icon: "🛒", description: "Shopify, WooCommerce, Amazon" },
    { source: "Financial Systems", icon: "💰", description: "QuickBooks, Xero, Razorpay" },
    { source: "Website Analytics", icon: "📊", description: "Google Analytics, Hotjar, Mixpanel" },
    { source: "Social Media", icon: "📲", description: "Facebook, Instagram, LinkedIn, Twitter" },
    { source: "Email Marketing", icon: "📧", description: "Mailchimp, ConvertKit, SendGrid" },
    { source: "Customer Support", icon: "🎧", description: "Zendesk, Intercom, Freshdesk" }
  ];

  const tabContent = {
    'how-it-works': (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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
        
        {/* Data Sources Grid */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Data Sources We Connect</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-indigo-100 hover:shadow-md transition-all duration-200">
                <div className="text-2xl mb-2">{source.icon}</div>
                <div className="font-semibold text-slate-900 text-sm mb-1">{source.source}</div>
                <div className="text-xs text-slate-600">{source.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    'use_cases': (
      <div className="grid md:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-xl border border-indigo-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
            <p className="text-slate-600 mb-4">{useCase.scenario}</p>
            <div className="space-y-3">
              <div className="text-green-600 font-semibold">
                📈 {useCase.result}
              </div>
              <div className="text-indigo-600 font-medium">
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
            tier.popular ? 'border-indigo-500 transform scale-105' : 'border-gray-200'
          }`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-2">{tier.price}</div>
              <p className="text-slate-600">{tier.description}</p>
            </div>
            
            <div className="mb-6 space-y-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="text-sm font-semibold text-green-800">{tier.roi}</div>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
                <div className="text-sm font-semibold text-indigo-800">{tier.savings}</div>
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
              <div className="text-sm text-indigo-600">
                <strong>Timeline:</strong> {tier.timeline}
              </div>
            </div>
            
            <button className={`w-full mt-6 py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
              tier.popular 
                ? 'bg-indigo-500 text-white hover:bg-indigo-600 hover:scale-105' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    )
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 rounded-full text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            AI Data Analytics - Transform Data Into Revenue
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Turn Data Chaos Into 
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Profit-Driving Insights</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Deploy AI that automatically analyzes your business data, predicts trends, and generates actionable insights. 
            Stop guessing - start making data-driven decisions that multiply your revenue.
          </p>
          
          {/* Success Metrics Bar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
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
            <button className="bg-indigo-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-600 transition-all flex items-center justify-center group hover:scale-105">
              <Calendar className="w-5 h-5 mr-2" />
              Book Data Strategy Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              See Analytics Demo
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-100">
            {[
              { key: 'how-it-works', label: 'How It Works', icon: Brain },
              { key: 'use_cases', label: 'Use Cases', icon: Target },
              { key: 'pricing', label: 'Pricing', icon: DollarSign }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                  activeTab === tab.key
                    ? 'bg-indigo-500 text-white shadow-lg'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50'
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
        <div className="text-center mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Turn Your Data Into Revenue?</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join 120+ data-driven businesses who've multiplied their revenue with AI analytics. 
            Start with a free data audit and strategy session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Free Data Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Strategy Call
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-8 text-sm text-indigo-200">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Free data audit & strategy session
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              15x average ROI in 90 days
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

export default DataAnalyticsSection;