"use client";

import { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { text: 'ABOUT (00)', link: '/', bgColor: '#ACE8FA' },
  { text: 'CV (01)', link: '/cv', bgColor: '#89DEFA' },
  { text: 'WORK (02)', link: '/work', bgColor: '#6ED5F9' },
  { text: 'HOBBIES (03)', link: '/hobbies', bgColor: '#5DCCFA' },
  // Darker text keeps this row at 3:1 contrast on its darker background
  { text: 'CONTACT (04)', link: '/contact', bgColor: '#4AA2C7', textColor: '#245062' },
];
const NAV_TEXT_COLOR = '#275364';

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
          transition: 'color 0.3s, opacity 0.3s',
          opacity: isOpen ? 0 : 1, // The menu covers the page, logo included
          pointerEvents: isOpen ? 'none' : 'auto', // Re-enable pointer events for the link
        }}>
          rastelli.studio
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
            gap: '6px',
            padding: '10px',
            pointerEvents: 'auto', // Re-enable pointer events for the button
          }}
          aria-label="Toggle Navigation"
        >
          <div style={{ width: '30px', height: '3px', backgroundColor: isOpen ? NAV_TEXT_COLOR : 'var(--secondary-color)', transition: '0.3s ease', transform: isOpen ? 'rotate(45deg) translate(6px, 6.5px)' : 'none' }} />
          <div style={{ width: '30px', height: '3px', backgroundColor: isOpen ? NAV_TEXT_COLOR : 'var(--secondary-color)', transition: '0.3s ease', opacity: isOpen ? 0 : 1 }} />
          <div style={{ width: '30px', height: '3px', backgroundColor: isOpen ? NAV_TEXT_COLOR : 'var(--secondary-color)', transition: '0.3s ease', transform: isOpen ? 'rotate(-45deg) translate(6px, -6.5px)' : 'none' }} />
        </button>
      </header>

      {/* Navigation Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-100%',
          width: '100%',
          height: '100dvh',
          zIndex: 90,
          transition: 'right 0.6s cubic-bezier(0.77, 0, 0.175, 1)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isOpen ? '-10px 0 30px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        {NAV_ITEMS.map(item => (
          <NavPanel key={item.link} textColor={NAV_TEXT_COLOR} {...item} onClick={() => setIsOpen(false)} />
        ))}
      </div>
    </>
  );
}

function NavPanel({ text, bgColor, textColor, link, onClick }) {
  return (
    <Link href={link} onClick={onClick} style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '2rem',
      backgroundColor: bgColor,
      textDecoration: 'none',
      color: textColor,
    }}>
      <div style={{
        whiteSpace: 'nowrap',
        fontSize: 'clamp(1.75rem, min(10vw, 11vh), 6rem)',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {text}
      </div>
    </Link>
  );
}
