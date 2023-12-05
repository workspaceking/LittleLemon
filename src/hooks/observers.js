import { useEffect, useState, useRef } from 'react';

const useSectionVisibility = (threshold = 0.5) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionVisible(true);
          } else {
            setIsSectionVisible(false);
          }
        });
      },
      { threshold },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return [sectionRef, isSectionVisible];
};

export default useSectionVisibility;
