/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Books of Deyvos | AJ Reid",
  description: "Explore the dark fantasy novels set in Deyvos, beginning with Shadow of the Beast.",
  openGraph: {
    title: "Books of Deyvos | AJ Reid",
    description: "Dark fantasy. Strange magic. Complicated people.",
    url: "https://deyvosbooks.com/books",
    images: [{ url: "/telmut-hero-v2.png", width: 1730, height: 909, alt: "Telmut Keep in the world of Deyvos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Books of Deyvos | AJ Reid",
    description: "Dark fantasy. Strange magic. Complicated people.",
    images: ["/telmut-hero-v2.png"],
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function BooksPage() {
  return (
    <main className="books-page" id="top">
      <header className="site-header inner-header">
        <Link className="wordmark" href="/#top" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link>
        <nav aria-label="Main navigation"><Link aria-current="page" href="/books">Books</Link><Link href="/#world">Deyvos</Link><Link href="/#author">Author</Link><Link href="/#letters">Letters</Link></nav>
      </header>

      <section className="books-hero">
        <div>
          <p className="eyebrow">The novels</p>
          <h1>Books of<br />Deyvos</h1>
          <p>Dark fantasy about strange magic, complicated people, and the old powers that refuse to die.</p>
        </div>
      </section>

      <section className="catalog" aria-labelledby="catalog-title">
        <div className="catalog-heading">
          <p className="eyebrow">Part one</p>
          <h2 id="catalog-title">Shadow of the Beast</h2>
        </div>
        <article className="book-card">
          <div className="book-card-art"><img src="/telmut-hero-v2.png" alt="Telmut Keep beneath storm-gray skies" width="1730" height="909" /></div>
          <div className="book-card-copy">
            <span className="book-status">Currently in editing</span>
            <p className="book-card-premise">One life. Two souls.</p>
            <p>Maret Beorn survived the birth that killed his magically gifted twin. Years later, the brother he never knew returns as a shadow only Maret can see. As their haunted bond grows stronger, his family must decide whether the spirit is a lost child to be saved or a dangerous power that must be sealed away.</p>
            <div className="book-card-actions"><Link className="button primary" href="/#book">Discover the book <Arrow /></Link><Link className="text-link" href="/#letters">Get release news <Arrow /></Link></div>
          </div>
        </article>
        <br></br>
        <div className="catalog-heading">
          <p className="eyebrow">Part two</p>
          <h2 id="catalog-title-part-two">Shadow of the Beast</h2>
        </div>
        <article className="book-card">
          <div className="book-card-art"><img src="/unreleased-book-placeholder.png" alt="An unrevealed book concealed in shadow" width="1536" height="1024" /></div>
          <div className="book-card-copy">
            <span className="book-status">Currently in writing</span>
            <p className="book-card-premise">The seal was never meant to break.</p>
            <p>When Maret’s ghost-twin returns with greater power, and a blood mage’s hidden designs begin to unfold, the Beorn family’s efforts to protect one another turn to suspicion, betrayal, and catastrophe. To survive, Maret must dictate boundaries between the spirit, the flesh, and the soul.</p>
            <div className="book-card-actions"><Link className="button primary" href="/#book">Discover the book <Arrow /></Link><Link className="text-link" href="/#letters">Get release news <Arrow /></Link></div>
          </div>
        </article>
        <p className="catalog-note">Future books in Deyvos will join the shelf here as they are announced.</p>
      </section>

      <footer><Link className="wordmark" href="/#top" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link><p>Dark fantasy. Strange magic. Complicated people.</p><div><a href="mailto:hello@deyvosbooks.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
