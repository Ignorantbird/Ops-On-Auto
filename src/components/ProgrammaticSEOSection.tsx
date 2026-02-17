'use client';

// src/components/ProgrammaticSEOSection.tsx - COMPLETE WITH CONTRAST FIXES
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Search, 
  FileText, 
  Zap, 
  Globe, 
  BarChart3, 
  Play, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  TrendingUp,
  ArrowLeft,
  Sparkles,
  PenTool,
  Target,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CTA_ACTIONS from "@/lib/BookingLinks";
import { Calendar } from "lucide-react";

const ProgrammaticSEOSection = () => {
  const [activeTab, setActiveTab] = useState('content-generation');
  const router = useRouter();

  // Core benefits for Generative AI positioning
  const coreFeatures = [
    {
      icon: Zap,
      title: "10x Content Speed",
      description: "Generate hundreds of SEO pages in hours, not months",
      benefit: "Scale content creation without increasing headcount"
    },
    {
      icon: Target,
      title: "Smart Keyword Targeting",
      description: "AI identifies and targets profitable long-tail keywords automatically",
      benefit: "Dominate search results with strategic content"
    },
    {
      icon: TrendingUp,
      title: "Higher Search Rankings",
      description: "AI-optimized content that consistently ranks on page 1",
      benefit: "Get measurable organic traffic increases"
    },
    {
      icon: BarChart3,
      title: "Complete Analytics Tracking",
      description: "Monitor content performance and ROI with detailed insights",
      benefit: "Data-driven content optimization for maximum impact"
    }
  ];

  // Content generation platforms
  const contentPlatforms = [
    { name: "WordPress", logo: "📝", description: "Mass content publishing" },
    { name: "Webflow", logo: "🎨", description: "Design-focused scaling" },
    { name: "Shopify", logo: "🛒", description: "E-commerce content" },
    { name: "Ghost", logo: "👻", description: "Publication-grade content" },
    { name: "Custom CMS", logo: "⚙️", description: "Bespoke solutions" }
  ];

  // Updated SEO tabs with USD pricing
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
      price: "$700 - $1,100"
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
      price: "$500 - $800"
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
      price: "$600 - $1,000"
    }
  };

  // Updated pricing tiers with USD and contrast fixes
  const pricingTiers = [
    {
      name: "Content Factory Starter",
      price: "$700",
      description: "AI content generation for growing businesses",
      features: [
        "50-100 AI-generated pages per month",
        "Keyword research and optimization",
        "Basic content templates",
        "WordPress/CMS integration",
        "Performance tracking dashboard",
        "30-day content optimization"
      ],
      ideal: "Small businesses, startups, agencies",
      timeline: "2-3 weeks",
      popular: false,
      roi: "5-8x ROI in first 90 days",
      savings: "Save $3,000+/month vs manual content creation"
    },
    {
      name: "Content Factory Pro",
      price: "$1,400", 
      description: "Advanced AI content system with automation",
      features: [
        "200-500 AI-generated pages per month",
        "Advanced keyword clustering & targeting",
        "Multi-template content variations",
        "Automated publishing & indexing",
        "Competitor content analysis",
        "Custom content workflows",
        "Priority support & optimization",
        "Advanced analytics & reporting"
      ],
      ideal: "Growing businesses, content agencies, SaaS",
      timeline: "3-4 weeks",
      popular: true,
      roi: "10-15x ROI in first 90 days", 
      savings: "Save $8,000+/month vs content team"
    },
    {
      name: "Enterprise Content Engine",
      price: "Custom Quote",
      description: "Full-scale AI content generation ecosystem",
      features: [
        "1000+ AI-generated pages per month",
        "Custom AI content models",
        "Multi-language content generation",
        "Advanced automation workflows",
        "Enterprise integrations & API access",
        "Dedicated content strategist",
        "White-label content solutions",
        "24/7 monitoring & optimization"
      ],
      ideal: "Large enterprises, media companies",
      timeline: "4-6 weeks",
      popular: false,
      roi: "20-30x ROI in first year",
      savings: "Save $25,000+/month vs content team"
    }
  ];

  // SEO Process Steps
  const seoProcessSteps = [
    {
      step: "01",
      title: "AI Keyword Research",
      description: "AI discovers thousands of profitable, low-competition keywords in your niche",
      icon: Search,
      details: ["Competitor analysis", "Search volume research", "Keyword difficulty scoring", "Long-tail opportunities"]
    },
    {
      step: "02", 
      title: "Content Strategy & Templates",
      description: "Create scalable content templates and AI generation frameworks",
      icon: FileText,
      details: ["Template design", "Content structure", "SEO best practices", "User intent mapping"]
    },
    {
      step: "03",
      title: "AI Content Generation", 
      description: "AI generates hundreds of unique, SEO-optimized pages automatically",
      icon: Zap,
      details: ["AI content creation", "Dynamic optimization", "Quality assurance", "Duplicate content prevention"]
    },
    {
      step: "04",
      title: "Automated Publishing",
      description: "Automatically publish content and ensure proper search engine indexing",
      icon: Globe,
      details: ["Automated publishing", "Sitemap updates", "Search console submission", "Index monitoring"]
    },
    {
      step: "05",
      title: "Performance Optimization",
      description: "Monitor rankings, traffic, and conversions with automated reporting",
      icon: BarChart3,
      details: ["Ranking monitoring", "Traffic analysis", "Conversion tracking", "ROI measurement"]
    }
  ];

  // Success story data
  const successStory = {
    company: "SaaS Platform",
    challenge: "Needed to rank for 500+ software comparison keywords but creating individual pages manually would take years",
    solution: "AI Content Generation System that creates comparison pages, feature comparisons, and alternative pages automatically with unique, SEO-optimized content",
    results: [
      { metric: "Pages Created", before: "12/month", after: "200/month" },
      { metric: "Organic Traffic", before: "5K/month", after: "45K/month" },
      { metric: "Ranking Keywords", before: "150", after: "2,400" },
      { metric: "Content Creation Time", before: "8h/page", after: "5min/page" }
    ]
  };

  const tabContent = {
    'how-it-works': (
      <div className="space-y-8">
        {/* Generative AI Positioning Banner */}
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 border border-yellow-200 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Generative AI Service
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              AI Content Factory That Creates at Scale
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Unlike basic SEO tools, our AI Content Generation System creates thousands of unique, optimized pages automatically. It's like having a 24/7 content team that never runs out of ideas.
            </p>
            <Button 
              onClick={() => router.push('/generative-ai')} 
              className="mt-6 bg-yellow-500 hover:bg-yellow-600"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              View All Generative AI Services
            </Button>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {seoProcessSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-yellow-200">{step.step}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{step.description}</p>
                  <ul className="space-y-1">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-xs text-slate-500 flex items-center">
                        <CheckCircle className="w-3 h-3 text-yellow-500 mr-1 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < seoProcessSteps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-yellow-300 w-6 h-6 hidden lg:block" />
                )}
              </div>
            );
          })}
        </div>

        {/* Content Platforms */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Content Management Platforms We Support</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {contentPlatforms.map((platform, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200">
                <div className="text-3xl mb-2">{platform.logo}</div>
                <div className="font-semibold text-slate-900 text-sm">{platform.name}</div>
                <div className="text-xs text-slate-600">{platform.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Real Results: {successStory.company}</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Challenge</h4>
              <p className="text-slate-600 mb-4">{successStory.challenge}</p>
              <h4 className="font-semibold text-slate-900 mb-3">Solution</h4>
              <p className="text-slate-600">{successStory.solution}</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Results</h4>
              <div className="grid grid-cols-2 gap-4">
                {successStory.results.map((result, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-xl">
                    <div className="text-green-600 font-semibold text-sm">{result.metric}</div>
                    <div className="text-red-500 text-xs">Before: {result.before}</div>
                    <div className="text-green-600 text-sm font-bold">After: {result.after}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'use-cases': (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(seoTabs).map(([key, tab]) => (
            <div key={key} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">{tab.title}</h4>
              <ul className="space-y-3 mb-6">
                {tab.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-slate-600">{tab.timeline}</span>
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-slate-600">{tab.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    'pricing': (
      <div className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
              tier.popular 
                ? 'border-yellow-500 bg-white transform scale-105' 
                : 'border-slate-200 bg-white hover:border-yellow-300'
            }`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-yellow-600 mb-2">{tier.price}</div>
                <p className="text-slate-600">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-800">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4 mb-8">
                <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                  <div className="text-green-700 font-semibold text-sm">Expected ROI</div>
                  <div className="text-green-800">{tier.roi}</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                  <div className="text-blue-700 font-semibold text-sm">Cost Savings</div>
                  <div className="text-blue-800">{tier.savings}</div>
                </div>
              </div>

              <Button 
                className={`w-full py-3 ${
                  tier.popular 
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                    : 'bg-white border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50'
                }`}
                onClick={() => CTA_ACTIONS.BOOK_STRATEGY_SESSION()}
              >
                {tier.price === 'Custom Quote' ? 'Get Custom Quote' : 'Start Project'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Hero Section - Updated for Generative AI */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-200 text-black-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Content Generation System - Premium Generative AI Service
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Scale Content That <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">Actually Ranks</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Deploy an AI Content Factory that generates hundreds of SEO-optimized pages automatically. Stop creating content one page at a time - start scaling content that converts.
          </p>
          
          <Button 
            onClick={() => router.push('/generative-ai')} 
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white text-lg px-8 py-4 mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Explore All Generative AI Services
          </Button>
        </div>

        {/* Core Features - Matching Voice AI Structure */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{feature.description}</p>
                <p className="text-xs text-yellow-600 font-medium">{feature.benefit}</p>
              </div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-100">
            {[
              { key: 'how-it-works', label: 'How It Works', icon: PenTool },
              { key: 'use-cases', label: 'Use Cases', icon: Target },
              { key: 'pricing', label: 'Pricing', icon: DollarSign }
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                    activeTab === tab.key
                      ? 'bg-yellow-500 text-white shadow-lg'
                      : 'text-slate-600 hover:text-yellow-600 hover:bg-yellow-50'
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
        <div className="max-w-7xl mx-auto">
          {tabContent[activeTab]}
        </div>

        {/* CTA Section */}
        <div className="mt-10">
          <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-12 text-brown">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6">
                  Ready to Launch Your AI Content Factory?
                </h2>
                <p className="text-xl text-brown/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join 150+ businesses using AI to generate thousands of SEO pages automatically and dominate search rankings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  
                  <Button 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => CTA_ACTIONS.BOOK_STRATEGY_SESSION()}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Strategy Call
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-brown/80">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brown-400 mr-2" />
                    No long-term contracts
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brown-400 mr-2" />
                    30-day content guarantee
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brown-400 mr-2" />
                    Live in 3-4 weeks
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProgrammaticSEOSection;