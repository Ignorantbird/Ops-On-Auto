import Navigation from "@/components/Navigation";
import WorkflowAuditHero from "@/components/WorkflowAuditHero";
import AuditBenefits from "@/components/AuditBenefits";
import WhyAuditFree from "@/components/WhyAuditFree";
import AuditTargetAudience from "@/components/AuditTargetAudience";
import AuditSocialProof from "@/components/AuditSocialProof";
import WorkflowAuditForm from "@/components/WorkflowAuditForm";
import FinalAuditCTA from "@/components/FinalAuditCTA";
import Footer from "@/components/Footer";

const WorkflowAudit = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <WorkflowAuditHero />
        <AuditBenefits />
        <WhyAuditFree />
        <AuditTargetAudience />
        <AuditSocialProof />
        <WorkflowAuditForm />
        <FinalAuditCTA />
      </main>
      <Footer />
    </div>
  );
};

export default WorkflowAudit;