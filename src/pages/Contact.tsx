// src/pages/Contact.tsx - UPDATED WITH LOCATION SECTION
import Navigation from "@/components/Navigation";
import ContactHero from "@/components/ContactHero";
import ContactMethods from "@/components/ContactMethods";
import ContactForm from "@/components/ContactForm";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact OpsOnAuto - Get Your Free Automation Consultation"
        description="Contact OpsOnAuto for AI automation solutions. Free consultation, custom quotes, and expert support. Based in India, serving clients worldwide."
        keywords="contact OpsOnAuto, AI automation consultation, business automation support, workflow optimization contact"
        canonical="/contact"
      />
      <Navigation />
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      
      {/* Location Section - ENHANCED */}
      <div className="py-12 bg-gradient-to-r from-orange-50 via-orange-25 to-orange-50">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Global Reach, Local Expertise
            </h3>
            <p className="text-slate-700 mb-4">
              <strong>Based in India</strong>, serving clients worldwide with 24/7 support and seamless automation solutions.
            </p>
            <div className="flex justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>India Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Global Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Contact;
