import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin, MessageCircle } from 'lucide-react';
import { siteData } from '@/app/data';
import { OeeRegistration } from '@/components/OeeRegistration';
import { DemoNotice, SiteFooter, SiteHeader } from '@/components/SiteChrome';

export default function OeePage() {
  const contactUrl = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Hola, quiero información sobre Batallas Neoprimitivas · 3ra edición. [Mensaje demostrativo]')}`;

  return (
    <main className="oee-page">
      <DemoNotice />
      <SiteHeader />

      <section className="oee-hero">
        <div className="oee-hero__copy">
          <Link className="back-link" href="/"><ArrowLeft size={17} /> Ecosistema</Link>
          <p className="eyebrow">{siteData.oee.presentedBy}</p>
          <span className="event-seal">{siteData.oee.edition} · Guadalajara</span>
          <h1>Batallas<br /><em>Neo—</em><br />Primitivas.</h1>
          <p>Originality, Style and Essence reúne danza, improvisación y comunidad en una competencia con pulso propio: futurismo de barrio, raíz mexicana y movimiento sin molde.</p>
          <div className="hero-actions"><a className="primary-button" href="#registro">Quiero registrarme <ArrowUpRight size={18} /></a><a className="text-button" href="#archivo">Ver la historia</a></div>
          <strong className="coming-soon">{siteData.oee.status}</strong>
        </div>
        <figure className="oee-hero__image"><Image src="/oee-third-edition.png" fill priority alt="Flyer compartido de Batallas Neoprimitivas, tercera edición" sizes="(max-width: 800px) 100vw, 46vw" /><figcaption>Arte compartido · tercera edición</figcaption></figure>
      </section>

      <section className="oee-story" aria-label="Principios de OEE">
        <div><span>O</span><p>Originalidad para romper la copia.</p></div>
        <div><span>S</span><p>Style para firmar cada movimiento.</p></div>
        <div><span>E</span><p>Essence para dejar memoria.</p></div>
      </section>

      <section className="featured-event" aria-labelledby="tercera-edicion">
        <figure className="event-poster event-poster--image"><Image src="/oee-battle-rules.png" fill alt="Flyer de referencia con dinámica de Batallas Neoprimitivas" sizes="(max-width: 700px) 100vw, 42vw" /><figcaption>Referencia de formato · detalles por confirmar</figcaption></figure>
        <div className="featured-event__copy">
          <p className="eyebrow">Tercera edición · Próximamente</p>
          <h2 id="tercera-edicion">La pista vuelve a abrirse.</h2>
          <p>La nueva edición está en preparación. El concepto retoma batallas por consignas, freestyle, objetos cotidianos e improvisación. Categorías, tiempos, jurado y dinámica final se publicarán cuando cierre la producción.</p>
          <dl><div><dt><CalendarDays size={18} /> Fecha</dt><dd>2027 · Coming soon</dd></div><div><dt><MapPin size={18} /> Lugar</dt><dd>Guadalajara · Sede por anunciar</dd></div></dl>
          <a href={contactUrl} target="_blank" rel="noreferrer" className="text-button">Pedir información <MessageCircle size={18} /></a>
        </div>
      </section>

      <section className="oee-archive" id="archivo" aria-labelledby="archivo-title">
        <div className="section-heading"><p className="eyebrow">Memoria de la escena</p><h2 id="archivo-title">Lo que pasó también construye lo que viene.</h2><p>Este archivo reunirá fotografías, ganadores, jurado, sedes y momentos de las competencias organizadas en años anteriores.</p></div>
        <div className="archive-grid"><article><span>Edición 01</span><h3>El primer llamado.</h3><p>Biografía, sede, participantes y galería por integrar con el material oficial.</p></article><article><span>Edición 02</span><h3>La comunidad crece.</h3><p>Resultados, testimonios y memoria visual por integrar con el archivo del organizador.</p></article><article className="archive-grid__current"><span>Edición 03</span><h3>Coming soon.</h3><p>Convocatoria, talleres, horarios, talento invitado y locación en preparación.</p></article></div>
      </section>

      <section className="oee-about" aria-labelledby="oee-about-title"><div><p className="eyebrow">La marca detrás del encuentro</p><h2 id="oee-about-title">Originality,<br />Style and Essence.</h2></div><div><p>OEE funciona como plataforma creativa para competencias, talleres y encuentros de cultura urbana. La biografía completa, los logos oficiales y la historia del proyecto se integrarán cuando sean proporcionados.</p><span className="pending-chip">Biografía y logos · pendientes</span></div></section>

      <section className="registration-section" id="registro" aria-labelledby="registro-title">
        <div className="registration-intro"><p className="eyebrow">Pre-registro · 3ra edición</p><h2 id="registro-title">Entra a la batalla.</h2><p>Deja preparada tu solicitud para recibir la convocatoria cuando se confirmen fecha, categorías y sede.</p><div className="registration-mark" aria-hidden="true"><span>O</span><span>S</span><span>E</span></div></div>
        <OeeRegistration phone={siteData.whatsapp} registrationOpen={siteData.oee.registrationOpen} />
      </section>

      <section className="contact-section"><div><p className="eyebrow">Convocatoria en construcción</p><h2>Mándanos el pulso de tu crew.</h2></div><div><p>Los horarios de talleres, participantes, locación, descripción oficial y logos se publicarán aquí en cuanto la producción los confirme.</p><a href={contactUrl} target="_blank" rel="noreferrer" className="primary-button"><MessageCircle size={19} /> Contactar por WhatsApp</a></div></section>
      <SiteFooter />
    </main>
  );
}
