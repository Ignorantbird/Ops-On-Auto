import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

const FinalAuditCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Automation Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book your free workflow audit today and discover how much time you can save with smart automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Audit
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-white/80">
            <p>✓ 30-minute consultation ✓ Custom automation plan ✓ No obligation ✓ Response within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalAuditCTA;