export type MenuItem = {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: string;
};

export const siteData = {
  whatsapp: '5210000000000',
  notice: 'Contenido demostrativo · Datos finales pendientes',
  brands: [
    { name: 'Funky Burgers', eyebrow: 'Smash · Sabor · Ritmo', href: '/funky-burgers', description: 'Hamburguesas con actitud, una cocina directa y noches que suben el volumen.', color: '#ff3db8', image: '/funky-burgers.png' },
    { name: 'Pachakama', eyebrow: 'Cocina · Raíz · Encuentro', href: '/pachakama', description: 'Una mesa contemporánea inspirada en ingredientes, fuego y comunidad.', color: '#e6672e', image: '/oee-stage.png' },
    { name: 'Originalidad, Estilo y Esencia', eyebrow: 'Producción · Dirección · Experiencias', href: '/originalidad-estilo-esencia', description: 'La firma que convierte ideas en encuentros memorables.', color: '#e9a84a', image: '/oee-stage.png' },
  ],
  events: [
    { date: '18 OCT', title: 'Sesión Nocturna 01', place: 'Sede por anunciar · Guadalajara', note: 'Evento demostrativo' },
    { date: '09 NOV', title: 'Mesa, Música & Fuego', place: 'Sede por anunciar · Guadalajara', note: 'Evento demostrativo' },
  ],
  menus: {
    funky: [
      { name: 'La Clásica', nameEn: 'The Classic', description: 'Carne smash, queso, pepinillos y salsa de la casa.', descriptionEn: 'Smash patty, cheese, pickles and house sauce.', price: '$—' },
      { name: 'Doble Groove', nameEn: 'Double Groove', description: 'Doble carne, doble queso, cebolla dorada y aderezo ahumado.', descriptionEn: 'Double patty, double cheese, grilled onion and smoky dressing.', price: '$—' },
      { name: 'Verde Funk', nameEn: 'Green Funk', description: 'Opción vegetal, hojas frescas, pepinillos y salsa especiada.', descriptionEn: 'Plant-based option, fresh greens, pickles and spiced sauce.', price: '$—' },
      { name: 'Papas Backstage', nameEn: 'Backstage Fries', description: 'Papas crujientes con mezcla de especias de la casa.', descriptionEn: 'Crispy fries with our house spice blend.', price: '$—' },
    ] satisfies MenuItem[],
    pachakama: [
      { name: 'Taco de Brasa', nameEn: 'Ember Taco', description: 'Proteína del día, vegetales tatemados y salsa de temporada.', descriptionEn: 'Daily protein, fire-roasted vegetables and seasonal salsa.', price: '$—' },
      { name: 'Bowl de la Milpa', nameEn: 'Milpa Bowl', description: 'Granos, hojas, maíz y aderezo cítrico.', descriptionEn: 'Grains, greens, corn and citrus dressing.', price: '$—' },
      { name: 'Tostada del Pacífico', nameEn: 'Pacific Tostada', description: 'Preparación fresca del día, cítricos y chile suave.', descriptionEn: 'Fresh daily preparation, citrus and mild chile.', price: '$—' },
      { name: 'Agua de Temporada', nameEn: 'Seasonal Agua Fresca', description: 'Fruta e ingredientes de temporada.', descriptionEn: 'Seasonal fruit and ingredients.', price: '$—' },
    ] satisfies MenuItem[],
  },
  music: {
    appleArtistUrl: 'https://music.apple.com/us/artist/el-charro-funk/1776769414',
    youtubeOfficialVideoUrl: 'https://www.youtube.com/watch?v=iXctZXkKVtI',
  },
  releases: [
    { title: 'Palpita (Instrumental)', type: 'Título visible en Apple Music', palette: 'album-one' },
    { title: 'Siente', type: 'Título visible en Apple Music', palette: 'album-two' },
    { title: 'El Santo Charro', type: 'Título visible en Apple Music', palette: 'album-three' },
  ],
  catalogTitles: ['Humilde', 'Braxhilican', 'Mis Experiencias', 'Una Nueva Canción', 'Universo Creado Para Ti', 'Funk Moderno', 'Trap Meixhica'],
};
