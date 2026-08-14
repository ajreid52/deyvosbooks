const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="AJ Reid home"><span className="sigil" aria-hidden="true">A</span><span>AJ REID</span></a>
        <nav aria-label="Main navigation"><a href="#book">The Book</a><a href="#world">Deyvos</a><a href="#author">Author</a><a href="#letters">Letters</a></nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-art" role="img" aria-label="A lone traveler approaches a monumental gate haunted by pale spirits" />
        <div className="hero-copy">
          <p className="eyebrow">Book one of Deyvos</p>
          <h1 id="hero-title">Strange magic.<br />Complicated people.</h1>
          <p className="hero-hook">A beast stirs beneath an empire built on old ghosts—and the woman hunting it may be the only person who understands what it wants.</p>
          <div className="actions"><a className="button primary" href="#book">Discover the book <Arrow /></a><span className="button muted" aria-label="Preorder coming soon">Preorder soon</span></div>
        </div>
        <a className="scroll-cue" href="#book"><span>Descend</span><i aria-hidden="true" /></a>
      </section>

      <section className="book section" id="book">
        <div className="section-number">I</div>
        <div className="book-copy reveal">
          <p className="eyebrow">Shadow of the Beast</p>
          <h2>Some monsters<br />remember your name.</h2><div className="rule" />
          <p className="lead">In Deyvos, power leaves a mark. The dead linger. And every bargain with magic asks for something in return.</p>
          <p>When an impossible creature begins moving through the edges of the known world, its trail draws together enemies, believers, and survivors—each carrying a different version of the truth.</p>
          <a className="text-link" href="#letters">Be first to hear when it arrives <Arrow /></a>
        </div>
        <blockquote className="pullquote reveal"><span>“</span>The old stories never said the beast was evil. Only hungry.</blockquote>
      </section>

      <section className="world section" id="world">
        <div className="world-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="world-content reveal">
          <p className="eyebrow">Enter Deyvos</p><h2>A world haunted<br />by what it worships.</h2>
          <p className="lead">Across the old stones of Telmut, memory is a kind of weather. Ghosts gather where history has been buried, and magic lives in the distance between what happened and what people choose to believe.</p>
          <div className="world-notes">
            <div><b>Telmut</b><span>An ancient city of stone, ritual, and uneasy inheritance.</span></div>
            <div><b>The Unseen</b><span>Presences at the edge of perception—felt long before they are understood.</span></div>
            <div><b>Old Magic</b><span>Intimate, costly, and never entirely under anyone’s control.</span></div>
          </div>
        </div>
      </section>

      <section className="author section" id="author">
        <div className="author-mark" aria-hidden="true">AR</div>
        <div className="author-copy reveal"><p className="eyebrow">About the author</p><h2>AJ Reid</h2><p className="lead">AJ Reid writes dark fantasy about strange magic, complicated people, and the things that follow us home.</p><p><em>Shadow of the Beast</em> is the first book of Deyvos.</p></div>
      </section>

      <section className="letters section" id="letters">
        <div className="letters-inner reveal"><p className="eyebrow">Dispatches from Deyvos</p><h2>Come closer.<br />The dark has news.</h2><p>Occasional letters about the book, the world behind it, and where AJ will be next. No noise. No ravens sold to third parties.</p>
          <form action="mailto:hello@deyvosbooks.com" method="post" encType="text/plain"><label className="sr-only" htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="Your email address" required /><button type="submit">Join the list <Arrow /></button></form><small>Unsubscribe whenever you wish.</small>
        </div>
      </section>

      <section className="news section" id="news">
        <div className="news-heading"><p className="eyebrow">From the road</p><h2>Latest news<br />& appearances</h2></div>
        <div className="news-list"><article><time>Coming soon</time><h3>Shadow of the Beast</h3><p>Cover reveals, publication news, and preorder details will appear here first.</p></article><article><time>Events</time><h3>Meet AJ Reid</h3><p>Readings, conventions, and signings will be announced as dates are confirmed.</p></article></div>
      </section>

      <footer><a className="wordmark" href="#top"><span className="sigil">A</span><span>AJ REID</span></a><p>Dark fantasy. Strange magic. Complicated people.</p><div><a href="mailto:hello@deyvosbooks.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
