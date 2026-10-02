import React from 'react';
import { Github, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home({ onOpenRegister }) {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-sky-50 via-white to-slate-50 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00663d] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#008751] animate-ping"></span>
            GFG Student Chapter RBU Event
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#032b43] mb-6 leading-tight">
            Celebrate Open Source with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#008751] via-emerald-600 to-sky-600 bg-clip-text text-transparent">
              GEEKSTOBER FEST
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-10">
            A month-long open-source event presented by <b>Campus Body RBU</b>. Contribute to real-world projects, earn exclusive badges, top the leaderboard, and jumpstart your developer journey!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-[#008751] hover:bg-[#00663d] text-white shadow-lg shadow-emerald-700/25 transition-all flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" /> Register via GitHub
            </button>
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-white hover:bg-sky-50 text-slate-700 border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Code className="w-5 h-5 text-sky-600" /> Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="border-y border-sky-100 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#032b43]">450+</div>
              <div className="text-sm font-semibold text-slate-500 mt-1">Registrations</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#008751]">30+</div>
              <div className="text-sm font-semibold text-slate-500 mt-1">Open Source Projects</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-600">1,200+</div>
              <div className="text-sm font-semibold text-slate-500 mt-1">Pull Requests</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#032b43]">25+</div>
              <div className="text-sm font-semibold text-slate-500 mt-1">Project Mentors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}