import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredProjects = projectsData.filter((p) => {
    const matchesCat = activeCategory === 'all' || p.cat === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.mentor.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-extrabold text-[#008751] tracking-widest uppercase">Repositories</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-[#032b43] mt-1">Participating Projects</h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search project name, stack, mentor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#008751]"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {['all', 'web', 'app', 'ai', 'beginner'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold capitalize whitespace-nowrap ${
                  activeCategory === cat ? 'bg-[#032b43] text-white' : 'bg-white text-slate-600 border border-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Stack' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
