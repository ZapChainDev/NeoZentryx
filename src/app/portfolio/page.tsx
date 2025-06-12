import ProjectCard from '@/components/portfolio/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - NeoZentryx Web Studio',
  description: 'Explore a selection of projects by NeoZentryx Web Studio, showcasing our design and development expertise.',
};

const projects = [
  {
    id: '1',
    title: 'E-commerce Platform Modernization',
    description: 'Revitalized a legacy e-commerce system into a scalable, high-performance platform with a modern user experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce shopping',
    tags: ['React', 'Next.js', 'Node.js', 'Cloud Architecture'],
    caseStudySummary: 'This project involved a complete overhaul of an existing online retail platform. We focused on improving performance, enhancing user experience, and integrating modern payment and inventory systems. The result was a 30% increase in conversion rates and a 50% reduction in page load times.'
  },
  {
    id: '2',
    title: 'Interactive Data Visualization Tool',
    description: 'Developed a cutting-edge tool for visualizing complex datasets, enabling users to gain insights through interactive charts and graphs.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data visualization',
    tags: ['D3.js', 'React', 'Python', 'Data Analytics'],
    caseStudySummary: 'Our team designed and built a sophisticated data visualization dashboard for a financial services client. The tool allows analysts to explore market trends and identify opportunities through dynamic charts, heatmaps, and network graphs, powered by a robust backend API.'
  },
  {
    id: '3',
    title: 'AI-Powered Mobile App for Wellness Startup',
    description: 'Created an innovative mobile application that leverages AI to provide personalized wellness plans and coaching.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app',
    tags: ['React Native', 'AI/ML', 'Firebase', 'UX/UI Design'],
    caseStudySummary: 'We partnered with a wellness startup to bring their vision to life: a mobile app that uses machine learning to generate custom fitness and nutrition plans. The app features progress tracking, gamification, and AI-driven recommendations for a personalized user journey.'
  },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Work</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover how we've helped businesses like yours achieve their digital goals with innovative design and development solutions.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            imageHint={project.imageHint}
            tags={project.tags}
            caseStudySummary={project.caseStudySummary}
          />
        ))}
      </section>
    </div>
  );
}
