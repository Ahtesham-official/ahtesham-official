import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EducationCertifications = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current.children, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section
      id="education"
      ref={containerRef}
      className="py-16 md:py-20 px-4 sm:px-6 md:px-16 w-full bg-zinc-950/90 relative border-t border-red-950/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 text-left">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#DC143C] font-semibold text-sm uppercase tracking-widest px-3 py-1 bg-red-950/40 rounded-full border border-red-900/30">
            Background & Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="p-8 rounded-2xl glass-card border border-red-900/20 hover:border-[#DC143C]/50 transition-all duration-300 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-red-950/60 text-[#DC143C] border border-red-900/40">
                Education
              </span>
              <span className="text-xs font-mono text-gray-400">Currently Pursuing</span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Bachelor of Engineering (B.E.) — Computer Science & Engineering (Cyber Security)
            </h3>
            <div className="text-sm font-semibold text-[#DC143C]">
              Thakur College of Engineering and Technology, Mumbai
            </div>

            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Engaged in advanced computer science coursework, software engineering practices, and cyber security principles.
            </p>

            <div className="pt-2 border-t border-zinc-800 flex items-center gap-2 text-xs text-gray-400">
              <span className="font-semibold text-white">Relevant Coursework:</span> Web Technologies, Data Structures, Database Systems
            </div>
          </div>

          {/* Certifications Card */}
          <div className="p-8 rounded-2xl glass-card border border-red-900/20 hover:border-[#DC143C]/50 transition-all duration-300 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-red-950/60 text-[#DC143C] border border-red-900/40">
                Certification
              </span>
              <span className="text-xs font-mono text-gray-400">Verified</span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Node.js and Express.js Certification
            </h3>
            <div className="text-sm font-semibold text-[#DC143C]">
              KnowledgeGate
            </div>

            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Completed an industry-recognized course covering server-side development, middleware, routing, REST APIs, and authentication with Node.js and Express.js.
            </p>

            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400">ID: 078FD3CE</span>
              <a
                href="https://www.knowledgegate.ai/certificate/078FD3CE"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-full bg-[#DC143C] hover:bg-red-700 text-white text-xs font-semibold transition-all duration-300 glow-box-crimson"
              >
                View Certificate ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;

