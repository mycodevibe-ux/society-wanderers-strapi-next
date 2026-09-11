'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ScrollReveal.module.css';

/**
 * High-End Luxury Viewport Scroll Reveal Component
 * Optimized for instant, effortless visibility on scroll.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-scale' | 'fade'} [props.animation='fade-up']
 * @param {number} [props.delay=0] - Delay in milliseconds
 * @param {number} [props.duration=480] - Duration in milliseconds (fast & responsive)
 * @param {number} [props.threshold=0.02] - Triggers as soon as 2% is visible
 * @param {string} [props.rootMargin='0px 0px 80px 0px'] - Triggers 80px before entering viewport for zero wait time
 * @param {string} [props.as='div'] - Element tag to render
 * @param {boolean} [props.staggerChildren=false] - Whether to stagger direct child elements
 * @param {number} [props.staggerDelay=50] - Delay between each child in milliseconds
 * @param {string} [props.className=''] - Extra classes
 * @param {Object} [props.style={}] - Extra inline styles
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 480,
  threshold = 0.02,
  rootMargin = '0px 0px 80px 0px',
  as: Component = 'div',
  staggerChildren = false,
  staggerDelay = 50,
  className = '',
  style = {},
  ...rest
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, rootMargin]);

  // Combine animation classes
  const animClass = styles[`anim_${animation.replace('-', '_')}`] || styles.anim_fade_up;
  const revealClass = isRevealed ? styles.isRevealed : styles.isPending;
  const staggerClass = staggerChildren ? styles.staggerContainer : '';

  const combinedStyles = {
    ...style,
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
    ...(duration ? { transitionDuration: `${duration}ms` } : {}),
    ...(staggerChildren ? { '--stagger-delay': `${staggerDelay}ms` } : {}),
  };

  return (
    <Component
      ref={elementRef}
      className={`${styles.revealWrapper} ${animClass} ${revealClass} ${staggerClass} ${className}`.trim()}
      style={combinedStyles}
      {...rest}
    >
      {children}
    </Component>
  );
}
