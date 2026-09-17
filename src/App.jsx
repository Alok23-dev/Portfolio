import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ThumbnailAndComparisonSection from './components/ThumbnailAndComparisonSection';
import ProcessAndAbout from './components/ProcessAndAbout';
import ContactAndFooter from './components/ContactAndFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E2E2E8] font-sans selection:bg-[#E63946] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* 6 Portfolio Categories & Work Grid */}
        <WorkSection />

        {/* YouTube Thumbnails & Before/After Critique */}
        <ThumbnailAndComparisonSection />

        {/* Process, About Profile & Skills */}
        <ProcessAndAbout />
      </main>

      {/* Contact & Footer */}
      <ContactAndFooter />
    </div>
  );
}
