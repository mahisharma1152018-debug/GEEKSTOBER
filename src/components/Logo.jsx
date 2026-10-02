import React from 'react';

export default function Logo() {
  return (
    <div class="h-12 flex items-center justify-center p-1 bg-white rounded-xl shadow-sm border border-sky-100">
      <svg className="h-full w-auto" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Mortarboard Cap (Navy) */}
        <path d="M150 10 L280 60 L150 110 L20 60 Z" fill="#032b43"/>
        <path d="M110 50 L220 20 L220 30 L110 60 Z" fill="#ffffff" opacity="0.3"/>
        <path d="M265 65 L265 130 L255 130 L255 65 Z" fill="#032b43"/>
        <polygon points="260,130 270,150 250,150" fill="#032b43"/>
        
        {/* Smooth Solid G|G Emblem (GFG Green) */}
        <path d="M130 115 C100 115 80 135 80 165 C80 195 100 215 130 215 L145 215 L145 190 L130 190 C115 190 105 180 105 165 C105 150 115 140 130 140 L145 140 L145 115 Z" fill="#008751"/>
        <path d="M170 115 C200 115 220 135 220 165 C220 195 200 215 170 215 L155 215 L155 190 L170 190 C185 190 195 180 195 165 C195 150 185 140 170 140 L155 140 L155 115 Z" fill="#008751"/>
        
        {/* Center Diamond Accent */}
        <polygon points="150,210 165,225 150,240 135,225" fill="#032b43"/>
      </svg>
    </div>
  );
}
