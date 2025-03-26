'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 10,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ViewportAnimatedSection = ({
  children,
  threshold,
}: {
  children: React.ReactNode;
  threshold: number;
}) => {
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

export default ViewportAnimatedSection;
