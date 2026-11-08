import { Suspense } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { projectsContent } from '@/lib/projectsContent';
import { withBasePath } from '@/lib/basePath';
import { ProjectBrief, ProjectPhotobooth } from '@/components/ProjectContent';
import ProjectBackLink from '@/components/ProjectBackLink';

// Old project pages whose content now lives on the Hobbies page
const MOVED_TO_HOBBIES = ['cycling-iceland-and-trans-european', 'photography-and-hobbies'];

// Every page is built ahead of time; any other slug gets the 404 page
export const dynamicParams = false;

export function generateStaticParams() {
  return [...Object.keys(projectsContent), ...MOVED_TO_HOBBIES].map(slug => ({ slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  if (MOVED_TO_HOBBIES.includes(slug)) redirect('/hobbies');

  const project = projectsContent[slug];

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
        <Suspense fallback={<Link href="/work" className="text-small text-grey">← BACK TO WORK</Link>}>
          <ProjectBackLink slug={slug} />
        </Suspense>
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
                href={withBasePath(doc.link)}
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

