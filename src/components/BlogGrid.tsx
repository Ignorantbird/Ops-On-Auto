// src/components/BlogGrid.tsx - COMPLETELY REDESIGNED
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { categories } from "@/components/CategoryFilter";

const blogPosts = [
  {
    id: "4",
    title: "Top 5 Automation Tools for Small Businesses in 2025",
    description: "Compare the best automation platforms and find the perfect fit for your budget and needs.",
    category: "workflow",
    categoryLabel: "Workflow Optimization",
    readTime: "7 min read",
    image: "🛠️",
    publishDate: "2024-12-10",
    views: "1.2k"
  },
  {
    id: "5",
    title: "Step-by-Step: Automating PPC Performance Reports",
    description: "Build automated reports that track ROAS, conversion rates, and campaign performance across all platforms.",
    category: "reporting",
    categoryLabel: "Reporting & Data", 
    readTime: "12 min read",
    image: "📈",
    publishDate: "2024-12-08",
    views: "856"
  },
  {
    id: "6",
    title: "What is Programmatic SEO and How Can It Grow Your Traffic?",
    description: "Learn how to scale content creation and generate thousands of landing pages automatically.",
    category: "seo",
    categoryLabel: "Programmatic SEO",
    readTime: "9 min read", 
    image: "🚀",
    publishDate: "2024-12-05",
    views: "2.1k"
  },
  {
    id: "7",
    title: "Workflow Automation for Real Estate: Speed Up Lead Response",
    description: "Automate lead qualification, follow-up sequences, and appointment scheduling for faster conversions.",
    category: "industry",
    categoryLabel: "Industry Tips",
    readTime: "8 min read",
    image: "🏠",
    publishDate: "2024-12-03",
    views: "673"
  },
  {
    id: "8",
    title: "Building Your First AI Assistant with Voice Commands",
    description: "Create a custom voice AI that handles customer inquiries and books appointments automatically.",
    category: "ai",
    categoryLabel: "Agentic AI & Voice AI",
    readTime: "15 min read",
    image: "🎤",
    publishDate: "2024-12-01",
    views: "1.5k"
  },
  {
    id: "9", 
    title: "CRM Integration Mastery: Connect All Your Sales Tools",
    description: "Sync your CRM with email, calendar, and marketing tools for seamless lead management.",
    category: "crm",
    categoryLabel: "CRM Automation",
    readTime: "11 min read",
    image: "🔗", 
    publishDate: "2024-11-28",
    views: "943"
  }
];

interface BlogGridProps {
  activeCategory: string;
}

const BlogGrid = ({ activeCategory }: BlogGridProps) => {
  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            Latest Resources
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {activeCategory === "all" 
              ? "Browse all our guides, tutorials, and industry insights"
              : `Showing ${categories.find(c => c.id === activeCategory)?.label} articles`
            }
          </h2>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
              <div className="text-6xl">📚</div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">No articles found for this category</h3>
            <p className="text-xl text-slate-600 mb-8">Check back soon for new content!</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            >
              Browse All Resources
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group h-full bg-white border-0 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  boxShadow: '0 4px 24px rgba(15, 23, 42, 0.06)'
                }}
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-orange-200/50 via-transparent to-blue-200/50">
                  <div className="h-full w-full bg-white rounded-2xl"></div>
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 border-orange-200 font-medium">
                      {post.categoryLabel}
                    </Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                    {post.image}
                  </div>
                  
                  {/* Title */}
                  <CardTitle className="text-lg font-bold leading-tight mb-3 group-hover:text-orange-700 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  
                  {/* Description */}
                  <CardDescription className="text-slate-600 mb-6 flex-grow leading-relaxed line-clamp-3">
                    {post.description}
                  </CardDescription>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>{post.views} views</span>
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-semibold group/button"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Load more button */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-16">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-orange-200 text-orange-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:border-orange-300 font-semibold px-8 py-3"
            >
              Load More Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;