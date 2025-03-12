"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/ui/background-beams-with-collision";

import Link from "next/link";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center text-center">
        {/* Primary Button */}
        <button className="mb-6 px-6 py-2 rounded-full bg-[#8b4ff3] font-bold text-white text-sm tracking-widest uppercase transform hover:scale-105 hover:bg-[#7d43e0] transition-all duration-200">
          Video-First Personal Branding
        </button>

        {/* Heading */}
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight">
          We build organic content engines for{" "}
          <div className="relative mx-auto inline-block w-max">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500">
              <span>Entrepreneurs & VCs</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span>Entrepreneurs & VCs</span>
            </div>
          </div>
        </h2>

        {/* Paragraph */}
        <p className="text-base md:text-lg max-w-xl text-gray-900 dark:text-gray-300 mt-4">
          We help Entrepreneurs & VCs build organic distribution, which
          predictably brings them more leads and builds trust in their market
          segment.
        </p>

        {/* Secondary Button */}
        <Link href="#form-section" scroll={true}>
          <button className="mt-8 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              Book a call
            </span>
          </button>
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
