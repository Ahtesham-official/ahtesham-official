import React, { useRef, useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: "PRAXIS",
    category: "ai",
    subtitle: "AI Video Checkpoint Player & YouTube Transcript Analyzer",
    description: "Accepts YouTube URLs to extract transcripts. Our AI builds interactive concept checkpoints in an inbuilt video player, requiring correct answers before unlocking the next video chunk.",
    tag: "AI & Full Stack",
    github: "https://github.com/Ahtesham-official/PRAXIS",
    live: null,
  },
  {
    id: 2,
    title: "SkillBridge-AI",
    category: "ai",
    subtitle: "Career Roadmap & Skill Recommendation Engine",
    description: "Recommends tailored career learning roadmaps to users and highlights the exact required skills for specified tech job roles.",
    tag: "AI & Web App",
    github: "https://github.com/Ahtesham-official/SkillBridge-AI",
    live: "https://skillbridge-ai-0np7.onrender.com",
  },
  {
    id: 3,
    title: "Complaint Hub",
    category: "web",
    subtitle: "MERN Stack Admin & User Complaint Portal",
    description: "Registers user complaints into MongoDB database via Mongoose CRUD operations, allowing real-time status management by system admins.",
    tag: "MERN Stack",
    github: "https://github.com/Ahtesham-official/",
    live: null,
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);



  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-16 md:py-24 px-4 sm:px-6 md:px-16 w-full bg-black relative border-t border-red-950/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[#DC143C] font-semibold text-sm uppercase tracking-widest px-3 py-1 bg-red-950/40 rounded-full border border-red-900/30">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Software & AI Applications
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Explore authentic web applications, AI tools, and full-stack solutions built by Ahtesham.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai', label: 'AI Apps' },
            { id: 'web', label: 'MERN & Web' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === btn.id
                  ? 'bg-[#DC143C] text-white'
                  : 'bg-zinc-900 text-gray-400 border border-zinc-800 hover:text-white hover:border-[#DC143C]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-5 sm:p-7 rounded-2xl glass-card border border-red-900/20
                         hover:border-[#DC143C]/60 transition-all duration-300
                         text-left flex flex-col justify-between gap-5 sm:gap-6
                         hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Tag + Status dot */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider bg-red-950/60 text-[#DC143C] border border-red-900/40">
                    {project.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#DC143C] group-hover:animate-ping" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-[#DC143C] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-red-400 font-mono leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700
                               text-xs font-semibold text-gray-200 transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#DC143C] hover:bg-red-700
                               text-xs font-semibold text-white transition-colors"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
