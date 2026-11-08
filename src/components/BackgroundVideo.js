import { withBasePath } from '@/lib/basePath';

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
      {/* muted + playsInline are required for browsers to allow autoplay */}
      <video
        src={withBasePath("/BackgroundVideoPortfolioInversed.mp4")}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
