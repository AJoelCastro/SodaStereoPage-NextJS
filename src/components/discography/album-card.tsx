"use client";

import Image from 'next/image';
import type { Album } from '@/data/discography';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import ParallaxWrapper from '@/components/animations/parallax-wrapper';
import { ListMusic, CalendarDays } from 'lucide-react';

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <Card className="overflow-hidden shadow-xl hover:shadow-primary/50 transition-shadow duration-300 flex flex-col bg-card">
      <ParallaxWrapper speed={0.2} yPercentStart={-5} yPercentEnd={5}>
        <div className="relative h-72 w-full">
          <Image
            src={album.coverArtUrl}
            alt={album.title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={album.aiHint}
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      </ParallaxWrapper>
      <CardHeader className="p-6">
        <CardTitle className="text-xl font-bold text-primary truncate">{album.title}</CardTitle>
        <CardDescription className="text-secondary flex items-center">
          <CalendarDays size={16} className="mr-2" />
          {album.releaseYear}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow">
        <p className="text-foreground/80 leading-relaxed line-clamp-3">{album.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Ver Detalles
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] bg-card text-card-foreground border-border">
            <DialogHeader>
              <DialogTitle className="text-2xl text-primary">{album.title}</DialogTitle>
              <DialogDescription className="text-secondary">
                Lanzado: {album.releaseYear}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="relative h-64 w-full rounded-md overflow-hidden mb-4">
                <Image
                  src={album.coverArtUrl}
                  alt={album.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={album.aiHint}
                />
              </div>
              <p className="text-foreground/90">{album.description}</p>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center">
                  <ListMusic size={20} className="mr-2" /> Lista de Canciones
                </h3>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  {album.tracks.map((track, index) => (
                    <li key={index}>{track}</li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
