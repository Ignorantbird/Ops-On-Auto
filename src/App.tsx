// src/App.tsx - UPDATED WITH GENERATIVE AI ROUTE
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/OptimizedIndex";
import About from "./pages/About";
import Services from "./pages/Services";
import UseCases from "./pages/UseCases";
import Pricing from "./pages/Pricing";
import Integrations from "./pages/Integrations";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import WorkflowAudit from "./pages/WorkflowAudit";
import Resources from "./pages/Resources";
import AgenticAI from "./pages/AgenticAI";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Partnerships from "./pages/Partnerships";
import CRMAutomation from "./pages/CRMAutomation";
import VoiceAI from "./pages/VoiceAI";
import WorkflowAutomation from "./pages/WorkflowAutomation";
import ReportingAutomation from "./pages/ReportingAutomation";
import AIDataProcessing from "./pages/AIDataProcessing";
import ProgrammaticSEO from "./pages/ProgrammaticSEO";
import OptimizedNotFound from "./pages/OptimizedNotFound";
import OptimizedIndex from "./pages/OptimizedIndex";

// NEW IMPORT - ADD THIS
import GenerativeAI from "./pages/GenerativeAI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OptimizedIndex />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/agentic-ai" element={<AgenticAI />} />
          <Route path="/crm-automation" element={<CRMAutomation />} />
          <Route path="/voice-ai" element={<VoiceAI />} />
          <Route path="/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/reporting-automation" element={<ReportingAutomation />} />
          <Route path="/ai-data-processing" element={<AIDataProcessing />} />
          <Route path="/programmatic-seo" element={<ProgrammaticSEO />} />
          
          {/* NEW ROUTE - ADD THIS */}
          <Route path="/generative-ai" element={<GenerativeAI />} />
          
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/workflow-audit" element={<WorkflowAudit />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="*" element={<OptimizedNotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;