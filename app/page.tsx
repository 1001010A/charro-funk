import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Award, BriefcaseBusiness, Disc3, Handshake, PackageOpen, UtensilsCrossed, WandSparkles } from 'lucide-react';
import { siteData } from './data';
import { DemoNotice, SiteFooter, SiteHeader } from '@/components/SiteChrome';

const icons = [Disc3, UtensilsCrossed, WandSparkles, BriefcaseBusiness];

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
      <section className="brand-essence" id="esencia-de-la-marca" aria-labelledby="brand-essence-title">
        <div className="brand-essence__heading">
          <p className="eyebrow">Cuatro formatos · una misma raíz</p>
          <h2 id="brand-essence-title">Esencia de la marca</h2>
          <p>Un recorrido por la música, la mesa, el movimiento y los servicios que reúne Charrofunka Company.</p>
        </div>

        <div className="essence-format essence-format--music">
          <div className="essence-format__number">01</div>
          <div className="essence-format__copy">
            <p className="eyebrow">Disquera · Proyecto musical</p>
            <h3>{siteData.brandEssence.music.name}</h3>
            <p>{siteData.brandEssence.music.description}</p>
            <Link className="text-button" href="/el-charro-funk">Entrar al universo musical <ArrowUpRight size={18} /></Link>
          </div>
          <figure className="essence-format__visual">
            <Image src="/charro-hero.png" alt="Micrófono y tornamesa del universo visual de El Charro Funk" fill sizes="(max-width: 800px) 100vw, 42vw" />
          </figure>
        </div>

        <div className="essence-format essence-format--food" id="esencia-gastronomica">
          <div className="essence-format__number">02</div>
          <div className="essence-format__copy">
            <p className="eyebrow">Cocina · Colaboración</p>
            <h3>{siteData.brandEssence.gastronomy.name}</h3>
            <p>{siteData.brandEssence.gastronomy.description}</p>
            <div className="essence-subbrands">
              {siteData.brandEssence.gastronomy.brands.map((brand) => (
                <Link href={brand.href} key={brand.name}>
                  <span><strong>{brand.name}</strong><small>{brand.detail}</small></span>
                  <ArrowUpRight size={19} />
                </Link>
              ))}
            </div>
          </div>
          <figure className="essence-format__visual">
            <Image src="/funky-pachakana-collab.png" alt="Colaboración gastronómica de Funky Burgers y Pachakana" fill sizes="(max-width: 800px) 100vw, 42vw" />
          </figure>
        </div>

        <div className="essence-format essence-format--oee">
          <div className="essence-format__number">03</div>
          <div className="essence-format__copy">
            <p className="eyebrow">OEE · Danza · Comunidad</p>
            <h3>{siteData.brandEssence.oee.name}</h3>
            <p>{siteData.brandEssence.oee.description}</p>
            <ul className="essence-highlights">
              {siteData.brandEssence.oee.highlights.map((highlight, index) => <li key={highlight}>{index === 2 ? <Award size={17} /> : <WandSparkles size={17} />}{highlight}</li>)}
            </ul>
            <Link className="text-button" href="/originalidad-estilo-esencia">Ver eventos, planes y boletos <ArrowUpRight size={18} /></Link>
          </div>
          <figure className="essence-format__visual">
            <Image src="/oee-stage.png" alt="Escenario de una experiencia de Originality, Style and Essence" fill sizes="(max-width: 800px) 100vw, 42vw" />
          </figure>
        </div>

        <div className="essence-format essence-format--company" id="charrofunka-company">
          <div className="essence-format__number">04</div>
          <div className="essence-format__copy">
            <p className="eyebrow">Servicios · Formación · Comunidad</p>
            <h3>{siteData.brandEssence.company.name}</h3>
            <p>{siteData.brandEssence.company.description}</p>
            <ul className="company-services">
              {siteData.brandEssence.company.services.map((service, index) => <li key={service}>{index === 3 ? <PackageOpen size={18} /> : <Handshake size={18} />}<span>{service}</span></li>)}
            </ul>
            <p className="essence-pending">El catálogo completo de servicios y sus datos de contratación se integrará cuando la marca entregue la información aprobada.</p>
          </div>
          <figure className="merch-placeholder">
            <PackageOpen size={34} aria-hidden="true" />
            <figcaption><strong>Merch en camino</strong><span>Espacio reservado para las imágenes oficiales.</span></figcaption>
          </figure>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
