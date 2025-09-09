// src/components/CRMAutomationSection.tsx - FOLLOWING EXACT VOICEAISECTION STRUCTURE
import { useState } from "react";
import { Database, Users, Target, BarChart3, Zap, CheckCircle, ArrowRight, Play, Clock, TrendingUp, MessageCircle, Calendar, Settings, Filter, Mail, Phone, DollarSign, Activity } from "lucide-react";
import { CTA_ACTIONS } from "@/lib/BookingLinks";

const CRMAutomationSection = () => {
  const [activeTab, setActiveTab] = useState('how-it-works');
  const [activeServiceTab, setActiveServiceTab] = useState('lead-management');

  // Core features for "How It Works" tab
  const coreFeatures = [
    {
      icon: Target,
      title: "24/7 Lead Management",
      description: "Smart CRM system that captures, scores, and routes leads automatically with intelligent qualification",
      benefit: "Never miss a lead - CRM tracks leads when you're busy"
    },
    {
      icon: TrendingUp,
      title: "Intelligent Pipeline Automation",
      description: "AI analyzes deal progression in real-time and moves prospects through stages based on your criteria",
      benefit: "Focus only on high-value, qualified opportunities"
    },
    {
      icon: Filter,
      title: "Smart Data Organization",
      description: "AI trained to clean, organize, and enrich customer data automatically for better insights",
      benefit: "Convert more prospects with organized, actionable data"
    },
    {
      icon: Calendar,
      title: "Automated Follow-up Sequences",
      description: "CRM schedules follow-ups and sends reminders while maintaining conversation context",
      benefit: "Seamless customer journey without manual handoffs"
    }
  ];

  // Use cases for "Use Cases" tab
  const useCases = [
    {
      title: "Lead Scoring & Prioritization",
      scenario: "CRM automatically scores leads based on behavior, demographics, and engagement, prioritizing your best prospects",
      result: "200% improvement in lead conversion rates"
    },
    {
      title: "Pipeline Management",
      scenario: "Automate deal progression through stages with smart triggers and task assignments for your sales team",
      result: "50% faster sales cycles with automated workflows"
    },
    {
      title: "Customer Data Management",
      scenario: "Clean, organize, and enrich customer data automatically while maintaining data quality standards",
      result: "90% reduction in data entry time and errors"
    }
  ];

  // Pricing for "Pricing" tab
  const pricingPlans = [
    {
      title: "CRM Setup",
      price: "$500",
      timeline: "1-2 weeks",
      features: ["Custom field mapping", "Pipeline configuration", "Data migration", "Team training"],
      popular: true
    },
    {
      title: "Advanced Automation",
      price: "$800",
      timeline: "2-3 weeks", 
      features: ["Lead scoring automation", "Email sequences", "Task automation", "Advanced reporting"],
      popular: false
    },
    {
      title: "Enterprise Solution",
      price: "$1,200",
      timeline: "3-4 weeks",
      features: ["Multi-team setup", "Custom integrations", "Advanced analytics", "Ongoing support"],
      popular: false
    }
  ];

  // Tab content mapping
  const tabContent = {
    'how-it-works': (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coreFeatures.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
              <div className="text-orange-600 text-xs font-medium">
                ✓ {feature.benefit}
              </div>
            </div>
          );
        })}
      </div>
    ),
    'use-cases': (
      <div className="grid md:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-bold text-slate-900 mb-4">{useCase.title}</h4>
            <p className="text-slate-600 mb-6">{useCase.scenario}</p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="text-orange-600 font-semibold text-sm">Result:</div>
              <div className="text-orange-700 font-bold">{useCase.result}</div>
            </div>
          </div>
        ))}
      </div>
    ),
    'pricing': (
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
            plan.popular ? 'border-orange-500 shadow-xl scale-105' : 'border-slate-200 hover:border-orange-300 hover:shadow-xl'
          }`}>
            {plan.popular && (
              <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
            )}
            <h4 className="text-2xl font-bold text-slate-900 mb-2">{plan.title}</h4>
            <div className="text-3xl font-bold text-orange-600 mb-1">{plan.price}</div>
            <div className="text-slate-600 text-sm mb-6">{plan.timeline}</div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
              plan.popular
                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl'
                : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    )
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-orange-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Business Automation Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            CRM That Actually 
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent"> Works For You</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Stop losing leads in spreadsheet chaos. Get a smart CRM system that scores leads, 
            automates follow-ups, and turns your customer data into predictable revenue.
          </p>
          
          <div className="mb-12">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-400 transition-all shadow-lg">
              ✨ Explore all Business Automation Services
            </button>
          </div>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Target, title: "Smart Lead Scoring", description: "Automatically prioritize leads based on behavior and demographics" },
            { icon: TrendingUp, title: "Pipeline Automation", description: "Move deals through stages automatically with smart triggers" },
            { icon: Clock, title: "Save 15+ Hours Weekly", description: "Eliminate manual data entry and follow-up tasks" },
            { icon: BarChart3, title: "Real-time Analytics", description: "Track performance with automated reporting dashboards" }
          ].map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Navigation Tabs - VERTICAL LAYOUT LIKE IMAGE 1 */}
        <div className="text-center mb-16">
          <div className="inline-flex flex-col gap-2 bg-white rounded-2xl p-2 shadow-lg border border-slate-200">
            {[
              { key: 'how-it-works', label: 'How It Works', icon: Settings },
              { key: 'use-cases', label: 'Use Cases', icon: Target },
              { key: 'pricing', label: 'Pricing', icon: DollarSign }
            ].map(tab => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                    activeTab === tab.key
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50'
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
        <div className="max-w-6xl mx-auto mb-20">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>

        {/* CRM Platforms */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Powered by Leading CRM Platforms</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We integrate with the most reliable CRM technologies to deliver efficient, scalable automation.
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "HubSpot", logo: "🔶", description: "Complete CRM ecosystem" },
              { name: "Salesforce", logo: "☁️", description: "Enterprise-grade platform" },
              { name: "Pipedrive", logo: "🔷", description: "Sales-focused workflows" },
              { name: "Zoho CRM", logo: "🟠", description: "All-in-one business suite" },
              { name: "Freshsales", logo: "🟢", description: "Customer experience platform" },
              { name: "Custom CRM", logo: "⚡", description: "Tailored CRM solutions" }
            ].map((platform, index) => (
              <div key={index} className="flex flex-col items-center p-4 border border-slate-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all">
                <div className="text-3xl mb-2">{platform.logo}</div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{platform.name}</h4>
                <p className="text-xs text-slate-600 text-center">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Deploy Your CRM Automation?</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join 200+ businesses using smart CRM automation to qualify leads, close deals, and streamline customer management processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => CTA_ACTIONS.GET_WORKFLOW_AUDIT()}
              className="bg-yellow-500 text-orange-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free CRM Demo
            </button>
            <button 
              onClick={() => CTA_ACTIONS.BOOK_STRATEGY_CALL()}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-all flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMAutomationSection;