import React from 'react';
import { ArrowDownRight, FileText, Download, Sparkles, Layers, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-grid-pattern overflow-hidden">
      {/* Background Subtle Accent Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Typography & Positioning Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E9EA7]">
              OPEN FOR GRAPHIC & VISUAL DESIGN ROLES
            </span>
          </div>

          {/* Name & Big Typography */}
          <div>
            <h1 className="font-syne text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-none text-white max-w-full">
              ALOK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#9E9EA7]">
                PANDEY
              </span>
            </h1>
            <p className="mt-4 font-mono text-sm sm:text-base text-accent tracking-widest uppercase font-semibold">
              // GRAPHIC DESIGNER & VISUAL CONTENT SPECIALIST
            </p>
          </div>

          {/* Strong Positioning Statement */}
          <p className="text-lg sm:text-xl text-[#9E9EA7] font-light max-w-2xl leading-relaxed">
            Architecting <span className="text-white font-medium">high-CTR YouTube thumbnails</span>, sharp social media campaigns, and <span className="text-white font-medium">distinctive brand identities</span> that demand attention in a crowded digital landscape.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-syne font-bold text-sm tracking-wider uppercase hover:bg-[#d02e3b] transition-all transform hover:-translate-y-1 shadow-xl shadow-accent/25"
            >
              <span>VIEW MY WORK</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            {/* DOWNLOAD RESUME BUTTON */}
            <a
              href={personalInfo.resumePdfUrl}
              download="Alok_Pandey_Resume.pdf"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs tracking-widest uppercase transition-all hover:border-white/30"
            >
              <Download className="w-4 h-4 text-accent" />
              <span>DOWNLOAD RESUME</span>
            </a>

            {/* VIEW RESUME BUTTON */}
            <a
              href={personalInfo.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 font-mono text-xs tracking-widest uppercase transition-all"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>VIEW RESUME</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="font-syne text-2xl font-bold text-white">100%</div>
              <div className="font-mono text-xs text-[#9E9EA7] mt-1">ORIGINAL CONCEPTS</div>
            </div>
            <div>
              <div className="font-syne text-2xl font-bold text-white">6+</div>
              <div className="font-mono text-xs text-[#9E9EA7] mt-1">DESIGN DISCIPLINES</div>
            </div>
            <div>
              <div className="font-syne text-2xl font-bold text-white">HIGH</div>
              <div className="font-mono text-xs text-[#9E9EA7] mt-1">CTR FOCUS</div>
            </div>
          </div>
        </div>

        {/* Right Side Editorial Art Composition showcasing portfolio pieces */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#121216] shadow-2xl group">
            {/* Primary Background Artwork (Branding Mockup) */}
            <img
              src="/assets/images/hero_composite.svg"
              alt="Alok Pandey Graphic Design Presentation"
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80" />

            {/* Overlapping Floating Artwork Preview Cards */}
            <div className="absolute top-6 right-6 bg-[#18181F]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-accent/40">
                <img
                  src="/assets/images/thumb_ai.svg"
                  alt="Thumbnail Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-syne text-xs font-bold text-white">YOUTUBE THUMBNAILS</p>
                <p className="font-mono text-[10px] text-accent">High CTR Visuals</p>
              </div>
            </div>

            <div className="absolute bottom-8 left-6 right-6 p-5 bg-[#0A0A0C]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> FEATURED CASE STUDY
                </span>
                <span className="font-mono text-[10px] text-white/50">2024</span>
              </div>
              <p className="font-syne text-base font-bold text-white leading-snug">
                NEXUS AUDIO — Luxury Brand Identity
              </p>
              <p className="font-sans text-xs text-[#9E9EA7] line-clamp-2">
                Minimalist packaging, foil business cards, and sound identity architecture.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
