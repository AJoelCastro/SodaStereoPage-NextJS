
export interface Track {
  name: string;
  audioUrl: string;
}

export interface Album {
  id: number;
  title: string;
  releaseYear: number;
  coverArtUrl:string;
  aiHint: string;
  tracks: Track[];
  description: string;
}

const placeholderAudioUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'; // Placeholder audio

export const albums: Album[] = [
  {
    id: 1,
    title: 'Soda Stereo',
    releaseYear: 1984,
    coverArtUrl: 'https://imgs.search.brave.com/e2XkyVF7j3UE4I4qO89wRoFkL6zbWrzda5te8bLXF7o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb2Rh/c3RlcmVvLmNvbS9m/aWxlcy9hbGJ1bXMv/c29kYS1zdGVyZW8u/anBn',
    aiHint: 'band debut album',
    tracks: [
      { name: 'Trátame Suavemente', audioUrl: 'https://sodastereobucket.s3.us-east-2.amazonaws.com/Soda+Stereo+-+Tratame+Suavemente+(El+%C3%9Altimo+Concierto).mp3' },
      { name: '¿Por Qué No Puedo Ser del Jet-Set?', audioUrl: placeholderAudioUrl },
      { name: 'Sobredosis de TV', audioUrl: placeholderAudioUrl },
      { name: 'Te Hacen Falta Vitaminas', audioUrl: placeholderAudioUrl },
    ],
    description: 'Álbum debut de la banda, que marcó el inicio de la escena de rock en español de los 80.'
  },
  {
    id: 2,
    title: 'Nada Personal',
    releaseYear: 1985,
    coverArtUrl: 'https://imgs.search.brave.com/BFojphXQiGOLcWazM8Uf6dCLzsaH6ZpPY_sKes3h7f8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xhcmluLmNvbS9p/bWcvMjAxNS8wNS8y/MS9CSktuYkRnTmVf/NzIweDAuanBn',
    aiHint: '80s synth rock',
    tracks: [
      { name: 'Cuando Pase el Temblor', audioUrl: 'https://sodastereobucket.s3.us-east-2.amazonaws.com/Soda+Stereo+-+Cuando+Pase+El+Temblor+(Gira+Me+Ver%C3%A1s+Volver).mp3' },
      { name: 'Nada Personal', audioUrl: 'https://sodastereobucket.s3.us-east-2.amazonaws.com/Nada+Personal/1+-+Soda+Stereo+-+Nada+Personal.mp3' },
      { name: 'Juego de Seducción', audioUrl: placeholderAudioUrl },
      { name: 'Imágenes Retro', audioUrl: placeholderAudioUrl },
      { name: 'Estoy Azulado', audioUrl: 'https://sodastereobucket.s3.us-east-2.amazonaws.com/Nada+Personal/Soda+Stereo+-+Estoy+Azulado+(Remasterizado+2007).mp3' },
    ],
    description: 'Consolidó el éxito de la banda y los llevó a la fama internacional.'
  },
  {
    id: 3,
    title: 'Signos',
    releaseYear: 1986,
    coverArtUrl: 'https://imgs.search.brave.com/DR-u4bmIfGCAh9-i-7GY0joD6f8yxmd-g15Nbky_ncs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS81MDB4NTAwL2Vi/Y2MwYTAzODBkZjQz/ZDJiMTQwZDVmNTdi/ODAzYmViLmpwZw',
    aiHint: 'album cover',
    tracks: [
      { name: 'Signos', audioUrl: placeholderAudioUrl },
      { name: 'Prófugos', audioUrl: 'https://sodastereobucket.s3.us-east-2.amazonaws.com/Pr%C3%B3fugos.mp3' },
      { name: 'No Existo', audioUrl: placeholderAudioUrl },
      { name: 'Persiana Americana', audioUrl: placeholderAudioUrl }
    ],
    description: 'Un disco oscuro y lírico que marcó un giro más maduro en su sonido.'
  },
  {
    id: 4,
    title: 'Ruido Blanco (En Vivo)',
    releaseYear: 1987,
    coverArtUrl: 'https://imgs.search.brave.com/Vl_5G-XDhXbF4WC3luf4g47EtyOFaxgu_awfWdMynCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucW9idXouY29t/L2ltYWdlcy9jb3Zl/cnMvMjUvODIvMDg4/Njk3MTQwODIyNV82/MDAuanBn',
    aiHint: 'live concert album',
    tracks: [
      { name: 'Cuando Pase el Temblor', audioUrl: placeholderAudioUrl },
      { name: 'Signos', audioUrl: placeholderAudioUrl },
      { name: 'Juegos de Seducción', audioUrl: placeholderAudioUrl },
      { name: 'Persiana Americana', audioUrl: placeholderAudioUrl }
    ],
    description: 'Álbum en vivo que recoge interpretaciones potentes de su gira por América Latina.'
  },
  {
    id: 5,
    title: 'Doble Vida',
    releaseYear: 1988,
    coverArtUrl: 'https://imgs.search.brave.com/b6C3pwaNzbMycoYXs-7Swc_631xPN7Hqq9bwghSMYqM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxY1JzenBaaXhM/LmpwZw',
    aiHint: 'rock latino new york',
    tracks: [
      { name: 'En la Ciudad de la Furia', audioUrl: 'https://sodastereobucket.s3.us-east-2.amazonaws.com/Soda+Stereo+-+En+La+Ciudad+De+La+Furia+(Gira+Me+Ver%C3%A1s+Volver).mp3' },
      { name: 'Lo Que Sangra (La Cúpula)', audioUrl: placeholderAudioUrl },
      { name: 'Corazón Delator', audioUrl: placeholderAudioUrl },
      { name: 'Languis', audioUrl: placeholderAudioUrl }
    ],
    description: 'Grabado en Nueva York, combina rock con elementos de funk y pop sofisticado.'
  },
  {
    id: 6,
    title: 'Canción Animal',
    releaseYear: 1990,
    coverArtUrl: 'https://imgs.search.brave.com/Guzex8Ilsjg0GPUWbnlXWyn-Uhr7JM6mjABSAKDF3ag/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yb2Nr/YW5kYmFsbC5jb20u/YXIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDgvQ2FuY2lv/bi1hbmltYWwtY292/ZXIuanBn',
    aiHint: 'abstract music',
    tracks: [
      { name: 'De Música Ligera', audioUrl: 'https://sodastereobucket.s3.us-east-2.amazonaws.com/Soda+Stereo+-+De+Musica+Ligera+(El+%C3%9Altimo+Concierto).mp3' },
      { name: 'Té para 3', audioUrl: placeholderAudioUrl },
      { name: 'Hombre al Agua', audioUrl: placeholderAudioUrl },
      { name: 'Un millón de años luz', audioUrl: placeholderAudioUrl },
      { name: '(En) El Séptimo Día', audioUrl: placeholderAudioUrl },
      { name: 'Canción Animal', audioUrl: placeholderAudioUrl }
    ],
    description: 'Uno de los discos más importantes del rock en español, con un sonido más crudo y directo.'
  },
  {
    id: 7,
    title: 'Rex Mix (EP)',
    releaseYear: 1991,
    coverArtUrl: 'https://imgs.search.brave.com/vy9AVATJ0L4s0L9ur33HkYh9UQW7_0bgjTNUeHgBsbM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXN0/bHktczMuYWxsbXVz/aWMuY29tL3JlbGVh/c2UvbXIwMDAxNTg4/ODY4L2Zyb250LzQw/MC9uY2ZPZVZrbGhz/M3c0TlU2MS1nWTlv/QWY3RV8xRS0yTWxC/QlBtUEFYUkJVPS5q/cGc',
    aiHint: 'remix ep',
    tracks: [
      { name: 'No Necesito Verte (Para Saberlo)', audioUrl: placeholderAudioUrl },
      { name: 'Hombre al Agua (Remix)', audioUrl: placeholderAudioUrl },
      { name: 'No Existes', audioUrl: placeholderAudioUrl },
      { name: 'En el Borde', audioUrl: placeholderAudioUrl }
    ],
    description: 'Un EP experimental con remixes y nuevas versiones de sus canciones.'
  },
  {
    id: 8,
    title: 'Dynamo',
    releaseYear: 1992,
    coverArtUrl: 'https://imgs.search.brave.com/gylI7huXG6peBjvsoNdKo9QF3J9kQySioxAdzzsAzB4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS81MDB4NTAwLzE3/MDBhODJiYjBiNDA2/YjMwMTVmZjZhZWM4/YjNjNjY1LmpwZw',
    aiHint: 'shoegaze alt rock',
    tracks: [
      { name: 'Primavera 0', audioUrl: placeholderAudioUrl },
      { name: 'Luna Roja', audioUrl: placeholderAudioUrl },
      { name: 'Fue', audioUrl: placeholderAudioUrl },
      { name: 'Camaleón', audioUrl: placeholderAudioUrl },
      { name: 'Sweet Sahumerio', audioUrl: placeholderAudioUrl }
    ],
    description: 'Con influencias del shoegaze y la electrónica, es uno de sus discos más experimentales.'
  },
  {
    id: 9,
    title: 'Sueño Stereo',
    releaseYear: 1995,
    coverArtUrl: 'https://imgs.search.brave.com/2i0CDzjUTY0_ZjjZyUktCiQAcw6GqwYBcvpeL2mYq70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYXNk/dW5hc3JlY29yZHMu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL3NvZGEt/c3RlcmVvLXN1ZS1v/LXN0ZXJlby5qcGc_/dj0xNjk1NjIyODc5/JndpZHRoPTE0NDU',
    aiHint: 'dreamy surreal album art',
    tracks: [
      { name: 'Ella Usó Mi Cabeza Como Un Revólver', audioUrl: placeholderAudioUrl },
      { name: 'Paseando por Roma', audioUrl: placeholderAudioUrl },
      { name: 'Zoom', audioUrl: placeholderAudioUrl },
      { name: 'Efecto Doppler', audioUrl: placeholderAudioUrl },
      { name: 'Crema de Estrellas', audioUrl: placeholderAudioUrl }
    ],
    description: 'El último álbum de estudio, con una producción sofisticada y letras introspectivas.'
  },
];
