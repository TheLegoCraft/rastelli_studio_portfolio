import { projectsContent } from '@/lib/projectsContent';
import Link from 'next/link';

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const normalizedSlug = slug?.toLowerCase();
  const project = projectsContent[slug] || projectsContent[normalizedSlug];

  if (!project) {
    return (
      <main style={{ minHeight: '100vh', padding: '120px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <h1 className="title-large text-primary" style={{ marginBottom: '1rem' }}>Project Not Found</h1>
        <p className="body-main" style={{ color: 'var(--grey-400)', marginBottom: '2rem' }}>
          Sorry, the project &ldquo;{slug}&rdquo; doesn&apos;t have a dedicated page yet.
        </p>
        <Link href="/work" style={{ color: 'var(--primary-color)', textDecoration: 'underline', fontWeight: 'bold' }}>Return to Work</Link>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '120px 5% 100px 5%',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Back Button */}
      <div style={{ marginBottom: '2.5rem' }}>
        <Link
          href="/work"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--grey-400)',
            textDecoration: 'none',
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: '0.9rem',
            transition: 'color 0.2s',
            letterSpacing: '0.05em',
          }}
        >
          ← BACK TO WORK
        </Link>
      </div>

      {/* Title & Date */}
      <div style={{ marginBottom: '2rem' }}>
        <h1
          style={{
            color: 'var(--primary-color)',
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            margin: '0 0 0.5rem 0',
            wordBreak: 'break-word',
          }}
        >
          {project.title}
        </h1>
        <h2
          style={{
            color: 'var(--primary-color)',
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 'clamp(1.4rem, 2.5vw, 2.1rem)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            margin: '0 0 1.5rem 0',
          }}
        >
          {project.date || project.year}
        </h2>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {project.tags.map(tag => (
          <span
            key={tag}
            style={{
              backgroundColor: '#FFD6CC',
              color: '#3B150A',
              padding: '6px 14px',
              borderRadius: '2px',
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project Brief */}
      <section style={{ marginBottom: '3.5rem' }}>
        <h3
          style={{
            color: 'var(--primary-color)',
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
            fontWeight: 700,
            borderBottom: '1px solid #FDD6CD',
            paddingBottom: '0.4rem',
            marginBottom: '1.25rem',
            letterSpacing: '0.03em',
          }}
        >
          Project Brief
        </h3>
        {project.brief.map((paragraph, idx) => (
          <p
            key={idx}
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              marginBottom: '1.4rem',
              lineHeight: '1.65',
              color: '#E5E5E5',
              fontSize: '1rem',
              letterSpacing: '0.01em',
            }}
          >
            {paragraph.startsWith('http') ? (
              <a
                href={paragraph}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--secondary-color)',
                  textDecoration: 'underline',
                  wordBreak: 'break-all',
                }}
              >
                {paragraph}
              </a>
            ) : paragraph}
          </p>
        ))}
      </section>

      {/* Photobooth */}
      {project.photobooth && project.photobooth.length > 0 && (
        <section style={{ marginBottom: '3.5rem' }}>
          <h3
            style={{
              color: 'var(--primary-color)',
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
              fontWeight: 700,
              borderBottom: '1px solid #FDD6CD',
              paddingBottom: '0.4rem',
              marginBottom: '1.5rem',
              letterSpacing: '0.03em',
            }}
          >
            Photobooth
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {project.photobooth.map((row, rowIdx) => {
              const gridCols = row
                .map(col => {
                  if (typeof col === 'string') return col.startsWith('/') ? '1fr' : col;
                  return col.span || '1fr';
                })
                .join(' ');

              return (
                <div
                  key={rowIdx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: gridCols,
                    gap: '1.25rem',
                    alignItems: 'stretch',
                  }}
                >
                  {row.map((item, colIdx) => {
                    const isObj = typeof item === 'object' && item !== null;
                    const src = isObj ? item.src : (typeof item === 'string' && item.startsWith('/') ? item : null);
                    const isVideo = isObj && (item.type === 'video' || (src && /\.(mp4|mov|webm|m4v)$/i.test(src)));
                    const isImage = src && !isVideo;

                    if (isVideo) {
                      return (
                        <div
                          key={colIdx}
                          style={{
                            width: '100%',
                            borderRadius: '6px',
                            overflow: 'hidden',
                            backgroundColor: '#0a0a0a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <video
                            src={src}
                            controls
                            playsInline
                            preload="metadata"
                            style={{
                              width: '100%',
                              height: '100%',
                              maxHeight: '650px',
                              display: 'block',
                              borderRadius: '10px',
                              backgroundColor: '#000',
                            }}
                          />
                        </div>
                      );
                    }

                    if (isImage) {
                      return (
                        <div
                          key={colIdx}
                          style={{
                            width: '100%',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            backgroundColor: item.bg || 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...(item.aspectRatio ? { aspectRatio: item.aspectRatio } : {}),
                          }}
                        >
                          <img
                            src={src}
                            alt={item.alt || project.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              maxHeight: item.maxHeight || (row.length === 1 ? '750px' : undefined),
                              objectFit: item.objectFit || 'cover',
                              objectPosition: item.objectPosition || 'center',
                              display: 'block',
                              borderRadius: '6px',
                            }}
                          />
                        </div>
                      );
                    }

                    // Fallback / placeholder
                    return (
                      <div
                        key={colIdx}
                        style={{
                          backgroundColor: '#161616',
                          borderRadius: '6px',
                          minHeight: row.length === 1 ? '380px' : '280px',
                          width: '100%',
                          border: '1px solid #2a2a2a',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span style={{ color: '#444444', fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                          {isObj && item.text ? item.text : 'PHOTOBOOTH ASSET'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Documentation */}
      {project.documentation && project.documentation.length > 0 && (
        <section style={{ marginBottom: '3.5rem' }}>
          <h3
            style={{
              color: 'var(--primary-color)',
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)',
              fontWeight: 700,
              borderBottom: '1px solid #FDD6CD',
              paddingBottom: '0.4rem',
              marginBottom: '1.25rem',
              letterSpacing: '0.03em',
            }}
          >
            Documentation
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.documentation.map((doc, idx) => (
              <a
                key={idx}
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#E5E5E5',
                  fontFamily: 'var(--font-jetbrains-mono), monospace',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.02em',
                }}
                className="doc-link"
              >
                {doc.name}
              </a>
            ))}
          </div>
          <style>{`
            .doc-link:hover {
              color: var(--secondary-color) !important;
              text-decoration: underline !important;
            }
          `}</style>
        </section>
      )}
    </main>
  );
}

