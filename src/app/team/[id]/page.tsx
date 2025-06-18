import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

// Team member data - you might want to move this to a separate file
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

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const member = teamMembers.find(m => m.id === params.id);
  
  if (!member) {
    return {
      title: 'Team Member Not Found - NeoZentryx Web Studio',
      description: 'The requested team member could not be found.',
    };
  }

  return {
    title: `${member.name} - ${member.role} - NeoZentryx Web Studio`,
    description: member.bio.substring(0, 160) + '...',
  };
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = teamMembers.find(m => m.id === params.id);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Team Member Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested team member could not be found.</p>
          <Link href="/team">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Team
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 md:pt-24 pb-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/team">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Team
            </Button>
          </Link>
        </div>

        {/* Team Member Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{member.name}</h1>
              <p className="text-xl md:text-2xl text-primary font-medium">{member.role}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {member.category}
              </span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 