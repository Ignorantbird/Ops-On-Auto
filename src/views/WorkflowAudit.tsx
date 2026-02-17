'use client';

import WorkflowAuditHero from "@/components/WorkflowAuditHero";
import AuditBenefits from "@/components/AuditBenefits";
import WhyAuditFree from "@/components/WhyAuditFree";
import AuditTargetAudience from "@/components/AuditTargetAudience";
import AuditSocialProof from "@/components/AuditSocialProof";
import WorkflowAuditForm from "@/components/WorkflowAuditForm";
import FinalAuditCTA from "@/components/FinalAuditCTA";

const WorkflowAudit = () => {
  return (
    <div className="min-h-screen">
      <WorkflowAuditHero />
      <AuditBenefits />
      <WhyAuditFree />
      <AuditTargetAudience />
      <AuditSocialProof />
      <WorkflowAuditForm />
      <FinalAuditCTA />
    </div>
  );
};

export default WorkflowAudit;
