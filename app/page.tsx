import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Disc3, UtensilsCrossed, WandSparkles } from 'lucide-react';
import { siteData } from './data';
import { DemoNotice, SiteFooter, SiteHeader } from '@/components/SiteChrome';

const icons = [Disc3, UtensilsCrossed, UtensilsCrossed, WandSparkles];

export default function Home() {
  return (
    <main className="home-page">
      <DemoNotice />
      <SiteHeader />
      <section className="home-hero">
        <Image src="/charro-hero.png" alt="Escena conceptual de tornamesa y micrófono" fill priority sizes="100vw" />
        <div className="home-hero__shade" />
        <div className="home-hero__content">
          <p className="eyebrow">Charrofunka Company · Guadalajara</p>
          <h1>Una misma raíz.<br /><em>Cuatro formas de vivirla.</em></h1>
          <p>Cuatro caminos de una misma compañía creativa: música, cocina, comunidad y experiencias nacidas en México.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#ecosistema">Conocer las marcas <ArrowDown size={18} /></a>
            <Link className="text-button" href="/el-charro-funk"><Disc3 size={19} /> Escuchar el proyecto</Link>
          </div>
        </div>
        <span className="hero-side-label">EL CHARRO FUNK — ECOSISTEMA CREATIVO</span>
      </section>
      <section className="ecosystem" id="ecosistema" aria-labelledby="ecosistema-title">
        <div className="section-heading">
          <p className="eyebrow">El ecosistema</p><h2 id="ecosistema-title">Cáele por donde quieras.</h2>
          <p>Cada marca trae su propio sazón. Juntas comparten raíz, escenario y una comunidad que no se queda quieta.</p>
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
        <span className="manifesto-kicker">Ritmo que alimenta.<br />Sazón que reúne.<br />Barrio que permanece.</span>
        <blockquote>“De este lado, la raíz no es museo: se mueve, se mezcla y arma comunidad.”</blockquote>
        <small>Manifiesto provisional de marca</small>
      </section>
      <SiteFooter />
    </main>
  );
}
