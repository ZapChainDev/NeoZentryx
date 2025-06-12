import DesignIdeaForm from '@/components/forms/DesignIdeaForm';
import type { Metadata } from 'next';
import { Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Design Idea Tool - NeoZentryx Web Studio',
  description: 'Get AI-generated design ideas for your project. Simply describe your concept and let our tool inspire you.',
};

export default function DesignToolPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <Lightbulb className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">AI Design Idea Tool</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Unleash creativity with our AI-powered design assistant. Input your project description and receive instant layout suggestions and feature recommendations.
        </p>
      </section>

      <section className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg border">
        <DesignIdeaForm />
      </section>
    </div>
  );
}
