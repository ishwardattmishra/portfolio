import { useRef } from 'preact/hooks';
import { useReveal } from '../hooks/useReveal';

function TimelineItem({ id, title, company, meta, project, stack, children, delay }) {
  const cardRef = useRef(null);
  useReveal(cardRef);
  
  return (
    <div class="timeline-item" id={id} style={{ animationDelay: `${delay}s` }}>
      <div class="timeline-marker"></div>
      <div class="timeline-card" ref={cardRef}>
        <div class="job-header">
          <div>
            <h3 class="job-title">{title}</h3>
            <div class="job-company">{company}</div>
            <div class="job-meta">{meta}</div>
          </div>
          {id === 'exp-monotype' && <div class="job-duration active-badge">Present</div>}
        </div>
        {project && <div class="job-project">{project}</div>}
        <div class="job-stack">
          {stack.map(s => <span key={s}>{s}</span>)}
        </div>
        {children}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">// experience</span>
          <h2>Work History</h2>
        </div>
        <div class="timeline">
          <TimelineItem
            id="exp-monotype"
            title="Lead Software Engineer"
            company="Monotype Solutions India Pvt. Ltd."
            meta="Aug 2021 – Present · Noida, India"
            project="Monotype Desktop App · NextGen App · Backend Platform"
            stack={['Node.js', 'NestJS', 'C# .NET Core 8', 'Apollo GraphQL', 'React', 'OpenAI API', 'LangChain', 'Kafka', 'Redis', 'MySQL', 'PostgreSQL', 'OpenSearch', 'AWS', 'EKS']}
            delay={0.1}
          >
            <div class="achievements">
              <div class="achievement-group">
                <div class="ach-label ai">AI</div>
                <ul>
                  <li>Built AI-powered font intelligence layer using OpenAI API & LangChain — semantic search, similarity detection, personalized recommendations — with token-budget monitoring reducing OpenAI spend by <strong>~30%</strong> and cutting p95 latency by <strong>40%</strong>.</li>
                  <li>Designed and implemented an MCP server enabling AI chatbot interfaces to securely invoke desktop font workflows via structured tool APIs, reducing downstream integration effort by <strong>~60%</strong>.</li>
                  <li>Implemented prompt engineering best practices and a RAG pipeline over font metadata using OpenSearch as a vector store, improving recommendation relevance scores by <strong>35%</strong>.</li>
                </ul>
              </div>
              <div class="achievement-group">
                <div class="ach-label arch">Architecture</div>
                <ul>
                  <li>Architected 10+ microservices using event-driven patterns (Kafka, RabbitMQ), improving system throughput by <strong>30%</strong>.</li>
                  <li>Authored 5+ technical RFCs, driving alignment across 3 engineering teams and accelerating delivery.</li>
                  <li>Scaled REST + GraphQL APIs to <strong>~5M daily requests</strong> with p99 &lt; 150ms and 99.9% uptime SLA.</li>
                </ul>
              </div>
              <div class="achievement-group">
                <div class="ach-label perf">Performance</div>
                <ul>
                  <li>Reduced database query response time by <strong>40%</strong> through optimized indexing, query restructuring, and Redis caching.</li>
                  <li>Raised test coverage from ~35% to <strong>82%</strong>, reducing post-release defects by 40%.</li>
                  <li>Led 6-week tech debt sprint migrating 4 services to NestJS, reducing codebase complexity by <strong>~40%</strong>.</li>
                </ul>
              </div>
              <div class="achievement-group">
                <div class="ach-label lead">Leadership</div>
                <ul>
                  <li>Led end-to-end development of Monotype Desktop & NextGen apps, managing a team of 6 engineers.</li>
                  <li>Conducted 30+ technical interviews; defined backend hiring rubric adopted by the wider org.</li>
                  <li>Mentored 6 engineers; 2 promoted to Senior SE within 18 months.</li>
                  <li>Integrated AI-assisted development workflows (Cursor, Claude Code) reducing feature delivery cycle time by <strong>20%</strong>.</li>
                </ul>
              </div>
            </div>
          </TimelineItem>

          <TimelineItem
            id="exp-qualitest"
            title="Senior Software Engineer"
            company="Qualitest Group (formerly QA Infotech)"
            meta="Jul 2019 – Aug 2021 · Noida, India"
            project="Kickboard for Schools"
            stack={['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Redis', 'AngularJS', 'PHP', 'AWS (EC2, RDS, CloudFront)']}
            delay={0.2}
          >
            <ul class="simple-achievements">
              <li>Led a cross-functional team of 12 delivering 3+ web applications at 99.5% uptime.</li>
              <li>Improved API performance from 500ms → <strong>200ms</strong> through query optimisation & Redis caching.</li>
              <li>Designed AWS infrastructure (CloudFront, EC2, RDS), cutting hosting costs by <strong>~20%</strong>.</li>
              <li>Designed and launched an Amazon Alexa Skill extending product accessibility to new user segments.</li>
              <li>Established code review standards reducing post-release defects by <strong>~35%</strong>.</li>
            </ul>
          </TimelineItem>

          <TimelineItem
            id="exp-donor"
            title="Software Engineer"
            company="Donor Concierge"
            meta="Jun 2017 – Apr 2019"
            stack={['Node.js', 'Express.js', 'AngularJS', 'MySQL', 'MongoDB', 'PHP']}
            delay={0.3}
          >
            <ul class="simple-achievements">
              <li>Built 5+ RESTful APIs in Node.js serving an AngularJS SPA with <strong>~50K monthly active users</strong>.</li>
              <li>Automated data scraping pipelines using Dexi, improving database accuracy by 25% and eliminating ~8 hrs/week of manual data entry.</li>
              <li>Optimised backend processing workflows, improving throughput by <strong>30%</strong> and reducing average job completion time by <strong>~45%</strong>.</li>
            </ul>
          </TimelineItem>
        </div>
      </div>
    </section>
  );
}
