"use client";

import { useState } from 'react';
import Link from 'next/link';
import { TILE_BRIGHTNESS, TILE_RADIUS, tileBarStyle } from '@/lib/tileStyle';

// Each project's filter categories come from projectsContent, via the page
const projectsData = [
  // --- 2026 ---
  {
    year: 2026,
    title: "Master's Thesis",
    slug: "masters-thesis",
    image: "/project_icons/masters-thesis.png",
  },
  {
    year: 2026,
    title: "Hibearnate",
    slug: "hibearnate",
    image: "/project_icons/hibearnate.png",
  },
  {
    year: 2026,
    title: "Notpla Business Strategy",
    slug: "notpla-business-strategy",
    image: "/project_icons/notpla-business-strategy.png",
  },
  {
    year: 2026,
    title: "Portfolio Design",
    slug: "designing-and-building-the-portfolio",
    image: "/project_icons/designing-and-building-the-portfolio.png",
  },

  // --- 2025 ---
  {
    year: 2025,
    title: "TeamViewer",
    slug: "teamviewer",
    image: "/project_icons/teamviewer.png",
  },
  {
    year: 2025,
    title: "Cascados",
    slug: "cascados",
    image: "/project_icons/cascados.png",
  },
  {
    year: 2025,
    title: "Hydron",
    slug: "hydron",
    image: "/project_icons/hydron.png",
  },
  {
    year: 2025,
    title: "Wirecast",
    slug: "wirecast",
    image: "/project_icons/wirecast.png",
  },
  {
    year: 2025,
    title: "World's Worst Intruder Alarm",
    slug: "sensing-and-iot",
    image: "/project_icons/sensing-and-iot.png",
  },

  // --- 2024 ---
  {
    year: 2024,
    title: "Apollo Drones",
    slug: "apollo-drones",
    image: "/project_icons/apollo-drones.png",
  },
  {
    year: 2024,
    title: "Cuttleswish",
    slug: "cuttleswish",
    image: "/project_icons/cuttleswish.png",
  },
  {
    year: 2024,
    title: "Aerodynamics of a Motorbike",
    slug: "aerodynamics-of-a-motorbike",
    image: "/project_icons/aerodynamics-of-a-motorbike.png",
  },

  // --- 2023 ---
  {
    year: 2023,
    title: "FEA of a Hip Implant",
    slug: "fea-of-a-hip-implant",
    image: "/project_icons/fea-of-a-hip-implant.png",
  },
  {
    year: 2023,
    title: "MycoEdge",
    slug: "mycoedge",
    image: "/project_icons/mycoedge.png",
  },
  {
    year: 2023,
    title: "Sentire",
    slug: "sentire",
    image: "/project_icons/sentire.png",
  },

  // --- 2022 ---
  {
    year: 2022,
    title: "Foldable Drawing Board",
    slug: "a-level-nea",
    image: "/project_icons/a-level-nea.png",
  },
  {
    year: 2022,
    title: "Walker",
    slug: "walker",
    image: "/project_icons/walker.png",
  },

  // --- 2020 ---
  {
    year: 2020,
    title: "GCSE NEA",
    slug: "gcse-nea",
    image: "/project_icons/gcse-nea.png",
  },
  {
    year: 2020,
    title: "NASA Vesuvius Challenge",
    slug: "nasa-vesuvius-challenge",
    image: "/project_icons/nasa-vesuvius-challenge.png",
  },
];

const filterCategories = [
  "CAD",
  "DESIGN",
  "SIMULATION",
  "PROGRAMMING",
  "DATA ANALYSIS",
  "PROTOTYPING",
  "OTHER"
];

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        aspectRatio: '1 / 1',
        backgroundColor: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        borderRadius: TILE_RADIUS,
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
      }}
    >
      {/* Background image, brightened on hover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: project.image ? `url(${project.image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          filter: `brightness(${isHovered ? TILE_BRIGHTNESS.active : TILE_BRIGHTNESS.rest})`,
          transition: 'filter 0.3s ease',
        }}
      />

      {/* Project Title: white text on a dark bar, fixed to the bottom edge */}
      <div style={tileBarStyle}>
        <h3 className="tile-title">{project.title}</h3>
      </div>
    </Link>
  );
}

export default function WorkGrid({ categoriesBySlug }) {
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (category) => {
    setActiveFilters(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  // Show only projects that have every selected category (all projects if none selected)
  const filteredProjects = projectsData.filter(p =>
    activeFilters.every(cat => categoriesBySlug[p.slug].includes(cat))
  );

  // Group by year
  const groupedProjects = filteredProjects.reduce((acc, project) => {
    if (!acc[project.year]) acc[project.year] = [];
    acc[project.year].push(project);
    return acc;
  }, {});

  const years = Object.keys(groupedProjects).sort((a, b) => b - a);

  return (
    <div>
      {/* Filter Tags */}
      <div
        style={{
          display: 'flex',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '3rem',
          maxWidth: '900px',
        }}
      >
        {filterCategories.map(cat => {
          const isActive = activeFilters.includes(cat);
          return (
            <button
              key={cat}
              onClick={() => toggleFilter(cat)}
              className={isActive ? 'filter-tag filter-tag--active' : 'filter-tag'}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects grouped by Year */}
      {years.length === 0 ? (
        <p className="body-main text-grey" style={{ padding: '4rem 0' }}>
          No projects match all the selected filters. Deselect a filter to see more.
        </p>
      ) : (
        years.map(year => {
          return (
            <section key={year} style={{ marginBottom: '3.5rem' }}>
              <h2 className="section-heading">{year}</h2>

              {/* 3-Column Square Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '1.25rem',
                }}
              >
                {groupedProjects[year].map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
