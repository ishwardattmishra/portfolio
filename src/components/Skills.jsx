import { useRef, useEffect } from 'preact/hooks';
import { useReveal } from '../hooks/useReveal';

function SkillCard({ id, icon, title, tags, index }) {
  const cardRef = useRef(null);
  useReveal(cardRef);

  return (
    <div 
      class="skill-card" 
      id={id} 
      ref={cardRef}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div class="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <div class="skill-tags">
        {tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
    </div>
  );
}

export function Skills() {
  const skillsData = [
    {
      id: "skill-backend",
      icon: "⚙️",
      title: "Backend",
      tags: ["Node.js", "Express.js", "NestJS", "C# .NET Core 8", "TypeScript", "REST APIs", "GraphQL (Apollo)"]
    },
    {
      id: "skill-ai",
      icon: "🤖",
      title: "AI / ML",
      tags: ["OpenAI API", "LangChain", "LLM Integration", "Prompt Engineering", "RAG", "MCP Servers", "Semantic Search", "Token Governance"]
    },
    {
      id: "skill-db",
      icon: "🗄️",
      title: "Databases",
      tags: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "OpenSearch / Elasticsearch", "RealmDB"]
    },
    {
      id: "skill-messaging",
      icon: "📨",
      title: "Messaging",
      tags: ["Kafka", "RabbitMQ", "Event-driven Architecture"]
    },
    {
      id: "skill-cloud",
      icon: "☁️",
      title: "Cloud & DevOps",
      tags: ["AWS (EC2, S3, RDS, Lambda, CloudFront)", "Docker", "Kubernetes (EKS)", "GitHub Actions", "Jenkins"]
    },
    {
      id: "skill-testing",
      icon: "🧪",
      title: "Testing & Quality",
      tags: ["Jest", "Mocha", "Chai", "NUnit", "SonarQube", "TDD", "Coverage-gated CI"]
    },
    {
      id: "skill-security",
      icon: "🔐",
      title: "Security",
      tags: ["OAuth2", "JWT", "API Auth/Authorization", "Security Audits"]
    },
    {
      id: "skill-leadership",
      icon: "🎯",
      title: "Leadership",
      tags: ["Technical RFCs", "Architecture Review", "Hiring Rubric", "Cross-team Alignment", "Roadmap Planning", "Mentorship"]
    }
  ];

  return (
    <section id="skills">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">// skills</span>
          <h2>Technical Stack</h2>
        </div>
        <div class="skills-grid">
          {skillsData.map((skill, i) => (
            <SkillCard key={skill.id} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
