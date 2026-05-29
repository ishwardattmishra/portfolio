import { useRef } from 'preact/hooks';
import { useTilt } from '../hooks/useTilt';

function ContactCard({ id, icon, label, val, href }) {
  const cardRef = useRef(null);
  useTilt(cardRef);

  return (
    <a href={href} target={href.startsWith('mailto') ? undefined : "_blank"} rel="noopener" class="contact-card" id={id} ref={cardRef}>
      <div class="contact-icon">{icon}</div>
      <div class="contact-label">{label}</div>
      <div class="contact-val">{val}</div>
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact">
      <div class="container">
        <div class="contact-inner">
          <div class="contact-glow"></div>
          <div class="section-header centered">
            <span class="section-tag">// contact</span>
            <h2>Let's Work Together</h2>
            <p class="contact-desc">
              I'm open to senior/lead backend engineering opportunities — especially those involving
              distributed systems, AI integration, or platform engineering.
            </p>
          </div>
          <div class="contact-cards">
            <ContactCard
              id="contact-email"
              icon="✉️"
              label="Email"
              val="ishwardatt.mishra@gmail.com"
              href="mailto:ishwardatt.mishra@gmail.com"
            />
            <ContactCard
              id="contact-linkedin"
              icon="💼"
              label="LinkedIn"
              val="ishwar-datt-mishra"
              href="https://linkedin.com/in/ishwar-datt-mishra-71089712a"
            />
            <ContactCard
              id="contact-github"
              icon="⚡"
              label="GitHub"
              val="ishwardattmishra"
              href="https://github.com/ishwardattmishra"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
