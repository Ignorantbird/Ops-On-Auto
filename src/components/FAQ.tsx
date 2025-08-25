import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to implement automation?",
      answer: "Most automation solutions are implemented within 2-4 weeks. Simple workflows can be live in as little as 1 week, while complex integrations may take up to 6 weeks. We provide a detailed timeline during your free audit."
    },
    {
      question: "Do you offer support after setup?",
      answer: "Yes! We provide 30 days of free support after implementation, plus ongoing maintenance packages. Our team is always available to help with questions, updates, and optimizations."
    },
    {
      question: "Can I integrate OpsOnAuto with my current tools?",
      answer: "Absolutely. We work with all major platforms including HubSpot, Salesforce, Zapier, Notion, Slack, and custom APIs. If you don't see your tool listed, we can likely build a custom integration."
    },
    {
      question: "Is this affordable for small teams?",
      answer: "Yes! Our pricing starts at $997 for basic automation packages, with flexible monthly plans starting at $197. We offer custom pricing for enterprise solutions. Most clients see ROI within the first month."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our automation services and implementation process.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-slate-700 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;