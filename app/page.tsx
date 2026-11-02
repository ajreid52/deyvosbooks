/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></a>
        <nav aria-label="Main navigation"><Link href="/books">Books</Link><a href="#world">Deyvos</a><a href="#author">Author</a><a href="#letters">Letters</a></nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-art" role="img" aria-label="Telmut Keep rises above coastal orchards and working docks beneath storm-gray skies" />
        <div className="hero-copy">
          <p className="eyebrow">A Deyvos novel · Volume One</p>
          <h1 id="hero-title">Shadow of<br />the Beast</h1>
          <p className="hero-premise">One life. Two souls.</p>
          <p className="hero-hook">Maret Beorn survived the birth that killed his magically gifted twin. But his brother never left his side.</p>
          <div className="actions"><Link className="button primary" href="/books/shadow-of-the-beast-volume-one">Discover Volume One <Arrow /></Link><span className="button muted" aria-label="Preorder coming soon">Preorder soon</span></div>
        </div>
        <a className="scroll-cue" href="#book"><span>Descend</span><i aria-hidden="true" /></a>
      </section>

      <section className="book section" id="book">
        <div className="book-copy reveal">
          <p className="eyebrow">Shadow of the Beast · Volume One</p>
          <h2>Conjoined at the soul.<br />Undivided by death.</h2><div className="rule" />
          <p className="lead">The one with magic was stillborn. The one born without it lived haunted by the brother death could not take.</p>
          <p>Maret Beorn has spent his childhood fearing a shadow no one else can see. When the apparition reveals an impossible connection to his family’s buried grief, the truth can no longer be dismissed: Maret’s dead twin never truly left him. But as the brothers’ bond awakens a power no living mage understands, saving one may place them both—and everyone around them—in danger.
          </p>
          <a className="text-link" href="#letters">Be first to hear when it arrives <Arrow /></a>
        </div>
        <div className="pullquote reveal">How do you build a failsafe for a power no living person understands?</div>
      </section>

      <section className="world section" id="world">
        <div className="world-content reveal">
          <p className="eyebrow">Enter Deyvos</p><h2>Magic is running out.<br />It's time to get desperate.</h2>
          <p className="lead">Deyvos is leaving its age of magic behind. Nations turn toward mechanical invention as their oldest sources of power dwindle. From gods to old debts, they disagree about everything except the wish to avoid war—for now.</p>
          <div className="world-notes">
            <div><b>Alves</b><span>The Territories mine failing seams of magic, believed to be the gathered might of their goddess.</span></div>
            <div><b>Ertenvaal</b><span>The living look to their ancestors for guidance through the trials still to come.</span></div>
            <div><b>Scarpa</b><span>Necromancers forge life force into objects and sacrifice the living to survive the desert.</span></div>
          </div>
          <p className="world-warning">In Telmut, an old wound is opening. Every nation will feel the quake and Deyvos may be changed forever.</p>
        </div>
      </section>

      <section className="author section" id="author">
        <div className="author-portrait">
          <img className="author-photo" src="/modelshotaj.jpeg" alt="Portrait of author AJ Reid" width="960" height="637" />
          <img className="author-seal" src="/DeyvosLogo.png" alt="Books of Deyvos" width="1083" height="1058" />
        </div>
        <div className="author-copy reveal"><p className="eyebrow">About the author</p><h2>AJ Reid</h2><p className="lead">AJ Reid writes dark fantasy about strange magic and complicated people who have no business being heroes.</p><p>Based in North Carolina with her husband, cat, and dog, AJ is a lifelong fantasy reader, hobbyist musician, decent costume and prop maker, and occasional LARPer. <em>Shadow of the Beast</em> is the first Deyvos novel, published in two volumes.</p></div>
      </section>

      <section className="letters section" id="letters">
        <div className="letters-inner reveal"><p className="eyebrow">Letters from Deyvos</p><h2>Come closer.<br />The dark may whisper.</h2><p>Occasional letters about the book, the world behind it, and where AJ will be next. No noise. No ravens sold to third parties.</p>
          <div className="letter-actions">
            <a className="button primary" href="https://forms.gle/EzBSfKiXstHPeXsb9" target="_blank" rel="noreferrer">Join Deyvos Letters <Arrow /></a>
            <a className="unsubscribe-link" href="https://forms.gle/aRR929dYS9jQJazy7" target="_blank" rel="noreferrer">Unsubscribe</a>
          </div>
          <small>Both options open a short Google Form in a new tab.</small>
        </div>
      </section>

      <section className="news section" id="news">
        <div className="news-heading"><p className="eyebrow">From the road</p><h2>Latest news<br />& appearances</h2></div>
        <div className="news-list"><article><time>In editing</time><h3>Shadow of the Beast: Volume One</h3><p>The manuscript is being edited. Preorder news and the next look at Maret’s story will appear here first.</p></article><article><time>Events</time><h3>Meet AJ Reid</h3><p>Readings, convention attendances, and signings will be announced as dates are confirmed.</p></article></div>
      </section>

      <footer><a className="wordmark" href="#top" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></a><p>Dark fantasy. Strange magic. Complicated people.</p><div><a href="mailto:hello@deyvosbooks.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
