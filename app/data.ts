export type MenuItem = {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: string;
};

export type Release = {
  slug: string;
  title: string;
  type: string;
  status: string;
  palette: string;
  biography: string[];
  mediaUrl: string;
  mediaPlatform: 'spotify' | 'youtube';
  coverImage: string;
  images: string[];
  officialContent: boolean;
};

export const siteData = {
  whatsapp: '523224759967',
  notice: 'En construcción · Fechas y convocatoria por confirmar',
  brands: [
    { name: 'El Charro Funk', eyebrow: 'Proyecto musical · Sello creativo', href: '/el-charro-funk', description: 'Proyecto musical y sello creativo que conecta identidad mexicana, ritmo y una visión contemporánea.', color: '#e4a72d', image: '/el-charro-funk-portrait.png' },
    { name: 'Esencia gastronómica', eyebrow: 'Funky Burgers · Pachakana', href: '/#esencia-gastronomica', description: 'Funky Burgers y Pachakana reunidos en una sola experiencia gastronómica.', color: '#ef5b2a', image: '/funky-pachakana-collab.png' },
    { name: 'Originality, Style and Essence', eyebrow: 'Batallas · Competencias · Premios', href: '/originalidad-estilo-esencia', description: 'Batallas, competencias, eventos, premios y memoria de una comunidad en movimiento.', color: '#c98a2c', image: '/oee-third-edition.png' },
    { name: 'Charrofunka Company', eyebrow: 'Servicios · Ecosistema · Merch', href: '/#charrofunka-company', description: 'La compañía que conecta música, gastronomía, formación, eventos, baile, comunidad y merch.', color: '#f2d36d', image: '/charrofunka-company-logo.png' },
  ],
  brandEssence: {
    music: {
      name: 'El Charro Funk',
      description: 'Proyecto musical y sello creativo: lanzamientos, sesiones, colaboraciones y experiencias donde la raíz mexicana conversa con nuevas frecuencias.',
    },
    gastronomy: {
      name: 'Esencia gastronómica',
      description: 'Dos cocinas con identidad propia y una misma vocación de encuentro.',
      brands: [
        { name: 'Funky Burgers', href: '/funky-burgers', detail: 'Hamburguesas, menú bilingüe y colaboraciones.' },
        { name: 'Pachakana', href: '/pachakana', detail: 'Pizza, wings, menú bilingüe y experiencias alrededor del fuego.' },
      ],
    },
    oee: {
      name: 'Originality, Style and Essence',
      description: 'Batallas Neoprimitivas, talleres, encuentros y archivo de una comunidad que convierte la danza en exploración artística.',
      highlights: ['Próxima cita · 2027', 'Eventos y talleres', 'Premios OEE · categorías por confirmar'],
    },
    company: {
      name: 'Charrofunka Company',
      description: 'La casa que conecta y presenta, a grandes rasgos, todos los servicios y expresiones del ecosistema.',
      services: ['Música y disquera', 'Proyectos gastronómicos', 'Eventos, clases y networking', 'Baile y experiencias', 'Merch · imágenes por integrar'],
    },
  },
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
    youtubeOfficialVideoUrl: 'https://www.youtube.com/watch?v=iXctZXkKVtI',
  },
  releases: [
    {
      slug: 'palpita-instrumental',
      title: 'Palpita',
      type: 'Sencillo',
      status: 'Disponible',
      palette: 'album-one',
      biography: [
        '“Palpita” es el primer sencillo de El Charro Funk, una obra nacida desde Guadalajara, Jalisco, que une el Funk, el Hip Hop y la identidad mexicana para hablar de algo que todos compartimos: la vida, la memoria y el legado de quienes estuvieron antes que nosotros.',
        'Inspirada en la esencia del Día de Muertos, “Palpita” parte de una idea: los que se fueron no necesariamente dejan de acompañarnos. Sus recuerdos, enseñanzas, amor y sueños continúan viviendo en nosotros. La canción convierte esa conexión entre vivos y muertos en ritmo, movimiento y celebración.',
        'La letra recorre el ciclo de la vida: nacer, crecer, perder, recordar, crear y volver a comenzar. Habla de enfrentar la vida con fuerza, mantener nuestra identidad, caminar hacia la luz y encontrar creatividad incluso en los momentos difíciles. El Mictlán aparece como una referencia simbólica a ese camino entre la vida y la muerte, mientras que la tierra tapatía representa las raíces desde donde nace esta historia.',
        '“Palpita” también es un homenaje personal a quienes han dejado una huella en el camino. La frase “Adiós a mi tía, que mientras ella ascendía, yo no comprendía” representa ese momento en que la pérdida todavía no puede entenderse, pero con el tiempo se transforma en memoria, aprendizaje y fuerza para continuar.',
        'El mensaje es sencillo: vive, crea, cree y siente. No olvides a quienes te ayudaron a llegar hasta aquí. Lleva su energía contigo, transforma tus experiencias en arte y sigue avanzando. Porque mientras exista memoria, amor y movimiento, el corazón sigue palpitando.',
        'Palpita al nacer. Palpita al vivir. Palpita al recordar. Palpita al renacer. El Charro Funk — haciendo arte directo desde el corazón.',
        'Sponsored by CHARROFUNKA COMPANY',
      ],
      mediaUrl: 'https://open.spotify.com/track/0jur7epGrHdAZZ83VMuM6J',
      mediaPlatform: 'spotify',
      coverImage: '/palpita-cover.jpg',
      images: [],
      officialContent: true,
    },
    {
      slug: 'el-santo-charro',
      title: 'El Santo Charro',
      type: 'Sencillo',
      status: 'Disponible',
      palette: 'album-three',
      biography: [
        '“Santo Charro” es una declaración de identidad, fe y energía. A través de un violín profundo, canto, Funk y una esencia mexicana, El Charro Funk presenta a un personaje que camina acompañado por Dios, por su arte y por las personas que encuentra en el camino.',
        'La canción habla de dar, compartir e intercambiar talento sin competir ni compararse. Cada artista, cada compañero y cada persona aporta una pieza diferente al gran rompecabezas de la vida. Al fusionar poderes, estilos y experiencias, se crea una fuerza colectiva capaz de iluminar nuevos caminos.',
        'El Santo Charro representa al artista que protege, sirve y transforma a través de su talento. Es eléctrico, apasionado y espiritual; lleva consigo la fuerza de sus raíces, pero también la libertad de crear algo nuevo. Su corazón es su energía central y su arte es la manera de conectar con los demás.',
        'La letra recorre conceptos como la luz, el camino, la paz, la gratitud, el amor, la protección y el renacimiento. La fe aparece como una fuerza que acompaña al personaje mientras avanza, descubre nuevos caminos y encuentra propósito en servir a través del arte.',
        '“Soy el Santo Charro” también habla de reconocer el propio don sin caer en el ego: tener un talento es una responsabilidad para compartirlo. La canción invita a sentir, moverse, crear y caminar con confianza, entendiendo que cada persona tiene una pieza única que aportar.',
        'El Santo Charro no busca ser perfecto. Busca ser auténtico. Es el charro que nace de nuevo cada día, que agradece, que trabaja, que protege lo que ama y que convierte su energía en música.',
        'Soy el Santo Charro. Soy calor. Soy corazón. Soy energía. Soy arte. Y sigo mi camino con Dios.',
        'Sponsored by CHARROFUNKA COMPANY',
      ],
      mediaUrl: 'https://open.spotify.com/track/1H83GSy1eC8kGztTpgwe71',
      mediaPlatform: 'spotify',
      coverImage: '/el-santo-charro-cover.png',
      images: ['/el-charro-funk-calavera.png', '/el-charro-funk-caballo.png'],
      officialContent: true,
    },
    {
      slug: 'funk-moderno',
      title: 'Funk Moderno',
      type: 'Sencillo',
      status: 'Disponible',
      palette: 'album-two',
      biography: [
        '“Funk Moderno” es una llamada al cambio. Una conversación musical con el presente y el futuro, donde El Charro Funk utiliza el ritmo, la palabra y la creatividad para cuestionar nuestra manera de pensar y abrirnos a nuevas posibilidades.',
        'La canción habla de evolucionar hacia lo positivo: respirar mejor, cuidar el planeta, transformar nuestros hábitos, cambiar nuestra perspectiva y atrevernos a imaginar nuevas formas de vivir. Desde el calentamiento global hasta la influencia de nuestras acciones cotidianas, la letra convierte temas del mundo actual en energía, movimiento y conciencia.',
        '“Funk Moderno” representa una nueva manera de crear: fusionar estilos, culturas, geografías y generaciones, tomando frutos del pasado para construir algo diferente hacia el futuro. El Funk se convierte así en una herramienta para comunicar, reflexionar y conectar.',
        'La canción también reconoce que los grandes cambios comienzan con acciones individuales, pero se vuelven verdaderamente poderosos cuando los hacemos juntos. Los seres humanos hemos cambiado momentos de la historia, hemos creado nuevas ideas y seguimos evolucionando; ahora nos corresponde decidir qué tipo de futuro queremos construir.',
        'Su mensaje es directo: no te enredes, respira, piensa diferente y actúa. Si una idea puede cambiar, también puede evolucionar. Si un estilo puede transformarse, puede encontrar nuevas formas de expresarse. Y si nosotros podemos cambiar, también podemos cambiar lo que nos rodea.',
        '“Funk Moderno” es el sonido de una mente abierta al futuro. Un Funk que no se queda quieto. Un Funk que evoluciona. Un Funk que mezcla raíces con nuevas ideas. Un Funk Moderno para un mundo en movimiento.',
        'Sponsored by CHARROFUNKA COMPANY',
      ],
      mediaUrl: 'https://open.spotify.com/track/6RQ818DBLvltbQPI1DpSMB',
      mediaPlatform: 'spotify',
      coverImage: '/funk-moderno-cover.png',
      images: ['/funk-moderno-portrait.png', '/funk-moderno-neon.png'],
      officialContent: true,
    },
    {
      slug: 'chi-funk-therapy',
      title: 'Chi Funk Therapy',
      type: 'Próximo sencillo',
      status: 'Estreno · 11 de octubre',
      palette: 'album-four',
      biography: [
        'A positive-energy journey through music, movement, fitness, self-care, and conscious living. 🌿✨',
        'Chi Funk Therapy is about relaxing your mind, taking care of your body, thinking positively, connecting with nature, expressing yourself, and becoming the best version of yourself.',
        'Move. Breathe. Create. Elevate. Keep ascending.',
        'For everyone around the world working on themselves, following their higher self, and choosing positive energy every day. 🌎🔥',
        'Chi Funk Therapy — feel the rhythm, elevate your energy.',
      ],
      mediaUrl: 'https://youtu.be/SQWVwcwLcWs',
      mediaPlatform: 'youtube',
      coverImage: '/chi-funk-therapy-cover.png',
      images: ['/chi-funk-therapy-01.png', '/chi-funk-therapy-02.png', '/chi-funk-therapy-03.png', '/chi-funk-therapy-04.png', '/chi-funk-therapy-05.png', '/chi-funk-therapy-06.png', '/chi-funk-therapy-07.png', '/chi-funk-therapy-08.png'],
      officialContent: true,
    },
  ] satisfies Release[],
  catalogTitles: ['Siente', 'Humilde', 'Braxhilican', 'Mis Experiencias', 'Una Nueva Canción', 'Universo Creado Para Ti', 'Trap Meixhica'],
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
