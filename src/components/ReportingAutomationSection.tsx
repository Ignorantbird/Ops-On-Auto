import { useState } from "react";
import { BarChart3, Clock, Target, TrendingUp, Zap, CheckCircle, ArrowRight, Play, Calendar, Phone, Settings, Filter, Mail, Database } from "lucide-react";
import { PrimaryCTA } from "./cta/StandardizedCTA";

const ReportingAutomationSection = () => {
  const [activeTab, setActiveTab] = useState('dashboards');

  const reportingBenefits = [
    {
      icon: Clock,
      title: "Save 10+ Hours Weekly",
      description: "Eliminate manual report compilation and data gathering"
    },
    {
      icon: TrendingUp,
      title: "Real-time Insights",
      description: "Get up-to-date metrics without waiting for manual updates"
    },
    {
      icon: Target,
      title: "Consistent Reporting",
      description: "Standardized reports delivered automatically on schedule"
    },
    {
      icon: BarChart3,
      title: "Better Decision Making",
      description: "Act on fresh data, not week-old spreadsheets"
    }
  ];

  const reportingPlatforms = [
    { name: "Google Sheets", logo: "📊", description: "Automated spreadsheet reports" },
    { name: "Power BI", logo: "📈", description: "Interactive business dashboards" },
    { name: "Looker Studio", logo: "📉", description: "Google's data visualization tool" },
    { name: "Tableau", logo: "📋", description: "Advanced analytics platform" },
    { name: "Airtable", logo: "🗃️", description: "Database-driven reports" },
    { name: "Custom Dashboards", logo: "⚡", description: "Bespoke reporting solutions" }
  ];

  const automationTabs = {
    dashboards: {
      title: "Real-time Dashboards",
      features: [
        "Live KPI tracking with automatic data refresh",
        "Custom visualization design for your metrics",
        "Multi-source data integration (CRM, PPC, Analytics)",
        "Mobile-responsive dashboard access",
        "Automated anomaly detection and alerts",
        "Stakeholder access management and permissions"
      ],
      timeline: "1-2 weeks",
      price: "₹20,000 - ₹35,000"
    },
    reports: {
      title: "Automated Report Generation",
      features: [
        "Daily, weekly, monthly report scheduling",
        "PDF and Excel report formatting",
        "Email distribution to stakeholders",
        "Executive summary generation",
        "Trend analysis and insights",
        "Custom branding and formatting"
      ],
      timeline: "1-2 weeks",
      price: "₹25,000 - ₹40,000"
    },
    analytics: {
      title: "Advanced Analytics & Forecasting",
      features: [
        "Predictive analytics and trend forecasting",
        "ROI calculation and attribution modeling",
        "Cohort analysis and customer segmentation",
        "Performance benchmarking",
        "Custom metric creation and tracking",
        "AI-powered insights generation"
      ],
      timeline: "2-3 weeks",
      price: "₹35,000 - ₹55,000"
    }
  };

  // Success story data
  const successStory = {
    company: "Digital Marketing Agency",
    challenge: "Marketing team spent 15 hours weekly compiling client reports from 8 different tools",
    solution: "Automated dashboard pulling data from Google Ads, Facebook, Analytics, and CRM",
    results: [
      { metric: "Time Saved", before: "15h/week", after: "2h/week" },
      { metric: "Report Accuracy", before: "85%", after: "99%" },
      { metric: "Client Satisfaction", before: "7.2/10", after: "9.1/10" },
      { metric: "Team Productivity", before: "Baseline", after: "+40%" }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-200 text-green-700 rounded-full text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            Reporting & Analytics Automation
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Stop Creating <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Reports Manually</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get automated dashboards with real-time insights that update themselves. Transform hours of manual work into minutes of strategic decision-making.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <PrimaryCTA 
              label="Get Free Dashboard Audit" 
              icon="search"
              className="text-lg px-8 py-4"
            />
            <button className="flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-green-500 hover:text-green-600 transition-all duration-200">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo (2 min)
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reportingBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Platform Integration */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">
            Platforms We Integrate With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {reportingPlatforms.map((platform, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-xl hover:bg-green-50 hover:border-green-200 border border-slate-200 transition-all group">
                <div className="text-3xl mb-2">{platform.logo}</div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{platform.name}</h4>
                <p className="text-xs text-slate-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tabs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Choose Your Reporting Solution
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(automationTabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                {automationTabs[tab as keyof typeof automationTabs].title}
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-6">
                  {automationTabs[activeTab as keyof typeof automationTabs].title}
                </h4>
                <ul className="space-y-4">
                  {automationTabs[activeTab as keyof typeof automationTabs].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {automationTabs[activeTab as keyof typeof automationTabs].price}
                  </div>
                  <div className="text-slate-600">
                    Timeline: {automationTabs[activeTab as keyof typeof automationTabs].timeline}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Free consultation included</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">30-day optimization support</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Data migration assistance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-white mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Real Results: {successStory.company}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-green-100">The Challenge:</h4>
                  <p className="text-green-50">{successStory.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-green-100">Our Solution:</h4>
                  <p className="text-green-50">{successStory.solution}</p>
                </div>
              </div>
              <button className="mt-6 flex items-center text-white hover:text-green-200 transition-colors">
                Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Results Achieved:</h4>
              <div className="space-y-4">
                {successStory.results.map((result, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-green-100">{result.metric}</span>
                    <div className="text-right">
                      <div className="text-sm text-green-200 line-through">{result.before}</div>
                      <div className="font-bold text-white">{result.after}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Our Reporting Automation Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Data Audit", description: "Analyze your current reporting setup and data sources", icon: Filter },
              { step: "02", title: "Dashboard Design", description: "Create custom layouts and visualization strategy", icon: Settings },
              { step: "03", title: "Integration Setup", description: "Connect all data sources and automate workflows", icon: Database },
              { step: "04", title: "Training & Launch", description: "Train your team and launch automated reporting", icon: Zap }
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="relative">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <IconComponent className="w-8 h-8 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
                  <p className="text-slate-600 text-sm">{process.description}</p>
                  
                  {index < 3 && (
                    <ArrowRight className="hidden md:block w-6 h-6 text-slate-300 absolute top-8 -right-12" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Automate Your Reporting?</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Stop spending hours on manual reports. Get real-time insights that help you make faster, better decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Dashboard Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-XXXXX-XXXXX
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-green-200">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Free consultation
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              No obligation quote
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Same-day response
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportingAutomationSection;