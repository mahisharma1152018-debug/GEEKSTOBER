import React, { useState } from 'react';
import { X, UserPlus } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', github: '', email: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Registration successful for ${formData.name}! Welcome to GEEKSTOBER FEST.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-slate-100">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X className="w-5 h-5" />
        </button>
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008751] flex items-center justify-center mx-auto mb-3">
            <UserPlus className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#032b43]">Student Registration</h3>
          <p className="text-xs text-slate-500 mt-1">Join GEEKSTOBER FEST & sync your GitHub PRs</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Full Name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#008751]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">GitHub Username</label>
            <input
              type="text"
              required
              placeholder="octocat"
              value={formData.github}
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#008751]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">College Email ID</label>
            <input
              type="email"
              required
              placeholder="student@rbu.edu.in"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#008751]"
            />
          </div>
          <button type="submit" className="w-full py-3 bg-[#008751] hover:bg-[#00663d] text-white font-bold rounded-xl shadow-md text-sm transition-all">
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
}

