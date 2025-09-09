// src/components/GenerativeAISection.tsx - FINAL FIXED VERSION
import { useState } from "react";
import { CheckCircle, Clock, TrendingUp, Users, Zap, ArrowRight, Play, Calendar, MessageSquare, FileText, Palette, Bot, Sparkles, Brain, Target, Shield, Wand2 } from "lucide-react";

const GenerativeAISection = () => {
  // FIXED: Start with 'pricing' tab instead of 'content-creation'
  const [activeTab, setActiveTab] = useState('pricing');

  // Core features of Generative AI
  const coreFeatures = [
    {
      icon: FileText,
      title: "Brand-Consistent Content Creation",
      description: "AI that learns your brand voice and creates content that sounds authentically you",
      benefit: "Scale content 10x while maintaining brand integrity"
    },
    {
      icon: Palette,
      title: "Multi-Format Creative Generation",
      description: "From blog posts to social media, proposals to presentations - all formats covered",
      benefit: "One AI system handles all your content needs"
    },
    {
      icon: Bot,
      title: "Intelligent Content Optimization",
      description: "AI analyzes performance and automatically improves content over time",
      benefit: "Content gets better and more effective automatically"
    },
    {
      icon: Sparkles,
      title: "Custom Template Engine",
      description: "Pre-built templates for your specific industry and use cases",
      benefit: "Generate professional content in seconds, not hours"
    }
  ];

  // Use cases with specific ROI data (UPDATED with USD)
  const useCases = [
    {
      title: "Marketing Content Factory",
      scenario: "AI generates blog posts, social media, email campaigns, and ad copy",
      result: "$24,000+ annual savings + 500% content output increase",
      timeline: "Live in 2 weeks",
      industries: ["Marketing Agencies", "E-commerce", "SaaS Companies"]
    },
    {
      title: "Sales Proposal Automation",
      scenario: "AI creates personalized proposals, quotes, and contracts instantly",
      result: "75% faster proposal generation + 40% higher close rates",
      timeline: "Live in 3 weeks",
      industries: ["Consultancies", "Service Providers", "B2B Sales"]
    },
    {
      title: "Customer Communication Hub",
      scenario: "AI handles support responses, follow-ups, and customer updates",
      result: "$2,000+ support cost savings + 24/7 availability",
      timeline: "Live in 2 weeks",
      industries: ["E-commerce", "SaaS", "Service Businesses"]
    },
    {
      title: "Training & Documentation System",
      scenario: "AI creates training materials, SOPs, and knowledge base content",
      result: "80% reduction in documentation time + improved consistency",
      timeline: "Live in 4 weeks",
      industries: ["Enterprises", "Franchises", "Growing Teams"]
    }
  ];

  // UPDATED: Pricing tiers with USD instead of Indian Rupees
  const pricingTiers = [
    {
      name: "Content Starter",
      price: "$1,000",
      description: "Perfect for small businesses starting content automation",
      features: [
        "AI content generation for 1 format (blog/social/email)",
        "Brand voice training & setup",
        "50 pieces of content included",
        "Basic performance tracking",
        "Email support & 30-day optimization"
      ],
      ideal: "Small businesses, solopreneurs, startups",
      timeline: "2-3 weeks",
      popular: false,
      savings: "Save $500/month vs hiring writer"
    },
    {
      name: "Content Pro",
      price: "$1,700",
      description: "Comprehensive content automation across all channels",
      features: [
        "AI content for all formats (blog, social, email, ads)",
        "Advanced brand voice & style matching",
        "200 pieces of content included",
        "Performance analytics & optimization",
        "Custom templates for your industry",
        "90-day support & monthly strategy calls"
      ],
      ideal: "Marketing teams, agencies, growing companies",
      timeline: "3-4 weeks",
      popular: true,
      savings: "Save $1,200/month vs content team"
    },
    {
      name: "Enterprise Content Engine",
      price: "$3,000+",
      description: "Complete content & creative automation ecosystem",
      features: [
        "Unlimited AI content generation",
        "Multi-brand voice management",
        "Advanced creative assets (graphics, videos)",
        "API integrations with your tools",
        "Custom AI models for specific needs",
        "Dedicated account manager & quarterly reviews",
        "6-month partnership with ongoing optimization"
      ],
      ideal: "Large companies, franchises, enterprise teams",
      timeline: "4-6 weeks",
      popular: false,
      savings: "Save $4,000+/month vs full creative team"
    }
  ];

  // Success metrics that matter (UPDATED with USD)
  const successMetrics = [
    { metric: "Content Output", value: "500% increase", icon: TrendingUp },
    { metric: "Time Savings", value: "30+ hours/week", icon: Clock },
    { metric: "Cost Reduction", value: "$5,000/month", icon: Users },
    { metric: "Quality Score", value: "95% brand match", icon: Target }
  ];

  // Content types we can generate
  const contentTypes = [
    { type: "Blog Posts & Articles", icon: "📝", description: "SEO-optimized long-form content" },
    { type: "Social Media Content", icon: "📱", description: "Platform-specific posts & captions" },
    { type: "Email Campaigns", icon: "📧", description: "Nurture sequences & newsletters" },
    { type: "Sales Materials", icon: "💼", description: "Proposals, quotes, presentations" },
    { type: "Website Copy", icon: "🌐", description: "Landing pages, product descriptions" },
    { type: "Ad Copy", icon: "🎯", description: "PPC ads, social ads, display ads" },
    { type: "Video Scripts", icon: "🎬", description: "YouTube, social video content" },
    { type: "Training Materials", icon: "📚", description: "SOPs, guides, documentation" }
  ];

  const tabContent = {
    'content-creation': (
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
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
        
        {/* Content Types Grid */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Content Types We Generate</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-colors duration-200">
                <div className="text-2xl mb-2">{type.icon}</div>
                <h4 className="font-semibold text-slate-900 mb-1">{type.type}</h4>
                <p className="text-sm text-slate-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),

    'use-cases': (
      <div className="space-y-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{useCase.title}</h3>
              <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                {useCase.timeline}
              </span>
            </div>
            <p className="text-slate-600 mb-4">{useCase.scenario}</p>
            <div className="flex items-center text-green-600 font-semibold mb-4">
              <CheckCircle className="w-5 h-5 mr-2" />
              {useCase.result}
            </div>
            <div className="flex flex-wrap gap-2">
              {useCase.industries.map((industry, idx) => (
                <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),

    // FIXED: Changed key from 'success-metrics' to 'pricing' and show pricing cards
    'pricing': (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
              tier.popular ? 'border-purple-500 transform scale-105' : 'border-gray-200 hover:border-purple-300'
            } transition-all duration-300 hover:shadow-xl`}>
              
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">{tier.price}</div>
                <p className="text-slate-600">{tier.description}</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                <p className="text-sm font-semibold text-green-700">{tier.savings}</p>
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <div className="text-sm text-slate-600">
                  <strong>Ideal for:</strong> {tier.ideal}
                </div>
                <div className="text-sm text-slate-600">
                  <strong>Timeline:</strong> {tier.timeline}
                </div>
              </div>

              <button 
                onClick={() => window.open('/workflow-audit', '_blank')}
                className={`w-full text-lg py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:scale-105' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  };

  // FIXED: Updated tabs array to show 'Pricing' instead of 'Results'
  const tabs = [
    { key: 'content-creation', label: 'How It Works', icon: Brain },
    { key: 'use-cases', label: 'Use Cases', icon: Target },
    { key: 'pricing', label: 'Pricing', icon: TrendingUp }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/20">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full text-sm font-medium mb-6">
            <Wand2 className="w-4 h-4 mr-2" />
            Generative AI Solutions - Creative Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            AI Content Factory That 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Scales Your Creativity</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Deploy custom AI that creates brand-consistent content, proposals, and creative materials at scale. 
            From blog posts to sales materials - your AI content team never stops creating.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => window.open('/workflow-audit', '_blank')}
              className="inline-flex items-center justify-center text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get Content Demo
            </button>
            <button 
              className="inline-flex items-center justify-center text-lg px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-600 transition-all duration-300"
              onClick={() => window.open('https://calendly.com/your-demo-link', '_blank')}
            >
              <Play className="w-5 h-5 mr-2" />
              See AI in Action (3 min)
            </button>
          </div>

          {/* Key metrics display */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {successMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">{metric.value}</div>
                  <div className="text-slate-600">{metric.metric}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Dropdown Menu */}
        <div className="mb-20">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 inline-block">
              <div className="space-y-0">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`w-full text-left px-6 py-4 font-medium transition-all duration-200 flex items-center ${
                      activeTab === tab.key
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    } ${index === 0 ? 'rounded-t-lg' : ''} ${index === tabs.length - 1 ? 'rounded-b-lg' : ''}`}
                  >
                    <tab.icon className="w-4 h-4 mr-3" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Content Creation?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join 150+ businesses who've automated their content and creative processes. 
              Start with a free content audit and strategy session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('/workflow-audit', '_blank')}
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                📝 Free Content Audit
              </button>
              <button 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                onClick={() => window.open('/contact', '_blank')}
              >
                📞 Book Strategy Call
              </button>
            </div>
            <div className="flex justify-center gap-8 mt-8 text-sm opacity-90">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Free content strategy session
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Custom brand voice training included
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Results guaranteed in 60 days
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GenerativeAISection;