import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const VisibilityWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when element comes into view
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={isVisible ? 'visible-class' : 'hidden-class'}>
      {children}
    </div>
  );
};

export default VisibilityWrapper;