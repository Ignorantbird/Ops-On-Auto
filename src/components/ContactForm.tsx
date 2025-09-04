// src/components/ContactForm.tsx - COMPLETE WITH FORMSPREE INTEGRATION
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Send, Calendar } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Please consent to storing your details to proceed.");
      return;
    }

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // FORMSPREE INTEGRATION - Replace YOUR_CONTACT_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mvgbvrqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'New Contact Form Submission - OpsOnAuto',
          _replyto: formData.email,
          source: 'opsonauto.com',
          timestamp: new Date().toISOString(),
          page: 'contact'
        }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Success handling
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      
      // Google Analytics tracking (if gtag is available)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form',
          value: 1
        });
      }
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false
      });
      
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error("Message failed to send. Please try again or email hello@opsonauto.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Send Us a 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Message</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and how we can help automate your workflows.
            We respond to all inquiries within 24 hours.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-slate-700 font-medium">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  placeholder="Your full name"
                  className="mt-2 border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-700 font-medium">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="mt-2 border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-slate-700 font-medium">Phone (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="mt-2 border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-slate-700 font-medium">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
                placeholder="Tell us about your project, current workflows, and how we can help automate your processes..."
                className="mt-2 min-h-[120px] border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white resize-none"
              />
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 mt-1"
              />
              <Label htmlFor="consent" className="text-sm leading-5 text-slate-700">
                I consent to OpsOnAuto storing my details to respond to my inquiry.
                <span className="text-slate-500 block mt-1">
                  We respect your privacy and will never spam you. Read our privacy policy.
                </span>
              </Label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                type="submit"
                disabled={isSubmitting || !formData.consent || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              <Button 
                type="button"
                variant="outline"
                className="flex-1 border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400 py-6 text-lg transition-all"
                onClick={() => window.open('/workflow-audit', '_blank')}
                disabled={isSubmitting}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Workflow Audit
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
              🔒 Your data is secure with us. We're GDPR compliant and never share your information with third parties.
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Response time: Within 24 hours | Emergency: hello@opsonauto.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
