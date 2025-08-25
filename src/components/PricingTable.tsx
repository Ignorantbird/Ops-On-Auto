import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp, Handshake, Check } from "lucide-react";

const PricingTable = () => {
  const packages = [
    {
      icon: Rocket,
      name: "Starter Plan",
      subtitle: "Perfect for First-Time Automation",
      audience: "Small teams, consultants, and startups ready to remove their first big bottleneck.",
      price: "₹25,000 — ₹45,000",
      priceNote: "(one-time)",
      features: [
        "AI automation setup (1—2 workflows)",
        "CRM cleanup & basic optimization",
        "Automated reporting for one process",
        "Email & chat support for 30 days post-launch"
      ],
      ctaText: "Book Free Audit",
      popular: false
    },
    {
      icon: TrendingUp,
      name: "Growth Plan",
      subtitle: "Scale Your Automation Impact",
      audience: "Businesses ready to automate multiple workflows and integrate tools.",
      price: "₹65,000 — ₹95,000",
      priceNote: "(one-time or monthly retainer)",
      features: [
        "CRM automation + advanced lead routing",
        "Reporting automation across multiple KPIs",
        "Up to 5 automated workflows across departments",
        "Tool integration (CRM, marketing, PPC tracking, analytics)",
        "60 days of post-launch optimization support"
      ],
      ctaText: "Book Free Audit",
      popular: true
    },
    {
      icon: Handshake,
      name: "Enterprise / Custom Plan",
      subtitle: "Full-Scale Intelligent Automation",
      audience: "Businesses needing end-to-end automation with advanced AI capabilities.",
      price: "Custom Quote",
      priceNote: "",
      features: [
        "Agentic AI implementation (Voice AI bots, LLM-driven workflows)",
        "Multi-department workflow automation",
        "Programmatic SEO for organic growth",
        "Custom integrations",
        "Dedicated account manager & ongoing support"
      ],
      ctaText: "Book Free Audit",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Packages
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the perfect automation package for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            
            return (
              <Card
                key={index}
                className={`group relative bg-white border-2 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  pkg.popular ? 'border-blue-500 ring-2 ring-blue-200 scale-105' : 'border-slate-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-lg font-semibold text-blue-600 mb-3">
                    {pkg.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    {pkg.audience}
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900">
                      {pkg.price}
                    </div>
                    {pkg.priceNote && (
                      <div className="text-sm text-slate-600">
                        {pkg.priceNote}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-slate-900">What's Included:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    {pkg.ctaText}
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

export default PricingTable;