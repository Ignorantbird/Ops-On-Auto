// src/pages/FAQ.tsx - FIXED BACKGROUND TO MATCH DESIGN SYSTEM
import Navigation from "@/components/Navigation";
import FAQHero from "@/components/FAQHero";
import FAQSection from "@/components/FAQSection";
import FAQFinalCTA from "@/components/FAQFinalCTA";
import Footer from "@/components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <Navigation />
      <main>
        <FAQHero />
        <FAQSection />
        <FAQFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;