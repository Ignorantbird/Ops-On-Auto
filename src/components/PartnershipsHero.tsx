const PartnershipsHero = () => {
  return (
    <section className="relative py-20 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Trusted Partnerships & Certifications
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            We work with leading platforms and tools to deliver secure, high-quality automation solutions.
          </p>
        </div>
      </div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 border border-white rounded-full"></div>
      </div>
    </section>
  );
};

export default PartnershipsHero;