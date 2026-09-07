import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, MapPin, MessageCircle } from 'lucide-react';
import { siteData } from '@/app/data';
import { OeeRegistration } from '@/components/OeeRegistration';
import { DemoNotice, SiteFooter, SiteHeader } from '@/components/SiteChrome';

const transformations = [
  ['Técnica', 'lenguaje'], ['Objeto', 'símbolo'], ['Movimiento', 'significado'],
  ['Personaje', 'identidad'], ['Música', 'estímulo'], ['Improvisación', 'creación'], ['Batalla', 'experiencia artística'],
];

const archivePhotos = [
  { src: '/oee-archive-move-center.png', alt: 'Comunidad de bailarines en The Move Center' },
  { src: '/oee-archive-crew-mirror.png', alt: 'Participantes frente al espejo en The Move Center' },
  { src: '/oee-archive-jury.png', alt: 'Panel de jurado durante una edición anterior' },
  { src: '/oee-archive-circle.png', alt: 'Círculo de participantes en una batalla anterior' },
  { src: '/oee-archive-guest.png', alt: 'Encuentro entre bailarines durante una edición anterior' },
];

export default function OeePage() {
  const contactUrl = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Hola, quiero información sobre Batallas Neoprimitivas · 3ra edición. [Mensaje demostrativo]')}`;

  return (
    <main className="oee-page">
      <DemoNotice /><SiteHeader />

      <section className="oee-hero">
        <div className="oee-hero__copy">
          <Link className="back-link" href="/"><ArrowLeft size={17} /> Charrofunka Company</Link>
          <p className="eyebrow">{siteData.oee.presentedBy}</p>
          <span className="event-seal">{siteData.oee.edition} · Guadalajara</span>
          <h1>Batallas<br /><em>Neo—</em><br />Primitivas.</h1>
          <p>Un formato experimental donde la cultura de las batallas de Hip Hop entra en un territorio de imaginación, transformación y evolución artística.</p>
          <div className="hero-actions"><a className="primary-button" href="#planes">Elegir experiencia <ArrowUpRight size={18} /></a><a className="text-button" href="#fundamento">Conocer el formato</a></div>
          <strong className="coming-soon">{siteData.oee.status}</strong>
        </div>
        <figure className="oee-hero__image"><Image src="/oee-third-edition.png" fill priority alt="Flyer de Batallas Neoprimitivas, tercera edición" sizes="(max-width: 800px) 100vw, 46vw" /><figcaption>Tercera edición · Arte compartido</figcaption></figure>
      </section>

      <section className="oee-story" aria-label="Principios de OEE"><div><span>O</span><p>Originalidad para romper la copia.</p></div><div><span>S</span><p>Style para firmar cada movimiento.</p></div><div><span>E</span><p>Essence para dejar memoria.</p></div></section>

      <section className="oee-foundation" id="fundamento" aria-labelledby="foundation-title">
        <div><p className="eyebrow">Fundamento</p><h2 id="foundation-title">La danza como transformación, no solamente como demostración.</h2></div>
        <div className="foundation-copy"><p>La técnica no desaparece: evoluciona. Popping, Breaking, Electro, Hip Hop y otras disciplinas se convierten en herramientas para deformar, adaptar y reinterpretar patrones conocidos.</p><p>El objeto extiende el cuerpo. El personaje extiende la identidad artística. La música provoca. El círculo se vuelve espacio de creación y la batalla convierte lo inesperado en movimiento.</p><strong>No buscamos solamente movimientos.<br />Buscamos transformación.</strong></div>
      </section>

      <section className="transformation-section" aria-labelledby="transformation-title"><div className="section-heading"><p className="eyebrow">Filosofía central</p><h2 id="transformation-title">Transforma lo que conoces.</h2><p>Imagina, adapta, comunica y crea en tiempo real.</p></div><div className="transformation-grid">{transformations.map(([from, to]) => <div key={from}><span>{from}</span><ArrowUpRight size={20} /><strong>{to}</strong></div>)}</div></section>

      <section className="featured-event" aria-labelledby="tercera-edicion"><figure className="event-poster event-poster--image"><Image src="/oee-battle-rules.png" fill alt="Flyer de referencia con dinámica de Batallas Neoprimitivas" sizes="(max-width: 700px) 100vw, 42vw" /><figcaption>Referencia de formato · detalles por confirmar</figcaption></figure><div className="featured-event__copy"><p className="eyebrow">Tercera edición · Pasado + futuro</p><h2 id="tercera-edicion">La pista vuelve a abrirse.</h2><p>La esencia de las culturas prehispánicas se encuentra con una visión futurista. Cada ronda representa una evolución: técnica, concepto, personaje, creatividad y presencia escénica se unen para contar una historia a través del movimiento.</p><dl><div><dt><CalendarDays size={18} /> Fecha</dt><dd>2027 · Coming soon</dd></div><div><dt><MapPin size={18} /> Lugar</dt><dd>Guadalajara · Sede por anunciar</dd></div></dl><a href={contactUrl} target="_blank" rel="noreferrer" className="text-button">Pedir información <MessageCircle size={18} /></a></div></section>

      <section className="character-challenge" aria-labelledby="character-title"><div className="character-challenge__image"><Image src="/oee-archive-circle.png" fill alt="Participantes reunidos en una competencia anterior" sizes="(max-width: 800px) 100vw, 48vw" /></div><div><p className="eyebrow">Top 8 · Reto de personaje</p><h2 id="character-title">Dale cuerpo a un universo propio.</h2><p>Los ocho finalistas crearán un personaje original inspirado en la fusión de cultura prehispánica y futuro. La preparación ocurrirá el mismo día para poner a prueba imaginación, adaptación e improvisación.</p><p>Ven con un outfit capaz de avivar tu personaje: actitud, interpretación, movimiento y presencia escénica deberán sentirse como un todo.</p></div></section>

      <section className="oee-archive" id="archivo" aria-labelledby="archivo-title"><div className="section-heading"><p className="eyebrow">Memoria de la escena</p><h2 id="archivo-title">Lo que pasó construye lo que viene.</h2><p>Imágenes compartidas de la comunidad, el jurado y los encuentros que abrieron camino a esta tercera edición.</p></div><div className="archive-photo-grid">{archivePhotos.map((photo, index) => <figure key={photo.src} className={index === 0 ? 'archive-photo-grid__wide' : ''}><Image src={photo.src} fill alt={photo.alt} sizes={index === 0 ? '(max-width: 700px) 100vw, 66vw' : '(max-width: 700px) 100vw, 33vw'} /><figcaption>Archivo OEE · Ediciones anteriores</figcaption></figure>)}</div></section>

      <section className="package-section" id="planes" aria-labelledby="packages-title"><div className="section-heading"><p className="eyebrow">Elige tu experiencia</p><h2 id="packages-title">Tres formas de entrar al Jam.</h2><p>Precios publicados para la planeación de la tercera edición. La venta y condiciones finales se habilitarán con la convocatoria oficial.</p></div><div className="package-grid">{siteData.oee.packages.map((eventPackage) => <article key={eventPackage.name} className={eventPackage.featured ? 'package-card package-card--featured' : 'package-card'}><span className="package-card__metal">{eventPackage.name}</span><strong className="package-card__price">{eventPackage.price}</strong><ul>{eventPackage.includes.map((item) => <li key={item}><Check size={17} /> {item}</li>)}</ul><a href="#registro" className="text-button">Seleccionar {eventPackage.name} <ArrowUpRight size={17} /></a></article>)}</div><p className="package-note">Golden es la experiencia completa del Jam: hospedaje, alimentación, workshops, dos categorías, conversatorio y after party.</p></section>

      <section className="registration-section" id="registro" aria-labelledby="registro-title"><div className="registration-intro"><p className="eyebrow">Pre-registro · 3ra edición</p><h2 id="registro-title">Entra a la batalla.</h2><p>No llegues solamente a repetir lo que ya sabes. Llega preparado para crear, reaccionar, transformar e imaginar.</p><div className="registration-mark" aria-hidden="true"><span>O</span><span>S</span><span>E</span></div></div><div><OeeRegistration phone={siteData.whatsapp} registrationOpen={siteData.oee.registrationOpen} /><details className="confirmation-preview"><summary>Ver mensaje posterior al registro</summary><div><p className="eyebrow">¡Ya eres parte de las Batallas Neoprimitivas!</p><h3>Tu técnica es el punto de partida. Tu imaginación es el límite.</h3><p>No acabas de entrar solamente a una competencia, sino a un espacio de exploración, expresión y evolución artística. Prepárate para salir de tus patrones y descubrir hasta dónde puedes llevar tu movimiento.</p><p><strong>Ven a experimentar. Ven a transformar. Ven a crear.</strong></p><p>Bienvenido a las Batallas Neoprimitivas. La próxima evolución comienza contigo.</p></div></details></div></section>

      <section className="oee-manifesto"><p className="eyebrow">Manifiesto</p><h2>La técnica impresiona.<br /><em>El instinto transforma.</em></h2><p>Cada objeto puede convertirse en símbolo. Cada bailarín puede convertirse en personaje. Cada batalla puede convertirse en un espacio de imaginación, adaptación y evolución artística.</p></section>

      <section className="contact-section"><div><p className="eyebrow">Convocatoria en construcción</p><h2>La próxima evolución comienza contigo.</h2></div><div><p>Los horarios, maestros, conversatorios, locación y condiciones de cada plan se publicarán al cerrar la producción.</p><a href={contactUrl} target="_blank" rel="noreferrer" className="primary-button"><MessageCircle size={19} /> Contactar por WhatsApp</a></div></section>
      <SiteFooter />
    </main>
  );
}
