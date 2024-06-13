import { useEffect, useRef, useState } from 'react';

const Jumping = ({ children }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`transition-all duration-[600ms] ease-in-out transform ${
        isVisible ? 'translate-y-0' : 'translate-y-[35px]'
      }`}
    >
      {children}
    </section>
  );
};

export default Jumping;
