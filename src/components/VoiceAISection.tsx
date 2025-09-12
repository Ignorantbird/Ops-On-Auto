// src/components/VoiceAISection.tsx - UPDATED WITH HORIZONTAL TABS
import { useState } from "react";
import { Phone, Users, Target, BarChart3, Zap, CheckCircle, ArrowRight, Play, Clock, TrendingUp, Bot, MessageCircle, Calendar, Settings, Mic, PhoneCall, Volume2, DollarSign, Brain } from "lucide-react";
import { CTA_ACTIONS } from "@/lib/BookingLinks";
import { Button } from "./ui/button";

const VoiceAISection = () => {
  const [activeTab, setActiveTab] = useState('how-it-works');
  const [activeServiceTab, setActiveServiceTab] = useState('lead-qualification');

  // Core features for "How It Works" tab
  const coreFeatures = [
    {
      icon: Phone,
      title: "24/7 AI Voice Conversations",
      description: "Human-like AI voice bot that handles calls across all time zones with natural conversation flow",
      benefit: "Never miss a lead - AI handles calls when you're unavailable"
    },
    {
      icon: Target,
      title: "Intelligent Lead Qualification",
      description: "AI analyzes conversation in real-time and qualifies leads based on your specific criteria",
      benefit: "Focus only on high-intent, qualified prospects"
    },
    {
      icon: MessageCircle,
      title: "Smart Objection Handling",
      description: "AI trained on proven scripts to handle objections and keep conversations flowing naturally",
      benefit: "Convert more objections into appointments and sales"
    },
    {
      icon: Calendar,
      title: "Automated Appointment Booking",
      description: "AI schedules appointments directly into your calendar while maintaining conversation context",
      benefit: "Seamless booking experience without human handoffs"
    }
  ];

  // Use cases for "Use Cases" tab
  const useCases = [
    {
      title: "Lead Qualification & Scoring",
      scenario: "AI voice bot calls leads, asks qualifying questions, and scores prospects based on fit and buying intent",
      result: "200% increase in qualified leads + 3x higher connect rates",
      timeline: "Live in 2-3 weeks",
      industries: ["Real Estate", "Insurance", "B2B Services"],
      savings: "Save $800/month vs hiring SDRs"
    },
    {
      title: "Appointment Booking Automation",
      scenario: "AI handles inbound and outbound calls to book appointments, manage calendar, and send confirmations",
      result: "150% more appointments booked + 60% reduction in no-shows",
      timeline: "Live in 1-2 weeks",
      industries: ["Healthcare", "Professional Services", "Consulting"],
      savings: "Save $600/month vs scheduling staff"
    },
    {
      title: "Customer Service & Support",
      scenario: "AI handles customer inquiries, provides information, and escalates complex issues to human agents",
      result: "24/7 availability + 70% reduction in support costs",
      timeline: "Live in 2-4 weeks",
      industries: ["E-commerce", "SaaS", "Service Businesses"],
      savings: "Save $1,200/month vs support team"
    },
    {
      title: "Follow-Up Call Automation",
      scenario: "AI makes follow-up calls to nurture leads, check satisfaction, and identify upsell opportunities",
      result: "40% higher response rates + 25% increase in conversions",
      timeline: "Live in 2-3 weeks",
      industries: ["Sales Teams", "Agencies", "Subscription Services"],
      savings: "Save $700/month vs manual follow-up"
    }
  ];

  // Pricing tiers - Updated to USD and Agentic AI positioning
  const pricingTiers = [
    {
      name: "Voice AI Starter",
      price: "$800",
      description: "Intelligent voice agent for growing businesses",
      features: [
        "AI voice calling system setup",
        "Lead qualification conversations",
        "Appointment booking automation",
        "CRM integration (HubSpot/Salesforce)",
        "Call analytics and reporting",
        "30-day setup and optimization"
      ],
      ideal: "Small businesses, startups, solo entrepreneurs",
      timeline: "2-3 weeks",
      popular: false,
      roi: "3-5x ROI in first 90 days",
      savings: "Save $600+/month"
    },
    {
      name: "Voice AI Pro",
      price: "$1,400",
      description: "Advanced voice AI agent for scaling teams",
      features: [
        "Multi-scenario conversation flows",
        "Advanced lead scoring and qualification",
        "Custom script training for your business",
        "Automated appointment booking and management",
        "Customer service and support capabilities",
        "Advanced analytics and call insights",
        "90-day optimization and strategy calls"
      ],
      ideal: "Growing sales teams, service businesses, agencies",
      timeline: "3-4 weeks",
      popular: true,
      roi: "5-8x ROI in first 90 days",
      savings: "Save $1,000+/month"
    },
    {
      name: "Enterprise Voice AI",
      price: "$2,800+",
      description: "Complete voice AI solution for large organizations",
      features: [
        "Unlimited voice AI conversations",
        "Multi-language conversation support",
        "Advanced predictive conversation routing",
        "Custom AI training for complex products",
        "Multi-team integration and management",
        "API integrations with all business tools",
        "Dedicated success manager and quarterly reviews",
        "6-month partnership with ongoing optimization"
      ],
      ideal: "Enterprise teams, large agencies, corporations",
      timeline: "4-6 weeks",
      popular: false,
      roi: "8-12x ROI in first 90 days",
      savings: "Save $2,500+/month"
    }
  ];

  // Voice AI benefits
  const voiceAIBenefits = [
    {
      icon: Clock,
      title: "24/7 Lead Qualification",
      description: "Never miss a lead again with round-the-clock intelligent calling"
    },
    {
      icon: TrendingUp,
      title: "3x Higher Connect Rates",
      description: "AI calls connect more often than traditional methods"
    },
    {
      icon: Target,
      title: "Instant Lead Scoring",
      description: "Automatically qualify and score leads during the conversation"
    },
    {
      icon: BarChart3,
      title: "Complete Call Analytics",
      description: "Detailed insights on every conversation and outcome"
    }
  ];

  // Voice AI platforms
  const voiceAIPlatforms = [
    { name: "Vapi.ai", logo: "🎙️", description: "Advanced voice platform" },
    { name: "Twilio Voice", logo: "📞", description: "Enterprise communication" },
    { name: "ElevenLabs", logo: "🎵", description: "Natural voice synthesis" },
    { name: "OpenAI Whisper", logo: "🗣️", description: "Speech recognition engine" },
    { name: "Custom Integrations", logo: "🔧", description: "Tailored voice solutions" }
  ];

  // Tab content structure
  const tabContent = {
    'how-it-works': (
      <div className="space-y-8">
        {/* Agentic AI Positioning Banner */}
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 border border-pink-200">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-pink-500 text-white rounded-full text-sm font-medium mb-4">
              <Brain className="w-4 h-4 mr-2" />
              Premium Agentic AI Service
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              AI Voice Agent That Thinks & Responds Intelligently
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Unlike basic voice automation, our AI voice agent uses advanced reasoning to understand conversation context, make intelligent decisions, and handle complex customer interactions autonomously.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm mb-3">{feature.description}</p>
              <div className="text-sm text-pink-600 font-semibold flex items-start">
                <CheckCircle className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
                {feature.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    'use_cases': (
      <div className="grid md:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-gradient-to-br from-white to-pink-50 p-6 rounded-xl border border-pink-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
            <p className="text-slate-600 mb-4">{useCase.scenario}</p>
            <div className="space-y-3">
              <div className="text-green-600 font-semibold">
                📈 {useCase.result}
              </div>
              <div className="text-pink-600 font-medium">
                ⚡ {useCase.timeline}
              </div>
              <div className="text-blue-600 font-medium">
                💰 {useCase.savings}
              </div>
              <div className="text-sm text-slate-500">
                <strong>Perfect for:</strong> {useCase.industries.join(", ")}
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
            tier.popular ?
              'border-pink-500 transform scale-105' : 'border-gray-200'
          }`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-pink-600 mb-2">{tier.price}</div>
              <p className="text-slate-600">{tier.description}</p>
            </div>
            
            <div className="mb-6 space-y-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="text-sm font-semibold text-green-800">{tier.roi}</div>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                <div className="text-sm font-semibold text-pink-800">{tier.savings}</div>
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
              <div className="text-sm text-pink-600">
                <strong>Timeline:</strong> {tier.timeline}
              </div>
            </div>
            
            <button 
              onClick={() => CTA_ACTIONS.GET_WORKFLOW_AUDIT()}
              className={`w-full mt-6 py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                tier.popular 
                  ? 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg hover:shadow-xl'
                  : 'bg-gray-100 text-gray-700 hover:bg-pink-50 hover:text-pink-600'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    )
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-pink-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Premium Agentic AI Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            AI Voice Agent That 
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent"> Never Sleeps</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Deploy intelligent Voice AI bots that handle lead qualification, appointment booking, and customer inquiries with natural conversation flow — 24/7, 365 days a year.
          </p>

          {/* Category Link */}
          <div className="mb-8">
            <a 
              href="/agentic-ai" 
              className="inline-flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg text-sm font-medium hover:bg-pink-600 transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Explore All Agentic AI Services
            </a>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {voiceAIBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Horizontal Tab Navigation - Like Sales AI */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-100">
              {[
                { key: 'how-it-works', label: 'How It Works', icon: Bot },
                { key: 'use_cases', label: 'Use Cases', icon: Target },
                { key: 'pricing', label: 'Pricing', icon: DollarSign }
              ].map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                      activeTab === tab.key
                        ? 'bg-pink-500 text-white shadow-lg'
                        : 'text-slate-600 hover:text-pink-600 hover:bg-pink-50'
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto mb-20">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>

        {/* Voice AI Platforms */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Powered by Leading Voice AI Platforms</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We integrate with the most advanced voice AI technologies to deliver natural, human-like conversations.
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {voiceAIPlatforms.map((platform, index) => (
              <div key={index} className="flex flex-col items-center p-4 border border-slate-200 rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all">
                <div className="text-3xl mb-2">{platform.logo}</div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{platform.name}</h4>
                <p className="text-xs text-slate-600 text-center">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-10">
          <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-12 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Deploy Your AI Voice Agent?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Join 200+ businesses using intelligent Voice AI to qualify leads, book appointments, and provide 24/7 customer service.
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
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-white/80">
                  <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Free AI voice audit & strategy call
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Money-back guarantee if not satisfied
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    4-10x ROI guaranteed in 90 days
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

export default VoiceAISection;