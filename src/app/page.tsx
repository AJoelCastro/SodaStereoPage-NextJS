"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ParallaxWrapper from '@/components/animations/parallax-wrapper';
import { ArrowRight, Users, Library } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <ParallaxWrapper speed={0.5} yPercentStart={-50} yPercentEnd={0} className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/bandhero/1920/1080"
            alt="Rhythmic Revolutions band performing"
            layout="fill"
            objectFit="cover"
            quality={80}
            priority
            data-ai-hint="band stage"
            className="filter brightness-50"
          />
        </ParallaxWrapper>
        <div className="relative z-10 p-8 max-w-3xl">
          <ParallaxWrapper speed={-0.1}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">
              Soda Stereo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/90">
              Música que conecta, celebra y celebra la vida con todas las generaciones.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
              <Link href="/discography">
                Explorar Albums <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </ParallaxWrapper>
        </div>
         <style jsx global>{`
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 md:py-32 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxWrapper speed={0.1}>
            <h2 className="text-4xl font-bold mb-8 text-primary">Acerca de Soda Stereo</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-foreground/80 leading-relaxed">
            Soda Stereo es una de las bandas más importantes e influyentes en toda la historia del rock argentino y latinoamericano, con una popularidad masiva en todo el continente desde mediados de los años '80 y hasta la actualidad.
 La banda nació a principios de 1982 con la unión de Gustavo Cerati, Zeta Bosio y Charly Alberti, tres jóvenes que buscaban formar un grupo con influencias de la new-wave de Inglaterra y Estados Unidos.
            </p>
          </ParallaxWrapper>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ParallaxWrapper speed={0.15}>
            <Link href="/band" className="block group">
              <CardFeature 
                icon={<Users size={40} className="text-secondary" />} 
                title="Conoce a la banda"
                description="Descubre las personas detrás de la música y sus historias únicas."
              />
            </Link>
            </ParallaxWrapper>
            <ParallaxWrapper speed={0.15} >
            <Link href="/discography" className="block group">
              <CardFeature 
                icon={<Library size={40} className="text-secondary" />} 
                title="Descubre la Discografia"
                description="Sumérgete en nuestros álbumes, desde debuts innovadores hasta los últimos lanzamientos."
              />
            </Link>
             </ParallaxWrapper>
          </div>
        </div>
      </section>

      {/* Call to Action / Next Show (Placeholder) */}
      <section className="w-full py-20 md:py-32 bg-card text-card-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxWrapper speed={0.1}>
            <h2 className="text-4xl font-bold mb-8 text-primary">Join the Revolution</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-card-foreground/80 leading-relaxed">
              Stay tuned for upcoming tour dates, new releases, and exclusive content. Follow us on social media
              and become part of the Rhythmic Revolutions family.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="#">
                Follow Us
              </Link>
            </Button>
          </ParallaxWrapper>
        </div>
      </section>
    </div>
  );
}

interface CardFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CardFeature({ icon, title, description }: CardFeatureProps) {
  return (
    <div className="bg-card p-8 rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 h-full flex flex-col items-center text-center group">
      <div className="mb-6 p-4 bg-primary/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
      <ArrowRight size={24} className="mt-auto text-primary group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  )
}
