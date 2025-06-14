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
    name: 'John Mark Papelirin',
    role: 'CEO Founder',
    bio: 'Leading the vision and strategy of NeoZentryx Web Studio with innovative leadership and entrepreneurial spirit.',
    imageUrl: '/teampicture/JOHN MARK.png',
    imageHint: 'man ceo',
    category: 'Leadership',
  },
  {
    id: '2',
    name: 'Carlito Cananua',
    role: 'IT Network Support/Marketing',
    bio: 'Expert in IT infrastructure and marketing strategies, ensuring seamless operations and effective outreach.',
    imageUrl: '/teampicture/CARLITO.png',
    imageHint: 'man it support',
    category: 'Development & Design',
  },
  {
    id: '3',
    name: 'Irish Egie Arao',
    role: 'Web Developer/Lead Developer',
    bio: 'Leading our development team with expertise in creating innovative web solutions and managing complex projects.',
    imageUrl: '/teampicture/IRISH.png',
    imageHint: 'woman developer',
    category: 'Development & Design',
  },
  {
    id: '4',
    name: 'Roque Bongalon',
    role: 'Digital Marketing Specialist/Web Developer',
    bio: 'Combining marketing expertise with technical skills to create effective digital strategies and web solutions.',
    imageUrl: '/teampicture/ROQUE.png',
    imageHint: 'man marketing',
    category: 'Development & Design',
  },
  {
    id: '5',
    name: 'Michael Boco',
    role: 'Data Analyst/Operations Manager',
    bio: 'Driving data-driven decisions and ensuring smooth operations across all aspects of the business.',
    imageUrl: '/teampicture/MICHAEL.png',
    imageHint: 'man analyst',
    category: 'Development & Design',
  },
  {
    id: '6',
    name: 'Mark Berio',
    role: 'Web Developer',
    bio: 'Creating innovative web solutions with a focus on user experience and technical excellence.',
    imageUrl: '/teampicture/BERIO.png',
    imageHint: 'man developer',
    category: 'Development & Design',
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
