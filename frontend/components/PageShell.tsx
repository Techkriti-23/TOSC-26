"use client";

import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({
  children,
  className = "",
}: PageShellProps) {
  return (
    <div className="relative min-h-screen bg-[#0b1329] text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* GREY-BLUE AMBIENT BACKGROUND (FOR ALL SUB-PAGES) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Deep Slate / Grey-Blue Gradient Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1527] via-[#101b33] to-[#080d1a]" />

        {/* Ambient Glow Highlights */}
        <div className="absolute -left-[10%] top-[-5%] h-[550px] w-[550px] rounded-full bg-sky-500/10 blur-[140px]" />
        <div className="absolute -right-[10%] top-[30%] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[150px]" />
        <div className="absolute left-[30%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />

        {/* Fine Architectural Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf80a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_15%,#000_70%,transparent_100%)]" />
      </div>

      {/* FLOATING NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT CONTAINER */}
      <main className={`relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 md:pt-32 ${className}`}>
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
