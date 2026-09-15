import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardsRef.current.children, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  const techCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Python", level: "Proficient" },
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "C / C++", level: "Academic" }
      ]
    },
    {
      title: "Frontend & UI Animation Stack",
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "Tailwind CSS v4", level: "Expert" },
        { name: "GSAP (GreenSock)", level: "Advanced" },
        { name: "ScrollTrigger", level: "Advanced" },
        { name: "Lenis Smooth Scroll", level: "Proficient" },
        { name: "Framer Motion", level: "Proficient" },
        { name: "Redux Toolkit", level: "Intermediate" },
        { name: "Vite", level: "Advanced" }
      ]
    },
    {
      title: "Backend, Database & GenAI",
      skills: [
        { name: "Node.js", level: "Certified" },
        { name: "Express.js", level: "Certified" },
        { name: "MongoDB", level: "Proficient" },
        { name: "Mongoose ODM", level: "Proficient" },
        { name: "RESTful APIs", level: "Expert" },
        { name: "LangChain (GenAI)", level: "Proficient" },
        { name: "JWT Auth & Middleware", level: "Advanced" }
      ]
    },
    {
      title: "Version Control & Deployment",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Postman API", level: "Advanced" },
        { name: "Render / Vercel", level: "Proficient" },
        { name: "Docker (Basics)", level: "Intermediate" }
      ]
    }
  ];

  const developerTools = [
    {
      name: "Claude with Connectors",
      tag: "AI Automation",
      description: "Using multiple connectors in Claude to automate boilerplate code, debug complex scripts, and brainstorm system architecture."
    },
    {
      name: "Stitch",
      tag: "UI/UX Design",
      description: "Utilizing Stitch for rapid interactive layout prototyping, wireframing, and modern design systems."
    },
    {
      name: "Antigravity + Model Extensions",
      tag: "IDE & Extensions",
      description: "Leveraging Antigravity and third-party model extensions for deep codebase debugging and rapid backend API construction."
    },
    {
      name: "Figma & Design Systems",
      tag: "Design Prototyping",
      description: "Prototyping responsive web layouts, component design systems, and micro-interaction mockups."
    }
  ];

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-16 md:py-24 px-4 sm:px-6 md:px-16 w-full bg-black relative border-t border-red-950/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[#DC143C] font-semibold text-sm uppercase tracking-widest px-3 py-1 bg-red-950/40 rounded-full border border-red-900/30">
            Technical Stack & Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Full Stack & Creative Expertise
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Comprehensive skill matrix across MERN development, GSAP animation libraries, AI integrations, and developer tools.
          </p>
        </div>

        {/* Skill Cards & Tool Grids */}
        <div ref={cardsRef} className="space-y-6 sm:space-y-8 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {techCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl glass-card border border-red-900/20 hover:border-[#DC143C]/50 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DC143C]"></span>
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-200 bg-zinc-900/90 border border-zinc-800 hover:border-[#DC143C] hover:text-white transition-all duration-200 flex items-center gap-2 group cursor-default"
                      >
                        <span>{skill.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-950/60 text-[#DC143C] border border-red-900/40 font-mono group-hover:bg-[#DC143C] group-hover:text-white transition-colors">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Tools & Workflows Grid */}
          <div className="p-6 md:p-8 rounded-2xl glass-card border border-red-900/20 space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DC143C]"></span>
              Developer Tools & AI Workflows
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {developerTools.map((tool, tIdx) => (
                <div key={tIdx} className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-red-900/50 space-y-2 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-[#DC143C]">{tool.name}</div>
                    <span className="text-[9px] uppercase tracking-wider font-mono text-gray-400 px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
                      {tool.tag}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

