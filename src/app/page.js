import HomeWheel from "@/components/HomeWheel";
import { wheelStops } from "@/lib/wheelStops";

export default function Home() {
  return (
    <main className="home-page-area">
      <section className="home-page-hero">
        <div className="home-page-hero__content">
          <h1 className="home-page-hero__title">
            DESIGN BUILD TEST
          </h1>

          <div class="home-page-hero__subtitle">
            <span>Francesco Rastelli</span>
            <span>2026 Portfolio</span>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <p className="heading-2 text-primary">SCROLL DOWN</p>
        </div>
      </section>

      <HomeWheel stops={wheelStops} />

    </main>
  );
}
