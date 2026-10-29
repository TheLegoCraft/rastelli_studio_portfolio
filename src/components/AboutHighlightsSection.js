"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function FadingText({ text }) {
  const ref = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let isVisible = false;

    const updateOpacity = () => {
      if (!ref.current || !isVisible) return;
      const rect = ref.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      const distance = Math.abs(elementCenter - viewportCenter);
      const maxDistance = window.innerHeight / 1.5; // Wider fade radius to ensure visibility

      let newOpacity = 1 - (distance / maxDistance);
      newOpacity = Math.max(0.1, Math.min(1, newOpacity)); // Minimum 10% opacity

      ref.current.style.opacity = newOpacity;

      if (newOpacity > 0.9) {
        ref.current.style.color = 'var(--primary-color)';
      } else {
        ref.current.style.color = '#666666';
      }

      animationFrameId = requestAnimationFrame(updateOpacity);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            animationFrameId = requestAnimationFrame(updateOpacity);
          }
        } else {
          isVisible = false;
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
          }
          if (ref.current) {
            ref.current.style.opacity = 0.1;
            ref.current.style.color = '#666666';
          }
        }
      });
    }, { rootMargin: '100% 0px 100% 0px' }); // Load and animate elements even when they're a full screen away

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      isVisible = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <h2
      ref={ref}
      className="title-small"
      style={{
        color: '#666666',
        opacity: 0.1,
        transition: 'color 0.2s',
        marginBottom: '2rem',
        whiteSpace: 'nowrap',
        willChange: 'opacity, color'
      }}
    >
      {text}
    </h2>
  );
}

function ProjectTile({ title, link }) {
  return (
    <Link href={link} style={{
      aspectRatio: '1 / 1',
      backgroundColor: '#E0E0E0', // Light grey solid color matching the screenshot
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      position: 'relative',
      width: '100%',
    }}>
      <h3 className="heading-1 text-primary" style={{ textAlign: 'center', padding: '1rem', margin: 0, fontWeight: 'normal' }}>
        {title}
      </h3>
    </Link>
  );
}

export default function AboutHighlightsSection() {
  const whoAmIItems = Array.from({ length: 37 }).map(() => "Who am I?");

  return (
    <section style={{ display: 'flex', width: '100%', padding: '20vh 5% 0 5%', position: 'relative', gap: '5%', zIndex: 10 }}>

      {/* Left Column: Scrolling Who Am I */}
      <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', paddingLeft: '10%', paddingTop: '5rem', paddingBottom: '50vh' }}>
        {whoAmIItems.map((text, i) => (
          <FadingText key={i} text={text} />
        ))}
      </div>

      {/* Middle Column: Sticky Bio */}
      <div style={{ flex: 1.2, position: 'relative', paddingTop: '25vh' }}>
        <div style={{ position: 'sticky', top: '50vh', transform: 'translateY(-50%)', paddingRight: '1rem' }}>
          
          {/* Image */}
          <div style={{ 
            width: '240px', 
            height: '240px', 
            borderRadius: '50%', 
            margin: '0 auto 2rem auto', // Centered horizontally
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid var(--grey-600)',
          }}>
            <Image 
              src="/francesco.png" 
              alt="Francesco Rastelli" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>

          <p className="body-main text-white" style={{ marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
            Hi there, I'm <span style={{ fontWeight: 'bold' }}>Francesco</span>. While I may just be a recent graduate from Imperial College London, if you were to ask me what I want to be, I would say:
          </p>
          <p className="body-main text-primary" style={{ marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
            A designer for the future.
          </p>
          <p className="body-main text-white" style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
            Like everybody else, I am driven by <span style={{ fontWeight: 'bold' }}>passion</span>. Not just passion for design, but passion for cooking, art, sports and a plethora of other things. A passion and hope of a better future which fuels my creativity.
          </p>
        </div>
      </div>

      {/* Right Column: Highlights */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Sticky Header */}
        <div style={{
          position: 'sticky',
          top: 0,
          paddingTop: '5rem', // Pushes the text down to leave space for the global logo
          backgroundColor: 'var(--bg-color)', // Solid background completely hides tiles scrolling underneath
          zIndex: 20,
          paddingBottom: '0.5rem',
        }}>
          <h2 className="title-small text-primary" style={{ margin: 0, fontWeight: 'normal', textTransform: 'uppercase' }}>Highlights</h2>
          <hr style={{ borderColor: 'white', margin: '0.5rem 0 0 0', borderStyle: 'solid', borderWidth: '1px' }} />
        </div>

        {/* Scrollable Project List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem', paddingBottom: '50vh' }}>
          <ProjectTile title="TeamViewer" link="/projects/teamviewer" />
          <ProjectTile title="ERO" link="/projects/ero" />
          <ProjectTile title="Master's Thesis" link="/projects/masters-thesis" />
          <ProjectTile title="APOLLO" link="/projects/apollo" />
          <ProjectTile title="CV" link="/cv" />
          <ProjectTile title="See all my work" link="/work" />
        </div>
      </div>

    </section>
  );
}
