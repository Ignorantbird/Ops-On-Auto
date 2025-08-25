// src/components/PartnershipsContent.tsx - FIXED YELLOW BACKGROUND TO MATCH DESIGN SYSTEM
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Shield, Zap } from "lucide-react";

const PartnershipsContent = () => {
  const partnerships = [
    {
      name: "HubSpot Solutions Provider",
      description: "Certified expertise in CRM setup, automation, and reporting.",
      icon: "🔶",
      category: "CRM"
    },
    {
      name: "Make.com Partner",
      description: "Advanced workflow automation and system integrations.",
      icon: "🔄",
      category: "Automation"
    },
    {
      name: "Zapier Certified Expert",
      description: "Connects 5,000+ apps for custom automation.",
      icon: "⚡",
      category: "Integration"
    },
    {
      name: "Google Workspace Integration Partner",
      description: "Seamless productivity automation.",
      icon: "📊",
      category: "Productivity"
    },
    {
      name: "Salesforce Integrations",
      description: "CRM and sales automation for enterprise teams.",
      icon: "☁️",
      category: "Enterprise"
    },
    {
      name: "AWS Partner Network Member",
      description: "Cloud hosting and AI infrastructure expertise.",
      icon: "🌐",
      category: "Cloud"
    },
    {
      name: "Airtable Specialist",
      description: "Database automation and workflow optimization.",
      icon: "📋",
      category: "Database"
    },
    {
      name: "Notion Integration Expert",
      description: "All-in-one workspace automation solutions.",
      icon: "📝",
      category: "Workspace"
    }
  ];

  const certifications = [
    {
      title: "AI & Automation Specialist",
      description: "Independent Recognition",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Data Security & Privacy Training",
      description: "GDPR & Indian IT Act Compliant",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Agile & Scrum Project Management",
      description: "Certified Project Management",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Advanced CRM Implementation",
      description: "API Integration Certification",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="container mx-auto px-6">
        {/* Why Partnerships Matter */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Our Partnerships Matter
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our partnerships and certifications ensure you get solutions that are secure, reliable, and built on industry-leading platforms. They allow us to deliver projects faster, integrate seamlessly with your existing tools, and keep your workflows compliant with global standards.
            </p>
          </div>
        </section>

        {/* Partnerships Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🤝 Our Partnerships
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Certified partnerships with leading platforms and tools
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border-0 rounded-2xl bg-white transform hover:-translate-y-1" style={{ boxShadow: '0 4px 24px rgba(15, 23, 42, 0.06)' }}>
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-orange-200/50 via-transparent to-blue-200/50">
                  <div className="h-full w-full bg-white rounded-2xl"></div>
                </div>
                
                <CardContent className="relative z-10 p-6 text-center h-full flex flex-col">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {partner.icon}
                  </div>
                  <Badge className="mb-4 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 border-orange-200 font-medium">
                    {partner.category}
                  </Badge>
                  <h3 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-orange-700 transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🎓 Certifications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Professional credentials that ensure quality and compliance
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border-0 rounded-2xl bg-white transform hover:-translate-y-1" style={{ boxShadow: '0 4px 24px rgba(15, 23, 42, 0.06)' }}>
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-blue-200/50 via-transparent to-orange-200/50">
                  <div className="h-full w-full bg-white rounded-2xl"></div>
                </div>
                
                <CardContent className="relative z-10 p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl flex items-center justify-center text-orange-600 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white transition-all duration-300">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 text-lg group-hover:text-orange-700 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnershipsContent;