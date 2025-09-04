// src/components/WorkflowAuditForm.tsx - COMPLETE WITH FORMSPREE INTEGRATION
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Rocket, Clock, Users, Target, TrendingUp } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  role: z.string().min(1, "Role is required"),
  challenge: z.string().min(10, "Please describe your main workflow challenge"),
  preferredTime: z.string().min(1, "Please specify your preferred time"),
});

type FormData = z.infer<typeof formSchema>;

const WorkflowAuditForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      challenge: "",
      preferredTime: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // FORMSPREE INTEGRATION - Replace YOUR_AUDIT_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xvgbvrbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          role: data.role,
          challenge: data.challenge,
          preferredTime: data.preferredTime,
          _subject: 'New Workflow Audit Request - OpsOnAuto',
          _replyto: data.email,
          source: 'opsonauto.com',
          leadValue: 4997, // Your service value for tracking
          timestamp: new Date().toISOString(),
          page: 'workflow-audit',
          leadType: 'workflow_audit'
        }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Success handling
      toast.success("Audit Request Submitted!", {
        description: "We'll contact you within 24 hours to schedule your free workflow audit."
      });
      
      // Google Analytics conversion tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'conversion',
          event_label: 'workflow_audit',
          value: 4997,
          currency: 'USD'
        });
      }
      
      form.reset();
      
    } catch (error) {
      console.error('Audit form submission error:', error);
      toast.error("Submission failed. Please try again or email hello@opsonauto.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const auditBenefits = [
    {
      icon: Target,
      title: "Identify Bottlenecks",
      description: "Pinpoint exact areas slowing down your team"
    },
    {
      icon: TrendingUp,
      title: "ROI Analysis",
      description: "Calculate potential time and cost savings"
    },
    {
      icon: Users,
      title: "Custom Strategy",
      description: "Tailored automation plan for your business"
    },
    {
      icon: Clock,
      title: "Quick Implementation",
      description: "2-week delivery timeline guaranteed"
    }
  ];

  return (
    <section id="audit-form" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Book Your Free 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Workflow Audit</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get a personalized analysis of your current workflows and discover automation opportunities that could save you 20+ hours per week.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Benefits Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What You'll Get:</h3>
              <div className="space-y-4">
                {auditBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-orange-300 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                        <p className="text-slate-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-blue-900 mb-3">Audit Process:</h4>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>15-minute discovery call</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Workflow analysis & mapping</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Custom automation recommendations</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>ROI projections & timeline</li>
              </ul>
            </div>
          </div>

          {/* Form Section */}
          <Card className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
            
            <CardHeader className="text-center pb-6 pt-8">
              <CardTitle className="text-2xl font-bold text-slate-900">
                Schedule Your Free Audit
              </CardTitle>
              <p className="text-slate-600">
                Fill out the form below and we'll contact you within 24 hours.
              </p>
            </CardHeader>
            
            <CardContent className="p-8 pt-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium">Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              className="border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium">Email *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your@email.com" 
                              type="email"
                              className="border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium">Company *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your company name" 
                              className="border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium">Your Role *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g. CEO, Operations Manager" 
                              className="border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="challenge"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Main Workflow Challenge *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your biggest workflow pain point or repetitive task that's consuming too much time..."
                            className="min-h-[100px] border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Preferred Call Time *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g. Weekday mornings, Tuesday afternoons, etc." 
                            className="border-slate-300 focus:border-orange-500 focus:ring-orange-500 bg-white"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Submitting..." : "Book My Free Audit"}
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-slate-500">
                      🔒 Your information is secure and will never be shared with third parties.
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Response time: Within 24 hours | Value: $500 consultation - FREE
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkflowAuditForm;