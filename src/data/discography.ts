export interface Album {
  id: number;
  title: string;
  releaseYear: number;
  coverArtUrl: string;
  aiHint: string;
  tracks: string[];
  description: string;
}

export const albums: Album[] = [
  {
    id: 1,
    title: 'Echoes of Tomorrow',
    releaseYear: 2021,
    coverArtUrl: 'https://picsum.photos/seed/echoes/500/500',
    aiHint: 'album cover',
    tracks: ['Future Shock', 'Neon Dreams', 'Cybernetic Heart', 'Revolution Rise', 'Digital Dawn'],
    description: 'The debut album that launched Rhythmic Revolutions into the stratosphere, exploring themes of future, hope, and rebellion.'
  },
  {
    id: 2,
    title: 'Chromatic Pulse',
    releaseYear: 2023,
    coverArtUrl: 'https://picsum.photos/seed/chromatic/500/500',
    aiHint: 'abstract music',
    tracks: ['Technicolor Beat', 'Quantum Leap', 'Electric Soul', 'Synthesized Serenity', 'Pulse of the City'],
    description: 'A vibrant journey through sound and color, Chromatic Pulse showcases the band\'s evolving musicality and lyrical depth.'
  },
  {
    id: 3,
    title: 'Revolt & Resonance',
    releaseYear: 2024,
    coverArtUrl: 'https://picsum.photos/seed/revolt/500/500',
    aiHint: 'protest art',
    tracks: ['Uprising Anthem', 'Sonic Rebellion', 'Echo Chamber', 'Resonant Frequencies', 'The Last Stand'],
    description: 'The latest offering, a powerful statement on modern society, blending aggressive riffs with introspective melodies.'
  },
];
