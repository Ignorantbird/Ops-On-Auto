'use client';

// src/components/FinalCTA.tsx - FIXED WITH WORKING BUTTON LINKS
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const FinalCTA = () => {
  const router = useRouter();

  // Handler functions for button clicks
  const handleBookDemo = () => {
    router.push('/workflow-audit');
  };

  const handleContactUs = () => {
    router.push('/contact');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of businesses that have already automated their workflows and saved countless hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* FIXED: Primary CTA with proper onClick handler */}
            <Button 
              size="lg" 
              onClick={handleBookDemo}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Demo
            </Button>
            
            {/* FIXED: Secondary button with proper onClick handler and better contrast */}
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleContactUs}
              className="bg-white/95 border-2 border-white text-blue-600 hover:bg-white hover:text-blue-700 text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
          
          {/* Enhanced Trust Indicators with Proper Icons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                No setup fees
              </span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                30-day guarantee
              </span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                Setup in 2 weeks or less
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;