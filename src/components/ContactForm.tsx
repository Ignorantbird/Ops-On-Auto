// src/components/ContactForm.tsx - FIXED
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

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false
      });
      
    } catch (error) {
      toast.error("Something went wrong. Please try again or contact us directly.");
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
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700 font-medium">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  placeholder="Your full name"
                  className="border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-700 font-medium">Phone (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+91-XXXX-XXXXXX"
                className="border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-700 font-medium">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
                placeholder="Tell us about your project, current workflows, and how we can help..."
                className="min-h-[120px] border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white resize-none"
              />
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
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
                disabled={isSubmitting || !formData.consent}
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              <Button 
                type="button"
                variant="outline"
                className="flex-1 border-orange-300 text-orange-700 hover:bg-orange-50 py-6 text-lg"
                onClick={() => window.open('/workflow-audit', '_blank')}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
