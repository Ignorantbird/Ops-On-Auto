// src/components/CRMAuditForm.tsx - NEW COMPONENT
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Target, TrendingUp, Users, Clock, Calendar, Send, Database, Settings } from "lucide-react";

const auditFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  role: z.string().min(1, "Role is required"),
  currentCRM: z.string().min(1, "Please specify your current CRM"),
  teamSize: z.string().min(1, "Team size is required"),
  challenge: z.string().min(10, "Please describe your main CRM challenge"),
  preferredTime: z.string().min(1, "Please specify your preferred time"),
  consent: z.boolean().refine(val => val === true, "You must agree to the privacy policy")
});

type AuditFormData = z.infer<typeof auditFormSchema>;

const CRMAuditForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AuditFormData>({
    resolver: zodResolver(auditFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      currentCRM: "",
      teamSize: "",
      challenge: "",
      preferredTime: "",
      consent: false
    }
  });

  const onSubmit = async (data: AuditFormData) => {
    console.log('=== CRM AUDIT FORM SUBMISSION ===');
    console.log('Form Data:', data);
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("CRM Audit Request submitted:", data);
      
      toast.success("CRM Audit Request Submitted!", {
        description: "We'll contact you within 24 hours to schedule your free CRM audit and discuss optimization opportunities."
      });
      
      form.reset();
      
      // Track the submission
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'crm_audit_request', {
          event_category: 'lead_generation',
          event_label: 'crm_audit_form'
        });
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Submission failed. Please try again or email info@opsonauto.com directly.");
    } finally {
      setIsSubmitting(false);
      console.log('=== CRM AUDIT FORM SUBMISSION COMPLETE ===');
    }
  };

  const auditBenefits = [
    {
      icon: Target,
      title: "Identify CRM Gaps",
      description: "Pinpoint exactly what's slowing down your sales process"
    },
    {
      icon: TrendingUp,
      title: "Sales ROI Analysis",
      description: "Calculate potential revenue increase with better CRM usage"
    },
    {
      icon: Users,
      title: "Team Efficiency Plan",
      description: "Custom strategy to improve your team's CRM adoption"
    },
    {
      icon: Clock,
      title: "Quick Implementation",
      description: "2-week CRM optimization timeline guaranteed"
    }
  ];

  return (
    <section id="crm-audit-form" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Book Your Free 
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"> CRM Audit</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get a personalized analysis of your CRM setup and discover automation opportunities that could increase your sales by 30%.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {auditBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Schedule Your CRM Audit</h3>
                    <p className="text-slate-600">Get expert analysis and custom recommendations</p>
                  </div>
                </div>
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
                                className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
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
                                className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
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
                                className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white"
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
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white">
                                  <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="founder">Founder/CEO</SelectItem>
                                <SelectItem value="sales-manager">Sales Manager</SelectItem>
                                <SelectItem value="sales-director">Sales Director</SelectItem>
                                <SelectItem value="ops-manager">Operations Manager</SelectItem>
                                <SelectItem value="marketing">Marketing Manager</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="currentCRM"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">Current CRM *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white">
                                  <SelectValue placeholder="Select your CRM" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="hubspot">HubSpot</SelectItem>
                                <SelectItem value="salesforce">Salesforce</SelectItem>
                                <SelectItem value="pipedrive">Pipedrive</SelectItem>
                                <SelectItem value="zoho">Zoho CRM</SelectItem>
                                <SelectItem value="freshsales">Freshsales</SelectItem>
                                <SelectItem value="monday">Monday.com</SelectItem>
                                <SelectItem value="excel">Excel/Spreadsheets</SelectItem>
                                <SelectItem value="none">No CRM</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="teamSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">Sales Team Size *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white">
                                  <SelectValue placeholder="Select team size" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1-5">1-5 people</SelectItem>
                                <SelectItem value="6-15">6-15 people</SelectItem>
                                <SelectItem value="16-50">16-50 people</SelectItem>
                                <SelectItem value="50+">50+ people</SelectItem>
                              </SelectContent>
                            </Select>
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
                          <FormLabel className="text-slate-700 font-medium">Main CRM Challenge *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your biggest CRM challenges (e.g., low adoption, poor data quality, manual processes, reporting issues)"
                              className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white min-h-[100px]"
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
                          <FormLabel className="text-slate-700 font-medium">Preferred Audit Time *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 bg-white">
                                <SelectValue placeholder="When would you like your audit?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="this-week">This week</SelectItem>
                              <SelectItem value="next-week">Next week</SelectItem>
                              <SelectItem value="this-month">This month</SelectItem>
                              <SelectItem value="flexible">I'm flexible</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="border-slate-300"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-slate-600">
                              I agree to the <span className="text-blue-600 underline cursor-pointer">privacy policy</span> and terms of service. *
                            </FormLabel>
                            <span className="text-slate-500 block mt-1">We respect your privacy and will never spam you.</span>
                          </div>
                        </FormItem>
                      )}
                    />

                    
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting || !form.watch('consent')}
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 sm:py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        {isSubmitting ? "Scheduling..." : "Schedule Free CRM Audit"}
                      </Button>
                      
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 py-4 sm:py-6 text-base sm:text-lg transition-all duration-200"
                        onClick={() => window.open('https://outlook.office.com/bookwithme/user/dbacc901ee0f46f6b263cb42d71d72fd@OpsOnAuto.onmicrosoft.com?anonymous&ismsaljsauthenabled&ep=plink', '_blank')}
                      >
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Book Direct Call
                      </Button>
                    </div>
                  </form>
                </Form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
                    🔒 Your data is secure with us. We're GDPR compliant and never share your information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Audit Process Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-blue-600" />
                What's Included in Your Free CRM Audit
              </h3>
              
              <div className="space-y-4">
                {[
                  "Complete CRM setup review and optimization recommendations",
                  "Lead scoring system analysis and improvement plan",
                  "Sales pipeline assessment and conversion optimization",
                  "Automation opportunities identification",
                  "Team training recommendations",
                  "Custom CRM automation roadmap (2-week implementation)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">🚀 Expected Results</h3>
              <div className="space-y-3 text-blue-100">
                <div className="flex justify-between">
                  <span>Sales Process Speed:</span>
                  <span className="font-bold text-white">40% faster</span>
                </div>
                <div className="flex justify-between">
                  <span>Lead Conversion Rate:</span>
                  <span className="font-bold text-white">+30% increase</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Saved Weekly:</span>
                  <span className="font-bold text-white">15+ hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Implementation Time:</span>
                  <span className="font-bold text-white">2 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMAuditForm;