import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Disc3, UtensilsCrossed, WandSparkles } from 'lucide-react';
import { siteData } from './data';
import { DemoNotice, SiteFooter, SiteHeader } from '@/components/SiteChrome';

const icons = [UtensilsCrossed, UtensilsCrossed, WandSparkles];

export default function Home() {
  return (
    <main className="home-page">
      <DemoNotice />
      <SiteHeader />
      <section className="home-hero">
        <Image src="/charro-hero.png" alt="Escena conceptual de tornamesa y micrófono" fill priority sizes="100vw" />
        <div className="home-hero__shade" />
        <div className="home-hero__content">
          <p className="eyebrow">Guadalajara · Música · Cocina · Experiencias</p>
          <h1>Una misma raíz.<br /><em>Cuatro formas de vivirla.</em></h1>
          <p>El Charro Funk reúne música, hospitalidad y producción creativa en un ecosistema hecho para encontrarnos.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#ecosistema">Conocer las marcas <ArrowDown size={18} /></a>
            <Link className="text-button" href="/el-charro-funk"><Disc3 size={19} /> Escuchar el proyecto</Link>
          </div>
        </div>
        <span className="hero-side-label">EL CHARRO FUNK — ECOSISTEMA CREATIVO</span>
      </section>
      <section className="ecosystem" id="ecosistema" aria-labelledby="ecosistema-title">
        <div className="section-heading">
          <p className="eyebrow">El ecosistema</p><h2 id="ecosistema-title">Elige por dónde entrar.</h2>
          <p>Cada marca tiene su propia voz. Juntas comparten escenario, comunidad y una visión creativa.</p>
        </div>
        <div className="brand-grid">
          {siteData.brands.map((brand, index) => {
            const Icon = icons[index];
            return (
              <Link className="brand-card" href={brand.href} key={brand.name} style={{ '--brand-color': brand.color } as React.CSSProperties}>
                <Image src={brand.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" /><span className="brand-card__wash" />
                <span className="brand-card__number">0{index + 1}</span><span className="brand-card__icon"><Icon size={22} /></span>
                <span className="brand-card__content"><small>{brand.eyebrow}</small><strong>{brand.name}</strong><span>{brand.description}</span></span>
                <span className="brand-card__arrow"><ArrowUpRight size={22} /></span>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="manifesto">
        <span className="manifesto-kicker">Música que alimenta.<br />Comida que reúne.<br />Eventos que permanecen.</span>
        <blockquote>“No somos cuatro proyectos separados. Somos una conversación entre ritmo, mesa y escenario.”</blockquote>
        <small>Manifiesto provisional de marca</small>
      </section>
      <SiteFooter />
    </main>
  );
}
