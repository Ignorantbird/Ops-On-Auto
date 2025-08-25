import { useState } from "react";
import { Phone, Users, Target, BarChart3, Zap, CheckCircle, ArrowRight, Play, Clock, TrendingUp, Bot, MessageCircle, Calendar, Settings, Mic, PhoneCall, Volume2 } from "lucide-react";
import { PrimaryCTA } from "./cta/StandardizedCTA";

const VoiceAISection = () => {
  const [activeTab, setActiveTab] = useState('lead-qualification');

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

  const voiceAIFeatures = [
    { feature: "Natural conversation flow", icon: MessageCircle },
    { feature: "Multi-language support", icon: Volume2 },
    { feature: "Appointment scheduling", icon: Calendar },
    { feature: "CRM integration", icon: Settings },
    { feature: "Custom script training", icon: Bot },
    { feature: "Real-time analytics", icon: BarChart3 }
  ];

  const voiceAITabs = {
    'lead-qualification': {
      title: "Lead Qualification & Scoring",
      features: [
        "Intelligent conversation flow based on your criteria",
        "Real-time lead scoring during calls",
        "Automatic CRM updates with qualification status",
        "Follow-up scheduling for qualified leads",
        "Detailed call transcripts and analysis",
        "Custom qualification questionnaires"
      ],
      timeline: "2-3 weeks",
      price: "₹40,000 - ₹60,000"
    },
    'appointment-booking': {
      title: "Appointment Booking & Scheduling",
      features: [
        "Calendar integration for real-time availability",
        "Automated appointment confirmation emails",
        "Rescheduling and cancellation handling",
        "Multiple time zone support",
        "SMS and email reminders",
        "No-show follow-up sequences"
      ],
      timeline: "2-3 weeks",
      price: "₹35,000 - ₹55,000"
    },
    'customer-support': {
      title: "Customer Support & Inquiries",
      features: [
        "24/7 customer inquiry handling",
        "Intelligent call routing to human agents",
        "FAQ automation with natural responses",
        "Order status and account inquiries",
        "Complaint logging and escalation",
        "Multi-channel support integration"
      ],
      timeline: "3-4 weeks",
      price: "₹50,000 - ₹70,000"
    }
  };

  const successStory = {
    company: "RealEstate Pro",
    industry: "Real Estate",
    challenge: "Missing 60% of inbound leads due to delayed response",
    solution: "24/7 Voice AI for instant lead qualification",
    results: [
      { metric: "Lead Response Time", before: "4+ hours", after: "Under 2 minutes" },
      { metric: "Connect Rate", before: "23%", after: "67%" },
      { metric: "Qualified Appointments", before: "12/month", after: "48/month" },
      { metric: "Cost per Lead", before: "₹2,400", after: "₹800" }
    ]
  };

  const voiceAIPlatforms = [
    { name: "Vapi.ai", logo: "🎙️", description: "Advanced voice AI platform" },
    { name: "Twilio Voice", logo: "📞", description: "Scalable voice infrastructure" },
    { name: "ElevenLabs", logo: "🔊", description: "Natural voice synthesis" },
    { name: "OpenAI Whisper", logo: "🤖", description: "Speech recognition engine" },
    { name: "Custom Integrations", logo: "⚙️", description: "Your existing phone systems" }
  ];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
            <Phone className="w-4 h-4 mr-2" />
            Voice AI Calling Bot Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Human-Like Voice AI That 
            <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent"> Never Sleeps</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Deploy intelligent Voice AI bots that handle lead qualification, appointment booking, and customer inquiries with natural conversation flow — 24/7, 365 days a year.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <PrimaryCTA 
              label="Hear Voice AI Demo" 
              icon="phone"
              className="text-lg px-8 py-4"
            />
            <button className="flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-pink-500 hover:text-pink-600 transition-all duration-200">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo Video
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {voiceAIBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Voice AI Platforms */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Powered by Leading Voice AI Platforms
            </h3>
            <p className="text-slate-600">
              We integrate with the most advanced voice AI technologies to deliver natural, human-like conversations.
            </p>
          </div>
          
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

        {/* Service Tabs */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-20">
          <div className="flex flex-col md:flex-row">
            {/* Tab Navigation */}
            <div className="md:w-1/3 bg-slate-50 p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Voice AI Services</h3>
              <div className="space-y-2">
                {Object.entries(voiceAITabs).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeTab === key 
                        ? 'bg-pink-500 text-white shadow-lg' 
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
                  {voiceAITabs[activeTab as keyof typeof voiceAITabs].title}
                </h4>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {voiceAITabs[activeTab as keyof typeof voiceAITabs].timeline}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {voiceAITabs[activeTab as keyof typeof voiceAITabs].price}
                  </span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {voiceAITabs[activeTab as keyof typeof voiceAITabs].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <PrimaryCTA 
                  label="Get Voice AI Quote" 
                  icon="phone"
                  className="px-6 py-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-8 text-white mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                🏆 Success Story
              </div>
              <h3 className="text-3xl font-bold mb-4">How {successStory.company} Boosted Lead Connect Rate by 190%</h3>
              <p className="text-pink-100 mb-4">
                <strong>Challenge:</strong> {successStory.challenge}
              </p>
              <p className="text-pink-100 mb-6">
                <strong>Our Solution:</strong> {successStory.solution}
              </p>
              <button className="flex items-center text-white hover:text-pink-200 transition-colors">
                Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Results Achieved:</h4>
              <div className="space-y-4">
                {successStory.results.map((result, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-pink-100">{result.metric}</span>
                    <div className="text-right">
                      <div className="text-sm text-pink-200 line-through">{result.before}</div>
                      <div className="font-bold text-white">{result.after}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Voice AI Features Showcase */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Advanced Voice AI Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceAIFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center p-6 bg-white border border-slate-200 rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all">
                  <IconComponent className="w-8 h-8 text-pink-500 mr-4" />
                  <span className="font-medium text-slate-900">{feature.feature}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Overview */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">Our Voice AI Implementation Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Script Development", description: "Create conversation flows tailored to your business", icon: Bot },
              { step: "02", title: "Voice Training", description: "Train AI with your brand voice and tone", icon: Mic },
              { step: "03", title: "Integration Setup", description: "Connect with your CRM and phone systems", icon: Settings },
              { step: "04", title: "Launch & Optimize", description: "Deploy and continuously improve performance", icon: Zap }
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="relative">
                  <div className="w-16 h-16 bg-pink-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <IconComponent className="w-8 h-8 text-pink-500 mx-auto mb-4" />
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
        <div className="text-center bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Deploy Voice AI?</h3>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Never miss another lead. Get your Voice AI calling bot up and running in just 2-3 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-pink-50 transition-all flex items-center justify-center">
              <PhoneCall className="w-5 h-5 mr-2" />
              Hear Live Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-pink-600 transition-all flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book Strategy Call
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-pink-200">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Free demo call
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Custom solution design
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Same-day quote
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAISection;