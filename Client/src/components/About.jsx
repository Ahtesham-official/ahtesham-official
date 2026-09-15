import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.from(contentRef.current.children, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-16 md:py-28 px-4 sm:px-6 md:px-16 w-full bg-zinc-950/80 relative border-t border-red-950/30 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Professional Summary Content (Centered Full Width) */}
        <div ref={contentRef} className="w-full space-y-6 sm:space-y-8 text-center relative z-10 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl glass-card border border-red-900/30">
          <div className="inline-block">
            <span className="text-[#DC143C] font-semibold text-sm uppercase tracking-widest px-4 py-1.5 bg-red-950/40 rounded-full border border-red-900/30">
              Professional Summary
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide">
            Ahtesham Ahmed Shaikh
          </h2>

          <p className="text-gray-300 text-base md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
            Motivated Computer Science and Engineering student at <strong className="text-white font-semibold">Thakur College of Engineering and Technology, Mumbai</strong>, with hands-on expertise in MERN Stack development.
          </p>

          <p className="text-gray-400 text-base leading-relaxed max-w-3xl mx-auto">
            Proficient in building RESTful APIs, designing databases, and delivering responsive web applications. Certified in Node.js and Express.js, with strong knowledge of JavaScript, Git version control, and UI/UX prototyping using Figma. Eager to contribute to collaborative, agile development environments.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-3xl mx-auto">
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-red-900/30 text-center hover:border-[#DC143C]/50 transition-colors">
              <div className="text-3xl font-bold text-[#DC143C] glow-text-crimson">MERN Stack</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Full Stack Developer</div>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-red-900/30 text-center hover:border-[#DC143C]/50 transition-colors">
              <div className="text-3xl font-bold text-[#DC143C] glow-text-crimson">TCET Mumbai</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">B.E. CSE</div>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900/80 border border-red-900/30 text-center hover:border-[#DC143C]/50 transition-colors">
              <div className="text-3xl font-bold text-[#DC143C] glow-text-crimson">Certified</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Node.js & Express</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

