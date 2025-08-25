// 4. FIXED PricingFAQ.tsx - Remove yellow background and fix character encoding
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "Are there any setup fees?",
      answer: "No hidden fees — your package price includes setup and implementation. Everything is transparent and included in the quoted price."
    },
    {
      question: "Can I upgrade later?",
      answer: "Yes, you can upgrade anytime as your needs grow. We'll apply any previous payments toward your new package and seamlessly transition your existing automations."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "All packages include post-launch support. Growth & Enterprise plans include extended optimization periods with dedicated assistance to ensure your automations perform optimally."
    },
    {
      question: "Do I need to pay for the tools separately?",
      answer: "We work with your existing tools whenever possible. Any third-party licenses or subscriptions (like CRM software, email platforms) are billed separately by the provider, but we'll help you choose cost-effective options."
    },
    {
      question: "What happens after the initial implementation?",
      answer: "After implementation, we provide training for your team, documentation for all workflows, and ongoing support based on your package level. You'll have everything needed to maintain and optimize your automations."
    },
    {
      question: "How long does implementation take?",
      answer: "Most Starter packages are completed within 1-2 weeks. Growth plans typically take 2-4 weeks, and Enterprise solutions are custom-scoped but usually deploy within 4-8 weeks depending on complexity."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Pricing FAQ
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about our automation packages and pricing
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
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

export default PricingFAQ;