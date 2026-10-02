import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenRegister }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors font-semibold text-sm ${
      isActive ? 'text-[#008751]' : 'text-slate-600 hover:text-[#008751]'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <Logo />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-[#032b43]">GEEKSTOBER</span>
              <span className="font-extrabold text-xl tracking-tight text-[#008751]">FEST</span>
            </div>
            <span className="text-xs font-semibold text-sky-600 block tracking-wider uppercase">Campus Body RBU</span>
          </div>
        </NavLink>

        {/* Desktop Navigation Routes */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/leaderboard" className={navLinkClass}>Leaderboard</NavLink>
          <NavLink to="/rules" className={navLinkClass}>Rules & Badges</NavLink>
          <NavLink to="/faq" className={navLinkClass}>FAQs</NavLink>
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenRegister}
            className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-[#008751] hover:bg-[#00663d] text-white shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
          >
            Register Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 font-medium">Home</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 font-medium">Projects</NavLink>
          <NavLink to="/leaderboard" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 font-medium">Leaderboard</NavLink>
          <NavLink to="/rules" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 font-medium">Rules & Badges</NavLink>
          <NavLink to="/faq" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 font-medium">FAQs</NavLink>
          <button
            onClick={() => { setIsOpen(false); onOpenRegister(); }}
            className="w-full mt-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-[#008751] text-white text-center shadow-md"
          >
            Register Now
          </button>
        </div>
      )}
    </header>
  );
}
