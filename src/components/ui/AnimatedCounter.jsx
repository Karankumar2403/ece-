import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../lib/useIntersectionObserver';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(ref);

  useEffect(() => {
    if (!isIntersecting) return;

    let startTimestamp = null;
    let endValue = parseInt(end.toString().replace(/\D/g, ''));
    if (isNaN(endValue)) endValue = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentVal = Math.floor(progress * endValue);
      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [isIntersecting, end, duration]);

  return (
    <span ref={ref} className="font-display font-bold text-4xl text-cyan-400">
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
