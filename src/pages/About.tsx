import Navigation from "../components/Navigation";
import AboutHero from "../components/AboutHero";
import OurStory from "../components/OurStory";
import MissionVision from "../components/MissionVision";
import OurValues from "../components/OurValues";
import WhoWeWorkWith from "../components/WhoWeWorkWith";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutCTA from "../components/AboutCTA";
import Footer from "../components/Footer";
import { SEO } from "../components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="About OpsOnAuto - AI Automation Experts"
        description="Learn about OpsOnAuto's mission to streamline business operations through AI automation. Our story, values, and commitment to innovation."
        keywords="about OpsOnAuto, AI automation company, business automation experts, workflow optimization team"
        canonical="/about"
      />
      <Navigation />
      <main>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <OurValues />
        <WhoWeWorkWith />
        <WhyChooseUs />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;