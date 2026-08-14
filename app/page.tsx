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
          <h1 id="hero-title">One life.<br />Two souls.</h1>
          <p className="hero-hook">Maret Beorn survived the birth that killed his twin. The brother who inherited their magic never truly left.</p>
          <div className="actions"><a className="button primary" href="#book">Discover the book <Arrow /></a><span className="button muted" aria-label="Preorder coming soon">Preorder soon</span></div>
        </div>
        <a className="scroll-cue" href="#book"><span>Descend</span><i aria-hidden="true" /></a>
      </section>

      <section className="book section" id="book">
        <div className="section-number">I</div>
        <div className="book-copy reveal">
          <p className="eyebrow">Shadow of the Beast</p>
          <h2>Born together.<br />Divided by death.</h2><div className="rule" />
          <p className="lead">The one born with power was stillborn. The one born without it lived—forever haunted by his brother’s ghastly potential.</p>
          <p>Maret Beorn, son of Telmut’s ruling family, has always been shunned for the imaginary friend no one else believes in. When the ghost attempts possession, the family can no longer deny what survived alongside him. Now they must decide: exorcise the brother who would have been a mage, or teach two souls bound to one life to wield his untold power.</p>
          <a className="text-link" href="#letters">Be first to hear when it arrives <Arrow /></a>
        </div>
        <div className="pullquote reveal"><span>II</span>How do you build a failsafe for a power no living person understands?</div>
      </section>

      <section className="world section" id="world">
        <div className="world-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="world-content reveal">
          <p className="eyebrow">Enter Deyvos</p><h2>Magic is running out.<br />The old powers are not.</h2>
          <p className="lead">Deyvos is leaving its age of magic behind. Nations turn toward mechanical invention as their oldest sources of power dwindle—but five centuries of sorcery, worship, and war have left debts that machinery cannot settle.</p>
          <div className="world-notes">
            <div><b>Alvan</b><span>The Territories mine failing seams of magic, believed to be the gathered might of their goddess.</span></div>
            <div><b>Ertenvaal</b><span>The living look to their ancestors for guidance through the trials still to come.</span></div>
            <div><b>Scarpan</b><span>Necromancers forge life force into objects—and sacrifice the living to survive the desert.</span></div>
          </div>
          <p className="world-warning">From Telmut, a curse is spreading. Every nation will feel the quake.</p>
        </div>
      </section>

      <section className="author section" id="author">
        <div className="author-mark" aria-hidden="true">AR</div>
        <div className="author-copy reveal"><p className="eyebrow">About the author</p><h2>AJ Reid</h2><p className="lead">AJ Reid writes dark fantasy about strange magic, complicated people, and heroes who live beyond the usual boundaries.</p><p>Based in North Carolina with a husband and two cats, AJ is a lifelong fantasy reader, musician, costume and prop maker, and active LARPer. <em>Shadow of the Beast</em> is the first book of Deyvos.</p></div>
      </section>

      <section className="letters section" id="letters">
        <div className="letters-inner reveal"><p className="eyebrow">Dispatches from Deyvos</p><h2>Come closer.<br />The dark has news.</h2><p>Occasional letters about the book, the world behind it, and where AJ will be next. No noise. No ravens sold to third parties.</p>
          <form action="mailto:hello@deyvosbooks.com" method="post" encType="text/plain"><label className="sr-only" htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="Your email address" required /><button type="submit">Join the list <Arrow /></button></form><small>Unsubscribe whenever you wish.</small>
        </div>
      </section>

      <section className="news section" id="news">
        <div className="news-heading"><p className="eyebrow">From the road</p><h2>Latest news<br />& appearances</h2></div>
        <div className="news-list"><article><time>In editing</time><h3>Shadow of the Beast</h3><p>The manuscript is being edited. Preorder news and the next look at Maret’s story will appear here first.</p></article><article><time>Events</time><h3>Meet AJ Reid</h3><p>Readings, conventions, LARP events, and signings will be announced as dates are confirmed.</p></article></div>
      </section>

      <footer><a className="wordmark" href="#top"><span className="sigil">A</span><span>AJ REID</span></a><p>Dark fantasy. Strange magic. Complicated people.</p><div><a href="mailto:hello@deyvosbooks.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
