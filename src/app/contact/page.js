import { CONTACT_METHODS } from '@/lib/contactMethods';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '100px 5%', maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      <h1 className="title-large text-primary" style={{ marginBottom: '2rem', fontWeight: 700 }}>CONTACT (04)</h1>

      <p className="body-main" style={{ marginBottom: '3rem' }}>The best way to reach me is through email or phone, although LinkedIn messages are also welcome.</p>

      {CONTACT_METHODS.map(({ label, value, href, external }) => (
        <section key={label} style={{ marginBottom: '2rem' }}>
          <h2 className="title-small text-primary" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.4)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>{label}</h2>
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="body-main"
            style={{ color: 'var(--secondary-color)', textDecoration: 'underline', wordBreak: 'break-word' }}
          >
            {value}
          </a>
        </section>
      ))}
    </main>
  );
}
