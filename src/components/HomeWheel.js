"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TILE_BAR_COLOR, TILE_BRIGHTNESS, TILE_RADIUS, tileBarStyle, tileTitleStyle } from '@/lib/tileStyle';

const TILE = 'var(--wheel-tile)';
const WHEEL = `calc(${TILE} / 0.23)`;
const RADIUS = `calc((${WHEEL} - ${TILE}) / 2)`;
const HOLE = `calc(${WHEEL} - 2 * ${TILE})`;
const RING = `calc(${HOLE} * 0.95)`; // Slightly inside the hole, clear of the tiles
const WHEEL_TOP = '66dvh';
const WHEEL_VISIBLE_SHARE = 0.34;
const PANEL_BOTTOM = 'calc(38dvh + 0.75rem)';
const FEATURE_BG = '#D9D9D9';
const SCROLL_PER_STOP = '70vh';
// Extra scroll on About me before the wheel starts turning, as a share of the screen height
const START_HOLD = 0.6;

// Same result as the /work grid: repeat(auto-fill, minmax(200px, 1fr)), 1.25rem gap,
// inside a 1000px max-width page with 5% side padding
function workTileSize(pageWidth) {
  const gap = 20;
  const content = Math.min(1000, pageWidth) - pageWidth * 0.1;
  const columns = Math.max(1, Math.floor((content + gap) / (200 + gap)));
  return (content - (columns - 1) * gap) / columns;
}

// Scroll distance held on the first stop, and the distance over which the wheel turns
function scrollRange(sectionHeight) {
  const hold = window.innerHeight * START_HOLD;
  return { hold, turning: sectionHeight - window.innerHeight - hold };
}

// Settles the wheel on each stop, so a tile rests at the top rather than sliding past it
function settle(position) {
  const stop = Math.floor(position);
  const t = position - stop;
  return stop + t * t * (3 - 2 * t);
}

export default function HomeWheel({ stops }) {
  const sectionRef = useRef(null);
  const wheelRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = null;
    let current = 0;

    const render = () => {
      // React clears refs before running effect cleanup, so a queued frame can land in between
      if (!sectionRef.current) return;

      const { top, height } = sectionRef.current.getBoundingClientRect();
      const { hold, turning } = scrollRange(height);
      const progress = Math.min(Math.max((-top - hold) / turning, 0), 1);
      const target = settle(progress * (stops.length - 1));

      // Ease towards the target so notched mouse wheels still turn smoothly
      current += (target - current) * 0.15;
      if (Math.abs(target - current) < 0.001) current = target;

      wheelRef.current.style.transform = `rotate(${-current * (360 / stops.length)}deg)`;
      setActive(Math.round(progress * (stops.length - 1)));

      frame = current === target ? null : requestAnimationFrame(render);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(render);
    };

    const onResize = () => {
      // Never taller than the visible part of the wheel, so the title bar stays on screen
      const tallest = window.innerHeight * WHEEL_VISIBLE_SHARE - 16;
      const tile = Math.min(workTileSize(document.body.clientWidth), tallest);
      sectionRef.current.style.setProperty('--wheel-tile', `${tile}px`);
      onScroll();
    };

    onResize();
    // Capture phase, because the scrolling element here can be <body> rather than the window
    window.addEventListener('scroll', onScroll, { capture: true, passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('resize', onResize);
    };
  }, [stops.length]);

  const scrollToStop = (index) => {
    const { top, height } = sectionRef.current.getBoundingClientRect();
    const { hold, turning } = scrollRange(height);
    const target = index === 0 ? 0 : hold + (index / (stops.length - 1)) * turning;

    // This site scrolls on <body> rather than the window
    const scroller = document.body.scrollHeight > document.body.clientHeight ? document.body : window;
    scroller.scrollBy({ top: top + target, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Selected work"
      style={{ '--wheel-tile': '272px', height: `calc(100dvh + ${START_HOLD * 100}vh + ${stops.length - 1} * ${SCROLL_PER_STOP})`, width: '100%', position: 'relative' }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100dvh', overflow: 'hidden' }}>

        {/* Highlighted stop */}
        <div
          style={{
            position: 'absolute',
            top: '5.5rem',
            bottom: PANEL_BOTTOM,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'max(min(90vw, 560px), 46vw)',
          }}
        >
          {stops.map((stop, index) => (
            <StopPanel key={stop.title} stop={stop} isActive={index === active} isFirst={index === 0} />
          ))}
        </div>

        {/* Wheel */}
        <div
          ref={wheelRef}
          style={{
            position: 'absolute',
            top: WHEEL_TOP,
            left: '50%',
            width: WHEEL,
            height: WHEEL,
            marginLeft: `calc(${WHEEL} / -2)`,
            willChange: 'transform',
          }}
        >
          {/* Scroll hint in the hole at the centre, turning with the wheel. Not optimized: it's a
              small icon, and this way edits to the file show up straight away */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: RING,
              height: RING,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          >
            <Image src="/ScrollWheel.png" alt="" fill unoptimized />
          </div>

          {stops.map((stop, index) => (
            <WheelTile
              key={stop.title}
              stop={stop}
              angle={index * (360 / stops.length)}
              isActive={index === active}
              onSelect={() => scrollToStop(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StopPanel({ stop, isActive, isFirst }) {
  return (
    <article
      aria-hidden={!isActive}
      inert={!isActive}
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: stop.feature ? FEATURE_BG : '#0a0a0a',
        opacity: isActive ? 1 : 0,
        transition: 'opacity 0.35s ease',
      }}
    >
      <Link
        href={stop.href}
        aria-label={stop.title}
        style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {stop.image && (
          <Image
            src={stop.image}
            alt=""
            fill
            loading={isFirst ? 'eager' : 'lazy'}
            sizes="(max-width: 1200px) 90vw, 46vw"
            style={{ objectFit: 'cover', objectPosition: stop.imagePosition || 'center' }}
          />
        )}
        {stop.feature && (
          <span className="text-primary" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)', fontWeight: 500 }}>{stop.title}</span>
        )}
      </Link>

      {/* Text overlaid on the image, on a dark band */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: '0.8rem 1.25rem',
          backgroundColor: TILE_BAR_COLOR,
          color: '#ffffff',
          fontSize: 'clamp(0.8rem, 1.05vw, 1.1rem)',
          lineHeight: 1.4,
        }}
      >
        {stop.body}
        {stop.linkLabel && (
          <Link href={stop.href} className="text-secondary" style={{ display: 'block', marginTop: '0.4rem', fontWeight: 700 }}>
            {stop.linkLabel}
          </Link>
        )}
      </div>
    </article>
  );
}

function WheelTile({ stop, angle, isActive, onSelect }) {
  const brightness = isActive ? TILE_BRIGHTNESS.active : TILE_BRIGHTNESS.rest;

  return (
    <Link
      href={stop.href}
      tabIndex={-1}
      onClick={(event) => {
        // Only the selected tile opens its page; any other turns the wheel to it
        if (isActive) return;
        event.preventDefault();
        onSelect();
      }}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: TILE,
        height: TILE,
        marginTop: `calc(${TILE} / -2)`,
        marginLeft: `calc(${TILE} / -2)`,
        transform: `rotate(${angle}deg) translateY(calc(${RADIUS} * -1))`,
        zIndex: isActive ? 2 : 1,
        borderRadius: TILE_RADIUS,
        overflow: 'hidden',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Same treatment as a /work tile: dimmed at rest, full exposure when selected */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: stop.feature ? FEATURE_BG : undefined,
          backgroundImage: stop.tileImage ? `url("${stop.tileImage}")` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: `brightness(${brightness})`,
          transition: 'filter 0.3s ease',
        }}
      />
      <div style={tileBarStyle}>
        <span style={tileTitleStyle}>{stop.title}</span>
      </div>
    </Link>
  );
}
