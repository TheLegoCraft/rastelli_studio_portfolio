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
    <main style={{ minHeight: '100vh', padding: '120px 5% 80px 5%', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      
      {/* Back Button */}
      <div style={{ marginBottom: '2.5rem' }}>
        <Link href="/work" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          color: 'var(--grey-400)', 
          textDecoration: 'none', 
          fontSize: '0.9rem',
          transition: 'color 0.2s',
          letterSpacing: '0.05em'
        }}>
          ← BACK TO WORK
        </Link>
      </div>

      {/* Title & Year */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="title-large text-primary" style={{ lineHeight: 1.1, marginBottom: '0.75rem', wordBreak: 'break-word', letterSpacing: '-0.02em' }}>
          {project.title}
        </h1>
        <h2 className="heading-2 text-primary" style={{ opacity: 0.9 }}>
          {project.year}
        </h2>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            backgroundColor: '#FFD1C1', // Light salmon/orange
            color: '#3B150A', // Dark brown for contrast
            padding: '5px 12px',
            borderRadius: '2px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            letterSpacing: '0.05em'
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Project Brief */}
      <section style={{ marginBottom: '4rem' }}>
        <h3 className="title-small text-primary" style={{ borderBottom: '1px solid rgba(255, 74, 28, 0.4)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
          Project Brief
        </h3>
        {project.brief.map((paragraph, idx) => (
          <p key={idx} className="body-main" style={{ marginBottom: '1.5rem', lineHeight: '1.7', color: 'var(--grey-200)', fontSize: '1.05rem' }}>
            {paragraph.startsWith('http') ? (
              <a href={paragraph} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-color)', textDecoration: 'underline' }}>{paragraph}</a>
            ) : paragraph}
          </p>
        ))}
      </section>

      {/* Photobooth */}
      {project.photobooth && project.photobooth.length > 0 && (
        <section style={{ marginBottom: '4rem' }}>
          <h3 className="title-small text-primary" style={{ borderBottom: '1px solid rgba(255, 74, 28, 0.4)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
            Photobooth
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {project.photobooth.map((row, rowIdx) => {
              const isFullWidth = row.length === 1;
              return (
                <div key={rowIdx} style={{ 
                  display: 'grid', 
                  gridTemplateColumns: row.map(c => typeof c === 'string' ? c : c.span).join(' '), 
                  gap: '1rem' 
                }}>
                  {row.map((col, colIdx) => {
                    const text = typeof col === 'string' ? null : col.text;
                    const isFirstHero = rowIdx === 0 && colIdx === 0 && project.image;
                    
                    return (
                      <div key={colIdx} style={{
                        backgroundColor: '#161616',
                        borderRadius: '2px',
                        minHeight: isFullWidth ? '420px' : '320px',
                        width: '100%',
                        border: '1px solid #2a2a2a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundImage: isFirstHero ? `url(${project.image})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}>
                        {text ? (
                          <span style={{ color: 'var(--grey-500)', fontWeight: 'bold', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                            {text}
                          </span>
                        ) : !isFirstHero ? (
                          <span style={{ color: '#444444', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                            PHOTOBOOTH ASSET
                          </span>
                        ) : null}
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
        <section style={{ marginBottom: '4rem' }}>
          <h3 className="title-small text-primary" style={{ borderBottom: '1px solid rgba(255, 74, 28, 0.4)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
            Documentation
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {project.documentation.map((doc, idx) => (
              <li key={idx} style={{ marginBottom: '0.75rem' }}>
                <a 
                  href={doc.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="body-main" 
                  style={{ 
                    color: 'var(--secondary-color)', 
                    textDecoration: 'none', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    borderBottom: '1px dotted var(--secondary-color)',
                    paddingBottom: '2px'
                  }}
                >
                  📄 {doc.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

    </main>
  );
}
