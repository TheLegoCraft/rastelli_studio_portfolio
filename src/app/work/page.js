"use client";

import { useState } from 'react';
import Link from 'next/link';

// Mock data based on the screenshot
const projectsData = [
  { year: 2026, title: "Master's Thesis", category: "RESEARCH" },
  { year: 2026, title: "ERO", category: "UI/UX" },
  { year: 2026, title: "Notpla Business Strategy", category: "BUSINESS" },
  { year: 2026, title: "ZOE Sustainable Strategy", category: "BUSINESS" },
  { year: 2026, title: "Designing and building the Portfolio", category: "UI/UX" },
  { year: 2026, title: "Photography & Hobbies", category: "OTHER" },
  { year: 2025, title: "TeamViewer", category: "UI/UX" },
  { year: 2025, title: "ERO", category: "UI/UX" },
  { year: 2025, title: "Master's Thesis", category: "RESEARCH" },
  { year: 2025, title: "SIoT", category: "RESEARCH" },
  { year: 2025, title: "AIDE", category: "UI/UX" },
  { year: 2025, title: "Cascados", category: "UI/UX" },
  { year: 2025, title: "Hydron", category: "CAD" },
  { year: 2025, title: "Wirecast", category: "CAD" },
  { year: 2025, title: "Photography & Hobbies", category: "OTHER" },
  { year: 2024, title: "AIDE", category: "UI/UX" },
  { year: 2024, title: "Cuttleswish", category: "RESEARCH" },
  { year: 2024, title: "Optimisation", category: "SIMULATION" },
  { year: 2024, title: "Photography & Hobbies", category: "OTHER" },
  { year: 2023, title: "FEA - HIP IMPLANT", category: "SIMULATION" },
  { year: 2023, title: "MYCOEDGE", category: "CAD" },
  { year: 2023, title: "HCDE", category: "UI/UX" },
  { year: 2022, title: "A-LEVEL NEA", category: "CAD" },
  { year: 2022, title: "WALKER", category: "CAD" },
  { year: 2020, title: "NASA & VESUVIUS", category: "CAD" },
  { year: 2020, title: "GCSE NEA", category: "CAD" },
];

const filters = ["UI/UX", "CAD", "RESEARCH", "BUSINESS", "SIMULATION"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState(null);

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const filteredProjects = activeFilter 
    ? projectsData.filter(p => p.category === activeFilter)
    : projectsData;

  // Group by year
  const groupedProjects = filteredProjects.reduce((acc, project) => {
    if (!acc[project.year]) acc[project.year] = [];
    acc[project.year].push(project);
    return acc;
  }, {});

  const years = Object.keys(groupedProjects).sort((a, b) => b - a);

  return (
    <main style={{ minHeight: '100vh', padding: '100px 5%', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      <h1 className="title-large text-primary" style={{ marginBottom: '2rem' }}>WORK (02)</h1>
      
      {/* Filters */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {filters.map(f => (
          <button 
            key={f}
            onClick={() => toggleFilter(f)}
            style={{
              padding: '5px 15px',
              backgroundColor: activeFilter === f ? 'var(--primary-color)' : '#e0e0e0',
              color: activeFilter === f ? 'var(--bg-color)' : 'var(--primary-color)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {years.map(year => (
        <section key={year} style={{ marginBottom: '3rem' }}>
          <h2 className="title-small text-primary" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.4)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>{year}</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {groupedProjects[year].map((project, idx) => (
              <Link 
                key={idx} 
                href={`/projects/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                style={{
                  aspectRatio: '1 / 1',
                  backgroundColor: 'var(--grey-200)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(220,220,220,0.3) 100%)',
                }} />
                <h3 className="body-main text-primary" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '1rem' }}>
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      ))}

    </main>
  );
}
