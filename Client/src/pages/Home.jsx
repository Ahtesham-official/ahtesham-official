import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import EducationCertifications from '../components/EducationCertifications';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const ldtl = gsap.timeline();
  const ldname = useRef(null);
  const loadingDiv = useRef(null);

  useGSAP(() => {
    ldtl.from(ldname.current.children, {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.out',
    });
    ldtl.to(ldname.current.children[4], {
      scale: 500,
      xPercent: -20,
      transformOrigin: 'center center',
      ease: 'sine.in',
      duration: 1.4,
    });
    ldtl.to(loadingDiv.current, {
      opacity: 0,
      display: 'none',
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => {
        window.scrollTo(0, 0);
      },
    });
  });

  return (
    <div className="w-full bg-black min-h-screen text-white overflow-x-hidden selection:bg-[#DC143C] selection:text-white">
      {/* Intro Preloader */}
      <div
        ref={loadingDiv}
        className="fixed inset-0 z-50 h-screen w-screen bg-black flex items-center justify-center pointer-events-none"
      >
        <div
          ref={ldname}
          className="six-caps-regular ldname text-[#DC143C] text-[30vw] font-bold flex gap-1 select-none leading-none tracking-tighter"
        >
          <span>A</span>
          <span>H</span>
          <span>T</span>
          <span>E</span>
          <span>S</span>
          <span>H</span>
          <span>A</span>
          <span>M</span>
        </div>
      </div>

      {/* Main App Content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <EducationCertifications />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;