import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin, MessageCircle } from 'lucide-react';
import { siteData } from '@/app/data';
import { DemoNotice, SiteFooter, SiteHeader } from '@/components/SiteChrome';

export default function OeePage() {
  const event = siteData.events[0];
  const contactUrl = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent('Hola, quiero información sobre los eventos de Originalidad, Estilo y Esencia. [Mensaje demostrativo]')}`;
  return (
    <main className="oee-page">
      <DemoNotice /><SiteHeader theme="light" />
      <section className="oee-hero">
        <div className="oee-hero__copy"><Link className="back-link" href="/"><ArrowLeft size={17} /> Ecosistema</Link><p className="eyebrow">Productora creativa · Guadalajara</p><h1>Originalidad,<br /><em>Estilo</em> y Esencia.</h1><p>Diseñamos encuentros con una idea clara, una estética propia y el cuidado de lo que hace memorable una experiencia.</p><a href={contactUrl} target="_blank" rel="noreferrer" className="text-button">Hablar por WhatsApp <ArrowUpRight size={18} /></a></div>
        <div className="oee-hero__image"><Image src="/oee-stage.png" fill priority alt="Escenario conceptual previo a un evento" sizes="(max-width: 800px) 100vw, 55vw" /><span>Imagen conceptual · demo</span></div>
      </section>
      <section className="oee-story"><div><span>O</span><p>Ideas con una razón de ser.</p></div><div><span>E</span><p>Una forma propia de expresarlas.</p></div><div><span>E</span><p>Lo que queda cuando termina la noche.</p></div></section>
      <section className="featured-event" aria-labelledby="proximo-evento">
        <div className="event-poster"><span className="poster-label">OEE PRESENTA</span><strong>SESIÓN<br />NOCTURNA<br /><em>01</em></strong><span className="poster-footer">GUADALAJARA · 18 OCT · DEMO</span></div>
        <div className="featured-event__copy"><p className="eyebrow">Próximo evento · Demostración</p><h2 id="proximo-evento">{event.title}</h2><p>Una noche conceptual que reúne música, cocina e intervención visual. El formato, talento, sede y fecha finales se confirmarán con la producción.</p><dl><div><dt><CalendarDays size={18} /> Fecha</dt><dd>18 de octubre · Por confirmar</dd></div><div><dt><MapPin size={18} /> Lugar</dt><dd>Sede por anunciar · Guadalajara</dd></div></dl><a href={contactUrl} target="_blank" rel="noreferrer" className="primary-button"><MessageCircle size={18} /> Solicitar información</a><small className="contact-note">Número y mensaje demostrativos. Sustituir antes de publicar.</small></div>
      </section>
      <section className="oee-gallery"><div className="section-heading"><p className="eyebrow">Dirección creativa</p><h2>Producimos la atmósfera completa.</h2></div><div className="oee-gallery__grid"><div className="oee-gallery__image"><Image src="/oee-stage.png" fill alt="Concepto visual de producción escénica" sizes="50vw" /></div><div className="oee-gallery__statement"><span>01</span><p>Concepto & narrativa</p></div><div className="oee-gallery__statement accent"><span>02</span><p>Producción & operación</p></div><div className="oee-gallery__statement dark"><span>03</span><p>Escena & comunidad</p></div></div></section>
      <section className="contact-section"><div><p className="eyebrow">Contacto directo</p><h2>Conversemos sobre tu próxima experiencia.</h2></div><div><p>Esta primera versión concentra el contacto en WhatsApp. El número oficial y los mensajes se reemplazarán con los datos aprobados por la marca.</p><a href={contactUrl} target="_blank" rel="noreferrer" className="primary-button"><MessageCircle size={19} /> Contactar por WhatsApp</a></div></section>
      <SiteFooter />
    </main>
  );
}
