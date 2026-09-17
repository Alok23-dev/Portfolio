import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROCESS', href: '#process' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0C]/90 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#"
          className="group flex items-center gap-3 font-syne text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-accent transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block group-hover:scale-125 transition-transform" />
          <span>{personalInfo.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs tracking-widest text-[#9E9EA7] hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.resumePdfUrl}
            download="Alok_Pandey_Resume.pdf"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:border-accent text-white/90 hover:text-white font-mono text-[11px] tracking-wider uppercase transition-all"
          >
            <Download className="w-3.5 h-3.5 text-accent" />
            <span>RESUME</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white font-syne font-semibold text-xs tracking-wider uppercase hover:bg-[#d02e3b] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/20"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-[#0A0A0C]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-syne text-lg font-bold tracking-wider text-white hover:text-accent transition-colors flex items-center justify-between border-b border-white/5 pb-3"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-white/40" />
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-accent text-white font-syne font-bold text-sm tracking-wider uppercase shadow-lg"
            >
              LET'S TALK
            </a>
            
            <div className="grid grid-cols-2 gap-2">
              <a
                href={personalInfo.resumePdfUrl}
                download="Alok_Pandey_Resume.pdf"
                className="w-full text-center py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-accent" />
                <span>DOWNLOAD</span>
              </a>

              <a
                href={personalInfo.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-accent" />
                <span>VIEW PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
