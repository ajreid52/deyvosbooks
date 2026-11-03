/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import rawStory from "./story.txt?raw";

export const metadata: Metadata = {
  title: "The Wish that Killed Us | AJ Reid",
  description: "Three friends escape a haunted school through a wish-granting mirror—and discover that every wish has already come true. A free horror story by AJ Reid.",
  openGraph: { title: "The Wish that Killed Us | AJ Reid", description: "A free contemporary horror story by AJ Reid.", url: "/stories/the-wish-that-killed-us", images: [{ url: "/the-wish-that-killed-us.webp", width: 1480, height: 860, alt: "A shadowy figure behind tall illuminated panels" }] },
  twitter: { card: "summary_large_image", title: "The Wish that Killed Us | AJ Reid", description: "A free contemporary horror story by AJ Reid.", images: ["/the-wish-that-killed-us.webp"] },
};

const storyStart = "What keeps you up at night?";
const storyBody = rawStory.slice(rawStory.indexOf(storyStart)).replaceAll(" ", " ");
const paragraphs = storyBody.split(/\n+/).map((paragraph) => paragraph.trim()).filter(Boolean);

export default function WishThatKilledUsPage() {
  return (
    <main className="story-page">
      <header className="site-header inner-header">
        <Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link>
        <nav aria-label="Main navigation"><Link href="/books">Books</Link><Link href="/stories" aria-current="page">Stories</Link><Link href="/#world">Deyvos</Link><Link href="/#author">Author</Link><Link href="/newsletters">Newsletters</Link></nav>
      </header>

      <article>
        <header className="story-header">
          <Link className="story-back" href="/stories">← All free stories</Link>
          <p className="eyebrow">A contemporary horror story</p>
          <h1>The Wish<br />that Killed Us</h1>
          <p className="story-deck">Three friends escape a haunted school through a wish-granting mirror—and discover that every wish has already come true.</p>
          <div className="story-byline"><span>By AJ Reid</span><time dateTime="2023-10-11">October 11, 2023</time><span>Horror</span><span>5,071 words · 21 min read</span></div>
        </header>

        <figure className="story-character-art story-feature-art">
          <img src="/the-wish-that-killed-us.webp" alt="A shadowy figure moving behind tall illuminated panels" width="1480" height="860" />
          <figcaption className="photo-credit">Photo by <a href="https://unsplash.com/photos/5gwllb-_uyk" target="_blank" rel="noreferrer">David Werbrouck</a> on <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a></figcaption>
        </figure>

        <aside className="story-context">
          <p><strong>Origin</strong>Written for a monthly Midnight Faith horror-writing challenge using the prompt “After School.”</p>
          <p><strong>Note</strong>This standalone story is not connected to the Deyvos novels.</p>
          <p><strong>Content</strong>Bullying, a reference to suicide, supernatural peril, undead bodies, body horror, and apocalyptic imagery.</p>
        </aside>

        <div className="story-prose">
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>

        <footer className="story-end"><img src="/DeyvosSkullVector fade.png" alt="" aria-hidden="true" width="417" height="417" /><p>Thank you for reading.</p><Link className="text-link" href="/stories">Return to free stories <span aria-hidden="true">↗</span></Link></footer>
      </article>

      <footer><Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link><p>Dark fantasy. Strange magic. Complicated people.</p><div><Link href="/newsletters">Newsletters</Link><Link href="/privacy">Privacy</Link><a href="mailto:deyvosbooks@gmail.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
