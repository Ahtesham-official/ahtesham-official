import React, { useRef, useEffect, useState } from 'react';

const Navbar = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Scroll-based width shrink — rAF + direct style mutation (no re-renders)
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let rafId = null;
    let lastScroll = -1;

    const MAX_SCROLL = 180;
    const WIDE_PCT = 96;
    const SLIM_PCT = 60;
    const WIDE_PX = 40;
    const SLIM_PX = 24;
    const WIDE_PY = 20;
    const SLIM_PY = 12;
    const WIDE_RADIUS = 16;
    const SLIM_RADIUS = 9999;

    const update = () => {
      const scrollY = window.scrollY;
      if (scrollY === lastScroll) return;
      lastScroll = scrollY;

      const t = Math.min(scrollY / MAX_SCROLL, 1);

      const widthPct = WIDE_PCT + (SLIM_PCT - WIDE_PCT) * t;
      const px = WIDE_PX + (SLIM_PX - WIDE_PX) * t;
      const py = WIDE_PY + (SLIM_PY - WIDE_PY) * t;
      const radius = WIDE_RADIUS + (SLIM_RADIUS - WIDE_RADIUS) * t;
      const bgOpacity = 0.55 + t * 0.35;
      const shadowA = t * 0.22;

      nav.style.width = `${widthPct}%`;
      nav.style.paddingLeft = `${px}px`;
      nav.style.paddingRight = `${px}px`;
      nav.style.paddingTop = `${py}px`;
      nav.style.paddingBottom = `${py}px`;
      nav.style.borderRadius = `${radius}px`;
      nav.style.backgroundColor = `rgba(9,9,11,${bgOpacity})`;
      nav.style.boxShadow = t > 0.05
        ? `0 8px 28px rgba(220,20,60,${shadowA}), 0 2px 10px rgba(0,0,0,${shadowA * 1.5})`
        : 'none';
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest('#mobile-menu') && !e.target.closest('#hamburger-btn')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  return (
    <>
      {/* Full-width fixed outer — flexbox centres the inner nav */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none">
        <nav
          ref={navRef}
          className="pointer-events-auto flex items-center justify-between
                     border border-red-900/25 backdrop-blur-xl h-16 md:h-20"
          style={{
            width: '96%',
            paddingLeft: '24px',
            paddingRight: '24px',
            borderRadius: '16px',
            backgroundColor: 'rgba(9,9,11,0.55)',
            boxShadow: 'none',
          }}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
            <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#DC143C] flex items-center justify-center
                             font-extrabold text-black text-lg md:text-xl group-hover:scale-110
                             transition-transform duration-300">
              A
            </span>
            <span className="text-base md:text-xl font-bold tracking-wider text-white
                             group-hover:text-[#DC143C] transition-colors duration-300">
              AHTESHAM
            </span>
          </a>

          {/* Nav Links — hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs xl:text-sm uppercase
                          tracking-wider text-gray-200 font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#DC143C] transition-colors duration-300 relative py-1
                           after:content-[''] after:absolute after:bottom-0 after:left-0
                           after:w-0 after:h-[2px] after:bg-[#DC143C]
                           hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side: CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex shrink-0 px-4 md:px-6 py-2 md:py-2.5 rounded-full border border-[#DC143C]
                         text-[#DC143C] hover:bg-[#DC143C] hover:text-white
                         transition-all duration-300 text-xs md:text-sm font-semibold tracking-wider uppercase"
            >
              Let's Talk
            </a>

            {/* Hamburger — visible below lg */}
            <button
              id="hamburger-btn"
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-9 h-9 rounded-lg
                         border border-zinc-800 bg-zinc-900/80 hover:border-[#DC143C]/60 transition-all"
              aria-label="Toggle navigation menu"
            >
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed top-[84px] left-0 right-0 z-40 flex justify-center px-4 lg:hidden"
        >
          <div className="w-full max-w-sm rounded-2xl border border-red-900/30 backdrop-blur-xl
                          bg-zinc-950/95 overflow-hidden shadow-2xl shadow-black/60">
            <nav className="flex flex-col">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-6 py-4 text-sm font-semibold uppercase tracking-widest text-gray-200
                              hover:text-[#DC143C] hover:bg-red-950/20 transition-all duration-200
                              ${idx !== navLinks.length - 1 ? 'border-b border-zinc-800/60' : ''}`}
                >
                  <span className="text-[#DC143C] font-mono text-xs mr-3">0{idx + 1}</span>
                  {link.name}
                </a>
              ))}
              <div className="p-4 border-t border-zinc-800/60">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full py-3 text-center rounded-full bg-[#DC143C] hover:bg-red-700
                             text-white text-sm font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  Let's Talk
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
