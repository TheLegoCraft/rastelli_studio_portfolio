import { hobbiesIntro, hobbiesSections } from '@/lib/hobbiesContent';
import { ProjectBrief, ProjectPhotobooth } from '@/components/ProjectContent';

export default function HobbiesPage() {
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
      <h1
        style={{
          color: 'var(--primary-color)',
          fontFamily: 'var(--font-jetbrains-mono), monospace',
          fontSize: 'clamp(2.4rem, 5vw, 4rem)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '0.01em',
          textTransform: 'uppercase',
          margin: '0 0 3rem 0',
        }}
      >
        Hobbies (03)
      </h1>

      <ProjectBrief paragraphs={[hobbiesIntro]} />

      {hobbiesSections.map(section => (
        <section key={section.title} style={{ marginTop: '4.5rem' }}>
          <h2
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
            {section.title}
          </h2>
          <ProjectBrief paragraphs={section.brief} />
          <ProjectPhotobooth rows={section.photobooth} fallbackAlt={section.title} />
        </section>
      ))}
    </main>
  );
}
