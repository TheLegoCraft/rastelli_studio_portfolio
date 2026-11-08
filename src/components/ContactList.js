import { CONTACT_METHODS } from '@/lib/contactMethods';

// The contact list on the home page and the Contact page, so the two stay matched.
// headingLevel keeps the outline correct: h3 under a section heading, h2 under the page title.
export default function ContactList({ headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;

  return CONTACT_METHODS.map(({ label, value, href, external }) => (
    <div key={label} style={{ marginBottom: '1.5rem' }}>
      <Heading className="heading-2">{label}</Heading>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="body-main text-link"
      >
        {value}
      </a>
    </div>
  ));
}
