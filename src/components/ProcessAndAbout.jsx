import React from 'react';
import { designProcess, skillsData, personalInfo } from '../data/portfolioData';
import { FileText, Download, CheckCircle, Cpu, Wrench, Palette, ExternalLink } from 'lucide-react';

export default function ProcessAndAbout() {
  return (
    <section className="bg-[#0A0A0C] relative">
      
      {/* 1. DESIGN PROCESS SECTION */}
      <div id="process" className="py-24 border-t border-white/5 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="font-mono text-xs tracking-widest text-[#9E9EA7] uppercase">
                METHODOLOGY &amp; WORKFLOW
              </span>
            </div>
            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              DESIGN <span className="text-accent">PROCESS</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#9E9EA7] max-w-md leading-relaxed">
            A disciplined 6-stage workflow turning raw visual ideas into high-impact digital assets.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designProcess.map((p) => (
            <div
              key={p.step}
              className="editorial-card rounded-2xl p-8 border border-white/5 hover:border-accent/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-syne text-4xl font-extrabold text-white/20 group-hover:text-accent transition-colors">
                    {p.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                </div>
                <h3 className="font-syne text-xl font-bold text-white mb-3 tracking-wide">
                  {p.name}
                </h3>
                <p className="font-sans text-xs text-[#9E9EA7] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 font-mono text-[10px] text-white/40 group-hover:text-white/80 transition-colors uppercase">
                STAGE {p.step} EXECUTION
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ABOUT & PROFILE SECTION */}
      <div id="about" className="py-24 border-t border-white/5 bg-[#0E0E12]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Profile Visual Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 bg-[#121216] shadow-2xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-red-900 flex items-center justify-center font-syne text-2xl font-extrabold text-white shadow-lg">
                  AP
                </div>
                <div>
                  <h3 className="font-syne text-2xl font-bold text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="font-mono text-xs text-accent">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <p className="font-sans text-xs text-[#9E9EA7] leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Education Box */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="font-mono text-[10px] text-accent uppercase font-bold">EDUCATION</span>
                <p className="font-syne text-xs font-bold text-white">{personalInfo.education.institution}</p>
                <p className="font-sans text-[11px] text-[#9E9EA7]">{personalInfo.education.degree}</p>
                <p className="font-mono text-[10px] text-white/50">{personalInfo.education.period} • CGPA: {personalInfo.education.cgpa}</p>
              </div>

              {/* Action Buttons for Resume */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personalInfo.resumePdfUrl}
                  download="Alok_Pandey_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-accent text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#d02e3b] transition-all shadow-lg shadow-accent/20"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD</span>
                </a>

                <a
                  href={personalInfo.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-white/5 border border-white/15 text-white/90 font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                >
                  <FileText className="w-4 h-4 text-accent" />
                  <span>VIEW PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Philosophy & Career Context */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-xs tracking-widest text-accent uppercase font-bold">
                ABOUT THE DESIGNER
              </span>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 leading-tight">
                VISUAL STORYTELLER <br />
                <span className="text-[#63636E]">DRIVEN BY AUDIENCE IMPACT</span>
              </h2>
            </div>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#9E9EA7] leading-relaxed">
              <p>
                As a Graphic Designer with a background in Computer Science &amp; Data Science at ABES Engineering College, I bring a unique analytical mindset to visual communication.
              </p>
              <p>
                I don't just design elements to look pretty—I construct intentional visual hierarchies, select high-contrast palettes, and shape layouts that capture attention in fast-scrolling feeds. Through personal YouTube content creation (<span className="text-white font-medium">The Alok Pandey Xperience</span>) and self-initiated branding case studies, I continuously refine my skills in thumbnail design, social media creatives, and visual storytelling.
              </p>
            </div>

            {/* Core Values / Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-syne text-sm font-bold text-white">Attention-Driven Layouts</h4>
                  <p className="font-sans text-xs text-[#9E9EA7]">Optimized for fast recognition and high click-through rates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-syne text-sm font-bold text-white">Disciplined Typography</h4>
                  <p className="font-sans text-xs text-[#9E9EA7]">Rigid grid alignment, pairing Syne, Plus Jakarta Sans &amp; Mono.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 3. SKILLS & TOOLS SECTION */}
      <div id="skills" className="py-24 border-t border-white/5 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="font-mono text-xs tracking-widest text-[#9E9EA7] uppercase">
                CORE COMPETENCIES &amp; TOOLKIT
              </span>
            </div>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              DESIGN SKILLS <span className="text-accent">&amp; SOFTWARE</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#9E9EA7] max-w-md leading-relaxed">
            Directly supported by resume experience across visual design disciplines and creative digital tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Design Skills */}
          <div className="editorial-card rounded-2xl p-6 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Palette className="w-5 h-5 text-accent" />
              <h3 className="font-syne text-lg font-bold text-white uppercase">
                DESIGN DISCIPLINES
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsData.design.map((skill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/90 hover:border-accent/40 hover:text-accent transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Content Strategy Skills */}
          <div className="editorial-card rounded-2xl p-6 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Cpu className="w-5 h-5 text-accent" />
              <h3 className="font-syne text-lg font-bold text-white uppercase">
                CONTENT &amp; STRATEGY
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsData.content.map((skill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/90 hover:border-accent/40 hover:text-accent transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Creative Software Tools */}
          <div className="editorial-card rounded-2xl p-6 border border-white/10 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Wrench className="w-5 h-5 text-accent" />
              <h3 className="font-syne text-lg font-bold text-white uppercase">
                CREATIVE TOOLS
              </h3>
            </div>
            <div className="space-y-3">
              {skillsData.tools.map((tool, i) => (
                <div key={i} className="flex items-center justify-between text-xs font-mono p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-white font-medium">{tool.name}</span>
                  <span className="text-accent text-[10px] uppercase font-bold">{tool.level}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
