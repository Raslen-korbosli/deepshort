'use client';
import { useEffect, useRef, useState } from 'react';

export default function FadeInHook({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );
    observer.observe(currentRef);
    setIsMounted(true);
    return () => observer.unobserve(currentRef);
  }, []);
  return (
    <div
      className={`fade-in-section ${
        isVisible && isMounted == true ? 'is-visible' : ''
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
