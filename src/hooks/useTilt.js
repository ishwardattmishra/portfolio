import { useEffect, useRef } from 'preact/hooks';

export function useTilt(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const card = ref.current;
    
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      card.style.transform = `translateY(-4px) perspective(600px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s ease';
    };
    
    const handleMouseEnter = () => {
      card.style.transition = 'none';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [ref]);
}
