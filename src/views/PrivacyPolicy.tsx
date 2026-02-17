'use client';

import PrivacyHero from "@/components/PrivacyHero";
import PrivacyContent from "@/components/PrivacyContent";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
};

export default PrivacyPolicy;
