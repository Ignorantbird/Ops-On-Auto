// src/components/GenerativeAISection.tsx - NEW COMPONENT
import { useState } from "react";
import { CheckCircle, Clock, TrendingUp, Users, Zap, ArrowRight, Play, Calendar, MessageSquare, FileText, Palette, Bot, Sparkles, Brain, Target, Shield, Wand2 } from "lucide-react";

const GenerativeAISection = () => {
  const [activeTab, setActiveTab] = useState('content-creation');

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

  // Use cases with specific ROI data
  const useCases = [
    {
      title: "Marketing Content Factory",
      scenario: "AI generates blog posts, social media, email campaigns, and ad copy",
      result: "₹12 lakhs annual savings + 500% content output increase",
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
      result: "₹8 lakhs support cost savings + 24/7 availability",
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

  // Pricing tiers with clear value props
  const pricingTiers = [
    {
      name: "Content Starter",
      price: "₹45,000",
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
      savings: "Save ₹25,000/month vs hiring writer"
    },
    {
      name: "Content Pro",
      price: "₹85,000",
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
      savings: "Save ₹60,000/month vs content team"
    },
    {
      name: "Enterprise Content Engine",
      price: "₹150,000+",
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
      savings: "Save ₹200,000+/month vs full creative team"
    }
  ];

  // Success metrics that matter
  const successMetrics = [
    { metric: "Content Output", value: "500% increase", icon: TrendingUp },
    { metric: "Time Savings", value: "30+ hours/week", icon: Clock },
    { metric: "Cost Reduction", value: "₹60,000/month", icon: Users },
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
          <div className="grid md:grid-cols-4 gap-4">
            {contentTypes.map((content, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-200">
                <div className="text-2xl mb-2">{content.icon}</div>
                <div className="font-semibold text-slate-900 text-sm mb-1">{content.type}</div>
                <div className="text-xs text-slate-600">{content.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    'use_cases': (
      <div className="grid md:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
            <p className="text-slate-600 mb-4">{useCase.scenario}</p>
            <div className="space-y-3">
              <div className="text-green-600 font-semibold">
                💰 {useCase.result}
              </div>
              <div className="text-purple-600 font-medium">
                ⚡ {useCase.timeline}
              </div>
              <div className="text-sm text-slate-500">
                <strong>Best for:</strong> {useCase.industries.join(", ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
    'pricing': (
      <div className="grid md:grid-cols-3 gap-6">
        {pricingTiers.map((tier, index) => (
          <div key={index} className={`relative bg-white rounded-xl border-2 p-6 hover:shadow-xl transition-all duration-300 ${
            tier.popular ? 'border-purple-500 transform scale-105' : 'border-gray-200'
          }`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">{tier.price}</div>
              <p className="text-slate-600">{tier.description}</p>
            </div>
            
            <div className="mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <div className="text-sm font-semibold text-green-800">{tier.savings}</div>
              </div>
            </div>
            
            <ul className="space-y-3 mb-6">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-gray-100 pt-4 space-y-2 mb-6">
              <div className="text-sm text-slate-600">
                <strong>Ideal for:</strong> {tier.ideal}
              </div>
              <div className="text-sm text-purple-600">
                <strong>Timeline:</strong> {tier.timeline}
              </div>
            </div>
            
            <button className={`w-full mt-6 py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
              tier.popular 
                ? 'bg-purple-500 text-white hover:bg-purple-600 hover:scale-105' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    )
  };

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
          
          {/* Success Metrics Bar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-600">{metric.metric}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 transition-all flex items-center justify-center group hover:scale-105">
              <Calendar className="w-5 h-5 mr-2" />
              Book Content Strategy Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              See AI Content Samples
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-100">
            {[
              { key: 'content-creation', label: 'How It Works', icon: Brain },
              { key: 'use_cases', label: 'Use Cases', icon: Target },
              { key: 'pricing', label: 'Pricing', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                  activeTab === tab.key
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'text-slate-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>

        {/* Final CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Content Creation?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join 150+ businesses who've automated their content and creative processes. 
            Start with a free content audit and strategy session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Free Content Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Strategy Call
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-8 text-sm text-purple-200">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Free content strategy session
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Custom brand voice training included
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Results guaranteed in 60 days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerativeAISection;