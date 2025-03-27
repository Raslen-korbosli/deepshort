'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({
  children,
  threshold,
  delay = 0,
}: {
  children: React.ReactNode;
  threshold: number;
  delay?: number;
}) => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 10,

      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: delay === 0 ? 0 : delay,
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="h-full"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
