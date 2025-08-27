// src/pages/DataAnalytics.tsx - COMPLETE NEW PAGE
import Navigation from "@/components/Navigation";
import DataAnalyticsSection from "@/components/DataAnalyticsSection";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const DataAnalytics = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="AI Data Analytics - Predictive Insights & Business Intelligence | OpsOnAuto"
        description="Professional AI Data Analytics services. Transform raw data into revenue-driving insights with predictive analytics, automated reporting, and custom dashboards. 15x ROI guaranteed. From ₹75,000."
        keywords="AI data analytics, predictive analytics, business intelligence, data visualization, automated reporting, machine learning analytics, data science services, AI insights"
        canonical="/data-analytics"
      />
      <Navigation />
      <DataAnalyticsSection />
      <Footer />
    </div>
  );
};

export default DataAnalytics;