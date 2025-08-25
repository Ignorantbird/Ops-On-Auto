import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, CheckCircle } from "lucide-react";

const FinalCTA = () => {
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
            {/* Keep the orange color for primary CTA */}
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Demo
            </Button>
            {/* Secondary button with white/outline style */}
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
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
                Setup in 2 weeks
              </span>
            </div>
            
            <div className="flex items-center gap-3 group">
              <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium group-hover:text-white transition-colors duration-200">
                Proven ROI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;