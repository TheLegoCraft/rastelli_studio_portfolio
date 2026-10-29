"use client";

import { useEffect, useRef, useState } from 'react';

export default function WhoAmI() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // We want progress to go from 0 (when top hits bottom of screen) to 1 (when bottom hits top of screen)
      const totalDistance = windowHeight + height;
      const scrolledDistance = windowHeight - top;
      
      let progress = scrolledDistance / totalDistance;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} style={{ display: 'flex', minHeight: '150vh', padding: '100px 5%', position: 'relative' }}>
      
      {/* Left Column: Fading text */}
      <div style={{ flex: 1, position: 'sticky', top: '20vh', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <h2 className="title-small text-primary" style={{ opacity: scrollProgress > 0.1 ? 1 : 0.1, transition: 'opacity 0.4s ease-out' }}>Who am I?</h2>
        <h2 className="title-small text-primary" style={{ opacity: scrollProgress > 0.25 ? 1 : 0.1, transition: 'opacity 0.4s ease-out' }}>Who am I?</h2>
        <h2 className="title-small text-primary" style={{ opacity: scrollProgress > 0.4 ? 1 : 0.1, transition: 'opacity 0.4s ease-out' }}>Who am I?</h2>
        <h2 className="title-small" style={{ color: 'var(--grey-500)', opacity: scrollProgress > 0.55 ? 1 : 0.1, transition: 'opacity 0.4s ease-out' }}>Who am I?</h2>
        <h2 className="title-small" style={{ color: 'var(--grey-600)', opacity: scrollProgress > 0.7 ? 1 : 0.1, transition: 'opacity 0.4s ease-out' }}>Who am I?</h2>
      </div>

      {/* Right Column: Pinned Bio */}
      <div style={{ flex: 1, position: 'sticky', top: '20vh', height: 'fit-content' }}>
        <p className="body-main" style={{ marginBottom: '2rem', maxWidth: '500px' }}>
          Hi there, I'm <span className="text-primary">Francesco</span>. While I may just be a recent graduate from Imperial College London, if you were to ask me what I want to be, I would say: a designer for the future.
        </p>
        <p className="body-main" style={{ maxWidth: '500px' }}>
          Like everybody else, I am driven by <span className="text-primary">passion</span>. Not just passion for design, but passion for cooking, art, sports and a plethora of other things. A passion and hope of a better future which fuels my creativity.
        </p>
      </div>

    </section>
  );
}
