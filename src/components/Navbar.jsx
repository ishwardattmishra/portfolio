import { useEffect, useState } from 'preact/hooks';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = { rootMargin: '-40% 0px -55% 0px' };
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
    
    return () => {
      sections.forEach(section => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <nav id="navbar" class={scrolled ? 'scrolled' : ''}>
      <div class="nav-inner">
        <div class="nav-logo">IDM<span class="dot">.</span></div>
        <ul class="nav-links">
          <li><a href="#about" class={activeLink === '#about' ? 'active' : ''}>About</a></li>
          <li><a href="#experience" class={activeLink === '#experience' ? 'active' : ''}>Experience</a></li>
          <li><a href="#skills" class={activeLink === '#skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#certifications" class={activeLink === '#certifications' ? 'active' : ''}>Certifications</a></li>
          <li><a href="#oss" class={activeLink === '#oss' ? 'active' : ''}>Open Source</a></li>
          <li><a href="#writing" class={activeLink === '#writing' ? 'active' : ''}>Writing</a></li>
          <li><a href="#contact" class={`nav-cta ${activeLink === '#contact' ? 'active' : ''}`}>Contact</a></li>
        </ul>
        <button 
          class="mobile-menu-btn" 
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
        <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
        <a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
        <a href="#oss" onClick={() => setMobileMenuOpen(false)}>Open Source</a>
        <a href="#writing" onClick={() => setMobileMenuOpen(false)}>Writing</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}
