import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, Cpu, Lightbulb, Users, Bot, Mail, Phone, MapPin, Crown, Megaphone, Terminal, Globe } from 'lucide-react';
import ProjectCard from '@/components/portfolio/ProjectCard';
import TeamMemberCard from '@/components/team/TeamMemberCard';
import ContactForm from '@/components/forms/ContactForm';
import PhoneShowcase from '@/components/showcase/PhoneShowcase';
import type { Metadata } from 'next';

export const metadata = {
  title: 'NeoZentryx Web Studio - Your Vision, Our Code',
  description: 'NeoZentryx Web Studio: Building extraordinary digital experiences. Explore our portfolio, use our AI design tool, and contact us for your next project.',
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

const teamMembers = [
  {
    id: '1',
    name: 'Dr. Elara Vance',
    role: 'Founder & CEO',
    bio: 'Elara spearheads innovation, charting the course for NeoZentryx\'s technological advancements and future-forward strategies. Her background in quantum AI drives our cutting-edge solutions.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'woman ceo',
    category: 'Leadership',
  },
  {
    id: '2',
    name: 'Jax "Forge" Ironwood',
    role: 'Lead Systems Architect',
    bio: 'Jax is the master architect behind our robust and scalable platforms. With a pragmatic approach, he ensures every project is built on a rock-solid foundation.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'man engineer',
    category: 'Development & Design',
  },
  {
    id: '3',
    name: 'Lyra "Pixel" Chen',
    role: 'Head of Design & UX',
    bio: 'Lyra blends artistry with user-centric design principles to create intuitive and visually stunning interfaces that captivate and engage users effectively.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'woman designer',
    category: 'Development & Design',
  },
  {
    id: '4',
    name: 'Silas "Cipher" Kaito',
    role: 'Cybersecurity & DevSecOps Lead',
    bio: 'Silas ensures the digital fortresses we build are impenetrable. His expertise in cybersecurity and secure development practices protects our clients\' valuable assets.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'man security',
    category: 'Development & Design',
  },
  {
    id: '5',
    name: 'Orion "Nexus" Bellweather',
    role: 'AI & Machine Learning Specialist',
    bio: 'Orion is our AI virtuoso, weaving intelligent algorithms into our projects to create smart, adaptive, and personalized user experiences.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'person ai',
    category: 'Development & Design',
  },
  {
    id: '6',
    name: 'Nova "Quill" Albright',
    role: 'Content & Communications Strategist',
    bio: 'Nova crafts compelling narratives and ensures our message resonates. She bridges the gap between complex tech and clear, engaging communication.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'woman writer',
    category: 'Marketing',
  },
  {
    id: '7',
    name: 'Marcus "Momentum" Raine',
    role: 'Head of Galactic Marketing',
    bio: 'Marcus charts the marketing constellations, ensuring NeoZentryx\'s innovations reach every corner of the digital universe. He specializes in hyper-growth strategies.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'man marketing',
    category: 'Marketing',
  },
  {
    id: '8',
    name: 'Seraphina "Signal" Volkov',
    role: 'Digital Outreach & Community Nexus',
    bio: 'Seraphina amplifies our voice across all digital channels, fostering vibrant communities and building lasting relationships with clients and partners.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'woman community',
    category: 'Marketing',
  },
  {
    id: '9',
    name: 'Keon "Katalyst" Vance',
    role: 'Brand Alchemist & Storyteller',
    bio: 'Keon transforms raw ideas into compelling brand narratives. He crafts the stories that define NeoZentryx and connect with our audience on a deeper level.',
    imageUrl: 'https://placehold.co/400x400.png',
    imageHint: 'person storyteller',
    category: 'Marketing',
  },
];

const expertiseItems = [
  { title: 'Web Development', description: 'Crafting responsive, high-performance websites tailored to your needs.' },
  { title: 'Mobile App Development', description: 'Building intuitive and engaging mobile applications for iOS and Android.' },
  { title: 'UI/UX Design', description: 'Designing beautiful, user-friendly interfaces that drive engagement.' },
  { title: 'WordPress Development', description: 'Creating powerful and flexible WordPress solutions for any scale.' },
  { title: 'SEO', description: 'Optimizing your website to rank higher on search engines and attract more visitors.' },
  { title: 'Ecommerce', description: 'Developing robust online stores with seamless shopping experiences.' },
  { title: 'Chatbot Integration', description: 'Enhancing customer engagement with intelligent chatbot solutions.' },
  { title: 'Online Payment Integration', description: 'Implementing secure and user-friendly online payment systems.' },
];

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const ceo = teamMembers.find(member => member.category === 'Leadership');
  const marketingTeam = teamMembers.filter(member => member.category === 'Marketing');
  const devAndDesignTeam = teamMembers.filter(member => member.category === 'Development & Design');

  return (
    <div className="flex flex-col items-center pt-16 md:pt-24 pb-10 bg-background text-foreground space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section className="text-center space-y-6 md:space-y-8 px-4 w-full max-w-4xl" data-aos="fade-up">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground animate-fade-in-up bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] bg-[position:0%_50%]"
          style={{ animationDelay: '0.1s' }}
        >
          NeoZentryx Web Studio
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          Your Vision, Our Code — Let's Build Something Extraordinary.
        </p>
        <div className="pt-4 md:pt-6 space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
          <Link href="/#contact" passHref>
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-shadow">
              Get Started
            </Button>
          </Link>
          <Link href="/#portfolio" passHref>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-10 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-shadow border-primary hover:bg-primary/5">
              Explore Our Work
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section id="expertise" className="px-4 w-full max-w-5xl text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Our Expertise</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {expertiseItems.map((item, idx) => (
            <div
              key={item.title}
              className="bg-card p-6 rounded-xl shadow-lg border border-border/30 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-primary/60 cursor-pointer"
              data-aos={idx % 4 === 0 ? "fade-up" : idx % 4 === 1 ? "fade-down" : idx % 4 === 2 ? "zoom-in" : "flip-left"}
              data-aos-delay={100 * idx}
              data-aos-easing="ease-in-out"
            >
              <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-card-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering the Future Section */}
      <section className="px-4 w-full max-w-5xl" data-aos="fade-up" data-aos-delay="200">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <Cpu className="h-8 w-8 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Engineering the Future, Today</h2>
            </div>
            <p className="text-lg text-foreground/80 mb-4">
              NeoZentryx Studio is a proud Philippine-based startup, powered by a dynamic team of computer engineers.
            </p>
            <p className="text-lg text-foreground/80">
              Our core engineering talent hails from Samar State University, bringing innovative solutions and a passion for technology to every project we undertake. We're committed to building exceptional digital experiences.
            </p>
          </div>
          <div className="relative aspect-video w-full max-w-md mx-auto md:max-w-none h-64 md:h-80 rounded-xl shadow-2xl overflow-hidden border-4 border-card">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Team of computer engineers collaborating"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-4 w-full max-w-6xl text-center space-y-12" data-aos="fade-up" data-aos-delay="300">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Work</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses like yours achieve their digital goals with innovative design and development solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="px-4 w-full max-w-6xl space-y-10 md:space-y-16" data-aos="fade-up" data-aos-delay="400">
        <div className="text-left max-w-3xl animate-fade-in-up opacity-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Meet our team of creators, designers, and world-class problem solvers
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            To be the company our customers want us to be, it takes an eclectic group of passionate operators. Get to know the people leading the way at NeoZentryx Studio.
          </p>
        </div>

        {ceo && (
          <div className="mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
             <div className="max-w-[10rem] sm:max-w-[12rem] mx-auto md:mx-0 md:max-w-xs">
              <TeamMemberCard
                key={ceo.id}
                name={ceo.name}
                role={ceo.role}
                bio={ceo.bio}
                imageUrl={ceo.imageUrl}
                imageHint={ceo.imageHint}
              />
            </div>
          </div>
        )}

        {marketingTeam.length > 0 && (
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">Marketing Team</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:gap-x-8 md:gap-y-12">
              {marketingTeam.map((member, index) => (
                <div
                  key={member.id}
                  className="animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                >
                  <TeamMemberCard
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    imageUrl={member.imageUrl}
                    imageHint={member.imageHint}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {devAndDesignTeam.length > 0 && (
          <div className="animate-fade-in-up opacity-0" style={{ animationDelay: `${0.5 + marketingTeam.length * 0.15 + 0.2}s` }}>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 mt-12 md:mt-16">Development & Design Team</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:gap-x-8 md:gap-y-12">
              {devAndDesignTeam.map((member, index) => (
                <div
                  key={member.id}
                  className="animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.5 + marketingTeam.length * 0.15 + 0.3 + index * 0.15}s` }}
                >
                  <TeamMemberCard
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    imageUrl={member.imageUrl}
                    imageHint={member.imageHint}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="px-4 w-full max-w-4xl space-y-12" data-aos="fade-up" data-aos-delay="500">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Get in Touch</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're excited to hear about your project! Fill out the form below or reach out to us through our contact details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-card p-8 rounded-lg shadow-lg border">
            <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Send us a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-8 bg-card p-8 rounded-lg shadow-lg border">
            <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Contact Information</h2>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Email Us</h3>
                  <a href="mailto:neozentryxws@gmail.com" className="text-card-foreground/80 hover:text-primary">
                    neozentryxws@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Call Us</h3>
                  <a href="tel:09053825022" className="text-card-foreground/80 hover:text-primary">
                    0905 382 5022
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6">
               <h3 className="font-semibold mb-2 text-card-foreground">Business Hours</h3>
               <p className="text-card-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
               <p className="text-card-foreground/80">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Mockups Section - Now 3D! */}
      <section className="px-4 w-full max-w-3xl" data-aos="fade-up" data-aos-delay="600">
         <div className="text-center mb-8">
             <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Modern Digital Experiences</h2>
             <p className="text-lg text-foreground/80 mt-2">We build stunning and intuitive interfaces.</p>
         </div>
         <PhoneShowcase />
      </section>

      {/* Final Call to Action Section */}
      <section className="text-center space-y-6 px-4 w-full max-w-3xl" data-aos="fade-up" data-aos-delay="700">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-xl mx-auto">
          Let's discuss how NeoZentryx Studio can bring your digital vision to life.
        </p>
        <div className="pt-4">
          <Link href="/#contact" passHref>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-shadow">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Bottom Banner Section */}
      <section className="w-full bg-accent py-4 overflow-hidden" data-aos="fade-up" data-aos-delay="800">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-sm md:text-base text-accent-foreground font-semibold mx-4">INNOVATIVE WEB SOLUTIONS</span>
          <span className="text-primary mx-2">•</span>
          <span className="text-sm md:text-base text-accent-foreground font-semibold mx-4">USER-CENTRIC DESIGN</span>
          <span className="text-primary mx-2">•</span>
          <span className="text-sm md:text-base text-accent-foreground font-semibold mx-4">FUTURE-READY TECHNOLOGY</span>
          <span className="text-primary mx-2">•</span>
          <span className="text-sm md:text-base text-accent-foreground font-semibold mx-4">YOUR VISION, OUR CODE</span>
          <span className="text-primary mx-2">•</span>
          <span className="text-sm md:text-base text-accent-foreground font-semibold mx-4">INNOVATIVE WEB SOLUTIONS</span>
          <span className="text-primary mx-2">•</span>
          <span className="text-sm md:text-base text-accent-foreground font-semibold mx-4">USER-CENTRIC DESIGN</span>
        </div>
      </section>
       <footer className="w-full py-4 text-center">
        <p className="text-xs text-muted-foreground">&copy; {currentYear} NeoZentryx Web Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
