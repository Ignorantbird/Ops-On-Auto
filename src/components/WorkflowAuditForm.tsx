// src/components/WorkflowAuditForm.tsx - FIXED
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Rocket } from "lucide-react";
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    
    toast.success("Audit Request Submitted!", {
      description: "We'll contact you within 24 hours to schedule your free workflow audit."
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="audit-form" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <Card className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
          
          <CardHeader className="text-center pb-8 pt-12">
            <CardTitle className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Book Your Free 
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Workflow Audit</span>
            </CardTitle>
            <p className="text-lg text-slate-600">
              Fill out the form below and we'll schedule your personalized consultation.
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
                            className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
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
                            className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
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
                        <FormLabel className="text-slate-700 font-medium">Company Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company" 
                            className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
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
                        <FormLabel className="text-slate-700 font-medium">Role *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your role/title" 
                            className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
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
                          placeholder="Describe your biggest workflow pain point or repetitive task..."
                          className="h-24 border-slate-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
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
                      <FormLabel className="text-slate-700 font-medium">Preferred Date & Time *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., Next week mornings, specific date/time preference..." 
                          className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg py-6 h-auto shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <Calendar className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Rocket className="w-5 h-5 mr-2" />
                        🔥 Book My Free Audit
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Form>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                🔒 Your data is secure with us. We're GDPR compliant and never share your information.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WorkflowAuditForm;
