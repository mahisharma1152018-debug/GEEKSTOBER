import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-sky-50 text-sky-700 border border-sky-100">
            {project.cat.toUpperCase()}
          </span>
          <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {project.stars}
          </span>
        </div>
        <h3 className="text-lg font-bold text-[#032b43] mb-2">{project.title}</h3>
        <p class="text-slate-600 text-xs leading-relaxed mb-4">{project.desc}</p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-semibold">
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500">Mentor: <b className="text-slate-700">{project.mentor}</b></span>
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-[#008751] hover:underline">
            View Repo <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
