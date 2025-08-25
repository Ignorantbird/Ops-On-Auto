import { Building2, Users, TrendingUp, Clock } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: Users,
      category: "For Consultants & Freelancers",
      title: "Automate Administrative Work",
      description: "Automate client reports, CRM updates, and status dashboards.",
      metrics: ["Save 10+ hours/week", "Better client communication", "Focus on high-value work"]
    },
    {
      icon: TrendingUp,
      category: "For Startup Teams",
      title: "Growth-Focused Operations",
      description: "Focus on growth—not admin—with smart ops across sales, marketing, and product.",
      metrics: ["50% faster processes", "Better team coordination", "Scale without hiring"]
    },
    {
      icon: Clock,
      category: "For SMB Employees",
      title: "Daily Task Automation",
      description: "Automate daily KRAs and free up your time to do high-impact work.",
      metrics: ["2-3 hours saved daily", "Reduce repetitive work", "Focus on strategy"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who We Help
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-lg shadow-card hover:shadow-cta transition-all duration-300 border border-border/50"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-accent font-semibold mb-2">
                    {useCase.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm font-medium text-foreground">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;