import { CONTACT_METHODS } from '@/lib/contactMethods';

export default function CVPage() {
  return (
    <main className="main-page-area">

      {/* Header */}
      <h1 className="title-large text-primary">CV (01)</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
        <p className="body-main">Francesco Rastelli</p>
        <div style={{ textAlign: 'right' }}>
          {CONTACT_METHODS.map(({ label, value, href, external }) => (
            <p key={label} className="body-main">
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-link"
              >
                {value}
              </a>
            </p>
          ))}
        </div>
      </div>

      {/* Education */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="section-heading">Education</h2>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="heading-2" style={{ marginBottom: '0.5rem' }}>
            <span className="text-primary">Imperial College London</span >
          </p>
          <p className="body-main" style={{ marginBottom: '1rem' }}>MEng in Design Engineering - Upper Second-Class Honours (2:1)</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="heading-2" style={{ marginBottom: '0.5rem' }}>
            <span className="text-primary">Cardinal Vaughan Memorial School</span >
          </p>
          <p className="body-main" style={{ marginBottom: '1rem' }}>A-Levels - Product design (A*), Mathematics (A*), Physics (A)</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="heading-2" style={{ marginBottom: '0.5rem' }}>
            <span className="text-primary">Cardinal Vaughan Memorial School</span >
          </p>
          <p className="body-main" style={{ marginBottom: '1rem' }}>GCSE - 9,9,9,8,8,8,8,7,7,7,7</p>
        </div>

      </section>

      {/* Experience */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="section-heading">Experience</h2>

        <ExperienceItem
          role="UX Researcher" company="TeamViewer, Germany" date="Apr 2025 to Sep 2025"
          bullets={[
            "Ran user interviews worldwide, including 40+ for TeamViewer DEX.",
            "Analysed Looker data to improve efficiency and workflows.",
            "Modernised the design of the user research platform.",
            "Improved how LLMs summarise and analyse data, while staying GDPR compliant."
          ]}
        />

        <ExperienceItem
          role="Pizza Chef and Bartender" company="Oi Vita, London" date="Jun 2024 to Dec 2024"
          bullets={[
            "Made pizzas and tended bar in a fast-paced restaurant serving up to 400 pizzas a night."
          ]}
        />

        <ExperienceItem
          role="Barback" company="O'Ver, London" date="Jun 2023 to Sep 2023"
          bullets={[
            "Managed inventory, prepared supplies, served customers and cleaned."
          ]}
        />

        <ExperienceItem
          role="Electronics Expert" company="Ideas Lab, London" date="Sep 2024 to Apr 2026"
          bullets={[
            "Kept the electronics section safe and running, and taught soldering and equipment use in classes of up to 12.",
            "Maintained 24 3D printers, including resin, and managed stock of 96+ components.",
            "Learnt basic PCB design and manufacture."
          ]}
        />

        <ExperienceItem
          role="Student Workshop Manager" company="Cardinal Vaughan Memorial School, London" date="Sep 2020 to Aug 2022"
          bullets={[
            "Set up and maintained machines, and trained students to use them safely.",
            "Learnt to combine manufacturing processes, including FDM and SLA 3D printing and laser cutting, for high-quality results."
          ]}
        />

        <ExperienceItem
          role="Treasurer and Coach" company="ICSM Water Polo, London" date="Sep 2025 to Aug 2026"
          bullets={[
            "Managed club funds and payments for matches, referees, events and transport.",
            "Won the London Cup and LUSL League, and became the first team to win all 3 Varsity matches."
          ]}
        />

        <ExperienceItem
          role="Social & Tour Secretary" company="ICSM Water Polo, London" date="Sep 2023 to Aug 2025"
          bullets={[
            "Organised matches, travel and accommodation for 50 people in Brighton and Barcelona.",
            "Ran social events for up to 45 people, managing VAT-compliant payments and health and safety."
          ]}
        />

        <ExperienceItem
          role="Assistant Teacher" company="St Joseph’s Primary, London" date="Jun 2019 to Jun 2019"
          bullets={[
            "School work experience placement."
          ]}
        />
      </section>

      {/* Software */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="section-heading">Software</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem 1rem', alignItems: 'baseline' }}>
          <p className="heading-2 text-primary" style={{ margin: 0 }}>CAD</p>
          <p className="body-main" style={{ textAlign: 'right', margin: 0 }}>Onshape, Fusion 360, Rhino 3D, Blender</p>

          <p className="heading-2 text-primary" style={{ margin: 0 }}>Design</p>
          <p className="body-main" style={{ textAlign: 'right', margin: 0 }}>Figma, Adobe Suite, Framer, Miro</p>

          <p className="heading-2 text-primary" style={{ margin: 0 }}>Simulation</p>
          <p className="body-main" style={{ textAlign: 'right', margin: 0 }}>Solidworks FS, Ansys, CES Edupack</p>

          <p className="heading-2 text-primary" style={{ margin: 0 }}>Programming</p>
          <p className="body-main" style={{ textAlign: 'right', margin: 0 }}>Python, JavaScript, Matlab</p>

          <p className="heading-2 text-primary" style={{ margin: 0 }}>Data</p>
          <p className="body-main" style={{ textAlign: 'right', margin: 0 }}>Microsoft Suite, Looker Studio</p>
        </div>
      </section>


      {/* Documentation */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="section-heading">Download my CV (PDF)</h2>
        <a
          href="/CV_professional.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="doc-link body-main"
        >
          CV_professional.pdf
        </a>
      </section>
    </main>
  );
}

function ExperienceItem({ role, company, date, bullets }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ marginBottom: '0.5rem' }}>
        <p className="heading-2" style={{ margin: '0 0 0.25rem' }}>
          <span className="text-primary">{role} @ {company}</span>
        </p>
        <p className="body-main text-grey" style={{ margin: 0 }}>{date}</p>
      </div>
      <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
        {bullets.map((bullet, index) => (
          <li key={index} className="body-main" style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{ position: 'absolute', left: 0, top: 0 }}>•</span>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
