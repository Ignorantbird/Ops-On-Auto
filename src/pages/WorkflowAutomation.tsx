// src/pages/WorkflowAutomation.tsx - FIXED USD PRICING
import Navigation from "@/components/Navigation";
import WorkflowAutomationSection from "@/components/WorkflowAutomationSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const WorkflowAutomation = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Workflow Automation Services - Process Optimization & Task Automation"
        description="Professional workflow automation services. Eliminate bottlenecks and repetitive tasks with intelligent automation that adapts to your business processes. Starting at $600."
        keywords="workflow automation, process automation, task automation, business process optimization, workflow management, process mapping, automation consulting"
        canonical="/workflow-automation"
      />
      <Navigation />
      <WorkflowAutomationSection />
      <Footer />
    </div>
  );
};

export default WorkflowAutomation;