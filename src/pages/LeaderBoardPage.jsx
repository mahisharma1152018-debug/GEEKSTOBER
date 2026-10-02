import React, { useState } from 'react';
import { leaderboardData } from '../data/leaderboardData';

export default function LeaderboardPage() {
  const [search, setSearch] = useState('');

  const filtered = leaderboardData.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.handle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-[#008751] tracking-widest uppercase">Live Rankings</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#032b43] mt-1">Contributions Leaderboard</h2>
        </div>

        {/* Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden max-w-5xl mx-auto">
          <div className="p-4 border-b border-slate-100 bg-sky-50/50 flex justify-between items-center">
            <span className="font-bold text-sm text-[#032b43]">Full Contributor Standings</span>
            <input
              type="text"
              placeholder="Search handle..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-1.5 text-xs border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-[#008751]"
            />
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold border-b border-slate-100">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Contributor</th>
                <th className="py-3 px-4">Merged PRs</th>
                <th className="py-3 px-4">Badges</th>
                <th className="py-3 px-4 text-right">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
              {filtered.map((u) => (
                <tr key={u.rank} className="hover:bg-sky-50/40">
                  <td className={`py-3 px-4 font-black ${u.rank <= 3 ? 'text-[#008751]' : 'text-slate-400'}`}>
                    #{u.rank}
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-bold text-[#032b43]">{u.name}</div>
                    <div className="text-xs text-slate-400">@{u.handle}</div>
                  </td>
                  <td className="py-3 px-4 font-bold text-slate-700">{u.prs}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1">
                      {u.badges.map((b, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-full bg-emerald-50 text-[#00663d] text-[10px] font-bold border border-emerald-100">
                          {b}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right font-black text-[#008751]">{u.points} pts</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

