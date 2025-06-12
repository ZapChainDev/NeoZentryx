import ContactForm from '@/components/forms/ContactForm';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - NeoZentryx Web Studio',
  description: 'Get in touch with NeoZentryx Web Studio for your project inquiries or to learn more about our services.',
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Get in Touch</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          We're excited to hear about your project! Fill out the form below or reach out to us through our contact details.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <section className="bg-card p-8 rounded-lg shadow-lg border">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <ContactForm />
        </section>

        <section className="space-y-8 bg-card p-8 rounded-lg shadow-lg border">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <a href="mailto:hello@neozentryx.com" className="text-muted-foreground hover:text-primary">
                  hello@neozentryx.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Our Office</h3>
                <p className="text-muted-foreground">123 Innovation Drive, Tech City, TX 75001</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
             <h3 className="font-semibold mb-2">Business Hours</h3>
             <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
             <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
          </div>
        </section>
      </div>
    </div>
  );
}
