import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, Cpu, Lightbulb, Users, Bot, Mail, Phone, MapPin, Crown, Megaphone, Terminal, Globe, Facebook, X, Instagram } from 'lucide-react';
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
    name: 'John Mark Papelirin',
    role: 'CEO Founder',
    bio: `John Mark Papelirin is the CEO of NeoZentryx Web Studio, a full-stack web developer, startup builder, and basketball player. He works at a US-based company, CBL Company, and enjoys building websites, apps, and businesses using tools like Firebase and Vercel. He loves sharing ideas, creating new projects, and helping others grow. Outside of work, he's a gym rat, a big Marvel fan, a YouTuber, a singer, and enjoys mixing and mastering music. John stays active on and off the court—balancing tech, creativity, and passion.`,
    imageUrl: '/teampicture/JOHN MARK.png',
    imageHint: 'man ceo',
    category: 'Leadership',
  },
  {
    id: '2',
    name: 'Carlito Cananua',
    role: 'IT Network Support/Marketing',
    bio: `I'm Carl, an IT Network Support Specialist at an international school, handling network security, system maintenance, and student accounts on Microsoft and Google platforms. I'm also learning web and app development to broaden my skills.

In addition, I support NeoZentryx Web Studio as part of the marketing team, eager to grow in the development space and contribute to a creative, forward-thinking environment.`,
    imageUrl: '/teampicture/CARLITO.png',
    imageHint: 'man it support',
    category: 'Development & Design',
  },
  {
    id: '3',
    name: 'Ivar Vincent David',
    role: 'IT Network Support/Marketing',
    bio: `Ivar is your friendly neighborhood IT guy with a growing passion for web development—part network troubleshooter, part digital creator. As an IT Network Support Specialist at an international college, he keeps systems running smoothly, manages accounts, and ensures seamless access to tools and services across Microsoft 365 and Google Workspace.

Outside the daily tech grind, Ivar supports NeoZentryx Web Studio as part of the marketing team—contributing ideas, visuals, and creativity while expanding his skills in web and app development. When he's off the clock, you'll find him lost in manga, manhwa, and manhua, or exploring immersive game worlds. Always curious and hands-on, Ivar keeps pushing his skills forward—whether it's solving real-world tech puzzles or diving into digital adventures.`,
    imageUrl: '/teampicture/IVAR.png',
    imageHint: 'man it support',
    category: 'Development & Design',
  },
  {
    id: '4',
    name: 'Irish Egie Arao',
    role: 'Web Developer/Lead Developer',
    bio: `Tech by day, gamer by night—always tinkering, always learning

I'm Irish Egie Arao, your go-to IT Designate at Pinabacdao LGU. My days revolve around keeping the gears of government tech turning—from troubleshooting laptops and securing systems to managing Linux servers that power our modern workflows. I also develop in-house software, bridging gaps between the government and the community with practical digital solutions.

When I'm not knee-deep in code or hardware, you'll find me gaming, binge-watching YouTube, cycling, or hitting the weights. I'm endlessly curious, always picking up new tech skills—because why settle for the status quo when there's so much to build and break (then fix again)?

Let's make tech work for progress.`,
    imageUrl: '/teampicture/IRISH.png',
    imageHint: 'woman developer',
    category: 'Development & Design',
  },
  {
    id: '5',
    name: 'Roque Bongalon',
    role: 'Digital Marketing Specialist/Web Developer',
    bio: `Roque, also known as Roqs, is a former Digital Marketing Specialist turned junior web developer with a strong curiosity for how things work behind the scenes. He enjoys tweaking, experimenting, and exploring new tech—constantly honing his skills in web development.

When he's not coding, you'll find him immersed in manga or manhwa, binge-watching anime, or grinding in online games. A passionate self-learner, Roqs is always leveling up—whether it's through new tools, fresh ideas, or the next challenge on screen.`,
    imageUrl: '/teampicture/ROQUE.png',
    imageHint: 'man marketing',
    category: 'Development & Design',
  },
  {
    id: '6',
    name: 'Michael Boco',
    role: 'Data Analyst/Operations Manager',
    bio: 'Driving data-driven decisions and ensuring smooth operations across all aspects of the business.',
    imageUrl: '/teampicture/MICHAEL.png',
    imageHint: 'man analyst',
    category: 'Development & Design',
  },
  {
    id: '7',
    name: 'Mark Berio',
    role: 'Web Developer',
    bio: `Hi, I'm Mark Berio, a programmer at Salenga Law Firm in Pasig City. I use programming languages like Rust, C++, TypeScript, and Python to help and contribute to existing projects. Also have 
‎technical support, where I handled troubleshooting for both hardware and software issues.
‎ 
‎At NeoZentryx Web Studio, I work as a Web Developer, where I contribute to building and improving digital solutions that help clients bring their ideas to life.
‎
‎While I'm not coding, I often spend time reading about new technologies and trends to stay updated in the fast-evolving tech world. Outside of tech, I enjoy reading manga, playing basketball, and diving into online games. It's how I relax, recharge, and stay inspired.`,
    imageUrl: '/teampicture/BERIO.png',
    imageHint: 'man developer',
    category: 'Development & Design',
  }
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
        <div className="pt-4 md:pt-6 space-y-6 sm:space-y-0 sm:flex sm:justify-center sm:gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
          <Link href="/#contact" passHref className="block sm:inline-block">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-shadow">
              Get Started
            </Button>
          </Link>
          <Link href="/#portfolio" passHref className="block sm:inline-block">
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
                id={ceo.id}
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
                    key={member.id}
                    id={member.id}
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
                    key={member.id}
                    id={member.id}
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

      {/* New Footer Section */}
      <footer className="w-full border-t bg-card py-8 text-center text-card-foreground/80">
        <div className="container mx-auto px-4">
          <p>&copy; {currentYear} NeoZentryx Web Studio. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61576381624367" target="_blank" rel="noopener noreferrer" className="text-card-foreground/70 hover:text-primary transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://x.com/NeoZentryxWS?fbclid=IwY2xjawK530VleHRuA2FlbQIxMABicmlkETFQWVRQMkVpbGd5N293dUxQAR7D34q3NPd55t8LYrLZJX-KTyTIwEHdnGq5n1YBMzNRH4Nxptb5scTg5SvMxQ_aem_LgomB9AQYbPknJjWwSpCuN" target="_blank" rel="noopener noreferrer" className="text-card-foreground/70 hover:text-primary transition-colors">
              <X size={24} />
            </a>
            <a href="https://www.instagram.com/neozentryxws/" target="_blank" rel="noopener noreferrer" className="text-card-foreground/70 hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-sm mt-2">Your Vision, Our Code — Let's Build Something Extraordinary.</p>
        </div>
      </footer>
    </div>
  );
}
