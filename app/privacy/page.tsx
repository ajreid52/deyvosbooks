/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy | AJ Reid",
  description: "How Books of Deyvos handles information submitted through newsletter forms, email, and embedded services.",
};

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <header className="site-header inner-header">
        <Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link>
        <nav aria-label="Main navigation"><Link href="/books">Books</Link><Link href="/stories">Stories</Link><Link href="/#world">Deyvos</Link><Link href="/#author">Author</Link><Link href="/newsletters">Newsletters</Link></nav>
      </header>

      <header className="privacy-hero">
        <p className="eyebrow">The practical details</p>
        <h1>Privacy</h1>
        <p>This page explains what information may be collected when you visit Books of Deyvos, join the mailing list, or get in touch.</p>
        <time dateTime="2026-11-02">Last updated November 2, 2026</time>
      </header>

      <article className="privacy-copy">
        <section>
          <h2>Information you choose to share</h2>
          <p>If you join Deyvos Letters or use the unsubscribe form, the information you enter is submitted through Google Forms. This may include your name, email address, and any other information requested on the form.</p>
          <p>If you contact AJ Reid by email, the email address, message, and other information you include will be received through Gmail.</p>
        </section>

        <section>
          <h2>How that information is used</h2>
          <p>Information submitted for Deyvos Letters is used to manage the mailing list and send the updates you requested. Contact messages are used to reply to you and keep an appropriate record of the conversation.</p>
          <p>Your personal information is not sold or rented. It may be disclosed if reasonably necessary to comply with the law, protect the site or its visitors, or prevent abuse.</p>
        </section>

        <section>
          <h2>Third-party services</h2>
          <p>This site links to Google Forms for mailing-list requests and uses Gmail for correspondence. Google processes information through those services under its <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.</p>
          <p>The homepage includes a YouTube video using YouTube&apos;s privacy-enhanced embed domain. Playing the video or opening it on YouTube may allow Google or YouTube to receive technical and usage information under their own policies.</p>
          <p>The website host and supporting infrastructure may process routine technical information—such as IP address, browser details, requested pages, timestamps, and security logs—to deliver and protect the site.</p>
        </section>

        <section>
          <h2>Cookies and analytics</h2>
          <p>Books of Deyvos does not currently run its own advertising or audience-analytics service. Embedded third-party content, including YouTube, may use cookies or similar browser storage according to the provider&apos;s settings and policies.</p>
        </section>

        <section>
          <h2>Retention and your choices</h2>
          <p>Mailing-list information is retained until you unsubscribe or ask for it to be removed. Correspondence may be kept for as long as reasonably useful for responding, recordkeeping, safety, or legal obligations.</p>
          <p>You may use the <a href="https://forms.gle/aRR929dYS9jQJazy7" target="_blank" rel="noreferrer">unsubscribe form</a> or email <a href="mailto:deyvosbooks@gmail.com">deyvosbooks@gmail.com</a> to ask about, correct, or remove information you submitted directly to AJ Reid.</p>
        </section>

        <section>
          <h2>Children&apos;s privacy</h2>
          <p>This site is not directed to children under 13, and AJ Reid does not knowingly collect personal information from children under 13. If you believe a child has submitted personal information, please get in touch so it can be removed.</p>
        </section>

        <section>
          <h2>Changes and contact</h2>
          <p>This notice may be updated when the site&apos;s services or practices change. The revision date above will show when that happens.</p>
          <p>Questions about this notice can be sent to <a href="mailto:deyvosbooks@gmail.com">deyvosbooks@gmail.com</a>.</p>
        </section>
      </article>

      <footer><Link className="wordmark" href="/" aria-label="Books of Deyvos home"><img src="/DeyvosLogo.png" alt="" aria-hidden="true" width="1083" height="1058" /><span>BOOKS OF DEYVOS</span></Link><p>Dark fantasy. Strange magic. Complicated people.</p><div><Link href="/stories">Stories</Link><Link href="/newsletters">Newsletters</Link><a href="mailto:deyvosbooks@gmail.com">Contact</a><span>© {new Date().getFullYear()} AJ Reid</span></div></footer>
    </main>
  );
}
