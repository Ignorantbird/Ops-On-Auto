// src/components/ReportingAutomationSection.tsx - FOLLOWING EXACT VOICEAISECTION STRUCTURE
import { useState } from "react";
import { BarChart3, Users, Target, TrendingUp, Zap, CheckCircle, ArrowRight, Play, Clock, MessageCircle, Calendar, Settings, Filter, Mail, Phone, DollarSign, Activity, RefreshCw, PieChart, FileText } from "lucide-react";
import { CTA_ACTIONS } from "@/lib/BookingLinks";

const ReportingAutomationSection = () => {
  const [activeTab, setActiveTab] = useState('how-it-works');
  const [activeServiceTab, setActiveServiceTab] = useState('dashboards');

  // Core features for "How It Works" tab
  const coreFeatures = [
    {
      icon: Clock,
      title: "Save 10+ Hours Weekly",
      description: "Automated report generation and data gathering that eliminates manual compilation and analysis",
      benefit: "Never waste time on manual reports - automation handles them 24/7"
    },
    {
      icon: TrendingUp,
      title: "Real-time Insights",
      description: "Get up-to-date metrics and KPIs without waiting for manual updates or data processing",
      benefit: "Focus on strategic decisions with instant access to current data"
    },
    {
      icon: Target,
      title: "Consistent Reporting",
      description: "Standardized reports delivered automatically on schedule with reliable formatting and accuracy",
      benefit: "Convert more insights into action with consistent, reliable data"
    },
    {
      icon: BarChart3,
      title: "Better Decision Making",
      description: "Act on fresh data with automated dashboards and real-time notifications for key changes",
      benefit: "Seamless data visibility without manual status checking"
    }
  ];

  // Use cases for "Use Cases" tab
  const useCases = [
    {
      title: "Real-time Dashboards",
      scenario: "Live KPI tracking with automatic data refresh, custom visualization design, and mobile-responsive access",
      result: "90% faster decision-making with real-time insights"
    },
    {
      title: "Automated Report Generation", 
      scenario: "Daily, weekly, monthly report scheduling with PDF/Excel formatting and email distribution to stakeholders",
      result: "80% reduction in manual reporting time"
    },
    {
      title: "Advanced Analytics & Forecasting",
      scenario: "Predictive analytics, ROI calculation, cohort analysis, and AI-powered insights generation",
      result: "300% improvement in forecasting accuracy"
    },
    {
      title: "Marketing Performance Reports",
      scenario: "Automated campaign reporting across Google Ads, Facebook, LinkedIn with ROI analysis and recommendations",
      result: "50% faster campaign optimization cycles"
    },
    {
      title: "Sales Performance Analytics",
      scenario: "Pipeline reporting, lead source analysis, conversion tracking, and sales team performance metrics",
      result: "40% improvement in sales forecasting"
    },
    {
      title: "Financial Reporting Automation",
      scenario: "Automated P&L statements, cash flow reports, budget vs actual analysis, and expense tracking",
      result: "70% reduction in financial reporting time"
    }
  ];

  // Pricing for "Pricing" tab
  const pricingPlans = [
    {
      title: "Real-time Dashboards",
      price: "$400",
      timeline: "1-2 weeks",
      features: ["Live KPI tracking", "Custom visualization design", "Multi-source data integration", "Mobile-responsive access"],
      popular: true
    },
    {
      title: "Automated Report Generation",
      price: "$500",
      timeline: "1-2 weeks", 
      features: ["Scheduled report delivery", "PDF and Excel formatting", "Email distribution", "Custom branding"],
      popular: false
    },
    {
      title: "Advanced Analytics & Forecasting",
      price: "$700",
      timeline: "2-3 weeks",
      features: ["Predictive analytics", "ROI calculation", "Custom metric creation", "AI-powered insights"],
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
            <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-green-300 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
              <div className="text-green-600 text-xs font-medium">
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
          <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-green-300 hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-bold text-slate-900 mb-4">{useCase.title}</h4>
            <p className="text-slate-600 mb-6">{useCase.scenario}</p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-green-600 font-semibold text-sm">Result:</div>
              <div className="text-green-700 font-bold">{useCase.result}</div>
            </div>
          </div>
        ))}
      </div>
    ),
    'pricing': (
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
            plan.popular ? 'border-green-500 shadow-xl scale-105' : 'border-slate-200 hover:border-green-300 hover:shadow-xl'
          }`}>
            {plan.popular && (
              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
            )}
            <h4 className="text-2xl font-bold text-slate-900 mb-2">{plan.title}</h4>
            <div className="text-3xl font-bold text-green-600 mb-1">{plan.price}</div>
            <div className="text-slate-600 text-sm mb-6">{plan.timeline}</div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-slate-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
              plan.popular
                ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl'
                : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    )
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-green-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Business Automation Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Stop Creating 
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Reports Manually</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Get automated dashboards with real-time insights that update themselves. 
            Transform hours of manual work into minutes of strategic decision-making.
          </p>
          
          <div className="mb-12">
            <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-400 transition-all shadow-lg">
              ✨ Explore all Business Automation Services
            </button>
          </div>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Clock, title: "Save 10+ Hours Weekly", description: "Eliminate manual data entry and report compilation" },
            { icon: TrendingUp, title: "Real-time Insights", description: "Get up-to-date metrics without waiting for manual updates" },
            { icon: Target, title: "Consistent Reporting", description: "Standardized reports delivered automatically on schedule" },
            { icon: BarChart3, title: "Better Decision Making", description: "Act on fresh data, not week-old spreadsheets" }
          ].map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-green-600" />
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
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'text-slate-600 hover:text-green-600 hover:bg-green-50'
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

        {/* Platforms We Integrate With */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Platforms We Integrate With</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We connect with the most popular data sources and reporting platforms to deliver automated insights.
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Google Sheets", logo: "📊", description: "Automated spreadsheet reports" },
              { name: "Power BI", logo: "📈", description: "Interactive business dashboards" },
              { name: "Looker Studio", logo: "📉", description: "Google's data visualization tool" },
              { name: "Tableau", logo: "📋", description: "Advanced analytics platform" },
              { name: "Airtable", logo: "🗃️", description: "Database-driven reports" },
              { name: "Custom Dashboards", logo: "⚡", description: "Bespoke reporting solutions" }
            ].map((platform, index) => (
              <div key={index} className="flex flex-col items-center p-4 border border-slate-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all">
                <div className="text-3xl mb-2">{platform.logo}</div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{platform.name}</h4>
                <p className="text-xs text-slate-600 text-center">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Automate Your Reporting?</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Stop spending hours on manual reports. Get real-time insights that help 
            you make faster, better decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => CTA_ACTIONS.GET_WORKFLOW_AUDIT()}
              className="bg-yellow-500 text-green-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all flex items-center justify-center"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Book Free Dashboard Audit
            </button>
            <button 
              onClick={() => CTA_ACTIONS.BOOK_STRATEGY_CALL()}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportingAutomationSection;