// src/pages/PrivacyPolicy.tsx - FIXED BACKGROUND TO MATCH DESIGN SYSTEM
import Navigation from "@/components/Navigation";
import PrivacyHero from "@/components/PrivacyHero";
import PrivacyContent from "@/components/PrivacyContent";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <Navigation />
      <PrivacyHero />
      <PrivacyContent />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;