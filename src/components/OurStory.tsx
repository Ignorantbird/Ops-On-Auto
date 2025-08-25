// src/components/OurStory.tsx - FIXED
const OurStory = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            📖 Our 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Story</span>
          </h2>
        </div>
        
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          {/* Orange accent bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
          
          <p className="text-xl text-slate-900 mb-8 leading-relaxed">
            <strong>OpsOnAuto was born from a simple truth:</strong><br />
            Too many talented people spend too much time on low-value, repetitive work.
          </p>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            We've seen startups, consultants, and SMBs lose hours every week to manual reports, CRM updates, 
            and repetitive admin. That's time you could spend closing deals, improving customer experience, 
            or building something new.
          </p>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            <strong className="text-slate-900">Our solution?</strong> A hybrid approach—combining human-led 
            strategy with the best automation tools to deliver fast, measurable results.
          </p>
          
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6">
            <p className="text-lg text-orange-900 font-medium text-center">
              We work with clients in India and across the globe, designing workflows that actually stick.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
