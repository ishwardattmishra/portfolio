import { useEffect, useRef } from 'preact/hooks';

export function Hero() {
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (subtitleRef.current) {
      const el = subtitleRef.current;
      const text = 'Node.js · .NET Core · AI Backend';
      el.textContent = '';
      el.style.borderRight = '2px solid #3b82f6';

      let i = 0;
      const type = () => {
        if (i < text.length) {
          el.textContent += text[i];
          i++;
          setTimeout(type, 60);
        } else {
          setTimeout(() => {
            el.style.borderRight = 'none';
          }, 2000);
        }
      };
      setTimeout(type, 800);
    }
  }, []);

  useEffect(() => {
    function animateCounter(el, target, suffix = '') {
      const duration = 1500;
      const start = performance.now();

      const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(update);
    }

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stats = statsRef.current.querySelectorAll('.stat-num');
          stats.forEach(el => {
            const text = el.getAttribute('data-val');
            const hasPlus = text.includes('+');
            const hasM = text.includes('M');
            const num = parseFloat(text.replace(/[^0-9.]/g, ''));
            const suffix = hasPlus ? '+' : hasM ? 'M' : '';
            animateCounter(el, num, suffix);
          });
          statsObserver.disconnect();
        }
      });
    }, { threshold: 0.5 });

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }
    
    return () => {
      statsObserver.disconnect();
    };
  }, []);

  return (
    <section id="hero">
      <div class="hero-bg">
        <div class="grid-overlay"></div>
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Available for Senior/Lead roles
        </div>
        <h1 class="hero-name">Ishwar Datt<br /><span class="gradient-text">Mishra</span></h1>
        <p class="hero-title">Lead Software Engineer</p>
        <p class="hero-subtitle" ref={subtitleRef}>Node.js · .NET Core · AI Backend</p>
        <p class="hero-summary">
          8+ years building scalable backend systems & AI-powered applications.
          Architected platforms serving <strong>~5M daily requests</strong> at 99.9% SLA.
          Led teams of up to 12 engineers. AWS Certified.
        </p>
        <div class="hero-cta">
          <a href="#experience" class="btn btn-primary">View Experience</a>
          <a href="#contact" class="btn btn-ghost">Get in Touch</a>
        </div>
        <div class="hero-stats" ref={statsRef}>
          <div class="stat">
            <span class="stat-num reveal" data-val="8+">8+</span>
            <span class="stat-label">Years Exp.</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num reveal" data-val="5M">5M</span>
            <span class="stat-label">Daily Requests</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num reveal" data-val="12">12</span>
            <span class="stat-label">Engineers Led</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num reveal" data-val="10+">10+</span>
            <span class="stat-label">Microservices</span>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>
  );
}
