import type { Metadata } from 'next';
import { RestaurantPage } from '@/components/RestaurantPage';

export const metadata: Metadata = {
  title: 'Pachakana',
  description: 'Pachakana: pizzas, wings, menú bilingüe y contacto por WhatsApp.',
};

export default function PachakanaPage() {
  return <RestaurantPage brand="pachakana" name="Pachakana" kicker="Pizza · Wings · Encuentro" headline="El fuego también cuenta historias." description="Masa, fuego y comunidad en una propuesta que mezcla sabor contemporáneo, color popular y raíz mexicana." image="/pachakana-statue-pizza.png" imageAlt="Pizza Pachakana presentada frente a un horno de leña" gallery={[{ src: '/pachakana-pizza-flavors.png', alt: 'Pizza Pachakana con carnes, aceitunas y pimiento verde' }, { src: '/pachakana-salad.png', alt: 'Ensalada fresca servida en vajilla de colores mexicanos' }, { src: '/pachakana-pizza-zucchini.png', alt: 'Pizza Pachakana con calabacita, pepperoni y queso' }, { src: '/funky-pachakana-collab.png', alt: 'Colaboración gastronómica de Pachakana y Funky Burgers' }]} />;
}
