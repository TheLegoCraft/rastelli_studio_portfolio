"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header Container for perfect vertical alignment */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '2rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        pointerEvents: 'none', // Allow clicking through empty space
      }}>
        {/* Home Logo */}
        <Link href="/" onClick={() => setIsOpen(false)} style={{
          textDecoration: 'none',
          color: 'var(--text-color)',
          fontWeight: 'bold',
          fontSize: '1.5rem',
          letterSpacing: '0.05em',
          transition: 'color 0.3s',
          pointerEvents: 'auto', // Re-enable pointer events for the link
        }}>
          thingamabobjig
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '10px',
            pointerEvents: 'auto', // Re-enable pointer events for the button
          }}
          aria-label="Toggle Navigation"
        >
          <div style={{ width: '35px', height: '3px', backgroundColor: 'var(--text-color)', transition: '0.4s', transform: isOpen ? 'rotate(45deg) translate(8px, 8px)' : 'none' }} />
          <div style={{ width: '35px', height: '3px', backgroundColor: 'var(--text-color)', transition: '0.4s', opacity: isOpen ? 0 : 1 }} />
          <div style={{ width: '35px', height: '3px', backgroundColor: 'var(--text-color)', transition: '0.4s', transform: isOpen ? 'rotate(-45deg) translate(7px, -8px)' : 'none' }} />
        </button>
      </header>

      {/* Navigation Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-100%',
          width: '100%',
          maxWidth: '400px', // Adjusted to look like the design overlapping panels
          height: '100vh',
          zIndex: 90,
          transition: 'right 0.6s cubic-bezier(0.77, 0, 0.175, 1)',
          display: 'flex',
          boxShadow: isOpen ? '-10px 0 30px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <NavPanel text="CV (01)" bgColor="#9EEAFD" textColor="#0A4259" link="/cv" onClick={() => setIsOpen(false)} />
        <NavPanel text="WORK (02)" bgColor="#3FD8FE" textColor="#0A4259" link="/work" onClick={() => setIsOpen(false)} />
        <NavPanel text="CONTACT (03)" bgColor="#0EA6CD" textColor="#0A4259" link="/contact" onClick={() => setIsOpen(false)} />
      </div>
    </>
  );
}

function NavPanel({ text, bgColor, textColor, link, onClick }) {
  return (
    <Link href={link} onClick={onClick} style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: '2rem',
      backgroundColor: bgColor,
      textDecoration: 'none',
      color: textColor,
      transition: 'flex 0.3s',
      position: 'relative',
      borderLeft: '1px solid rgba(0,0,0,0.05)',
      overflow: 'hidden'
    }}>
      <div style={{
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        whiteSpace: 'nowrap',
        fontSize: '5rem', // Massively increased to fill the width of the menu boxes
        lineHeight: 0.8,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {text}
      </div>
    </Link>
  );
}
