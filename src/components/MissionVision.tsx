// src/components/MissionVision.tsx - FIXED
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            🎯 Mission & 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> Vision</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 text-center group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300">
              <Target className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Mission
            </h3>
            <p className="text-slate-700 leading-relaxed">
              To free teams from repetitive work so they can focus on growth, creativity, and impact.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 text-center group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500"></div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Vision
            </h3>
            <p className="text-slate-700 leading-relaxed">
              A future where every business, no matter its size, has automation as a built-in advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
