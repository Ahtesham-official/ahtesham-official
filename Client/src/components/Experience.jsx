import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);

  const experiences = [
    {
      role: "Web Developer",
      company: "AXIOS EDIC TCET Cell",
      period: "2025 - Present",
      description: "Working as a Web Developer in AXIOS EDIC TCET Cell, engineering responsive web interfaces, designing interactive features, and building full-stack web solutions.",
      highlights: ["Frontend UI & MERN Stack Development", "EDIC Cell Project Portals", "RESTful API Integration"]
    },
    {
      role: "Lead Backend Developer (Hackathons & Ideathons)",
      company: "Team Zenova",
      period: "2025 - Present",
      description: "Participated in multiple hackathons and ideathons with Team Zenova as a Lead Backend Developer, designing scalable database models, building robust RESTful APIs, and implementing rapid backend logic.",
      highlights: ["Multiple Hackathon & Ideathon Participation", "Team Zenova Lead Backend Engineer", "Database Architecture & Fast Prototyping"]
    },
    {
      role: "Full Stack MERN Developer & Funtime Editor",
      company: "Independent & Creative Projects",
      period: "2025 - Present",
      description: "Architecting AI-powered web applications (PRAXIS, SkillBridge-AI) and producing high-energy video edits, sound design, and motion graphics.",
      highlights: ["Built PRAXIS AI Video Checkpoint Player", "Deployed SkillBridge-AI Roadmap App", "Creative Video & Motion Graphics Editing"]
    }
  ];

  useGSAP(() => {
    gsap.utils.toArray('.experience-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });
  }, { scope: containerRef });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-16 md:py-24 px-4 sm:px-6 md:px-16 w-full bg-zinc-950/90 relative border-t border-red-950/30"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[#DC143C] font-semibold text-sm uppercase tracking-widest px-3 py-1 bg-red-950/40 rounded-full border border-red-900/30">
            Journey & Leadership
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Experience & Impact
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Combining full-stack software development, hackathon backend leadership with Team Zenova, and cell web engineering at TCET.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="experience-card p-6 sm:p-7 md:p-8 rounded-2xl glass-card border border-red-900/20 hover:border-[#DC143C]/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-red-950/50 text-[#DC143C] text-xs font-semibold border border-red-900/40 font-mono">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#DC143C] transition-colors duration-300 mb-1">
                  {exp.role}
                </h3>
                <div className="text-sm text-[#DC143C] font-medium mb-4">
                  {exp.company}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Key Achievements:
                </span>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC143C]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
