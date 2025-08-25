// src/components/IntegrationCategories.tsx - ENHANCED
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  BarChart3, 
  Search, 
  Bot, 
  Workflow,
  Calendar
} from "lucide-react";

const categories = [
  {
    icon: Users,
    title: "CRM Platforms",
    description: "We set up and optimize your CRM so it becomes the heartbeat of your automation strategy.",
    tools: ["HubSpot", "Salesforce", "Zoho CRM", "Pipedrive", "Freshsales"],
    color: "orange"
  },
  {
    icon: Target,
    title: "Marketing & PPC Tools",
    description: "Automate campaigns, reporting, and lead routing for maximum ROI.",
    tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Mailchimp", "ActiveCampaign"],
    color: "blue"
  },
  {
    icon: BarChart3,
    title: "Data & Reporting",
    description: "Turn raw data into actionable insights with automated dashboards and scheduled reports.",
    tools: ["Google Sheets", "Airtable", "Power BI", "Looker Studio", "Tableau"],
    color: "green"
  },
  {
    icon: Search,
    title: "SEO & Content Platforms",
    description: "Automate content publishing, keyword tracking, and SEO audits for consistent growth.",
    tools: ["WordPress", "Webflow", "Shopify", "SEMrush", "Ahrefs"],
    color: "purple"
  },
  {
    icon: Bot,
    title: "Agentic AI & Voice AI",
    description: "Bring human-like AI into your workflows for sales, support, and lead qualification.",
    tools: ["Vapi.ai", "Twilio", "Sarvam AI", "OpenAI", "ElevenLabs"],
    color: "orange"
  },
  {
    icon: Workflow,
    title: "Workflow & Automation Platforms",
    description: "We connect the dots between all your tools so your workflows run end-to-end.",
    tools: ["Make.com", "Zapier", "n8n", "Workato"],
    color: "blue"
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    orange: {
      accent: "from-orange-400 to-orange-500",
      bg: "from-orange-50 to-orange-100",
      icon: "text-orange-600",
      toolBg: "bg-orange-100",
      toolText: "text-orange-700"
    },
    blue: {
      accent: "from-blue-400 to-blue-500", 
      bg: "from-blue-50 to-blue-100",
      icon: "text-blue-600",
      toolBg: "bg-blue-100",
      toolText: "text-blue-700"
    },
    green: {
      accent: "from-green-400 to-green-500",
      bg: "from-green-50 to-green-100", 
      icon: "text-green-600",
      toolBg: "bg-green-100",
      toolText: "text-green-700"
    },
    purple: {
      accent: "from-purple-400 to-purple-500",
      bg: "from-purple-50 to-purple-100",
      icon: "text-purple-600",
      toolBg: "bg-purple-100",
      toolText: "text-purple-700"
    }
  };
  return colorMap[color as keyof typeof colorMap];
};

export const IntegrationCategories = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-blue-50/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Integration 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Categories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We work with the tools you already know and trust across every major platform category.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.accent}`}></div>
                
                <div className={`w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {category.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium text-slate-700">Popular Tools:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className={`px-3 py-1 ${colors.toolBg} ${colors.toolText} rounded-full text-sm font-medium`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
