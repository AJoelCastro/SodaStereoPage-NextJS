
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
      { name: 'Trátame Suavemente', audioUrl: 'https://sodastereobucket.s3.us-east-2.amazonaws.com/Soda%20Stereo%20-%20Tratame%20Suavemente%20%28El%20%C3%9Altimo%20Concierto%29.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAX4NX6UVASCU2YRWM%2F20250513%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T193252Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLWVhc3QtMiJGMEQCIBNT%2BiwKk0fhv7gGo8egqquJsailEuPEenOQP6KMucYuAiAq4%2BA3gAGcWgbG6ExnoWJ%2BYKMmwOWr8vJ4gJyfBE9XJiqiAgj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDU0MjA4ODUzNzQwOSIMdgj81dXQtqgOh1kWKvYBI1ebDZA6QsI2%2Fic1IGdYp1Y9eTZ22oNZOmQgZ3n8zGo03E7BqPNGzu5%2F2Ne5cMFKLeHBmd8zMyp63Cv%2Bg7u93NIGj%2Bn8cQcJVY7Tsb%2BTil090VdXIC1ttTIB1CMjZSFbjA9vvJqs4WmBqe%2FiDZ4YzR%2F5kNC8e5W6%2Bb3rmIEUrd%2FGyHwYdNBdmthZWRiYRIrLinbSp98JGEgJio9xYigyXD0agOW85X0kRGvMtGsR5vXuAlXw79jKMr%2BAWk5OXurXUc5RYE4Yufxkmw5npGzZoOf%2F9R7b6z4tU4TGKL%2FZv%2FXRc%2F71UMEVnnO8xVb%2ByEwtrjhXrcs9MMixjsEGOuABxvCRNl%2BvdmGMLVyM6dbfJC8zNzeYKHyWZ6Aq%2BZPTCWrydZrrYbOS%2B%2FIuO%2FwzsUxDo4b6OlgYWP1v34LbVcYDCcdYu4R3dmyPbc7t8YsxrDTM1KIW25%2BPoupPrnoibQNMLwYEhq%2Bvl1Zt%2FMn0HZGFvBQE5YrxK7hBv3c%2BCd0RjrpIs3gN%2Fsnq4bltrZP5SqfRgnyxRXq%2Ba9azTzfG6xnsxbAdEj11dzxXfHVt7SFPhlouW9zE5xcP3OEs4qWY%2BbStzx0y2cUUv%2B4OX2VZ3w2eruD%2FGnRyZL2Tzj4EgoKyAkI%3D&X-Amz-Signature=69978541b148b4d17d5ff4386968e744408da71d12ab9c73dbfc9cf89fe1c4c5&X-Amz-SignedHeaders=host&response-content-disposition=inline' },
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
      { name: 'Cuando Pase el Temblor', audioUrl: placeholderAudioUrl },
      { name: 'Nada Personal', audioUrl: placeholderAudioUrl },
      { name: 'Juego de Seducción', audioUrl: placeholderAudioUrl },
      { name: 'Imágenes Retro', audioUrl: placeholderAudioUrl },
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
      { name: 'Prófugos', audioUrl: 'https://sodastereobucket.s3.us-east-2.amazonaws.com/Pr%C3%B3fugos.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAX4NX6UVASJCDRV5V%2F20250513%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T193108Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLWVhc3QtMiJIMEYCIQDYLnnOiXpyJq090KmJRoNqZHM42y7YV6x0%2BCUH8fJXPwIhAOI8LWlCg1TWZOwdVNY3XUDjDJxZQWJNHn6nk91ETqLsKqICCPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNTQyMDg4NTM3NDA5Igxy81fghKW%2BH1uCaAkq9gEvPqeVz%2F%2B00nZWNLlCVL7ae68v2KNfeZDwbjQyv1IhAmu3PJzu%2Bi52hUygGZN7BOuMBlljXeSZhoL8UMVuzu5cVho9bs2uwFohzdrHu3HF60CGhR4ssj%2FSoN1A4QISfrKnpx5%2FsIwZN6OKQ09KwcnH%2FUKQm4M5FJJG%2BruvMbS8pChFqB8wWc4nhbNUWpAyLPRHUDlNkffmA0pWw33MU4Dw0ZAKCbr3KXOYzMLf4YnYaqwLr9Xd%2B2PelD629vF%2BG4nxtSDcEQNYecOT%2BWEW%2By4SA6z1Fk5VkyN7rGvj5mcGcwDqLC7XvV%2B3LQAB%2BPNEcQ6%2BDS1SBJ0wyLGOwQY63gGr34OBGqhTsTO1rd0KgCVUu3Mkgxv0HB%2FUijDLN4CcN5gcZDstUpjxBsZ7XTF3jm%2Bi0Rx1pBKyAcukJNVdnEwp7cqoydeggqyGNTMFPm9Fpusg0P0r7nrGSTSdaVsYs5qcKZ4pt5f0Zu1%2BKNDakQ3W%2B4Wl4F5nrZ3ESm0rIcqzur2evLwzSrnFVLtZL%2BxjYSQO479baZ3gLbnUuXhf19eCKOHUmHcM5ByYwXdmtFOdCsh8QRx0NJNOqngK%2FGV2nCjtdkP5NqSVO7zulhHcMTAuMpOTQZwNeQL%2BmM9l1Hk%3D&X-Amz-Signature=7c35719e04f9e976d8547a687dc5c2abcd652822423a7d3786986d7219e0ca2e&X-Amz-SignedHeaders=host&response-content-disposition=inline' },
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
      { name: 'Cuando Pase el Temblor', audioUrl: 'https://sodastereobucket.s3.us-east-2.amazonaws.com/Soda%20Stereo%20-%20Cuando%20Pase%20El%20Temblor%20%28Gira%20Me%20Ver%C3%A1s%20Volver%29.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAX4NX6UVARUAEPQE5%2F20250513%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T192838Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLWVhc3QtMiJHMEUCIQDLz5TaONd8aPj7wjBngI0QckVpB9gDs3Cdz6TWozUjMAIgLM3tTMvBaKAYfqgVXVsEQjTY0EndeJN%2BPg8xMSD28t4qogII9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1NDIwODg1Mzc0MDkiDMfy22QfodIgQbSefSr2AUx2munU%2B%2FcpgA6ndXLKW9z2KnUH5HauKwgMYMwVnJEqMpTfDpfHh4CesrwW6DRvvEYZIsKcwZdUsT%2FnDNY6TP0JNRNcQPai2uBqVnx1vT%2BxxkloEm8njHN9OiYr0sftjFF858uxWKQKh27sGB88o8rW6ijMm%2FvFLDHg52zIY6F5lw1esZHmxYgFwlr%2Bwq%2BPIFofKSLWj63yV1gxGwcD6qSDUSVHNm%2B0nAWdXzbQe2I%2Biiugx6r3N%2F4D6t8TFqLYuWjToY%2F%2FfA7DbP4o6Um2s%2FrKKqQ85RREofKKDkVWEnvLmfBrkTXgKLH34ZwvkM9GBuQKI1mPFDDIsY7BBjrfAWK%2BjVq6rx3LmSR10OZzGfVrnwYMMaFwppSMzPcpo5p7llmVWiseHQnyLusVzUcderUngD5jiBLMTzph0Xv2iF3izN2uhUgrQs8ocR3MV%2B3wEtIM%2Boln6jwbtpwSMJ2UXXjlV1cu7CAtXf6omjDml0qnMCg1c1tDYqdT22VhHDq3d3F30CbgR6OZ6mZCxDlBdU1NXntHmnOlB6509KdXfxKoixoP8TXeOohGAQN3aVt5V0mbMlnxO9JOgeeoELSd%2FN5szLiVuR11e5ncaeXgIiOZbJ1eBfFLfnBusiArV04%3D&X-Amz-Signature=db804e88f6311ee11f77ed4ce02fb19b48837e68940a5003b855ded228687c11&X-Amz-SignedHeaders=host&response-content-disposition=inline' },
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
      { name: 'En la Ciudad de la Furia', audioUrl: 'https://sodastereobucket.s3.us-east-2.amazonaws.com/Soda%20Stereo%20-%20En%20La%20Ciudad%20De%20La%20Furia%20%28Gira%20Me%20Ver%C3%A1s%20Volver%29.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAX4NX6UVA5GHXCJWY%2F20250513%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T192644Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLWVhc3QtMiJGMEQCICfBL9UcWgpSCtV311lKDdxP%2BKaB2ZtFnF3j5ovd5wEQAiBHr6NlRCPICxJoIQzCEkj%2FG2b7y6mH3wdq%2B6w7IC1UhSqiAgj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDU0MjA4ODUzNzQwOSIMMwURRVLjDu1Y3oXZKvYBHR2781IaIjYgVdS2v1AgAtcWqRyOQ9rADB1YQ7q0O8smr2BEWQl4mUmG5yvrkILM1DmFtrg7IltFehWlJk3pI4WFfjW2fQ5sIMC2wj4n4BieiztBKTRoZMT%2FwK8iAXoe2Hh6fMEIof1Fzaqhi5zHanzwaehRoNhb%2F3isGhn%2BstSji3bqgN3LdilyYNReE2hc0T9XkhieZ0OpBf0hZRVE%2FrazvEmD4b%2BukvLFNR0c2zZ1QS5qS8z5XIS%2FWDqMYB0WeLLmis717T4nStzwqrTCgKPm%2Bzloqw%2FMpZjTzxjJ9ZqRLYORvx7lVix%2Fpig0sfIJdMwZzAHzMMixjsEGOuABpMgrWpidRrnxAP2F73cBWNktdGHXDdxLJmzAYLsFCec32SBF4W21XMo7CyWaBiyCd0oq135vIHfnIqLwnPsCsWsgNKMT7IEOIgd1ZR8A22mTcRIM70sfB8yhTK3d80L3x3NlKVPqGsln582tu5Hc%2BDNoUxaSst4BHHzlQmnambXxRwm%2B4U4%2ByrAT7z3QRmyN1KetbNGpTkmR3CU8zViCOTvu%2BJGqVimsLm2a9iawiu16HvZyywu5LidW%2BpXxvMi89xq5oyg3%2FPo8BOblb%2FDd%2Fewn9NYcP8OrOgo2VerYgN0%3D&X-Amz-Signature=c378dd5f831a4da525411052e98c43887dae8aeed2380381644c37bc2e113f08&X-Amz-SignedHeaders=host&response-content-disposition=inline' },
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
      { name: 'De Música Ligera', audioUrl: placeholderAudioUrl },
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
