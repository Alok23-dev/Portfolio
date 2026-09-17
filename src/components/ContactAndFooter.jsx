import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Youtube, Linkedin, ArrowUpRight, FileText, Download } from 'lucide-react';

export default function ContactAndFooter() {
  return (
    <footer id="contact" className="bg-[#070709] relative border-t border-white/10 overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Main CTA Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Big Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-accent uppercase font-bold tracking-widest">
                START A CREATIVE DIRECTION
              </span>
            </div>

            <h2 className="font-syne text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[0.95] max-w-full">
              LET'S CREATE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-red-500 to-amber-500">
                SOMETHING
              </span> <br />
              MEMORABLE.
            </h2>

            <p className="font-sans text-base sm:text-xl text-[#9E9EA7] font-light max-w-xl leading-relaxed">
              Available for full-time Graphic Designer, Visual Designer, Social Media Designer, and Content Designer opportunities.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-syne font-bold text-sm tracking-wider uppercase hover:bg-[#d02e3b] transition-all transform hover:-translate-y-1 shadow-2xl shadow-accent/30"
              >
                <Mail className="w-4 h-4" />
                <span>SEND DIRECT EMAIL</span>
              </a>

              {/* DOWNLOAD RESUME BUTTON */}
              <a
                href={personalInfo.resumePdfUrl}
                download="Alok_Pandey_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-accent/10 hover:bg-accent/20 border border-accent/40 text-white font-mono text-xs tracking-wider uppercase transition-all shadow-lg"
              >
                <Download className="w-4 h-4 text-accent" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* VIEW RESUME BUTTON */}
              <a
                href={personalInfo.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/90 font-mono text-xs tracking-wider uppercase transition-all"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>VIEW RESUME</span>
              </a>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-[#121216] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl">
            <h3 className="font-syne text-2xl font-bold text-white tracking-wide border-b border-white/10 pb-4">
              DIRECT CONTACT &amp; PROFILES
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#9E9EA7] uppercase">EMAIL ADDRESS</span>
                  <p className="font-syne text-sm sm:text-base font-bold text-white group-hover:text-accent transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accent/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#9E9EA7] uppercase">PHONE / WHATSAPP</span>
                  <p className="font-syne text-sm sm:text-base font-bold text-white group-hover:text-accent transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#9E9EA7]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#9E9EA7] uppercase">LOCATION</span>
                  <p className="font-syne text-sm font-bold text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Buttons */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="font-mono text-[10px] text-[#9E9EA7] uppercase tracking-wider block">
                VERIFIED PROFESSIONAL PROFILES
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-accent/10 hover:border-accent/30 border border-white/10 text-white font-mono text-xs transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-accent" /> LINKEDIN
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>

                <a
                  href={personalInfo.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-accent/10 hover:border-accent/30 border border-white/10 text-white font-mono text-xs transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Youtube className="w-4 h-4 text-accent" /> YOUTUBE
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-20 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#9E9EA7]">
          <p>© {new Date().getFullYear()} {personalInfo.name}. ALL RIGHTS RESERVED.</p>
          <p className="text-white/40">DESIGNED WITH HIGH-END DARK EDITORIAL AESTHETICS</p>
        </div>

      </div>

    </footer>
  );
}
