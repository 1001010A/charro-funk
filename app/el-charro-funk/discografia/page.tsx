import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Music2, Play } from 'lucide-react';
import { siteData } from '@/app/data';
import { DemoNotice, SiteFooter, SiteHeader } from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: 'Discografía · El Charro Funk',
  description: 'Las historias, imágenes y enlaces oficiales de cuatro canciones de El Charro Funk.',
};

export default function DiscographyPage() {
  return (
    <main className="release-index-page">
      <DemoNotice />
      <SiteHeader />

      <section className="release-index-hero">
        <div>
          <Link className="back-link" href="/el-charro-funk#discografia"><ArrowLeft size={17} /> El Charro Funk</Link>
          <p className="eyebrow">Portal de discografía</p>
          <h1>Cuatro canciones.<br /><em>Una misma raíz.</em></h1>
          <p>Explora la historia, el archivo visual y el enlace oficial de cada lanzamiento sin salir de esta página.</p>
        </div>
        <nav className="release-jump-links" aria-label="Canciones del portal">
          {siteData.releases.map((release, index) => (
            <a href={`#${release.slug}`} key={release.slug}><span>0{index + 1}</span><strong>{release.title}</strong><ArrowUpRight size={18} /></a>
          ))}
        </nav>
      </section>

      {siteData.releases.map((release, index) => {
        const MediaIcon = release.mediaPlatform === 'youtube' ? Play : Music2;
        const mediaLabel = release.mediaPlatform === 'youtube' ? 'Ver video en YouTube' : 'Escuchar en Spotify';

        return (
          <article className={`release-entry ${release.palette} ${index % 2 === 1 ? 'release-entry--reverse' : ''}`} id={release.slug} key={release.slug}>
            <section className="release-entry__hero">
              <div className="release-entry__copy">
                <p className="eyebrow">El Charro Funk · {release.type}</p>
                <h2>{release.title}</h2>
                <span className="release-status">{release.status}</span>
                <a className={`media-button media-button--${release.mediaPlatform}`} href={release.mediaUrl} target="_blank" rel="noreferrer"><MediaIcon size={19} /> {mediaLabel} <ArrowUpRight size={17} /></a>
              </div>
              <div className={`release-art ${release.coverImage ? 'release-art--official' : ''}`} aria-label={`Portada de ${release.title}`}>
                {release.coverImage ? <Image src={release.coverImage} alt={`Portada oficial de ${release.title}`} fill priority={index === 0} sizes="(max-width: 900px) 82vw, 40vw" /> : <><span className="album-label">ECF · {String(index + 1).padStart(3, '0')}</span><strong>{release.title}</strong><div className="vinyl" aria-hidden="true"><span /></div></>}
              </div>
            </section>

            <section className="release-biography" aria-labelledby={`${release.slug}-biography-title`}>
              <div><p className="eyebrow">Biografía</p><h3 id={`${release.slug}-biography-title`}>La historia detrás del sonido.</h3></div>
              <div className="release-biography__copy">
                <div className="release-biography__text">{release.biography.map((paragraph, paragraphIndex) => <p className={paragraph.startsWith('Sponsored by') ? 'release-credit' : undefined} key={`${release.slug}-bio-${paragraphIndex}`}>{paragraph}</p>)}</div>
              </div>
            </section>

            {release.images.length > 0 && (
              <section className="release-gallery" aria-labelledby={`${release.slug}-gallery-title`}>
                <div className="section-heading"><p className="eyebrow">Archivo visual</p><h3 id={`${release.slug}-gallery-title`}>{release.images.length > 2 ? 'Movimiento en secuencia.' : 'Dos imágenes. Una frecuencia.'}</h3></div>
                <div className={`release-gallery__grid ${release.images.length > 2 ? 'release-gallery__grid--many' : ''}`}>
                  {release.images.map((image, imageIndex) => (
                    <figure key={`${release.slug}-${image}`}>
                      <Image src={image} fill alt={`${release.title}: imagen ${imageIndex + 1} del archivo visual`} sizes="(max-width: 720px) 100vw, 50vw" />
                      <figcaption>Archivo {String(imageIndex + 1).padStart(2, '0')}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </article>
        );
      })}

      <SiteFooter />
    </main>
  );
}
