import { useState } from "react";
import { Search, TrendingUp, Zap, Target, FileText, CheckCircle, ArrowRight, Play, Calendar, Phone, Settings, Filter, Mail, Globe, BarChart3 } from "lucide-react";
import { PrimaryCTA } from "./cta/StandardizedCTA";

const ProgrammaticSEOSection = () => {
  const [activeTab, setActiveTab] = useState('content-generation');

  const seoBenefits = [
    {
      icon: TrendingUp,
      title: "Scale Content 10x Faster",
      description: "Generate hundreds of SEO-optimized pages in days, not months"
    },
    {
      icon: Target,
      title: "Target Long-tail Keywords",
      description: "Automatically target thousands of low-competition keywords"
    },
    {
      icon: Search,
      title: "Higher Search Rankings",
      description: "AI-optimized content that consistently ranks on page 1"
    },
    {
      icon: BarChart3,
      title: "Measurable Traffic Growth",
      description: "Track organic traffic increases with detailed analytics"
    }
  ];

  const seoPlatforms = [
    { name: "WordPress", logo: "📝", description: "Mass content publishing automation" },
    { name: "Webflow", logo: "🎨", description: "Design-focused content scaling" },
    { name: "Shopify", logo: "🛒", description: "E-commerce product page generation" },
    { name: "Ghost", logo: "👻", description: "Publication-grade content automation" },
    { name: "Contentful", logo: "📚", description: "Headless CMS content scaling" },
    { name: "Custom CMS", logo: "⚙️", description: "Bespoke content management systems" }
  ];

  const seoTabs = {
    'content-generation': {
      title: "AI Content Generation at Scale",
      features: [
        "Mass page creation with unique, SEO-optimized content",
        "Dynamic keyword integration and semantic optimization",
        "Automated internal linking and content structure",
        "Multi-template content variations",
        "Competitor content analysis and gap identification",
        "Content quality scoring and optimization"
      ],
      timeline: "3-4 weeks",
      price: "₹35,000 - ₹55,000"
    },
    'keyword-automation': {
      title: "Keyword Research & Targeting Automation",
      features: [
        "Automated long-tail keyword discovery",
        "Search volume and difficulty analysis",
        "Keyword clustering and content mapping",
        "Competitor keyword gap analysis",
        "Local SEO keyword optimization",
        "Real-time ranking tracking and alerts"
      ],
      timeline: "2-3 weeks",
      price: "₹25,000 - ₹40,000"
    },
    'technical-seo': {
      title: "Technical SEO & Site Optimization",
      features: [
        "Automated sitemap generation and submission",
        "Schema markup implementation at scale",
        "Page speed optimization and monitoring",
        "Mobile-first indexing optimization",
        "Core Web Vitals improvement automation",
        "SEO audit automation and reporting"
      ],
      timeline: "2-4 weeks",
      price: "₹30,000 - ₹50,000"
    }
  };

  // SEO Process Steps
  const seoProcessSteps = [
    {
      step: "01",
      title: "Keyword Research",
      description: "Discover thousands of profitable, low-competition keywords in your niche",
      icon: Search,
      details: ["Competitor analysis", "Search volume research", "Keyword difficulty scoring", "Long-tail opportunities"]
    },
    {
      step: "02", 
      title: "Content Strategy",
      description: "Create scalable content templates and optimization frameworks",
      icon: FileText,
      details: ["Template design", "Content structure", "SEO best practices", "User intent mapping"]
    },
    {
      step: "03",
      title: "Automated Generation", 
      description: "AI generates hundreds of unique, SEO-optimized pages automatically",
      icon: Zap,
      details: ["AI content creation", "Dynamic optimization", "Quality assurance", "Duplicate content prevention"]
    },
    {
      step: "04",
      title: "Publishing & Indexing",
      description: "Automatically publish content and ensure proper search engine indexing",
      icon: Globe,
      details: ["Automated publishing", "Sitemap updates", "Search console submission", "Index monitoring"]
    },
    {
      step: "05",
      title: "Performance Tracking",
      description: "Monitor rankings, traffic, and conversions with automated reporting",
      icon: BarChart3,
      details: ["Ranking monitoring", "Traffic analysis", "Conversion tracking", "ROI measurement"]
    }
  ];

  // Success story data
  const successStory = {
    company: "SaaS Platform",
    challenge: "Needed to rank for 500+ software comparison keywords but creating individual pages manually would take years",
    solution: "Programmatic SEO system that generates comparison pages, feature comparisons, and alternative pages automatically with unique, SEO-optimized content",
    results: [
      { metric: "Pages Created", before: "12/month", after: "200/month" },
      { metric: "Organic Traffic", before: "5K/month", after: "45K/month" },
      { metric: "Ranking Keywords", before: "150", after: "2,400" },
      { metric: "Content Creation Time", before: "8h/page", after: "5min/page" }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-200 text-yellow-700 rounded-full text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            Programmatic SEO & Content Automation
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Scale Content That <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">Actually Ranks</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stop creating content one page at a time. Our AI-powered programmatic SEO system generates hundreds of optimized pages automatically, targeting thousands of keywords.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <PrimaryCTA 
              label="Get SEO Audit + Strategy" 
              icon="search"
              className="text-lg px-8 py-4"
            />
            <button className="flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-yellow-500 hover:text-yellow-600 transition-all duration-200">
              <Play className="w-5 h-5 mr-2" />
              See Results (2 min)
            </button>
          </div>
        </div>

        {/* SEO Process Steps */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Programmatic SEO Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From keyword research to automated publishing - here's how we scale your content and rankings systematically.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {seoProcessSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>

                  {/* Content Card */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 h-full">
                    <IconComponent className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-slate-600 text-sm text-center mb-4">{step.description}</p>
                    
                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-slate-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow for larger screens */}
                  {index < seoProcessSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-6 h-6 text-yellow-400 absolute top-8 -right-4 transform" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {seoBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-yellow-600" />
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
            Platforms We Scale Content On
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {seoPlatforms.map((platform, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-xl hover:bg-yellow-50 hover:border-yellow-200 border border-slate-200 transition-all group">
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
            Choose Your SEO Automation Solution
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(seoTabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-yellow-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-yellow-100 hover:text-yellow-700'
                }`}
              >
                {seoTabs[tab as keyof typeof seoTabs].title}
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-6">
                  {seoTabs[activeTab as keyof typeof seoTabs].title}
                </h4>
                <ul className="space-y-4">
                  {seoTabs[activeTab as keyof typeof seoTabs].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    {seoTabs[activeTab as keyof typeof seoTabs].price}
                  </div>
                  <div className="text-slate-600">
                    Timeline: {seoTabs[activeTab as keyof typeof seoTabs].timeline}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-yellow-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Keyword research included</span>
                  </div>
                  <div className="flex items-center text-yellow-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">90-day optimization support</span>
                  </div>
                  <div className="flex items-center text-yellow-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Ranking guarantees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-12 text-white mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">SEO Success Story: {successStory.company}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-yellow-100">The Challenge:</h4>
                  <p className="text-yellow-50">{successStory.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-yellow-100">Our SEO Solution:</h4>
                  <p className="text-yellow-50">{successStory.solution}</p>
                </div>
              </div>
              <button className="mt-6 flex items-center text-white hover:text-yellow-200 transition-colors">
                Read Full SEO Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">SEO Results Achieved:</h4>
              <div className="space-y-4">
                {successStory.results.map((result, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-yellow-100">{result.metric}</span>
                    <div className="text-right">
                      <div className="text-sm text-yellow-200 line-through">{result.before}</div>
                      <div className="font-bold text-white">{result.after}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Scale Your SEO Content?</h3>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Stop creating content one page at a time. Let us build a programmatic SEO system that ranks for thousands of keywords automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-50 transition-all flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book SEO Strategy Call
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-yellow-600 transition-all flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-XXXXX-XXXXX
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-yellow-200">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Free SEO audit
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Custom content strategy
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Ranking guarantees
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammaticSEOSection;