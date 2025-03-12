"use client";
import React from "react";
import { Timeline } from "@/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Scale Trust",
      content: (
        <div>
          <div className="ml-60 bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-xl overflow-hidden shadow-lg w-full max-w-lg border border-white/5 transition-all duration-300 hover:border-white/10 group">
            <div className="p-8 relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-t from-transparent to-white/20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#333] to-[#222] p-4 rounded-lg inline-flex items-center justify-center w-12 h-12 mb-6 shadow-lg border border-white/5">
                  <ScaleTrustIcon />
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">Scale <span className="text-amber-500">Trust</span></h2>
                <p className="text-white/70 text-lg leading-relaxed">We create content that builds trust on every video-based platform.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Lifetime asset",
      content: (
        <div>
          <div className="ml-60 bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-xl overflow-hidden shadow-lg w-full max-w-lg border border-white/5 transition-all duration-300 hover:border-white/10 group">
            <div className="p-8 relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-t from-transparent to-white/20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#333] to-[#222] p-4 rounded-lg inline-flex items-center justify-center w-12 h-12 mb-6 shadow-lg border border-white/5">
                  <LifetimeAssetIcon />
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">Lifetime <span className="text-amber-500">asset</span></h2>
                <p className="text-white/70 text-lg leading-relaxed">Build a lifetime asset of organic distribution in just 1 hour a week</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Accountability",
      content: (
        <div>
          <div className="ml-60 bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-xl overflow-hidden shadow-lg w-full max-w-lg border border-white/5 transition-all duration-300 hover:border-white/10 group">
            <div className="p-8 relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-t from-transparent to-white/20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#333] to-[#222] p-4 rounded-lg inline-flex items-center justify-center w-12 h-12 mb-6 shadow-lg border border-white/5">
                  <AccountabilityIcon />
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">Accountability</h2>
                <p className="text-white/70 text-lg leading-relaxed">We keep you accountable to consistently publish and grow your audience.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Consistent leads & sales",
      content: (
        <div>
          <div className="ml-60 bg-gradient-to-br from-[#1A1A1A] to-[#252525] rounded-xl overflow-hidden shadow-lg w-full max-w-lg border border-white/5 transition-all duration-300 hover:border-white/10 group">
            <div className="p-8 relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-t from-transparent to-white/20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-[#333] to-[#222] p-4 rounded-lg inline-flex items-center justify-center w-12 h-12 mb-6 shadow-lg border border-white/5">
                  <SalesIcon />
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">Consistent leads & <span className="text-amber-500">sales</span></h2>
                <p className="text-white/70 text-lg leading-relaxed">Generate predictable leads and sales through your content strategy.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div id = "benefits" className="w-full">
      <Timeline data={data} />
    </div>
  );
}

// Custom SVG Icons
const ScaleTrustIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 20L20 16M20 16L16 12M20 16H8M12 8H4M4 8L8 4M4 8L8 12" 
      stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LifetimeAssetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L19 7.5V16.5L12 21L5 16.5V7.5L12 3Z M12 12L12 21 M12 12L5 7.5 M12 12L19 7.5" 
      stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AccountabilityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 15L12 18L20 10M5 10H9L11 6H13L15 10H19M5 10V18H19V10" 
      stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SalesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 9V6M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15M12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15M12 15V18M16.7302 8.5C15.9074 7.17596 14.5488 6.26989 13 6.07802M7.27021 8.5C8.09288 7.17596 9.45075 6.26989 11 6.07802M6 12C6 16.4183 8.68629 20 12 20C15.3137 20 18 16.4183 18 12C18 7.58172 15.3137 4 12 4C8.68629 4 6 7.58172 6 12Z" 
      stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);