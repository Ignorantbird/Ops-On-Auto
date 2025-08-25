// src/components/PrivacyHero.tsx - FIXED BACKGROUND AND DESIGN SYSTEM
import { Shield, Lock, CheckCircle } from "lucide-react";

const PrivacyHero = () => {
  return (
    <section className="relative min-h-[60vh] pt-20 pb-12 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-32 right-20 w-8 h-8 bg-white/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-orange-300/30 rounded-lg rotate-12"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-white/30 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Privacy icons */}
          <div className="flex justify-center mb-8 space-x-6">
            {[
              { icon: Shield, delay: "0ms" },
              { icon: Lock, delay: "200ms" },
              { icon: CheckCircle, delay: "400ms" }
            ].map(({ icon: Icon, delay }, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ animationDelay: delay }}
              >
                <div className="p-4 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl group-hover:scale-110 transition-all duration-300 hover:bg-white/20">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
              </div>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Privacy & Data{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
                Policy
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-80"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your privacy matters to us. Here's how we collect, use, and protect your information.
          </p>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
    </section>
  );
};

export default PrivacyHero;