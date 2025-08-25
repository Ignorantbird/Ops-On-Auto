// src/components/ContactMethods.tsx - FIXED WITH WHATSAPP NUMBER
import { Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactMethods = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@opsonauto.com",
      description: "Send us a message anytime",
      action: "mailto:hello@opsonauto.com",
      actionLabel: "Contact"
    },
    {
      icon: Phone,
      title: "Phone/WhatsApp",
      value: "+91 8777 671 056",
      description: "Call or message us directly",
      action: "https://wa.me/918777671056",
      actionLabel: "WhatsApp"
    },
    {
      icon: Calendar,
      title: "Free Workflow Audit",
      value: "Book 30-min consultation",
      description: "Schedule your free assessment",
      action: "/workflow-audit",
      actionLabel: "Schedule Now"
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

                <Button 
                  variant="outline" 
                  className="w-full border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400 transition-colors"
                  onClick={() => {
                    if (method.action.startsWith('/')) {
                      window.location.href = method.action;
                    } else {
                      window.open(method.action, '_blank');
                    }
                  }}
                >
                  {method.actionLabel}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
