import Image from 'next/image';
import type { BandMember } from '@/data/band';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ParallaxWrapper from '@/components/animations/parallax-wrapper';

interface MemberCardProps {
  member: BandMember;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <Card className="overflow-hidden shadow-xl hover:shadow-primary/50 transition-shadow duration-300 bg-card">
      <ParallaxWrapper speed={0.3} yPercentStart={-10} yPercentEnd={0}>
        <div className="relative h-80 w-full">
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={member.aiHint}
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      </ParallaxWrapper>
      <CardHeader className="p-6">
        <CardTitle className="text-2xl font-bold text-primary">{member.name}</CardTitle>
        <CardDescription className="text-secondary font-semibold">{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-foreground/80 leading-relaxed">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
