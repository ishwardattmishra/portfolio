import { useRef } from 'preact/hooks';
import { useReveal } from '../hooks/useReveal';
import { useTilt } from '../hooks/useTilt';
import data from '../../data.json';

function OSSCard({ project, index }) {
  const cardRef = useRef(null);
  useReveal(cardRef);
  useTilt(cardRef);

  return (
    <a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener"
      class="oss-card"
      id={project.id}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div class="oss-card-top">
        <div class="oss-icon">{project.icon}</div>
        <div class="oss-arrow">↗</div>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div class="oss-lang">
        <span class={`lang-dot ${project.dotClass}`}></span>
        {project.technologies}
      </div>
    </a>
  );
}

export function OSS() {
  const ossList = data.openSourceContributions;

  return (
    <section id="oss">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">// open source</span>
          <h2>OSS Contributions</h2>
        </div>
        <div class="oss-grid">
          {ossList.map((project, index) => (
            <OSSCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
