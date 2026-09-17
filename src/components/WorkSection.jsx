import React, { useState } from 'react';
import { portfolioCategories, fallbackImage } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Eye, Sparkles, Layers } from 'lucide-react';

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const allProjects = portfolioCategories.flatMap(cat => {
    if (cat.projects) {
      return cat.projects.map(p => ({ ...p, categoryName: cat.title, categoryNumber: cat.number, categoryId: cat.id }));
    }
    return [];
  });

  const filteredProjects = activeTab === 'all'
    ? allProjects
    : allProjects.filter(p => p.categoryId === activeTab);

  return (
    <section id="work" className="py-24 bg-[#0A0A0C] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="font-mono text-xs tracking-widest text-[#9E9EA7] uppercase">
                SELECTED PORTFOLIO CATEGORIES
              </span>
            </div>
            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              DESIGN WORK <span className="text-[#63636E] font-light">&amp; CONCEPTS</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-[#9E9EA7] max-w-md leading-relaxed">
            Exploration of self-initiated &amp; concept design projects clearly structured across 6 core graphic design disciplines.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 scrollbar-none border-b border-white/10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-accent text-white font-bold shadow-lg shadow-accent/20'
                : 'bg-white/5 text-[#9E9EA7] hover:bg-white/10 hover:text-white'
            }`}
          >
            ALL CATEGORIES (06)
          </button>
          {portfolioCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase whitespace-nowrap transition-all ${
                activeTab === cat.id
                  ? 'bg-accent text-white font-bold shadow-lg shadow-accent/20'
                  : 'bg-white/5 text-[#9E9EA7] hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.number} — {cat.title}
            </button>
          ))}
        </div>

        {/* 6 Category Showcase Highlights */}
        {activeTab === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {portfolioCategories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  const firstProj = cat.projects ? cat.projects[0] : null;
                  if (firstProj) setSelectedProject(firstProj);
                }}
                className="group cursor-pointer editorial-card rounded-2xl overflow-hidden p-6 flex flex-col justify-between h-full border border-white/5 hover:border-accent/40 transition-all duration-500"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-syne text-3xl font-extrabold text-[#63636E] group-hover:text-accent transition-colors">
                      {cat.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-accent font-mono text-[10px] tracking-wider uppercase font-semibold">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="font-syne text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-xs text-[#9E9EA7] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 mb-4 bg-black">
                  <img
                    src={cat.heroImage}
                    onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/80">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 text-accent transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-[#9E9EA7]">
                  <span>{cat.projects ? `${cat.projects.length} CASE STUDY` : 'THUMBNAIL SUITE'}</span>
                  <span className="text-white group-hover:text-accent transition-colors flex items-center gap-1">
                    VIEW DETAILS <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Projects Grid */}
        <div className="space-y-16">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-syne text-xl font-bold text-white uppercase tracking-wider flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-accent" />
              <span>DETAILED CASE STUDIES &amp; DESIGN PRESENTATIONS</span>
            </h3>
            <span className="font-mono text-xs text-[#9E9EA7]">
              SHOWING {filteredProjects.length} PROJECTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer editorial-card rounded-2xl overflow-hidden p-6 border border-white/10 hover:border-accent/50 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10 mb-6 bg-black">
                    <img
                      src={project.image}
                      onError={(e) => { e.target.onerror = null; e.target.src = fallbackImage; }}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A0A0C]/80 backdrop-blur-md border border-white/10 font-mono text-[10px] text-accent tracking-widest font-semibold uppercase">
                      {project.type}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-accent font-mono text-xs mb-2">
                    <span>{project.categoryNumber}</span>
                    <span>/</span>
                    <span>{project.categoryName}</span>
                  </div>

                  <h4 className="font-syne text-2xl font-bold text-white group-hover:text-accent transition-colors mb-3">
                    {project.title}
                  </h4>

                  <p className="font-sans text-xs text-[#9E9EA7] leading-relaxed mb-6 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="font-mono text-xs text-[#9E9EA7] flex items-center gap-2">
                    <Eye className="w-4 h-4 text-accent" /> READ FULL CASE STUDY
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-accent flex items-center justify-center text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Modal Experience */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
