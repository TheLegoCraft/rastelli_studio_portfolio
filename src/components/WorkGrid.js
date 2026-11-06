"use client";

import { useState } from 'react';
import Link from 'next/link';
import { TILE_BRIGHTNESS, TILE_RADIUS, tileBarStyle, tileTitleStyle } from '@/lib/tileStyle';

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
    title: "Sensing and IoT",
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
    title: "A-level NEA",
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
        <h3 style={tileTitleStyle}>{project.title}</h3>
      </div>
    </Link>
  );
}

export default function WorkGrid({ categoriesBySlug }) {
  const [activeFilter, setActiveFilter] = useState(null);

  const toggleFilter = (category) => {
    setActiveFilter(prev => (prev === category ? null : category));
  };

  // Filter projects by selected category (or show all if none selected)
  const filteredProjects = activeFilter
    ? projectsData.filter(p => categoriesBySlug[p.slug].includes(activeFilter))
    : projectsData;

  // Group by year
  const groupedProjects = filteredProjects.reduce((acc, project) => {
    if (!acc[project.year]) acc[project.year] = [];
    acc[project.year].push(project);
    return acc;
  }, {});

  const years = Object.keys(groupedProjects).sort((a, b) => b - a);

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '100px 5% 120px 5%',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Title */}
      <div style={{ marginBottom: '1.75rem' }}>
        <h1
          style={{
            color: 'var(--primary-color)',
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          WORK &nbsp;(02)
        </h1>
      </div>

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
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => toggleFilter(cat)}
              style={{
                padding: '5px 12px',
                backgroundColor: isActive ? 'var(--primary-color)' : '#FFDACD',
                color: '#260C03',
                border: 'none',
                borderRadius: '1px',
                cursor: 'pointer',
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 0 10px rgba(255, 74, 28, 0.5)' : 'none',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects grouped by Year */}
      {years.length === 0 ? (
        <div style={{ padding: '4rem 0', color: 'var(--grey-400)', fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
          No projects found in this category. Click the active filter button to view all.
        </div>
      ) : (
        years.map(year => {
          return (
            <section key={year} style={{ marginBottom: '3.5rem' }}>
              {/* Year Heading & Divider */}
              <div
                style={{
                  marginBottom: '1.25rem',
                  borderBottom: '1px solid #FDD6CD',
                  paddingBottom: '0.4rem',
                }}
              >
                <h2
                  style={{
                    color: 'var(--primary-color)',
                    fontFamily: 'var(--font-jetbrains-mono), monospace',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    margin: 0,
                  }}
                >
                  {year}
                </h2>
              </div>

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
    </main>
  );
}
