// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ============================================
// MOBILE MENU
// ============================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
// Close on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observerOptions = { rootMargin: '-40% 0px -55% 0px' };
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const revealElements = document.querySelectorAll(
  '.timeline-card, .skill-card, .oss-card, .article-card, .contact-card, .about-grid, .cert-badge, .hero-stats'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ============================================
// STAGGERED SKILL CARDS
// ============================================
document.querySelectorAll('.skill-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
});

document.querySelectorAll('.oss-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});

// ============================================
// TYPING EFFECT ON HERO SUBTITLE
// ============================================
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
  const text = heroSubtitle.textContent;
  heroSubtitle.textContent = '';
  heroSubtitle.style.borderRight = '2px solid #63b3ed';

  let i = 0;
  const type = () => {
    if (i < text.length) {
      heroSubtitle.textContent += text[i];
      i++;
      setTimeout(type, 60);
    } else {
      // Remove cursor blinking after done (after a delay)
      setTimeout(() => {
        heroSubtitle.style.borderRight = 'none';
      }, 2000);
    }
  };
  setTimeout(type, 800);
}

// ============================================
// ANIMATED COUNTERS IN HERO STATS
// ============================================
function animateCounter(el, target, suffix = '') {
  const duration = 1500;
  const start = performance.now();
  const isDecimal = String(target).includes('.');

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
      document.querySelectorAll('.stat-num').forEach(el => {
        const text = el.textContent;
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

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ============================================
// SMOOTH CURSOR GLOW EFFECT
// ============================================
let lastX = 0, lastY = 0;
document.addEventListener('mousemove', (e) => {
  lastX = e.clientX;
  lastY = e.clientY;
});

// ============================================
// CARD TILT EFFECT
// ============================================
document.querySelectorAll('.oss-card, .contact-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    card.style.transform = `translateY(-4px) perspective(600px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease';
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
  });
});
