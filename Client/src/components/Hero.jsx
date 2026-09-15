import React, { useState } from 'react';
import '../index.css';
import myPhoto from '../assets/My-photo.png';

const Hero = () => {
  const [hoveredState, setHoveredState] = useState(null);

  const handleMouseEnter = (e, char) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const heroRect = document.getElementById('hero')?.getBoundingClientRect() || { left: 0, top: 0 };
    setHoveredState({
      char,
      x: rect.left - heroRect.left + rect.width / 2,
      y: rect.top - heroRect.top + rect.height / 2,
    });
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };

  return (
    <section id="hero" className="w-full min-h-screen relative pt-20 md:pt-24 pb-12 md:pb-16 flex items-center corner-red-gradient overflow-hidden">

      {/* Giant Background Watermark Letter */}
      {hoveredState && (
        <div
          className="absolute pointer-events-none transition-all duration-200 ease-out z-20 select-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2 overflow-visible"
          style={{
            left: `${hoveredState.x}px`,
            top: `${hoveredState.y}px`,
          }}
        >
          <span className="text-[18rem] sm:text-[28rem] md:text-[38rem] lg:text-[45rem] font-black text-[#DC143C]/12 leading-none tracking-tighter drop-shadow-[0_0_100px_rgba(220,20,60,0.3)] scale-125">
            {hoveredState.char}
          </span>
        </div>
      )}

      {/* ── Mobile layout: scaled upper-half photo + big horizontal name ── */}
      <div className="flex flex-col lg:hidden w-full min-h-[calc(100vh-80px)] justify-between px-6 pt-8 pb-10 z-10 relative">

        {/* Scaled Background Photo (Upper half focused, shifted lower in Y, mobile only) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-start justify-center">
          <img
            src={myPhoto}
            alt="Ahtesham Shaikh"
            className="w-[170%] max-w-none h-auto object-cover object-top opacity-25 scale-140 translate-y-10 sm:translate-y-14"
          />
          {/* Subtle gradient vignette over photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>

        {/* Top spacer */}
        <div className="relative z-10 pt-4" />

        {/* Center: Bigger horizontal Name overlay, center-aligned in front of photo */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-8 select-none">
          <h1 className="text-6xl sm:text-8xl font-black text-white tracking-wider uppercase leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            AHTESHAM
          </h1>
          <h1 className="text-6xl sm:text-8xl font-black text-[#DC143C] tracking-wider uppercase leading-none mt-2 drop-shadow-[0_4px_25px_rgba(220,20,60,0.4)]">
            SHAIKH
          </h1>
        </div>

        {/* Bottom: Mobile CTAs */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full max-w-sm mx-auto">
          <a
            href="#projects"
            className="flex-1 px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] bg-[#DC143C]/90 hover:bg-[#DC143C] text-white transition-all duration-300 rounded-xl shadow-[0_0_20px_rgba(220,20,60,0.3)]"
          >
            01 / EXPLORE WORK ↗
          </a>
          <a
            href="#about"
            className="flex-1 px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.2em] border border-zinc-700/80 bg-zinc-950/70 text-gray-300 hover:border-[#DC143C]/50 hover:text-white transition-all duration-300 rounded-xl backdrop-blur-sm"
          >
            02 / ABOUT ME ↓
          </a>
        </div>
      </div>

      {/* ── Desktop layout: original side-by-side ── */}
      <div className="main hidden lg:flex w-full flex-row items-center justify-between pl-0 pr-6 xl:pr-16 max-w-[90rem] mx-auto z-10 relative">

        {/* Left Side: Image */}
        <div className="w-1/2 h-[88vh] flex items-start justify-start -translate-x-28 overflow-hidden relative">
          <img
            src={myPhoto}
            alt="Ahtesham Shaikh"
            className="relative max-h-none w-[115%] max-w-none object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] opacity-40 translate-y-8 scale-125 origin-top-left pointer-events-none -ml-[120px]"
          />
        </div>

        {/* Right Side: Interactive Vertical Typography Name */}
        <div className="w-1/2 flex items-center justify-end z-30 relative">
          <div className="flex items-center gap-6 xl:gap-10 select-none">
            {/* Column 1: AHTESHAM */}
            <h1 className="text-7xl xl:text-8xl font-black text-white tracking-widest leading-none flex flex-col items-center uppercase">
              {'AHTESHAM'.split('').map((char, index) => (
                <span
                  key={index}
                  onMouseEnter={(e) => handleMouseEnter(e, char)}
                  onMouseLeave={handleMouseLeave}
                  className="hover:text-[#DC143C] hover:scale-125 transition-all duration-300 cursor-pointer py-0.5 relative z-40"
                >
                  {char}
                </span>
              ))}
            </h1>

            {/* Vertical Glowing Divider Line */}
            <div className="w-[2px] h-80 xl:h-96 bg-gradient-to-b from-transparent via-[#DC143C] to-transparent" />

            {/* Column 2: SHAIKH */}
            <h1 className="text-7xl xl:text-8xl font-black text-[#DC143C] tracking-widest leading-none flex flex-col items-center uppercase">
              {'SHAIKH'.split('').map((char, index) => (
                <span
                  key={index}
                  onMouseEnter={(e) => handleMouseEnter(e, char)}
                  onMouseLeave={handleMouseLeave}
                  className="hover:text-white hover:scale-125 transition-all duration-300 cursor-pointer py-0.5 relative z-40"
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;