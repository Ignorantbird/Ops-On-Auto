import { Star, Users, Zap, Clock, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Star,
    text: "Sector-specific automation experience"
  },
  {
    icon: Users,
    text: "Hybrid AI + human-led strategy"
  },
  {
    icon: Zap,
    text: "Quick deployment in 1–3 weeks"
  },
  {
    icon: HeartHandshake,
    text: "Ongoing optimization and support"
  }
];

export const WhyChooseOpsOnAuto = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose OpsOnAuto for Industry Automation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IconComponent className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-lg font-medium text-foreground">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};