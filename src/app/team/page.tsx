
import TeamMemberCard from '@/components/team/TeamMemberCard';
import type { Metadata } from 'next';
import { Users, Crown, Megaphone, Terminal } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meet The Team - NeoZentryx Web Studio',
  description: 'Meet the talented individuals behind NeoZentryx Web Studio, dedicated to crafting exceptional digital experiences.',
};

const teamMembers = [
  {
    id: '1',
    name: 'Dr. Elara Vance',
    role: 'Chief Executive Officer & Visionary',
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

export default function TeamPage() {
  const ceo = teamMembers.find(member => member.category === 'Leadership');
  const marketingTeam = teamMembers.filter(member => member.category === 'Marketing');
  const devAndDesignTeam = teamMembers.filter(member => member.category === 'Development & Design');

  return (
    <div className="space-y-16">
      <section className="text-center animate-fade-in-up opacity-0">
        <Users className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Meet Our Team</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          The driving force behind NeoZentryx Studio. Passionate innovators, designers, and developers dedicated to your success.
        </p>
      </section>

      {ceo && (
        <section className="mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col items-center text-center mb-8">
            <Crown className="h-12 w-12 text-yellow-400 mb-2" />
            <h2 className="text-3xl font-semibold text-primary">Our Leader</h2>
          </div>
          <div className="max-w-md mx-auto">
            <TeamMemberCard
              key={ceo.id}
              name={ceo.name}
              role={ceo.role}
              bio={ceo.bio}
              imageUrl={ceo.imageUrl}
              imageHint={ceo.imageHint}
            />
          </div>
        </section>
      )}
      
      {marketingTeam.length > 0 && (
        <section>
          <div className="flex flex-col items-center text-center mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <Megaphone className="h-12 w-12 text-primary mb-2" />
            <h2 className="text-3xl font-semibold text-primary">Marketing Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>
      )}

      {devAndDesignTeam.length > 0 && (
        <section>
          <div className="flex flex-col items-center text-center mb-10 mt-16 animate-fade-in-up opacity-0" style={{ animationDelay: `${0.5 + marketingTeam.length * 0.15 + 0.2}s` }}>
            <Terminal className="h-12 w-12 text-primary mb-2" />
            <h2 className="text-3xl font-semibold text-primary">Development & Design Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>
      )}
    </div>
  );
}
