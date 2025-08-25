// src/components/FeaturedPosts.tsx - COMPLETELY REDESIGNED
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Star } from "lucide-react";

const featuredPosts = [
  {
    id: "1",
    title: "How to Automate CRM Lead Assignment Without Losing the Personal Touch",
    description: "Stop letting leads slip through the cracks — automatically route and assign leads while maintaining personalized follow-up sequences.",
    category: "CRM Automation", 
    readTime: "8 min read",
    image: "🔥",
    featured: true,
    views: "2.5k"
  },
  {
    id: "2", 
    title: "AI Voice Bots: The Secret to 24/7 Lead Conversion Without Hiring More Staff",
    description: "Discover how voice AI can handle customer inquiries, qualify leads, and book appointments while you sleep.",
    category: "Agentic AI & Voice AI",
    readTime: "6 min read",
    image: "🤖",
    featured: true,
    views: "1.8k"
  },
  {
    id: "3",
    title: "Reporting Automation 101: From Manual Spreadsheets to Real-Time Dashboards", 
    description: "Stop wasting hours compiling data — automate it and get insights that actually drive decisions.",
    category: "Reporting & Data",
    readTime: "10 min read",
    image: "📊",
    featured: true,
    views: "3.2k"
  }
];

const FeaturedPosts = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            Featured Posts
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Our most popular guides and insights to help you get started with automation
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group relative overflow-hidden bg-white border-0 rounded-3xl hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 transform"
              style={{
                boxShadow: '0 8px 32px rgba(15, 23, 42, 0.08)'
              }}
            >
              {/* Premium gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-orange-200 via-transparent to-blue-200">
                <div className="h-full w-full bg-white rounded-3xl"></div>
              </div>
              
              {/* Featured badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  #{index + 1} Popular
                </div>
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Large emoji icon */}
                <div className="text-6xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {post.image}
                </div>
                
                {/* Category and read time */}
                <div className="flex items-center justify-between mb-6">
                  <Badge className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 border-orange-200 font-semibold px-3 py-1">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-slate-500 font-medium">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {post.readTime}
                  </div>
                </div>
                
                {/* Title */}
                <CardTitle className="text-xl font-bold leading-tight mb-4 group-hover:text-orange-700 transition-colors duration-300 line-clamp-3">
                  {post.title}
                </CardTitle>
                
                {/* Description */}
                <CardDescription className="text-slate-600 mb-8 leading-relaxed flex-grow line-clamp-3">
                  {post.description}
                </CardDescription>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="text-sm text-slate-500 font-medium">
                    {post.views} views
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-semibold group/button"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;