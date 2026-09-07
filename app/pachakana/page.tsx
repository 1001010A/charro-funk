import type { Metadata } from 'next';
import { RestaurantPage } from '@/components/RestaurantPage';

export const metadata: Metadata = {
  title: 'Pachakana',
  description: 'Pachakana: pizzas, wings, menú bilingüe y contacto por WhatsApp.',
};

export default function PachakanaPage() {
  return <RestaurantPage brand="pachakana" name="Pachakana" kicker="Pizza · Wings · Encuentro" headline="El fuego también cuenta historias." description="Masa, fuego y comunidad en una propuesta que mezcla sabor contemporáneo, color popular y raíz mexicana." image="/funky-pachakana-collab.png" gallery={[{ src: '/funky-pachakana-collab.png', alt: 'Colaboración de Pachakana y Funky Burgers' }, { src: '/funky-burger-betabel.png', alt: 'Hamburguesa de colaboración servida en espacio al aire libre' }]} />;
}
