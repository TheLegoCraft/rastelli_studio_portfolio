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
        <p className="body-main text-grey" style={{ marginBottom: '2rem' }}>
          Sorry, the project &ldquo;{slug}&rdquo; doesn&apos;t have a dedicated page yet.
        </p>
        <Link href="/work" className="body-main text-link">Return to Work</Link>
      </main>
    );
  }

  // The home page Highlights mark their links, so the button can go back to the card the visitor came from
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
          className="text-small text-grey"
        >
          {fromHighlights ? '← BACK TO THE HIGHLIGHTS' : '← BACK TO WORK'}
        </Link>
      </div>

      {/* Title & Date */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="title-large text-primary" style={{ marginBottom: '0.5rem' }}>{project.title}</h1>
        <h2 className="heading-2 text-primary">{project.date || project.year}</h2>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {project.tags.map(tag => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>

      {/* Project Brief */}
      <section style={{ marginBottom: '3.5rem' }}>
        <h3 className="section-heading">Project Brief</h3>
        <ProjectBrief paragraphs={project.brief} />
      </section>

      {/* Photobooth */}
      {project.photobooth && project.photobooth.length > 0 && (
        <section style={{ marginBottom: '3.5rem' }}>
          <h3 className="section-heading">Photobooth</h3>

          <ProjectPhotobooth rows={project.photobooth} fallbackAlt={project.title} />
        </section>
      )}

      {/* Documentation */}
      {project.documentation && project.documentation.length > 0 && (
        <section style={{ marginBottom: '3.5rem' }}>
          <h3 className="section-heading">Documentation</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.documentation.map((doc, idx) => (
              <a
                key={idx}
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="body-main doc-link"
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

