/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stories from Deyvos | AJ Reid",
  description: "Short fiction, fragments, and other glimpses beyond the Deyvos novels.",
  openGraph: { title: "Stories from Deyvos | AJ Reid", description: "Short fiction, fragments, and other glimpses beyond the novels.", url: "/stories", images: [{ url: "/og.png", width: 1734, height: 907, alt: "Shadow of the Beast — A Novel of Deyvos" }] },
  twitter: { card: "summary_large_image", title: "Stories from Deyvos | AJ Reid", description: "Short fiction, fragments, and other glimpses beyond the novels.", images: ["/og.png"] },
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
        <h1>Stories from<br />Deyvos</h1>
        <p>Short fiction, fragments, and other glimpses into the world beyond <em>Shadow of the Beast</em>.</p>
      </section>

      <section className="stories-archive" aria-labelledby="stories-heading">
        <div className="stories-heading"><p className="eyebrow">The collection</p><h2 id="stories-heading">There are more<br />stories to tell.</h2></div>
        <div className="story-placeholder">
          <div className="story-meta"><time>Forthcoming</time><span>Short fiction</span><span>Reading time TBD</span></div>
          <h3>The first door has not opened yet.</h3>
          <p>This space will collect standalone stories connected to Deyvos—pieces that live outside the novels but belong to the same haunted world.</p>
          <span className="placeholder-link" aria-disabled="true">Story coming soon</span>
        </div>
      </section>

      <section className="stories-note"><img src="/DeyvosSkullVector fade.png" alt="" aria-hidden="true" width="417" height="417" /><div><p className="eyebrow">What belongs here</p><p>Character moments. Folklore. In-world documents. Strange encounters. Small stories from distant corners of Deyvos, freely available to read and share.</p><Link className="text-link" href="/newsletters">Hear when a story arrives <span aria-hidden="true">↗</span></Link></div></section>

      <footer><Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link><p>Dark fantasy. Strange magic. Complicated people.</p><div><Link href="/newsletters">Newsletters</Link><a href="mailto:hello@deyvosbooks.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
