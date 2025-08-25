import { useState } from "react";
import { Settings, Users, Target, BarChart3, Zap, CheckCircle, ArrowRight, Play, Clock, TrendingUp, Workflow, GitBranch, RefreshCw, Link2, Cpu, Activity } from "lucide-react";
import { PrimaryCTA } from "./cta/StandardizedCTA";

const WorkflowAutomationSection = () => {
  const [activeTab, setActiveTab] = useState('process-mapping');

  const workflowBenefits = [
    {
      icon: Clock,
      title: "Save 20+ Hours Weekly",
      description: "Eliminate repetitive manual tasks across your entire team"
    },
    {
      icon: TrendingUp,
      title: "40% Faster Operations",
      description: "Streamlined processes that complete tasks in minutes, not hours"
    },
    {
      icon: Target,
      title: "99% Accuracy Rate",
      description: "Automated workflows eliminate human error and inconsistencies"
    },
    {
      icon: BarChart3,
      title: "Real-Time Monitoring",
      description: "Track workflow performance and bottlenecks instantly"
    }
  ];

  const workflowTypes = [
    { 
      title: "Sales Workflows", 
      icon: Target, 
      examples: ["Lead routing", "Quote generation", "Follow-up sequences", "Deal progression"] 
    },
    { 
      title: "Marketing Workflows", 
      icon: Users, 
      examples: ["Campaign automation", "Lead nurturing", "Content scheduling", "Performance reporting"] 
    },
    { 
      title: "Operations Workflows", 
      icon: Settings, 
      examples: ["Invoice processing", "Inventory updates", "Quality checks", "Task assignments"] 
    },
    { 
      title: "HR Workflows", 
      icon: Users, 
      examples: ["Employee onboarding", "Leave requests", "Performance reviews", "Document management"] 
    },
    { 
      title: "Customer Service", 
      icon: Activity, 
      examples: ["Ticket routing", "Response templates", "Escalation rules", "Satisfaction surveys"] 
    },
    { 
      title: "Finance Workflows", 
      icon: BarChart3, 
      examples: ["Expense approvals", "Budget tracking", "Payment processing", "Financial reporting"] 
    }
  ];

  const workflowTabs = {
    'process-mapping': {
      title: "Process Mapping & Analysis",
      features: [
        "Complete workflow audit and documentation",
        "Bottleneck identification and analysis",
        "Process efficiency scoring and recommendations",
        "Stakeholder interviews and requirement gathering",
        "Current vs. future state process mapping",
        "ROI calculation for automation opportunities"
      ],
      timeline: "1-2 weeks",
      price: "₹15,000 - ₹25,000"
    },
    'automation-implementation': {
      title: "Workflow Automation Implementation",
      features: [
        "Custom automation workflows development",
        "Multi-platform integrations and connections",
        "Conditional logic and decision trees",
        "Error handling and exception management",
        "Testing and quality assurance processes",
        "User training and documentation"
      ],
      timeline: "2-4 weeks",
      price: "₹30,000 - ₹60,000"
    },
    'monitoring-optimization': {
      title: "Monitoring & Continuous Optimization",
      features: [
        "Real-time workflow monitoring dashboards",
        "Performance analytics and reporting",
        "Automated alerts and notifications",
        "Regular optimization reviews",
        "Scalability planning and implementation",
        "Ongoing support and maintenance"
      ],
      timeline: "Ongoing",
      price: "₹10,000 - ₹20,000/month"
    }
  };

  const successStory = {
    company: "TechConsulting Inc",
    industry: "Consulting Services",
    challenge: "Manual client onboarding taking 3 weeks per client",
    solution: "Automated end-to-end client onboarding workflow",
    results: [
      { metric: "Onboarding Time", before: "3 weeks", after: "3 days" },
      { metric: "Manual Tasks", before: "45 steps", after: "5 steps" },
      { metric: "Error Rate", before: "12%", after: "1%" },
      { metric: "Team Productivity", before: "100%", after: "340%" }
    ]
  };

  const integrationPlatforms = [
    { name: "Zapier", logo: "⚡", description: "5000+ app integrations" },
    { name: "Make.com", logo: "🔗", description: "Visual workflow builder" },
    { name: "Microsoft Power Automate", logo: "🔷", description: "Enterprise automation" },
    { name: "Monday.com", logo: "📋", description: "Work management platform" },
    { name: "Airtable", logo: "📊", description: "Database automation" },
    { name: "Custom APIs", logo: "⚙️", description: "Bespoke integrations" }
  ];

  const workflowSteps = [
    { step: "01", title: "Discovery", description: "Map your current processes and identify pain points", icon: GitBranch },
    { step: "02", title: "Design", description: "Create optimized workflow blueprints", icon: Settings },
    { step: "03", title: "Build", description: "Develop and configure automation workflows", icon: Cpu },
    { step: "04", title: "Deploy", description: "Launch and monitor automated processes", icon: Zap }
  ];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            <Settings className="w-4 h-4 mr-2" />
            Workflow Automation Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Eliminate Bottlenecks with 
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"> Intelligent Workflows</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Transform your business operations with smart workflow automation that adapts to your processes, eliminates manual tasks, and scales with your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <PrimaryCTA 
              label="Get Workflow Audit" 
              icon="search"
              className="text-lg px-8 py-4"
            />
            <button className="flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo (3 min)
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {workflowBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Workflow Types */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Workflows We Automate
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From sales and marketing to operations and HR, we automate workflows across every department.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{type.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-slate-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integration Platforms */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Integrate with Your Existing Tools
            </h3>
            <p className="text-slate-600">
              We connect all your business tools to create seamless, end-to-end automated workflows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationPlatforms.map((platform, index) => (
              <div key={index} className="flex items-center p-4 border border-slate-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all">
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Services</h3>
              <div className="space-y-2">
                {Object.entries(workflowTabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeTab === key 
                        ? 'bg-blue-500 text-white shadow-lg' 
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
                  {workflowTabs[activeTab as keyof typeof workflowTabs].title}
                </h4>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {workflowTabs[activeTab as keyof typeof workflowTabs].timeline}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {workflowTabs[activeTab as keyof typeof workflowTabs].price}
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {workflowTabs[activeTab as keyof typeof workflowTabs].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <PrimaryCTA 
                  label="Start Workflow Project" 
                  icon="arrow"
                  className="px-6 py-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                🏆 Success Story
              </div>
              <h3 className="text-3xl font-bold mb-4">How {successStory.company} Cut Onboarding Time by 85%</h3>
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
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Our Workflow Automation Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {workflowSteps.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="relative">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <IconComponent className="w-8 h-8 text-blue-500 mx-auto mb-4" />
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
        <div className="text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Automate Your Workflows?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop wasting time on repetitive tasks. Get a custom workflow automation strategy in just one week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center">
              <Workflow className="w-5 h-5 mr-2" />
              Get Free Workflow Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center">
              <RefreshCw className="w-5 h-5 mr-2" />
              Book Strategy Session
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-blue-200">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Free process analysis
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Custom automation plan
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              ROI calculator included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowAutomationSection;