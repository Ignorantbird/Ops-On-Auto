'use client';

import AboutHero from "../components/AboutHero";
import OurStory from "../components/OurStory";
import MissionVision from "../components/MissionVision";
import OurValues from "../components/OurValues";
import WhoWeWorkWith from "../components/WhoWeWorkWith";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutCTA from "../components/AboutCTA";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <OurValues />
      <WhoWeWorkWith />
      <WhyChooseUs />
      <AboutCTA />
    </div>
  );
};

export default About;
