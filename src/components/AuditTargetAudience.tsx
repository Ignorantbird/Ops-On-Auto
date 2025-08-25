// src/components/AuditTargetAudience.tsx - FIXED
import { Card, CardContent } from "@/components/ui/card";
import { Users, Rocket, Building, Megaphone, Home } from "lucide-react";

const AuditTargetAudience = () => {
  const audiences = [
    {
      icon: Users,
      title: "Consultants & Freelancers",
      description: "Automate client reporting & follow-ups"
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Free up your team to focus on growth"
    },
    {
      icon: Building,
      title: "SMBs",
      description: "Connect and optimize your business tools"
    },
    {
      icon: Megaphone,
      title: "PPC & Lead Generation Agencies",
      description: "Speed up lead response and campaign reporting"
    },
    {
      icon: Home,
      title: "Real Estate Businesses",
      description: "Respond to inquiries instantly with AI"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Who This Audit is 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> For</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.slice(0, 3).map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {audience.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Second row for remaining items */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {audiences.slice(3).map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card 
                key={index + 3} 
                className="bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {audience.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AuditTargetAudience;