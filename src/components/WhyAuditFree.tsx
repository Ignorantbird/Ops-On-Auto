// src/components/WhyAuditFree.tsx - FIXED
import { CheckCircle } from "lucide-react";

const WhyAuditFree = () => {
  const reasons = [
    "No hidden costs",
    "No obligation to purchase",
    "Just expert insights you can use immediately"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Why This Audit is 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Free</span>
          </h2>
          
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            We believe the best way to show our value is to prove it — risk-free.
          </p>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-lg text-slate-700 font-medium">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAuditFree;