export type MenuItem = {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: string;
};

export const siteData = {
  whatsapp: '5210000000000',
  notice: 'En construcción · Fechas y convocatoria por confirmar',
  brands: [
    { name: 'El Charro Funk', eyebrow: 'Proyecto musical · Sello creativo', href: '/el-charro-funk', description: 'Proyecto musical y sello creativo que conecta identidad mexicana, ritmo y una visión contemporánea.', color: '#e4a72d', image: '/charro-hero.png' },
    { name: 'Funky Burgers', eyebrow: 'Barrio · Sabor · Ritmo', href: '/funky-burgers', description: 'Hamburguesas con identidad, pan de masa madre y una vibra hecha para compartir.', color: '#ef5b2a', image: '/funky-pachakana-collab.png' },
    { name: 'Pachakana', eyebrow: 'Pizza · Wings · Encuentro', href: '/pachakana', description: 'Fuego, masa y comunidad con una mirada contemporánea y raíz mexicana.', color: '#d89b2b', image: '/funky-pachakana-collab.png' },
    { name: 'Originality, Style and Essence', eyebrow: 'Batallas · Danza · Comunidad', href: '/originalidad-estilo-esencia', description: 'Una plataforma para la escena, la competencia y la memoria del movimiento.', color: '#c98a2c', image: '/oee-third-edition.png' },
  ],
  events: [
    { date: '2027', title: 'Batallas Neoprimitivas · 3ra edición', place: 'Guadalajara · Sede por anunciar', note: 'Coming soon' },
    { date: 'PRONTO', title: 'Talleres & talento invitado', place: 'Horarios y participantes por anunciar', note: 'En preparación' },
  ],
  menus: {
    funky: [
      { name: 'La Clásica', nameEn: 'The Classic', description: 'Carne smash, queso, pepinillos y salsa de la casa.', descriptionEn: 'Smash patty, cheese, pickles and house sauce.', price: '$—' },
      { name: 'Doble Groove', nameEn: 'Double Groove', description: 'Doble carne, doble queso, cebolla dorada y aderezo ahumado.', descriptionEn: 'Double patty, double cheese, grilled onion and smoky dressing.', price: '$—' },
      { name: 'Verde Funk', nameEn: 'Green Funk', description: 'Opción vegetal, hojas frescas, pepinillos y salsa especiada.', descriptionEn: 'Plant-based option, fresh greens, pickles and spiced sauce.', price: '$—' },
      { name: 'Papas Backstage', nameEn: 'Backstage Fries', description: 'Papas crujientes con mezcla de especias de la casa.', descriptionEn: 'Crispy fries with our house spice blend.', price: '$—' },
    ] satisfies MenuItem[],
    pachakana: [
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
  oee: {
    presentedBy: 'Funkyburgs & Pachakana presenta',
    edition: '3ra edición',
    status: 'Coming soon · 2027',
    eventName: 'Batallas Neoprimitivas',
    registrationOpen: false,
    packages: [
      { name: 'Copper', price: '$1,200', featured: false, includes: ['1 categoría de batalla', '2 workshops', '1 conversatorio', 'Acceso al evento'] },
      { name: 'Silver', price: '$1,800', featured: false, includes: ['1 categoría de batalla', '4 workshops', 'Conversatorios', 'Acceso al evento'] },
      { name: 'Golden', price: '$5,500', featured: true, includes: ['2 categorías de batalla', 'Todos los workshops', 'Conversatorio', 'Hospedaje de 2 noches', 'Comidas durante 2 días', 'Bebidas', 'After party'] },
    ],
  },
};
