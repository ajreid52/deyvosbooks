/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { volumes } from "./volumes";

export const metadata: Metadata = {
  title: "Books of Deyvos | AJ Reid",
  description: "Explore Shadow of the Beast, the first Deyvos novel by AJ Reid, published in two volumes.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function BooksPage() {
  return (
    <main className="books-page">
      <header className="site-header inner-header">
        <Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link>
        <nav aria-label="Main navigation"><Link href="/books" aria-current="page">Books</Link><Link href="/stories">Stories</Link><Link href="/#world">Deyvos</Link><Link href="/#author">Author</Link><Link href="/newsletters">Newsletters</Link></nav>
      </header>

      <section className="books-hero">
        <div><p className="eyebrow">The full novels</p><h1>Books of<br />Deyvos</h1><p>Dark fantasy about strange magic, difficult loyalties, and people living beyond the understood world.</p></div>
      </section>

      <section className="catalog" aria-labelledby="catalog-title">
        <div className="catalog-heading">
          <p className="eyebrow">The first Deyvos novel</p>
          <h2 id="catalog-title">Shadow of the Beast</h2>
          <p className="story-intro">One novel, published in two volumes and intended to be read in order.</p>
        </div>
        <div className="volume-list">
          {volumes.map((book) => (
            <article className="volume-entry" key={book.slug}>
              <div className="volume-heading">
                <p className="eyebrow">{book.volume}</p>
                <h3>Shadow of the Beast</h3>
                <p className="subtitle-placeholder">{book.subtitle}</p>
              </div>
              <div className="book-card">
                <div className="book-card-art"><img src={book.image} alt={book.imageAlt} width={book.imageWidth} height={book.imageHeight} /></div>
                <div className="book-card-copy">
                  <span className="book-status">{book.status}</span>
                  <p className="book-card-premise">{book.premise}</p>
                  <p>{book.volume === "Volume One" ? "A boy haunted by the twin he never knew must uncover what survived alongside him." : "Maret’s story continues as the bond he cannot escape begins to test every boundary."}</p>
                  <div className="book-card-actions">
                    <Link className="button" href={`/books/${book.slug}`}>Explore {book.volume} <Arrow /></Link>
                    <Link className="text-link" href="/#letters">Get release news <Arrow /></Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="catalog-note">Begin with <em>Birthright</em>, then continue into <em>Inheritance</em>. Future Deyvos novels will join the shelf here.</p>
      </section>

      <footer><Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link><p>Dark fantasy. Strange magic. Complicated people.</p><div><Link href="/stories">Stories</Link><Link href="/newsletters">Newsletters</Link><a href="mailto:deyvosbooks@gmail.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
