/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Letters from Deyvos | AJ Reid",
  description: "Future newsletters from AJ Reid about Shadow of the Beast, the world of Deyvos, and appearances.",
  openGraph: { title: "Letters from Deyvos | AJ Reid", description: "Dispatches about the books, the world behind them, and where AJ will be next.", url: "/newsletters", images: [{ url: "/og.png", width: 1734, height: 907, alt: "Shadow of the Beast — A Novel of Deyvos" }] },
  twitter: { card: "summary_large_image", title: "Letters from Deyvos | AJ Reid", description: "Dispatches about the books, the world behind them, and where AJ will be next.", images: ["/og.png"] },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function NewslettersPage() {
  return (
    <main className="newsletters-page">
      <header className="site-header inner-header">
        <Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link>
        <nav aria-label="Main navigation"><Link href="/books">Books</Link><Link href="/stories">Stories</Link><Link href="/#world">Deyvos</Link><Link href="/#author">Author</Link><Link href="/newsletters" aria-current="page">Newsletters</Link></nav>
      </header>

      <section className="newsletter-hero"><div><p className="eyebrow">An archive in waiting</p><h1>Letters from<br />Deyvos</h1><p>Dispatches about the books, the world behind them, the work of writing, and where AJ will be next.</p></div></section>

      <section className="newsletter-archive">
        <div className="archive-heading"><p className="eyebrow">The correspondence</p><h2>The first letter<br />is still being written.</h2></div>
        <div className="empty-letter"><img src="/DeyvosSkullVector fade.png" alt="" aria-hidden="true" width="417" height="417" /><span className="issue-number">Issue No. 01 · Forthcoming</span><h3>Something is stirring in Telmut.</h3><p>When the first newsletter is sent, it will appear here as the beginning of a permanent archive. Subscribers will receive it first.</p></div>
      </section>

      <section className="dispatch-notes">
        <p className="eyebrow">What may arrive</p>
        <div className="dispatch-grid"><article><span>01</span><h3>Book news</h3><p>Publication progress, cover reveals, excerpts, and preorder announcements.</p></article><article><span>02</span><h3>Behind Deyvos</h3><p>Worldbuilding notes, maps, strange magic, and glimpses beyond the finished page.</p></article><article><span>03</span><h3>From the road</h3><p>Readings, conventions, signings, and the occasional creative detour.</p></article></div>
      </section>

      <section className="newsletter-cta"><div><p className="eyebrow">Receive the next dispatch</p><h2>Be there when<br />the first letter arrives.</h2><p>Occasional letters only. No noise. No ravens sold to third parties.</p><div className="letter-actions"><a className="button primary" href="https://forms.gle/EzBSfKiXstHPeXsb9" target="_blank" rel="noreferrer">Join Deyvos Letters <Arrow /></a><Link className="archive-link" href="/">Return home</Link></div></div></section>

      <footer><Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link><p>Dark fantasy. Strange magic. Complicated people.</p><div><Link href="/stories">Stories</Link><a href="mailto:hello@deyvosbooks.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
