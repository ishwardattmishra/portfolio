import { useEffect } from 'preact/hooks';

export function useReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    ref.current.classList.add('reveal');
    revealObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        revealObserver.unobserve(ref.current);
      }
    };
  }, [ref]);
}
