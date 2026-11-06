import Image from 'next/image';

export default function BackgroundVideo() {
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
      {/* Loops forever via the GIF's own loop setting; unoptimized keeps it animated */}
      <Image
        src="/BackgroundVideoPortfolioInversed.gif"
        alt=""
        fill
        unoptimized
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
