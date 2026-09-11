import styles from './HeroBanner.module.css';

export default function HeroBanner({ 
  title, 
  subtitle, 
  imageSrc, 
  height = 'large',
  align = 'left',
  overlay = true 
}) {
  return (
    <section className={`${styles.hero} ${styles[`hero--${height}`]}`} id="hero-banner">
      <div className={styles.imageWrapper}>
        <img
          src={imageSrc || '/images/banner.png'}
          alt={title || 'HSW Global'}
          className={styles.image}
        />
        {overlay && <div className={styles.overlay} />}
      </div>
      
      <div className={`${styles.content} ${styles[`content--${align}`]}`}>
        <div className={styles.container}>
          {title && (
            <h1 className={styles.title}>{title}</h1>
          )}
          {subtitle && (
            <p className={styles.subtitle}>{subtitle}</p>
          )}
        </div>
      </div>
      
      <div className={styles.goldBar} />
    </section>
  );
}
