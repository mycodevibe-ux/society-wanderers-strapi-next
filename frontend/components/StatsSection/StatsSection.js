'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './StatsSection.module.css';

const DEFAULT_STATS = [
  { value: '24/7', label: 'CONCIERGE' },
  { value: '120+', label: 'DESTINATIONS' },
  { value: '1:1', label: 'TRIP DESIGNER' },
  { value: 'No', label: 'COMPROMISE' },
];

/**
 * Animated Stat Item with count-up animation and viewport detection
 */
function StatItem({ stat, index, inView }) {
  const [displayValue, setDisplayValue] = useState(stat.value);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!inView || animatedRef.current) return;
    animatedRef.current = true;

    const raw = String(stat.value || '').trim();
    const duration = 1800; // 1.8 seconds total
    const startTime = performance.now();

    // Determine type of counter
    if (raw === '24/7') {
      const target = 24;
      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.round(eased * target);
        setDisplayValue(`${current}/7`);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    } else if (raw === '120+') {
      const target = 120;
      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.round(eased * target);
        setDisplayValue(`${current}+`);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    } else if (raw === '1:1') {
      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        if (progress > 0.4) {
          setDisplayValue('1:1');
        } else {
          setDisplayValue('0:0');
        }
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    } else {
      // Default: show actual value
      setDisplayValue(stat.value);
    }
  }, [inView, stat.value]);

  return (
    <div
      className={`${styles.statItem} ${inView ? styles.statItemVisible : ''}`}
      style={{ transitionDelay: `${index * 140}ms` }}
    >
      <div className={styles.valueWrapper}>
        <span className={styles.value}>{displayValue}</span>
      </div>
      <div className={styles.accentLine} />
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}

export default function StatsSection({ stats = DEFAULT_STATS }) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Animate once
        }
      },
      {
        threshold: 0.2, // Trigger when 20% visible
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = stats && stats.length > 0 ? stats : DEFAULT_STATS;

  return (
    <div ref={containerRef} className={styles.statsRow}>
      {items.map((stat, i) => (
        <StatItem key={stat.label || i} stat={stat} index={i} inView={inView} />
      ))}
    </div>
  );
}
