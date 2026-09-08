import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Music2, Play } from 'lucide-react';
import { siteData } from '@/app/data';
import { DemoNotice, SiteFooter, SiteHeader } from '@/components/SiteChrome';

export default function CharroFunkPage() {
  return (
    <main className="music-page">
      <DemoNotice /><SiteHeader />
      <section className="music-hero">
        <Image src="/charro-hero.png" alt="Escena conceptual de estudio con micrófono y tornamesa" fill priority sizes="100vw" />
        <div className="music-hero__shade" />
        <div className="music-hero__content">
          <Link className="back-link" href="/"><ArrowLeft size={17} /> Ecosistema</Link>
          <p className="eyebrow">Entre raíces y frecuencias</p><h1>El Charro<br /><em>Funk</em></h1>
          <p>Proyecto musical y sello creativo que conecta identidad mexicana, groove y cultura contemporánea.</p>
          <a className="round-button" href="#discografia" aria-label="Ir a discografía"><Play fill="currentColor" size={22} /></a>
        </div>
      </section>
      <section className="story-section">
        <div><p className="eyebrow">Historia provisional</p><h2>Un sonido que nace del cruce.</h2></div>
        <div><p>El Charro Funk se presenta, en esta demo, como una plataforma donde tradición y exploración comparten la misma pista. Su universo conecta lanzamientos, sesiones en vivo, colaboraciones y experiencias presenciales.</p><p className="content-disclaimer">Este relato es conceptual. La historia, integrantes, hitos y filosofía final deberán construirse con el equipo de la marca.</p></div>
      </section>
      <section className="discography" id="discografia" aria-labelledby="discography-title">
        <div className="section-heading"><p className="eyebrow">Selección musical</p><h2 id="discography-title">Discografía</h2><p>Títulos visibles en el perfil oficial de Apple Music. Las portadas siguen siendo piezas conceptuales y deberán reemplazarse con el arte autorizado.</p><div className="official-music-links"><a href={siteData.music.appleArtistUrl} target="_blank" rel="noreferrer">Perfil oficial en Apple Music <ArrowUpRight size={15} /></a><a href={siteData.music.youtubeOfficialVideoUrl} target="_blank" rel="noreferrer">Video del canal oficial en YouTube <ArrowUpRight size={15} /></a></div></div>
        <div className="album-grid">
          {siteData.releases.map((release, index) => (
            <article className="album-card" key={release.title}>
              <div className={`album-cover ${release.palette}`}><span className="album-label">ECF · 00{index + 1}</span><strong>{release.title}</strong><div className="vinyl" aria-hidden="true"><span /></div></div>
              <div className="album-info"><div><h3>{release.title}</h3><p>{release.type}</p></div><div className="release-links"><a href={siteData.music.appleArtistUrl} target="_blank" rel="noreferrer">Apple Music <ArrowUpRight size={14} /></a></div></div>
            </article>
          ))}
        </div>
        <div className="catalog-titles"><p className="eyebrow">Otros títulos visibles en el perfil</p><ul>{siteData.catalogTitles.map((title) => <li key={title}>{title}</li>)}</ul></div>
      </section>
      <section className="gallery-section">
        <div className="section-heading"><p className="eyebrow">Archivo en construcción</p><h2>Galería</h2></div>
        <div className="gallery-grid"><div className="gallery-image gallery-image--wide"><Image src="/charro-funk-poster.png" fill alt="Cartel de El Charro Funk con trompeta y retrato de la agrupación" sizes="66vw" /></div><div className="gallery-placeholder gallery-placeholder--gold"><Music2 size={32} /><span>Retratos / prensa</span></div><div className="gallery-placeholder gallery-placeholder--red"><span>Sesiones<br />en vivo</span></div><div className="gallery-image"><Image src="/charro-funk-band.png" fill alt="Integrantes de El Charro Funk con vestuario negro y trompetas" sizes="33vw" /></div></div>
      </section>
      <SiteFooter />
    </main>
  );
}
