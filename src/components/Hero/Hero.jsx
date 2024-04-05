import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const  Hero= () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Manish</h1>
        <p className={styles.description}>I'm a frontend developer with experiance in React. Reach out if you would like to learn more.</p>
        <a href="mailto:manishkumarprasad418@gmail.com" 
          className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img 
        className={styles.heroImg} 
        src={getImageUrl("hero/hero.png")}
      />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>

  )
}
