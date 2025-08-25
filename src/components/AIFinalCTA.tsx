// src/components/AIFinalCTA.tsx - UPDATED
import { PrimaryCTA, SecondaryCTA, FloatingIcons } from "@/components/cta/StandardizedCTA";
import { CheckCircle } from "lucide-react";

const AIFinalCTA = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-float delay-1000 blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float delay-500 blur-md"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Icons */}
          <FloatingIcons 
            icons={['bot', 'message', 'calendar']} 
            className="mb-8" 
          />

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to Put <span className="text-orange-400">AI to Work</span> for You?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's build an AI solution that sounds human, acts fast, and delivers measurable ROI. Transform your business operations starting today.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {['No setup fees', '7-day implementation', 'Proven ROI', 'Custom AI training'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/90 text-sm">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <PrimaryCTA 
              label="Book AI Demo"
              icon="bot"
              animate={true}
              onClick={() => document.getElementById('workflow-audit-form')?.scrollIntoView({ behavior: 'smooth' })}
            />
            
            <SecondaryCTA 
              label="Contact Us"
              icon="message"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.open('/contact', '_blank')}
            />
          </div>

          {/* Final assurance */}
          <div className="mt-12 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 max-w-2xl mx-auto">
            <p className="text-white/90">
              <strong className="text-white">Ready in 7 days:</strong> Your custom AI solution will be trained, tested, and ready to handle real conversations within one week of starting the project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFinalCTA;