// src/components/WorkflowAutomationSection.tsx - FOLLOWING EXACT VOICEAISECTION STRUCTURE
import { useState } from "react";
import { Workflow, Users, Target, BarChart3, Zap, CheckCircle, ArrowRight, Play, Clock, TrendingUp, MessageCircle, Calendar, Settings, Filter, Mail, Phone, DollarSign, Activity, RefreshCw, GitBranch } from "lucide-react";
import { CTA_ACTIONS } from "@/lib/BookingLinks";

const WorkflowAutomationSection = () => {
  const [activeTab, setActiveTab] = useState('how-it-works');
  const [activeServiceTab, setActiveServiceTab] = useState('process-mapping');

  // Core features for "How It Works" tab
  const coreFeatures = [
    {
      icon: Clock,
      title: "Save 20+ Hours Weekly",
      description: "Smart workflow automation that eliminates bottlenecks and manual tasks across your business operations",
      benefit: "Never waste time on repetitive tasks - automation handles them 24/7"
    },
    {
      icon: TrendingUp,
      title: "40% Faster Operations",
      description: "Streamlined processes that automatically route tasks, approvals, and data between teams",
      benefit: "Focus only on high-value work while automation handles routine operations"
    },
    {
      icon: Target,
      title: "99% Accuracy Rate",
      description: "Eliminate human error with automated quality checks, validations, and consistent processes",
      benefit: "Convert more projects with reliable, error-free workflows"
    },
    {
      icon: BarChart3,
      title: "Real-Time Monitoring",
      description: "Track workflow performance with automated dashboards and instant notifications for bottlenecks",
      benefit: "Seamless operations visibility without manual status checking"
    }
  ];

  // Use cases for "Use Cases" tab
  const useCases = [
    {
      title: "Sales Workflow Automation",
      scenario: "Automate lead routing, follow-up sequences, quote generation, and deal progression with smart triggers",
      result: "300% improvement in lead response time"
    },
    {
      title: "Marketing Workflow Automation", 
      scenario: "Streamline content approval, campaign launches, lead nurturing, and performance reporting workflows",
      result: "50% faster campaign deployment cycles"
    },
    {
      title: "Operations Workflow Automation",
      scenario: "Automate invoice processing, inventory updates, compliance checks, and task assignments",
      result: "80% reduction in manual administrative work"
    },
    {
      title: "HR Workflow Automation",
      scenario: "Streamline employee onboarding, leave requests, performance reviews, and document management",
      result: "60% faster employee onboarding process"
    },
    {
      title: "Customer Service Automation",
      scenario: "Automate ticket routing, response templates, escalation rules, and satisfaction surveys",
      result: "90% improvement in response consistency"
    },
    {
      title: "Finance Workflow Automation",
      scenario: "Automate expense approvals, budget tracking, payment processing, and financial reporting",
      result: "70% reduction in processing time"
    }
  ];

  // Pricing for "Pricing" tab
  const pricingPlans = [
    {
      title: "Process Mapping & Analysis",
      price: "$400",
      timeline: "1-2 weeks",
      features: ["Complete workflow audit", "Bottleneck identification", "Process efficiency scoring", "ROI calculation"],
      popular: false
    },
    {
      title: "Workflow Implementation",
      price: "$600",
      timeline: "2-4 weeks", 
      features: ["Custom automation workflows", "Multi-platform integrations", "Error handling setup", "Team training"],
      popular: true
    },
    {
      title: "Enterprise Solution",
      price: "$1,200",
      timeline: "3-6 weeks",
      features: ["Advanced workflow design", "Custom integrations", "Monitoring & optimization", "Ongoing support"],
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
            <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
              <div className="text-blue-600 text-xs font-medium">
                ✓ {feature.benefit}
              </div>
            </div>
          );
        })}
      </div>
    ),
    'use-cases': (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-bold text-slate-900 mb-4">{useCase.title}</h4>
            <p className="text-slate-600 mb-6">{useCase.scenario}</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-blue-600 font-semibold text-sm">Result:</div>
              <div className="text-blue-700 font-bold">{useCase.result}</div>
            </div>
          </div>
        ))}
      </div>
    ),
    'pricing': (
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
            plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-slate-200 hover:border-blue-300 hover:shadow-xl'
          }`}>
            {plan.popular && (
              <div className="bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
            )}
            <h4 className="text-2xl font-bold text-slate-900 mb-2">{plan.title}</h4>
            <div className="text-3xl font-bold text-blue-600 mb-1">{plan.price}</div>
            <div className="text-slate-600 text-sm mb-6">{plan.timeline}</div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
              plan.popular
                ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    )
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-blue-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Business Automation Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Eliminate Bottlenecks with 
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"> Intelligent Workflows</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Transform your business operations with smart workflow automation that adapts to 
            your processes, eliminates manual tasks, and scales with your growth.
          </p>
          
          <div className="mb-12">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 transition-all shadow-lg">
              ✨ Explore all Business Automation Services
            </button>
          </div>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Clock, title: "Save 20+ Hours Weekly", description: "Eliminate manual tasks and bottlenecks across operations" },
            { icon: TrendingUp, title: "40% Faster Operations", description: "Streamlined processes with automated task routing" },
            { icon: Target, title: "99% Accuracy Rate", description: "Automated quality checks and consistent processes" },
            { icon: BarChart3, title: "Real-Time Monitoring", description: "Track workflow performance with automated dashboards" }
          ].map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Navigation Tabs - VERTICAL LAYOUT */}
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
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
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

        {/* Integration Platforms */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Integrate with Your Existing Tools</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We connect all your business tools to create seamless, end-to-end automated workflows.
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Zapier", logo: "⚡", description: "5000+ app integrations" },
              { name: "Make.com", logo: "🔗", description: "Visual workflow builder" },
              { name: "Microsoft", logo: "🟦", description: "Power Automate flows" },
              { name: "Airtable", logo: "📊", description: "Database automation" },
              { name: "Monday.com", logo: "🟣", description: "Work management platform" },
              { name: "Custom APIs", logo: "⚙️", description: "Tailored integrations" }
            ].map((platform, index) => (
              <div key={index} className="flex flex-col items-center p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all">
                <div className="text-3xl mb-2">{platform.logo}</div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{platform.name}</h4>
                <p className="text-xs text-slate-600 text-center">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Automate Your Workflows?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop wasting time on repetitive tasks. Get a custom workflow automation 
            strategy in just one week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => CTA_ACTIONS.GET_WORKFLOW_AUDIT()}
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all flex items-center justify-center"
            >
              <Workflow className="w-5 h-5 mr-2" />
              Get Free Workflow Audit
            </button>
            <button 
              onClick={() => CTA_ACTIONS.BOOK_STRATEGY_CALL()}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Book Strategy Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowAutomationSection;