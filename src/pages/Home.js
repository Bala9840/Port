import React from 'react';
import styles from './Page.module.css';

const Home = () => {
  return (
    <section id="home" className="section">
      <div className={styles.content}>
        <h1 className="section-title">Welcome to My Portfolio</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Hi, I'm Selva Vishnu</h3>
            <p>Full Stack Developer passionate about creating innovative solutions.</p>
          </div>
          <div className={styles.card}>
            <h3>My Expertise</h3>
            <p>React, Node.js, Modern Web Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
