import { hobbiesIntro, hobbiesSections } from '@/lib/hobbiesContent';
import { ProjectBrief, ProjectPhotobooth } from '@/components/ProjectContent';

export default function HobbiesPage() {
  return (
    <main className="main-page-area">
      <h1 className="title-large text-primary">Hobbies (03)</h1>

      <ProjectBrief paragraphs={[hobbiesIntro]} />

      {hobbiesSections.map(section => (
        <section key={section.title} style={{ marginTop: '4.5rem' }}>
          <h2 className="section-heading">{section.title}</h2>
          <ProjectBrief paragraphs={section.brief} />
          <ProjectPhotobooth rows={section.photobooth} fallbackAlt={section.title} />
        </section>
      ))}
    </main>
  );
}
