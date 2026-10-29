import { projectsContent } from '@/lib/projectsContent';
import Link from 'next/link';

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projectsContent[slug];

  if (!project) {
    return (
      <main style={{ minHeight: '100vh', padding: '100px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
        <h1 className="title-large text-primary">Project Not Found</h1>
        <p className="body-main">Sorry, the project "{slug}" doesn't have a dedicated page yet.</p>
        <Link href="/work" style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>Return to Work</Link>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', padding: '100px 5%', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      
      {/* Title & Year */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="title-large text-primary" style={{ lineHeight: 1, marginBottom: '0.5rem', wordBreak: 'break-word' }}>{project.title}</h1>
        <h2 className="heading-2 text-primary">{project.year}</h2>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            backgroundColor: '#FFD1C1', // Light salmon/orange
            color: '#3B150A', // Dark brown for contrast
            padding: '6px 14px',
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
        <h3 className="title-small text-primary" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.4)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Project Brief</h3>
        {project.brief.map((paragraph, idx) => (
          <p key={idx} className="body-main" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            {paragraph.startsWith('http') ? (
              <a href={paragraph} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'underline' }}>{paragraph}</a>
            ) : paragraph}
          </p>
        ))}
      </section>

      {/* Photobooth */}
      <section style={{ marginBottom: '4rem' }}>
        <h3 className="title-small text-primary" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.4)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Photobooth</h3>
        
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
                  const span = typeof col === 'string' ? col : col.span;
                  const text = typeof col === 'string' ? null : col.text;
                  
                  return (
                    <div key={colIdx} style={{
                      backgroundColor: 'var(--grey-300)', // Light grey placeholder
                      borderRadius: '4px',
                      minHeight: isFullWidth ? '500px' : '400px',
                      width: '100%',
                      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {text && <span style={{ color: 'var(--grey-600)', fontWeight: 'bold', fontSize: '1rem', letterSpacing: '0.1em' }}>{text}</span>}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>

      {/* Documentation */}
      {project.documentation && project.documentation.length > 0 && (
        <section style={{ marginBottom: '4rem' }}>
          <h3 className="title-small text-primary" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.4)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Documentation</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {project.documentation.map((doc, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>
                <a href={doc.link} target="_blank" rel="noopener noreferrer" className="body-main" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
                  {doc.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

    </main>
  );
}
