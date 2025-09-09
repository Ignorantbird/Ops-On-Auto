// src/App.tsx - UPDATED WITH BUSINESS AUTOMATION ROUTE
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/OptimizedIndex";
import About from "./pages/About";
import Services from "./pages/Services";
import UseCases from "./pages/UseCases";
import Pricing from "./pages/Pricing";
import Integrations from "./pages/Integrations";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
import WorkflowAudit from "./pages/WorkflowAudit";
import CRMAudit from "./pages/CRMAudit"; 
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

// EXISTING + NEW IMPORTS
import GenerativeAI from "./pages/GenerativeAI";
import SalesAI from "./pages/SalesAI";
import DataAnalytics from "./pages/DataAnalytics";
import BusinessAutomation from "./pages/BusinessAutomation"; // NEW IMPORT

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
          
          {/* CATEGORY LANDING PAGES */}
          <Route path="/agentic-ai" element={<AgenticAI />} />
          <Route path="/generative-ai" element={<GenerativeAI />} />
          <Route path="/business-automation" element={<BusinessAutomation />} /> {/* NEW ROUTE */}
          
          {/* INDIVIDUAL SERVICE PAGES */}
          <Route path="/crm-automation" element={<CRMAutomation />} />
          <Route path="/voice-ai" element={<VoiceAI />} />
          <Route path="/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/reporting-automation" element={<ReportingAutomation />} />
          <Route path="/programmatic-seo" element={<ProgrammaticSEO />} />
          <Route path="/sales-ai" element={<SalesAI />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          
          {/* OTHER PAGES */}
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/workflow-audit" element={<WorkflowAudit />} />
          <Route path="/crm-audit" element={<CRMAudit />} />
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