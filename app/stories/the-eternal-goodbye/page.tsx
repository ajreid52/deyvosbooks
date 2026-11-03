/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import rawStory from "./story.txt?raw";

export const metadata: Metadata = {
  title: "The Eternal Goodbye | AJ Reid",
  description: "Two revenants hold each other to the path through death, resurrection, and the slow erosion of memory. A free horror story by AJ Reid.",
  openGraph: { title: "The Eternal Goodbye | AJ Reid", description: "A free horror story set in the world of Five Pillars LARP.", url: "/stories/the-eternal-goodbye", images: [{ url: "/deadsmeralda.webp", width: 1480, height: 860, alt: "Deadsmeralda, a revenant from Five Pillars LARP" }] },
  twitter: { card: "summary_large_image", title: "The Eternal Goodbye | AJ Reid", description: "A free horror story set in the world of Five Pillars LARP.", images: ["/deadsmeralda.webp"] },
};

const storyStart = "The trees swayed in the night";
const storyBody = rawStory.slice(rawStory.indexOf(storyStart)).replaceAll(" ", " ");
const paragraphs = storyBody.split(/\n+/).map((paragraph) => paragraph.trim()).filter(Boolean);

export default function EternalGoodbyePage() {
  return (
    <main className="story-page">
      <header className="site-header inner-header">
        <Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link>
        <nav aria-label="Main navigation"><Link href="/books">Books</Link><Link href="/stories" aria-current="page">Stories</Link><Link href="/#world">Deyvos</Link><Link href="/#author">Author</Link><Link href="/newsletters">Newsletters</Link></nav>
      </header>

      <article>
        <header className="story-header">
          <Link className="story-back" href="/stories">← All free stories</Link>
          <p className="eyebrow">A Five Pillars story</p>
          <h1>The Eternal<br />Goodbye</h1>
          <p className="story-deck">Two revenants hold each other to the path through death, resurrection, and the slow erosion of memory.</p>
          <div className="story-byline"><span>By AJ Reid</span><time dateTime="2023-10-02">October 2, 2023</time><span>Horror</span><span>2,680 words · 11 min read</span></div>
        </header>

        <figure className="story-character-art">
          <img src="/deadsmeralda.webp" alt="Deadsmeralda in her white hair and revenant makeup" width="1480" height="860" />
          <figcaption><strong>Deadsmeralda</strong><span>From the world of Five Pillars LARP</span></figcaption>
        </figure>

        <aside className="story-context">
          <p><strong>Origin</strong>This story was written for a monthly Midnight Faith horror-writing challenge using the prompt “Zombies.” It takes place in the world of Five Pillars LARP, where AJ is an administrator, and is published here with permission.</p>
          <p><strong>Note</strong>This standalone story is not connected to the Deyvos novels.</p>
          <p><strong>Content</strong>Undead bodies, decay, body horror, and violence.</p>
        </aside>

        <div className="story-prose">
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>

        <footer className="story-end"><img src="/DeyvosSkullVector fade.png" alt="" aria-hidden="true" width="417" height="417" /><p>Thank you for reading.</p><Link className="text-link" href="/stories">Return to free stories <span aria-hidden="true">↗</span></Link></footer>
      </article>

      <footer><Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link><p>Dark fantasy. Strange magic. Complicated people.</p><div><Link href="/newsletters">Newsletters</Link><a href="mailto:hello@deyvosbooks.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
