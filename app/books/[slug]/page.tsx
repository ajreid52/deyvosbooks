/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVolume, volumes } from "../volumes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return volumes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book = getVolume((await params).slug);
  if (!book) return {};
  const title = `Shadow of the Beast: ${book.volume} | AJ Reid`;
  const url = `https://deyvosbooks.com/books/${book.slug}`;
  return {
    title,
    description: book.description,
    openGraph: { title, description: book.description, url, images: [{ url: book.image, width: book.imageWidth, height: book.imageHeight, alt: book.imageAlt }] },
    twitter: { card: "summary_large_image", title, description: book.description, images: [book.image] },
  };
}

const Arrow = () => <span aria-hidden="true">↗</span>;

export default async function VolumePage({ params }: Props) {
  const book = getVolume((await params).slug);
  if (!book) notFound();

  return (
    <main className="volume-page">
      <header className="site-header inner-header">
        <Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link>
        <nav aria-label="Main navigation"><Link href="/books" aria-current="page">Books</Link><Link href="/#world">Deyvos</Link><Link href="/#author">Author</Link><Link href="/#letters">Letters</Link></nav>
      </header>
      <article className="volume-hero">
        <div className="volume-visual"><img src={book.image} alt={book.imageAlt} width={book.imageWidth} height={book.imageHeight} /></div>
        <div className="volume-copy">
          <p className="eyebrow">Shadow of the Beast</p>
          <h1>{book.volume}</h1>
          <p className="volume-subtitle">{book.subtitle}</p>
          <span className="volume-status">{book.status}</span>
          <p className="volume-premise">{book.premise}</p>
          <p className="volume-description">{book.description}</p>
          <p className="volume-context">The first Deyvos novel, published in two volumes.</p>
          <div className="volume-actions"><Link className="button primary" href="/#letters">Get release news <Arrow /></Link><Link className="text-link" href="/books">View all books</Link></div>
        </div>
      </article>
      <footer><Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link><p>Dark fantasy. Strange magic. Complicated people.</p><div><a href="mailto:hello@deyvosbooks.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
