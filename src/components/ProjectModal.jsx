import React from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Tag, ExternalLink } from 'lucide-react';
import { fallbackImage } from '../data/portfolioData';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto animate-fade-in">
      
      <div className="relative w-full max-w-5xl bg-[#121216] border border-white/10 rounded-3xl overflow-hidden shadow-2xl my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold">
              {project.type || "CONCEPT CASE STUDY"}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-12">
          
          {/* Header & Title */}
          <div>
            <div className="font-mono text-xs text-[#9E9EA7] uppercase tracking-widest mb-2">
              {project.categoryName || "GRAPHIC DESIGN CATEGORY"}
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg text-accent font-medium leading-relaxed">
              "{project.tagline}"
            </p>
          </div>

          {/* Hero Showcase Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
            <img
              src={project.image}
              onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Core Case Study Sections: BRIEF, IDEA, APPROACH */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/10">
            <div className="space-y-3">
              <h3 className="font-syne text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Tag className="w-4 h-4 text-accent" /> THE BRIEF
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9E9EA7] leading-relaxed">
                {project.brief}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-syne text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent" /> THE IDEA
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9E9EA7] leading-relaxed">
                {project.idea}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-syne text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-accent" /> THE APPROACH
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9E9EA7] leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Design System & Specs Breakdown */}
          {project.designSystem && (
            <div className="p-6 rounded-2xl bg-[#18181F] border border-white/5 space-y-6">
              <h3 className="font-syne text-lg font-bold text-white tracking-wide border-b border-white/10 pb-3">
                DESIGN SYSTEM ARCHITECTURE
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-mono text-xs text-[#9E9EA7] uppercase">TYPOGRAPHY</h4>
                  <p className="font-sans text-xs font-semibold text-white mt-1">
                    {project.designSystem.typography}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-[#9E9EA7] uppercase">COLOR PALETTE</h4>
                  <div className="flex items-center gap-2 mt-2">
                    {project.designSystem.colors?.map((c, i) => (
                      <span
                        key={i}
                        className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-[#9E9EA7] uppercase">COMPOSITION</h4>
                  <p className="font-sans text-xs font-semibold text-white mt-1">
                    {project.designSystem.composition}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-[#9E9EA7] uppercase">IMAGERY & FINISH</h4>
                  <p className="font-sans text-xs font-semibold text-white mt-1">
                    {project.designSystem.imagery}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Deliverables List */}
          {project.deliverables && (
            <div>
              <h3 className="font-syne text-sm font-bold text-white uppercase tracking-widest mb-4">
                PROJECT DELIVERABLES &amp; MOCKUPS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="font-mono text-xs text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reflection */}
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <h3 className="font-syne text-sm font-bold text-accent uppercase tracking-widest mb-2">
              DESIGN DIRECTION REFLECTION
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed italic">
              "{project.reflection}"
            </p>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#0A0A0C] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[#9E9EA7]">
            Want to see how this approach applies to your brand?
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-accent text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#d02e3b] transition-colors"
          >
            CLOSE CASE STUDY
          </button>
        </div>

      </div>

    </div>
  );
}
