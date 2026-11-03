/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Stories | AJ Reid",
  description: "Free dark fantasy and horror short fiction by AJ Reid, from Deyvos and other strange worlds.",
  openGraph: { title: "Free Stories | AJ Reid", description: "Dark fantasy and horror from Deyvos and other strange worlds.", url: "/stories", images: [{ url: "/og.png", width: 1734, height: 907, alt: "Dark fantasy fiction by AJ Reid" }] },
  twitter: { card: "summary_large_image", title: "Free Stories | AJ Reid", description: "Dark fantasy and horror from Deyvos and other strange worlds.", images: ["/og.png"] },
};

export default function StoriesPage() {
  return (
    <main className="stories-page">
      <header className="site-header inner-header">
        <Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link>
        <nav aria-label="Main navigation"><Link href="/books">Books</Link><Link href="/stories" aria-current="page">Stories</Link><Link href="/#world">Deyvos</Link><Link href="/#author">Author</Link><Link href="/newsletters">Newsletters</Link></nav>
      </header>

      <section className="stories-intro">
        <p className="eyebrow">Beyond the novels</p>
        <h1>Free<br />Stories</h1>
        <p>Short fiction from Deyvos and other strange worlds—freely available to read and share.</p>
      </section>

      <section className="stories-archive" aria-labelledby="stories-heading">
        <div className="stories-heading"><p className="eyebrow">The collection</p><h2 id="stories-heading">Choose a<br />strange door.</h2></div>
        <div className="stories-list">
          <article className="story-placeholder story-entry">
            <div className="story-meta"><time dateTime="2023-10-11">October 11, 2023</time><span>Standalone</span><span>Horror</span><span>21 min read</span></div>
            <h3><Link href="/stories/the-wish-that-killed-us">The Wish that Killed Us</Link></h3>
            <p>Three friends escape a haunted school through a wish-granting mirror—and discover that every wish has already come true.</p>
            <Link className="text-link" href="/stories/the-wish-that-killed-us">Read the story <span aria-hidden="true">↗</span></Link>
          </article>
          <article className="story-placeholder story-entry">
            <div className="story-meta"><time dateTime="2023-10-02">October 2, 2023</time><span>Five Pillars</span><span>Horror</span><span>11 min read</span></div>
            <h3><Link href="/stories/the-eternal-goodbye">The Eternal Goodbye</Link></h3>
            <p>Two revenants hold each other to the path through death, resurrection, and the slow erosion of memory. A standalone horror story set in the world of Five Pillars LARP.</p>
            <Link className="text-link" href="/stories/the-eternal-goodbye">Read the story <span aria-hidden="true">↗</span></Link>
          </article>
        </div>
      </section>

      <section className="stories-note"><img src="/DeyvosSkullVector fade.png" alt="" aria-hidden="true" width="417" height="417" /><div><p className="eyebrow">What belongs here</p><p>Character moments. Folklore. In-world documents. Strange encounters. Stories from Deyvos, Five Pillars, and whatever other dark corner opens next.</p><Link className="text-link" href="/newsletters">Hear when a story arrives <span aria-hidden="true">↗</span></Link></div></section>

      <footer><Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link><p>Dark fantasy. Strange magic. Complicated people.</p><div><Link href="/newsletters">Newsletters</Link><a href="mailto:hello@deyvosbooks.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
