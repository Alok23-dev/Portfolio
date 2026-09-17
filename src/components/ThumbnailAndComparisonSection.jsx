import React, { useState } from 'react';
import { portfolioCategories, beforeAfterExamples, fallbackImage } from '../data/portfolioData';
import { Sparkles, Eye, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

export default function ThumbnailAndComparisonSection() {
  const thumbnailCategory = portfolioCategories.find(c => c.id === 'thumbnails');
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-[#0D0D11] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-24">
        
        {/* YOUTUBE THUMBNAIL GALLERY FEATURE */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="font-mono text-xs tracking-widest text-[#9E9EA7] uppercase">
                  03 — ATTENTION-DRIVEN VISUAL COMMUNICATION
                </span>
              </div>
              <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                YOUTUBE THUMBNAIL <span className="text-accent">PORTFOLIO</span>
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#9E9EA7] max-w-md leading-relaxed">
              Demonstrating visual hierarchy, high contrast focal points, readability at micro scales, and curiosity-driven composition.
            </p>
          </div>

          {/* Large Thumbnail Grid */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-8 group bg-black">
            <img
              src={thumbnailCategory?.heroImage}
              onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
              alt="YouTube Thumbnail Portfolio Grid by Alok Pandey"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 p-6 sm:p-8 flex flex-col justify-between pointer-events-none">
              <div className="flex items-center justify-between">
                <span className="px-4 py-1.5 rounded-full bg-accent/90 text-white font-mono text-xs font-bold uppercase tracking-wider">
                  YOUTUBE CONTENT &amp; GRAPHIC DESIGN
                </span>
                <span className="font-mono text-xs text-white/80 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  HIGH CTR FORMULA
                </span>
              </div>

              <div className="max-w-xl bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10 space-y-2">
                <h3 className="font-syne text-xl font-bold text-white">
                  Designed for Immediate Cognitive Impact
                </h3>
                <p className="font-sans text-xs text-[#9E9EA7]">
                  Covering Business, Finance, AI Technology, Motivation, and Podcasts. Focused on micro-readability, expressive emotional anchors, and crisp visual hierarchy.
                </p>
              </div>
            </div>
          </div>

          {/* Individual Thumbnail Cards Hover Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {thumbnailCategory?.thumbnails?.map((thumb) => (
              <div
                key={thumb.id}
                className="editorial-card rounded-xl p-4 border border-white/10 hover:border-accent/50 transition-all flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-white/10 mb-3 bg-black">
                    <img
                      src={thumb.image}
                      onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
                      alt={thumb.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="font-mono text-[10px] text-accent uppercase font-semibold">
                    {thumb.niche}
                  </span>
                  <h4 className="font-syne text-base font-bold text-white mt-1 mb-2">
                    {thumb.title}
                  </h4>
                  <p className="font-sans text-xs text-[#9E9EA7] mb-3">
                    <strong className="text-white font-medium">CTR Focus:</strong> {thumb.ctrFocus}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                  <span>TEXT: "{thumb.text}"</span>
                  <Eye className="w-3.5 h-3.5 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* BEFORE / AFTER VISUAL HIERARCHY COMPARISON SECTION */}
        <div className="pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="font-mono text-xs tracking-widest text-[#9E9EA7] uppercase">
                  DESIGN CRITIQUE &amp; REFINEMENT
                </span>
              </div>
              <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                BEFORE <span className="text-accent">/ AFTER</span> DESIGN EVOLUTION
              </h2>
            </div>

            {/* Toggle Tabs */}
            <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10">
              {beforeAfterExamples.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                    activeTab === index
                      ? 'bg-accent text-white font-bold shadow-md'
                      : 'text-[#9E9EA7] hover:text-white'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Container */}
          {beforeAfterExamples[activeTab] && (
            <div className="space-y-8 animate-fade-in">
              <p className="font-sans text-base text-[#9E9EA7] max-w-2xl">
                {beforeAfterExamples[activeTab].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* BEFORE CARD */}
                <div className={`rounded-2xl p-8 border ${beforeAfterExamples[activeTab].before.style} space-y-6 relative`}>
                  <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
                    <span className="font-mono text-xs font-bold tracking-widest text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      {beforeAfterExamples[activeTab].before.tag}
                    </span>
                    <span className="font-mono text-[10px] text-white/40">WEAK DESIGN CHOICE</span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-syne text-lg font-bold text-white">Identified Visual Weaknesses:</h4>
                    <ul className="space-y-2.5">
                      {beforeAfterExamples[activeTab].before.issues.map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-3 font-sans text-xs text-[#9E9EA7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* AFTER CARD */}
                <div className={`rounded-2xl p-8 border ${beforeAfterExamples[activeTab].after.style} space-y-6 relative`}>
                  <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                    <span className="font-mono text-xs font-bold tracking-widest text-emerald-400 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      {beforeAfterExamples[activeTab].after.tag}
                    </span>
                    <span className="font-mono text-[10px] text-accent font-semibold">REFINED DESIGN DIRECTION</span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-syne text-lg font-bold text-white">Executed Design Improvements:</h4>
                    <ul className="space-y-2.5">
                      {beforeAfterExamples[activeTab].after.improvements.map((imp, idx) => (
                        <li key={idx} className="flex items-start gap-3 font-sans text-xs text-white/90">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
