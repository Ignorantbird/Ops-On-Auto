// src/components/CategoryFilter.tsx - FIXED WITH ENHANCED DESIGN
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const categories = [
  { id: "all", label: "All Resources", icon: "📚" },
  { id: "crm", label: "CRM Automation", icon: "🔄" },
  { id: "ai", label: "Agentic AI & Voice AI", icon: "🤖" },
  { id: "reporting", label: "Reporting & Data", icon: "📊" },
  { id: "seo", label: "Programmatic SEO", icon: "🔍" },
  { id: "workflow", label: "Workflow Optimization", icon: "⚡" },
  { id: "industry", label: "Industry Tips", icon: "🏢" },
];

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, setActiveCategory }: CategoryFilterProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Filter content to find exactly what you need
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose a category to see relevant automation guides and insights</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "relative px-6 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-xl",
                activeCategory === category.id 
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl hover:from-orange-600 hover:to-orange-700 border-0 ring-2 ring-orange-200" 
                  : "bg-white border-2 border-orange-200 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:border-orange-300 hover:text-orange-700 shadow-md"
              )}
            >
              <span className="mr-3 text-lg">{category.icon}</span>
              {category.label}
              {activeCategory === category.id && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              )}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;