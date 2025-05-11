import AlbumCard from '@/components/discography/album-card';
import { albums } from '@/data/discography';
import ParallaxWrapper from '@/components/animations/parallax-wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discography | Rhythmic Revolutions',
  description: 'Explore the albums and music of Rhythmic Revolutions.',
};

export default function DiscographyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <ParallaxWrapper speed={-0.1}>
      <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Our Music
      </h1>
      <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto mb-16 leading-relaxed">
        Dive into the sonic universe of Rhythmic Revolutions. Each album is a chapter in our story,
        a collection of sounds and emotions crafted for you.
      </p>
      </ParallaxWrapper>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {albums.map((album, index) => (
           <ParallaxWrapper key={album.id} speed={0.05 + index * 0.03} yPercentStart={5} yPercentEnd={-2}>
            <AlbumCard album={album} />
          </ParallaxWrapper>
        ))}
      </div>
    </div>
  );
}
