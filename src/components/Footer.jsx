import React from 'react';
import { Github, Disc, Linkedin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#032b43] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo />
              <span className="text-xl font-black text-white">GEEKSTOBER FEST</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Organized with ❤️ by <b>Campus Body RBU</b>. Promoting open source culture and software engineering excellence.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">Community</h4>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="p-2.5 bg-slate-800 rounded-lg hover:bg-[#008751] hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2.5 bg-slate-800 rounded-lg hover:bg-[#008751] hover:text-white transition-colors"><Disc className="w-5 h-5" /></a>
              <a href="#" className="p-2.5 bg-slate-800 rounded-lg hover:bg-[#008751] hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; 2026 GEEKSTOBER FEST - Campus Body RBU. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
