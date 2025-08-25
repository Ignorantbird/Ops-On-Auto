import { Bot, Workflow, Database, BarChart3, Search, Brain } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Automation",
      description: "Set up intelligent workflows that think and act for you."
    },
    {
      icon: Database,
      title: "CRM Setup & Optimization",
      description: "Clean pipelines. Smart automations. Better sales outcomes."
    },
    {
      icon: BarChart3,
      title: "Reporting Automation",
      description: "Turn raw data into ready-to-share reports—automatically."
    },
    {
      icon: Workflow,
      title: "Workflow Optimization",
      description: "Map, streamline, and automate everyday business operations."
    },
    {
      icon: Search,
      title: "Programmatic SEO",
      description: "Scale content that ranks—without lifting a finger."
    },
    {
      icon: Brain,
      title: "Data Analysis",
      description: "Get insights that actually drive decisions, not dashboards."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Automate
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-gradient-card p-8 rounded-lg shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 h-full border border-border/50">
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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

export default ServicesOverview;