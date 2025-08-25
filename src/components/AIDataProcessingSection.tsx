import { useState } from "react";
import { Brain, Database, Zap, TrendingUp, MessageCircle, CheckCircle, ArrowRight, Play, Calendar, Phone, Settings, Filter, Mail, FileText, BarChart3, Target } from "lucide-react";
import { PrimaryCTA } from "./cta/StandardizedCTA";

const AIDataProcessingSection = () => {
  const [activeTab, setActiveTab] = useState('call-analysis');

  const aiProcessingBenefits = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Extract meaningful patterns and insights from unstructured data automatically"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process and analyze data as it comes in, not days or weeks later"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Identify trends and predict outcomes based on historical data patterns"
    },
    {
      icon: Target,
      title: "Actionable Recommendations",
      description: "Get specific, actionable recommendations, not just raw data dumps"
    }
  ];

  const aiTechnologies = [
    { name: "Speech-to-Text AI", logo: "🎤", description: "Convert audio to accurate text transcriptions" },
    { name: "Natural Language Processing", logo: "🧠", description: "Understand and analyze text content intelligently" },
    { name: "Sentiment Analysis", logo: "😊", description: "Detect emotions and sentiment in communications" },
    { name: "Pattern Recognition", logo: "🔍", description: "Identify trends and patterns in large datasets" },
    { name: "Predictive Modeling", logo: "📈", description: "Forecast outcomes based on historical data" },
    { name: "Automated Reporting", logo: "📊", description: "Generate intelligent reports automatically" }
  ];

  const processingTabs = {
    'call-analysis': {
      title: "AI Call Analysis Workflows",
      features: [
        "Automatic call recording and transcription",
        "Sentiment analysis and emotion detection",
        "Key topic extraction and categorization",
        "Speaker identification and talk-time analysis",
        "Compliance and quality scoring",
        "Automated follow-up recommendations"
      ],
      timeline: "2-3 weeks",
      price: "₹45,000 - ₹65,000"
    },
    'content-intelligence': {
      title: "Content Intelligence Processing",
      features: [
        "Document analysis and information extraction",
        "Multi-language content processing",
        "Automated content categorization",
        "Key insights and summary generation",
        "Content performance prediction",
        "SEO and engagement optimization suggestions"
      ],
      timeline: "2-4 weeks",
      price: "₹40,000 - ₹60,000"
    },
    'customer-insights': {
      title: "Customer Behavior Analysis",
      features: [
        "Customer interaction pattern analysis",
        "Journey mapping and bottleneck identification",
        "Churn prediction and retention insights",
        "Personalization recommendations",
        "Lifetime value calculation and forecasting",
        "Automated customer segmentation"
      ],
      timeline: "3-4 weeks",
      price: "₹50,000 - ₹80,000"
    }
  };

  // AI Workflow Steps
  const aiWorkflowSteps = [
    {
      step: "01",
      title: "Data Capture",
      description: "Collect data from multiple sources - calls, emails, forms, interactions",
      icon: Database,
      details: ["Multi-source integration", "Real-time data streaming", "Secure data handling", "Format standardization"]
    },
    {
      step: "02", 
      title: "AI Transcription",
      description: "Convert audio, video, and unstructured data into analyzable text",
      icon: MessageCircle,
      details: ["High-accuracy transcription", "Multi-language support", "Speaker identification", "Timestamp precision"]
    },
    {
      step: "03",
      title: "Intelligent Analysis", 
      description: "AI processes and extracts meaningful insights from your data",
      icon: Brain,
      details: ["Sentiment analysis", "Topic extraction", "Pattern recognition", "Anomaly detection"]
    },
    {
      step: "04",
      title: "Smart Reporting",
      description: "Generate actionable reports with recommendations and next steps",
      icon: FileText,
      details: ["Automated insights", "Visual dashboards", "Trend identification", "Action recommendations"]
    },
    {
      step: "05",
      title: "Database Storage",
      description: "Store processed insights for historical analysis and trend tracking",
      icon: BarChart3,
      details: ["Structured data storage", "Historical trend analysis", "Performance tracking", "Future predictions"]
    }
  ];

  // Success story data
  const successStory = {
    company: "Customer Service Agency",
    challenge: "Analyzing 500+ customer calls weekly took 20 hours of manual work and often missed critical insights",
    solution: "AI workflow that transcribes calls, analyzes sentiment, extracts key issues, and generates actionable reports automatically",
    results: [
      { metric: "Analysis Time", before: "20h/week", after: "30min/week" },
      { metric: "Insight Accuracy", before: "70%", after: "94%" },
      { metric: "Issue Detection", before: "Manual", after: "Real-time" },
      { metric: "Customer Satisfaction", before: "6.8/10", after: "8.9/10" }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-200 text-purple-700 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI Data Processing & Insights
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Transform Raw Data into <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">Intelligent Insights</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stop drowning in data. Our AI-powered workflows automatically process, analyze, and extract actionable insights from your calls, content, and customer interactions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <PrimaryCTA 
              label="Get AI Processing Demo" 
              icon="bot"
              className="text-lg px-8 py-4"
            />
            <button className="flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-600 transition-all duration-200">
              <Play className="w-5 h-5 mr-2" />
              See AI in Action (3 min)
            </button>
          </div>
        </div>

        {/* AI Workflow Steps */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our AI Data Processing Workflow
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From raw data capture to intelligent insights - here's how our AI transforms your information into competitive advantages.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {aiWorkflowSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>

                  {/* Content Card */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300 h-full">
                    <IconComponent className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-slate-600 text-sm text-center mb-4">{step.description}</p>
                    
                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-slate-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow for larger screens */}
                  {index < aiWorkflowSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block w-6 h-6 text-purple-400 absolute top-8 -right-4 transform" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {aiProcessingBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* AI Technologies */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-12">
            AI Technologies We Use
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aiTechnologies.map((tech, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-xl hover:bg-purple-50 hover:border-purple-200 border border-slate-200 transition-all group">
                <div className="text-3xl mb-2">{tech.logo}</div>
                <h4 className="font-semibold text-slate-900 text-sm mb-1">{tech.name}</h4>
                <p className="text-xs text-slate-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tabs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Choose Your AI Processing Solution
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(processingTabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-purple-100 hover:text-purple-700'
                }`}
              >
                {processingTabs[tab as keyof typeof processingTabs].title}
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-6">
                  {processingTabs[activeTab as keyof typeof processingTabs].title}
                </h4>
                <ul className="space-y-4">
                  {processingTabs[activeTab as keyof typeof processingTabs].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {processingTabs[activeTab as keyof typeof processingTabs].price}
                  </div>
                  <div className="text-slate-600">
                    Timeline: {processingTabs[activeTab as keyof typeof processingTabs].timeline}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-purple-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">Custom AI model training</span>
                  </div>
                  <div className="flex items-center text-purple-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">60-day optimization support</span>
                  </div>
                  <div className="flex items-center text-purple-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm">AI accuracy guarantees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-12 text-white mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">AI Success Story: {successStory.company}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-purple-100">The Challenge:</h4>
                  <p className="text-purple-50">{successStory.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-purple-100">Our AI Solution:</h4>
                  <p className="text-purple-50">{successStory.solution}</p>
                </div>
              </div>
              <button className="mt-6 flex items-center text-white hover:text-purple-200 transition-colors">
                Read Full AI Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">AI-Powered Results:</h4>
              <div className="space-y-4">
                {successStory.results.map((result, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-purple-100">{result.metric}</span>
                    <div className="text-right">
                      <div className="text-sm text-purple-200 line-through">{result.before}</div>
                      <div className="font-bold text-white">{result.after}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Turn Data into Intelligence?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Stop manually analyzing data. Let AI extract insights, predict trends, and recommend actions automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition-all flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Book AI Demo Call
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-XXXXX-XXXXX
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-purple-200">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Free AI assessment
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Custom solution design
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              24/7 AI monitoring
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDataProcessingSection;