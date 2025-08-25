import { Database, BarChart3, Settings, Phone, Search, Brain } from "lucide-react";

const ServiceIconsSection = () => {
  const services = [
    {
      icon: Database,
      title: "CRM Setup",
      description: "Clean pipelines, smart automations"
    },
    {
      icon: BarChart3,
      title: "Report Automation", 
      description: "Data to insights, automatically"
    },
    {
      icon: Settings,
      title: "Workflow Optimization",
      description: "Streamline everyday operations"
    },
    {
      icon: Phone,
      title: "Voice AI Calling Bot",
      description: "Human-like sales & lead qualification"
    },
    {
      icon: Search,
      title: "Programmatic SEO",
      description: "Scale content that ranks"
    },
    {
      icon: Brain,
      title: "AI Data Processing", // UPDATED FROM "Lead Data Analysis"
      description: "AI-powered insights & workflows" // UPDATED DESCRIPTION
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Automate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From CRM workflows to AI-powered calling bots, we eliminate the busy work so you can focus on growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full border border-gray-200">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300 group-hover:scale-110 transform">
                  <service.icon className="w-10 h-10 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIconsSection;