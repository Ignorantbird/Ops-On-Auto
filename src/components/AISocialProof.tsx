import { Star, TrendingUp, Clock, Users } from "lucide-react";

const AISocialProof = () => {
  const testimonials = [
    {
      quote: "Our lead response time went from hours to under 2 minutes. The AI sounds so natural, prospects think they're talking to our best sales rep.",
      company: "TechStart Solutions",
      industry: "SaaS Startup",
      metric: "+300%",
      results: "Lead conversion rate",
      color: "text-green-500",
      icon: TrendingUp,
      rating: 5
    },
    {
      quote: "We're now qualifying 10x more leads without hiring a single person. The AI handles objections better than most humans I've worked with.",
      company: "Growth Marketing Agency",
      industry: "Digital Marketing",
      metric: "15h",
      results: "Saved per week",
      color: "text-blue-500", 
      icon: Clock,
      rating: 5
    },
    {
      quote: "Interview AI helped us screen 500+ candidates in a month. What used to take our HR team weeks now happens automatically with detailed reports.",
      company: "Rapid Scale Corp",
      industry: "E-commerce",
      metric: "90%",
      results: "Time reduction",
      color: "text-purple-500",
      icon: Users,
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            What Our <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real results from businesses that have transformed their operations with our AI solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            
            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-slate-900 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Results metric */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${testimonial.color}`}>
                        {testimonial.metric}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonial.results}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Attribution */}
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-900">
                    {testimonial.company}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.industry}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            );
          })}
        </div>

        {/* Aggregate stats */}
        <div className="grid md:grid-cols-4 gap-6 text-center mb-16">
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
            <div className="text-slate-600">Businesses Automated</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <div className="text-3xl font-bold text-orange-500 mb-2">10K+</div>
            <div className="text-slate-600">Leads Processed</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <div className="text-3xl font-bold text-blue-500 mb-2">98%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-slate-600">AI Availability</div>
          </div>
        </div>

        {/* Case study callout */}
        <div className="text-center">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Want to See More Detailed Results?
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Read our full case studies to see exactly how we've helped businesses like yours achieve measurable AI ROI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
                View Case Studies
              </button>
              <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISocialProof;