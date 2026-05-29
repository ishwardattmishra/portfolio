import { useRef } from 'preact/hooks';
import { useReveal } from '../hooks/useReveal';
import data from '../../data.json';

function CertCard({ cert }) {
  const cardRef = useRef(null);
  useReveal(cardRef);
  
  const content = (
    <>
      <div class="cert-card-top">
        <div class="cert-icon">{cert.icon}</div>
        {cert.url && cert.url !== '#' && <div class="cert-arrow">↗</div>}
      </div>
      <div>
        <div class="cert-name">{cert.name}</div>
        <div class="cert-sub">{cert.sub}</div>
      </div>
    </>
  );

  if (cert.url && cert.url !== '#') {
    return (
      <a href={cert.url} target="_blank" rel="noopener" class="cert-badge" id={cert.id} ref={cardRef}>
        {content}
      </a>
    );
  }

  return (
    <div class="cert-badge" id={cert.id} ref={cardRef}>
      {content}
    </div>
  );
}

export function Certifications() {
  const gridRef = useRef(null);
  useReveal(gridRef);

  return (
    <section id="certifications">
      <div class="container">
        <div class="section-header centered">
          <span class="section-tag">// credentials</span>
          <h2>Certifications</h2>
          <div class="section-sub">Professional achievements and verified credentials.</div>
        </div>
        <div class="certs-grid" ref={gridRef}>
          {data.certifications.map(cert => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
