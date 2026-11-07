import { projectsContent } from '@/lib/projectsContent';
import Link from 'next/link';
import { ProjectBrief, ProjectPhotobooth } from '@/components/ProjectContent';

export default async function ProjectPage({ params, searchParams }) {
  const { slug } = await params;
  const { from } = await searchParams;
  const normalizedSlug = slug?.toLowerCase();
  const project = projectsContent[slug] || projectsContent[normalizedSlug];

  if (!project) {
    return (
      <main className="main-page-area" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1 className="title-large text-primary">Project Not Found</h1>
        <p className="body-main" style={{ color: 'var(--grey-400)', marginBottom: '2rem' }}>
          Sorry, the project &ldquo;{slug}&rdquo; doesn&apos;t have a dedicated page yet.
        </p>
        <Link href="/work" style={{ color: 'var(--primary-color)', textDecoration: 'underline', fontWeight: 'bold' }}>Return to Work</Link>
      </main>
    );
  }

  // The home wheel marks its links, so the button can go back to the tile the visitor came from
  const fromHighlights = from === 'highlights';

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
          href={fromHighlights ? `/#highlight-${normalizedSlug}` : '/work'}
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
          {fromHighlights ? '← BACK TO THE HIGHLIGHTS' : '← BACK TO WORK'}
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
        <ProjectBrief paragraphs={project.brief} />
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

          <ProjectPhotobooth rows={project.photobooth} fallbackAlt={project.title} />
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
        </section>
      )}
    </main>
  );
}

