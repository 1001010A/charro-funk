'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, MessageCircle } from 'lucide-react';
import type { MenuItem } from '@/app/data';
import { siteData } from '@/app/data';
import { EventStrip, SiteFooter, SiteHeader } from './SiteChrome';

type RestaurantProps = {
  brand: 'funky' | 'pachakana';
  name: string;
  kicker: string;
  headline: string;
  description: string;
  image: string;
  gallery?: { src: string; alt: string }[];
};

export function RestaurantPage({ brand, name, kicker, headline, description, image, gallery = [] }: RestaurantProps) {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const menu = siteData.menus[brand];
  const orderText = encodeURIComponent(`Hola, quiero hacer un pedido en ${name}. [Mensaje demostrativo]`);
  const whatsappUrl = `https://wa.me/${siteData.whatsapp}?text=${orderText}`;

  return (
    <main className={`restaurant-page restaurant-page--${brand}`}>
      <SiteHeader />
      <section className="restaurant-hero">
        <Image src={image} alt="Fotografía conceptual para reemplazar por material oficial" fill priority sizes="100vw" />
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
          <div><p className="eyebrow">Selección de la casa</p><h2 id="menu-title">{language === 'es' ? 'Menú' : 'Menu'}</h2></div>
          <div className="language-toggle" aria-label="Idioma del menú"><button className={language === 'es' ? 'active' : ''} onClick={() => setLanguage('es')} aria-pressed={language === 'es'}>ES</button><button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button></div>
        </div>
        <div className="menu-grid">
          {menu.map((item: MenuItem, index) => <article className="menu-item" key={item.name}><span className="menu-index">0{index + 1}</span><div><h3>{language === 'es' ? item.name : item.nameEn}</h3><p>{language === 'es' ? item.description : item.descriptionEn}</p></div><strong>{item.price}</strong></article>)}
        </div>
        <p className="menu-note">Menú y precios de muestra. Recetas, alérgenos, disponibilidad y montos están pendientes de validación.</p>
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
      <section className="cross-cta"><p className="eyebrow">Parte de El Charro Funk</p><h2>Cáele al ecosistema completo.</h2><Link href="/">Explorar las marcas <ArrowUpRight size={19} /></Link></section>
      <SiteFooter />
    </main>
  );
}
