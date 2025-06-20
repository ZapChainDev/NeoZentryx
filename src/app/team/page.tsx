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
              id={ceo.id}
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
        </section>
      )}
    </div>
  );
}
