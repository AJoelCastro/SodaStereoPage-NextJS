
"use client";

import Image from 'next/image';
import type { Album, Track } from '@/data/discography';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import ParallaxWrapper from '@/components/animations/parallax-wrapper';
import { ListMusic, CalendarDays, Play, Volume2, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!dialogOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = ""; 
      setCurrentPlayingTrack(null);
      setIsPlaying(false);
    }
  }, [dialogOpen]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => {
        setIsPlaying(false);
        // Optionally, play next track or reset
        // setCurrentPlayingTrack(null); 
      };

      audioElement.addEventListener('play', handlePlay);
      audioElement.addEventListener('pause', handlePause);
      audioElement.addEventListener('ended', handleEnded);

      return () => {
        audioElement.removeEventListener('play', handlePlay);
        audioElement.removeEventListener('pause', handlePause);
        audioElement.removeEventListener('ended', handleEnded);
      };
    }
  }, [audioRef.current]);


  useEffect(() => {
    if (currentPlayingTrack && audioRef.current && dialogOpen) {
      if (audioRef.current.src !== currentPlayingTrack.audioUrl) {
        audioRef.current.src = currentPlayingTrack.audioUrl;
        audioRef.current.load();
      }
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
    } else if (!currentPlayingTrack && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentPlayingTrack, dialogOpen]);

  const handleTrackClick = (track: Track) => {
    if (currentPlayingTrack?.audioUrl === track.audioUrl) {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play().catch(error => console.error("Error playing audio:", error));
        } else {
          audioRef.current.pause();
        }
      }
    } else {
      setCurrentPlayingTrack(track);
    }
  };

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
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Ver Detalles
            </Button>
          </DialogTrigger>
          <DialogContent 
            className="sm:max-w-[600px] bg-card text-card-foreground border-border flex flex-col max-h-[95vh]"
            onPointerDownOutside={(e) => {
                if ((e.target as HTMLElement).closest('audio')) {
                    e.preventDefault();
                }
            }}
          >
            <DialogHeader>
              <DialogTitle className="text-2xl text-primary">{album.title}</DialogTitle>
              <DialogDescription className="text-secondary">
                Lanzado: {album.releaseYear}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4 flex-grow overflow-hidden">
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
              <div className="flex flex-col flex-grow overflow-hidden">
                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center">
                  <ListMusic size={20} className="mr-2" /> Lista de Canciones
                </h3>
                <ul className="flex-grow overflow-y-auto pr-2 space-y-1 text-foreground/80">
                  {album.tracks.map((track, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer transition-colors"
                      onClick={() => handleTrackClick(track)}
                    >
                      <span className="truncate flex-1 mr-2">{track.name}</span>
                      {currentPlayingTrack?.name === track.name && isPlaying && <Volume2 size={16} className="text-primary" />}
                      {currentPlayingTrack?.name === track.name && !isPlaying && <Play size={16} className="text-primary" />}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-auto pt-4">
              {currentPlayingTrack ? (
                <audio ref={audioRef} controls className="w-full rounded-md" src={currentPlayingTrack.audioUrl} />
              ) : (
                album.tracks.length > 0 && (
                    <div className="w-full p-3 text-center text-sm text-muted-foreground bg-muted/50 rounded-md">
                        Selecciona una canción para reproducir.
                    </div>
                )
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
