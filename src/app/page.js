import Image from "next/image";
import Link from "next/link";
import { highlights } from "@/lib/highlights";
import ContactList from "@/components/ContactList";

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
              <p style={{ margin: '0 0 0.6em' }}>
                Over the last few years, I've been studying and developing my skills as a designer. Having worked over a very wide variety of projects, from physical products to UI/UX designs, I'm now looking for a job that will challenge me and allow me to grow.
              </p>
              <p style={{ margin: '0 0 0.6em' }}>
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
          <ContactList />
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
        sizes="(max-width: 1000px) 90vw, 900px"
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
