// The four cards in the Highlights grid on the home page. Each body is the card's own text,
// so editing it here does not change the project pages.

function projectHighlight(title, slug, overrides = {}) {
  return {
    title,
    href: `/projects/${slug}?from=highlights`,
    anchor: `highlight-${slug}`,
    image: `/project_icons/${slug}.png`,
    hoverLabel: 'See the project →',
    ...overrides,
  };
}

export const highlights = [
  projectHighlight('Hibearnate', 'hibearnate', {
    image: '/projects/2026_Hibearnate/HeroShot_On_V1.png',
    body: "Light through the window was ruining my team's sleep, and 71% of people we surveyed felt the same. So we pitched a window film that blocks up to 97% of light, then set about bringing it to life.",
  }),
  projectHighlight('Apollo Drones', 'apollo-drones', {
    body: "Apollo Drones aims to help Search and Rescue teams with a critical problem: how do you cover a large area quickly enough to save someone's life?",
  }),
  projectHighlight('TeamViewer', 'teamviewer', {
    body: "At TeamViewer in Germany, I was one of four UX Researchers, helping designers and product managers find answers through interviews and data. It was a big step forward for my research skills.",
  }),
  {
    title: 'See all my work',
    href: '/work',
    image: '/project_icons/work.webp',
    imagePosition: 'top',
    hoverLabel: 'Go to Work →',
    body: 'Every project, from CAD and prototyping to programming and data analysis.',
  },
];
