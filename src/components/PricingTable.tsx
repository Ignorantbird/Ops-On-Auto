// src/components/PricingTable.tsx - PURPLE COW PRICING TRANSFORMATION
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, TrendingUp, Handshake, Check } from "lucide-react";

const PricingTable = () => {
  const packages = [
    {
      icon: Rocket,
      name: "Automation Accelerator",
      subtitle: "Enterprise Automation in 2 Weeks",
      audience: "Growing startups, small agencies, emerging SMBs ready for rapid transformation.",
      price: "$4,997",
      priceNote: "(one-time setup)",
      features: [
        "Custom workflow automation setup",
        "CRM integration & lead management", 
        "Automated reporting dashboards",
        "Email & communication automation",
        "2-week rapid implementation",
        "30-day optimization & training"
      ],
      ctaText: "Get 2-Week Setup",
      popular: false,
      timeline: "2 weeks",
      roi: "5-8x ROI in first 90 days"
    },
    {
      icon: TrendingUp,
      name: "Growth Engine Pro",
      subtitle: "Complete AI Transformation at Startup Speed",
      audience: "Scaling businesses, established agencies, growing e-commerce companies.",
      price: "$12,997",
      priceNote: "(complete transformation)",
      features: [
        "Advanced AI workflow automation",
        "Multi-platform integration (CRM, email, social)",
        "Predictive analytics & insights", 
        "Voice AI & chatbot implementation",
        "Custom dashboard & KPI tracking",
        "60-day optimization with monthly strategy calls"
      ],
      ctaText: "Get 2-Week Setup",
      popular: true,
      timeline: "2-3 weeks",
      roi: "10-15x ROI in first 90 days"
    },
    {
      icon: Handshake,
      name: "Scale Master Enterprise",
      subtitle: "Full AI Ecosystem with Enterprise Sophistication",
      audience: "Large SMBs, funded startups, mid-market companies needing comprehensive automation.",
      price: "$24,997+",
      priceNote: "(custom scope)",
      features: [
        "Complete AI automation ecosystem",
        "Advanced machine learning models",
        "Real-time data processing & analytics",
        "Enterprise-grade security & compliance", 
        "Custom API development & integrations",
        "Dedicated success manager & quarterly reviews",
        "90-day partnership with ongoing optimization"
      ],
      ctaText: "Get Custom Quote",
      popular: false,
      timeline: "3-4 weeks",
      roi: "15-25x ROI in first 90 days"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Purple Cow Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Enterprise automation delivered in 2 weeks, not 6 months. Skip the enterprise timeline, get premium results.
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
                  
                  {/* Purple Cow Pricing Display */}
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-slate-900">
                      {pkg.price}
                    </div>
                    {pkg.priceNote && (
                      <div className="text-sm text-slate-600">
                        {pkg.priceNote}
                      </div>
                    )}
                  </div>

                  {/* Purple Cow Value Props */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="text-sm font-semibold text-green-800">
                      ⚡ {pkg.timeline} implementation
                    </div>
                    <div className="text-sm font-semibold text-green-800">
                      📈 {pkg.roi}
                    </div>
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
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3">
                    {pkg.ctaText}
                  </Button>
                  
                  {/* Purple Cow Guarantee */}
                  <div className="text-center mt-4">
                    <p className="text-xs text-slate-500">
                      2-week delivery guarantee or money back
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Purple Cow Comparison Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-slate-200 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Why OpsOnAuto?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">Traditional Approach</div>
              <div className="text-slate-600">
                <p>❌ 6-month implementations</p>
                <p>❌ $50K-$200K enterprise quotes</p>
                <p>❌ Complex requirements gathering</p>
                <p>❌ Endless project delays</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">Our Approach</div>
              <div className="text-slate-600">
                <p>✅ 2-week rapid delivery</p>
                <p>✅ $5K-$25K transparent pricing</p>
                <p>✅ Streamlined implementation</p>
                <p>✅ Guaranteed timeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;