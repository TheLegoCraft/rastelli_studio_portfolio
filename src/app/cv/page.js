export default function CVPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '100px 5%', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>

      {/* Header */}
      <h1 className="title-large text-primary" style={{ marginBottom: '2rem' }}>CV (01)</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
        <p className="body-main">Francesco Rastelli</p>
        <div style={{ textAlign: 'right' }}>
          <p className="body-main">francesco.rastelli.2003@gmail.com</p>
          <p className="body-main">+44 7492 627 251</p>
        </div>
      </div>

      {/* Education */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="title-small text-primary" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.4)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Education</h2>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="heading-2" style={{ marginBottom: '0.5rem' }}>
            <span className="text-primary">MEng in Design Engineering</span >
          </p>
          <p className="body-main" style={{ marginBottom: '1rem' }}>Imperial College London - Upper second class honours</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="heading-2" style={{ marginBottom: '0.5rem' }}>
            <span className="text-primary">A-Levels @ CVMS</span >
          </p>
          <p className="body-main" style={{ marginBottom: '1rem' }}>Product design (A*), Mathematics (A*), Physics (A)</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <p className="heading-2" style={{ marginBottom: '0.5rem' }}>
            <span className="text-primary">GCSE @ CVMS</span >
          </p>
          <p className="body-main" style={{ marginBottom: '1rem' }}>9,9,9,8,8,8,8,7,7,7,7</p>
        </div>

      </section>

      {/* Experience */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="title-small text-primary" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.4)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Experience</h2>

        <ExperienceItem
          role="UI/UX Researcher" company="Teamviewer, Germany" date="Apr 2025 to Sep 2025"
          bullets={[
            "Organised, conducted, recorded user interviews globally to improve user experience across a range of products.",
            "Analysed Looker user data to improve efficiency and workflows.",
            "Redesigned the user research platform to a more modern look.",
            "Improved LLM integration into data summary and analysis while ensuring GDPR compliance."
          ]}
        />

        <ExperienceItem
          role="Treasurer and Coach" company="ICSMWP, London" date="Sep 2025 to Aug 2026"
          bullets={[
            "As treasurer, I managed the club's different funds, organising payments for matches, referees, events and transport.",
            "Won the London Cup and LUSL League, together with being the first team to ever win all 3 Varsity matches."
          ]}
        />

        <ExperienceItem
          role="Multirole" company="Oi Vita, London" date="Jun 2024 to Dec 2024"
          bullets={[
            "This job involved various tasks, but most were focused around preparing pizza, and tending the bar.",
            "The high pace (up to 400 pizzas a night) and my ability to deal with it allowed me to make a real impact for the restaurant."
          ]}
        />

        <ExperienceItem
          role="Electronics Expert" company="Ideas Lab, London" date="Sep 2024 to Apr 2026"
          bullets={[
            "Maintained and ensured safe use of the electronics section of the lab, training users around proper usage and soldering techniques in classes up to 12 people.",
            "Maintained 24 3D printers in the lab (including resin) and managed the stock of over 96 different components.",
            "Learnt basic PCP design and manufacture."
          ]}
        />

        <ExperienceItem
          role="Social & Tour Secretary" company="ICSMWP, London" date="Sep 2023 to Aug 2025"
          bullets={[
            "As Tour Secretary, I organised matches, travel and accommodation in both Brighton and Barcelona for 50 people.",
            "As Social Secretary, I was in charge of organising social events up to 45 people, ensuring all payment matched VAT requirements, while ensuring health and safety."
          ]}
        />

        <ExperienceItem
          role="Barback" company="O'Ver, London" date="Jun 2023 to Sep 2023"
          bullets={[
            "Managed inventory, prepared supplies for service, served customers and cleaned, fostering a strong work ethic focused on preparation"
          ]}
        />

        <ExperienceItem
          role="Student Workshop Manager" company="CVMS, London" date="Sep 2020 to Aug 2022"
          bullets={[
            "Managed machine setup and maintenance, trained students on how to use them safely.",
            "Learnt how to integrate multiple manufacturing processes to achieve high-quality results and experience in FDM and SLA 3D printing and laser cutting."
          ]}
        />

        <ExperienceItem
          role="Assistant Teacher" company="St Joseph’s Primary, London" date="Jun 2019 to Jun 2019"
          bullets={[
            "Part of the work experience required for all students finishing secondary school in the UK."
          ]}
        />
      </section>

      {/* Software */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 className="title-small text-primary" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.4)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Software</h2>

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

    </main>
  );
}

function ExperienceItem({ role, company, date, bullets }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <p className="heading-2" style={{ margin: 0 }}>
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
