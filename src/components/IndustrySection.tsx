import { Check, TrendingUp } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface IndustrySectionProps {
  icon: LucideIcon;
  title: string;
  challenges: string;
  solutions: string[];
  example: string;
}

export const IndustrySection = ({ icon: Icon, title, challenges, solutions, example }: IndustrySectionProps) => {
  return (
    <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-7 w-7 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground font-medium">Challenges:</p>
          <p className="text-muted-foreground leading-relaxed">{challenges}</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-foreground font-semibold mb-3">How We Help:</p>
        <ul className="space-y-2">
          {solutions.map((solution, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{solution}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
        <div className="flex items-start gap-3">
          <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Example Success:</p>
            <p className="text-sm text-muted-foreground">{example}</p>
          </div>
        </div>
      </div>
    </div>
  );
};