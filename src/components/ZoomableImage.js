"use client";

import { useRef } from 'react';

// A gallery image that opens full-screen when clicked.
// Uses a native <dialog> so Escape, focus handling and the top layer come for free.
export default function ZoomableImage({ src, alt, style }) {
  const dialogRef = useRef(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <>
      {/* A plain <img> on purpose: the gallery sizes to each image's natural height, which next/image can't do
          without known dimensions, and the static export has no image optimiser for it to use anyway */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        role="button"
        tabIndex={0}
        aria-label={`Enlarge image: ${alt}`}
        onClick={open}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open();
          }
        }}
        className="zoomable-image"
        style={style}
      />

      <dialog ref={dialogRef} className="image-lightbox" onClick={close} aria-label={alt}>
        <button type="button" className="image-lightbox__close" onClick={close} aria-label="Close">
          ✕
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="image-lightbox__img" />
      </dialog>
    </>
  );
}
