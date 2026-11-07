import { projectsContent } from '@/lib/projectsContent';

function firstImage(project) {
  return project.photobooth.flat()[0]?.src;
}

function projectStop(title, slug, overrides = {}) {
  const project = projectsContent[slug];

  return {
    title,
    href: `/projects/${slug}?from=highlights`,
    anchor: `highlight-${slug}`,
    tileImage: `/project_icons/${slug}.png`,
    image: firstImage(project),
    hoverLabel: 'See the project →',
    ...overrides,
  };
}

// Clockwise from the top of the wheel. Each body is the wheel's own text, so editing it
// here does not change the project pages.
export const wheelStops = [
  {
    title: 'About me',
    href: '/',
    tileImage: '/francesco.png',
    image: '/projects/Ongoing_PersonalWork/image_6.jpg',
    body: (
      <>
        <p style={{ margin: '0 0 0.6em' }}>
          Hi, I&apos;m <strong>Francesco</strong>. I&apos;ve just graduated from Imperial College London, and I know what I want to be:
        </p>
        <p className="text-primary" style={{ margin: '0 0 0.6em', fontWeight: 'bold' }}>
          A designer for the future.
        </p>
        <p style={{ margin: 0 }}>
          My creativity is fuelled by a love for design, cooking, art and sport. Keep scrolling for my CV, all of my work and some of my favourite projects. Enjoy!
        </p>
      </>
    ),
  },
  {
    title: 'CV',
    href: '/cv',
    tileImage: '/project_icons/cv.png',
    image: '/project_icons/cv.png',
    imagePosition: 'top',
    body: 'My education, experience and skills.',
    linkLabel: 'View my CV →',
  },
  {
    title: 'See all my work',
    href: '/work',
    tileImage: '/project_icons/work-tile.webp',
    image: '/project_icons/work.webp',
    imagePosition: 'top',
    body: 'Every project, from CAD and prototyping to programming and data analysis.',
    linkLabel: 'Go to Work →',
  },
  projectStop('TeamViewer', 'teamviewer', {
    body: "At TeamViewer in Germany, I was one of four UX Researchers, helping designers and product managers find answers through interviews and data. It was a big step forward for my research skills.",
  }),
  projectStop('Hibearnate', 'hibearnate', {
    image: '/projects/2026_Hibearnate/HeroShot_On_V1.png',
    body: "Light through the window was ruining my team's sleep, and 71% of people we surveyed felt the same. So we pitched a window film that blocks up to 97% of light, then set about bringing it to life.",
  }),
  projectStop('Cascados', 'cascados', {
    body: "What could we design for 30 years in the future? We took on a real problem, water quality in Mexico City, and explored how new technology could help solve it.",
  }),
  projectStop('Hydron', 'hydron', {
    body: "A redesigned waterpolo cap that's more comfortable, easier to hear through and more intuitive to use.",
  }),
  projectStop('Cuttleswish', 'cuttleswish', {
    body: "We wanted to help older people cook with less risk of burning their food. That took us through every stage of industrial design, ending in a working MVP.",
  }),
  projectStop('Aerodynamics of a Motorbike', 'aerodynamics-of-a-motorbike', {
    body: "With no specification to follow, I designed a vehicle from scratch using a mix of inspiration and my own ideas, then tested how it performed in SolidWorks Flow Simulation.",
  }),
  {
    title: 'Hobbies',
    href: '/hobbies',
    tileImage: '/project_icons/photography-and-hobbies.png',
    image: '/projects/Ongoing_PersonalWork/image_1.JPG',
    hoverLabel: 'See my hobbies →',
    body: "Backpacking, film photography, waterpolo and cooking: a look at the less professional side of me.",
  },
  projectStop('Portfolio Design', 'designing-and-building-the-portfolio', {
    image: '/projects/Ongoing_Portfolio/Version_3.webp',
    body: "This portfolio is always a work in progress. It started as a Figma PDF, became an Adobe site, and now it's the version you're looking at.",
  }),
  projectStop('Apollo Drones', 'apollo-drones', {
    body: "Apollo Drones aims to help Search and Rescue teams with a critical problem: how do you cover a large area quickly enough to save someone's life?",
  }),
];
