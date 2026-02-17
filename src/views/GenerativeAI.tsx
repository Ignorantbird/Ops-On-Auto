'use client';

import GenerativeAIHero from "@/components/GenerativeAIHero";
import GenerativeAIServices from "@/components/GenerativeAIServices";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, TrendingUp, Target, Brain } from "lucide-react";
import CTA_ACTIONS from "@/lib/BookingLinks";

const GenerativeAI = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <GenerativeAIHero />

      {/* Why Choose Generative AI */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Generative AI?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transform your content creation and data processing with AI that learns, adapts, and scales with your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              {
                icon: Clock,
                title: "Save 15+ Hours Weekly",
                description: "Automate content creation and data processing tasks that typically consume your team's valuable time"
              },
              {
                icon: TrendingUp,
                title: "Increase Efficiency by 300%",
                description: "Generate content and process data at scales impossible with manual workflows"
              },
              {
                icon: Target,
                title: "95% Task Accuracy",
                description: "AI-powered precision ensures consistent, high-quality outputs across all generated content"
              },
              {
                icon: Brain,
                title: "Real-Time Insights",
                description: "Transform raw data into actionable business intelligence with automated analysis"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Professional Services */}
      <GenerativeAIServices />

      {/* Seamless Integrations */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI solutions integrate seamlessly with your existing workflow and tools
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-8 max-w-4xl mx-auto text-center">
            {[
              { name: "HubSpot", logo: "🎯" },
              { name: "Salesforce", logo: "☁️" },
              { name: "Google Drive", logo: "📁" },
              { name: "Slack", logo: "💬" },
              { name: "Zapier", logo: "⚡" },
              { name: "Airtable", logo: "📊" }
            ].map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{integration.logo}</div>
                <div className="font-semibold text-slate-900">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Proven Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Step 1: Discover your content needs and data requirements. Step 2: Design custom AI solutions that match your brand voice. Step 3: Deploy AI systems and train them with your specific requirements. Step 4: Launch and continuously optimize for better performance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "1", title: "Discovery", description: "Understand your content needs, brand voice, and data requirements", icon: "🔍" },
              { number: "2", title: "Design", description: "Create custom AI solutions that integrate with your existing systems", icon: "🎨" },
              { number: "3", title: "Deploy", description: "Implement AI systems and train them with your specific requirements", icon: "🚀" },
              { number: "4", title: "Optimize", description: "Launch and continuously improve performance with ongoing support", icon: "📈" }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="text-4xl font-bold text-orange-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Scale Your Creative Output?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a free consultation and discover how AI can transform your content creation and data processing workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button
                onClick={() => CTA_ACTIONS.BOOK_STRATEGY_SESSION()}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Free Demo
              </Button>
              <Button
                onClick={() => window.location.href = '/contact'}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Talk to Expert
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              {[
                "No commitment — free initial consultation",
                "30-day money back guarantee",
                "ROI guarantee"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenerativeAI;
