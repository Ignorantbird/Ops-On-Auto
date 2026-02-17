'use client';

// src/components/GenerativeAIHero.tsx
import { Button } from "@/components/ui/button";
import CTA_ACTIONS from "@/lib/BookingLinks";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const GenerativeAIHero = () => {
  const router = useRouter();

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Content Factory That <span className="text-orange-400">Scales Your Creativity</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Deploy custom AI that creates brand-consistent content, proposals, and creative materials at scale. From blog posts to sales materials - your AI content team never stops creating.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <div 
                onClick={() => CTA_ACTIONS.BOOK_STRATEGY_SESSION()}
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer rounded-lg text-center"
                >
                Book 30-Min Strategy Call
            </div>
            <div 
              onClick={() => window.location.href = '/pricing'}
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer rounded-lg text-center"
            >
              View Pricing Plans
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-white/80 text-sm">
            {[
              "Brand-consistent content",
              "Scale to 1000+ pieces", 
              "60% cost reduction",
              "24/7 content creation"
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <CheckCircle className="w-6 h-6 text-orange-400 mb-2" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenerativeAIHero;