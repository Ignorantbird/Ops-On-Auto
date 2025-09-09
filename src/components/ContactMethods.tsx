// STEP 1 FIXED: ContactMethods.tsx - Remove phone number, fix functionality
import { Mail, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactMethods = () => {
  // STEP 1 FIX: Handle WhatsApp without showing phone number
  const handleWhatsApp = () => {
    window.open('https://wa.me/918777671056?text=Hi%20OpsOnAuto,%20I%27m%20interested%20in%20learning%20more%20about%20your%20automation%20services.', '_blank');
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_contact', {
        event_category: 'communication',
        event_label: 'contact_page'
      });
    }
  };

  // STEP 1 FIX: Handle demo booking via Formspree
  const handleBookDemo = async () => {
    try {
      const response = await fetch('https://formspree.io/f/xvgblgdn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'contact_page_methods',
          message: 'User clicked "Schedule Now" from contact methods',
          page: '/contact',
          timestamp: new Date().toISOString(),
          action: 'book_demo_request'
        }),
      });

      if (response.ok) {
        toast.success("Demo request submitted! We'll contact you within 24 hours.");
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'book_demo_contact', {
            event_category: 'conversion',
            event_label: 'contact_methods_success'
          });
        }
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Demo request failed:', error);
      toast.error("Request failed. Please contact hello@opsonauto.com directly.");
    }
  };

  // STEP 1 FIX: Updated contactMethods - removed phone number display
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@opsonauto.com",
      description: "Send us a message anytime",
      action: () => {
        window.location.href = "mailto:hello@opsonauto.com?subject=Business%20Automation%20Inquiry";
      },
      actionLabel: "Contact",
      buttonColor: "border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400"
    },
    {
      icon: MessageCircle, // Changed from Phone to MessageCircle
      title: "WhatsApp", // STEP 1 FIX: Removed "Phone/" - just "WhatsApp"
      value: "Send us a message", // STEP 1 FIX: No phone number shown
      description: "Chat with us directly", // STEP 1 FIX: Updated description
      action: handleWhatsApp,
      actionLabel: "WhatsApp", // STEP 1 FIX: Updated button label
      buttonColor: "border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400"
    },
    {
      icon: Calendar,
      title: "Free Workflow Audit",
      value: "Book 30-min consultation",
      description: "Schedule your free assessment",
      action: handleBookDemo, // STEP 1 FIX: Use Formspree function
      actionLabel: "Schedule Now",
      buttonColor: "border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose the best way to reach us. We respond to all inquiries within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 text-center group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full mb-6 group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300">
                  <Icon className="h-8 w-8 text-orange-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {method.title}
                </h3>
                
                <p className="text-lg font-semibold text-orange-600 mb-2">
                  {method.value}
                </p>
                
                <p className="text-slate-600 mb-6">
                  {method.description}
                </p>

                {/* STEP 1 FIX: Updated Button with proper onClick handlers */}
                <Button 
                  variant="outline" 
                  className={`w-full transition-colors ${method.buttonColor}`}
                  onClick={method.action}
                >
                  {method.actionLabel}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-slate-600">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="font-medium">Free consultation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="font-medium">No obligation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="font-medium">Global service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;