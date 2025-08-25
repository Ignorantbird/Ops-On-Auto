// src/pages/Partnerships.tsx - FIXED BACKGROUND TO MATCH DESIGN SYSTEM
import Navigation from "@/components/Navigation";
import PartnershipsHero from "@/components/PartnershipsHero";
import PartnershipsContent from "@/components/PartnershipsContent";
import PartnershipsCTA from "@/components/PartnershipsCTA";
import Footer from "@/components/Footer";

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <Navigation />
      <PartnershipsHero />
      <PartnershipsContent />
      <PartnershipsCTA />
      <Footer />
    </div>
  );
};

export default Partnerships;