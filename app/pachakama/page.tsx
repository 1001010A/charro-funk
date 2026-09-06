import type { Metadata } from 'next';
import { RestaurantPage } from '@/components/RestaurantPage';

export const metadata: Metadata = {
  title: 'Pachakama',
  description: 'Landing demostrativa de Pachakama con menú bilingüe y pedidos por WhatsApp.',
};

export default function PachakamaPage() {
  return <RestaurantPage brand="pachakama" name="Pachakama" kicker="Cocina · Raíz · Encuentro" headline="La mesa también es un escenario." description="Cocina contemporánea inspirada en el fuego, la temporada y el placer de reunirnos. Una propuesta abierta a evolucionar con su identidad definitiva." image="/oee-stage.png" />;
}
