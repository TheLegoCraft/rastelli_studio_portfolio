import Image from "next/image";
import Link from "next/link";
import { highlights } from "@/lib/highlights";
import { CONTACT_METHODS } from "@/lib/contactMethods";

export default function Home() {
  return (
    <main className="home-page-area">
      <section className="home-page-hero">
        <div className="home-page-hero__content">
          <h1 className="home-page-hero__title">
            DESIGN BUILD TEST
          </h1>

          <div className="home-page-hero__subtitle">
            <span>Francesco Rastelli</span>
            <span>2026 Portfolio</span>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <p className="heading-2 text-primary">SCROLL DOWN</p>
        </div>
      </section>

      <div className="home-page-content">
        <section id="about" className="home-page-section">
          <h2 className="section-heading">About me</h2>
          <div className="home-about">
            <div className="home-about__photo">
              <Image src="/francesco.png" alt="Francesco Rastelli" fill sizes="220px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="body-main">
              <p style={{ margin: '0 0 0.6em' }}>
                Hi, I&apos;m <strong>Francesco</strong>. I&apos;ve just graduated from Imperial College London, and I know what I want to be:
              </p>
              <p className="text-primary" style={{ margin: '0 0 0.6em', fontWeight: 'bold' }}>
                A designer for the future.
              </p>
              <p style={{ margin: 0 }}>
                My creativity is fuelled by a love for design, cooking, art and sport. Keep scrolling for some of my favourite projects and how to get in touch. Enjoy!
              </p>
            </div>
          </div>
        </section>

        <section id="highlights" className="home-page-section">
          <h2 className="section-heading">Highlights</h2>
          <div className="highlights-grid">
            {highlights.map(item => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="contact" className="home-page-section">
          <h2 className="section-heading">Contact</h2>
          {CONTACT_METHODS.map(({ label, value, href, external }) => (
            <div key={label} style={{ marginBottom: '1.5rem' }}>
              <h3 className="heading-2">{label}</h3>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="body-main text-link"
              >
                {value}
              </a>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

// Image with the text on a dark band along the bottom; hovering dims it and shows the label
function HighlightCard({ item }) {
  return (
    <Link href={item.href} id={item.anchor} className="highlight-card">
      <Image
        src={item.image}
        alt=""
        fill
        sizes="(max-width: 700px) 90vw, 450px"
        style={{ objectFit: 'cover', objectPosition: item.imagePosition || 'center' }}
      />
      <span className="highlight-card__hint">{item.hoverLabel}</span>
      <div className="highlight-card__band">
        <h3 className="highlight-card__title">{item.title}</h3>
        <p style={{ margin: 0 }}>{item.body}</p>
      </div>
    </Link>
  );
}
