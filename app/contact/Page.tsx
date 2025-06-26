import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="px-6 py-16 max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Want to work together or just say hi? Fill the form below or reach me at dark.sentry@example.com
      </p>
      <ContactForm />
    </main>
  );
}
