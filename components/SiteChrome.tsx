import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '@/app/data';

export function SiteHeader({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  return (
    <header className={`site-header ${theme === 'light' ? 'site-header--light' : ''}`}>
      <Link className="brand-lockup" href="/" aria-label="El Charro Funk, inicio">
        <span className="brand-mark">CF</span>
        <span><strong>El Charro Funk</strong><small>Ecosistema creativo</small></span>
      </Link>
      <nav aria-label="Navegación principal">
        <Link href="/el-charro-funk">Música</Link>
        <Link href="/funky-burgers">Funky Burgers</Link>
        <Link href="/pachakama">Pachakama</Link>
        <Link href="/originalidad-estilo-esencia">OEE</Link>
      </nav>
    </header>
  );
}

export function DemoNotice() {
  return <div className="demo-notice">{siteData.notice}</div>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><span className="brand-mark">CF</span><p>Cuatro expresiones. Un mismo pulso creativo.</p></div>
      <div className="footer-links">
        {siteData.brands.map((brand) => <Link key={brand.href} href={brand.href}>{brand.name} <ArrowUpRight size={15} /></Link>)}
      </div>
      <small>Demo conceptual · Guadalajara, Jalisco · 2026</small>
    </footer>
  );
}

export function EventStrip({ inverse = false }: { inverse?: boolean }) {
  return (
    <section className={`event-strip ${inverse ? 'event-strip--inverse' : ''}`} aria-labelledby="eventos-titulo">
      <div className="section-heading">
        <p className="eyebrow">Curaduría OEE</p><h2 id="eventos-titulo">Próximos encuentros</h2>
        <Link href="/originalidad-estilo-esencia">Ver productora <ArrowUpRight size={18} /></Link>
      </div>
      <div className="event-list">
        {siteData.events.map((event) => <article className="event-row" key={event.title}><time>{event.date}</time><div><h3>{event.title}</h3><p>{event.place}</p></div><span>{event.note}</span></article>)}
      </div>
    </section>
  );
}
