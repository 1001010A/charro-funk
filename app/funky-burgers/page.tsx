import { RestaurantPage } from '@/components/RestaurantPage';

export default function FunkyBurgersPage() {
  return <RestaurantPage brand="funky" name="Funky Burgers" kicker="Barrio · Sabor · Ritmo" headline="Sabor con el volumen arriba." description="Hamburguesas con identidad, pan de masa madre y combinaciones que le ponen sabor mexicano a la noche." image="/funky-burgers.png" imageAlt="Hamburguesa de Funky Burgers servida con papas" gallery={[{ src: '/funky-burger-fries.png', alt: 'Hamburguesa Funky Burgers con papas servida en plato artesanal' }, { src: '/funky-pachakana-collab.png', alt: 'Colaboración de Funky Burgers y Pachakana con hamburguesa y papas' }, { src: '/funky-burger-betabel.png', alt: 'Hamburguesa Funky Burgers con pan de masa madre de betabel' }]} />;
}
