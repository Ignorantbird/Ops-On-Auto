import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingComparison = () => {
  const features = [
    {
      name: "AI Setup & Optimization",
      starter: "1-2 workflows",
      growth: "Up to 5 workflows",
      enterprise: "Unlimited"
    },
    {
      name: "AI-Generated Reporting",
      starter: "1 process",
      growth: "Multi-KPI dashboards",
      enterprise: "Full enterprise BI"
    },
    {
      name: "Workflow Automation",
      starter: "Basic",
      growth: "Multi-department",
      enterprise: "Enterprise-wide"
    },
    {
      name: "Agentic AI Voice Bots",
      starter: false,
      growth: false,
      enterprise: true
    },
    {
      name: "Custom Integrations",
      starter: false,
      growth: "Standard tools",
      enterprise: "Unlimited"
    },
    {
      name: "Post-Launch Support",
      starter: "30 days",
      growth: "60 days + optimization",
      enterprise: "Dedicated account manager"
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-slate-400 mx-auto" />
      );
    }
    return <span className="text-sm text-center text-slate-900">{value}</span>;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Compare Plans
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See what's included in each automation package
          </p>
        </div>
        
        <Card className="max-w-6xl mx-auto overflow-hidden border border-slate-200">
          <CardHeader className="bg-slate-50">
            <CardTitle className="text-center text-2xl text-slate-900">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                    <th className="text-center p-4 font-semibold text-slate-900">Starter</th>
                    <th className="text-center p-4 font-semibold text-slate-900">Growth</th>
                    <th className="text-center p-4 font-semibold text-slate-900">Enterprise/Custom</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {features.map((feature, index) => (
                    <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium text-slate-900">{feature.name}</td>
                      <td className="p-4 text-center">{renderFeatureValue(feature.starter)}</td>
                      <td className="p-4 text-center">{renderFeatureValue(feature.growth)}</td>
                      <td className="p-4 text-center">{renderFeatureValue(feature.enterprise)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingComparison;