import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteData } from '@/app/data';
import { EventStrip, SiteFooter, SiteHeader } from './SiteChrome';

type RestaurantProps = {
  brand: 'funky' | 'pachakana';
  name: string;
  kicker: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  gallery?: { src: string; alt: string }[];
};

export function RestaurantPage({ brand, name, kicker, headline, description, image, imageAlt, gallery = [] }: RestaurantProps) {
  const orderText = encodeURIComponent(`Hola, quiero hacer un pedido en ${name}. [Mensaje demostrativo]`);
  const whatsappUrl = `https://wa.me/${siteData.whatsapp}?text=${orderText}`;

  return (
    <main className={`restaurant-page restaurant-page--${brand}`}>
      <SiteHeader />
      <section className="restaurant-hero">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
        <div className="restaurant-shade" />
        <div className="restaurant-hero__content">
          <Link className="back-link" href="/"><ArrowLeft size={17} /> Ecosistema</Link>
          <p className="eyebrow">{kicker}</p><h1>{headline}</h1><p className="hero-copy">{description}</p>
          <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Ordenar por WhatsApp</a>
          <small>Número y mensaje demostrativos. Sustituir antes de publicar.</small>
        </div>
      </section>
      <section className="menu-section" aria-labelledby="menu-title">
        <div className="section-heading menu-heading">
          <div><p className="eyebrow">Pachakana × Funkyburgs</p><h2 id="menu-title">Menú</h2></div>
        </div>
        <div className="menu-poster-grid">
          <figure><Image src="/menu-pachakana-funkyburgs-1.png" alt="Primera página del menú de Pachakana y Funkyburgs" width={1152} height={1536} sizes="(max-width: 760px) 100vw, 46vw" /></figure>
          <figure><Image src="/menu-pachakana-funkyburgs-2.png" alt="Segunda página del menú de Pachakana y Funkyburgs" width={1152} height={1536} sizes="(max-width: 760px) 100vw, 46vw" /></figure>
          <figure className="menu-poster-grid__promo"><Image src="/menu-pachakana-funkyburgs-promo.png" alt="Anuncio del menú completo de Pachakana y Funkyburgs" width={1152} height={1536} sizes="(max-width: 760px) 100vw, 58vw" /></figure>
        </div>
      </section>
      {gallery.length > 0 && (
        <section className="brand-proof" aria-labelledby={`${brand}-archivo`}>
          <div className="section-heading"><p className="eyebrow">Hecho acá · Con identidad</p><h2 id={`${brand}-archivo`}>Sabor que sí tiene barrio.</h2><p>Material compartido por la marca. La dirección visual mezcla energía contemporánea, color popular y raíz mexicana.</p></div>
          <div className="brand-proof__grid">
            {gallery.map((item) => <figure key={item.src}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /></figure>)}
          </div>
        </section>
      )}
      <EventStrip />
      <section className="cross-cta"><p className="eyebrow">Funky Burgers × Pachakana</p><h2>{brand === 'funky' ? 'También hay fuego y pizza.' : 'También hay burgers con ritmo.'}</h2><Link href={brand === 'funky' ? '/pachakana' : '/funky-burgers'}>{brand === 'funky' ? 'Conocer Pachakana' : 'Conocer Funky Burgers'} <ArrowUpRight size={19} /></Link><Link href="/">Ver todas las marcas <ArrowUpRight size={19} /></Link></section>
      <SiteFooter />
    </main>
  );
}
