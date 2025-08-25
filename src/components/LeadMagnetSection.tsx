// src/components/LeadMagnetSection.tsx - COMPLETELY REDESIGNED TO MATCH DESIGN SYSTEM
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle, Download, Gift, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  email: z.string().email("Please enter a valid email address"),
});

const LeadMagnetSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Thanks! Check your email for the download link.");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const benefits = [
    "Task identification workflows",
    "Tool selection framework", 
    "Cost calculation guide",
    "ROI tracking templates"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-blue-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
          {/* Header with gradient */}
          <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-6 right-6">
              <Sparkles className="w-8 h-8 text-white/70 animate-pulse" />
            </div>
            <div className="absolute top-6 left-6">
              <Gift className="w-8 h-8 text-white/70" />
            </div>
            
            {/* Large icon */}
            <div className="text-7xl mb-6 animate-bounce">🎯</div>
            
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Download Our Free Workflow Automation Checklist
            </CardTitle>
            <CardDescription className="text-xl text-orange-50 leading-relaxed max-w-3xl mx-auto">
              A practical step-by-step guide to spotting repetitive tasks, choosing the right tools, and building efficient workflows that save time and reduce errors.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Benefits list */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                  <span className="text-3xl mr-3">📋</span>
                  What's Included:
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 transform hover:scale-105 transition-transform duration-200"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Form */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl border-2 border-orange-100">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="text-center mb-8">
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">
                        Get Your Free Copy
                      </h4>
                      <p className="text-slate-600">
                        Join 2,500+ automation enthusiasts
                      </p>
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">First Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your first name" 
                              {...field}
                              className="h-14 text-lg border-2 border-slate-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl bg-white"
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
                          <FormLabel className="text-slate-700 font-semibold">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Enter your email address" 
                              {...field}
                              className="h-14 text-lg border-2 border-slate-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                    >
                      <Download className="mr-3 h-6 w-6" />
                      Download Free Checklist
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-sm text-slate-500">
                        ✅ No spam • ✅ Unsubscribe anytime • ✅ Free forever
                      </p>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadMagnetSection;