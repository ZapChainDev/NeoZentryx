'use client';

import Image from 'next/image';
import Link from 'next/link';

interface TeamMemberCardProps {
  id: string;
  name: string;
  role: string;
  bio: string; // Bio is kept in data, but not displayed in this new design
  imageUrl: string;
  imageHint: string;
}

export default function TeamMemberCard({ id, name, role, bio, imageUrl, imageHint }: TeamMemberCardProps) {
  return (
    <Link 
      href={`/team/${id}`}
      className="flex flex-col items-center text-center w-full max-w-[10rem] sm:max-w-[12rem] md:max-w-none mx-auto cursor-pointer transition-transform hover:scale-105 hover:shadow-lg group"
    >
      <div className="relative w-full aspect-[3/4] mb-3 sm:mb-4 overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
      </div>
      <h3 className="text-[0.9rem] sm:text-base md:text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">{name}</h3>
      <p className="text-[0.7rem] sm:text-xs md:text-sm text-muted-foreground">{role}</p>
    </Link>
  );
}
