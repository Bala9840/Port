import React from 'react';
import styles from './Page.module.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className={styles.content}>
        <h1 className="section-title">About Me</h1>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>I'm an innovative Full Stack Developer with expertise in modern web technologies.</p>
            <p>With several years of experience, I've helped companies build robust web applications that scale.</p>
          </div>
          <div className={styles.skills}>
            <h3>My Skills</h3>
            <ul>
              <li>React & React Native</li>
              <li>Node.js & Express</li>
              <li>JavaScript & TypeScript</li>
              <li>Responsive Design</li>
              <li>UI/UX Principles</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
