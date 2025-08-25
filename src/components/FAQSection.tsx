// src/components/FAQSection.tsx - SIMPLIFIED STABLE VERSION
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Settings, Zap, DollarSign } from "lucide-react";

const FAQSection = () => {
  const faqCategories = [
    {
      title: "General",
      icon: HelpCircle,
      questions: [
        {
          question: "What is OpsOnAuto?",
          answer: "A consultancy specializing in AI automation, workflow optimization, CRM setup, reporting automation, programmatic SEO, and agentic AI solutions for SMBs, startups, consultants, and lead-gen-heavy industries."
        },
        {
          question: "Who do you work with?",
          answer: "We work with small—mid businesses, startups, consultants, PPC agencies, real estate teams, and service-based businesses looking to remove repetitive tasks."
        },
        {
          question: "What's the difference between automation and agentic AI?",
          answer: "Automation follows pre-set rules. Agentic AI can think, decide, and act toward a goal — enabling human-like conversations, multi-step workflows, and real-time decisions."
        }
      ]
    },
    {
      title: "Services & Process",
      icon: Settings,
      questions: [
        {
          question: "How long does it take to implement automation?",
          answer: "Most projects launch in 1—3 weeks, depending on complexity."
        },
        {
          question: "Can you customize workflows for my business?",
          answer: "Yes — every workflow is tailored to your processes, tools, and goals."
        },
        {
          question: "Do you offer post-launch support?",
          answer: "Absolutely. All packages include post-launch support, with extended optimization periods for Growth and Enterprise plans."
        }
      ]
    },
    {
      title: "Technical & Integrations",
      icon: Zap,
      questions: [
        {
          question: "Will automation work with my existing tools?",
          answer: "Yes — we integrate with CRMs, PPC platforms, SEO tools, reporting dashboards, and even custom-built systems."
        },
        {
          question: "Do you work with CRMs like HubSpot or Salesforce?",
          answer: "Yes, we work with major CRMs including HubSpot, Salesforce, Zoho, Pipedrive, Freshsales, and more."
        },
        {
          question: "Can you integrate PPC platforms and SEO tools?",
          answer: "Yes — we work with Google Ads, Meta Ads, LinkedIn Ads, SEMrush, Ahrefs, and other marketing platforms."
        }
      ]
    },
    {
      title: "Pricing & Support",
      icon: DollarSign,
      questions: [
        {
          question: "How much does automation cost?",
          answer: "Packages start from ₹25,000 for Starter plans. Complex agentic AI implementations are quoted based on scope."
        },
        {
          question: "Are there ongoing fees?",
          answer: "Our one-time packages include setup. Any ongoing tool subscription fees are billed by the provider."
        },
        {
          question: "What's included in the free workflow audit?",
          answer: "A personalized workflow analysis, identification of repetitive task bottlenecks, recommended tools & strategies, and an ROI estimate."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card key={categoryIndex} className="bg-white shadow-lg border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {category.title}
                    </h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="border-b border-slate-200 last:border-b-0"
                      >
                        <AccordionTrigger className="text-left hover:no-underline hover:text-orange-700 transition-colors py-6 text-lg font-semibold text-slate-900">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-6">
                          <p className="text-slate-600 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;