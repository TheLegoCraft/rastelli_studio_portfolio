import { CONTACT_METHODS } from '@/lib/contactMethods';

export default function ContactPage() {
  return (
    <main className="main-page-area">
      <h1 className="title-large text-primary">CONTACT (04)</h1>

      <p className="body-main" style={{ marginBottom: '3rem' }}>The best way to reach me is through email or phone, although LinkedIn messages are also welcome.</p>

      {CONTACT_METHODS.map(({ label, value, href, external }) => (
        <section key={label} style={{ marginBottom: '2rem' }}>
          <h2 className="section-heading">{label}</h2>
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="body-main text-link"
          >
            {value}
          </a>
        </section>
      ))}
    </main>
  );
}
