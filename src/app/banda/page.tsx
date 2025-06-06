import MemberCard from '@/components/band/member-card';
import { bandMembers } from '@/data/band';
import ParallaxWrapper from '@/components/animations/parallax-wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Banda | Soda Stereo',
  description: 'Conoce a los miembros de Soda Stereo.',
};

export default function BandPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <ParallaxWrapper speed={-0.1}>
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Conoce a Soda Stereo
        </h1>
        <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto mb-16 leading-relaxed">
          Conoce el corazón y el alma de la icónica banda Soda Stereo.
        </p>
      </ParallaxWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
        {bandMembers.map((member, index) => (
          <ParallaxWrapper key={member.id} speed={0.1 + index * 0.05} yPercentStart={10} yPercentEnd={-5}>
            <MemberCard member={member} />
          </ParallaxWrapper>
        ))}
      </div>
    </div>
  );
}
