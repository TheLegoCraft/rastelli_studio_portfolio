"use client";

import { useEffect, useRef } from 'react';

export default function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Force play on mount to bypass some browser autoplay restrictions
      videoRef.current.play().catch(err => console.error("Video autoplay failed:", err));
    }
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Changed from -1 to 0 to ensure it's not hidden behind the body background
        opacity: 0.4,
        pointerEvents: 'none',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/BackgroundVideoPortfolioInversed.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
