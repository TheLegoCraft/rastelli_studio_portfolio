import WorkGrid from '@/components/WorkGrid';
import { projectsContent } from '@/lib/projectsContent';

// Only the categories go to the browser, not the full text of every project
const categoriesBySlug = Object.fromEntries(
  Object.entries(projectsContent).map(([slug, project]) => [slug, project.categories])
);

export default function WorkPage() {
  return <WorkGrid categoriesBySlug={categoriesBySlug} />;
}
