export interface BandMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  aiHint: string;
}

export const bandMembers: BandMember[] = [
  {
    id: 1,
    name: 'Alex "The Volt" Johnson',
    role: 'Lead Vocals & Guitar',
    bio: 'With a voice that can shatter glass and guitar riffs that electrify stadiums, Alex is the magnetic frontman of Rhythmic Revolutions.',
    imageUrl: 'https://picsum.photos/seed/alex/400/500',
    aiHint: 'musician singing',
  },
  {
    id: 2,
    name: 'Mia "Rhythm" Chen',
    role: 'Drums & Percussion',
    bio: 'The unwavering heartbeat of the band, Mia lays down complex rhythms and powerful beats that drive the Revolution forward.',
    imageUrl: 'https://picsum.photos/seed/mia/400/500',
    aiHint: 'drummer band',
  },
  {
    id: 3,
    name: 'Leo "Groovemaster" Silva',
    role: 'Bass Guitar',
    bio: "Leo's basslines are legendary, providing the deep, resonant foundation upon which Rhythmic Revolutions builds its sonic landscapes.",
    imageUrl: 'https://picsum.photos/seed/leo/400/500',
    aiHint: 'bassist stage',
  },
  {
    id: 4,
    name: 'Zara "Synthwave" Khan',
    role: 'Keyboards & Synthesizers',
    bio: 'Zara crafts ethereal soundscapes and cutting-edge synth melodies, adding a futuristic and atmospheric layer to the band\'s sound.',
    imageUrl: 'https://picsum.photos/seed/zara/400/500',
    aiHint: 'keyboardist music',
  },
];
