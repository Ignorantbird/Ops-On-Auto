import { useState } from "react";
import { Database, Users, Target, BarChart3, Zap, CheckCircle, ArrowRight, Play, Clock, TrendingUp, Filter, Mail, Phone, Calendar, Settings } from "lucide-react";
import { PrimaryCTA } from "./cta/StandardizedCTA";

const CRMAutomationSection = () => {
  const [activeTab, setActiveTab] = useState('setup');

  const crmBenefits = [
    {
      icon: Clock,
      title: "Save 15+ Hours Weekly",
      description: "Eliminate manual data entry, follow-ups, and lead scoring"
    },
    {
      icon: TrendingUp,
      title: "Increase Sales by 30%",
      description: "Never miss a lead with automated nurture sequences"
    },
    {
      icon: Target,
      title: "Lead Score Accuracy",
      description: "AI-powered scoring identifies your best prospects automatically"
    },
    {
      icon: BarChart3,
      title: "Real-time Insights",
      description: "Dashboards that update automatically with your sales metrics"
    }
  ];

  const crmPlatforms = [
    { name: "HubSpot", logo: "🟠", description: "Full inbound marketing automation" },
    { name: "Salesforce", logo: "🔵", description: "Enterprise-grade sales management" },
    { name: "Pipedrive", logo: "🟢", description: "Visual pipeline management" },
    { name: "Zoho CRM", logo: "🔴", description: "Complete business suite integration" },
    { name: "Freshsales", logo: "🟡", description: "Customer engagement automation" },
    { name: "Monday.com", logo: "🟣", description: "Project-based CRM workflows" }
  ];

  const automationTabs = {
    setup: {
      title: "CRM Setup & Configuration",
      features: [
        "Custom field mapping and data structure design",
        "Pipeline stages optimized for your sales process",
        "Contact and company record standardization",
        "Data migration from existing systems",
        "Permission levels and team access control",
        "Integration with existing business tools"
      ],
      timeline: "1-2 weeks",
      price: "₹25,000 - ₹35,000"
    },
    automation: {
      title: "Smart Automation Workflows",
      features: [
        "Lead scoring and qualification automation",
        "Automated email sequences based on buyer journey",
        "Task creation and assignment workflows",
        "Deal progression and follow-up reminders",
        "Contact enrichment and data validation",
        "Cross-team notification systems"
      ],
      timeline: "2-3 weeks",
      price: "₹35,000 - ₹55,000"
    },
    analytics: {
      title: "Reporting & Analytics",
      features: [
        "Custom dashboard creation for key metrics",
        "Automated daily/weekly/monthly reports",
        "Sales performance tracking and forecasting",
        "Lead source ROI analysis",
        "Team productivity monitoring",
        "Revenue attribution reporting"
      ],
      timeline: "1-2 weeks",
      price: "₹20,000 - ₹30,000"
    }
  };

  const successStory = {
    company: "TechStartup Solutions",
    industry: "B2B SaaS",
    challenge: "Manual lead management causing 40% lead loss",
    solution: "Automated lead scoring + nurture sequences",
    results: [
      { metric: "Lead Response Time", before: "4-6 hours", after: "Under 5 minutes" },
      { metric: "Sales Qualified Leads", before: "15/month", after: "45/month" },
      { metric: "Close Rate", before: "12%", after: "28%" },
      { metric: "Time Saved Weekly", before: "0", after: "20+ hours" }
    ]
  };

  return (
    <section id="crm" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6">
            <Database className="w-4 h-4 mr-2" />
            CRM Automation Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Transform Your CRM Into a 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Revenue Engine</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Stop losing leads in spreadsheets. Our CRM automation turns your customer data into a powerful sales machine that works 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <PrimaryCTA 
              label="Get Free CRM Audit" 
              icon="calendar"
              className="text-lg px-8 py-4"
            />
            <button className="flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-600 transition-all duration-200">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo (2 min)
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {crmBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* CRM Platforms */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              We Work With All Major CRM Platforms
            </h3>
            <p className="text-slate-600">
              Already have a CRM? Perfect. We'll optimize it. Need a new one? We'll help you choose and set it up.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmPlatforms.map((platform, index) => (
              <div key={index} className="flex items-center p-4 border border-slate-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all">
                <div className="text-3xl mr-4">{platform.logo}</div>
                <div>
                  <h4 className="font-semibold text-slate-900">{platform.name}</h4>
                  <p className="text-sm text-slate-600">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tabs */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-20">
          <div className="flex flex-col md:flex-row">
            {/* Tab Navigation */}
            <div className="md:w-1/3 bg-slate-50 p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our CRM Services</h3>
              <div className="space-y-2">
                {Object.entries(automationTabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeTab === key 
                        ? 'bg-orange-500 text-white shadow-lg' 
                        : 'text-slate-700 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <h4 className="font-semibold mb-1">{tab.title}</h4>
                    <div className="flex items-center justify-between text-sm opacity-80">
                      <span>{tab.timeline}</span>
                      <span>{tab.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  {automationTabs[activeTab as keyof typeof automationTabs].title}
                </h4>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {automationTabs[activeTab as keyof typeof automationTabs].timeline}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {automationTabs[activeTab as keyof typeof automationTabs].price}
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {automationTabs[activeTab as keyof typeof automationTabs].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <PrimaryCTA 
                  label="Start This Service" 
                  icon="arrow"
                  className="px-6 py-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                🏆 Success Story
              </div>
              <h3 className="text-3xl font-bold mb-4">How {successStory.company} Tripled Their Sales</h3>
              <p className="text-blue-100 mb-4">
                <strong>Challenge:</strong> {successStory.challenge}
              </p>
              <p className="text-blue-100 mb-6">
                <strong>Our Solution:</strong> {successStory.solution}
              </p>
              <button className="flex items-center text-white hover:text-blue-200 transition-colors">
                Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Results Achieved:</h4>
              <div className="space-y-4">
                {successStory.results.map((result, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-blue-100">{result.metric}</span>
                    <div className="text-right">
                      <div className="text-sm text-blue-200 line-through">{result.before}</div>
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
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Our CRM Automation Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit & Strategy", description: "Analyze your current setup and define automation goals", icon: Filter },
              { step: "02", title: "Design & Setup", description: "Configure workflows, fields, and integrations", icon: Settings },
              { step: "03", title: "Data Migration", description: "Safely transfer and clean your existing data", icon: Database },
              { step: "04", title: "Training & Launch", description: "Train your team and launch your new system", icon: Zap }
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="relative">
                  <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <IconComponent className="w-8 h-8 text-orange-500 mx-auto mb-4" />
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
        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your CRM?</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Stop losing leads and start closing more deals. Get your free CRM audit and see how much time you could save.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-all flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Free CRM Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-all flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-XXXXX-XXXXX
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-orange-200">
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

export default CRMAutomationSection;