// 3. ALSO UPDATE: src/components/TestimonialsSection.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The automation OpsOnAuto built for us runs like clockwork. We went from chasing leads to focusing on closing deals.",
      industry: "B2B SaaS Company",
      initials: "JS"
    },
    {
      quote: "We never realized how much time reporting took until it was automated. Now we can focus on strategy, not spreadsheets.",
      industry: "PPC Agency", 
      initials: "MR"
    },
    {
      quote: "The voice AI bot feels like having an extra sales rep working 24/7. We've booked more meetings without extra effort.",
      industry: "Real Estate Firm",
      initials: "DL"
    },
    {
      quote: "From day one, the team understood our workflows and delivered automations that just work.",
      industry: "Consulting Business",
      initials: "KP"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-800 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-orange-400">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real feedback from businesses that transformed their operations with automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-700 rounded-xl p-8 border border-slate-600"
            >
              <Quote className="h-8 w-8 text-orange-400 mb-6" />
              
              <p className="text-lg text-white mb-8 leading-relaxed font-medium">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-orange-500 text-white font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Badge variant="outline" className="text-sm border-orange-400 text-orange-200 bg-transparent">
                    {testimonial.industry}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
