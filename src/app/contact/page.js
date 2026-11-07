import { CONTACT_METHODS } from '@/lib/contactMethods';

export default function ContactPage() {
  return (
    <main className="main-page-area">
      <h1 className="title-large text-primary">CONTACT (04)</h1>

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
