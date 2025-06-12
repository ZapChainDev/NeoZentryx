import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  caseStudySummary: string;
}

export default function ProjectCard({ title, description, imageUrl, imageHint, tags, caseStudySummary }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="aspect-video relative w-full rounded-t-md overflow-hidden mb-4">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-semibold mb-2 text-sm text-primary">Case Study Summary:</h4>
        <p className="text-sm text-muted-foreground">{caseStudySummary}</p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
