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
    name: 'Gustavo Cerati',
    role: 'Cantante y Guitarrista',
    bio: 'Líder y voz principal de Soda Stereo, Cerati fue un influyente cantante, guitarrista y compositor argentino, reconocido por su talento musical, carisma escénico y su carrera solista tras la disolución de la banda.',
    imageUrl: 'https://imgs.search.brave.com/if_ndaTaWGfYaR1vfuVcgnCZDbHpTaPdQ_joTHosL3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODI4/MjAyOTkvZXMvZm90/by9ndXN0YXZvLWNl/cmF0aS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Zm1HcXdM/c3R3dWJ3LXg1MkFN/eFp1VFh5di13MUVX/MkEtOEhudDc3RmVq/UT0',
    aiHint: 'musician singing',
  },
  {
    id: 2,
    name: 'Zeta Bosio',
    role: 'Bajista',
    bio: 'Bajista de Soda Stereo, Zeta aportó una base sólida y creativa al sonido de la banda. También se encargó de coros y fue un pilar fundamental durante toda la trayectoria del grupo.',
    imageUrl: 'https://imgs.search.brave.com/8GiEOxSUAKaZg-7yCbd-LvXAS0u5Ji1JOu9xmTHiTDI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE0L1pldGFfQm9z/aW9fY29uX2VsX2dy/dXBvX2NoaWxlbm9f/TGFfTGV5LF9lbl9l/bF9mZXN0aXZhbF9W/aSVDMyVCMWFfZGVs/X01hcl9kZV9DaGls/ZV8oMSkucG5n',
    aiHint: 'drummer band',
  },
  {
    id: 3,
    name: 'Charly Alberti',
    role: 'Baterista',
    bio: 'Baterista y percusionista de Soda Stereo, Charly se destacó por su precisión y energía. Su estilo marcó el ritmo distintivo del grupo desde sus inicios hasta su separación.',
    imageUrl: 'https://imgs.search.brave.com/5c-hgOPbHQLlZjyX4iL8h0vJZRhZzEs-6PlNnp3eeFw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly96aWxk/amlhbi5jb20vY2Ru/L3Nob3AvZmlsZXMv/Y2hhcmx5X2FsYmVy/dGlfel9oZWFkZXIu/cG5nP3Y9NTcxMDgz/MzM0NTkxMjMwMTE5/OQ',
    aiHint: 'bassist stage',
  },
];
