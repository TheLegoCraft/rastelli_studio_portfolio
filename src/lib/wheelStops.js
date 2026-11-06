import { projectsContent } from '@/lib/projectsContent';

function firstImage(project) {
  return project.photobooth.flat()[0]?.src;
}

function projectStop(title, slug, overrides = {}) {
  const project = projectsContent[slug];

  return {
    title,
    href: `/projects/${slug}`,
    tileImage: `/project_icons/${slug}.png`,
    image: firstImage(project),
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
          Hi there, I&apos;m <strong>Francesco</strong>. While I may just be a recent graduate from Imperial College London, if you were to ask me what I want to be, I would say:
        </p>
        <p className="text-primary" style={{ margin: '0 0 0.6em', fontWeight: 'bold' }}>
          A designer for the future.
        </p>
        <p style={{ margin: 0 }}>
          Like everybody else, I am driven by <strong>passion</strong>. Not just passion for design, but passion for cooking, art, sports and a plethora of other things. A passion and hope of a better future which fuels my creativity.
        </p>
      </>
    ),
  },
  projectStop('TeamViewer', 'teamviewer', {
    body: "Working at TeamViewer (TV) in Göppingen, Germany, was a great experience to broaden both my horizons and experience working in a corporate setting, while developing my user research skills within the company.",
  }),
  projectStop('Hibearnate', 'hibearnate', {
    image: '/projects/2026_Hibearnate/HeroShot_On_V1.png',
    body: "This project can be split into 2 distinct sections: the first part involved a pitch to a group of VCs, while the second part was bringing the product and business actually to life.",
  }),
  projectStop('Cascados', 'cascados', {
    body: "Cascados was a module focused around creating a product for 30 years in the future. We looked at an existing problem, the water quality in Mexico city, and how developing technologies could be used to try and solve it.",
  }),
  projectStop('Hydron', 'hydron', {
    body: "This project combined my love for waterpolo and product design into one. It focused on fixing 3 key issues with waterpolo caps: Comfortability, hear-ability and intuitiveness.",
  }),
  projectStop('Cuttleswish', 'cuttleswish', {
    body: "Cuttleswish stretched across all aspects of industrial design, resulting in a functional MVP which aimed to help elderly people with cooking, reducing the likelihood of them burning food.",
  }),
  projectStop('Aerodynamics of a Motorbike', 'aerodynamics-of-a-motorbike', {
    body: "This project began with designing a vehicle without any specifications, to then test its aerodynamics using Solidworks FlowSimulator. The final design was formed from a mix of inspiration and my own creativeness.",
  }),
  {
    title: 'Hobbies',
    href: '/hobbies',
    tileImage: '/project_icons/photography-and-hobbies.png',
    image: '/projects/Ongoing_PersonalWork/image_1.JPG',
    body: "My hobbies involve a variety of things, ranging from backpacking, to film photography, to my love for waterpolo, and even cooking. The pictures on this page are here to show a less professional side of me.",
  },
  projectStop('Portfolio Design', 'designing-and-building-the-portfolio', {
    image: '/projects/Ongoing_Portfolio/Version_3.webp',
    body: "The portfolio has always been an ongoing work in progress. Having been built across Figma, Adobe portfolios and now Antigravity, it has taken various shapes and forms. This current version is hosted on Github.",
  }),
  projectStop('Apollo Drones', 'apollo-drones', {
    body: "Apollo drones aims to aid Search and Rescue teams globally to fix an issue they all face: how do you cover a large area in a short amount of time to increase the likelihood of saving someone’s life?",
  }),
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
    feature: true,
    body: 'Every project, from CAD and prototyping to programming and data analysis.',
    linkLabel: 'Go to Work →',
  },
];
