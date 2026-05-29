import { useRef } from 'preact/hooks';
import { useReveal } from '../hooks/useReveal';
import data from '../../data.json';

function ArticleCard({ article, index }) {
  const cardRef = useRef(null);
  useReveal(cardRef);

  return (
    <a
      ref={cardRef}
      href={article.url}
      target="_blank"
      rel="noopener"
      class="article-card"
      id={article.id}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div class="article-meta">
        <span class="article-tag">{article.tag}</span>
        <span class="article-date">{article.date}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <span class="read-more">Read on Medium ↗</span>
    </a>
  );
}

export function Writing() {
  const blogList = data.technicalBlogs;

  return (
    <section id="writing">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">// writing</span>
          <h2>Technical Blog</h2>
          <p class="section-sub">Published on <a href="https://medium.com/@ishwardatt" target="_blank" rel="noopener">medium.com/@ishwardatt</a></p>
        </div>
        <div class="articles-list">
          {blogList.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
