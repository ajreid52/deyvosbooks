/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function NotFound() {
  return (
    <main className="not-found-page">
      <header className="site-header inner-header">
        <Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link>
        <nav aria-label="Main navigation"><Link href="/books">Books</Link><Link href="/stories">Stories</Link><Link href="/#world">Deyvos</Link><Link href="/#author">Author</Link><Link href="/newsletters">Newsletters</Link></nav>
      </header>

      <section className="not-found-content" aria-labelledby="not-found-title">
        <p className="eyebrow">Error 404 · Beyond the mapped roads</p>
        <h1 id="not-found-title">You have entered<br />the Bleak.</h1>
        <p className="bleak-warning">You will be lost.</p>
        <div className="rule" />
        <p className="not-found-explanation">The page you sought cannot be found. It may have moved, vanished, or never existed beyond the edge of the map.</p>
        <p className="not-found-direction">Turn back while the road still remembers you.</p>
        <div className="not-found-actions">
          <Link className="button primary" href="/">Return home <Arrow /></Link>
          <Link className="text-link" href="/books">Find the books <Arrow /></Link>
          <Link className="text-link" href="/stories">Read free stories <Arrow /></Link>
        </div>
      </section>
    </main>
  );
}
