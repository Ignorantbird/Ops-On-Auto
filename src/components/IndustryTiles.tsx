
// 1. FIXED IndustryTiles.tsx - Remove yellow buttons and fix character encoding
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  User, 
  Rocket, 
  Target, 
  Home, 
  ShoppingCart, 
  Building2, 
  Shield 
} from "lucide-react";

const industries = [
  {
    icon: User,
    title: "Consultants & Agencies",
    description: "Streamline client onboarding, project tracking, and reporting so you can focus on delivering results — not chasing admin work.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: Rocket,
    title: "Startups & SaaS",
    description: "Automate CRM updates, growth tracking, and investor reporting to scale faster with leaner teams.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Target,
    title: "PPC & Lead Gen Agencies",
    description: "Capture leads instantly, generate campaign reports automatically, and maximize your ad spend ROI.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "AI-driven lead calls, instant scheduling, and automated follow-ups to close deals faster.",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Automate inventory syncing, order tracking, and personalized customer communication.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Building2,
    title: "SMB Services",
    description: "Reduce manual admin, automate client updates, and improve service delivery efficiency.",
    gradient: "from-slate-600 to-slate-700"
  },
  {
    icon: Shield,
    title: "Healthcare & Financial Services",
    description: "Secure, compliant automations for sensitive data and high-stakes workflows.",
    gradient: "from-teal-500 to-green-600"
  }
];

export const IndustryTiles = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At OpsOnAuto, we design AI-driven automation systems that adapt to any business model. Whether you run a lean startup, manage a high-volume agency, or oversee enterprise operations, our solutions integrate with your tools, optimize your workflows, and deliver measurable results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-slate-200 bg-white hover:border-blue-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-slate-600 leading-relaxed mb-6">
                    {industry.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-blue-600 border-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
                  >
                    View Playbook
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
