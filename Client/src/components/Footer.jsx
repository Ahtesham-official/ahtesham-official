import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 md:py-12 px-4 sm:px-6 md:px-16 w-full bg-black border-t border-red-950/40 text-left">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#DC143C] flex items-center justify-center font-bold text-black font-six-caps text-lg">
              A
            </span>
            <span className="text-base sm:text-xl font-bold tracking-wider text-white">
              AHTESHAM AHMED SHAIKH
            </span>
          </div>
          <p className="text-gray-400 text-xs">
            Web Developer • Funtime Editor • Trustworthy Leader | Mumbai, India
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs uppercase tracking-widest text-gray-400 font-medium">
          <a href="#hero" className="hover:text-[#DC143C] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#DC143C] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#DC143C] transition-colors">Skills</a>
          <a href="#education" className="hover:text-[#DC143C] transition-colors">Education</a>
          <a href="#experience" className="hover:text-[#DC143C] transition-colors">Experience</a>
          <a href="#projects" className="hover:text-[#DC143C] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#DC143C] transition-colors">Contact</a>
        </div>

        <div className="text-xs text-gray-500 font-mono">
          © {new Date().getFullYear()} Ahtesham Ahmed Shaikh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

