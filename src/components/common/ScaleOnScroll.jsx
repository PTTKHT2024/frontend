import React, { useEffect, useRef, useState } from 'react';

const ScaleOnScroll = ({ children }) => {
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
    <section ref={sectionRef} className="relative">
      <div
        className={`transition-all duration-[600ms] ease-in-out transform ${
          isVisible ? 'scale-100' : 'scale-110'
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default ScaleOnScroll;
