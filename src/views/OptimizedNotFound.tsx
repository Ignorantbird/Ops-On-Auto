'use client';

import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, MessageCircle, Calendar, Lightbulb, Bot, Zap } from "lucide-react";
import Link from "next/link";
import { PrimaryCTA, SecondaryCTA } from "@/components/cta/StandardizedCTA";

const OptimizedNotFound = () => {
  const helpfulLinks = [
    {
      title: "Free Business Audit",
      description: "Let us analyze your workflows for automation opportunities",
      icon: Lightbulb,
      link: "/workflow-audit",
      primary: true
    },
    {
      title: "AI Solutions",
      description: "Explore our Agentic AI and automation services",
      icon: Bot,
      link: "/agentic-ai"
    },
    {
      title: "Pricing",
      description: "See how much you can save with our automation",
      icon: Zap,
      link: "/pricing"
    },
    {
      title: "Contact Us",
      description: "Speak directly with our automation experts",
      icon: MessageCircle,
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section with Strong Value Prop */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-8xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-4">
                404
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Page Not Found, But Your
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Growth Opportunity</span> Is Right Here!
              </h1>
            </div>

            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              While that page doesn't exist, <strong>your business automation journey can start right now.</strong>
              Join 200+ entrepreneurs who've saved 20+ hours weekly with our AI solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <PrimaryCTA
                label="Book Free Audit Call"
                icon="calendar"
                className="transform hover:scale-105 transition-all duration-300 shadow-xl text-lg px-8 py-4"
              />
              <SecondaryCTA
                label="Browse All Services"
                icon="arrow"
                className="border-2 border-slate-300 hover:border-orange-500 text-slate-700 hover:text-orange-600 text-lg px-8 py-4"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">2-Week Delivery</h3>
                <p className="text-slate-600">Get your automation up and running faster than traditional agencies</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Bot className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">50-80% Cost Savings</h3>
                <p className="text-slate-600">AI does the work at a fraction of human labor costs</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Lightbulb className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">24/7 Availability</h3>
                <p className="text-slate-600">Your AI never calls in sick or takes vacations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Since You're Here, Explore These Popular Pages:
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {helpfulLinks.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className={`group block p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      item.primary
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500 hover:shadow-orange-200'
                        : 'bg-white border-slate-200 hover:border-orange-300 hover:shadow-slate-200'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        item.primary
                          ? 'bg-white/20 group-hover:bg-white/30'
                          : 'bg-orange-100 group-hover:bg-orange-200'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                          item.primary ? 'text-white' : 'text-orange-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-2 ${
                          item.primary ? 'text-white' : 'text-slate-900'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`${
                          item.primary ? 'text-white/90' : 'text-slate-600'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                      <ArrowLeft className={`w-5 h-5 rotate-180 transition-transform duration-300 group-hover:translate-x-1 ${
                        item.primary ? 'text-white' : 'text-slate-400'
                      }`} />
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 font-medium transition-colors duration-200">
                <Home className="w-4 h-4" />
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our automation experts are standing by to help you find the right solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 text-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Live Chat Support
            </Button>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 font-semibold px-8 py-3 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OptimizedNotFound;
