// src/components/IntegrationsIntro.tsx - ENHANCED
export const IntegrationsIntro = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
          
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Switching tools can be expensive and time-consuming. At OpsOnAuto, we meet you where you are — integrating automation into the platforms you already know and trust.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether it's your CRM, reporting dashboard, PPC platform, SEO toolkit, or even advanced voice AI solutions, we make your tools work harder so you don't have to.
          </p>
        </div>
      </div>
    </section>
  );
};
