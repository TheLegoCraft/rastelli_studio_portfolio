import AboutHighlightsSection from "@/components/AboutHighlightsSection";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 10 }}>

      {/* Hero Section */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '100%' }}>
        <div style={{ width: '80%', position: 'relative' }}>
          <h1 className="text-primary" style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '8vw',
            lineHeight: 1,
            margin: 0,
            whiteSpace: 'nowrap'
          }}>
            DESIGN BUILD TEST
          </h1>

          <div style={{ position: 'relative', width: '100%', height: '2rem', marginTop: '0.2rem' }}>
            <p className="heading-2 text-primary" style={{ position: 'absolute', left: 0 }}>Francesco Rastelli</p>
            <p className="heading-2 text-primary" style={{ position: 'absolute', right: 0 }}>2026 Portfolio</p>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <p className="heading-2 text-primary">SCROLL DOWN</p>
        </div>
      </section>

      {/* Combined About & Highlights Section */}
      <AboutHighlightsSection />

    </main>
  );
}
