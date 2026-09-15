import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useGSAP(() => {
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xkjgwwav', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-16 md:py-24 px-4 sm:px-6 md:px-16 w-full bg-zinc-950/90 relative border-t border-red-950/30 overflow-hidden section-vignette"
    >
      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[#DC143C] font-semibold text-sm uppercase tracking-widest px-3 py-1 bg-red-950/40 rounded-full border border-red-900/30">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-wide">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Have a project, collaboration idea, or role in mind? Reach out directly or drop a message!
          </p>
        </div>

        {/* Contact Info Cards Horizontal Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-red-900/20 hover:border-[#DC143C]/40 transition-colors">
            <div className="w-11 h-11 rounded-full bg-[#DC143C]/20 border border-[#DC143C]/40 flex items-center justify-center text-[#DC143C] text-xl font-bold shrink-0">
              ✉
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Direct Email</div>
              <a href="mailto:ahteshamofficial357@gmail.com" className="text-xs sm:text-sm font-semibold text-white hover:text-[#DC143C] transition-colors truncate block">
                ahteshamofficial357@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-red-900/20 hover:border-[#DC143C]/40 transition-colors">
            <div className="w-11 h-11 rounded-full bg-[#DC143C]/20 border border-[#DC143C]/40 flex items-center justify-center text-[#DC143C] text-xl font-bold shrink-0">
              📞
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Phone Number</div>
              <a href="tel:+919145002399" className="text-xs sm:text-sm font-semibold text-white hover:text-[#DC143C] transition-colors">
                +91 9145002399
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl glass-card border border-red-900/20 hover:border-[#DC143C]/40 transition-colors">
            <div className="w-11 h-11 rounded-full bg-[#DC143C]/20 border border-[#DC143C]/40 flex items-center justify-center text-[#DC143C] text-xl font-bold shrink-0">
              📍
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Location</div>
              <div className="text-xs sm:text-sm font-semibold text-white">
                Mumbai, India
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div ref={formRef} className="w-full">
          <div className="p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl glass-card border border-red-900/30 text-left space-y-6">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#DC143C] text-white text-3xl font-bold flex items-center justify-center mx-auto glow-box-crimson">
                  ✓
                </div>
                <h3 className="text-3xl font-bold text-white uppercase tracking-wider">MESSAGE SENT SUCCESSFULLY.</h3>
                <p className="text-gray-400 text-sm">
                  Thank you for reaching out, Ahtesham will respond to your email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-950/80 border border-[#DC143C] text-white text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="text-xs uppercase tracking-wider text-gray-300 font-medium">Your Name</label>
                    <input
                      id="name-input"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#DC143C] transition-colors text-sm disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email-input" className="text-xs uppercase tracking-wider text-gray-300 font-medium">Your Email</label>
                    <input
                      id="email-input"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#DC143C] transition-colors text-sm disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject-input" className="text-xs uppercase tracking-wider text-gray-300 font-medium">Subject</label>
                  <input
                    id="subject-input"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="MERN Stack / Web Engineering Opportunity"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#DC143C] transition-colors text-sm disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message-input" className="text-xs uppercase tracking-wider text-gray-300 font-medium">Message</label>
                  <textarea
                    id="message-input"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#DC143C] transition-colors resize-none text-sm disabled:opacity-50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#DC143C] hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold uppercase tracking-wider text-sm transition-all duration-300 glow-box-crimson flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'SENDING...' : 'Send Message ➔'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/Ahtesham-official/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-gray-300 hover:border-[#DC143C] hover:text-[#DC143C] transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/ahtesham-ahmed-shaikh-722930381"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-gray-300 hover:border-[#DC143C] hover:text-[#DC143C] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.instagram.com/ahtesham_codes?igsh=Y2Q3MDdjemlncGpm"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-gray-300 hover:border-[#DC143C] hover:text-[#DC143C] transition-colors"
          >
            Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
