import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  className = '',
  yOffset = 40, // Większe przesunięcie od dołu
  duration = 0.1, // Wolniejsze pojawianie
  easing = [0.12, 0.23, 0.29, 0.99] // Bardziej płynne wyjście
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '-2% 0px' // Wcześniejsze aktywowanie
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: yOffset,
      transition: {
        duration: duration * 0.7,
        ease: easing
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        mass: 0.5,
        delay: delay,
        duration: duration,
        ease: easing,
        when: "beforeChildren"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{
        willChange: 'opacity, transform',
        transformOrigin: 'bottom' // Punkt wyjścia animacji
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;