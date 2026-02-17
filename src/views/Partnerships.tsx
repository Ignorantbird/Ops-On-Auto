'use client';

import PartnershipsHero from "@/components/PartnershipsHero";
import PartnershipsContent from "@/components/PartnershipsContent";
import PartnershipsCTA from "@/components/PartnershipsCTA";

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <PartnershipsHero />
      <PartnershipsContent />
      <PartnershipsCTA />
    </div>
  );
};

export default Partnerships;
