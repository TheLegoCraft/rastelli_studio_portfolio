import ContactList from '@/components/ContactList';

export default function ContactPage() {
  return (
    <main className="main-page-area">
      <h1 className="title-large text-primary">CONTACT (04)</h1>

      <p className="body-main" style={{ marginBottom: '3rem' }}>The best way to reach me is through email or phone, although LinkedIn messages are also welcome.</p>

      <ContactList headingLevel={2} />
    </main>
  );
}
