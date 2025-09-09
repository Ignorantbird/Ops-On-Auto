// src/components/BusinessAutomationSection.tsx - MAIN SECTION COMPONENT
import { useState } from "react";
import { 
  Database, 
  Workflow, 
  Settings, 
  Clock, 
  TrendingUp, 
  Target, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Zap, 
  GitBranch, 
  Cpu,
  Users,
  Mail,
  Phone,
  FileText,
  RefreshCw,
  Shield,
  Layers,
  Activity
} from "lucide-react";
import { CTA_ACTIONS } from "@/lib/BookingLinks";

const BusinessAutomationSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Key Benefits
  const automationBenefits = [
    {
      icon: Clock,
      title: "Save 15+ Hours Weekly",
      description: "Eliminate manual data entry, repetitive tasks, and process bottlenecks"
    },
    {
      icon: TrendingUp,
      title: "Increase Efficiency by 300%",
      description: "Streamlined workflows that adapt and scale with your business growth"
    },
    {
      icon: Target,
      title: "99% Task Accuracy",
      description: "Automated processes eliminate human error and ensure consistency"
    },
    {
      icon: BarChart3,
      title: "Real-time Insights",
      description: "Monitor performance with automated dashboards and reporting"
    }
  ];

  // Integration Platforms
  const integrationPlatforms = [
    { name: "HubSpot", logo: "🟠", description: "Complete CRM automation" },
    { name: "Salesforce", logo: "🔵", description: "Enterprise sales workflows" },
    { name: "Zapier", logo: "⚡", description: "5000+ app connections" },
    { name: "Make.com", logo: "🔗", description: "Visual workflow builder" },
    { name: "Microsoft", logo: "🟦", description: "Office 365 & Teams integration" },
    { name: "Google", logo: "🟡", description: "Workspace automation" }
  ];

  // Service Tabs Content
  const serviceDetails = {
    overview: {
      title: "Smart Workflows Without AI Complexity",
      subtitle: "Process optimization and automation that just works",
      features: [
        "Complete workflow mapping and analysis",
        "Cross-platform integrations and connections", 
        "Automated task routing and assignment",
        "Real-time performance monitoring",
        "Data synchronization between systems",
        "Custom reporting and analytics dashboards"
      ],
      timeline: "1-4 weeks",
      price: "$500 - $1,200",
      highlight: "Perfect for businesses new to automation"
    },
    crm: {
      title: "CRM Automation & Setup",
      subtitle: "Transform your customer data into revenue",
      features: [
        "Custom field mapping and data structure design",
        "Automated lead scoring and routing",
        "Pipeline optimization and stage automation",
        "Contact enrichment and data validation",
        "Email sequence automation",
        "Sales performance tracking and reporting"
      ],
      timeline: "1-2 weeks", 
      price: "$500 - $700",
      highlight: "Most popular entry-level service"
    },
    workflow: {
      title: "Workflow Process Automation",
      subtitle: "Eliminate bottlenecks and manual handoffs",
      features: [
        "End-to-end process mapping and documentation",
        "Automated approval workflows",
        "Task assignment and notification systems",
        "Document routing and storage automation",
        "Quality control and error handling",
        "Performance analytics and optimization"
      ],
      timeline: "2-4 weeks",
      price: "$600 - $1,200",
      highlight: "Maximum impact on daily operations"
    }
  };

  const currentService = serviceDetails[activeTab as keyof typeof serviceDetails];

  // Success Story
  const successStory = {
    company: "TechConsulting Pro",
    industry: "Professional Services",
    challenge: "Manual client onboarding taking 3 weeks per new client with 45+ manual steps",
    solution: "Automated end-to-end client onboarding workflow with smart routing",
    results: [
      { metric: "Onboarding Time", before: "3 weeks", after: "3 days" },
      { metric: "Manual Steps", before: "45 steps", after: "5 steps" },
      { metric: "Error Rate", before: "12%", after: "1%" },
      { metric: "Team Productivity", before: "100%", after: "340%" }
    ]
  };

  // Process Steps
  const processSteps = [
    { step: "01", title: "Discovery", description: "Analyze current processes and identify bottlenecks", icon: GitBranch },
    { step: "02", title: "Design", description: "Create optimized workflow blueprints", icon: Settings },
    { step: "03", title: "Build", description: "Configure automation workflows and integrations", icon: Cpu },
    { step: "04", title: "Launch", description: "Deploy, train, and monitor automated processes", icon: Zap }
  ];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Business Automation Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Smart Workflows That 
            <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent"> Scale Your Business</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Streamline operations without AI complexity. Perfect for businesses ready to eliminate manual processes and boost efficiency with proven automation strategies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => CTA_ACTIONS.GET_WORKFLOW_AUDIT()}
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Get Free Process Audit
            </button>
            <button 
              onClick={() => CTA_ACTIONS.VIEW_PRICING()}
              className="border-2 border-teal-500 text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all duration-300 flex items-center justify-center"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View Pricing Plans
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Free consultation included
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              No long-term contracts
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              ROI guaranteed
            </span>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Why Choose Business Automation?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Details Tabs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Automation Services</h2>
            <p className="text-xl text-slate-600">Choose the perfect automation solution for your business needs</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'overview', label: 'Overview', icon: Activity },
              { key: 'crm', label: 'CRM Automation', icon: Database },
              { key: 'workflow', label: 'Workflow Automation', icon: Workflow }
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-teal-500 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-600 border-2 border-slate-200'
                  }`}
                >
                  <TabIcon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-6">
                    {currentService.highlight}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{currentService.title}</h3>
                  <p className="text-xl text-slate-600 mb-8">{currentService.subtitle}</p>
                  
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {currentService.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Service Details</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Timeline:</span>
                        <span className="font-semibold text-slate-900">{currentService.timeline}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Investment:</span>
                        <span className="font-semibold text-green-600 text-lg">{currentService.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => CTA_ACTIONS.GET_WORKFLOW_AUDIT()}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Start This Automation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Platforms */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Seamless Integrations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {integrationPlatforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-slate-100 hover:border-teal-200 transition-all duration-300 text-center">
                <div className="text-3xl mb-3">{platform.logo}</div>
                <h3 className="font-bold text-slate-900 mb-2">{platform.name}</h3>
                <p className="text-slate-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Our Proven Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 bg-teal-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <IconComponent className="w-8 h-8 text-teal-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h4>
                  <p className="text-slate-600 text-sm">{process.description}</p>
                  
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-6 h-6 text-slate-300 absolute top-8 -right-12" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Story */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-white">
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
              </div>
              <div>
                <h4 className="text-xl font-bold mb-6 text-green-100">The Results:</h4>
                <div className="grid grid-cols-2 gap-6">
                  {successStory.results.map((result, index) => (
                    <div key={index} className="text-center bg-white/10 rounded-xl p-4">
                      <h5 className="font-bold text-green-100 mb-2">{result.metric}</h5>
                      <div className="text-sm text-green-200 mb-1">Before: {result.before}</div>
                      <div className="text-lg font-bold text-white">After: {result.after}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Automate Your Business?</h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get a free process audit and discover how much time and money you could save with smart automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => CTA_ACTIONS.GET_WORKFLOW_AUDIT()}
              className="bg-white text-teal-600 px-12 py-4 rounded-xl font-bold text-xl hover:bg-teal-50 transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Book Free Process Audit
            </button>
            <button 
              onClick={() => CTA_ACTIONS.PHONE_CALL()}
              className="border-2 border-white text-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-teal-600 transition-all flex items-center justify-center"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Now
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-teal-200">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Free consultation
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              No setup fees
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              ROI guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAutomationSection;